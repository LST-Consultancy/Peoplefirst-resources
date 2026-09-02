import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  website?: string;
  vertical?: string;
  recruiters?: string;
  support?: string;
  volume?: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL
  );
}

async function storeSubmission(entry: ContactPayload & { receivedAt: string }) {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(SUBMISSIONS_FILE, JSON.stringify(entry) + "\n", "utf8");
}

async function sendEmail(entry: ContactPayload & { receivedAt: string }) {
  const nodemailer = await import("nodemailer");

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    from: `"PeopleFirst Resources Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: entry.email,
    subject: `New RPO inquiry from ${entry.name}${entry.company ? ` (${entry.company})` : ""}`,
    text: [
      `Name: ${entry.name}`,
      `Company: ${entry.company || "-"}`,
      `Work Email: ${entry.email}`,
      `Phone: ${entry.phone || "-"}`,
      `Company Website: ${entry.website || "-"}`,
      `Staffing Vertical: ${entry.vertical || "-"}`,
      `Number of Recruiters Needed: ${entry.recruiters || "-"}`,
      `Recruiting Support Needed: ${entry.support || "-"}`,
      `Current Job / Hiring Volume: ${entry.volume || "-"}`,
      "",
      "Message:",
      entry.message,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, work email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const entry = {
    name,
    company: body.company?.trim() || "",
    email,
    phone: body.phone?.trim() || "",
    website: body.website?.trim() || "",
    vertical: body.vertical?.trim() || "",
    recruiters: body.recruiters?.trim() || "",
    support: body.support?.trim() || "",
    volume: body.volume?.trim() || "",
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    if (isSmtpConfigured()) {
      await sendEmail(entry);
    } else {
      await storeSubmission(entry);
    }
  } catch (error) {
    console.error("Failed to process contact submission:", error);
    try {
      await storeSubmission(entry);
    } catch (storeError) {
      console.error("Failed to store contact submission fallback:", storeError);
      return NextResponse.json(
        { error: "We couldn't process your message right now. Please try again shortly." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}

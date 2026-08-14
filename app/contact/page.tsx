import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | PeopleFirst Resources",
  description:
    "Get in touch with PeopleFirst Resources to hire talent or apply for a job. We respond within one business day.",
};

const contactDetails = [
  { label: "Phone", value: "(800) 555-1234", href: "tel:+18005551234" },
  { label: "Email", value: "info@peoplefirstresources.com", href: "mailto:info@peoplefirstresources.com" },
  { label: "Address", value: "1200 Main Street, Suite 400, Dallas, TX 75201" },
  { label: "Hours", value: "Mon - Fri, 8:00 AM - 6:00 PM CT" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact Us
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about your staffing needs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hiring or job hunting — either way, a member of our team will follow up within one
            business day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
              Contact Details
            </h2>
            <ul className="mt-6 space-y-6">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 block text-base text-ink-800 transition-colors hover:text-blue-600"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-ink-800">{detail.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillRole = searchParams.get("role") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-green-500/20 bg-green-50 p-6 text-ink-800"
        >
          <p className="font-semibold text-green-500">Thanks for reaching out!</p>
          <p className="mt-1 text-sm">
            Your message has been received. A member of our team will follow up within one
            business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink-800">
                Full Name *
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-800">
                Email *
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink-800">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-ink-800">
                I am a...
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                defaultValue={prefillRole ? "candidate" : "employer"}
                className={fieldClass}
              >
                <option value="employer">Employer looking to hire</option>
                <option value="candidate">Candidate looking for work</option>
                <option value="other">Other inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-ink-800">
              Company (if applicable)
            </label>
            <input id="company" name="company" type="text" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink-800">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              defaultValue={prefillRole ? `I'm interested in applying for: ${prefillRole}\n\n` : ""}
              className={fieldClass}
            />
          </div>

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-red-600"
            >
              {errorMessage}
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

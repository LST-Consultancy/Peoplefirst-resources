"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10";

const labelClass = "block text-sm font-medium text-ink-800";

const staffingVerticals = [
  "IT Staffing",
  "Non-IT Staffing",
  "Life Sciences & Pharmaceutical",
  "Construction",
  "Finance & Accounting",
  "Engineering",
  "Sales & Professional Staffing",
  "Other",
];

const recruiterCounts = ["1", "2 - 3", "4 - 6", "7 - 10", "10+", "Not sure yet"];

const supportTypes = [
  "Dedicated Recruiters",
  "Talent Sourcers",
  "Hybrid Recruiters & Sourcers",
  "Full-Cycle RPO",
  "Partial / Hybrid RPO",
  "Project & High-Volume RPO",
  "Not sure yet",
];

export default function ContactForm() {
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
          <p className="font-semibold text-green-500">Thank you for reaching out.</p>
          <p className="mt-1 text-sm">
            Your details have been received. One of our RPO specialists will follow up with you
            shortly to discuss your recruiting needs.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name *
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>
                Company *
              </label>
              <input id="company" name="company" type="text" required className={fieldClass} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Work Email *
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="website" className={labelClass}>
                Company Website
              </label>
              <input
                id="website"
                name="website"
                type="text"
                placeholder="https://"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="vertical" className={labelClass}>
                Staffing Vertical
              </label>
              <select id="vertical" name="vertical" defaultValue="" className={fieldClass}>
                <option value="">Select a vertical</option>
                {staffingVerticals.map((vertical) => (
                  <option key={vertical} value={vertical}>
                    {vertical}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="recruiters" className={labelClass}>
                Number of Recruiters Needed
              </label>
              <select id="recruiters" name="recruiters" defaultValue="" className={fieldClass}>
                <option value="">Select a number</option>
                {recruiterCounts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="support" className={labelClass}>
                Recruiting Support Needed
              </label>
              <select id="support" name="support" defaultValue="" className={fieldClass}>
                <option value="">Select support type</option>
                {supportTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="volume" className={labelClass}>
              Current Job / Hiring Volume
            </label>
            <input
              id="volume"
              name="volume"
              type="text"
              placeholder="e.g. 15 - 20 open roles per month"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message *
            </label>
            <textarea id="message" name="message" required rows={5} className={fieldClass} />
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

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
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
                "Talk to an RPO Expert"
              )}
            </motion.button>
            <a
              href="mailto:info@peoplefirstresources.com?subject=Request%20a%20Consultation"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-blue-500 hover:text-blue-600"
            >
              Request a Consultation
            </a>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

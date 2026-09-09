"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "What is Offshore RPO?",
    answer:
      "Offshore RPO is a recruitment outsourcing model where dedicated recruiting professionals work from an offshore location as an extension of your staffing team. PeopleFirst Resources provides the recruiters, tools, infrastructure, and support while your team maintains its recruiting process and expectations.",
  },
  {
    question: "How does an offshore recruiter work with a U.S. staffing firm?",
    answer:
      "Our recruiters work as part of your recruiting operation. They follow your recruiting process, communication style, culture, working hours, and expectations while supporting your day-to-day recruiting activities.",
  },
  {
    question: "Can I hire just one recruiter?",
    answer:
      "Yes. You can start with a single dedicated recruiter or sourcer and scale the team as your recruiting needs grow.",
  },
  {
    question: "Can you build a complete offshore recruiting team?",
    answer:
      "Yes. We can build a team that includes dedicated recruiters, sourcers, or hybrid resources based on your job volume and recruiting requirements.",
  },
  {
    question: "Who provides the recruiting tools and infrastructure?",
    answer:
      "PeopleFirst Resources provides the tools, infrastructure, and working environment needed by the offshore recruiting team. You do not need to build the offshore setup yourself.",
  },
  {
    question: "Do your recruiters work in our ATS?",
    answer:
      "Yes. Your recruiters can work within your ATS and follow the systems and recruiting workflow you use.",
  },
  {
    question: "Can you support IT and non-IT staffing?",
    answer:
      "Yes. We can support a range of staffing verticals, including IT, healthcare, non-IT, life sciences, pharmaceutical, finance, engineering, sales, and professional staffing.",
  },
  {
    question: "Can we scale the team?",
    answer:
      "Yes. Team size can be adjusted as your recruiting volume and business needs change.",
  },
  {
    question: "How do you measure recruiter performance?",
    answer:
      "Performance can be measured using agreed recruiting KPIs and reporting, based on the activities and outcomes that matter to your staffing business.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <Reveal className="mt-12" delay={0.1}>
        <div className="mx-auto max-w-4xl divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-surface-alt"
                >
                  <span className="text-base font-semibold text-ink-800">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-ink-600"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-6 text-ink-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Dedicated Recruiters",
    description:
      "Experienced offshore recruiters who become an extension of your staffing team and work according to your recruiting process, culture, working style, and expectations.",
  },
  {
    title: "Talent Sourcers",
    description:
      "Dedicated sourcing professionals focused on identifying, engaging, and building qualified candidate pipelines for your open positions.",
  },
  {
    title: "Hybrid Recruiters & Sourcers",
    description:
      "Flexible recruiting professionals who can support both sourcing and recruiting responsibilities based on your team's needs.",
  },
  {
    title: "Full-Cycle RPO",
    description:
      "A dedicated offshore recruiting team supporting the recruitment lifecycle from sourcing and screening through candidate engagement, submissions, follow-up, and recruiting coordination.",
  },
  {
    title: "Partial / Hybrid RPO",
    description:
      "Add offshore recruiting capacity to specific parts of your existing process while your internal team continues to handle the rest.",
  },
  {
    title: "Project & High-Volume RPO",
    description:
      "Scale recruiting support for high-volume hiring, new accounts, urgent hiring needs, or time-bound recruiting projects.",
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function Services() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    let next: number | null = null;
    if (event.key in keys) next = (active + keys[event.key] + services.length) % services.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = services.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const current = services[active];

  return (
    <section id="services" className="bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Recruitment Process Outsourcing{" "}
            <span className="text-accent-500">Built for Staffing Firms</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-600">
            PeopleFirst Resources provides offshore RPO solutions designed specifically for U.S.
            staffing firms. Add dedicated recruiting capacity without the time, cost, and
            complexity of building an entire in-house recruiting team.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10" delay={0.1}>
          {/* numbered selector */}
          <div
            role="tablist"
            aria-label="RPO services"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {services.map((service, i) => {
              const selected = i === active;
              return (
                <button
                  key={service.title}
                  ref={(node) => {
                    tabRefs.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`service-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="service-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors duration-300 lg:w-full ${
                    selected
                      ? "border-transparent text-white"
                      : "border-line bg-white text-ink-800 hover:border-accent-500/40"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="service-tab-bg"
                      className="absolute inset-0 bg-gradient-to-r from-navy-900 to-brand-navy"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span
                    className={`relative font-mono text-sm font-semibold tabular-nums ${
                      selected ? "text-brand-sky" : "text-accent-600"
                    }`}
                  >
                    {pad(i)}
                  </span>
                  <span className="relative whitespace-nowrap text-sm font-semibold sm:text-base lg:flex-1 lg:whitespace-normal">
                    {service.title}
                  </span>
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    className={`relative hidden h-4 w-4 shrink-0 transition-all duration-300 lg:block ${
                      selected
                        ? "translate-x-0 text-brand-sky opacity-100"
                        : "-translate-x-2 text-accent-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    <path d="M4 9h10M10 5l4 4-4 4" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* panel */}
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${active}`}
            className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10"
          >
            {/* oversized index number as a watermark */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={`num-${active}`}
                aria-hidden
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[10rem] font-bold leading-none text-accent-50 sm:text-[13rem]"
              >
                {pad(active)}
              </motion.span>
            </AnimatePresence>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-brand-sky), transparent 70%)" }}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.165, 0.84, 0.44, 1] }}
                className="relative flex h-full flex-col"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-xl text-accent-600">
                  ∞
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-ink-600">{current.description}</p>
                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
                  >
                    Discuss Your RPO Requirements
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

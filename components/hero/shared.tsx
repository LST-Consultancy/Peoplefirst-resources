"use client";

import { motion } from "framer-motion";

export const HERO_EYEBROW = "Offshore RPO & Recruitment Solutions";

export const HERO_BODY =
  "Build a stronger recruiting team without the overhead of traditional hiring. PeopleFirst Resources provides experienced offshore recruiters and recruitment professionals who work as an extension of your team—helping U.S. staffing firms source faster, recruit smarter, and scale with confidence.";

export const SERVICE_TICKER = [
  "Dedicated Recruiters",
  "Talent Sourcers",
  "Hybrid Recruiters & Sourcers",
  "Full-Cycle RPO",
  "Partial / Hybrid RPO",
  "Project & High-Volume RPO",
  "U.S. Time-Zone Alignment",
  "Managed Support",
];

export function Eyebrow({ delay = 0.1 }: { delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-600 backdrop-blur"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
      </span>
      {HERO_EYEBROW}
    </motion.p>
  );
}

export function HeroCtas({ delay = 0.6, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={`flex flex-wrap gap-4 ${className}`}
    >
      <a
        href="#build-your-team"
        className="group relative overflow-hidden rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-teal/40"
      >
        {/* fill sweeps in from the left on hover */}
        <span className="absolute inset-0 -translate-x-full bg-brand-teal transition-transform duration-500 ease-out group-hover:translate-x-0" />
        <span className="relative flex items-center gap-1.5">
          Build Your Recruiting Team
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </a>
      <a
        href="#contact"
        className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink-800 backdrop-blur transition-colors duration-300 hover:border-accent-500/40 hover:text-accent-600"
      >
        Talk to an RPO Expert
      </a>
    </motion.div>
  );
}

export function ServiceTicker({ delay = 1.4 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      className="relative border-t border-line bg-white/60 py-4 backdrop-blur-sm [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      {/* content is rendered twice so the -50% marquee loops seamlessly; the copy is hidden from screen readers */}
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {SERVICE_TICKER.map((item) => (
              <li key={item} className="flex items-center gap-8 pr-8 text-sm font-medium tracking-wide text-ink-600">
                {item}
                <span className="text-accent-500/60">∞</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.div>
  );
}

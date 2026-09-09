"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-900 text-white">
      <HeroBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-semibold uppercase tracking-widest text-brand-sky"
        >
          Offshore RPO &amp; Recruitment Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Offshore RPO Solutions Built for U.S. Staffing Firms
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
        >
          Build a stronger recruiting team without the overhead of traditional hiring.
          PeopleFirst Resources provides experienced offshore recruiters and recruitment
          professionals who work as an extension of your team—helping U.S. staffing firms
          source faster, recruit smarter, and scale with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#build-your-team"
            className="group rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            <span className="flex items-center gap-1.5">
              Build Your Recruiting Team
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
          >
            Talk to an RPO Expert
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce-soft flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}

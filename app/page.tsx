"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { jobs } from "@/lib/jobs";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";
import RotatingWord from "@/components/RotatingWord";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeUp } from "@/lib/motion";

const stats = [
  { value: 15, suffix: "+", label: "Years placing talent" },
  { value: 3200, suffix: "+", label: "Successful placements" },
  { value: 450, suffix: "+", label: "Employer partners" },
  { value: 48, suffix: "", label: "States covered" },
];

const serviceHighlights = [
  {
    title: "Contract Staffing",
    description:
      "Scale your workforce up or down with skilled contract professionals, fully payrolled and supported by our team.",
  },
  {
    title: "Direct Hire",
    description:
      "We source, screen, and present pre-vetted candidates for your permanent, full-time openings.",
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before extending a permanent offer — lower risk, better long-term fit.",
  },
  {
    title: "Payroll & EOR Services",
    description:
      "Already found your candidate? We handle payroll, compliance, and benefits as the employer of record.",
  },
];

const whyUs = [
  {
    title: "Speed without compromise",
    description: "Most roles receive qualified candidate submittals within 48 hours.",
  },
  {
    title: "Industry specialists",
    description: "Dedicated recruiting teams across IT, healthcare, finance, and light industrial.",
  },
  {
    title: "Nationwide reach",
    description: "Licensed to place candidates across all 50 states with local market expertise.",
  },
  {
    title: "Compliance built-in",
    description: "E-Verify, background checks, and drug screening handled for every placement.",
  },
];

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <HeroBackground />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-400"
          >
            U.S. Staffing &amp; Recruitment Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Finding great{" "}
            <RotatingWord
              words={["IT talent.", "healthcare talent.", "finance talent.", "your next hire."]}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            PeopleFirst Resources helps U.S. employers find reliable, qualified talent fast —
            and helps candidates find work that fits their skills and goals. Contract, direct
            hire, or contract-to-hire, we make staffing simple.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Hire Talent Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <Link
              href="/jobs"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Browse Job Openings
            </Link>
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

      <section className="border-b border-line bg-white">
        <RevealGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-ink-800">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </h2>
          <p className="mt-2 text-3xl font-bold text-ink-800">
            Staffing solutions built around how you hire.
          </p>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceHighlights.map((service) => (
            <RevealItem key={service.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-ink-800">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{service.description}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-10" delay={0.1}>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            Explore all services{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why PeopleFirst
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">
              A staffing partner that acts like an extension of your team.
            </p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <RevealItem key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-ink-800">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-600">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Featured Openings
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">Current job opportunities</p>
          </div>
          <Link
            href="/jobs"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            View all openings{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <RevealItem key={job.slug}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/jobs"
                  className="block h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5"
                >
                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {job.type}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-800">{job.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{job.location}</p>
                  <p className="mt-3 text-sm leading-6 text-ink-600">{job.description}</p>
                </Link>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="relative overflow-hidden bg-ink-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-8"
        >
          <h2 className="text-3xl font-bold text-white">
            Ready to find your next hire — or your next role?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Tell us what you need and one of our staffing specialists will follow up within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Talk to a Recruiter
            </Link>
            <Link
              href="/jobs"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Search Jobs
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

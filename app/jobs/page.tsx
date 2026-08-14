import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/lib/jobs";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Job Openings | PeopleFirst Resources",
  description:
    "Browse current job openings from PeopleFirst Resources across IT, healthcare, administrative, light industrial, and more.",
};

export default function JobsPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Job Openings
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Find your next opportunity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            New roles are added every week. Don&apos;t see a fit today? Submit your resume
            anyway — our recruiters reach out as soon as a matching role opens up.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Submit Your Resume
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm text-ink-600">{jobs.length} open positions</p>
        <RevealGroup className="mt-6 space-y-6" stagger={0.08}>
          {jobs.map((job) => (
            <RevealItem
              key={job.slug}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 sm:p-8"
            >
              <div id={job.slug} className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-ink-800">{job.title}</h2>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-600">
                    {job.location} · {job.category}
                  </p>
                </div>
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="group shrink-0 rounded-full bg-ink-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-500"
                >
                  <span className="flex items-center gap-1.5">
                    Apply Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink-600">{job.description}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Responsibilities
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink-600">
                        <span className="text-blue-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Requirements
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink-600">
                        <span className="text-blue-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

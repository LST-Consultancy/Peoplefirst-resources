import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | PeopleFirst Resources",
  description:
    "Contract staffing, direct hire, contract-to-hire, and payroll/EOR services for U.S. employers across every industry.",
};

const services = [
  {
    title: "Contract Staffing",
    description:
      "Add skilled talent to your team on a flexible, project or seasonal basis. We handle sourcing, screening, payroll, and compliance — you focus on the work.",
    bullets: [
      "Fast turnaround, typically 3-5 days to first submittals",
      "We remain the employer of record for all contractors",
      "Scale headcount up or down as project needs change",
    ],
  },
  {
    title: "Direct Hire",
    description:
      "For permanent roles, our recruiters run a full-cycle search — sourcing, screening, interview coordination, and offer support — so you only see pre-vetted finalists.",
    bullets: [
      "Dedicated recruiter for every search",
      "Structured interview guides and reference checks",
      "Replacement guarantee on all direct hire placements",
    ],
  },
  {
    title: "Contract-to-Hire",
    description:
      "Bring someone on as a contractor first, evaluate real on-the-job performance, then convert to a permanent employee whenever you're ready.",
    bullets: [
      "Lower-risk way to evaluate long-term fit",
      "Simple, transparent conversion terms",
      "No disruption to the worker during conversion",
    ],
  },
  {
    title: "Payroll & Employer of Record (EOR)",
    description:
      "Already sourced your candidate but don't want the payroll and compliance burden? We can employ them on your behalf.",
    bullets: [
      "Full payroll processing and tax administration",
      "Workers' comp and benefits administration",
      "Ideal for out-of-state hires or short-term engagements",
    ],
  },
];

const industries = [
  "Information Technology",
  "Healthcare",
  "Accounting & Finance",
  "Administrative & Clerical",
  "Light Industrial & Manufacturing",
  "Customer Service & Call Center",
  "Sales & Marketing",
  "Human Resources",
];

const process = [
  { step: "01", title: "Discovery Call", description: "We learn about the role, team, and must-have qualifications." },
  { step: "02", title: "Sourcing & Screening", description: "Our recruiters source, screen, and reference-check candidates." },
  { step: "03", title: "Submittal", description: "You receive a shortlist of qualified, ready-to-interview candidates." },
  { step: "04", title: "Placement & Support", description: "We coordinate onboarding and stay involved after day one." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Staffing solutions built around how you hire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need one contractor for a busy season or a fully outsourced hiring
            pipeline, PeopleFirst Resources has a service model that fits.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <RevealGroup className="grid gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className="rounded-2xl border border-line bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5"
            >
              <h2 className="text-xl font-bold text-ink-800">{service.title}</h2>
              <p className="mt-4 text-sm leading-6 text-ink-600">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-ink-600">
                    <span className="text-blue-500">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              How It Works
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">Our staffing process</p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <RevealItem key={item.step}>
                <span className="text-4xl font-bold text-blue-500">{item.step}</span>
                <h3 className="mt-2 font-semibold text-ink-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Industries We Serve
          </h2>
          <p className="mt-2 text-3xl font-bold text-ink-800">Specialized recruiting, by industry</p>
        </Reveal>
        <RevealGroup className="mt-10 flex flex-wrap gap-3" stagger={0.05}>
          {industries.map((industry) => (
            <RevealItem key={industry}>
              <span className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-300 hover:border-blue-500 hover:text-blue-600">
                {industry}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-ink-900">
        <Reveal className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Not sure which service is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Tell us about your hiring need and we&apos;ll recommend the best-fit staffing model.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Talk to a Recruiter
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

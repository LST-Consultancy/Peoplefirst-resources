import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us | PeopleFirst Resources",
  description:
    "Learn about PeopleFirst Resources' mission, values, and approach to U.S. staffing and recruitment.",
};

const values = [
  {
    title: "People First",
    description:
      "Every placement starts with understanding the person — their goals, strengths, and what a good fit looks like for them.",
  },
  {
    title: "Transparency",
    description:
      "Clear timelines, honest feedback, and no surprises — for the clients hiring and the candidates we place.",
  },
  {
    title: "Accountability",
    description:
      "We stand behind every placement with dedicated account support after day one, not just before it.",
  },
  {
    title: "Speed with Rigor",
    description:
      "Fast turnaround on submittals, without cutting corners on screening, references, or compliance.",
  },
];

const timeline = [
  { year: "2010", event: "Founded as a boutique IT staffing firm in Dallas, TX." },
  { year: "2014", event: "Expanded into healthcare and light industrial staffing." },
  { year: "2018", event: "Reached 1,000+ successful placements nationwide." },
  { year: "2022", event: "Launched payroll and Employer of Record (EOR) services." },
  { year: "Today", event: "450+ active employer partners across 48 states." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A staffing partner built on people, not just placements.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            PeopleFirst Resources is a U.S.-based staffing and recruitment company helping
            employers build reliable teams and helping job seekers find work that fits. We
            believe great staffing happens when process and genuine care work together.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">
              Making U.S. hiring faster, fairer, and more human.
            </p>
            <p className="mt-6 text-base leading-7 text-ink-600">
              We started PeopleFirst Resources because too many hiring processes treated
              candidates like resumes instead of people, and treated clients like a transaction
              instead of a partnership. Our mission is to change that — one thoughtful match at
              a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Approach
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">
              Deep screening. Real conversations. Fast execution.
            </p>
            <p className="mt-6 text-base leading-7 text-ink-600">
              Our recruiters specialize by industry, so every candidate we submit has already
              been vetted by someone who understands the role. That means fewer, better-fit
              submittals — and faster time-to-hire for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Values
            </h2>
            <p className="mt-2 text-3xl font-bold text-ink-800">What guides every placement</p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-ink-800">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Story
          </h2>
          <p className="mt-2 text-3xl font-bold text-ink-800">
            Growing with our clients since 2010
          </p>
        </Reveal>
        <RevealGroup className="mt-12 space-y-8 border-l border-line pl-8" stagger={0.15}>
          {timeline.map((item) => (
            <RevealItem key={item.year} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
              <p className="text-sm font-semibold text-blue-600">{item.year}</p>
              <p className="mt-1 text-base text-ink-800">{item.event}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-ink-900">
        <Reveal className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Let&apos;s build your team together.</h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const options = [
  {
    title: "One Dedicated Recruiter",
    description: "Add a dedicated recruiter to increase your recruiting capacity.",
  },
  {
    title: "Dedicated Sourcer",
    description: "Add a dedicated sourcer to strengthen your candidate pipeline.",
  },
  {
    title: "Recruiter + Sourcer",
    description: "Combine sourcing and recruiting capacity for a stronger recruiting workflow.",
  },
  {
    title: "Complete Recruiting Pod",
    description:
      "Build a dedicated offshore team with recruiters and sourcers working together as an extension of your staffing operation.",
  },
];

export default function BuildYourTeam() {
  return (
    <section id="build-your-team" className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-24">
      <div
        aria-hidden
        className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-sky">
            Build Your Team
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Build Your Recruiting Team
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-300">
            Every staffing firm has different recruiting needs. You decide how much recruiting
            capacity you need—from one dedicated recruiter to a complete offshore recruiting pod.
            PeopleFirst Resources provides the recruiting professionals, tools, infrastructure,
            and support to build the team around your business.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <RevealItem
              key={option.title}
              className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-sky/40 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">{option.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{option.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12" delay={0.1}>
          <p className="max-w-3xl text-base leading-7 text-slate-300">
            There is no one-size-fits-all recruiting team. You decide the capacity you need; we
            build the recruiting support around it.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            Let&apos;s Design Your Team
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

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

export default function Services() {
  return (
    <section id="services" className="bg-surface-alt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Recruitment Process Outsourcing Built for Staffing Firms
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-600">
            PeopleFirst Resources provides offshore RPO solutions designed specifically for U.S.
            staffing firms. Add dedicated recruiting capacity without the time, cost, and
            complexity of building an entire in-house recruiting team.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="text-lg font-semibold text-ink-800">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{service.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12" delay={0.1}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Discuss Your RPO Requirements
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

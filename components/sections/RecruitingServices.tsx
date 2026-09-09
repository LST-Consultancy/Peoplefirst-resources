import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const capabilities = [
  {
    title: "Recruiting",
    description:
      "Dedicated recruiters who manage recruiting activities according to your roles, requirements, process, and expectations.",
  },
  {
    title: "Candidate Sourcing",
    description: "Targeted candidate identification and outreach to build qualified pipelines.",
  },
  {
    title: "Candidate Research",
    description:
      "Research and market mapping to identify relevant talent and expand candidate reach.",
  },
  {
    title: "Resume Screening",
    description:
      "Initial resume review and candidate qualification based on your defined requirements.",
  },
  {
    title: "Candidate Engagement",
    description:
      "Candidate communication, follow-up, and engagement throughout the recruiting process.",
  },
  {
    title: "ATS & Database Support",
    description:
      "Recruitment data entry, candidate updates, database management, and ATS support.",
  },
  {
    title: "Submission Support",
    description:
      "Support with candidate preparation, submissions, follow-ups, and recruiting coordination.",
  },
];

export default function RecruitingServices() {
  return (
    <section id="recruiting-services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          Recruiting Services
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          Offshore Recruiting Services for U.S. Staffing Firms
        </h2>
        <p className="mt-6 text-base leading-7 text-ink-600">
          Extend your recruiting team with dedicated offshore professionals who work within your
          systems and follow your recruiting process. You decide how many recruiting
          professionals you need; we provide the people, tools, infrastructure, and support
          required to help them perform.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {capabilities.map((item, index) => (
          <RevealItem
            key={item.title}
            className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-xl hover:shadow-black/5"
          >
            <span className="text-xs font-semibold text-accent-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-ink-800">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">{item.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12" delay={0.1}>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-500"
        >
          Find the Right Recruiting Support
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
    </section>
  );
}

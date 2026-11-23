import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

type Industry = string | { name: string; href: string };

const industries: Industry[] = [
  { name: "IT Staffing", href: "/services/it-staffing-recruiters" },
  { name: "Healthcare Staffing", href: "/services/healthcare-staffing-recruiters" },
  "Non-IT Staffing",
  "Life Sciences & Pharmaceutical",
  "Construction",
  "Finance & Accounting",
  "Engineering",
  "Sales & Professional Staffing",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-surface-alt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            Industries
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Recruiting Expertise Across Staffing Industries
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-600">
            Different staffing verticals require different recruiting approaches. PeopleFirst
            Resources provides recruitment professionals who can align with your industry, roles,
            processes, and hiring requirements.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {industries.map((industry) => {
            const name = typeof industry === "string" ? industry : industry.name;
            const card =
              "flex h-full items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-black/5";
            const content = (
              <>
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                <span className="text-sm font-semibold text-ink-800">{name}</span>
              </>
            );
            return (
              <RevealItem key={name}>
                {typeof industry === "string" ? (
                  <div className={card}>{content}</div>
                ) : (
                  <Link href={industry.href} className={`group ${card}`}>
                    {content}
                    <span className="ml-auto text-accent-600 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-12" delay={0.1}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            Tell Us What You Recruit For
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

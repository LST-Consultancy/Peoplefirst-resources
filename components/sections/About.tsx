import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">About Us</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          About PeopleFirst Resources
        </h2>
        <p className="mt-6 text-base leading-7 text-ink-600">
          PeopleFirst Resources is a specialized offshore RPO and recruitment staffing company
          helping U.S. staffing firms build reliable recruiting teams from India. We provide
          dedicated recruiters, sourcers, and recruitment professionals who integrate directly
          into your workflow, culture, and time zone.
        </p>
        <p className="mt-4 text-base leading-7 text-ink-600">
          Our approach is simple: put the right people behind your recruiting process. We focus
          exclusively on recruitment, giving staffing firms the flexibility to expand their
          teams, increase candidate reach, improve productivity, and control operating costs
          without compromising quality.
        </p>
      </Reveal>

      <Reveal className="mt-12" delay={0.1}>
        <div className="rounded-3xl border border-line bg-surface-alt p-8 sm:p-10">
          <h3 className="text-2xl font-bold tracking-tight text-ink-800">
            People First. Recruiting Always.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-600">
            Great staffing starts with great people. We believe the right recruiting
            professionals can strengthen a staffing firm&apos;s pipeline, productivity, and
            ability to grow. That belief is at the heart of PeopleFirst Resources.
          </p>
          <a
            href="#build-your-team"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-500"
          >
            Build Your Recruiting Team
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

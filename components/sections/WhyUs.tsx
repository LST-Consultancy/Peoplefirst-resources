import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const reasons = [
  {
    title: "Built for Staffing",
    description:
      "We focus on recruitment and staffing, with solutions designed around the way staffing firms actually operate.",
  },
  {
    title: "Dedicated People",
    description:
      "Our recruiters are dedicated to your business, your roles, and your recruiting priorities.",
  },
  {
    title: "You Choose the Team Size",
    description:
      "Need one recruiter or a larger recruiting team? You decide how much capacity you need, and we build around that requirement.",
  },
  {
    title: "Our Tools & Infrastructure",
    description:
      "We provide the tools, infrastructure, and working environment your offshore recruiters need to do their jobs effectively. You do not have to build the offshore setup yourself.",
  },
  {
    title: "Your Process. Your Culture. Your Style.",
    description:
      "Your recruiting process, communication style, expectations, and culture remain yours. Our recruiters adapt to the way you work.",
  },
  {
    title: "Timezone Alignment",
    description:
      "Your offshore recruiting team can align with your required working hours and collaborate with your U.S. team.",
  },
  {
    title: "Managed Support",
    description:
      "We support the offshore team and help maintain communication, coordination, performance visibility, and continuity by providing you with a dedicated manager. Thus, saving you time.",
  },
  {
    title: "Performance Visibility",
    description:
      "Track recruiting activity and performance through agreed reporting and KPIs, giving you visibility into the work being done.",
  },
  {
    title: "Cost-Efficient Recruiting",
    description:
      "Increase recruiting capacity without taking on the full cost and complexity of building the same team internally.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-surface-alt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">Why Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Why Staffing Firms Choose PeopleFirst Resources
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {reasons.map((reason) => (
            <RevealItem
              key={reason.title}
              className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-500">
                ✓
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-800">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{reason.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12" delay={0.1}>
          <a
            href="#build-your-team"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            Build Your Recruiting Team
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

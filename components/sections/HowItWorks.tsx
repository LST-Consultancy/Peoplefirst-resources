import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your staffing business, recruiting process, job volume, roles, tools, timezone, culture, and goals.",
  },
  {
    number: "02",
    title: "Team Design",
    description:
      "You decide how much recruiting capacity you need. We help determine the right mix of recruiters, sourcers, and hybrid resources.",
  },
  {
    number: "03",
    title: "Selection",
    description:
      "We identify recruitment professionals who match your required experience and recruiting needs.",
  },
  {
    number: "04",
    title: "Onboarding",
    description:
      "We provide the tools, infrastructure, access, and support your offshore team needs to get started, while aligning them with your ATS, communication channels, recruiting process, and expectations.",
  },
  {
    number: "05",
    title: "Go Live",
    description:
      "Your offshore recruiters begin working as an extension of your recruiting operation and follow your process, culture, timezone, and working style.",
  },
  {
    number: "06",
    title: "Measure & Improve",
    description:
      "Performance is reviewed against agreed goals and recruiting KPIs so the team can continuously improve and scale with your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          How It Works
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          How We Build Your Recruiting Team
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {steps.map((step) => (
          <RevealItem key={step.number} className="relative">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-accent-500">{step.number}</span>
              <h3 className="text-lg font-semibold text-ink-800">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-600">{step.description}</p>
            <span className="mt-5 block h-px w-full bg-line" />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12" delay={0.1}>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-500"
        >
          Start With a Conversation
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
    </section>
  );
}

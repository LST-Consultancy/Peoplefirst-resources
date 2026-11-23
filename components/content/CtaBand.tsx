import Link from "next/link";

export default function CtaBand({
  heading = "Ready to add recruiting capacity?",
  body = "Tell us what you recruit for and how many people you need. Start with one recruiter or a full pod; we provide the people, tools, infrastructure, and support.",
  cta = "Talk to an RPO Expert",
}: {
  heading?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-16 text-white lg:py-20">
      <div
        aria-hidden
        className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{body}</p>
        <Link
          href="/#contact"
          className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
        >
          {cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

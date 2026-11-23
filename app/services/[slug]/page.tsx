import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/content/JsonLd";
import { getService, services } from "@/lib/services";
import { organizationRef, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}${path}`,
      type: "website",
      siteName: "PeopleFirst Resources",
    },
  };
}

const steps = [
  { title: "Discovery", text: "We learn your roles, volume, tools, process, and working hours." },
  { title: "Team design", text: "You choose the capacity; we recommend the mix of recruiters and sourcers." },
  { title: "Selection & onboarding", text: "We select professionals who fit, then set them up in your ATS and channels." },
  { title: "Go live & improve", text: "Your team starts working, measured against KPIs we agree with you." },
];

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const url = `${siteUrl}/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: service.name,
              serviceType: service.name,
              description: service.metaDescription,
              url,
              provider: organizationRef,
              areaServed: { "@type": "Country", name: "United States" },
              audience: { "@type": "BusinessAudience", audienceType: "Staffing firms" },
            },
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />

      <section className="bg-gradient-to-b from-white to-surface-alt">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-accent-600">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl">
            {service.h1}
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-ink-600">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-shadow duration-300 hover:shadow-xl"
            >
              Talk to an RPO Expert
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#build-your-team"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-accent-500 hover:text-accent-600"
            >
              See Team Options
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          {service.tasksHeading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.tasks.map((task, i) => (
            <div
              key={task.title}
              className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-black/5"
            >
              <span className="text-xs font-semibold text-accent-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink-800">{task.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{task.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-6 lg:px-8">
          {service.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink-600">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-7 text-ink-600">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          How we build your team
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="text-4xl font-bold text-accent-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
          Related services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-black/5"
            >
              <h3 className="text-lg font-semibold text-ink-800 group-hover:text-accent-600">
                {r.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{r.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

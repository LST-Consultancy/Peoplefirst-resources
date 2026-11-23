import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Offshore RPO & Recruiting Services | PeopleFirst Resources",
  description:
    "Recruitment process outsourcing, dedicated offshore recruiters, talent sourcers, and specialist IT and healthcare recruiters for U.S. staffing firms.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-surface-alt">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-accent-600">
            Services
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl">
            Offshore RPO and Recruiting Services for U.S. Staffing Firms
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-600">
            Every service is delivered by dedicated recruiting professionals who work as an
            extension of your team, in your ATS, on your process, and during your hours. You
            choose the capacity; we provide the people, tools, infrastructure, and support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-black/5"
            >
              <h2 className="text-xl font-bold tracking-tight text-ink-800 group-hover:text-accent-600">
                {service.name}
              </h2>
              <p className="mt-3 flex-1 text-base leading-7 text-ink-600">{service.summary}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-accent-600">
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

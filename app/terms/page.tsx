import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms | PeopleFirst Resources",
  description: "Terms of use for the PeopleFirst Resources website.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
        Terms
      </h1>
      <p className="mt-6 text-base leading-7 text-ink-600">
        Our full terms of use are being finalised and will be published here shortly. If you
        have any questions about the terms that apply to your use of this website or to working
        with PeopleFirst Resources, please contact us and we will be glad to help.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:info@peoplefirstresources.com"
          className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
        >
          Contact Us
        </a>
        <Link
          href="/"
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-accent-500 hover:text-accent-600"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

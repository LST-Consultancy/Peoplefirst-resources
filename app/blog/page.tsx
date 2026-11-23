import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import { formatDate, posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "RPO & Offshore Recruiting Insights for Staffing Firms | Blog",
  description:
    "Practical guides on recruitment process outsourcing, offshore recruiters, and building recruiting capacity for U.S. staffing firms.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-surface-alt">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-accent-600">
            Blog
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl">
            RPO and Offshore Recruiting Guides for Staffing Firms
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-600">
            Practical answers on recruitment process outsourcing, offshore recruiting teams,
            and how staffing firms add recruiting capacity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-black/5"
            >
              <p className="text-xs font-medium text-ink-600">
                <time dateTime={post.published}>{formatDate(post.published)}</time> ·{" "}
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink-800 group-hover:text-accent-600">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-600">{post.description}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-accent-600">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

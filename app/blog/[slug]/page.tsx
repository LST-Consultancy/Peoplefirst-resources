import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/content/JsonLd";
import { formatDate, getPost, posts } from "@/lib/blog";
import { organizationRef, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}${path}`,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      siteName: "PeopleFirst Resources",
    },
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Body } = post;
  const url = `${siteUrl}/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);

  const graph: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: url,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      author: organizationRef,
      publisher: organizationRef,
      image: `${siteUrl}/opengraph-image.png`,
    },
  ];
  if (post.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />

      <article>
        <header className="bg-gradient-to-b from-white to-surface-alt">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-10 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <h1 className="mt-10 text-4xl font-bold leading-[1.15] tracking-tight text-ink-800 sm:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-ink-600">
              By PeopleFirst Resources ·{" "}
              <time dateTime={post.published}>{formatDate(post.published)}</time> ·{" "}
              {post.readingMinutes} min read
            </p>
          </div>
        </header>

        <div className="prose-pf mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
          <Body />
        </div>

        {post.faqs?.length ? (
          <section className="mx-auto max-w-3xl px-6 pb-16 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              <FaqList faqs={post.faqs} />
            </div>
          </section>
        ) : null}
      </article>

      {others.length > 0 && (
        <section className="bg-surface-alt py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink-800">Keep reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-black/5"
                >
                  <h3 className="text-lg font-semibold leading-snug text-ink-800 group-hover:text-accent-600">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

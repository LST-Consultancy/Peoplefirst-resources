import Link from "next/link";
import JsonLd from "@/components/content/JsonLd";
import { siteUrl } from "@/lib/site";

export type Crumb = { name: string; href: string };

/** Visible breadcrumb trail plus the matching BreadcrumbList structured data. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-ink-600">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium text-ink-800">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className="transition-colors hover:text-accent-600">
                      {crumb.name}
                    </Link>
                    <span aria-hidden className="text-ink-400">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
          })),
        }}
      />
    </>
  );
}

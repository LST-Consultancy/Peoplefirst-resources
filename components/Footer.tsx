import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#build-your-team", label: "Build Your Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact Us" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/peoplefirstresources/",
    icon: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/peoplefirstresources/",
    icon: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.12-1.38 5.88 5.88 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.12A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink-900 text-slate-300">
      <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt=""
              width={760}
              height={332}
              sizes="140px"
              className="h-9 w-auto"
            />
            <span className="leading-none">
              <span className="block text-lg font-extrabold tracking-tight">
                <span className="text-white">PEOPLE</span>{" "}
                <span className="text-brand-sky">FIRST</span>
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Resources
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            PeopleFirst Resources — Offshore RPO &amp; Recruitment Solutions for U.S. Staffing
            Firms
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            Talk to an RPO Expert
          </a>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            <Link href="/services" className="transition-colors hover:text-brand-sky">
              Services
            </Link>
          </h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a
                href="mailto:info@peoplefirstresources.com"
                className="transition-colors hover:text-white"
              >
                info@peoplefirstresources.com
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`PeopleFirst Resources on ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {year} PeopleFirst Resources. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

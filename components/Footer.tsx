import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#build-your-team", label: "Build Your Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink-900 text-slate-300">
      <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              PF
            </span>
            <span className="text-lg font-bold text-white">PeopleFirst Resources</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            PeopleFirst Resources — Offshore RPO &amp; Recruitment Solutions for U.S. Staffing
            Firms
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30"
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
            {["LinkedIn", "Facebook", "X"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition-colors hover:bg-blue-500"
              >
                {social[0]}
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

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const serviceLinks = [
  "Contract Staffing",
  "Direct Hire",
  "Contract-to-Hire",
  "Payroll & EOR Services",
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Job Openings" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto overflow-hidden bg-ink-900 text-slate-300">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              PF
            </span>
            <span className="text-lg font-bold text-white">PeopleFirst Resources</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            A U.S. staffing solution connecting great companies with great people —
            contract, contract-to-hire, and direct hire placements nationwide.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((service) => (
              <li key={service} className="text-sm text-slate-400">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>1200 Main Street, Suite 400</li>
            <li>Dallas, TX 75201</li>
            <li>
              <a href="tel:+18005551234" className="transition-colors hover:text-white">
                (800) 555-1234
              </a>
            </li>
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
          <p>Equal Opportunity Employer · E-Verify Participant</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Job Openings" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "border-transparent bg-white/40 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
            PF
          </span>
          <span className="text-lg font-bold tracking-tight text-ink-800">
            PeopleFirst <span className="font-normal text-ink-600">Resources</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-800"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+18005551234" className="text-sm font-semibold text-ink-800 hover:text-blue-500">
            (800) 555-1234
          </a>
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-ink-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="relative z-10">Hire Talent</span>
            <span className="absolute inset-0 -translate-x-full bg-blue-500 transition-transform duration-300 ease-out group-hover:translate-x-0" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative flex h-4 w-[18px] flex-col justify-between">
            <motion.span
              className="h-[1.8px] w-full rounded-full bg-ink-800"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
            />
            <motion.span
              className="h-[1.8px] w-full rounded-full bg-ink-800"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="h-[1.8px] w-full rounded-full bg-ink-800"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            className="overflow-hidden border-t border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-surface-tint"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a href="tel:+18005551234" className="px-2 py-2 text-base font-semibold text-ink-800">
                (800) 555-1234
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full rounded-full bg-ink-800 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Hire Talent
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

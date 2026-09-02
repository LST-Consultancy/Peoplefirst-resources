"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#build-your-team", label: "Build Your Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("/#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.getElementById(href.replace("/#", ""));
    if (!target) return; // not on the home page — let the browser navigate

    event.preventDefault();
    const wasOpen = open;
    setOpen(false);
    history.replaceState(null, "", href);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // wait for the mobile menu's collapse animation so the scroll lands accurately
    window.setTimeout(
      () => target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" }),
      wasOpen ? 320 : 0
    );
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-white/85 backdrop-blur-xl"
          : "border-transparent bg-white/50 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a
          href="/#home"
          className="group flex items-center gap-2"
          onClick={(e) => handleNavClick(e, "/#home")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
            PF
          </span>
          <span className="text-base font-bold tracking-tight text-ink-800 sm:text-lg">
            PeopleFirst <span className="font-normal text-ink-600">Resources</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("/#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                  isActive ? "text-blue-600" : "text-ink-600 hover:text-ink-800"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-blue-500 transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="hidden shrink-0 rounded-full bg-ink-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 xl:block"
        >
          Talk to an RPO Expert
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line xl:hidden"
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
            className="overflow-hidden border-t border-line bg-white/95 backdrop-blur-xl xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-surface-tint"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-2 w-full rounded-full bg-ink-800 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Talk to an RPO Expert
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

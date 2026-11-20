"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WordReveal from "@/components/hero/WordReveal";
import { Eyebrow, HERO_BODY, HeroCtas, ServiceTicker } from "@/components/hero/shared";

/*
 * Hero — People Network: the logo is the hub of a slowly turning
 * network of people. Connection lines carry little pulses into the centre,
 * and the recruiting stages float around it as glass chips.
 */

const NODES = 6;
const RADIUS = 40; // % of the stage
const nodeColors = ["#007d97", "#48c0d8", "#01425a", "#0097b2", "#48c0d8", "#007d97"];

const nodes = Array.from({ length: NODES }, (_, i) => {
  const a = (i / NODES) * Math.PI * 2 - Math.PI / 2;
  // rounded so the server HTML and the browser agree on the style string
  return { x: +(50 + RADIUS * Math.cos(a)).toFixed(2), y: +(50 + RADIUS * Math.sin(a)).toFixed(2), color: nodeColors[i] };
});

const chips = [
  { label: "Sourcing", className: "left-[-2%] top-[18%]", delay: 0 },
  { label: "Screening", className: "right-[-4%] top-[10%]", delay: 1.2 },
  { label: "Submissions", className: "right-[-6%] bottom-[24%]", delay: 0.6 },
  { label: "Candidate Engagement", className: "left-[-6%] bottom-[14%]", delay: 1.8 },
];

function PersonGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="currentColor" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-white to-surface-alt text-ink-800"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_45%,black,transparent)]" />
        <div className="blob-a absolute right-[5%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-brand-sky/25 blur-3xl" />
        <div className="blob-b absolute -left-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent-50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pt-32">
        <div>
          <Eyebrow />
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-ink-800 sm:text-5xl lg:text-[3.6rem]">
            <WordReveal
              delay={0.25}
              segments={[
                { text: "Offshore RPO Solutions Built for" },
                { text: "U.S. Staffing Firms", className: "text-accent-500" },
              ]}
            />
          </h1>
          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-8 text-ink-600"
          >
            {HERO_BODY}
          </motion.p>
          <HeroCtas delay={1.05} className="mt-10" />
        </div>

        {/* network stage */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          {/* rings */}
          <div className="absolute inset-[10%] rounded-full border border-dashed border-accent-500/25" />
          <div className="absolute inset-[24%] rounded-full border border-accent-500/15" />

          {/* turning network: lines + people (people counter-rotate to stay upright) */}
          <div className="animate-spin-slow absolute inset-0" style={{ animationDuration: "60s" }}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
              {nodes.map((n, i) => (
                <g key={i}>
                  <line x1="50" y1="50" x2={n.x} y2={n.y} stroke="#007d97" strokeOpacity="0.18" strokeWidth="0.3" />
                  <line
                    x1={n.x}
                    y1={n.y}
                    x2="50"
                    y2="50"
                    pathLength={100}
                    stroke={n.color}
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeDasharray="8 92"
                    className="ribbon-pulse"
                    style={{ animationDuration: "2.6s", animationDelay: `${-i * 0.45}s` }}
                  />
                </g>
              ))}
            </svg>
            {nodes.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 220, damping: 16 }}
                className="absolute h-[13%] w-[13%] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div
                  className="animate-spin-slow flex h-full w-full items-center justify-center rounded-full border-4 border-white text-white shadow-lg shadow-ink-800/10"
                  style={{ background: n.color, animationDuration: "60s", animationDirection: "reverse" }}
                >
                  <PersonGlyph />
                </div>
              </motion.div>
            ))}
          </div>

          {/* hub */}
          <div className="absolute inset-[30%] flex items-center justify-center rounded-full border border-white bg-white/80 shadow-2xl shadow-accent-500/20 backdrop-blur">
            <span className="animate-ring-pulse absolute inset-0 rounded-full border-2 border-accent-500/30" />
            <span className="animate-ring-pulse absolute inset-0 rounded-full border-2 border-accent-500/30" style={{ animationDelay: "1.8s" }} />
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-[78%]"
            >
              <Image src="/logo-mark.png" alt="" width={760} height={332} priority sizes="200px" className="h-auto w-full" />
            </motion.div>
          </div>

          {/* floating stage chips */}
          {chips.map((chip) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + chip.delay * 0.3, duration: 0.6 }}
              className={`absolute ${chip.className}`}
            >
              <div
                className="animate-float-y flex items-center gap-2 rounded-full border border-white bg-white/85 px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-lg shadow-ink-800/10 backdrop-blur sm:text-sm"
                style={{ animationDelay: `${-chip.delay}s` }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-[10px] text-green-500">✓</span>
                {chip.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ServiceTicker />
    </section>
  );
}

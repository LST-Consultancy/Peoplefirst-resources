"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";

type Segment = { text: string; className?: string };

/*
 * Headline that rises in word by word, each word sliding up out of a mask.
 * Segments let part of the line carry its own style (e.g. a gradient accent).
 */
export default function WordReveal({
  segments,
  delay = 0,
  stagger = 0.07,
}: {
  segments: Segment[];
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  let index = 0;

  return (
    <>
      {segments.map((segment, s) => (
        <Fragment key={s}>
          {segment.text
            .split(" ")
            .filter(Boolean)
            .map((word, w) => {
              const i = index++;
              return (
                <Fragment key={`${s}-${w}`}>
                  <span className="inline-block overflow-hidden pb-[0.12em] align-top -mb-[0.12em]">
                    <motion.span
                      className={`inline-block ${segment.className ?? ""}`}
                      initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ delay: delay + i * stagger, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>{" "}
                </Fragment>
              );
            })}
        </Fragment>
      ))}
    </>
  );
}

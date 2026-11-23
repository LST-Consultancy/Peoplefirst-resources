import { Fragment } from "react";

type Segment = { text: string; className?: string };

/*
 * Headline that rises in word by word, each word sliding up out of a mask.
 * Segments let part of the line carry its own style (e.g. a gradient accent).
 *
 * The animation is CSS (.animate-word-rise in globals.css), not framer-motion,
 * so it runs from first paint without waiting for JavaScript. The headline is
 * the page's largest element, and keeping it hidden until hydration delayed
 * Largest Contentful Paint. Reduced-motion users get the text with no animation.
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
                    <span
                      className={`animate-word-rise inline-block ${segment.className ?? ""}`}
                      style={{ animationDelay: `${(delay + i * stagger).toFixed(2)}s` }}
                    >
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              );
            })}
        </Fragment>
      ))}
    </>
  );
}

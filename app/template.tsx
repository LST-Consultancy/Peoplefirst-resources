"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      // No opacity fade: an opacity:0 start hides the whole server-rendered page
      // until hydration, which hurts LCP and Speed Index.
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

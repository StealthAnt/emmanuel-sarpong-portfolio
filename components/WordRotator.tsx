"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/hooks";

export default function WordRotator() {
  const titles = site.heroTitles;
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % titles.length), 2600);
    return () => clearInterval(t);
  }, [titles.length, reduced]);

  return (
    <span className="rotator-mask relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[i]}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-110%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="block"
        >
          {titles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

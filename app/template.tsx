"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/hooks";

// Orange wipe route transition — template.tsx re-mounts on every navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  if (reduced) return <div key={pathname}>{children}</div>;

  return (
    <>
      <motion.div
        key={pathname}
        className="pointer-events-none fixed inset-0 z-[85] flex items-center justify-center bg-accent"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)", "inset(100% 0 0 0)"] }}
        transition={{ duration: 0.9, times: [0, 0.45, 1], ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-2xl font-extrabold tracking-tight text-white">
          EMS<span className="text-ink">.</span>
        </span>
      </motion.div>
      {children}
    </>
  );
}

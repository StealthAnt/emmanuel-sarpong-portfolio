"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion, useIsTouch } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
};

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "dark",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15 });
  const sy = useSpring(y, { stiffness: 180, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced || touch || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variant === "dark"
      ? "bg-zinc-100 text-ink hover:bg-white"
      : "bg-ink text-white hover:bg-zinc-900",
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduced || touch ? undefined : { x: sx, y: sy }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={cls} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type="button" className={cls} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}

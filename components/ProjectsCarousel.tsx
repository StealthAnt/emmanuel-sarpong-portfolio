"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { projects } from "@/content/projects";
import { coverStyle } from "@/lib/gradients";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

const CARD_W = 340;
const GAP = 28;
const STEP = CARD_W + GAP;
const VISIBLE = 3;

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, projects.length - VISIBLE);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, i));
      setIndex(clamped);
      animate(x, -clamped * STEP, { type: "spring", stiffness: 120, damping: 20 });
    },
    [maxIndex, x]
  );

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      setIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        animate(x, -next * STEP, { type: "spring", stiffness: 120, damping: 20 });
        return next;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [maxIndex, reduced, x]);

  const onDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = STEP * 0.25;
    const delta = info.offset.x + info.velocity.x * 0.15;
    if (delta < -threshold) goTo(index + 1);
    else if (delta > threshold) goTo(index - 1);
    else goTo(index);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        style={{ perspective: 1400 }}
        ref={containerRef}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goTo(index - 1);
          if (e.key === "ArrowRight") goTo(index + 1);
        }}
        tabIndex={0}
        role="region"
        aria-label="Featured projects carousel"
      >
        <motion.div
          className="flex w-max gap-7 px-[8vw] md:px-[12vw]"
          style={{ x }}
          drag={!reduced ? "x" : false}
          dragConstraints={{ left: -maxIndex * STEP, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => setDragging(true)}
          onDragEnd={(e, info) => {
            setDragging(false);
            onDragEnd(e, info);
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((p, i) => {
            const rel = i - index; // -2..2
            const active = rel === 0;
            const side = Math.abs(rel) === 1;
            return (
              <motion.a
                key={p.slug}
                href={`/projects/${p.slug}`}
                data-cursor="view"
                className={cn(
                  "group relative block shrink-0 overflow-hidden rounded-3xl border border-white/10",
                  "transition-[width,height] duration-500"
                )}
                style={{ width: CARD_W, height: 440 }}
                animate={{
                  rotateY: reduced || dragging ? 0 : active ? 0 : rel > 0 ? -18 : 18,
                  scale: active ? 1 : side ? 0.88 : 0.78,
                  opacity: Math.abs(rel) > 2 ? 0 : 1,
                  zIndex: active ? 10 : 5 - Math.abs(rel),
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                aria-label={`${p.brand} — ${p.title}`}
              >
                <div className="absolute inset-0" style={coverStyle(p.cover)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">{p.brand}</p>
                  <h3 className="mt-1 text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.year}</p>
                </div>
                {active && (
                  <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {p.industry}
                  </span>
                )}
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
        >
          ←
        </button>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-8 bg-accent" : "w-2 bg-white/25 hover:bg-white/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(index + 1)}
          disabled={index >= maxIndex}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}

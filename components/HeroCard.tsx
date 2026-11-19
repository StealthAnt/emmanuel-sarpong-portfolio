"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { coverStyle } from "@/lib/gradients";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  rightText?: string;
  gradient: string; // key from lib/gradients
  children?: ReactNode; // overlay content inside the card
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroCard({ eyebrow, title, rightText, gradient, children, className }: Props) {
  const reduced = useReducedMotion();

  const titleContent =
    typeof title === "string" ? (
      <span aria-label={title} className="inline-block">
        {title.split("").map((ch, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="inline-block will-change-transform"
            initial={reduced ? false : { y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </span>
    ) : (
      title
    );

  return (
    <section className={cn("px-4 pt-24 md:px-8 md:pt-28", className)} aria-label="Page hero">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] md:rounded-[2.75rem]">
        {/* animated gradient mesh */}
        <div
          className="animate-mesh absolute -inset-[10%]"
          style={coverStyle(gradient)}
          aria-hidden="true"
        />
        {/* drifting colour orbs */}
        {!reduced && (
          <>
            <motion.div
              className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-white/20 blur-3xl"
              animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl"
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-black/20 blur-3xl"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </>
        )}
        {/* faint grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        {/* soft vignette for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden="true" />

        <div className="relative flex min-h-[62vh] flex-col justify-between gap-10 p-8 md:min-h-[72vh] md:p-14 lg:p-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              {eyebrow && (
                <motion.p
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
                >
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                    animate={reduced ? undefined : { scale: [1, 1.6, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  {eyebrow}
                </motion.p>
              )}
              <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-extrabold leading-[0.95] tracking-tight text-white">
                <span className="reveal-line">
                  <motion.span
                    className="block will-change-transform"
                    initial={reduced ? false : { y: "6%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease }}
                  >
                    {titleContent}
                  </motion.span>
                </span>
              </h1>
            </div>
            {rightText && (
              <motion.p
                initial={reduced ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="max-w-xs text-base leading-relaxed text-white/85 md:pt-6 md:text-right"
              >
                {rightText}
              </motion.p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

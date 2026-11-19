"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { coverStyle } from "@/lib/gradients";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  rightText?: string;
  gradient: string; // key from lib/gradients
  image?: StaticImageData | string; // optional photo background
  children?: ReactNode; // overlay content inside the card
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

// Decorative layer for heroes that don't supply their own children:
// rotating badge, outlined watermark and gently floating chips.
function HeroDecorations() {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -bottom-10 -right-6 select-none text-[16rem] font-extrabold leading-none tracking-tighter text-transparent md:text-[22rem]" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.10)" }}>
          {site.monogram}
        </span>
        <div className="absolute bottom-10 left-8 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {site.company}
        </div>
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* outlined watermark */}
      <motion.span
        className="absolute -bottom-10 -right-6 select-none text-[16rem] font-extrabold leading-none tracking-tighter text-transparent md:text-[22rem]"
        style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.10)" }}
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {site.monogram}
      </motion.span>

      {/* rotating circular badge */}
      <motion.div
        className="absolute bottom-8 right-8 hidden h-28 w-28 md:block lg:bottom-12 lg:right-14"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-white/70 text-[10.5px] font-bold uppercase" style={{ letterSpacing: "2.5px" }}>
            <textPath href="#circlePath">Open for projects • Let&apos;s talk • </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.div>

      {/* floating chips */}
      <motion.div
        className="absolute bottom-10 left-8 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md md:flex"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {site.company}
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-24 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md md:flex"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-white/70" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
        </svg>
        {site.location}
      </motion.div>
    </div>
  );
}

export default function HeroCard({ eyebrow, title, rightText, gradient, image, children, className }: Props) {
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
        {/* background: photo or animated gradient mesh */}
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              placeholder={typeof image === "object" ? "blur" : undefined}
              aria-hidden="true"
            />
            {/* brand-colour wash + legibility overlay */}
            <div
              className="absolute inset-0 opacity-40"
              style={{ backgroundImage: coverStyle(gradient) }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
          </>
        ) : (
          <div
            className="animate-mesh absolute -inset-[10%]"
            style={coverStyle(gradient)}
            aria-hidden="true"
          />
        )}
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

        {!children && <HeroDecorations />}

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

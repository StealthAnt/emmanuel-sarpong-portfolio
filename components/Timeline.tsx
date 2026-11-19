"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/content/experience";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={ref} className="relative pl-8 md:pl-12">
      <div
        className="timeline-line absolute left-[7px] top-2 h-full w-[2px] bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-[11px]"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {experience.map((e, i) => (
          <li key={i} className="timeline-item relative">
            <span
              className={`absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 md:-left-12 ${
                e.current ? "border-accent bg-accent" : "border-accent/50 bg-ink"
              }`}
              aria-hidden="true"
            />
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-accent/40">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">{e.period}</p>
              <h3 className="mt-2 text-xl font-bold">{e.company}</h3>
              <p className="text-muted">{e.role}</p>
              {e.todo && (
                <p className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  TODO — replace with real details
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

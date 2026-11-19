"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useIsTouch } from "@/lib/hooks";

export default function Cursor() {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const [label, setLabel] = useState<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ mx: -100, my: -100, rx: -100, ry: -100, scale: 1 });
  const labelRef = useRef<string | null>(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    labelRef.current = label;
    if (label) stateRef.current.scale = 2.4;
    else if (hoverRef.current) stateRef.current.scale = 1.6;
    else stateRef.current.scale = 1;
  }, [label]);

  useEffect(() => {
    if (reduced || touch) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    root.classList.add("cursor-none-desktop");

    const s = stateRef.current;
    s.mx = window.innerWidth / 2;
    s.my = window.innerHeight / 2;
    s.rx = s.mx;
    s.ry = s.my;

    let moved = false;
    const move = (e: MouseEvent) => {
      moved = true;
      if (!root.classList.contains("cursor-none-desktop")) {
        root.classList.add("cursor-none-desktop");
      }
      s.mx = e.clientX;
      s.my = e.clientY;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a, button, [data-cursor]");
      hoverRef.current = interactive;
      if (!labelRef.current) {
        s.scale = interactive ? 1.6 : 1;
      }
      const view = t?.closest("[data-cursor='view']");
      setLabel(view ? "View" : null);
    };
    const leave = () => {
      hoverRef.current = false;
      if (!labelRef.current) s.scale = 1;
    };

    let raf = 0;
    const loop = () => {
      s.rx += (s.mx - s.rx) * 0.45;
      s.ry += (s.my - s.ry) * 0.45;
      dot.style.transform = `translate(${s.mx}px, ${s.my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${s.rx}px, ${s.ry}px) translate(-50%, -50%) scale(${s.scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Safety net: if no mousemove ever arrives (embedded preview, remote
    // session, etc.) restore the native cursor instead of hiding it forever.
    const watchdog = setTimeout(() => {
      if (!moved) root.classList.remove("cursor-none-desktop");
    }, 2000);
    const watchdog2 = setInterval(() => {
      if (!moved) root.classList.remove("cursor-none-desktop");
    }, 2000);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mouseout", leave, { passive: true });
    return () => {
      clearTimeout(watchdog);
      clearInterval(watchdog2);
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", leave);
      root.classList.remove("cursor-none-desktop");
    };
  }, [reduced, touch]);

  if (reduced || touch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[95] h-2 w-2 rounded-full bg-accent"
        style={{ transform: "translate(-100px, -100px)", boxShadow: "0 0 14px rgba(255,90,31,.9)" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[94] flex items-center justify-center rounded-full border transition-[background-color,border-color] duration-200 ${
          label
            ? "h-20 w-20 border-accent bg-accent/90"
            : "h-10 w-10 border-white mix-blend-difference"
        }`}
        style={{ transform: "translate(-100px, -100px)" }}
        aria-hidden="true"
      >
        {label && (
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white">
            {label}
          </span>
        )}
      </div>
    </>
  );
}

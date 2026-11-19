"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem("es-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem("es-loaded", "1");
      } catch {}
      setDone(true);
    }, 1400);
    return () => clearTimeout(t);
  }, [pathname]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle
          cx="60" cy="60" r="56" stroke="#FF5A1F" strokeWidth="2"
          strokeDasharray="352" strokeDashoffset="352"
          className="animate-[draw_1s_ease_forwards]"
        />
        <text
          x="60" y="72" textAnchor="middle"
          fontSize="44" fontWeight="800" fill="#f4f4f5"
          fontFamily="var(--font-jakarta), sans-serif"
          className="animate-[fadein_.5s_.5s_ease_forwards] opacity-0"
        >
          {site.monogram}
        </text>
        <style>{`
          @keyframes draw { to { stroke-dashoffset: 0; } }
          @keyframes fadein { to { opacity: 1; } }
        `}</style>
      </svg>
    </div>
  );
}

import { coverStyle } from "@/lib/gradients";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  rightText?: string;
  gradient: string; // key from lib/gradients
  children?: ReactNode; // overlay content inside the card
  className?: string;
};

// Large rounded hero card with animated gradient mesh + parallax-friendly layer.
export default function HeroCard({ eyebrow, title, rightText, gradient, children, className }: Props) {
  return (
    <section className={cn("px-4 pt-24 md:px-8 md:pt-28", className)} aria-label="Page hero">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] md:rounded-[2.75rem]">
        <div
          className="animate-mesh absolute -inset-[10%]"
          style={coverStyle(gradient)}
          aria-hidden="true"
        />
        {/* soft vignette for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden="true" />
        <div className="relative flex min-h-[62vh] flex-col justify-between gap-10 p-8 md:min-h-[72vh] md:p-14 lg:p-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              {eyebrow && (
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {eyebrow}
                </p>
              )}
              <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-extrabold leading-[0.95] tracking-tight text-white">
                {title}
              </h1>
            </div>
            {rightText && (
              <p className="max-w-xs text-base leading-relaxed text-white/85 md:pt-6 md:text-right">
                {rightText}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

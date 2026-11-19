import { ReactNode } from "react";
import { Reveal, FadeIn } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  cta?: { label: string; href: string };
  className?: string;
  align?: "left" | "center";
};

// Two-column section header: big title left, descriptor + CTA right.
export default function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  className,
  align = "left",
}: Props) {
  return (
    <div
      className={cn(
        "mb-14 grid gap-6 md:grid-cols-2 md:items-end",
        align === "center" && "md:grid-cols-1 md:text-center",
        className
      )}
    >
      <div>
        {eyebrow && (
          <FadeIn>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          <Reveal>{title}</Reveal>
        </h2>
      </div>
      {(description || cta) && (
        <FadeIn delay={0.15} className="md:justify-self-end md:text-right">
          {description && (
            <p className="max-w-sm text-base leading-relaxed text-muted">{description}</p>
          )}
          {cta && (
            <a
              href={cta.href}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </FadeIn>
      )}
    </div>
  );
}

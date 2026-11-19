"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
};

// Infinite marquee: children should be duplicated content (rendered twice).
export default function Marquee({ children, className, pauseOnHover = true, reverse = false }: Props) {
  return (
    <div className={cn("overflow-hidden", pauseOnHover && "marquee-paused", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

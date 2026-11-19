"use client";

import Image from "next/image";
import portrait from "@/assets/portrait-home.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCard from "@/components/HeroCard";
import WordRotator from "@/components/WordRotator";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/hooks";

export default function HomeHero() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const cardRadius = useTransform(scrollYProgress, [0, 0.4], [0, reduced ? 0 : 24]);

  return (
    <div className="px-4 pt-24 md:px-8 md:pt-28">
      <motion.div
        style={reduced ? undefined : { borderTopLeftRadius: cardRadius, borderTopRightRadius: cardRadius }}
        className="relative mx-auto max-w-7xl"
      >
        <HeroCard
          eyebrow={site.heroEyebrow}
          gradient="ember"
          className="!px-0 !pt-0"
          title={<WordRotator />}
        >
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="max-w-md text-2xl font-bold leading-snug text-white md:text-3xl">
                “{site.tagline}”
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                {site.heroSupporting}
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {site.services.slice(0, 4).map((s, i) => (
                  <li
                    key={s.id}
                    className="flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-extrabold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* portrait with scroll parallax */}
            <motion.div
              style={reduced ? undefined : { y: imgY }}
              className="relative hidden aspect-[3/4] max-h-[540px] w-full max-w-md overflow-hidden rounded-3xl border border-white/15 lg:block"
            >
              <Image
                src={portrait}
                alt="Portrait of Emmanuel Mensah Sarpong"
                fill
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-white">
                  {site.role}
                </p>
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  {site.location}
                </p>
              </div>
            </motion.div>
          </div>
        </HeroCard>
      </motion.div>
    </div>
  );
}

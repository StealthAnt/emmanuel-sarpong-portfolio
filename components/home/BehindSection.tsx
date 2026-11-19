"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/content/site";

const cards = [
  { label: "Campaign craft", image: "/images/projects/telecel-unlock-x.jpg" },
  { label: "Brand worlds", image: "/images/projects/vaseline-even-tone.jpg" },
  { label: "People first", image: "/images/projects/sc-mental-health-unmask.jpg" },
];

export default function BehindSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32" aria-labelledby="behind">
      <SectionHeader
        eyebrow="Behind the Designs"
        title={
          <span id="behind">{site.behindTitle}</span>
        }
        description={site.behindParagraph}
        cta={{ label: "More about me", href: "/about" }}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <FadeIn key={c.label} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
              <p className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-widest text-white">
                {c.label}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="mt-10">
        <MagneticButton href="/projects">See selected work</MagneticButton>
      </FadeIn>
    </section>
  );
}

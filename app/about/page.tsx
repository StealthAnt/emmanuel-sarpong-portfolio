import type { Metadata } from "next";
import Image from "next/image";
import portrait from "@/assets/about-portrait.jpg";
import homePortrait from "@/assets/portrait-home.jpg";
import HeroCard from "@/components/HeroCard";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { Reveal, FadeIn } from "@/components/Reveal";
import Stat from "@/components/Stat";
import RichText from "@/components/RichText";
import { site } from "@/content/site";
import { education, certifications, tools, languages, achievements } from "@/content/credentials";

export const metadata: Metadata = {
  title: "About",
  description:
    "The person behind the work — Creative Designer & Art Director Emmanuel Mensah Sarpong at Ogilvy Africa, Accra.",
};

export default function AboutPage() {
  return (
    <>
      <HeroCard
        eyebrow={site.aboutEyebrow}
        title="About"
        rightText="The Person Behind the Work"
        gradient="violet"
        image={portrait}
      />

      {/* Who I am */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              Who I am
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              <Reveal>Design with a point of view.</Reveal>
            </h2>
            <FadeIn delay={0.2} className="mt-10">
              <div className="relative aspect-[3/4] max-w-xs overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={homePortrait}
                  alt="Emmanuel Mensah Sarpong"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {site.bio.map((p, i) => (
                <RichText key={i} text={p} />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <Stat {...s} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-muted">
            Industries: {site.industries.join(" · ")}
          </p>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32" aria-labelledby="services">
        <SectionHeader
          eyebrow="Capabilities"
          title={<span id="services">What I Can Help You With</span>}
          description="From a single key visual to a full multi-channel platform — scoped to the brief, obsessed over the details."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {site.services.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-20px_rgba(255,90,31,0.35)]">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />
                <p className="text-xs font-bold text-accent">#{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <section className="mx-auto max-w-4xl px-5 pb-28 md:px-8 md:pb-36">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="Where I've been, and what I've been doing."
        />
        <Timeline />
      </section>

      {/* Education & credentials */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32" aria-labelledby="credentials">
        <SectionHeader
          eyebrow="Background"
          title={<span id="credentials">Education & Credentials</span>}
          description="The study, certification and recognition behind the work."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-8">
              <h3 className="text-lg font-bold text-accent">Education</h3>
              <ul className="mt-5 space-y-5">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-bold">{e.degree}</p>
                    <p className="mt-1 text-sm text-muted">{e.school}</p>
                    <p className="mt-1 text-xs text-muted/70">
                      {e.period}
                      {e.note ? ` · ${e.note}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-8">
              <h3 className="text-lg font-bold text-accent">Certifications</h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Tools */}
        <FadeIn delay={0.15} className="mt-5">
          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
            <h3 className="text-lg font-bold text-accent">Tools & Production</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              <span className="font-bold text-white">Languages:</span> {languages.join(" · ")}
            </p>
          </div>
        </FadeIn>

        {/* Achievements */}
        <FadeIn delay={0.2} className="mt-5">
          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
            <h3 className="text-lg font-bold text-accent">Recognition</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

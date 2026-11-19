import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { coverStyle } from "@/lib/gradients";
import { Reveal, FadeIn } from "@/components/Reveal";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectFilms from "@/components/ProjectFilms";
import MagneticButton from "@/components/MagneticButton";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.brand} — ${project.title}`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: Params) {
  const idx = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[idx];
  if (!project) notFound();
  const next = projects[(idx + 1) % projects.length];

  const sections = [
    { label: "The Challenge", body: project.challenge },
    { label: "The Idea", body: project.idea },
    { label: "The Outcome", body: project.outcome },
  ];

  return (
    <>
      {/* Cover */}
      <section className="px-4 pt-24 md:px-8 md:pt-28">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] md:rounded-[2.75rem]"
          style={coverStyle(project.cover)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative flex min-h-[55vh] flex-col justify-end p-8 md:min-h-[65vh] md:p-14">
            <FadeIn>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {project.brand} · {project.industry}
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl">
                <Reveal>{project.title}</Reveal>
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/75">
                <span>{project.year}</span>
                <span>{project.role}</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
          <Reveal>{project.summary}</Reveal>
        </p>

        <div className="mt-20 space-y-16">
          {sections.map((s, i) => (
            <FadeIn key={s.label} delay={0.05}>
              <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-10">
                <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
                  {s.label}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {project.videos && project.videos.length > 0 && (
          <div className="mt-24">
            <FadeIn>
              <h2 className="mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">
                <Reveal>Films</Reveal>
              </h2>
            </FadeIn>
            <ProjectFilms videos={project.videos} title={project.title} />
          </div>
        )}

        {project.gallery.length > 0 && (
          <div className="mt-24">
            <FadeIn>
              <h2 className="mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">
                <Reveal>Gallery</Reveal>
              </h2>
            </FadeIn>
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        )}

        {/* Next project */}
        <FadeIn className="mt-28">
          <Link
            href={`/projects/${next.slug}`}
            data-cursor="view"
            className="group relative block overflow-hidden rounded-[2rem]"
          >
            <div className="absolute inset-0" style={coverStyle(next.cover)} />
            <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
            <div className="relative flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-end md:p-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Next project
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-white md:text-5xl">
                  {next.brand} — {next.title}
                </h3>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-ink transition-transform group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        </FadeIn>

        <div className="mt-16">
          <MagneticButton href="/projects" variant="dark">
            ← All projects
          </MagneticButton>
        </div>
      </article>
    </>
  );
}

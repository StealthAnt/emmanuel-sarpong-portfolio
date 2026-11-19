"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { projects, industries, type Project } from "@/content/projects";
import { coverStyle } from "@/lib/gradients";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/Reveal";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.industry === filter)),
    [filter]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by industry">
        {industries.map((ind) => (
          <button
            key={ind}
            role="tab"
            aria-selected={filter === ind}
            onClick={() => setFilter(ind)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              filter === ind
                ? "border-accent bg-accent text-white"
                : "border-white/15 text-muted hover:border-white/40 hover:text-white"
            )}
          >
            {ind}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor="view"
        className="group block overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={coverStyle(project.cover)}
          />
          <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.industry}
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{project.brand}</p>
          <h3 className="mt-1.5 text-xl font-bold leading-snug">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{project.summary}</p>
          <p className="mt-4 text-xs text-muted/70">{project.year} · {project.role}</p>
        </div>
      </Link>
    </motion.div>
  );
}

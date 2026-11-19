"use client";

import { useRef } from "react";
import type { ProjectVideo } from "@/content/projects";

export default function ProjectFilms({ videos, title }: { videos: ProjectVideo[]; title: string }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {videos.map((v, i) => (
        <figure key={v.src} className="group overflow-hidden rounded-3xl bg-zinc-900">
          <video
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={v.src}
            poster={v.poster}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full object-cover"
            aria-label={`${title} — ${v.caption ?? "video"}`}
            onPlay={() => {
              refs.current.forEach((el, j) => {
                if (j !== i && el) el.pause();
              });
            }}
          />
          {v.caption && (
            <figcaption className="px-5 py-4 text-sm text-muted">{v.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

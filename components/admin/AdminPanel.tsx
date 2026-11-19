"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/content/projects";

type Draft = Omit<Project, "videos"> & { videosText: string };

function toDraft(p: Project): Draft {
  return {
    ...p,
    gallery: p.gallery ?? [],
    videosText: (p.videos ?? [])
      .map((v) => [v.src, v.poster, v.caption ?? ""].join(" | "))
      .join("\n"),
  };
}

function fromDraft(d: Draft): Project {
  const { videosText, ...rest } = d;
  const videos = videosText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [src, poster, caption] = l.split("|").map((s) => s.trim());
      return { src, poster, caption: caption || undefined };
    })
    .filter((v) => v.src && v.poster);
  return { ...rest, videos: videos.length ? videos : undefined };
}

const inputCls =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none";
const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-400";

export default function AdminPanel({
  projects: initial,
  industries,
}: {
  projects: Project[];
  industries: string[];
}) {
  const [projects, setProjects] = useState<Project[]>(initial);
  const [selected, setSelected] = useState<string>(initial[0]?.slug ?? "");
  const [draft, setDraft] = useState<Draft | null>(initial[0] ? toDraft(initial[0]) : null);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const current = useMemo(() => projects.find((p) => p.slug === selected), [projects, selected]);

  function select(slug: string) {
    setSelected(slug);
    const p = projects.find((x) => x.slug === slug);
    setDraft(p ? toDraft(p) : null);
    setStatus("");
  }

  function set<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((d) => (d ? { ...d, [key]: value } : d));
  }

  async function save() {
    if (!draft) return;
    const updated = fromDraft(draft);
    const next = projects.some((p) => p.slug === updated.slug)
      ? projects.map((p) => (p.slug === updated.slug ? updated : p))
      : [...projects, updated];
    setSaving(true);
    setStatus("");
    const res = await fetch("/api/admin/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    setSaving(false);
    if (res.ok) {
      setProjects(next);
      setStatus("Saved — content/projects.admin.json updated. Refresh the site to see changes.");
      router.refresh();
    } else {
      const data = await res.json().catch(() => null);
      if (data?.projects) {
        // Read-only fs: offer download
        const blob = new Blob([JSON.stringify(data.projects, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "projects.admin.json";
        a.click();
        setStatus("Filesystem is read-only — downloaded projects.admin.json. Commit it to content/ and redeploy.");
      } else {
        setStatus(data?.error ?? "Save failed");
      }
    }
  }

  async function reset() {
    if (!confirm("Reset all projects to the values in content/projects.ts?")) return;
    await fetch("/api/admin/projects", { method: "DELETE" });
    setStatus("Reset — admin overrides cleared.");
    router.refresh();
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "projects.json";
    a.click();
  }

  if (!draft) return <p className="text-zinc-400">No projects.</p>;

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      {/* Project list */}
      <aside className="space-y-1">
        {projects.map((p) => (
          <button
            key={p.slug}
            onClick={() => select(p.slug)}
            className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
              p.slug === selected ? "bg-accent/20 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="block font-semibold">{p.brand}</span>
            <span className="block truncate text-xs text-zinc-500">{p.title}</span>
          </button>
        ))}
        <button
          onClick={() => {
            const slug = `project-${Date.now()}`;
            const p: Project = {
              slug,
              brand: "New Brand",
              title: "New Project",
              year: new Date().getFullYear().toString(),
              role: "",
              industry: industries[1] ?? "FMCG",
              summary: "",
              cover: "ember",
              gallery: [],
              challenge: "",
              idea: "",
              outcome: "",
            };
            setProjects((ps) => [...ps, p]);
            select(slug);
          }}
          className="mt-3 w-full rounded-xl border border-dashed border-white/20 px-4 py-3 text-sm text-zinc-400 hover:border-accent hover:text-white"
        >
          + New project
        </button>
      </aside>

      {/* Editor */}
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Slug</label>
            <input className={inputCls} value={draft.slug} onChange={(e) => set("slug", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Brand</label>
            <input className={inputCls} value={draft.brand} onChange={(e) => set("brand", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Title</label>
            <input className={inputCls} value={draft.title} onChange={(e) => set("title", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Year</label>
            <input className={inputCls} value={draft.year} onChange={(e) => set("year", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Role</label>
            <input className={inputCls} value={draft.role} onChange={(e) => set("role", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Industry</label>
            <select className={inputCls} value={draft.industry} onChange={(e) => set("industry", e.target.value)}>
              {industries.filter((i) => i !== "All").map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Cover (gradient key or /images/… path)</label>
            <input className={inputCls} value={draft.cover} onChange={(e) => set("cover", e.target.value)} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Summary</label>
          <textarea rows={2} className={inputCls} value={draft.summary} onChange={(e) => set("summary", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Challenge</label>
          <textarea rows={3} className={inputCls} value={draft.challenge} onChange={(e) => set("challenge", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Idea</label>
          <textarea rows={3} className={inputCls} value={draft.idea} onChange={(e) => set("idea", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Outcome</label>
          <textarea rows={3} className={inputCls} value={draft.outcome} onChange={(e) => set("outcome", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Gallery — one image path per line</label>
          <textarea
            rows={4}
            className={inputCls}
            value={draft.gallery.join("\n")}
            onChange={(e) => set("gallery", e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
          />
        </div>
        <div>
          <label className={labelCls}>Videos — one per line: src | poster | caption</label>
          <textarea
            rows={3}
            className={inputCls}
            value={draft.videosText}
            onChange={(e) => set("videosText", e.target.value)}
            placeholder={"/videos/foo.mp4 | /images/projects/foo-poster.jpg | Optional caption"}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={save}
            disabled={saving}
            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save project"}
          </button>
          <button onClick={exportJson} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/5">
            Export JSON
          </button>
          <button onClick={reset} className="rounded-full border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-300 hover:bg-red-500/10">
            Reset overrides
          </button>
          {current && (
            <a
              href={`/projects/${current.slug}`}
              target="_blank"
              className="ml-auto text-sm text-accent hover:underline"
            >
              View live ↗
            </a>
          )}
        </div>
        {status && <p className="text-sm text-emerald-400">{status}</p>}
        <p className="text-xs text-zinc-500">
          Saves write to <code>content/projects.admin.json</code> on the local filesystem. On Vercel the
          filesystem is read-only — use Export JSON / the downloaded file and commit it instead.
        </p>
      </div>
    </div>
  );
}

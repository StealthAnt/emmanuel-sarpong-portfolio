import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { isAdmin } from "@/lib/admin-auth";
import { projects } from "@/content/projects";

export const runtime = "nodejs";

const FILE = path.join(process.cwd(), "content", "projects.admin.json");

export async function GET() {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ projects });
}

export async function PUT(req: Request) {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Expected an array of projects" }, { status: 400 });
  }
  try {
    await fs.writeFile(FILE, JSON.stringify(body, null, 2) + "\n", "utf8");
    return NextResponse.json({ ok: true, persisted: true });
  } catch {
    // Read-only filesystem (e.g. Vercel) — return the payload so the client
    // can download it and commit it manually.
    return NextResponse.json(
      { ok: false, persisted: false, projects: body, note: "Filesystem is read-only — download the JSON and commit it to content/projects.admin.json" },
      { status: 507 },
    );
  }
}

export async function DELETE() {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await fs.writeFile(FILE, "[]\n", "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Filesystem is read-only" }, { status: 507 });
  }
}

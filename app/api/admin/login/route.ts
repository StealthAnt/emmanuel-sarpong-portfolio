import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADMIN_COOKIE_OPTS,
  adminConfigured,
  sessionToken,
  verifyPassword,
} from "@/lib/admin-auth";

export async function POST(req: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Admin is not configured. Set ADMIN_PASSWORD." }, { status: 503 });
  }
  const { password } = await req.json().catch(() => ({}));
  if (typeof password !== "string" || !verifyPassword(password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, sessionToken(), ADMIN_COOKIE_OPTS);
  return res;
}

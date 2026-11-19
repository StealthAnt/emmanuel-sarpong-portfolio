import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ems_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
  return process.env.ADMIN_PASSWORD || "";
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function token(password: string) {
  return createHmac("sha256", password).update("ems-admin-session").digest("hex");
}

export function verifyPassword(password: string) {
  const expected = secret();
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function sessionToken() {
  return token(secret());
}

export function isAdmin() {
  if (!adminConfigured()) return false;
  const value = cookies().get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(sessionToken());
  return a.length === b.length && timingSafeEqual(a, b);
}

export const ADMIN_COOKIE_OPTS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE,
};

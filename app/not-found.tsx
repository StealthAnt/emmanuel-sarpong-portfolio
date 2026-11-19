import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-7xl font-extrabold tracking-tight text-accent md:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-bold">This page took a wrong turn.</h1>
      <p className="mt-2 max-w-sm text-muted">
        The page you’re looking for doesn’t exist — but the work does.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </section>
  );
}

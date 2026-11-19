import type { Metadata } from "next";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";
import { projects, industries } from "@/content/projects";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminPanel from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Portfolio admin</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        Projects
      </h1>

      {!adminConfigured() ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-zinc-300">
          Admin is not configured. Set the <code className="text-accent">ADMIN_PASSWORD</code> environment
          variable and restart the server.
        </div>
      ) : !isAdmin() ? (
        <AdminLogin />
      ) : (
        <div className="mt-10">
          <AdminPanel projects={projects} industries={industries} />
        </div>
      )}
    </main>
  );
}

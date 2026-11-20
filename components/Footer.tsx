import Link from "next/link";
import { site } from "@/content/site";
import MagneticButton from "./MagneticButton";

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.2 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.03 0-2.34 1.58-2.34 3.2V21H9z" />
    ),
    behance: (
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11.195h3.584c2.508 0 2.906-3-.312-3H3v3zm3.731 3H3v3.016h4.2c3.311 0 2.454-3.016-.47-3.016z" />
    ),
    instagram: (
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.96 3.9 2.42 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.url);

  return (
    <footer className="border-t border-white/5">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-gradient-to-br from-accent via-[#ff3d77] to-[#7c3aed] p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              {site.contactEyebrow}
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Have a project in mind?
            </h2>
          </div>
          <MagneticButton href="/contact" variant="light" className="shrink-0">
            Start the conversation
            <span aria-hidden="true">→</span>
          </MagneticButton>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-white/5 px-5 py-8 md:flex-row md:items-center md:px-8">
        <p className="text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/admin" className="text-sm text-muted/60 transition-colors hover:text-white">
            Admin
          </Link>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-muted transition-colors hover:text-white"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">{site.location}</p>
      </div>
    </footer>
  );
}

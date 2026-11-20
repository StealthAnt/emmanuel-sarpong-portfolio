import type { Metadata } from "next";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import ContactForm from "@/components/ContactForm";
import { FadeIn, Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Emmanuel Mensah Sarpong — Creative Designer & Art Director at Ogilvy Africa, Accra, Ghana.",
};

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.2 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.03 0-2.34 1.58-2.34 3.2V21H9z" />,
    behance: <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11.195h3.584c2.508 0 2.906-3-.312-3H3v3zm3.731 3H3v3.016h4.2c3.311 0 2.454-3.016-.47-3.016z" />,
    instagram: <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.96 3.9 2.42 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}

export default function ContactPage() {
  const socials = site.socials.filter((s) => s.url);

  return (
    <>
      <HeroCard
        eyebrow="Let's Create"
        title="Contact"
        rightText="Let's build something great together. Start the conversation today."
        gradient="neon"
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-32">
        <div>
          <FadeIn>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              Direct lines
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight">
              <Reveal>Say hello.</Reveal>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted">WhatsApp</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-3 text-2xl font-bold text-accent transition-transform hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted">Email</p>
              <p className="mt-2 text-lg text-muted">Available on request — use the form or WhatsApp.</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted">CV</p>
              <a
                href={site.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-accent"
              >
                Download résumé (PDF) ↗
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted">Socials</p>
              <div className="mt-3 flex gap-4">
                {socials.length ? (
                  socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <SocialIcon icon={s.icon} />
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-muted">Links coming soon.</p>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </section>
    </>
  );
}

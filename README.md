# Emmanuel Mensah Sarpong — Portfolio

Production-ready portfolio site for Emmanuel Mensah Sarpong, Creative Designer & Art Director at Ogilvy Africa. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, Lenis and Resend.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for the contact form (`/api/contact`) |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form submissions |

Without these vars the site still builds and runs — the contact form shows an error state on submit.

## Content — where to edit copy (no component changes needed)

- `content/site.ts` — name, roles, tagline, bio, services, stats, socials, nav, WhatsApp number.
- `content/projects.ts` — all project/case-study data (slug, brand, year, role, industry, summary, cover, gallery, challenge, idea, outcome). `cover`/`gallery` accept a gradient key (`ember`, `violet`, `sunset`, `midnight`, `crimson`, `mint`, `gold`, `ocean`, `neon` — see `lib/gradients.ts`) **or** an image path like `/images/foo.jpg`.
- `content/brands.ts` — client list, in render order.
- `content/experience.ts` — About-page timeline. Entries marked `todo: true` are placeholders.

## Swapping in real assets

- **Client logos**: drop `public/logos/{slug}.svg` for any brand in `content/brands.ts` — the text wordmark fallback is replaced automatically.
- **Project images**: add files under `public/images/` and set `cover`/`gallery` entries to the path.
- **Portrait / hero imagery**: real photos live in `assets/` and are statically imported (`portrait-home.jpg` → home hero, `about-portrait.jpg` → About page) via `next/image` with automatic blur placeholders. Replace the files or the imports in `components/home/HomeHero.tsx` and `app/about/page.tsx`.

## Deploy (Vercel)

```bash
git init && git add -A && git commit -m "Portfolio"
npx vercel          # or connect the repo in the Vercel dashboard
```

Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Project → Settings → Environment Variables. Update the `metadataBase`/sitemap/robots URLs in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` once the real domain is known.

## TODO / [ASSUMED] placeholders for the client

- `site.email` — real email address (empty; form is the primary contact channel for now).
- `site.socials` — LinkedIn / Behance / Instagram URLs (hidden until filled).
- `site.heroTitles`, `site.tagline`, `site.heroSupporting`, `site.behindTitle`, `site.behindParagraph` — assumed copy, easily editable.
- `content/experience.ts` — two earlier roles marked TODO.
- `content/projects.ts` — all 6 projects are placeholders pending real case studies.
- Accent colour `#FF5A1F` and font (Plus Jakarta Sans) are assumed from the mockup.
- Domain `emmanuel-sarpong.vercel.app` is a placeholder in metadata/sitemap/robots/JSON-LD.
- Resend `from` address uses the onboarding domain until a verified domain is configured.

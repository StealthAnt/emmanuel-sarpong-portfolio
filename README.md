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
| `ADMIN_PASSWORD` | Password for the `/admin` project editor (unset = admin disabled) |

Without the Resend vars the site still builds and runs — the contact form shows an error state on submit.

## Content — where to edit copy (no component changes needed)

- `content/site.ts` — name, roles, tagline, bio, services, stats, socials, nav, WhatsApp number.
- `content/projects.ts` — all project/case-study data (slug, brand, year, role, industry, summary, cover, gallery, videos, challenge, idea, outcome). `cover`/`gallery` accept a gradient key (`ember`, `violet`, `sunset`, `midnight`, `crimson`, `mint`, `gold`, `ocean`, `neon` — see `lib/gradients.ts`) **or** an image path like `/images/foo.jpg`. `videos` entries are `{ src, poster, caption? }` with MP4s under `public/videos/`.
- `content/projects.admin.json` — overrides written by the `/admin` editor (empty array = use `projects.ts` as-is).
- `content/brands.ts` — client list, in render order.
- `content/experience.ts` — About-page timeline. Entries marked `todo: true` are placeholders.

## Swapping in real assets

- **Client logos**: `public/logos/{slug}.svg` files are auto-detected at build time. Placeholder typographic wordmarks are already in place (regenerate with `node scripts/gen-logos.cjs`); drop in the real brand SVGs using the same filenames to replace them.
- **Project images**: add files under `public/images/` and set `cover`/`gallery` entries to the path.
- **Project videos**: MP4s live in `public/videos/` and are referenced via a project's `videos` array; each needs a `poster` image under `public/images/`.
- **Portrait / hero imagery**: real photos live in `assets/` and are statically imported (`portrait-home.jpg` → home hero, `about-portrait.jpg` → About page) via `next/image` with automatic blur placeholders. Replace the files or the imports in `components/home/HomeHero.tsx` and `app/about/page.tsx`.

## Deploy (Vercel)

```bash
git init && git add -A && git commit -m "Portfolio"
npx vercel          # or connect the repo in the Vercel dashboard
```

Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `ADMIN_PASSWORD` in Project → Settings → Environment Variables. Update the `metadataBase`/sitemap/robots URLs in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` once the real domain is known.

## TODO / [ASSUMED] placeholders for the client

- `site.email` — real email address (empty; form is the primary contact channel for now).
- `site.socials` — LinkedIn / Behance / Instagram URLs (hidden until filled).
- `site.heroTitles`, `site.tagline`, `site.heroSupporting`, `site.behindTitle`, `site.behindParagraph` — assumed copy, easily editable.
- `content/experience.ts` — timeline now reflects the client's CV; Pelican Hotel entry is marked "Project-based" (CV gives no dates).
- `content/projects.ts` — project copy is OCR-derived from the creatives; challenge/idea/outcome sections are inferred and need client review. Case-study metrics still marked `[Metrics to be added by client.]`.

## Admin (`/admin`)

Password-protected project editor. Sign in with `ADMIN_PASSWORD`, edit any project's fields (including videos as `src | poster | caption` lines), and save — writes to `content/projects.admin.json` locally. On Vercel the filesystem is read-only, so the panel offers an JSON export/download to commit instead.
- Accent colour `#FF5A1F` and font (Plus Jakarta Sans) are assumed from the mockup.
- Domain `emmanuel-sarpong.vercel.app` is a placeholder in metadata/sitemap/robots/JSON-LD.
- Resend `from` address uses the onboarding domain until a verified domain is configured.

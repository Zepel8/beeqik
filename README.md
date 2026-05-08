# Beeqik — Single-Page Sourcing Site (MVP)

Next.js 14 + Tailwind, designed to launch fast and validate Google search visibility,
trust, and conversion. Built per `MVP Website Implementation Plan.md`.

## Stack

- **Next.js 14** (App Router, static-friendly)
- **Tailwind CSS**
- **TypeScript**
- **Vercel** for one-click deploy

No database, no CMS, no backend. The contact form posts to **Web3Forms** (free), with a
mailto fallback when no key is configured.

## Local development

```bash
npm install
cp .env.example .env.local   # optional — fill in keys when ready
npm run dev
```

Visit http://localhost:3000.

Production build check:

```bash
npm run build
npm run start
```

## Editing content

| What                  | File                                 |
| --------------------- | ------------------------------------ |
| Contact / phone / email | `content/site.ts`                  |
| 6 product cards       | `content/products.ts`                |
| Hero copy             | `components/Hero.tsx`                |
| Why Beeqik copy       | `components/WhyBeeqik.tsx`           |
| Process steps         | `components/HowItWorks.tsx`          |
| SEO title / metadata  | `app/layout.tsx`                     |

To add real product photos: drop a WebP/JPG in `public/products/` and set `image:
"/products/your-file.webp"` on the matching entry in `content/products.ts`. Without
an image, the card shows a colored gradient with the product initials — fine for
launch.

## Environment variables

Set in `.env.local` for development, or in Vercel project settings for production.

| Var                          | Purpose                                                |
| ---------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_GA_ID`          | GA4 measurement ID (e.g. `G-XXXXXXXXXX`). Optional.    |
| `b4e30777-7b0a-4a8d-a148-08f9a4607ee0`  | Web3Forms access key. Optional — empty = mailto fallback. |

## Deploy to Vercel (recommended)

1. `git init && git add . && git commit -m "init"`
2. Push to GitHub.
3. Go to https://vercel.com → **New Project** → import the repo → Deploy.
4. Add the two env vars above in **Project Settings → Environment Variables**.
5. **Domains** → add `beeqik.com` (and `www.beeqik.com`) → follow DNS instructions.

Expected first deploy: ~1 minute. Each future `git push` redeploys automatically.

## Validation checklist (per the plan)

After launch:

- [ ] Submit `https://beeqik.com/sitemap.xml` to **Google Search Console**.
- [ ] Verify GSC ownership (Vercel-hosted DNS or `<meta>` via `app/layout.tsx`).
- [ ] Confirm GA4 events fire: `inquiry_submit`, plus button clicks via `data-cta` attributes.
- [ ] Run **PageSpeed Insights** — target Performance > 90 mobile.
- [ ] Send the WhatsApp link to a test phone, confirm pre-filled message works.
- [ ] Submit a test inquiry, confirm email arrives at `lu@beeqik.com`.

## Setting up the contact form (Web3Forms)

1. Sign up at https://web3forms.com (free, no credit card).
2. Add `lu@beeqik.com` as the destination email and verify it.
3. Copy the access key into `NEXT_PUBLIC_WEB3FORMS_KEY` (Vercel + `.env.local`).
4. Test the form — first submission may need spam-folder check on the destination inbox.

## Tracking events (GA4)

Once `NEXT_PUBLIC_GA_ID` is set, you can build GA4 custom events on the existing
`data-cta="…"` attributes (`hero-quote`, `hero-whatsapp`, `nav-whatsapp`,
`contact-whatsapp`, `contact-email`, `form-submit`) using GTM, or extend
`Contact.tsx` / button handlers with `gtag('event', …)` calls.

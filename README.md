# aquibyazdani.com

Personal portfolio built with Next.js 16. Content comes from a headless CMS made of two sibling repos:

- [`../portfolio-api`](../portfolio-api) — Express + MongoDB content API (media stored in GridFS).
- [`../portfolio-admin`](../portfolio-admin) — React admin panel for editing everything.

## Running locally

```bash
cp .env.example .env.local   # CONTENT_API_URL + REVALIDATE_SECRET (must match the API)
npm install
npm run dev                  # http://localhost:3000
```

Start the API first (`npm run dev` in `portfolio-api`). `CONTENT_API_URL` is required: the CMS is the only source of content, so the site will not build or render without it.

## What comes from where

| From the CMS | From the code |
|---|---|
| Profile (name, role, bio text, contact details, portrait, resume PDF) | Navigation, footer labels |
| Projects, blog posts, skills, experience, education, awards, social links | Section headings, button and card labels |
| The active contact form (fields, messages, delivery) | Blog mid-article CTA, 404 page |
| SEO: site defaults, per-page titles/descriptions/share images, `llms.txt` | Theme colours, layout, animations |
| Privacy policy and terms text | |

Design copy is collected in [src/config/site.ts](src/config/site.ts). Structured data (schema.org Person) is derived from experience, education and skills in [src/lib/jsonld.ts](src/lib/jsonld.ts).

## How content flows

1. `src/lib/content.ts` → `getContent()` fetches `/api/public/content` once per request, cached by Next for 5 minutes under the `content` tag.
2. Saving anything in the admin makes the API `POST /api/revalidate` here, which purges that cache — edits are live within seconds.
3. While a route waits on that fetch, `app/loading.tsx` renders a loader; if the API is unreachable, `app/error.tsx` renders a retry instead. There is no local snapshot, so the CMS is the only source of content.
4. Images and the resume PDF are public Cloudflare R2 URLs stored in the CMS; the site renders them as-is and keeps no image files of its own. An empty image field shows a placeholder, and the resume download button is hidden until a PDF is uploaded. The old `/Md_Aquib_Yazdani.pdf` link redirects to the current resume.
5. Skill and social icons are stored as Lucide icon names and resolved in `src/lib/icons.tsx`.
6. The contact form (`src/components/ContactForm.tsx`) renders whatever fields the active form defines and posts them to the API, which handles delivery — saving to the submissions inbox, emailing via Resend, recording the sender in the audience list and sending them a branded acknowledgement. No email credentials reach the browser.


## Deploy

Netlify via `@netlify/plugin-nextjs`. Set `CONTENT_API_URL` (deployed API origin) and `REVALIDATE_SECRET` in the site's environment, and set the API's `REVALIDATE_URL` to `https://<site>/api/revalidate`.

# aquibyazdani.com

Personal portfolio built with Next.js 16. All copy, projects, blog posts, skills, experience, SEO metadata and media come from a headless CMS made of two sibling repos:

- [`../portfolio-api`](../portfolio-api) — Express + MongoDB content API (media stored in GridFS).
- [`../portfolio-admin`](../portfolio-admin) — React admin panel for editing everything.

## Running locally

```bash
cp .env.example .env.local   # CONTENT_API_URL + REVALIDATE_SECRET (must match the API)
npm install
npm run dev                  # http://localhost:3000
```

Start the API first (`npm run dev` in `portfolio-api`). If `CONTENT_API_URL` is unset or the API is down, the site renders from `src/content/fallback.json` instead, so it always builds.

## How content flows

1. `src/lib/content.ts` → `getContent()` fetches `/api/public/content` once per request, cached by Next for 5 minutes under the `content` tag.
2. Saving anything in the admin makes the API `POST /api/revalidate` here, which purges that cache — edits are live within seconds.
3. Images and the resume PDF come from the API; when a field is empty the site falls back to the bundled assets in `src/assets` (mapped by project slug in `src/lib/fallback-images.ts`).
4. Skill and social icons are stored as Lucide icon names and resolved in `src/lib/icons.tsx`.

`npm run content:snapshot` refreshes the fallback JSON from the API — run it and commit after big content changes.

## Deploy

Netlify via `@netlify/plugin-nextjs`. Set `CONTENT_API_URL` (deployed API origin) and `REVALIDATE_SECRET` in the site's environment, and set the API's `REVALIDATE_URL` to `https://<site>/api/revalidate`.

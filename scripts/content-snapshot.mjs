// Refreshes src/content/fallback.json from the live content API. The snapshot
// is what the site renders when the API is unreachable, so re-run this
// (and commit the result) after significant content changes.
//
//   CONTENT_API_URL=https://api.example.com node scripts/content-snapshot.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const base = (process.env.CONTENT_API_URL ?? "http://localhost:4000").replace(/\/$/, "");
const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/content/fallback.json");

const res = await fetch(`${base}/api/public/content`);
if (!res.ok) {
  console.error(`Content API responded ${res.status}`);
  process.exit(1);
}
const json = await res.json();
writeFileSync(out, JSON.stringify(json, null, 2) + "\n");
console.log(`Saved snapshot (${json.projects.length} projects, ${json.blogPosts.length} posts) to ${path.relative(process.cwd(), out)}`);

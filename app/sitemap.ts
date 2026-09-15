import type { MetadataRoute } from "next";
import { getContent, siteUrl, type SeoPageKey } from "@/lib/content";

const PAGES: Array<{ key: SeoPageKey; path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }> = [
  { key: "home", path: "", changeFrequency: "monthly", priority: 1 },
  { key: "about", path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { key: "projects", path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { key: "blog", path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { key: "resume", path: "/resume", changeFrequency: "monthly", priority: 0.8 },
  { key: "contact", path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { key: "privacy", path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { key: "terms", path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getContent();
  const base = siteUrl(content);
  const now = new Date();

  // Pages hidden from search engines stay out of the sitemap too.
  const pages = PAGES.filter((p) => !content.seo.pages[p.key].noindex).map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const posts = content.blogPosts
    .filter((p) => !p.seo.noindex)
    .map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.lastUpdated || p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...pages, ...posts];
}

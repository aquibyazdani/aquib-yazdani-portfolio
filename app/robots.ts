import type { MetadataRoute } from "next";
import { getContent, siteUrl } from "@/lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = siteUrl(await getContent());
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

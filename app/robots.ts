import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://aquibyazdani.com/sitemap.xml",
    host: "https://aquibyazdani.com",
  };
}

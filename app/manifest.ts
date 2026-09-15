import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getContent } from "@/lib/content";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { seo, profile } = await getContent();
  return {
    name: seo.defaultTitle || seo.siteName,
    short_name: profile.name,
    description: seo.defaultDescription,
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: site.theme.color,
    background_color: site.theme.background,
    display: "standalone",
    start_url: "/",
    scope: "/",
  };
}

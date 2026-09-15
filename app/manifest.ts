import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { site, profile } = await getContent();
  const m = site.manifest;
  return {
    name: m.name || site.defaultTitle,
    short_name: m.shortName || profile.name,
    description: m.description || site.description,
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: m.themeColor || "#0a0a0a",
    background_color: m.backgroundColor || "#0a0a0a",
    display: "standalone",
    start_url: "/",
    scope: "/",
  };
}

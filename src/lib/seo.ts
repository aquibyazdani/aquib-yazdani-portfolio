import type { Metadata } from "next";
import { ogImageUrl, siteUrl, type Content, type Seo } from "./content";

/**
 * Builds page metadata from a CMS `seo` block, falling back to the
 * site-wide defaults for anything left empty.
 */
export function pageMetadata(
  content: Content,
  seo: Seo | undefined,
  opts: {
    path: string;
    title?: string;
    description?: string;
    type?: "website" | "article";
    article?: { publishedTime?: string; modifiedTime?: string; authors?: string[]; tags?: string[] };
  }
): Metadata {
  const base = siteUrl(content);
  const url = `${base}${opts.path}`;
  const title = seo?.title || opts.title || content.site.defaultTitle;
  const description = seo?.description || opts.description || content.site.description;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const image = ogImageUrl(content, seo);

  return {
    title,
    description,
    keywords: seo?.keywords.length ? seo.keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: ogTitle,
      description: ogDescription,
      images: [{ url: image, width: 1200, height: 630, alt: seo?.ogImage.alt || ogTitle }],
      ...(opts.type === "article" ? { type: "article" as const, ...opts.article } : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: [image] },
  };
}

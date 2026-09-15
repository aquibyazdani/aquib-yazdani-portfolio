import type { Metadata } from "next";
import { ogImageUrl, siteUrl, type Content, type PageSeo, type SeoPageKey } from "./content";

type Options = {
  path: string;
  /** Used when the CMS title is empty. */
  title?: string;
  description?: string;
  type?: "website" | "article";
  article?: { publishedTime?: string; modifiedTime?: string; authors?: string[]; tags?: string[] };
};

/**
 * Builds page metadata from a CMS SEO block, falling back to the site-wide
 * defaults for anything left empty. Pass a page key for site pages or a
 * PageSeo object for blog posts.
 */
export function pageMetadata(content: Content, page: SeoPageKey | PageSeo, opts: Options): Metadata {
  const seo = typeof page === "string" ? content.seo.pages[page] : page;
  const base = siteUrl(content);
  const url = `${base}${opts.path}`;
  const title = seo.title || opts.title || content.seo.defaultTitle;
  const description = seo.description || opts.description || content.seo.defaultDescription;
  const ogTitle = seo.ogTitle || title;
  const ogDescription = seo.ogDescription || description;
  const image = ogImageUrl(content, seo);
  const keywords = seo.keywords.length ? seo.keywords : content.seo.defaultKeywords;

  return {
    // An explicit title skips the "%s | Site" template; the template is for
    // pages that only set a short name.
    title: seo.title ? { absolute: seo.title } : title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: seo.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      url,
      title: ogTitle,
      description: ogDescription,
      images: [{ url: image, width: 1200, height: 630, alt: seo.ogImage.alt || ogTitle }],
      ...(opts.type === "article" ? { type: "article" as const, ...opts.article } : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: [image] },
  };
}

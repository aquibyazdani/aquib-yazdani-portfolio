import { cache } from "react";
import fallback from "../content/fallback.json";

// ─── Types (mirror portfolio-api/src/content/schemas.ts) ─────────────────────

export type Image = { url: string; alt: string };
export type Seo = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: Image;
};

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  url: string;
  year: string;
  role: string;
  client: string;
  badge: string;
  linkLabel: string;
  description: string;
  achievements: string[];
  techStack: string[];
  images: { featured: Image; notable: Image; personal: Image };
  placements: { featured: boolean; notable: boolean; personal: boolean; resume: boolean };
  resume: { techStack: string; description: string };
  published: boolean;
  order: number;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered: boolean }
  | { type: "code"; language: string; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; url: string; alt: string; caption: string }
  | { type: "divider" };

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  publishedAt: string;
  lastUpdated: string;
  readingTime: string;
  tags: string[];
  coverAccent: string;
  coverImage: Image;
  featured: boolean;
  published: boolean;
  content: BlogBlock[];
  seo: Seo;
};

export type Skill = { name: string; icon: string };
export type SkillCategory = { id: string; title: string; skills: Skill[]; order: number };
export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  periodLabel: string;
  period: string;
  responsibilities: string[];
};
export type Education = { id: string; institution: string; degree: string; startYear: string; endYear: string; grade: string };
export type Award = { id: string; title: string; organization: string; date: string; description: string };
export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: string;
  newTab: boolean;
  placements: { hero: boolean; about: boolean; footer: boolean; contact: boolean };
};

type CollectionKeys = "projects" | "blogPosts" | "skillCategories" | "experience" | "education" | "awards" | "socialLinks";

export type Content = Omit<typeof fallback, CollectionKeys> & {
  projects: Project[];
  blogPosts: BlogPost[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  socialLinks: SocialLink[];
};

export type Profile = Content["profile"];
export type Site = Content["site"];
export type Integrations = Content["integrations"];

// ─── Fetching ────────────────────────────────────────────────────────────────

export const CONTENT_TAG = "content";

/**
 * Loads all site content from the CMS API. Cached by Next for 5 minutes and
 * purged on demand by /api/revalidate. Falls back to the committed snapshot
 * (src/content/fallback.json) when the API is unreachable or not configured,
 * so builds never fail because of the CMS.
 */
export const getContent = cache(async (): Promise<Content> => {
  const snapshot = fallback as unknown as Content;
  const base = process.env.CONTENT_API_URL?.replace(/\/$/, "");
  if (!base) return snapshot;

  try {
    const res = await fetch(`${base}/api/public/content`, {
      next: { revalidate: 300, tags: [CONTENT_TAG] },
    });
    if (!res.ok) throw new Error(`content API responded ${res.status}`);
    return (await res.json()) as Content;
  } catch (err) {
    console.warn("[content] using fallback snapshot:", err instanceof Error ? err.message : err);
    return snapshot;
  }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function siteUrl(content: Content) {
  return (content.site.siteUrl || "https://aquibyazdani.com").replace(/\/$/, "");
}

export function yearsOfExperience(content: Content) {
  const start = new Date(content.profile.careerStartDate);
  if (Number.isNaN(start.getTime())) return null;
  const years = (Date.now() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.max(1, Math.floor(years));
}

export function copyrightText(content: Content) {
  const template = content.site.copyright || `© {year} ${content.profile.name}`;
  return template.replace("{year}", String(new Date().getFullYear()));
}

export function ogImageUrl(content: Content, seo?: Seo) {
  return seo?.ogImage.url || content.site.ogImage.url || `${siteUrl(content)}/opengraph-image`;
}

export const socialFor = (content: Content, place: keyof SocialLink["placements"]) =>
  content.socialLinks.filter((s) => s.placements[place]);

export const projectsFor = (content: Content, place: keyof Project["placements"]) =>
  content.projects.filter((p) => p.placements[place]);

/** Props shared by every page: header, footer and the contact section. */
export function chromeProps(content: Content) {
  return {
    nav: { logoText: content.profile.logoText || content.profile.name, items: content.navigation.items.filter((i) => i.visible) },
    footer: {
      copyright: copyrightText(content),
      privacyLabel: content.site.privacyLinkLabel || "Privacy Policy",
      termsLabel: content.site.termsLinkLabel || "Terms & Conditions",
      social: socialFor(content, "footer"),
      name: content.profile.name,
    },
    contact: {
      copy: content.contact,
      email: content.profile.email,
      location: content.profile.location,
      social: socialFor(content, "contact"),
      emailjs: {
        serviceId: content.integrations.emailjsServiceId,
        templateId: content.integrations.emailjsTemplateId,
        publicKey: content.integrations.emailjsPublicKey,
      },
      name: content.profile.name,
    },
  };
}

export type ChromeProps = ReturnType<typeof chromeProps>;

/** Formats "2026-06-10" as "June 10, 2026". */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

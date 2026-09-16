import { cache } from "react";
import { site } from "../config/site";

// ─── Types (mirror portfolio-api/src/content/schemas.ts) ─────────────────────

export type Image = { url: string; alt: string };

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: Image;
  noindex: boolean;
};

export type SeoPageKey = "home" | "about" | "projects" | "blog" | "resume" | "contact" | "privacy" | "terms";

export type Seo = {
  siteName: string;
  siteUrl: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  twitterHandle: string;
  defaultOgImage: Image;
  shareCard: { title: string; subtitle: string; tagline: string; meta: string };
  llmsTxt: string;
  pages: Record<SeoPageKey, PageSeo>;
};

export type Profile = {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  tagline: string;
  intro: string;
  shortBio: string;
  bio: string;
  summary: string;
  skillsSummary: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  region: string;
  countryCode: string;
  careerStartDate: string;
  portrait: Image;
  resumePdf: { url: string; fileName: string };
};

export type Integrations = { gaId: string; adsenseClientId: string };

export type LegalPage = { lastUpdated: string; sections: Array<{ heading: string; body: string }> };

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
  seo: PageSeo;
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
export type SocialLink = { id: string; name: string; url: string; icon: string; newTab: boolean; showInHero: boolean };

export type FormFieldType = "text" | "email" | "tel" | "url" | "textarea" | "select" | "checkbox";
export type FormField = {
  label: string;
  name: string;
  type: FormFieldType;
  placeholder: string;
  required: boolean;
  width: "full" | "half";
  options: string[];
};
export type ContactForm = {
  id: string;
  name: string;
  description: string;
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  submitUrl: string;
};

export type Content = {
  profile: Profile;
  seo: Seo;
  integrations: Integrations;
  privacy: LegalPage;
  terms: LegalPage;
  projects: Project[];
  blogPosts: BlogPost[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  socialLinks: SocialLink[];
  form: ContactForm | null;
  updatedAt: string | null;
};

// ─── Fetching ────────────────────────────────────────────────────────────────

export const CONTENT_TAG = "content";

/**
 * Loads all site content from the CMS API. Cached by Next for 5 minutes and
 * purged on demand by /api/revalidate. There is no local snapshot: the CMS is
 * the only source of content, so a failure here surfaces rather than serving
 * something stale. app/error.tsx renders the message.
 */
export const getContent = cache(async (): Promise<Content> => {
  const base = process.env.CONTENT_API_URL?.replace(/\/$/, "");
  if (!base) throw new Error("CONTENT_API_URL is not set — every page renders from the CMS API.");

  const res = await fetch(`${base}/api/public/content`, {
    next: { revalidate: 300, tags: [CONTENT_TAG] },
  });
  if (!res.ok) throw new Error(`Content API responded ${res.status} ${res.statusText}`);
  return (await res.json()) as Content;
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function siteUrl(content: Content) {
  return (content.seo.siteUrl || "https://aquibyazdani.com").replace(/\/$/, "");
}

export function displayName(content: Content) {
  return content.profile.fullName || content.profile.name;
}

export function yearsOfExperience(content: Content) {
  const start = new Date(content.profile.careerStartDate);
  if (Number.isNaN(start.getTime())) return null;
  const years = (Date.now() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.max(1, Math.floor(years));
}

export function copyrightText(content: Content) {
  return site.footer.copyright.replace("{year}", String(new Date().getFullYear())).replace("{name}", content.profile.name);
}

export function ogImageUrl(content: Content, seo?: PageSeo) {
  return seo?.ogImage.url || content.seo.defaultOgImage.url || `${siteUrl(content)}/opengraph-image`;
}

export const projectsFor = (content: Content, place: keyof Project["placements"]) =>
  content.projects.filter((p) => p.placements[place]);

/** The most recent role, used as the current employer in structured data. */
export function currentRole(content: Content) {
  return content.experience.find((e) => !e.endDate) ?? content.experience[0] ?? null;
}

/** Props shared by every page: header, footer and the contact section. */
export function chromeProps(content: Content) {
  return {
    nav: { logoText: content.profile.name },
    footer: { copyright: copyrightText(content), social: content.socialLinks, name: content.profile.name },
    contact: {
      form: content.form,
      email: content.profile.email,
      location: content.profile.location,
      social: content.socialLinks,
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

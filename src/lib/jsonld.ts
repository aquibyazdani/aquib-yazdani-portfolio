import { currentRole, displayName, ogImageUrl, siteUrl, type Content } from "./content";

/**
 * schema.org Person, derived from CMS content so it never drifts from what
 * the pages show: employer from the latest role, school from education,
 * expertise from the skill list.
 */
export function personJsonLd(content: Content) {
  const { profile } = content;
  const role = currentRole(content);
  const school = content.education[0];
  const knowsAbout = content.skillCategories.flatMap((c) => c.skills.map((s) => s.name));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: displayName(content),
    alternateName: profile.fullName && profile.fullName !== profile.name ? profile.name : undefined,
    jobTitle: profile.role || undefined,
    url: siteUrl(content),
    email: profile.email || undefined,
    image: ogImageUrl(content),
    address: profile.city
      ? { "@type": "PostalAddress", addressLocality: profile.city, addressRegion: profile.region || undefined, addressCountry: profile.countryCode || undefined }
      : undefined,
    sameAs: content.socialLinks.map((s) => s.url).filter((u) => /^https?:/.test(u)),
    knowsAbout: knowsAbout.length ? knowsAbout : undefined,
    worksFor: role?.company ? { "@type": "Organization", name: role.company } : undefined,
    alumniOf: school ? { "@type": "EducationalOrganization", name: school.institution } : undefined,
  };
}

export function websiteJsonLd(content: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.seo.siteName,
    url: siteUrl(content),
    description: content.seo.defaultDescription || undefined,
    author: { "@type": "Person", name: displayName(content) },
  };
}

import { displayName, siteUrl, type Content } from "./content";

/** Placeholders available inside privacy / terms section bodies. */
export function legalTokens(content: Content): Record<string, string> {
  const professional = content.projects.filter((p) => p.placements.notable || (p.placements.featured && !p.placements.personal));
  const personal = content.projects.filter((p) => p.placements.personal);
  const names = (list: typeof content.projects) => [...new Set(list.map((p) => p.shortTitle || p.title))].join(", ");

  return {
    name: content.profile.name,
    fullName: displayName(content),
    email: content.profile.email,
    siteUrl: siteUrl(content),
    domain: siteUrl(content).replace(/^https?:\/\//, ""),
    location: content.profile.location,
    professionalProjects: names(professional),
    personalProjects: names(personal),
  };
}

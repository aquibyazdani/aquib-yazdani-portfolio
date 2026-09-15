import { site } from "@/config/site";
import { displayName, getContent, siteUrl, yearsOfExperience, type Content } from "@/lib/content";

// Plain-text summary for AI crawlers. Editable in the admin (SEO → llms.txt);
// generated from profile, skills, experience and projects when left empty.
export async function GET() {
  const content = await getContent();
  const text = content.seo.llmsTxt.trim() || generate(content);
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}

function generate(content: Content) {
  const { profile, seo } = content;
  const name = displayName(content);
  const years = yearsOfExperience(content);
  const base = siteUrl(content);
  const lines: string[] = [];

  lines.push(`# ${name} — ${profile.role}`, "");
  lines.push("## Who I am", "");
  lines.push(profile.summary || `${name} is a ${profile.role}${years ? ` with ${years} years of experience` : ""} based in ${profile.location}.`, "");
  if (profile.email) lines.push(`Email: ${profile.email}`);
  for (const s of content.socialLinks.filter((s) => /^https?:/.test(s.url))) lines.push(`${s.name}: ${s.url}`);
  lines.push(`Portfolio: ${base}`, "");

  if (content.skillCategories.length) {
    lines.push("## Core expertise", "");
    for (const c of content.skillCategories) lines.push(`- ${c.title}: ${c.skills.map((s) => s.name).join(", ")}`);
    lines.push("");
  }

  if (content.experience.length) {
    lines.push("## Professional experience", "");
    for (const e of content.experience) {
      lines.push(`**${e.title} — ${e.company}** (${e.period})`);
      for (const r of e.responsibilities.slice(0, 4)) lines.push(`- ${r}`);
      lines.push("");
    }
  }

  const projects = content.projects.filter((p) => p.placements.notable || p.placements.featured);
  if (projects.length) {
    lines.push("## Notable projects", "");
    for (const p of projects) lines.push(`- ${p.title}${p.url ? ` (${p.url})` : ""}${p.description ? ` — ${p.description}` : ""}`);
    lines.push("");
  }

  if (content.education.length) {
    lines.push("## Education", "");
    for (const e of content.education) {
      lines.push(`${e.degree} — ${e.institution} (${[e.startYear, e.endYear].filter(Boolean).join("–")}${e.grade ? `, ${e.grade}` : ""})`);
    }
    lines.push("");
  }

  lines.push("## Site structure", "");
  for (const item of site.nav) lines.push(`- ${item.path} — ${item.label}`);
  lines.push("");

  if (seo.defaultDescription) lines.push("## Summary", "", seo.defaultDescription, "");
  return lines.join("\n");
}

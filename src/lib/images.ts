import type { Image, Profile, Project } from "./content";

// Images come from the CMS as full R2 URLs. These helpers only supply alt
// text when the CMS left it blank; when there is no URL, callers render a
// placeholder instead of a bundled file.

export function projectImage(project: Project, kind: keyof Project["images"]): Image | null {
  const image = project.images[kind];
  return image.url ? { url: image.url, alt: image.alt || project.title } : null;
}

export function profileImage(profile: Profile): Image {
  return {
    url: profile.portrait.url,
    alt: profile.portrait.alt || [profile.name, profile.role].filter(Boolean).join(" — "),
  };
}

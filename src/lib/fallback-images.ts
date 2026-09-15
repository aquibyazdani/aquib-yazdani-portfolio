import type { StaticImageData } from "next/image";
import adlob from "../assets/adlob.png";
import portfolio from "../assets/aquib-portfolio.png";
import ecommerce from "../assets/ecommerce.png";
import funpark from "../assets/funpark.png";
import hero from "../assets/hero.png";
import libsilong from "../assets/libsilong.png";
import mm from "../assets/mm.png";
import screener from "../assets/screener.png";
import screenr_long from "../assets/screenr_long.png";
import spotify from "../assets/spotify.png";
import toi from "../assets/toi.png";
import woovet from "../assets/woovet.png";
import type { Image, Profile, Project } from "./content";

// Images bundled with the site, used whenever the CMS has no image set.
// Keyed by project slug so the originals keep working after migration.

type Kind = keyof Project["images"];

const PROJECT_IMAGES: Record<string, Partial<Record<Kind, StaticImageData>>> = {
  "toi-epaper-times-of-india": { featured: toi, notable: toi, personal: toi },
  "libsi-markah-e-commerce": { featured: libsilong, notable: libsilong, personal: libsilong },
  woovet: { featured: woovet, notable: woovet, personal: woovet },
  "memorable-mumbai": { featured: mm, notable: mm, personal: mm },
  "screener-zamzam-capital": { featured: screenr_long, notable: screenr_long, personal: screener },
  "adlob-response-4you-times-of-india": { featured: adlob, notable: adlob, personal: adlob },
  portfolio: { personal: portfolio },
  "amusement-park": { personal: funpark },
  "e-commerce-clone": { personal: ecommerce },
  "spotify-clone": { personal: spotify },
  "screener-personal": { personal: screener },
  "toi-epaper-archive-archive": { personal: toi },
};

export function projectImage(project: Project, kind: Kind): Image | null {
  const cms = project.images[kind];
  if (cms?.url) return { url: cms.url, alt: cms.alt || project.title };
  const bundled = PROJECT_IMAGES[project.slug]?.[kind];
  return bundled ? { url: bundled.src, alt: cms?.alt || project.title } : null;
}

export function portraitImage(profile: Profile): Image {
  return {
    url: profile.portrait.url || hero.src,
    alt: profile.portrait.alt || `${profile.name} — ${profile.role} based in ${profile.location}`,
  };
}

export const FALLBACK_RESUME_PDF = "/Md_Aquib_Yazdani.pdf";

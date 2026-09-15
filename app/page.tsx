import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import { chromeProps, getContent, projectsFor } from "@/lib/content";
import { portraitImage } from "@/lib/fallback-images";
import { websiteJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "home", { path: "" });
}

export default async function Home() {
  const content = await getContent();
  const { profile } = content;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(content)) }} />
      <Portfolio
        chrome={chromeProps(content)}
        name={profile.name}
        tagline={profile.tagline}
        shortBio={profile.shortBio}
        bio={profile.bio}
        portrait={portraitImage(profile)}
        heroSocial={content.socialLinks.filter((s) => s.showInHero)}
        featured={projectsFor(content, "featured")}
      />
    </>
  );
}

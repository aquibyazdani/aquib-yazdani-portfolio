import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import { chromeProps, getContent, projectsFor, siteUrl, socialFor } from "@/lib/content";
import { portraitImage } from "@/lib/fallback-images";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.home.seo, { path: "" });
}

export default async function Home() {
  const content = await getContent();
  const { profile, home, site } = content;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.siteName,
    url: siteUrl(content),
    description: home.websiteDescription || site.description,
    author: { "@type": "Person", name: profile.legalName || profile.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Portfolio
        chrome={chromeProps(content)}
        name={profile.name}
        heroTagline={profile.heroTagline}
        portrait={portraitImage(profile)}
        home={home}
        heroSocial={socialFor(content, "hero")}
        featured={projectsFor(content, "featured")}
        labels={content.projectsPage}
      />
    </>
  );
}

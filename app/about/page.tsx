import type { Metadata } from "next";
import About from "@/components/About";
import { chromeProps, getContent, socialFor } from "@/lib/content";
import { portraitImage } from "@/lib/fallback-images";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.about.seo, { path: "/about", title: `About ${content.profile.name}` });
}

export default async function AboutPage() {
  const content = await getContent();
  const { profile } = content;

  return (
    <About
      chrome={chromeProps(content)}
      name={profile.name}
      role={profile.role}
      portrait={portraitImage(profile)}
      about={content.about}
      categories={content.skillCategories.filter((c) => c.page === "about")}
      experience={content.experience}
      social={socialFor(content, "about")}
    />
  );
}

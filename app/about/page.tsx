import type { Metadata } from "next";
import About from "@/components/About";
import { chromeProps, getContent } from "@/lib/content";
import { profileImage } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "about", { path: "/about", title: "About" });
}

export default async function AboutPage() {
  const content = await getContent();
  const { profile } = content;

  return (
    <About
      chrome={chromeProps(content)}
      profile={profile}
      portrait={profileImage(profile)}
      categories={content.skillCategories}
      experience={content.experience}
      social={content.socialLinks}
    />
  );
}

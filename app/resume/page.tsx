import type { Metadata } from "next";
import Resume from "@/components/Resume";
import { chromeProps, getContent, projectsFor } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "resume", { path: "/resume", title: "Resume" });
}

export default async function ResumePage() {
  const content = await getContent();
  const { profile } = content;

  return (
    <Resume
      chrome={chromeProps(content)}
      profile={profile}
      categories={content.skillCategories}
      experience={content.experience}
      education={content.education}
      awards={content.awards}
      projects={projectsFor(content, "resume")}
      pdf={profile.resumePdf.url ? profile.resumePdf : null}
    />
  );
}

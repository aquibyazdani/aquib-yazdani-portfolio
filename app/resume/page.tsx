import type { Metadata } from "next";
import Resume from "@/components/Resume";
import { chromeProps, getContent, projectsFor } from "@/lib/content";
import { FALLBACK_RESUME_PDF } from "@/lib/fallback-images";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.resumePage.seo, { path: "/resume", title: "Resume" });
}

export default async function ResumePage() {
  const content = await getContent();
  const { profile } = content;

  return (
    <Resume
      chrome={chromeProps(content)}
      profile={profile}
      page={content.resumePage}
      categories={content.skillCategories}
      experience={content.experience}
      education={content.education}
      awards={content.awards}
      projects={projectsFor(content, "resume")}
      pdf={{
        url: profile.resumePdf.url || FALLBACK_RESUME_PDF,
        fileName: profile.resumePdf.fileName || FALLBACK_RESUME_PDF.slice(1),
      }}
    />
  );
}

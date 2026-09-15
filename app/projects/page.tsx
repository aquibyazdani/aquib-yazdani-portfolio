import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { chromeProps, getContent, projectsFor } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.projectsPage.seo, { path: "/projects", title: "Projects" });
}

export default async function ProjectsPage() {
  const content = await getContent();
  return (
    <Projects
      chrome={chromeProps(content)}
      page={content.projectsPage}
      notable={projectsFor(content, "notable")}
      personal={projectsFor(content, "personal")}
    />
  );
}

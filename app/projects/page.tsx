import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Md Aquib Yazdani, Sr. Software Engineer Portfolio",
  description:
    "Portfolio of projects by Md Aquib Yazdani — Times of India ePaper (10M+ DAU), Zamzam Capital Screener, Adlob ad platform (200+ agencies), and more.",
  keywords: [
    "Md Aquib Yazdani",
    "Projects",
    "Portfolio",
    "React Developer",
    "Next.js",
    "TypeScript",
    "TOI Epaper",
    "Zamzam Capital Screener",
    "Adlob",
  ],
  alternates: { canonical: "https://aquibyazdani.com/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}

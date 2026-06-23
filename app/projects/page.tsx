import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Md Aquib Yazdani | React, Next.js, Node.js Portfolio",
  description:
    "Times of India ePaper (10M+ DAU), AAA arbitration platform, Zamzam Capital Screener, Adlob (200+ agencies), Libsi Markah e-commerce. React, Next.js, Node.js, MongoDB.",
  alternates: { canonical: "https://aquibyazdani.com/projects" },
  keywords: [
    // Project names — what people may search
    "Times of India ePaper developer",
    "TOI ePaper React frontend",
    "Adlob advertisement platform React",
    "Zamzam Capital Screener",
    "Halal stock screening app",
    "Libsi Markah e-commerce Next.js",
    "AAA arbitration portal React TypeScript",
    "American Arbitration Association digital platform",
    // Tech used in projects
    "React.js project portfolio",
    "Next.js project portfolio",
    "TypeScript project examples",
    "Node.js Express MongoDB project",
    "AWS EC2 deployment",
    "Redux Context API state management",
    "Google AdSense GTM integration",
    "Web Speech API text to speech",
    "Virtualized list performance",
    "Chart.js data visualization",
    "REST API integration React",
    "Styled Components Bootstrap",
    // General
    "Sr. Software Engineer portfolio",
    "software engineering projects India",
    "React developer portfolio Pune",
    "Md Aquib Yazdani projects",
  ],
  openGraph: {
    url: "https://aquibyazdani.com/projects",
    title: "Projects — Md Aquib Yazdani | React, Next.js, Node.js Portfolio",
    description:
      "Times of India ePaper (10M+ DAU), AAA arbitration platform, Zamzam Capital Screener, Adlob (200+ agencies) — React, Next.js, Node.js, MongoDB.",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Projects — Md Aquib Yazdani | React, Next.js Portfolio",
    description:
      "Times of India ePaper (10M+ DAU), AAA arbitration platform, Zamzam Capital Screener, Adlob (200+ agencies).",
    images: ["https://aquibyazdani.com/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return <Projects />;
}

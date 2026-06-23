import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Md Aquib Yazdani — Sr. Software Engineer",
  description:
    "Sr. Software Engineer — React, Next.js, TypeScript, Node.js, AI integration. Built Times of India ePaper (60M+ MAU), AAA arbitration platform, Auth0 SSO. Pune, India.",
  alternates: { canonical: "https://aquibyazdani.com" },
  keywords: [
    "Md Aquib Yazdani portfolio",
    "Sr. Software Engineer Pune",
    "React Next.js TypeScript developer",
    "Node.js Express developer",
    "AI LLM integration engineer",
    "frontend architect India",
    "JavaScript expert",
    "Times of India developer",
    "American Arbitration Association tech",
    "Auth0 SSO developer",
    "micro-frontend engineer",
    "full stack software engineer",
    "React developer India",
    "Next.js developer Pune",
  ],
  openGraph: {
    url: "https://aquibyazdani.com",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aquib Yazdani Portfolio",
  url: "https://aquibyazdani.com",
  description:
    "Personal portfolio of Md Aquib Yazdani, Sr. Software Engineer specializing in React, Next.js, TypeScript, Node.js, and AI integration.",
  author: { "@type": "Person", name: "Md Aquib Yazdani" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Portfolio />
    </>
  );
}

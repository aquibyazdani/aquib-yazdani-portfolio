import type { Metadata } from "next";
import BlogList from "../../src/components/BlogList";

export const metadata: Metadata = {
  title: "Blog — Md Aquib Yazdani",
  description:
    "Articles on frontend engineering, system design, AI integration, and building products at scale. React, Next.js, TypeScript, and more.",
  alternates: { canonical: "https://aquibyazdani.com/blog" },
  openGraph: {
    url: "https://aquibyazdani.com/blog",
    title: "Blog — Md Aquib Yazdani",
    description:
      "Thoughts on frontend engineering, system design, AI integration, and building products at scale.",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <BlogList />;
}

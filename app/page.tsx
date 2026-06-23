import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Md Aquib Yazdani — Sr. Software Engineer",
  description:
    "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale — Times of India (60M+ MAU), AI-integrated apps, WCAG accessibility.",
  alternates: { canonical: "https://aquibyazdani.com" },
};

export default function Home() {
  return <Portfolio />;
}

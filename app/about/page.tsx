import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Md Aquib Yazdani — Sr. Software Engineer, Pune",
  description:
    "Meet Md Aquib Yazdani — Sr. Software Engineer with 5 years building scalable products. Led React & Next.js builds serving 60M+ users. Based in Pune, India.",
  keywords: [
    "Md Aquib Yazdani",
    "About",
    "Sr. Software Engineer",
    "React Developer",
    "Next.js",
    "Full-stack Developer",
    "TypeScript",
    "Pune India",
  ],
  alternates: { canonical: "https://aquibyazdani.com/about" },
};

export default function AboutPage() {
  return <About />;
}

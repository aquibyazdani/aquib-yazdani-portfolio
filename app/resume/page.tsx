import type { Metadata } from "next";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume — Md Aquib Yazdani, Sr. Software Engineer",
  description:
    "Professional resume of Md Aquib Yazdani — Sr. Software Engineer with React, Next.js & TypeScript expertise. 5 years at Harns Technologies and Zensar Technologies.",
  keywords: [
    "Md Aquib Yazdani",
    "Resume",
    "CV",
    "Sr. Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Zensar Technologies",
  ],
  alternates: { canonical: "https://aquibyazdani.com/resume" },
};

export default function ResumePage() {
  return <Resume />;
}

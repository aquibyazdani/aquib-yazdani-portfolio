import type { Metadata } from "next";
import Terms from "../../src/components/Terms";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for aquibyazdani.com — permitted use, intellectual property, and legal information for this personal portfolio website.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <Terms />;
}

import type { Metadata } from "next";
import PrivacyPolicy from "../../src/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for aquibyazdani.com — how your data is handled when you use the contact form or visit this portfolio website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

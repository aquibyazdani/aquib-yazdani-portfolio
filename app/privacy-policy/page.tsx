import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";
import { chromeProps, getContent } from "@/lib/content";
import { legalTokens } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "privacy", { path: "/privacy-policy", title: "Privacy Policy" });
}

export default async function PrivacyPolicyPage() {
  const content = await getContent();
  return <LegalPage chrome={chromeProps(content)} title={site.legal.privacyTitle} doc={content.privacy} tokens={legalTokens(content)} />;
}

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { chromeProps, getContent } from "@/lib/content";
import { legalTokens } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.privacy.seo, { path: "/privacy-policy", title: "Privacy Policy" });
}

export default async function PrivacyPolicyPage() {
  const content = await getContent();
  return <LegalPage chrome={chromeProps(content)} doc={content.privacy} tokens={legalTokens(content)} />;
}

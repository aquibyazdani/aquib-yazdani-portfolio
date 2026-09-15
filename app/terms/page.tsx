import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";
import { chromeProps, getContent } from "@/lib/content";
import { legalTokens } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "terms", { path: "/terms", title: "Terms & Conditions" });
}

export default async function TermsPage() {
  const content = await getContent();
  return <LegalPage chrome={chromeProps(content)} title={site.legal.termsTitle} doc={content.terms} tokens={legalTokens(content)} />;
}

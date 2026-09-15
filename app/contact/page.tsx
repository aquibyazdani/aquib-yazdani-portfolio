import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { chromeProps, displayName, getContent, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "contact", { path: "/contact", title: "Contact" });
}

export default async function ContactPage() {
  const content = await getContent();
  const { profile } = content;
  const base = siteUrl(content);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${displayName(content)}`,
    url: `${base}/contact`,
    description: content.seo.pages.contact.description || undefined,
    author: { "@type": "Person", name: displayName(content), email: profile.email || undefined, url: base },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Contact chrome={chromeProps(content)} />
    </>
  );
}

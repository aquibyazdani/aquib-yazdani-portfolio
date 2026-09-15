import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { chromeProps, getContent, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, content.contact.seo, { path: "/contact", title: `Contact ${content.profile.name}` });
}

export default async function ContactPage() {
  const content = await getContent();
  const { profile } = content;
  const base = siteUrl(content);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${profile.legalName || profile.name}`,
    url: `${base}/contact`,
    description: content.contact.seo.description || undefined,
    author: { "@type": "Person", name: profile.legalName || profile.name, email: profile.email || undefined, url: base },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Contact chrome={chromeProps(content)} />
    </>
  );
}

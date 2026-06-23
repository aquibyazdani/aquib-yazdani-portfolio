import type { Metadata } from "next";
import Contact from "../../src/components/Contact";

export const metadata: Metadata = {
  title: "Contact Md Aquib Yazdani — Sr. Software Engineer",
  description:
    "Get in touch with Md Aquib Yazdani — open to new opportunities, collaborations, and interesting projects. React, Next.js & TypeScript engineer based in Pune, India.",
  alternates: { canonical: "https://aquibyazdani.com/contact" },
  keywords: [
    "contact Md Aquib Yazdani",
    "hire React developer Pune",
    "hire Next.js developer India",
    "hire TypeScript engineer",
    "hire Sr. Software Engineer India",
    "software engineer available for hire",
    "React developer contact",
    "frontend engineer contact Pune",
  ],
  openGraph: {
    url: "https://aquibyazdani.com/contact",
    title: "Contact Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Open to new opportunities and collaborations. React, Next.js & TypeScript engineer based in Pune, India.",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Contact Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Open to new opportunities and collaborations. React, Next.js & TypeScript engineer based in Pune, India.",
    images: ["https://aquibyazdani.com/opengraph-image"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Md Aquib Yazdani",
  url: "https://aquibyazdani.com/contact",
  description:
    "Contact page for Md Aquib Yazdani, Sr. Software Engineer in Pune, India.",
  author: {
    "@type": "Person",
    name: "Md Aquib Yazdani",
    email: "yazdaniaquib2@gmail.com",
    url: "https://aquibyazdani.com",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Contact />
    </>
  );
}

"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { formatDate, type ChromeProps, type Content } from "../lib/content";
import { RichText } from "../lib/richtext";

export type LegalPageProps = {
  chrome: ChromeProps;
  doc: Content["privacy"];
  tokens: Record<string, string>;
};

export default function LegalPage({ chrome, doc, tokens }: LegalPageProps) {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar {...chrome.nav} />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-[#484848] pb-10">
            <h1 className="text-[64px] lg:text-[80px] text-white leading-[0.9]">{doc.title}</h1>
            {doc.lastUpdated && (
              <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[14px]">Last updated: {formatDate(doc.lastUpdated)}</p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-10 font-['Inter',sans-serif]">
            {doc.sections.map((section, i) => (
              <section key={i} className="space-y-3">
                <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">{section.heading}</h2>
                <RichText text={section.body} tokens={tokens} className="text-[#c7c7c7] text-[15px] leading-[1.8]" />
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer {...chrome.footer} />
    </div>
  );
}

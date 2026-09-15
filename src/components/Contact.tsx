"use client";

import type { ChromeProps } from "../lib/content";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact({ chrome }: { chrome: ChromeProps }) {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar {...chrome.nav} />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ContactSection {...chrome.contact} />
        </div>
      </div>

      <Footer {...chrome.footer} />
    </div>
  );
}

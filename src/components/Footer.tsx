"use client";

import Link from "next/link";
import { site } from "../config/site";
import type { ChromeProps } from "../lib/content";
import SocialIcons from "./SocialIcons";

export default function Footer({ copyright, social, name }: ChromeProps["footer"]) {
  return (
    <footer className="mt-auto py-8 px-6 border-t border-[#484848]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left — copyright + legal */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[14px]">{copyright}</p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px] hover:text-[#d3e97a] transition-colors"
            >
              {site.footer.privacyLabel}
            </Link>
            <Link
              href="/terms"
              className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px] hover:text-[#d3e97a] transition-colors"
            >
              {site.footer.termsLabel}
            </Link>
          </div>
        </div>

        {/* Right — social icons */}
        <div className="flex gap-4">
          <SocialIcons links={social} ownerName={name} size="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}

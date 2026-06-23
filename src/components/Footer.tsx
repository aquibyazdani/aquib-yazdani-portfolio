"use client";

import Link from "next/link";
import { personalInfo, socialMedia } from "../config/portfolio";

export default function Footer() {
  return (
    <footer className="mt-auto py-8 px-6 border-t border-[#484848]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left — copyright + legal */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
            {personalInfo.copyright}
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] hover:text-[#d3e97a] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] hover:text-[#d3e97a] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Right — social icons */}
        <div className="flex gap-4">
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                aria-label={`Aquib Yazdani on ${social.name}`}
                target={social.name !== "Phone" ? "_blank" : undefined}
                rel={social.name !== "Phone" ? "noopener noreferrer" : undefined}
                className="hover:opacity-70 transition-opacity"
              >
                <Icon className="w-5 h-5 text-[#d3e97a]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

"use client";

import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { personalInfo, socialMedia } from "../config/portfolio";

export default function Contact() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-[72px] lg:text-[88px] text-white leading-[0.9]">
                  GET IN TOUCH
                </h1>
                <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.6] max-w-[480px]">
                  Open to new opportunities, collaborations, and interesting
                  conversations. Fill in the form or reach out directly.
                </p>
              </div>

              {/* Direct contact */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#d3e97a] flex-shrink-0" />
                  <span className="font-['Manrope',sans-serif] text-white text-[16px] group-hover:text-[#d3e97a] transition-colors">
                    {personalInfo.email}
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d3e97a] flex-shrink-0" />
                  <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#484848]" />

              {/* Social links */}
              <div className="space-y-4">
                <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[13px] uppercase tracking-widest">
                  Find me on
                </p>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        aria-label={`Aquib Yazdani on ${social.name}`}
                        target={social.name !== "Phone" ? "_blank" : undefined}
                        rel={
                          social.name !== "Phone"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="hover:opacity-70 transition-opacity"
                      >
                        <Icon className="w-6 h-6 text-[#d3e97a]" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume CTA */}
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-[#484848] rounded-full px-6 py-3 font-['Manrope',sans-serif] text-[14px] text-[#c7c7c7] uppercase hover:border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
              >
                View My Resume
              </Link>
            </div>

            {/* Right — Form */}
            <div className="bg-[#111111] rounded-[20px] p-8 lg:p-10">
              <ContactForm
                labelSize="text-[15px]"
                inputSize="text-[16px]"
                textareaRows={5}
                buttonPadding="px-10 py-3"
                buttonTextSize="text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#484848]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
          <Link
            href="/"
            className="font-['Manrope',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

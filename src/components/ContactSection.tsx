"use client";

import Link from "next/link";
import type { ChromeProps } from "../lib/content";
import ContactForm from "./ContactForm";
import SocialIcons from "./SocialIcons";

export default function ContactSection({ copy, email, location, social, emailjs, name }: ChromeProps["contact"]) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left — Info */}
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-[72px] lg:text-[88px] text-white leading-[0.9]">{copy.heading}</h2>
          <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.6] max-w-[480px]">
            {copy.intro}
          </p>
        </div>

        {/* Direct contact */}
        <div className="space-y-4">
          <a href={`mailto:${email}`} className="group flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#d3e97a] flex-shrink-0" />
            <span className="font-['Inter',sans-serif] text-white text-[16px] group-hover:text-[#d3e97a] transition-colors">
              {email}
            </span>
          </a>
          {location && (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d3e97a] flex-shrink-0" />
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">{location}</span>
            </div>
          )}
        </div>

        <div className="border-t border-[#484848]" />

        {/* Social links */}
        {social.length > 0 && (
          <div className="space-y-4">
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[13px] uppercase tracking-widest">
              {copy.findMeLabel}
            </p>
            <div className="flex gap-4">
              <SocialIcons links={social} ownerName={name} />
            </div>
          </div>
        )}

        {/* Resume CTA */}
        {copy.resumeButtonLabel && (
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-[#484848] rounded-full px-6 py-3 font-['Inter',sans-serif] text-[14px] text-[#c7c7c7] uppercase hover:border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
          >
            {copy.resumeButtonLabel}
          </Link>
        )}
      </div>

      {/* Right — Form */}
      <div className="bg-[#111111] rounded-[20px] p-8 lg:p-10">
        <ContactForm
          copy={copy}
          emailjs={emailjs}
          email={email}
          labelSize="text-[15px]"
          inputSize="text-[16px]"
          textareaRows={5}
          buttonPadding="px-10 py-3"
          buttonTextSize="text-[14px]"
        />
      </div>
    </div>
  );
}

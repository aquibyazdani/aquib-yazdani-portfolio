"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { personalInfo } from "../config/portfolio";

export default function PrivacyPolicy() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-[#484848] pb-10">
            <h1 className="text-[64px] lg:text-[80px] text-white leading-[0.9]">
              PRIVACY POLICY
            </h1>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[14px]">
              Last updated: June 30, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 font-['Inter',sans-serif]">
            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                OVERVIEW
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                This is the personal portfolio website of Aquib Yazdani
                (aquibyazdani.com). This Privacy Policy explains how information
                is handled when you visit this website or use the contact form.
                This site is not a commercial service — it exists solely to
                showcase professional work and skills.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                INFORMATION COLLECTED
              </h2>
              <div className="space-y-4 text-[#c7c7c7] text-[15px] leading-[1.8]">
                <p>
                  <span className="text-white font-semibold">
                    Contact Form:
                  </span>{" "}
                  When you submit the contact form, your name, email address,
                  subject, and message are collected. This information is
                  transmitted directly via{" "}
                  <span className="text-white">EmailJS</span> to a private email
                  inbox. No form submissions are stored in a database or on any
                  server.
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Analytics:
                  </span>{" "}
                  This site may use browser-standard analytics tools (such as
                  Google Analytics) to understand aggregate visitor behavior —
                  such as page views and session duration. This data is
                  anonymized and not linked to any personal identity.
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Advertising:
                  </span>{" "}
                  This site uses Google AdSense to display ads. Google and its
                  partners may use cookies and similar technologies to serve
                  ads based on your prior visits to this and other websites.
                  You can learn more about how Google uses this data at{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
                  >
                    policies.google.com/technologies/partner-sites
                  </a>
                  , and you can opt out of personalized advertising by
                  visiting{" "}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                HOW YOUR INFORMATION IS USED
              </h2>
              <ul className="space-y-2 text-[#c7c7c7] text-[15px] leading-[1.8]">
                {[
                  "To respond to inquiries submitted through the contact form.",
                  "To understand aggregate traffic patterns and improve the website experience.",
                  "Your information is never sold, rented, or shared with third parties for marketing purposes.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#d3e97a] mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                THIRD-PARTY LINKS
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                This website contains links to external profiles and projects
                (LinkedIn, GitHub, Instagram, live project demos). Clicking
                these links takes you to third-party websites governed by their
                own privacy policies. This site is not responsible for the
                privacy practices of those external services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                DATA RETENTION
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                Contact form submissions received by email are retained only as
                long as necessary to respond to your inquiry. You may request
                deletion of your email conversation at any time by contacting{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
                >
                  {personalInfo.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                YOUR RIGHTS
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                If you are located in the European Economic Area (EEA) or
                similar jurisdiction, you have the right to access, correct, or
                request deletion of any personal data submitted through this
                website. To exercise these rights, email{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
                >
                  {personalInfo.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                CHANGES TO THIS POLICY
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                This Privacy Policy may be updated occasionally. The "Last
                updated" date at the top of this page reflects the most recent
                revision. Continued use of the website after updates constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                CONTACT
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                For any questions or concerns about this Privacy Policy, reach
                out at{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
                >
                  {personalInfo.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

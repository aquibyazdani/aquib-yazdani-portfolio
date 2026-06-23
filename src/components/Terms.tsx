"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { personalInfo } from "../config/portfolio";

export default function Terms() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-[#484848] pb-10">
            <h1 className="text-[64px] lg:text-[80px] text-white leading-[0.9]">
              TERMS &amp; CONDITIONS
            </h1>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[14px]">
              Last updated: June 23, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 font-['Inter',sans-serif]">
            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                ACCEPTANCE OF TERMS
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                By accessing and using aquibyazdani.com (the "Website"), you
                accept and agree to be bound by these Terms &amp; Conditions.
                This is a personal portfolio website — not a commercial product,
                SaaS platform, or subscription service. If you do not agree to
                these terms, please discontinue use of the Website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-4 text-[#c7c7c7] text-[15px] leading-[1.8]">
                <p>
                  All content on this Website — including but not limited to
                  text, design, graphics, code, project descriptions, and the
                  portfolio structure — is the intellectual property of{" "}
                  <span className="text-white font-semibold">
                    Aquib Yazdani
                  </span>{" "}
                  unless otherwise stated.
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Professional projects
                  </span>{" "}
                  displayed (Times of India ePaper, AAA Dispute Resolution,
                  Zamzam Capital Screener, Libsi Markah, Adlob) represent work
                  done in professional employment or contract engagements. The
                  underlying codebases are proprietary to the respective
                  employers and clients. Project descriptions and achievements
                  are shared for portfolio demonstration purposes only.
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Personal projects
                  </span>{" "}
                  (Portfolio, Amusement Park, Memorable Mumbai, Spotify Clone,
                  E-commerce Clone, Screener) are built and owned by Aquib
                  Yazdani. Clone projects are built for learning and
                  demonstration purposes only and are not affiliated with the
                  original brands.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                PERMITTED USE
              </h2>
              <ul className="space-y-2 text-[#c7c7c7] text-[15px] leading-[1.8]">
                {[
                  "You may view and browse this Website for personal, non-commercial purposes.",
                  "You may share links to this Website.",
                  "You may not copy, reproduce, distribute, or commercially exploit any content from this Website without written permission.",
                  "You may not use automated scrapers, bots, or crawlers to extract data from this Website at scale.",
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
                CONTACT FORM
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                The contact form is provided to facilitate genuine professional
                inquiries. By submitting the form, you agree not to send spam,
                unsolicited marketing, or any content that is unlawful,
                offensive, or harmful. Messages are delivered directly to a
                private email — there is no moderation layer or automated
                processing applied to submissions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                EXTERNAL LINKS
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                This Website links to external services including LinkedIn,
                GitHub, Instagram, and live project URLs. These links are
                provided for reference and convenience. Aquib Yazdani has no
                control over the content, availability, or privacy practices of
                external websites and accepts no responsibility for them.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                DISCLAIMER OF WARRANTIES
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                This Website is provided "as is" without warranties of any kind,
                express or implied. While reasonable efforts are made to keep
                content accurate and up-to-date, no guarantee is made regarding
                the completeness, accuracy, or availability of the Website at
                any given time. Use of this Website is at your own risk.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                LIMITATION OF LIABILITY
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                To the fullest extent permitted by applicable law, Aquib Yazdani
                shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of, or inability to
                use, this Website or its content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                GOVERNING LAW
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                These Terms &amp; Conditions are governed by the laws of India.
                Any disputes arising from use of this Website shall be subject
                to the jurisdiction of the courts of Pune, Maharashtra, India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                CHANGES TO THESE TERMS
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                These Terms may be revised at any time. The "Last updated" date
                reflects the most recent version. Continued use of the Website
                after any changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[28px] text-[#d3e97a] leading-[1.1]">
                CONTACT
              </h2>
              <p className="text-[#c7c7c7] text-[15px] leading-[1.8]">
                Questions about these Terms &amp; Conditions can be directed to{" "}
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

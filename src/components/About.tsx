"use client";

import imgProfile from "../assets/hero.png";
import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  personalInfo,
  aboutMe,
  skills as configSkills,
  workExperience,
  socialMedia,
} from "../config/portfolio";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const capabilities = {
    "Frontend Development": configSkills.frontend,
    "State Management": configSkills.stateManagement,
    "Testing & QA": configSkills.testing,
    "Performance Optimization": configSkills.performance,
    "API Integration": configSkills.api,
    "Version Control & Collaboration": configSkills.tools,
  };

  const experiences = workExperience;

  const heroRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const experienceRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animate = (el: Element | null) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      };
      animate(heroRef.current);
      animate(capabilitiesRef.current);
      animate(experienceRef.current);
      animate(connectRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6" ref={heroRef}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-[80px] lg:text-[90px] leading-[0.9] text-white">
                    ABOUT ME
                    <span className="sr-only">
                      {" "}
                      — {personalInfo.name}, {personalInfo.role}
                    </span>
                  </h1>

                  <div className="space-y-4">
                    <p className="font-['Manrope',sans-serif] text-[24px] text-white leading-[1.4]">
                      {aboutMe.intro}
                    </p>
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                      {aboutMe.background}
                    </p>
                  </div>
                </div>

                {/* Download Resume & Social Links */}
                <div className="flex gap-4 items-center">
                  <Link
                    href="/resume"
                    className="bg-[#d3e97a] rounded-full flex items-center gap-2 px-6 py-3 hover:bg-[#c5db6c] transition-colors"
                  >
                    <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase">
                      My Resume
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p23c4ec40} fill="#0A0A0A" />
                    </svg>
                  </Link>

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
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Icon
                          className="w-6 h-6 text-[#d3e97a]"
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right - Profile Image */}
              <div className="lg:block">
                <div className="bg-[#c7c7c7] rounded-[12px] overflow-hidden">
                  <ImageWithFallback
                    src={imgProfile.src}
                    alt={`${personalInfo.name} — ${personalInfo.role} based in ${personalInfo.location}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Capabilities Section */}
        <section className="py-20 px-6" ref={capabilitiesRef}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-[64px] lg:text-[76px] text-white leading-[0.9]">
                  MY CAPABILITIES
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                  {aboutMe.capabilitiesDescription}
                </p>

                {/* Capability Tags */}
                <div className="space-y-6">
                  {Object.entries(capabilities).map(([category, skills]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="font-['Bebas_Neue',sans-serif] font-semibold text-[#d3e97a] text-[14px] uppercase">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => {
                          const Icon = skill.icon;
                          return (
                            <div
                              key={skill.name}
                              className="border border-[#484848] px-4 py-2.5 rounded-[4px] inline-flex items-center gap-2 hover:border-[#d3e97a] transition-colors"
                            >
                              <Icon className="size-4 text-[#d3e97a]" />
                              <span className="font-['Manrope',sans-serif] text-white text-[13px]">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Experience Section */}
        <section className="py-20 px-6" ref={experienceRef}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-[64px] lg:text-[76px] text-white leading-[0.9]">
                  MY EXPERIENCE
                </h2>
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="font-['Bebas_Neue',sans-serif] text-white text-[20px]">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section ref={connectRef} className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ContactSection />
          </div>
        </section>
        <Footer />
      </div>
  );
}

"use client";

import { MapPin, Download, Loader2 } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  personalInfo,
  skills,
  workExperience,
  education,
  awards,
} from "../config/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const { downloadResumeAsPDF } = await import("../utils/downloadResume");
      await downloadResumeAsPDF();
    } finally {
      setDownloading(false);
    }
  };
  const resumeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (resumeRef.current) {
        gsap.from(resumeRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: resumeRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const allSkills = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Architecture", items: skills.architecture },
    { title: "AI Integration", items: skills.aiIntegration },
    { title: "AI Dev Tools", items: skills.aiDevTools },
    { title: "State & Data", items: skills.stateAndData },
    { title: "UI & Styling", items: skills.uiAndStyling },
    { title: "Web Performance", items: skills.webPerformance },
    { title: "Auth & Security", items: skills.authAndSecurity },
    { title: "Testing", items: skills.testing },
    { title: "Build & Tooling", items: skills.buildAndTooling },
    { title: "Cloud & DevOps", items: skills.cloudAndDevOps },
    { title: "Quality & Web", items: skills.qualityAndWeb },
    { title: "Collaboration", items: skills.collaborationSkills },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* Resume Container */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Download Button */}
            <div className="flex justify-end mb-8">
              <button
                className="inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Download className="size-4" />
                )}
                <span className="font-['Manrope',sans-serif] font-bold text-[14px] uppercase">
                  {downloading ? "Generating..." : "Download Resume"}
                </span>
              </button>
            </div>

            {/* Resume Card */}
            <div
              id="resume-card"
              className="bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl"
              ref={resumeRef}
            >
              <div className="p-8 lg:p-10 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]">
                  <div className="space-y-1">
                    <h1 className="text-[48px] text-white leading-[0.9]">
                      {personalInfo.name.toUpperCase()}
                    </h1>
                    <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[18px]">
                      {personalInfo.title}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {/* <div className="flex items-center gap-2 justify-end">
                      <Mail className="size-3.5 text-[#d3e97a]" />
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <Phone className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]">
                        {personalInfo.phone}
                      </span>
                    </div> */}
                    <div className="flex items-center gap-2 justify-end">
                      <MapPin className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Summary Section */}
                <div className="space-y-2.5">
                  <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Professional Summary
                  </h2>
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[13px] leading-[1.6]">
                    {personalInfo.professionalSummary}
                  </p>
                </div>

                {/* Skills Section */}
                <div className="space-y-3">
                  <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Skills
                  </h2>

                  {allSkills.map((skillCategory) => (
                    <div key={skillCategory.title} className="space-y-1.5">
                      <h3 className="font-['Bebas_Neue',sans-serif] font-semibold text-white text-[12px]">
                        {skillCategory.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill) => {
                          const Icon = skill.icon;
                          return (
                            <span
                              key={skill.name}
                              className="font-['Manrope',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                            >
                              <Icon className="size-3" />
                              {skill.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education Section */}
                <div className="space-y-2.5">
                  <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Education
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {education.map((edu) => (
                      <div key={edu.id} className="space-y-0.5">
                        <h4 className="font-['Bebas_Neue',sans-serif] font-semibold text-white text-[13px]">
                          {edu.institution}
                        </h4>
                        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          {edu.degree}
                        </p>
                        <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]">
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience Section */}
                <div className="space-y-3">
                  <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Work Experience
                  </h2>

                  <div className="relative pl-8">
                    {/* Timeline Line */}
                    <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30" />

                    {workExperience.map((exp, index) => (
                      <div
                        key={exp.id}
                        className={`relative ${
                          index < workExperience.length - 1 ? "pb-6" : ""
                        }`}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />

                        <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-0.5 flex-1">
                              <h3 className="font-['Bebas_Neue',sans-serif] font-semibold text-white text-[15px]">
                                {exp.title}
                              </h3>
                              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]">
                                {exp.company} | {exp.location}
                              </p>
                            </div>
                            <span className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#d3e97a] mt-0.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards Section */}
                <div className="space-y-3">
                  <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Awards
                  </h2>

                  <div className="space-y-1">
                    {awards.map((award) => (
                      <div
                        key={award.id}
                        className="flex items-start gap-3 bg-[#1a1a1a]/50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#d3e97a] mt-1.5 flex-shrink-0" />
                        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          <span className="text-white font-semibold">
                            {award.title}
                          </span>{" "}
                          — {award.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
  );
}

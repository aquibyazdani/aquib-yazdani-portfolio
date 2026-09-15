"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Award, ChromeProps, Content, Education, Experience, Profile, Project, SkillCategory } from "../lib/content";
import { iconFor } from "../lib/icons";

gsap.registerPlugin(ScrollTrigger);

export type ResumeProps = {
  chrome: ChromeProps;
  profile: Profile;
  page: Content["resumePage"];
  categories: SkillCategory[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  projects: Project[];
  pdf: { url: string; fileName: string };
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Bebas_Neue',sans-serif] text-[18px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">{children}</h2>
  );
}

export default function Resume({ chrome, profile, page, categories, experience, education, awards, projects, pdf }: ResumeProps) {
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

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar {...chrome.nav} />

      {/* Resume Container */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Download Button */}
          <div className="flex justify-end mb-8">
            <a
              href={pdf.url}
              download={pdf.fileName || undefined}
              className="inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors"
            >
              <Download className="size-4" />
              <span className="font-['Inter',sans-serif] font-bold text-[14px] uppercase">{page.downloadLabel}</span>
            </a>
          </div>

          {/* Resume Card */}
          <div id="resume-card" className="bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl" ref={resumeRef}>
            <div className="p-8 lg:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]">
                <div className="space-y-1">
                  <h1 className="text-[48px] text-white leading-[0.9]">{profile.name.toUpperCase()}</h1>
                  <p className="font-['Inter',sans-serif] text-[#d3e97a] text-[18px]">{profile.headline}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {page.showEmail && profile.email && (
                    <div className="flex items-center gap-2 justify-end">
                      <Mail className="size-3.5 text-[#d3e97a]" />
                      <a href={`mailto:${profile.email}`} className="font-['Inter',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white">
                        {profile.email}
                      </a>
                    </div>
                  )}
                  {page.showPhone && profile.phone && (
                    <div className="flex items-center gap-2 justify-end">
                      <Phone className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#c7c7c7]">{profile.phone}</span>
                    </div>
                  )}
                  {profile.location && (
                    <div className="flex items-center gap-2 justify-end">
                      <MapPin className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#c7c7c7]">{profile.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Summary Section */}
              {page.showSummary && profile.professionalSummary && (
                <div className="space-y-2.5">
                  <SectionHeading>{page.summaryHeading}</SectionHeading>
                  <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[13px] leading-[1.6]">{profile.professionalSummary}</p>
                </div>
              )}

              {/* Skills Section */}
              {page.showSkills && categories.length > 0 && (
                <div className="space-y-3">
                  <SectionHeading>{page.skillsHeading}</SectionHeading>

                  {categories.map((category) => (
                    <div key={category.id} className="space-y-1.5">
                      <h3 className="font-['Bebas_Neue',sans-serif] text-white text-[14px]">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => {
                          const Icon = iconFor(skill.icon);
                          return (
                            <span
                              key={skill.name}
                              className="font-['Inter',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
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
              )}

              {/* Education Section */}
              {page.showEducation && education.length > 0 && (
                <div className="space-y-2.5">
                  <SectionHeading>{page.educationHeading}</SectionHeading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {education.map((edu) => (
                      <div key={edu.id} className="space-y-0.5">
                        <h4 className="font-['Bebas_Neue',sans-serif] text-white text-[13px]">{edu.institution}</h4>
                        <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          {edu.degree}
                          {edu.grade && <span className="text-[#888]"> · {edu.grade}</span>}
                        </p>
                        <p className="font-['Inter',sans-serif] text-[#d3e97a] text-[11px]">
                          {[edu.startYear, edu.endYear].filter(Boolean).join(" – ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Experience Section */}
              {page.showExperience && experience.length > 0 && (
                <div className="space-y-3">
                  <SectionHeading>{page.experienceHeading}</SectionHeading>

                  <div className="relative pl-8">
                    {/* Timeline Line */}
                    <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30" />

                    {experience.map((exp, index) => (
                      <div key={exp.id} className={`relative ${index < experience.length - 1 ? "pb-6" : ""}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />

                        <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-0.5 flex-1">
                              <h3 className="font-['Bebas_Neue',sans-serif] text-white text-[15px]">{exp.title}</h3>
                              <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px]">
                                {[exp.company, exp.location].filter(Boolean).join(" | ")}
                              </p>
                            </div>
                            <span className="font-['Inter',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-1 font-['Inter',sans-serif] text-[#c7c7c7] text-[12px]">
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
              )}

              {/* Notable Projects Section */}
              {page.showProjects && projects.length > 0 && (
                <div className="space-y-3">
                  <SectionHeading>{page.projectsHeading}</SectionHeading>
                  <div className="space-y-3">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-['Inter',sans-serif] font-semibold text-white text-[13px]">{project.title}</span>
                          {project.url && (
                            <>
                              <span className="text-[#484848]">•</span>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Inter',sans-serif] text-[#d3e97a] text-[12px] hover:text-white transition-colors"
                              >
                                {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                              </a>
                            </>
                          )}
                          {(project.resume.techStack || project.techStack.length > 0) && (
                            <>
                              <span className="text-[#484848]">•</span>
                              <span className="font-['Inter',sans-serif] italic text-[#c7c7c7] text-[12px]">
                                {project.resume.techStack || project.techStack.join(", ")}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          {project.resume.description || project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards Section */}
              {page.showAwards && awards.length > 0 && (
                <div className="space-y-3">
                  <SectionHeading>{page.awardsHeading}</SectionHeading>

                  <div className="space-y-1">
                    {awards.map((award) => (
                      <div key={award.id} className="flex items-start gap-3 bg-[#1a1a1a]/50 p-3 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#d3e97a] mt-1.5 flex-shrink-0" />
                        <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          <span className="text-white font-semibold">{award.title}</span>
                          {award.description && <> — {award.description}</>}
                          {(award.organization || award.date) && (
                            <span className="text-[#888]"> ({[award.organization, award.date].filter(Boolean).join(", ")})</span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer {...chrome.footer} />
    </div>
  );
}

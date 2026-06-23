"use client";

import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  personalInfo,
  notableProjects,
  personalProjects,
  socialMedia,
} from "../config/portfolio";
import Link from "next/link";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (projectsRef.current) {
        gsap.from(projectsRef.current.children, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4 mb-16">
              <h1 className="text-[80px] lg:text-[90px] text-white leading-[0.9]">
                ALL PROJECTS
              </h1>
              <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
                Here's a collection of projects that showcase my passion for
                software development and problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Notable Projects Section */}
        <section className="pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-[56px] text-white leading-[0.9]">
                NOTABLE PROJECTS
              </h2>
            </div>
            <div className="space-y-20" ref={projectsRef}>
              {notableProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                      <ImageWithFallback
                        src={project.src.src}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain p-12"
                      />
                      <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                        <span className="font-['Inter',sans-serif] text-white text-[14px]">
                          Professional
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <h3 className="font-['Bebas_Neue',sans-serif] text-[32px] text-white leading-[1.4]">
                        {project.title}
                      </h3>
                      <div className="space-y-2">
                        {project.achievements
                          .slice(0, 3)
                          .map((achievement, idx) => (
                            <p
                              key={idx}
                              className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.5]"
                            >
                              • {achievement}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-['Inter',sans-serif] font-semibold text-white text-[16px] uppercase">
                        Project Info
                      </p>
                      <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                        <div className="flex justify-between py-4">
                          <span className="font-['Inter',sans-serif] text-white text-[16px]">
                            Role
                          </span>
                          <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">
                            {project.role}
                          </span>
                        </div>
                        <div className="flex justify-between py-4">
                          <span className="font-['Inter',sans-serif] text-white text-[16px]">
                            Tech Stack
                          </span>
                          <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">
                            {project.techStack.slice(0, 3).join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-6 flex-wrap">
                      {project.title === "Screener - Zamzam Capital" && (
                        <a
                          href="https://screener.zamzam-capital.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                              Live Demo
                            </span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d={svgPaths.p3589c00} fill="#D3E97A" />
                            </svg>
                          </div>
                          <div className="h-[2px] w-full bg-[#d3e97a]" />
                        </a>
                      )}
                      {project.title === "TOI Epaper (Times of India)" && (
                        <a
                          href="https://epaper.indiatimes.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                              Live Demo
                            </span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d={svgPaths.p3589c00} fill="#D3E97A" />
                            </svg>
                          </div>
                          <div className="h-[2px] w-full bg-[#d3e97a]" />
                        </a>
                      )}
                      {project.title === "Libsi Markah E-commerce" && (
                        <a
                          href="https://libsimarkah.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                              Live Demo
                            </span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d={svgPaths.p3589c00} fill="#D3E97A" />
                            </svg>
                          </div>
                          <div className="h-[2px] w-full bg-[#d3e97a]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-[56px] text-white leading-[0.9]">
                PERSONAL PROJECTS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1a1a1a] rounded-[12px] overflow-hidden group hover:bg-[#222222] transition-colors"
                >
                  <div className="aspect-video relative overflow-hidden bg-[#0a0a0a]">
                    <ImageWithFallback
                      src={project.src.src}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-['Bebas_Neue',sans-serif] text-[24px] text-white leading-[1.4]">
                      {project.title}
                    </h3>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col gap-1"
                      >
                        <div className="flex items-center gap-1">
                          <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                            View Project
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d={svgPaths.p3589c00} fill="#D3E97A" />
                          </svg>
                        </div>
                        <div className="h-[2px] w-full bg-[#d3e97a]" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-6 border-t border-[#484848]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-[64px] lg:text-[76px] text-white leading-[0.9]">
                INTERESTED IN WORKING TOGETHER?
              </h2>
              <Link
                href="/contact"
                className="inline-flex bg-[#d3e97a] rounded-full items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors"
              >
                <span className="font-['Inter',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                  Get in Touch
                </span>
                <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p23c4ec40} fill="white" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}

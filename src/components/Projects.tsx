"use client";

import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, projects, socialMedia } from "../config/portfolio";
import NotableProjectCard from "./NotableProjectCard";
import PersonalProjectCard from "./PersonalProjectCard";
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
              {projects
                .filter((p) => p.types.includes("notable"))
                .map((project, index) => (
                  <NotableProjectCard key={project.id} project={project} index={index} />
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
              {projects
                .filter((p) => p.types.includes("personal"))
                .map((project) => (
                  <PersonalProjectCard key={project.id} project={project} />
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

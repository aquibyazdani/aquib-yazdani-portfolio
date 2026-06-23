"use client";

import imgPotrait from "../assets/hero.png";
import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import { personalInfo, aboutMe, socialLinks, projects } from "../config/portfolio";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animate = (el: Element | null) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      };
      animate(heroRef.current);
      animate(projectsRef.current);
      animate(aboutRef.current);
      animate(contactRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-[80px] lg:text-[101px] leading-[0.9] text-white">
                  HI, I AM
                  <br />
                  {personalInfo.name.toUpperCase()}.
                </h1>
                <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]">
                  {personalInfo.heroTagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 items-center flex-wrap">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors"
                >
                  <span className="font-['Inter',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                    Let's Connect
                  </span>
                  <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p23c4ec40} fill="white" />
                    </svg>
                  </div>
                </button>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aquib Yazdani on LinkedIn"
                  className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d={svgPaths.p282a2240} fill="#D3E97A" />
                    <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
                  </svg>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aquib Yazdani on GitHub"
                  className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p17e6c000}
                      fill="#D3E97A"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-[#c7c7c7] rounded-[16px] w-full max-w-[450px] mx-auto aspect-[6/7] relative overflow-hidden">
                <ImageWithFallback
                  src={imgPotrait.src}
                  alt={`${personalInfo.name} — ${personalInfo.role} based in ${personalInfo.location}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#484848]" />
      </div>

      {/* Featured Projects Section */}
      <section ref={projectsRef} id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-[76px] text-white leading-none">
              Featured Projects
            </h2>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
              Here are some of the selected projects that showcase my passion
              for software development.
            </p>
          </div>

          {/* Projects — filtered from unified projects config by "featured" type */}
          <div className="space-y-20">
            {projects.filter(p => p.types.includes("featured")).map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Button */}
      <section className="py-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/projects" className="inline-flex flex-col gap-1">
            <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
              All Projects
            </span>
            <div className="h-[2px] w-full bg-[#d3e97a]" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#484848]" />
      </div>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8">
                About me
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-['Inter',sans-serif] text-[32px] text-white leading-[1.4]">
                  {aboutMe.homeAboutBlurb}
                </p>
                <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                  When I’m not coding, you’ll find me playing cricket,
                  practicing photography, or spending quality time with my
                  family. Always learning, always curious.
                </p>
              </div>

              <Link href="/about" className="inline-flex flex-col gap-1">
                <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                  More about me
                </span>
                <div className="h-[2px] w-full bg-[#d3e97a]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#484848]" />
      </div>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section>
      <Footer />
    </div>
  );
}

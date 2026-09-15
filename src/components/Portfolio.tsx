"use client";

import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { site } from "../config/site";
import type { ChromeProps, Image, Project, SocialLink } from "../lib/content";

gsap.registerPlugin(ScrollTrigger);

const copy = site.home;

export type PortfolioProps = {
  chrome: ChromeProps;
  name: string;
  tagline: string;
  shortBio: string;
  bio: string;
  portrait: Image;
  heroSocial: SocialLink[];
  featured: Project[];
};

export default function Portfolio({ chrome, name, tagline, shortBio, bio, portrait, heroSocial, featured }: PortfolioProps) {
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
      <Navbar {...chrome.nav} />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-[80px] lg:text-[101px] leading-[0.9] text-white">
                  {copy.greeting}
                  <br />
                  {name.toUpperCase()}.
                </h1>
                {tagline && (
                  <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]">{tagline}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 items-center flex-wrap">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors"
                >
                  <span className="font-['Inter',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">{copy.ctaLabel}</span>
                  <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p23c4ec40} fill="white" />
                    </svg>
                  </div>
                </button>

                <SocialIcons
                  links={heroSocial}
                  ownerName={name}
                  size="w-[26px] h-[26px]"
                  hover="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333]"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-[#c7c7c7] rounded-[16px] w-full max-w-[450px] mx-auto aspect-[6/7] relative overflow-hidden">
                <ImageWithFallback src={portrait.url} alt={portrait.alt} className="absolute inset-0 w-full h-full object-cover object-center" />
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
      {featured.length > 0 && (
        <>
          <section ref={projectsRef} id="work" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-4 mb-16">
                <h2 className="text-[76px] text-white leading-none">{copy.featuredHeading}</h2>
                <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">{copy.featuredIntro}</p>
              </div>

              <div className="space-y-20">
                {featured.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* All Projects Button */}
          <section className="py-12 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Link href="/projects" className="inline-flex flex-col gap-1">
                <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">{copy.allProjectsLabel}</span>
                <div className="h-[2px] w-full bg-[#d3e97a]" />
              </Link>
            </div>
          </section>

          {/* Divider */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-t border-[#484848]" />
          </div>
        </>
      )}

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8">{copy.aboutHeading}</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                {shortBio && <p className="font-['Inter',sans-serif] text-[32px] text-white leading-[1.4]">{shortBio}</p>}
                {bio && <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">{bio}</p>}
              </div>

              <Link href="/about" className="inline-flex flex-col gap-1">
                <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">{copy.aboutLinkLabel}</span>
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
          <ContactSection {...chrome.contact} />
        </div>
      </section>
      <Footer {...chrome.footer} />
    </div>
  );
}

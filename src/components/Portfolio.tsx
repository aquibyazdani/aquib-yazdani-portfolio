import imgPotrait from "../assets/hero.png";
import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import toiPic from "../assets/toi.png";
import screenr from "../assets/screenr_long.png";
import mm from "../assets/mm.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ContactForm from "./ContactForm";
import { personalInfo, socialMedia, socialLinks } from "../config/portfolio";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  navigate: (path: string) => void;
}

export default function Portfolio({ navigate }: PortfolioProps) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const currentRef = heroRef.current;
    if (currentRef) {
      gsap.from(currentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: currentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const projectsCurrentRef = projectsRef.current;
    if (projectsCurrentRef) {
      gsap.from(projectsCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const aboutCurrentRef = aboutRef.current;
    if (aboutCurrentRef) {
      gsap.from(aboutCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const contactCurrentRef = contactRef.current;
    if (contactCurrentRef) {
      gsap.from(contactCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Aquib Yazdani - Sr. Software Engineer | Portfolio</title>
        <meta
          name="description"
          content="Aquib Yazdani - Senior Software Engineer specializing in React, JavaScript, and full-stack development. Explore my portfolio featuring projects like TOI Epaper, Screener for Zamzam Capital, and more."
        />
        <meta
          name="keywords"
          content="Aquib Yazdani, Software Engineer, React Developer, JavaScript, Full-Stack Developer, Portfolio, Frontend Developer, Pune India"
        />
        <link rel="canonical" href="https://aquibyazdani.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aquib Yazdani",
            jobTitle: "Senior Software Engineer",
            url: "https://aquibyazdani.com",
            sameAs: [
              "https://www.linkedin.com/in/aquibyazdani/",
              "https://github.com/aquibyazdani/",
              "https://www.instagram.com/aquibyazdani/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
            email: "yazdaniaquib2@gmail.com",
            telephone: "+91 8210773776",
            knowsAbout: [
              "React.js",
              "JavaScript",
              "TypeScript",
              "Full-Stack Development",
              "Frontend Development",
              "Web Development",
            ],
          })}
        </script>
      </Helmet>
      <div className="bg-neutral-950 min-h-screen">
        {/* Navigation */}
        <Navbar navigate={navigate} currentPage="home" />

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
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]">
                    Sr. Software Engg. / JavaScript Expert / Tech Explorer
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 items-center flex-wrap">
                  <a
                    href="#contact"
                    className="bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors"
                  >
                    <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                      Contact Me
                    </span>
                    <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d={svgPaths.p23c4ec40} fill="white" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d={svgPaths.p282a2240} fill="#D3E97A" />
                      <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
                    </svg>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
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
                <div className="bg-[#c7c7c7] rounded-[16px] w-full max-w-[600px] mx-auto aspect-[6/7] relative overflow-hidden">
                  <ImageWithFallback
                    src={imgPotrait}
                    alt={personalInfo.name}
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
              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
                Here are some of the selected projects that showcase my passion
                for front-end development.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-20">
              {/* Project 1 - TOI Epaper */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={toiPic}
                    alt="TOI Epaper"
                    className="absolute inset-0 w-full h-full object-contain p-12"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                    <span className="font-['Manrope',sans-serif] text-white text-[14px]">
                      Professional
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                      TOI Epaper (Times of India)
                    </h3>
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                      Developed and maintained a high-traffic ePaper platform
                      accessed by thousands daily. Built a reusable component
                      library to streamline frontend development, reducing
                      development time by 30% through efficient language
                      management and implementing cross-browser compatibility
                      features.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase">
                      Project Info
                    </p>
                    <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Client
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          Times of India
                        </span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Year
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          2023
                        </span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Role
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          Lead Frontend Engineer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 flex-wrap">
                    <a
                      href="https://epaper.indiatimes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-1">
                        <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                          Live Demo
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d={svgPaths.p3589c00} fill="#D3E97A" />
                        </svg>
                      </div>
                      <div className="h-[2px] w-full bg-[#d3e97a]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 - Screener Zamzam Capital */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={screenr}
                    alt="Screener - Zamzam Capital"
                    className="absolute inset-0 w-full h-full object-contain p-12"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                    <span className="font-['Manrope',sans-serif] text-white text-[14px]">
                      Professional
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                      Screener - Zamzam Capital
                    </h3>
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                      Developed a dedicated Halal stock screening platform
                      enabling investors to evaluate companies based on
                      Shariah-compliant financial criteria. Implemented advanced
                      filtering and screening logic to assess stocks across
                      multiple compliance parameters, providing a streamlined
                      and user-friendly interface for Islamic investment
                      research.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase">
                      Project Info
                    </p>
                    <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Client
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          Zamzam Capital
                        </span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Year
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          2025
                        </span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Role
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          Sole Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 flex-wrap">
                    <a
                      href="https://screener.zamzam-capital.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-1">
                        <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                          Live Demo
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d={svgPaths.p3589c00} fill="#D3E97A" />
                        </svg>
                      </div>
                      <div className="h-[2px] w-full bg-[#d3e97a]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 - Memorable Mumbai */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={mm}
                    alt="Memorable Mumbai"
                    className="absolute inset-0 w-full h-full object-contain p-12"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                    <span className="font-['Manrope',sans-serif] text-white text-[14px]">
                      Personal Project
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                      Memorable Mumbai
                    </h3>
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                      A comprehensive travel and tourism website showcasing the
                      vibrant culture, iconic landmarks, and hidden gems of
                      Mumbai. Features an intuitive interface with responsive
                      design, interactive maps, and detailed guides to help
                      visitors explore and experience the city's rich heritage.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase">
                      Project Info
                    </p>
                    <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Year
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          2023
                        </span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                          Role
                        </span>
                        <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                          Sole Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 flex-wrap">
                    <a
                      href="https://memorablemumbai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-1">
                        <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                          View Project
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d={svgPaths.p3589c00} fill="#D3E97A" />
                        </svg>
                      </div>
                      <div className="h-[2px] w-full bg-[#d3e97a]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                  <p className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                    I work as a senior full-stack developer, with deep expertise
                    in frontend engineering.
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                    I am a front-end developer based in India looking for
                    exciting opportunities. Likes to focus on accessibility when
                    developing. Passionate and curious about solving problems.
                    Currently, I'm exploring Reactjs, Webflow and a bit of
                    Designing. While I am not programming, I enjoy playing
                    football, photography and playing Valorant. Learning more to
                    improve skill.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/about")}
                  className="inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0"
                >
                  <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                    More about me
                  </span>
                  <div className="h-[2px] w-full bg-[#d3e97a]" />
                </button>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[76px] text-white leading-none">
                    Let's connect
                  </h2>
                  <div className="space-y-2">
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]">
                      Say hello at{" "}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white border-b border-[#d3e97a]"
                      >
                        {personalInfo.email}
                      </a>
                    </p>
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]">
                      For more info, here's my{" "}
                      <button
                        onClick={() => navigate("/resume")}
                        className="text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors cursor-pointer bg-transparent border-0 border-b-[1px] p-0 font-['Manrope',sans-serif] text-[18px]"
                      >
                        resume
                      </button>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                  <a
                    href={socialMedia[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p1bc476b0} fill="#D3E97A" />
                      <path d={svgPaths.p3ff62a40} fill="#D3E97A" />
                    </svg>
                  </a>
                  <a
                    href={socialMedia[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p3add5780}
                        fill="#D3E97A"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={socialMedia[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p8ca3400} fill="#D3E97A" />
                      <path d={svgPaths.p5548000} fill="#D3E97A" />
                      <path d={svgPaths.p374be072} fill="#D3E97A" />
                    </svg>
                  </a>
                </div>

                <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] pt-8">
                  {personalInfo.copyright}
                </p>
              </div>

              {/* Right - Contact Form */}
              <div className="space-y-8">
                <ContactForm
                  labelSize="text-[16px]"
                  inputSize="text-[18px]"
                  textareaRows={5}
                  buttonPadding="px-10 py-4"
                  buttonTextSize="text-[16px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

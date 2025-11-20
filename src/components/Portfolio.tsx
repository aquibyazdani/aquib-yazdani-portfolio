import imgPotrait from "figma:asset/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png";
import imgWork from "figma:asset/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8.png";
import imgImage10 from "figma:asset/b4ad9145f503384fa2e01584bf6a2e40a529a372.png";
import imgImage9 from "figma:asset/ada6183f66559558faf021a9606a30839d13d925.png";
import svgPaths from "../imports/svg-34il4djopb";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  personalInfo, 
  projects, 
  contactInfo, 
  socialMedia 
} from "../config/portfolio";

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
                <h1 className="font-['Bebas_Neue:Regular',sans-serif] text-[80px] lg:text-[101px] leading-[0.9] text-white">
                  HI, I AM<br />
                  {personalInfo.name.toUpperCase()}.
                </h1>
                <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 items-center flex-wrap">
                <a href="#contact" className="bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors">
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                    Contact Me
                  </span>
                  <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p23c4ec40} fill="white" />
                    </svg>
                  </div>
                </a>
                
                <a href="#" className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d={svgPaths.p282a2240} fill="#D3E97A" />
                    <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
                  </svg>
                </a>
                
                <a href="#" className="bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" />
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
            <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[76px] text-white leading-none">
              Featured Projects
            </h2>
            <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
              Here are some of the selected projects that showcase my passion for front-end development.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-20">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                <img 
                  src={imgWork} 
                  alt="Adventure Time Project" 
                  className="absolute inset-0 w-full h-full object-contain p-12"
                />
                <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                  <span className="font-['Manrope:Medium',sans-serif] text-white text-[14px]">Conceptual Work</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-['Manrope:Medium',sans-serif] text-[32px] text-white leading-[1.4]">
                    Promotional landing page for our favorite show
                  </h3>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                    Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[16px] uppercase">
                    Project Info
                  </p>
                  <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Year</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">2023</span>
                    </div>
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Role</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">Front-end Developer</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 flex-wrap">
                  <a href="#" className="group inline-flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">Live Demo</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.p3589c00} fill="#D3E97A" />
                      </svg>
                    </div>
                    <div className="h-[2px] w-full bg-[#d3e97a]" />
                  </a>
                  
                  <a href="#" className="group inline-flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">See on Github</span>
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div className="h-[2px] w-full bg-[#d3e97a]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                <img 
                  src={imgImage10} 
                  alt="World News Blog" 
                  className="absolute inset-0 w-full h-full object-contain p-12"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-['Manrope:Medium',sans-serif] text-[32px] text-white leading-[1.4]">
                    Blog site for World News
                  </h3>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                    Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[16px] uppercase">
                    Project Info
                  </p>
                  <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Client</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">World News</span>
                    </div>
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Year</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">2022</span>
                    </div>
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Role</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">Front-end Developer</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 flex-wrap">
                  <a href="#" className="group inline-flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">View Project</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.p3589c00} fill="#D3E97A" />
                      </svg>
                    </div>
                    <div className="h-[2px] w-full bg-[#d3e97a]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                <img 
                  src={imgImage9} 
                  alt="E-commerce Product Page" 
                  className="absolute inset-0 w-full h-full object-contain p-12"
                />
                <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                  <span className="font-['Manrope:Medium',sans-serif] text-white text-[14px]">Challenge</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-['Manrope:Medium',sans-serif] text-[32px] text-white leading-[1.4]">
                    E-commerce product page
                  </h3>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                    Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[16px] uppercase">
                    Project Info
                  </p>
                  <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Year</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">2022</span>
                    </div>
                    <div className="flex justify-between py-4">
                      <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Role</span>
                      <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">Front-end Developer</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 flex-wrap">
                  <a href="#" className="group inline-flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">Live Demo</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.p3589c00} fill="#D3E97A" />
                      </svg>
                    </div>
                    <div className="h-[2px] w-full bg-[#d3e97a]" />
                  </a>
                  
                  <a href="#" className="group inline-flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">See on Github</span>
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" />
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
              <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8">
                About me
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-['Manrope:Medium',sans-serif] text-[32px] text-white leading-[1.4]">
                  I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                </p>
                <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                  I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                </p>
              </div>
              
              <button onClick={() => navigate('/about')} className="inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0">
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
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
                <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[76px] text-white leading-none">
                  Let's connect
                </h2>
                <div className="space-y-2">
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px]">
                    Say hello at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-white border-b border-[#d3e97a]">
                      {personalInfo.email}
                    </a>
                  </p>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px]">
                    For more info, here's my{' '}
                    <button 
                      onClick={() => navigate('/resume')} 
                      className="text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors cursor-pointer bg-transparent border-0 border-b-[1px] p-0 font-['Manrope:Regular',sans-serif] text-[18px]"
                    >
                      resume
                    </button>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d={svgPaths.p1bc476b0} fill="#D3E97A" />
                    <path d={svgPaths.p3ff62a40} fill="#D3E97A" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path clipRule="evenodd" d={svgPaths.p3add5780} fill="#D3E97A" fillRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg width="32" height="32" viewBox="0 0 28 23" fill="none">
                    <path d={svgPaths.p3f377200} fill="#D3E97A" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d={svgPaths.p8ca3400} fill="#D3E97A" />
                    <path d={svgPaths.p5548000} fill="#D3E97A" />
                    <path d={svgPaths.p374be072} fill="#D3E97A" />
                  </svg>
                </a>
              </div>

              <p className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px] pt-8">
                {personalInfo.copyright}
              </p>
            </div>

            {/* Right - Contact Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">
                    Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none"
                  />
                </div>
              </div>

              <button className="bg-[#d3e97a] rounded-full px-10 py-4 font-['Manrope:Bold',sans-serif] font-bold text-[16px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
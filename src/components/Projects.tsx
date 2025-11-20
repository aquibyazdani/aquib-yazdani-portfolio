import svgPaths from "../imports/svg-cipwcyx6co";
import imgWork from "figma:asset/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8.png";
import imgImage10 from "figma:asset/b4ad9145f503384fa2e01584bf6a2e40a529a372.png";
import imgImage9 from "figma:asset/ada6183f66559558faf021a9606a30839d13d925.png";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  navigate: (path: string) => void;
}

export default function Projects({ navigate }: ProjectsProps) {
  const projects = [
    {
      id: 1,
      title: "Promotional landing page for our favorite show",
      description: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      image: imgWork,
      tag: "Conceptual Work",
      year: "2023",
      role: "Front-end Developer",
      client: null,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Blog site for World News",
      description: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      image: imgImage10,
      tag: null,
      year: "2022",
      role: "Front-end Developer",
      client: "World News",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      id: 3,
      title: "E-commerce product page",
      description: "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      image: imgImage9,
      tag: "Challenge",
      year: "2022",
      role: "Front-end Developer",
      client: null,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Restaurant booking app",
      description: "Built a modern restaurant reservation system with real-time availability, table management, and customer notifications. Focused on creating an intuitive user experience for both customers and restaurant staff.",
      image: imgWork,
      tag: "Client Work",
      year: "2023",
      role: "Full-stack Developer",
      client: "TasteBuds Restaurant",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      id: 5,
      title: "Portfolio website redesign",
      description: "Complete redesign and development of a photographer's portfolio website. Implemented a custom image gallery with lazy loading and optimized performance for high-resolution images.",
      image: imgImage10,
      tag: null,
      year: "2023",
      role: "Front-end Developer",
      client: "Sarah Mitchell Photography",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Fitness tracking dashboard",
      description: "Developed an interactive fitness tracking dashboard with data visualization, goal setting, and progress monitoring. Integrated with popular fitness APIs for seamless data synchronization.",
      image: imgImage9,
      tag: "Personal Project",
      year: "2022",
      role: "Front-end Developer",
      client: null,
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const projectsRef = useRef(null);

  useEffect(() => {
    const currentRef = projectsRef.current;
    if (currentRef) {
      gsap.from(currentRef.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none"
        }
      });
    }
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Navigation */}
      <Navbar navigate={navigate} currentPage="projects" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h1 className="font-['Bebas_Neue:Regular',sans-serif] text-[80px] lg:text-[90px] text-white leading-[0.9]">
              ALL PROJECTS
            </h1>
            <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
              Here's a collection of projects that showcase my passion for front-end development and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20" ref={projectsRef}>
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-contain p-12"
                    />
                    {project.tag && (
                      <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                        <span className="font-['Manrope:Medium',sans-serif] text-white text-[14px]">{project.tag}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="font-['Manrope:Medium',sans-serif] text-[32px] text-white leading-[1.4]">
                      {project.title}
                    </h3>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[16px] uppercase">
                      Project Info
                    </p>
                    <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                      {project.client && (
                        <div className="flex justify-between py-4">
                          <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Client</span>
                          <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">{project.client}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Year</span>
                        <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">{project.year}</span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span className="font-['Manrope:Medium',sans-serif] text-white text-[16px]">Role</span>
                        <span className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[16px]">{project.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 flex-wrap">
                    {project.links.demo && (
                      <a href={project.links.demo} className="group inline-flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">Live Demo</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.p3589c00} fill="#D3E97A" />
                          </svg>
                        </div>
                        <div className="h-[2px] w-full bg-[#d3e97a]" />
                      </a>
                    )}
                    
                    {project.links.github && (
                      <a href={project.links.github} className="group inline-flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">See on Github</span>
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97a" fillRule="evenodd" />
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

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-[#484848]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[64px] lg:text-[76px] text-white leading-[0.9]">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex bg-[#d3e97a] rounded-full items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors cursor-pointer"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                Get in Touch
              </span>
              <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p23c4ec40} fill="white" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#484848]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
            © 2023 Robert Garcia
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                <path d={svgPaths.p282a2240} fill="#D3E97A" />
                <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 28 23" fill="none">
                <path d={svgPaths.p3f377200} fill="#D3E97A" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p8ca3400} fill="#D3E97A" />
                <path d={svgPaths.p5548000} fill="#D3E97A" />
                <path d={svgPaths.p374be072} fill="#D3E97A" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
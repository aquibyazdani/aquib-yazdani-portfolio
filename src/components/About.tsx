import svgPaths from "../imports/svg-cipwcyx6co";
import aboutImage from "figma:asset/7164f2117b63b79a5ca779d1dbda20e3d3175e9f.png";
import profileImage from "figma:asset/29f56eff71a2ffc468127e31faf642ab5fe726bd.png";
import { Code2, FileCode, Atom, Zap, Paintbrush, Wind, GitBranch, Github, Smartphone, Palette, Box, CheckCircle, TestTube2, Gauge, Timer, Globe, Database, Cloud, MessageSquare, Folder, Puzzle, Users } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  navigate: (path: string) => void;
}

export default function About({ navigate }: AboutProps) {
  const capabilities = {
    "Frontend Development": [
      { name: 'React.js', icon: Atom },
      { name: 'React Native', icon: Smartphone },
      { name: 'Next.js', icon: Zap },
      { name: 'JavaScript (ES6+)', icon: Code2 },
      { name: 'TypeScript', icon: FileCode },
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: Paintbrush },
      { name: 'SCSS', icon: Paintbrush },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Material UI', icon: Palette },
      { name: 'Bootstrap', icon: Palette }
    ],
    "State Management": [
      { name: 'Redux', icon: Box },
      { name: 'Context API', icon: Box },
      { name: 'Zustand', icon: Box }
    ],
    "Testing & QA": [
      { name: 'Jest', icon: CheckCircle },
      { name: 'React Testing Library', icon: TestTube2 },
      { name: 'Unit Testing', icon: CheckCircle }
    ],
    "Performance Optimization": [
      { name: 'SSR', icon: Zap },
      { name: 'SSG', icon: Zap },
      { name: 'Component Reusability', icon: Puzzle },
      { name: 'UI Optimization', icon: Gauge },
      { name: 'Load Time Reduction', icon: Timer },
      { name: 'Accessibility Improvements', icon: Users }
    ],
    "API Integration": [
      { name: 'RESTful APIs', icon: Globe },
      { name: 'GraphQL', icon: Database }
    ],
    "Version Control & Collaboration": [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Azure', icon: Cloud },
      { name: 'GitLab', icon: GitBranch },
      { name: 'Bitbucket', icon: GitBranch },
      { name: 'Jira', icon: Folder },
      { name: 'Slack', icon: MessageSquare },
      { name: 'ProofHub', icon: Folder }
    ]
  };

  const experiences = [
    {
      role: "Freelance Developer",
      company: "",
      period: "Mar 2023 - Present",
      description: "Ullamco tempor magna minim sit anim ad commodo consequat. Duis aute irure dolor in reprehenderit in voluptate elit esse culpa dolore eu fugiat nulla pariatur."
    },
    {
      role: "Front-End Intern",
      company: "Roar Tech",
      period: "Sep 2022 - Mar 2023",
      description: "Ullamco tempor magna minim sit anim ad commodo consequat. Duis aute irure dolor in reprehenderit in voluptate elit esse culpa dolore eu fugiat nulla pariatur."
    }
  ];

  const heroRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const experienceRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    const currentRef = heroRef.current;
    if (currentRef) {
      gsap.from(currentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none"
        }
      });
    }

    const capabilitiesCurrentRef = capabilitiesRef.current;
    if (capabilitiesCurrentRef) {
      gsap.from(capabilitiesCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: capabilitiesCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none"
        }
      });
    }

    const experienceCurrentRef = experienceRef.current;
    if (experienceCurrentRef) {
      gsap.from(experienceCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: experienceCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none"
        }
      });
    }

    const connectCurrentRef = connectRef.current;
    if (connectCurrentRef) {
      gsap.from(connectCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: connectCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none"
        }
      });
    }
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Navigation */}
      <Navbar navigate={navigate} currentPage="about" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-['Bebas_Neue:Regular',sans-serif] text-[80px] lg:text-[90px] leading-[0.9] text-white">
                  ABOUT ME
                </h1>
                
                <div className="space-y-4">
                  <p className="font-['Manrope:Medium',sans-serif] text-[24px] text-white leading-[1.4]">
                    I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                  </p>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                    I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                  </p>
                </div>
              </div>

              {/* Download Resume & Social Links */}
              <div className="flex gap-4 items-center">
                <button className="bg-[#d3e97a] rounded-full flex items-center gap-2 px-6 py-3 hover:bg-[#c5db6c] transition-colors">
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[14px] text-neutral-950 uppercase">
                    Download Resume
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p23c4ec40} fill="#0A0A0A" />
                  </svg>
                </button>
                
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
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="lg:block">
              <div className="bg-[#c7c7c7] rounded-[12px] overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Robert Garcia" 
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
              <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[64px] lg:text-[76px] text-white leading-[0.9]">
                MY CAPABILITIES
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                I am always looking to add more skills.Morbi egestas neque eu blandit fermentum quisque egestas diam in. Nulla pharetra diam sit amet nisl suscipit. Eget nullam non nisi est sit amet facilisis magna etiam.
              </p>
              
              {/* Capability Tags */}
              <div className="space-y-6">
                {Object.entries(capabilities).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#d3e97a] text-[14px] uppercase">
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
                            <span className="font-['Manrope:Medium',sans-serif] text-white text-[13px]">
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
              <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[64px] lg:text-[76px] text-white leading-[0.9]">
                MY EXPERIENCE
              </h2>
            </div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-['Manrope:Medium',sans-serif] text-white text-[20px]">
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px]">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <span className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[14px]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 px-6" ref={connectRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-['Bebas_Neue:Regular',sans-serif] text-[64px] lg:text-[76px] text-white leading-[0.9]">
                  LET'S CONNECT
                </h2>
                <div className="space-y-2">
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px]">
                    Say hello at{' '}
                    <a href="mailto:robertgarcia@gmail.com" className="text-[#d3e97a] hover:underline">
                      robertgarcia@gmail.com
                    </a>
                  </p>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[16px]">
                    For more info, here's my{' '}
                    <a href="#" className="text-[#d3e97a] hover:underline">
                      resume
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Links */}
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

              <p className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px] pt-8">
                © 2023 Robert Garcia
              </p>
            </div>

            {/* Right - Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none"
                  />
                </div>
              </div>

              <button className="bg-[#d3e97a] rounded-full px-10 py-3 font-['Manrope:Bold',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
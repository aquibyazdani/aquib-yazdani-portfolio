import imgPotrait from "figma:asset/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png";
import { Mail, Phone, MapPin, Download, Code2, FileCode, Atom, Zap, Paintbrush, Wind, GitBranch, Github, Smartphone, Palette, Lightbulb, Users, Box, CheckCircle, TestTube2, Gauge, Timer, Globe, Database, Cloud, MessageSquare, Folder, Puzzle } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ResumeProps {
  navigate: (path: string) => void;
}

export default function Resume({ navigate }: ResumeProps) {
  const resumeRef = useRef(null);

  useEffect(() => {
    const currentRef = resumeRef.current;
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
          toggleActions: "restart none none none"
        }
      });
    }
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Navigation */}
      <Navbar navigate={navigate} currentPage="resume" />

      {/* Resume Container */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Download Button */}
          <div className="flex justify-end mb-8">
            <button className="inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors">
              <Download className="size-4" />
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[14px] uppercase">Download PDF</span>
            </button>
          </div>

          {/* Resume Card */}
          <div className="bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl" ref={resumeRef}>
            <div className="p-8 lg:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]">
                <div className="space-y-1">
                  <h1 className="font-['Bebas_Neue:Regular',sans-serif] text-[48px] text-white leading-[0.9]">
                    ROBERT GARCIA
                  </h1>
                  <p className="font-['Manrope:Medium',sans-serif] text-[#d3e97a] text-[18px]">
                    Front-end Developer
                  </p>
                </div>
                
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 justify-end">
                    <Mail className="size-3.5 text-[#d3e97a]" />
                    <a href="mailto:hello@robertgarcia.com" className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white">
                      hello@robertgarcia.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <Phone className="size-3.5 text-[#d3e97a]" />
                    <span className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#c7c7c7]">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <MapPin className="size-3.5 text-[#d3e97a]" />
                    <span className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#c7c7c7]">
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Section */}
              <div className="space-y-2.5">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  Profile
                </h2>
                <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[13px] leading-[1.6]">
                  Passionate front-end developer with 6+ years of experience building responsive web applications and user interfaces. Specializing in React, TypeScript, and modern web technologies. Committed to writing clean, maintainable code and creating exceptional user experiences. Strong background in UI/UX design principles and agile development methodologies.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-3">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  Skills
                </h2>
                
                {/* Frontend Development */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
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
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* State Management */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    State Management
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Redux', icon: Box },
                      { name: 'Context API', icon: Box },
                      { name: 'Zustand', icon: Box }
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Testing & QA */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    Testing & QA
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Jest', icon: CheckCircle },
                      { name: 'React Testing Library', icon: TestTube2 },
                      { name: 'Unit Testing', icon: CheckCircle }
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Performance Optimization */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    Performance Optimization
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'SSR', icon: Zap },
                      { name: 'SSG', icon: Zap },
                      { name: 'Component Reusability', icon: Puzzle },
                      { name: 'UI Optimization', icon: Gauge },
                      { name: 'Load Time Reduction', icon: Timer },
                      { name: 'Accessibility Improvements', icon: Users }
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* API Integration */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    API Integration
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'RESTful APIs', icon: Globe },
                      { name: 'GraphQL', icon: Database }
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Version Control & Collaboration */}
                <div className="space-y-1.5">
                  <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px]">
                    Version Control & Collaboration
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Git', icon: GitBranch },
                      { name: 'GitHub', icon: Github },
                      { name: 'Azure', icon: Cloud },
                      { name: 'GitLab', icon: GitBranch },
                      { name: 'Bitbucket', icon: GitBranch },
                      { name: 'Jira', icon: Folder },
                      { name: 'Slack', icon: MessageSquare },
                      { name: 'ProofHub', icon: Folder }
                    ].map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="font-['Manrope:Medium',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
                        >
                          <Icon className="size-3" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className="space-y-2.5">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  Awards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#1a1a1a]/50 p-3 rounded-lg">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px] mb-1">
                      Best UI Developer of the Year
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      Oct 2023 | TechCrunch
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a]/50 p-3 rounded-lg">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[12px] mb-1">
                      Excellence in Web Design
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      May 2022 | Webby Awards
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-2.5">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-0.5">
                    <h4 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[13px]">
                      Stanford University
                    </h4>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                      Bachelor of Computer Science
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      2014 - 2018
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[13px]">
                      UC Berkeley Extension
                    </h4>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                      Certificate in UX/UI Design
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      2019
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="space-y-3">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  Work Experience
                </h2>
                
                <div className="relative pl-8">
                  {/* Timeline Line */}
                  <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30" />
                  
                  {/* Experience 1 */}
                  <div className="relative pb-6">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />
                    
                    <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5 flex-1">
                          <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                            Senior Front-end Developer
                          </h3>
                          <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                            TechFlow Inc. | San Francisco, CA
                          </p>
                        </div>
                        <span className="font-['Manrope:Medium',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                          Jan 2022 - Present
                        </span>
                      </div>
                      <ul className="space-y-1 font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Led development of company's design system used across 5+ products, improving consistency by 40%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Mentored team of 4 junior developers, conducting code reviews and pair programming sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Optimized application performance resulting in 60% faster load times</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience 2 */}
                  <div className="relative pb-6">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />
                    
                    <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5 flex-1">
                          <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                            Front-end Developer
                          </h3>
                          <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                            Digital Creations | San Francisco, CA
                          </p>
                        </div>
                        <span className="font-['Manrope:Medium',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                          Mar 2020 - Dec 2021
                        </span>
                      </div>
                      <ul className="space-y-1 font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Developed 20+ responsive websites for clients across various industries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Collaborated with designers to implement pixel-perfect UI components</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Integrated RESTful APIs and third-party services</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience 3 */}
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />
                    
                    <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5 flex-1">
                          <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                            Junior Front-end Developer
                          </h3>
                          <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                            StartupHub | San Francisco, CA
                          </p>
                        </div>
                        <span className="font-['Manrope:Medium',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                          Jun 2018 - Feb 2020
                        </span>
                      </div>
                      <ul className="space-y-1 font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[12px]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Built and maintained web applications using React and modern JavaScript</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Implemented responsive designs and ensured cross-browser compatibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d3e97a] mt-0.5">•</span>
                          <span>Participated in agile development process and daily stand-ups</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* References Section */}
              <div className="space-y-3">
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                  References
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Reference 1 */}
                  <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-1">
                    <h4 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[13px]">
                      Sarah Mitchell
                    </h4>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      TechFlow Inc. / CTO
                    </p>
                    <div className="pt-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                          <Phone className="size-2.5 text-[#d3e97a]" />
                        </div>
                        <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[10px]">
                          +1 (555) 987-6543
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                          <Mail className="size-2.5 text-[#d3e97a]" />
                        </div>
                        <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[10px]">
                          sarah@techflow.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reference 2 */}
                  <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-1">
                    <h4 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-white text-[13px]">
                      Michael Chen
                    </h4>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#d3e97a] text-[11px]">
                      Digital Creations / Lead Designer
                    </p>
                    <div className="pt-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                          <Phone className="size-2.5 text-[#d3e97a]" />
                        </div>
                        <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[10px]">
                          +1 (555) 456-7890
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                          <Mail className="size-2.5 text-[#d3e97a]" />
                        </div>
                        <p className="font-['Manrope:Regular',sans-serif] text-[#c7c7c7] text-[10px]">
                          michael@digitalcreations.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#484848]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px]">
            © 2023 Robert Garcia
          </p>
          <button 
            onClick={() => navigate('/')}
            className="font-['Manrope:Medium',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </div>
      </footer>
    </div>
  );
}
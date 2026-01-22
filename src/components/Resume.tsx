import { MapPin, Download } from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  personalInfo,
  skills,
  workExperience,
  education,
  notableProjects,
  personalProjects,
  achievements,
  awards,
  references,
} from "../config/portfolio";
import { downloadResumeAsPDF } from "../utils/downloadResume";
import { Helmet } from "react-helmet-async";

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
          toggleActions: "restart none none none",
        },
      });
    }
  }, []);

  // Calculate years and months of experience dynamically
  const calculateExperience = () => {
    const startDate = new Date(personalInfo.careerStartDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const { years, months } = calculateExperience();
  const experienceText =
    months > 0 ? `${years} years and ${months} months` : `${years} years`;

  const allSkills = [
    { title: "Frontend Development", items: skills.frontend },
    { title: "State Management", items: skills.stateManagement },
    { title: "Testing & QA", items: skills.testing },
    { title: "Performance Optimization", items: skills.performance },
    { title: "API Integration", items: skills.api },
    { title: "Version Control & Collaboration", items: skills.tools },
  ];

  return (
    <>
      <Helmet>
        <title>Aquib Yazdani Resume - Senior Software Engineer</title>
        <meta
          name="description"
          content="Download the resume of Aquib Yazdani, Senior Software Engineer with expertise in React, JavaScript, and full-stack development. 5+ years of experience in frontend engineering."
        />
        <meta
          name="keywords"
          content="Aquib Yazdani, Resume, CV, Senior Software Engineer, React Developer, JavaScript, Full-Stack Developer"
        />
        <link rel="canonical" href="https://aquibyazdani.com/resume" />
      </Helmet>
      <div className="bg-neutral-950 min-h-screen">
        {/* Navigation */}
        <Navbar navigate={navigate} currentPage="resume" />

        {/* Resume Container */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Download Button */}
            <div className="flex justify-end mb-8">
              <button
                className="inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors"
                onClick={downloadResumeAsPDF}
              >
                <Download className="size-4" />
                <span className="font-['Manrope',sans-serif] font-bold text-[14px] uppercase">
                  Download Resume
                </span>
              </button>
            </div>

            {/* Resume Card */}
            <div
              className="bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl"
              ref={resumeRef}
            >
              <div className="p-8 lg:p-10 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]">
                  <div className="space-y-1">
                    <h1 className="text-[48px] text-white leading-[0.9]">
                      {personalInfo.name.toUpperCase()}
                    </h1>
                    <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[18px]">
                      {personalInfo.title}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {/* <div className="flex items-center gap-2 justify-end">
                      <Mail className="size-3.5 text-[#d3e97a]" />
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <Phone className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]">
                        {personalInfo.phone}
                      </span>
                    </div> */}
                    <div className="flex items-center gap-2 justify-end">
                      <MapPin className="size-3.5 text-[#d3e97a]" />
                      <span className="font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="space-y-2.5">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Profile
                  </h2>
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[13px] leading-[1.6]">
                    Front End Engineer with {experienceText} of experience
                    building high-performance web and mobile applications.
                    Proficient in React, JavaScript (ES6+), HTML, and CSS, with
                    a strong focus on optimizing user experience and front-end
                    performance. Adept at developing scalable, responsive
                    interfaces using modern frameworks like Next.js, Redux
                    Toolkit, and React Native. Proven track record of improving
                    application speed, accessibility, and maintainability.
                    Collaborative team player experienced in Agile environments,
                    consistently delivering user-centric solutions that drive
                    business impact in fast-paced product teams.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Skills
                  </h2>

                  {allSkills.map((skillCategory) => (
                    <div key={skillCategory.title} className="space-y-1.5">
                      <h3 className="font-['Manrope',sans-serif] font-semibold text-white text-[12px]">
                        {skillCategory.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill) => {
                          const Icon = skill.icon;
                          return (
                            <span
                              key={skill.name}
                              className="font-['Manrope',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
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

                {/* Education Section */}
                <div className="space-y-2.5">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Education
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {education.map((edu) => (
                      <div key={edu.id} className="space-y-0.5">
                        <h4 className="font-['Manrope',sans-serif] font-semibold text-white text-[13px]">
                          {edu.institution}
                        </h4>
                        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          {edu.degree}
                        </p>
                        <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]">
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notable Projects Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Notable Projects
                  </h2>

                  <div className="space-y-4">
                    {notableProjects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2"
                      >
                        <div className="space-y-1">
                          <h3 className="font-['Manrope',sans-serif] font-semibold text-white text-[14px]">
                            {project.title}
                          </h3>
                          <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]">
                            {project.role}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="font-['Manrope',sans-serif] text-[10px] text-[#2a4a4a] bg-[#d3e97a] px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <ul className="space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[11px]">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#d3e97a] mt-0.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Projects Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Personal Projects
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {personalProjects.map((project) => (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Manrope',sans-serif] text-[12px] text-white bg-[#1a1a1a]/50 px-4 py-2 rounded-lg border border-[#d3e97a]/20 hover:bg-[#d3e97a]/10 hover:border-[#d3e97a] transition-all duration-300 cursor-pointer"
                      >
                        {project.title}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Work Experience Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Work Experience
                  </h2>

                  <div className="relative pl-8">
                    {/* Timeline Line */}
                    <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30" />

                    {workExperience.map((exp, index) => (
                      <div
                        key={exp.id}
                        className={`relative ${
                          index < workExperience.length - 1 ? "pb-6" : ""
                        }`}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]" />

                        <div className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-0.5 flex-1">
                              <h3 className="font-['Manrope',sans-serif] font-semibold text-white text-[15px]">
                                {exp.title}
                              </h3>
                              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]">
                                {exp.company} | {exp.location}
                              </p>
                            </div>
                            <span className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]">
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

                {/* Achievements Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    Achievements
                  </h2>

                  <div className="space-y-1">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-[#1a1a1a]/50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#d3e97a] mt-1.5 flex-shrink-0" />
                        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* References Section */}
                <div className="space-y-3">
                  <h2 className="font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5">
                    References
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {references.map((ref) => (
                      <div
                        key={ref.id}
                        className="bg-[#1a1a1a]/50 p-4 rounded-lg space-y-1"
                      >
                        <h4 className="font-['Manrope',sans-serif] font-semibold text-white text-[13px]">
                          {ref.name}
                        </h4>
                        <p className="font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]">
                          {ref.company} / {ref.position}
                        </p>
                        {/* <div className="pt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                              <Phone className="size-2.5 text-[#d3e97a]" />
                            </div>
                            <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]">
                              {ref.phone}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center">
                              <Mail className="size-2.5 text-[#d3e97a]" />
                            </div>
                            <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]">
                              {ref.email}
                            </p>
                          </div>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#484848]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
              {personalInfo.copyright}
            </p>
            <button
              onClick={() => navigate("/")}
              className="font-['Manrope',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors"
            >
              Back to Home
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

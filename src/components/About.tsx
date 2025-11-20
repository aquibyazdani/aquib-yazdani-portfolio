import svgPaths from "../imports/svg-cipwcyx6co";
import aboutImage from "figma:asset/7164f2117b63b79a5ca779d1dbda20e3d3175e9f.png";
import { Link } from 'react-router-dom';

export default function About() {
  const capabilities = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JQUERY",
    "ACCESSIBILITY",
    "FIGMA",
    "TAILWIND CSS"
  ];

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

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-[#484848]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-['Bebas_Neue:Regular',sans-serif] text-[#c7c7c7] text-[28px] tracking-[-0.32px]">
            robert garcia
          </Link>
          <div className="flex gap-8 font-['Inter:Medium',sans-serif] font-medium text-[#c7c7c7] text-[16px]">
            <Link to="/projects" className="hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
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

            {/* Right - Empty for spacing on desktop */}
            <div className="hidden lg:block" />
          </div>

          {/* Portrait Image */}
          <div className="mt-12">
            <div className="bg-[#c7c7c7] rounded-[12px] w-full max-w-4xl mx-auto overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Robert Garcia" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Capabilities Section */}
      <section className="py-20 px-6">
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
              <div className="flex flex-wrap gap-3">
                {capabilities.map((skill, index) => (
                  <div 
                    key={index}
                    className="border border-[#484848] px-6 py-3 rounded-[4px]"
                  >
                    <span className="font-['Manrope:Medium',sans-serif] text-white text-[14px] uppercase">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Experience Section */}
      <section className="py-20 px-6">
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
      <section className="py-20 px-6">
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
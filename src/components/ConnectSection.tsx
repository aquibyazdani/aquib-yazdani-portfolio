import { forwardRef } from "react";
import svgPaths from "../imports/svg-34il4djopb";
import { personalInfo, socialLinks } from "../config/portfolio";

interface ConnectSectionProps {
  navigate?: (path: string) => void;
}

const ConnectSection = forwardRef<HTMLElement, ConnectSectionProps>(
  ({ navigate }, ref) => {
    return (
      <section className="py-20 px-6" ref={ref}>
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
                    <a href={`mailto:${personalInfo.email}`} className="text-[#d3e97a] hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
                
                {/* My Resume Button */}
                <button 
                  onClick={() => navigate && navigate('/resume')}
                  className="bg-[#d3e97a] rounded-full px-8 py-3 font-['Manrope:Bold',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors inline-block"
                >
                  My Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                    <path d={svgPaths.p282a2240} fill="#D3E97A" />
                    <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
                  </svg>
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                    <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" />
                  </svg>
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path d={svgPaths.p8ca3400} fill="#D3E97A" />
                    <path d={svgPaths.p5548000} fill="#D3E97A" />
                    <path d={svgPaths.p374be072} fill="#D3E97A" />
                  </svg>
                </a>
              </div>

              <p className="font-['Manrope:Medium',sans-serif] text-[#c7c7c7] text-[14px] pt-8">
                {personalInfo.copyright}
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
    );
  }
);

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;
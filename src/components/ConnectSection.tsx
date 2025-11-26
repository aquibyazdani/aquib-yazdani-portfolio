import { forwardRef } from "react";
import { personalInfo, socialMedia } from "../config/portfolio";

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
                <h2 className="text-[64px] lg:text-[76px] text-white leading-[0.9]">
                  LET'S CONNECT
                </h2>
                <div className="space-y-2">
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                    Say hello at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#d3e97a] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>

                {/* My Resume Button */}
                <button
                  onClick={() => navigate && navigate("/resume")}
                  className="bg-[#d3e97a] rounded-full px-8 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors inline-block"
                >
                  My Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target={social.name !== "Phone" ? "_blank" : undefined}
                      rel={
                        social.name !== "Phone"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon className="w-6 h-6 text-[#d3e97a]" />
                    </a>
                  );
                })}
              </div>

              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px] pt-8">
                {personalInfo.copyright}
              </p>
            </div>

            {/* Right - Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none"
                  />
                </div>
              </div>

              <button className="bg-[#d3e97a] rounded-full px-10 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors">
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

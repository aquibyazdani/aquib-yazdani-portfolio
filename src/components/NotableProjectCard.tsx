"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-34il4djopb";
import type { UnifiedProject } from "../config/portfolio";

export default function NotableProjectCard({
  project,
  index,
}: {
  project: UnifiedProject;
  index: number;
}) {
  const img = project.images.notable;
  const data = project.notable;
  if (!img || !data) return null;

  const isEven = index % 2 === 1;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={isEven ? "lg:order-2" : ""}>
        <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
          <ImageWithFallback
            src={img.src}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain p-12"
          />
          <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
            <span className="font-['Inter',sans-serif] text-white text-[14px]">
              Professional
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-8 ${isEven ? "lg:order-1" : ""}`}>
        <div className="space-y-4">
          <h3 className="font-['Bebas_Neue',sans-serif] text-[32px] text-white leading-[1.4]">
            {project.title}
          </h3>
          <div className="space-y-2">
            {data.achievements.slice(0, 3).map((achievement, idx) => (
              <p
                key={idx}
                className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.5]"
              >
                • {achievement}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-['Inter',sans-serif] font-semibold text-white text-[16px] uppercase">
            Project Info
          </p>
          <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
            <div className="flex justify-between py-4">
              <span className="font-['Inter',sans-serif] text-white text-[16px]">Role</span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">
                {project.role}
              </span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-['Inter',sans-serif] text-white text-[16px]">Tech Stack</span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">
                {project.techStack?.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>
        </div>

        {project.url && (
          <div className="flex gap-6 flex-wrap">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-1"
            >
              <div className="flex items-center gap-1">
                <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                  Live Demo
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p3589c00} fill="#D3E97A" />
                </svg>
              </div>
              <div className="h-[2px] w-full bg-[#d3e97a]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

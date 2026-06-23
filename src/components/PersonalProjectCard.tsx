"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-34il4djopb";
import type { UnifiedProject } from "../config/portfolio";

export default function PersonalProjectCard({ project }: { project: UnifiedProject }) {
  const img = project.images.personal;
  if (!img) return null;

  const displayTitle = project.shortTitle ?? project.title;

  return (
    <div className="bg-[#1a1a1a] rounded-[12px] overflow-hidden group hover:bg-[#222222] transition-colors">
      <div className="aspect-video relative overflow-hidden bg-[#0a0a0a]">
        <ImageWithFallback
          src={img.src}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-['Bebas_Neue',sans-serif] text-[24px] text-white leading-[1.4]">
          {displayTitle}
        </h3>
        {project.url && project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col gap-1"
          >
            <div className="flex items-center gap-1">
              <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase">
                View Project
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p3589c00} fill="#D3E97A" />
              </svg>
            </div>
            <div className="h-[2px] w-full bg-[#d3e97a]" />
          </a>
        )}
      </div>
    </div>
  );
}

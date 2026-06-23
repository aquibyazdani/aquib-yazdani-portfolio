"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-34il4djopb";
import type { UnifiedProject } from "../config/portfolio";

export default function FeaturedProjectCard({ project }: { project: UnifiedProject }) {
  const img = project.images.featured;
  const data = project.featured;
  if (!img || !data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
        <ImageWithFallback
          src={img.src}
          alt={data.alt}
          className="absolute inset-0 w-full h-full object-contain p-12"
        />
        <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
          <span className="font-['Inter',sans-serif] text-white text-[14px]">
            {data.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-['Bebas_Neue',sans-serif] text-[32px] text-white leading-[1.4]">
            {project.title}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
            {data.description}
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-['Inter',sans-serif] font-semibold text-white text-[16px] uppercase">
            Project Info
          </p>
          <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
            {data.client && (
              <div className="flex justify-between py-4">
                <span className="font-['Inter',sans-serif] text-white text-[16px]">Client</span>
                <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">{data.client}</span>
              </div>
            )}
            <div className="flex justify-between py-4">
              <span className="font-['Inter',sans-serif] text-white text-[16px]">Year</span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">{project.year}</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-['Inter',sans-serif] text-white text-[16px]">Role</span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">{project.role}</span>
            </div>
          </div>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col gap-1"
          >
            <div className="flex items-center gap-1">
              <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                {data.linkLabel}
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

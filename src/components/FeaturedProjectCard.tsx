"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-34il4djopb";
import { site } from "../config/site";
import type { Project } from "../lib/content";
import { projectImage } from "../lib/fallback-images";

const labels = site.projects;

/** Professional work links to a live demo; personal work to the project. */
export const projectLinkLabel = (project: Project) => (project.client ? labels.liveDemoLabel : labels.viewProjectLabel);

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const img = projectImage(project, "featured");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
        {img ? (
          <ImageWithFallback src={img.url} alt={img.alt} className="absolute inset-0 w-full h-full object-contain p-12" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[96px] text-[#333]">{project.title.charAt(0)}</div>
        )}
        {project.badge && (
          <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
            <span className="font-['Inter',sans-serif] text-white text-[14px]">{project.badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-['Bebas_Neue',sans-serif] text-[32px] text-white leading-[1.4]">{project.title}</h3>
          <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">{project.description}</p>
        </div>

        <div className="space-y-4">
          <p className="font-['Inter',sans-serif] font-semibold text-white text-[16px] uppercase">{labels.infoLabel}</p>
          <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
            {project.client && <InfoRow label={labels.clientLabel} value={project.client} />}
            {project.year && <InfoRow label={labels.yearLabel} value={project.year} />}
            {project.role && <InfoRow label={labels.roleLabel} value={project.role} />}
          </div>
        </div>

        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-['Inter',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">{projectLinkLabel(project)}</span>
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

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-4">
      <span className="font-['Inter',sans-serif] text-white text-[16px]">{label}</span>
      <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px]">{value}</span>
    </div>
  );
}

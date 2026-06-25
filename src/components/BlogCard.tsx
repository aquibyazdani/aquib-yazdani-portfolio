"use client";

import Link from "next/link";
import type { BlogPost } from "../config/blog";

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="font-['Inter',sans-serif] text-[11px] text-[#d3e97a] bg-[#d3e97a]/10 border border-[#d3e97a]/20 px-2.5 py-1 rounded-full uppercase tracking-wide">
      {tag}
    </span>
  );
}

export function BlogCardFeatured({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#111111] rounded-[16px] overflow-hidden hover:bg-[#161616] transition-colors">
        {/* Cover */}
        <div
          className="aspect-[16/9] lg:aspect-auto lg:min-h-[320px] relative"
          style={{
            background: `linear-gradient(135deg, ${post.coverAccent}30 0%, #0f0f0f 70%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <h2 className="text-[48px] lg:text-[56px] text-white leading-[0.95] group-hover:text-[#d3e97a] transition-colors">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.7]">
              {post.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-['Inter',sans-serif] text-[#666] text-[13px]">
                {post.date}
              </span>
              <span className="text-[#333]">·</span>
              <span className="font-['Inter',sans-serif] text-[#666] text-[13px]">
                {post.readingTime}
              </span>
            </div>
            <span className="font-['Inter',sans-serif] text-[#d3e97a] text-[13px] font-semibold uppercase tracking-wide group-hover:underline">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BlogCardSmall({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="bg-[#111111] rounded-[16px] overflow-hidden hover:bg-[#161616] transition-colors h-full flex flex-col">
        {/* Cover */}
        <div
          className="aspect-[16/9] relative flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${post.coverAccent}30 0%, #0f0f0f 80%)`,
          }}
        >
          <div className="absolute inset-0 flex items-end p-6">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <h3 className="text-[24px] text-white leading-[1.1] group-hover:text-[#d3e97a] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#888] text-[14px] leading-[1.6] line-clamp-3 flex-1">
            {post.subtitle}
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-[#222]">
            <span className="font-['Inter',sans-serif] text-[#555] text-[12px]">
              {post.date} · {post.readingTime}
            </span>
            <span className="font-['Inter',sans-serif] text-[#d3e97a] text-[12px] font-semibold group-hover:underline">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

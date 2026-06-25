"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import type { BlogPost, BlogContentBlock } from "../config/blog";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-[75px] left-0 right-0 z-40 h-[3px] bg-[#1a1a1a]">
      <div className="h-full bg-[#d3e97a]" style={{ width: `${progress}%` }} />
    </div>
  );
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.85]">
          {block.text}
        </p>
      );

    case "heading":
      return block.level === 2 ? (
        <h2 className="text-[40px] lg:text-[48px] text-white leading-[1.0] mt-4">
          {block.text}
        </h2>
      ) : (
        <h3 className="text-[28px] text-white leading-[1.1] mt-2">
          {block.text}
        </h3>
      );

    case "list":
      return block.ordered ? (
        <ol className="space-y-2 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="font-['Inter',sans-serif] text-[#d3e97a] text-[16px] font-semibold mt-0.5 flex-shrink-0 w-5">
                {i + 1}.
              </span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[17px] leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#d3e97a] mt-2 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d3e97a]" />
              </span>
              <span className="font-['Inter',sans-serif] text-[#c7c7c7] text-[17px] leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div className="rounded-[12px] overflow-hidden border border-[#2a2a2a]">
          <div className="bg-[#161616] px-4 py-2 flex items-center justify-between border-b border-[#2a2a2a]">
            <span className="font-['Inter',sans-serif] text-[#555] text-[12px] uppercase tracking-wide">
              {block.language}
            </span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
          </div>
          <pre className="bg-[#0d0d0d] p-6 overflow-x-auto">
            <code className="font-mono text-[14px] text-[#e0e0e0] leading-[1.7] whitespace-pre">
              {block.text}
            </code>
          </pre>
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-[#d3e97a] pl-6 py-1">
          <p className="font-['Inter',sans-serif] text-white text-[20px] leading-[1.6] italic">
            "{block.text}"
          </p>
        </blockquote>
      );

    case "divider":
      return <hr className="border-[#222]" />;

    default:
      return null;
  }
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar />
      <ReadingProgress />

      {/* Cover */}
      <div
        className="w-full h-[320px] lg:h-[420px] flex items-end"
        style={{
          background: `linear-gradient(135deg, ${post.coverAccent}40 0%, #0a0a0a 65%)`,
        }}
      >
        <div className="max-w-4xl mx-auto w-full px-6 pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Inter',sans-serif] text-[11px] text-[#d3e97a] bg-[#d3e97a]/10 border border-[#d3e97a]/20 px-2.5 py-1 rounded-full uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[52px] lg:text-[72px] text-white leading-[0.95]">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#d3e97a]/20 border border-[#d3e97a]/30 flex items-center justify-center">
              <span className="font-['Inter',sans-serif] text-[#d3e97a] text-[13px] font-bold">
                A
              </span>
            </div>
            <span className="font-['Inter',sans-serif] text-white text-[14px]">
              Aquib Yazdani
            </span>
          </div>
          <div className="flex items-center gap-3 font-['Inter',sans-serif] text-[#555] text-[13px]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="flex-1 px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle / lead */}
          <p className="font-['Inter',sans-serif] text-[#888] text-[20px] leading-[1.7] border-b border-[#1a1a1a] pb-10 mb-10">
            {post.subtitle}
          </p>

          {/* Content blocks — CTA injected at midpoint, never after a heading */}
          {(() => {
            let mid = Math.ceil(post.content.length / 2);
            // Advance until the block just before the CTA is not a heading
            while (
              mid < post.content.length - 1 &&
              post.content[mid - 1]?.type === "heading"
            ) {
              mid++;
            }
            const first = post.content.slice(0, mid);
            const second = post.content.slice(mid);
            return (
              <>
                <div className="space-y-8">
                  {first.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                  ))}
                </div>

                {/* Mid-article CTA */}
                <div className="my-12 rounded-[16px] border border-[#d3e97a]/20 bg-[#d3e97a]/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <p className="text-[22px] text-white leading-tight">
                      Building something interesting?
                    </p>
                    <p className="font-['Inter',sans-serif] text-[#888] text-[15px]">
                      I'm open to new projects, collaborations, and conversations.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 bg-[#d3e97a] text-neutral-950 font-['Inter',sans-serif] font-bold text-[14px] uppercase px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors"
                  >
                    Let's Talk
                  </Link>
                </div>

                <div className="space-y-8">
                  {second.map((block, i) => (
                    <ContentBlock key={mid + i} block={block} />
                  ))}
                </div>
              </>
            );
          })()}

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="font-['Inter',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors flex items-center gap-2"
            >
              ← All Posts
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-['Inter',sans-serif] text-[11px] text-[#555] border border-[#2a2a2a] px-2.5 py-1 rounded-full uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

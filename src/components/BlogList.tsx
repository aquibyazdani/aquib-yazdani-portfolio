"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { BlogCardFeatured, BlogCardSmall } from "./BlogCard";
import type { BlogPost, ChromeProps, Content } from "../lib/content";

export type BlogListProps = {
  chrome: ChromeProps;
  page: Content["blogPage"];
  posts: BlogPost[];
};

export default function BlogList({ chrome, page, posts }: BlogListProps) {
  // Newest featured post leads; otherwise the newest post.
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar {...chrome.nav} />

      <div className="pt-32 pb-20 px-6 flex-1">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-[80px] lg:text-[100px] text-white leading-[0.9]">{page.heading}</h1>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.6] max-w-[560px]">{page.intro}</p>
          </div>

          {/* Featured post */}
          {featured && (
            <div>
              <p className="font-['Inter',sans-serif] text-[#555] text-[12px] uppercase tracking-widest mb-4">{page.featuredLabel}</p>
              <BlogCardFeatured post={featured} readLabel={page.readLabel} />
            </div>
          )}

          {/* Divider */}
          {rest.length > 0 && <div className="border-t border-[#222]" />}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div>
              <p className="font-['Inter',sans-serif] text-[#555] text-[12px] uppercase tracking-widest mb-8">{page.morePostsLabel}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCardSmall key={post.id} post={post} readLabel={page.readLabel} />
                ))}
              </div>
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Inter',sans-serif] text-[#555] text-[18px]">{page.emptyMessage}</p>
            </div>
          )}
        </div>
      </div>

      <Footer {...chrome.footer} />
    </div>
  );
}

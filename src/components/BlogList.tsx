"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { BlogCardFeatured, BlogCardSmall } from "./BlogCard";
import { blogPosts } from "../config/blog";

const published = blogPosts.filter((p) => p.published);
const [featured, ...rest] = published;

export default function BlogList() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6 flex-1">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-[80px] lg:text-[100px] text-white leading-[0.9]">
              BLOG
            </h1>
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.6] max-w-[560px]">
              Thoughts on frontend engineering, system design, AI integration,
              and building products at scale.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <div>
              <p className="font-['Inter',sans-serif] text-[#555] text-[12px] uppercase tracking-widest mb-4">
                Featured
              </p>
              <BlogCardFeatured post={featured} />
            </div>
          )}

          {/* Divider */}
          {rest.length > 0 && <div className="border-t border-[#222]" />}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div>
              <p className="font-['Inter',sans-serif] text-[#555] text-[12px] uppercase tracking-widest mb-8">
                More Posts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCardSmall key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {published.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Inter',sans-serif] text-[#555] text-[18px]">
                No posts yet — check back soon.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

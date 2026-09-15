import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { chromeProps, getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return pageMetadata(content, "blog", { path: "/blog", title: "Blog" });
}

export default async function BlogPage() {
  const content = await getContent();
  return <BlogList chrome={chromeProps(content)} posts={content.blogPosts} />;
}

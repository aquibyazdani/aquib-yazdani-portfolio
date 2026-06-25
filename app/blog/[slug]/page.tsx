import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../src/config/blog";
import BlogPostPage from "../../../src/components/BlogPostPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.subtitle,
    alternates: { canonical: `https://aquibyazdani.com/blog/${post.slug}` },
    openGraph: {
      url: `https://aquibyazdani.com/blog/${post.slug}`,
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: post.date,
      authors: ["Md Aquib Yazdani"],
      tags: post.tags,
      images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      title: post.title,
      description: post.subtitle,
      images: ["https://aquibyazdani.com/opengraph-image"],
    },
  };
}

export default async function BlogPostRoute({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}

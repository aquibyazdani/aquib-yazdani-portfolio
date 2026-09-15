import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/components/BlogPostPage";
import { chromeProps, getContent, ogImageUrl, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const content = await getContent();
  return content.blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent();
  const post = content.blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const seo = {
    ...post.seo,
    title: post.seo.title || post.title,
    description: post.seo.description || post.subtitle,
    keywords: post.seo.keywords.length ? post.seo.keywords : post.tags,
    ogImage: post.seo.ogImage.url ? post.seo.ogImage : post.coverImage,
  };

  return pageMetadata(content, seo, {
    path: `/blog/${post.slug}`,
    type: "article",
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.lastUpdated || undefined,
      authors: [content.profile.legalName || content.profile.name],
      tags: post.tags,
    },
  });
}

export default async function BlogPostRoute({ params }: Props) {
  const { slug } = await params;
  const content = await getContent();
  const post = content.blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle,
    datePublished: post.publishedAt,
    dateModified: post.lastUpdated || post.publishedAt,
    keywords: post.tags.join(", "),
    url: `${siteUrl(content)}/blog/${post.slug}`,
    image: post.coverImage.url || ogImageUrl(content),
    author: { "@type": "Person", name: content.profile.legalName || content.profile.name, url: siteUrl(content) },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogPostPage chrome={chromeProps(content)} page={content.blogPage} post={post} />
    </>
  );
}

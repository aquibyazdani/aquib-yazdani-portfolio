import type { Metadata } from "next";
import NotFound from "@/components/NotFound";
import { chromeProps, getContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return { title: content.notFound.title || "Page Not Found", robots: { index: false, follow: false } };
}

export default async function NotFoundPage() {
  const content = await getContent();
  return <NotFound chrome={chromeProps(content)} copy={content.notFound} />;
}

import type { Metadata } from "next";
import NotFound from "@/components/NotFound";
import { site } from "@/config/site";
import { chromeProps, getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: site.notFound.title,
  robots: { index: false, follow: false },
};

export default async function NotFoundPage() {
  const content = await getContent();
  return <NotFound chrome={chromeProps(content)} />;
}

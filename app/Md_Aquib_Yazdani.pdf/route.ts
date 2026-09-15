import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

// The resume used to be served from /Md_Aquib_Yazdani.pdf. Links shared
// before the CMS keep working and always reach the latest uploaded PDF.
export async function GET() {
  const { profile } = await getContent();
  if (!profile.resumePdf.url) return new NextResponse("Not found", { status: 404 });
  return NextResponse.redirect(profile.resumePdf.url, 307);
}

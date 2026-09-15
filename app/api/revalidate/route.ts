import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CONTENT_TAG } from "@/lib/content";

// Called by portfolio-api after every content change so edits show up
// immediately instead of waiting for the 5-minute cache window.
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(CONTENT_TAG, "max");
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true, revalidatedAt: new Date().toISOString() });
}

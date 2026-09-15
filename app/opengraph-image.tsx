import { ImageResponse } from "next/og";
import { displayName, getContent, siteUrl } from "@/lib/content";

export const alt = "Share image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const content = await getContent();
  const { profile, seo } = content;
  const card = {
    title: seo.shareCard.title || displayName(content),
    subtitle: seo.shareCard.subtitle || profile.role,
    tagline: seo.shareCard.tagline,
    meta: seo.shareCard.meta || profile.location,
    domain: siteUrl(content).replace(/^https?:\/\//, ""),
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#d3e97a" }} />
        {/* Bottom accent bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "#d3e97a" }} />
        {/* Left accent line */}
        <div style={{ position: "absolute", top: 60, bottom: 60, left: 80, width: 4, background: "rgba(211,233,122,0.3)" }} />

        <div style={{ display: "flex", flexDirection: "column", marginLeft: 36 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", letterSpacing: "-2px", lineHeight: 1.05 }}>{card.title}</div>
          <div style={{ fontSize: 36, fontWeight: 400, color: "#d3e97a", marginTop: 20 }}>{card.subtitle}</div>
          <div style={{ width: 520, height: 2, background: "#333333", marginTop: 32 }} />
          {card.tagline && <div style={{ fontSize: 22, fontWeight: 400, color: "#c7c7c7", marginTop: 32 }}>{card.tagline}</div>}
          {card.meta && <div style={{ fontSize: 20, fontWeight: 400, color: "#666666", marginTop: 14 }}>{card.meta}</div>}
          <div style={{ fontSize: 18, fontWeight: 400, color: "#484848", marginTop: 110 }}>{card.domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

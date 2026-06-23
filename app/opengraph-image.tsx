import { ImageResponse } from "next/og";

export const alt = "Md Aquib Yazdani — Sr. Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", letterSpacing: "-2px", lineHeight: 1.05 }}>
            Md Aquib Yazdani
          </div>
          <div style={{ fontSize: 36, fontWeight: 400, color: "#d3e97a", marginTop: 20 }}>
            Sr. Software Engineer
          </div>
          <div style={{ width: 520, height: 2, background: "#333333", marginTop: 32 }} />
          <div style={{ fontSize: 22, fontWeight: 400, color: "#c7c7c7", marginTop: 32 }}>
            React · Next.js · TypeScript · AI Integration
          </div>
          <div style={{ fontSize: 20, fontWeight: 400, color: "#666666", marginTop: 14 }}>
            Pune, India · 5 years experience
          </div>
          <div style={{ fontSize: 18, fontWeight: 400, color: "#484848", marginTop: 110 }}>
            aquibyazdani.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

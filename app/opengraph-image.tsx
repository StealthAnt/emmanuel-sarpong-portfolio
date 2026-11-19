import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#FF5A1F 0%,#FF3D77 55%,#7C3AED 100%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              border: "3px solid rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            {site.monogram}
          </div>
          <div style={{ color: "white", fontSize: 28, fontWeight: 700 }}>
            {site.shortName}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>
            {site.role}
          </div>
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 36, marginTop: 20 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 24 }}>
          {site.company} · {site.location}
        </div>
      </div>
    ),
    size
  );
}

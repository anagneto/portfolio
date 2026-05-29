import { ImageResponse } from "next/og";

export const alt = "Claude Code for Leaders — a guest talk by Ana Neto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card for the talk. Matches the deck: light background,
// pink -> purple accents (#f43f5e -> #9333ea), generous whitespace.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fdf2f8 55%, #f5f0ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 12,
              borderRadius: 999,
              background: "linear-gradient(90deg, #f43f5e, #9333ea)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: "#9333ea",
              fontWeight: 700,
            }}
          >
            GUEST SESSION · HAPPYFACT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 94,
              fontWeight: 800,
              color: "#18181b",
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Claude Code for Leaders
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#565067",
              marginTop: 26,
              lineHeight: 1.3,
            }}
          >
            Run a whole team of AI specialists from one chat box. No coding required.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 700, color: "#18181b" }}>
            Ana Neto
          </div>
          <div style={{ fontSize: 26, color: "#8e88a0" }}>ananeto.eu</div>
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ScopeToQuote: AI-Powered Estimating for Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            ⚡
          </div>
          <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700 }}>
            ScopeToQuote
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "800px",
            marginBottom: "28px",
          }}
        >
          AI-Powered Estimating for Service Businesses
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "26px",
            maxWidth: "720px",
            lineHeight: 1.4,
          }}
        >
          Create accurate estimates in seconds using your own past work.
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.4)",
            borderRadius: "100px",
            padding: "10px 24px",
            color: "#a5b4fc",
            fontSize: "20px",
          }}
        >
          Free during beta
        </div>
      </div>
    ),
    { ...size }
  );
}

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
          background: "#0d0d0f",
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 60px",
            flex: 1,
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              ⚡
            </div>
            <span style={{ color: "#e4e4e7", fontSize: "24px", fontWeight: 700, letterSpacing: "-0.3px" }}>
              ScopeToQuote
            </span>
            <div
              style={{
                marginLeft: "8px",
                background: "rgba(99,102,241,0.18)",
                border: "1px solid rgba(99,102,241,0.45)",
                borderRadius: "100px",
                padding: "4px 14px",
                color: "#a5b4fc",
                fontSize: "14px",
                display: "flex",
              }}
            >
              Free Beta
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-1px",
                maxWidth: "620px",
              }}
            >
              Estimate faster with AI that knows your work.
            </div>
            <div
              style={{
                color: "#71717a",
                fontSize: "22px",
                lineHeight: 1.45,
                maxWidth: "560px",
              }}
            >
              Match new jobs to past estimates, extract line items from docs, and export pro PDFs — in seconds.
            </div>
          </div>

          {/* Feature pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["AI similarity matching", "PDF & DOCX import", "Pro PDF export"].map((f) => (
              <div
                key={f}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "#a1a1aa",
                  fontSize: "16px",
                  display: "flex",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right column — mock UI card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "56px",
            paddingTop: "56px",
            paddingBottom: "56px",
          }}
        >
          <div
            style={{
              width: "310px",
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 0 60px rgba(99,102,241,0.15)",
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#e4e4e7", fontSize: "15px", fontWeight: 600, display: "flex" }}>New Estimate</span>
              <div
                style={{
                  background: "rgba(99,102,241,0.2)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  color: "#a5b4fc",
                  fontSize: "13px",
                  display: "flex",
                }}
              >
                AI
              </div>
            </div>

            {/* Line items */}
            {[
              { label: "Site Assessment", amount: "$450" },
              { label: "Equipment Install", amount: "$2,100" },
              { label: "Labor (16 hrs)", amount: "$1,280" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                }}
              >
                <span style={{ color: "#a1a1aa", fontSize: "14px", display: "flex" }}>{item.label}</span>
                <span style={{ color: "#e4e4e7", fontSize: "14px", fontWeight: 600, display: "flex" }}>{item.amount}</span>
              </div>
            ))}

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", display: "flex" }} />

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#71717a", fontSize: "14px", display: "flex" }}>Total</span>
              <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: 800, display: "flex" }}>$3,830</span>
            </div>

            {/* Export button */}
            <div
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "10px",
                padding: "12px",
                textAlign: "center",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Export PDF
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

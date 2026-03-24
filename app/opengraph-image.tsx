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
          background: "#111214",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "sans-serif",
          padding: "36px 64px 32px",
          gap: "0px",
          overflow: "hidden",
        }}
      >
        {/* Logo row (no nav) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <img
            src="https://scopetoquote.com/logo.png"
            width={32}
            height={32}
            style={{ borderRadius: "6px" }}
          />
          <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, display: "flex" }}>
            ScopeToQuote
          </span>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "100px",
            padding: "5px 16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "flex" }} />
          <span style={{ color: "#d4d4d8", fontSize: "14px", display: "flex" }}>Built for B2B service agencies &amp; consultants</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "14px",
            gap: "0px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "54px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Quote in minutes.
          </span>
          <span
            style={{
              color: "#4ade80",
              fontSize: "54px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Close one more a month.
          </span>
        </div>

        {/* Start for Free button */}
        <div
          style={{
            background: "#4ade80",
            borderRadius: "10px",
            padding: "10px 28px",
            color: "#0a0a0a",
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            marginBottom: "24px",
          }}
        >
          Start for Free
        </div>

        {/* Demo cards row */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center", width: "100%" }}>
          {/* Left card: CLIENT SCOPE RECEIVED */}
          <div
            style={{
              flex: 1,
              background: "#1a1b1e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* Window dots + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "flex" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", display: "flex" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "flex" }} />
              </div>
              <span style={{ color: "#71717a", fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", display: "flex" }}>
                CLIENT SCOPE RECEIVED
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ color: "#e4e4e7", fontSize: "13px", fontWeight: 700, display: "flex" }}>SCOPE 1: n8n Workflow Automation</span>
              <span style={{ color: "#71717a", fontSize: "12px", display: "flex" }}>Setup &amp; Integration</span>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", display: "flex", margin: "2px 0" }} />
              <span style={{ color: "#71717a", fontSize: "11px", display: "flex" }}>Timeline: 4-6 weeks</span>
              <span style={{ color: "#a1a1aa", fontSize: "11px", display: "flex" }}>OVERVIEW</span>
              <span style={{ color: "#71717a", fontSize: "11px", lineHeight: 1.5, display: "flex" }}>
                Client needs automation of onboarding, CRM sync, and invoice triggers via n8n...
              </span>
              <span style={{ color: "#a1a1aa", fontSize: "11px", marginTop: "4px", display: "flex" }}>DELIVERABLES</span>
              <span style={{ color: "#71717a", fontSize: "11px", lineHeight: 1.6, display: "flex" }}>
                - Cloud / self-hosted install{"\n"}- Up to 10 workflows{"\n"}- API connectors setup
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ color: "#4ade80", fontSize: "28px", display: "flex", flexShrink: 0 }}>→</div>

          {/* Right card: ESTIMATE GENERATED */}
          <div
            style={{
              flex: 1,
              background: "#1a1b1e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#71717a", fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", display: "flex" }}>
                ESTIMATE GENERATED
              </span>
              <div
                style={{
                  background: "rgba(74,222,128,0.15)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  borderRadius: "100px",
                  padding: "3px 10px",
                  color: "#4ade80",
                  fontSize: "11px",
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                + 87% MATCH
              </div>
            </div>
            {[
              ["n8n Cloud / Self-Hosted Install & Config", "$1,200"],
              ["Workflow Design & Build (up to 10)", "$4,500"],
              ["API Integration & Connector Setup", "$2,000"],
              ["Error Handling & Activity Logging", "$800"],
              ["Admin Training & Documentation", "$700"],
            ].map(([label, amt]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#a1a1aa", fontSize: "12px", display: "flex" }}>{label}</span>
                <span style={{ color: "#4ade80", fontSize: "12px", fontWeight: 600, display: "flex" }}>{amt}</span>
              </div>
            ))}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", display: "flex" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#e4e4e7", fontSize: "14px", fontWeight: 700, display: "flex" }}>Total</span>
              <span style={{ color: "#4ade80", fontSize: "20px", fontWeight: 800, display: "flex" }}>$9,800</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

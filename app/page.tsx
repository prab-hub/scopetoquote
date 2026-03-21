"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiSparkles,
  HiBars3,
  HiXMark,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";

// ─── Design tokens (matches landing_page.html) ──────────────────────────────
const BG       = "#0F1115";
const BG2      = "#161a21";
const BG3      = "#1d2330";
const BORDER   = "#2a3040";
const GREEN    = "#22c55e";
const GREEN_DIM = "#16a34a";
const GREEN_BG  = "rgba(34,197,94,0.08)";
const GREEN_BG2 = "rgba(34,197,94,0.14)";
const TEXT     = "#f0f4f8";
const MUTED    = "#8b97a8";
const MUTED2   = "#5a6478";
const YELLOW   = "#facc15";
const FONT     = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const RADIUS   = 12;
const RADIUS_LG = 20;

const SIGNUP_URL = "https://live.scopetoquote.com/signup";
const LOGIN_URL  = "https://live.scopetoquote.com/login";

const container: React.CSSProperties = {
  maxWidth: 1080,
  margin: "0 auto",
  padding: "0 24px",
};
const containerNarrow: React.CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 24px",
};

// ─── Tag pill ────────────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
      color: GREEN, background: GREEN_BG,
      border: `1px solid rgba(34,197,94,0.25)`,
      padding: "4px 12px", borderRadius: 999,
      fontFamily: FONT,
    }}>{children}</span>
  );
}

// ─── Button ──────────────────────────────────────────────────────────────────
function BtnPrimary({ href, children, lg }: { href: string; children: React.ReactNode; lg?: boolean }) {
  return (
    <a href={href} rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: lg ? 17 : 15, fontWeight: 600, borderRadius: 8,
      padding: lg ? "16px 36px" : "13px 28px",
      backgroundColor: GREEN, color: "#0a1a0f",
      textDecoration: "none", whiteSpace: "nowrap", fontFamily: FONT,
    }}>{children}</a>
  );
}
function BtnGhost({ href, children, lg, onClick, target, rel }: { href: string; children: React.ReactNode; lg?: boolean; onClick?: () => void; target?: string; rel?: string }) {
  return (
    <a href={href} onClick={onClick} target={target} rel={rel} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: lg ? 17 : 15, fontWeight: 600, borderRadius: 8,
      padding: lg ? "16px 36px" : "13px 28px",
      backgroundColor: "transparent", color: MUTED,
      border: `1px solid ${BORDER}`,
      textDecoration: "none", whiteSpace: "nowrap", fontFamily: FONT,
    }}>{children}</a>
  );
}

// ─── Check item ──────────────────────────────────────────────────────────────
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, fontFamily: FONT }}>
      <div style={{
        width: 20, height: 20, borderRadius: "50%", background: GREEN_BG,
        border: `1px solid rgba(34,197,94,0.3)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 1, fontSize: 11, color: GREEN,
      }}>✓</div>
      <span style={{ color: MUTED }}>{children}</span>
    </div>
  );
}

export default function ScopeToQuotePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "I don't have many past estimates yet. Is this still useful?",
      a: "Absolutely. During onboarding you can import or paste in 2–3 past estimates and the matching engine starts immediately. We also provide starter estimate libraries by industry (marketing, web dev, automation, IT) so Day 1 isn't a blank slate. The product improves as you add more estimates, but it's useful from the first scope you drop in.",
    },
    {
      q: "Every scope I get is different. Won't templates fail me?",
      a: "ScopeToQuote doesn't match whole documents. It matches on components. A marketing agency always has strategy, content, distribution, and reporting as line items. A web dev scope always has design, build, and testing phases. The quantities and prices change; the structure repeats. The AI finds those repeating components and surfaces estimates where they appeared before. You're always reviewing and adjusting. It's a starting point, not a locked template.",
    },
    {
      q: "Does my data train a shared AI that others can access?",
      a: "No. Your estimates are only used to generate suggestions for your own account. Nothing is shared or pooled across organizations. Your pricing, line items, and client scopes are private to your workspace. We use row-level security to enforce this at the database level.",
    },
    {
      q: "What file types can I import for scope extraction?",
      a: "PDF, Word (.docx, .doc), plain text (.txt), Markdown (.md), and CSV. Scanned PDFs are handled via OCR (AWS Textract). Text-based PDFs are processed instantly. If a client forwards you an email, paste the body directly into the scope field.",
    },
    {
      q: "How does the match threshold work?",
      a: "You can set how strict or flexible the matching is. \"Strict\" shows only highly similar estimates (great for repeatable, standardised scopes). \"Flexible\" casts a wider net and shows more options (useful when scopes vary). You can adjust this per estimate or set a default for your workspace.",
    },
    {
      q: "Is my data secure?",
      a: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Uploaded documents are processed in memory and never stored in the database. Only the extracted line items are saved. Row-level security ensures your data is only accessible to your organization.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, from your dashboard with one click. No emails, no calls, no cancellation flow. Your estimates and data remain accessible on the free plan (up to 5/month) even after you cancel paid. We don't hold your work hostage.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, fontFamily: FONT, color: TEXT, lineHeight: 1.65, fontSize: 16, WebkitFontSmoothing: "antialiased" }}>

      {/* ── NAV ──────────────────────────────────────────────────── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(15,17,21,0.9)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo.png" alt="ScopeToQuote" width={52} height={52} style={{ borderRadius: 10 }} />
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", fontFamily: FONT }}>ScopeToQuote</span>
          </a>

          {/* Desktop nav */}
          <ul className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }}>
            <li><a href="#how" style={{ fontSize: 14, fontWeight: 500, color: MUTED, textDecoration: "none" }}>How it works</a></li>
            <li><a href="#features" style={{ fontSize: 14, fontWeight: 500, color: MUTED, textDecoration: "none" }}>Features</a></li>
            <li><a href="#pricing" style={{ fontSize: 14, fontWeight: 500, color: MUTED, textDecoration: "none" }}>Pricing</a></li>
            <li><a href="#faq" style={{ fontSize: 14, fontWeight: 500, color: MUTED, textDecoration: "none" }}>FAQ</a></li>
          </ul>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={LOGIN_URL} rel="noopener noreferrer" style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, color: MUTED, textDecoration: "none", background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 8, fontFamily: FONT }}>Sign in</a>
            <a href={SIGNUP_URL} rel="noopener noreferrer" style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, backgroundColor: GREEN, color: "#0a1a0f", textDecoration: "none", borderRadius: 8, fontFamily: FONT }}>Start free →</a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav"
            style={{ background: "none", border: "none", cursor: "pointer", color: TEXT, padding: 4 }}
          >
            {mobileMenuOpen ? <HiXMark style={{ width: 24, height: 24 }} /> : <HiBars3 style={{ width: 24, height: 24 }} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ borderTop: `1px solid ${BORDER}`, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16, background: BG2 }}>
            <a href="#how" onClick={() => setMobileMenuOpen(false)} style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}>How it works</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}>Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}>Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}>FAQ</a>
            <a href={LOGIN_URL} rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}>Sign in</a>
            <a href={SIGNUP_URL} rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ backgroundColor: GREEN, color: "#0a1a0f", fontSize: 14, fontWeight: 600, textDecoration: "none", padding: "8px 20px", borderRadius: 8, display: "inline-block", width: "fit-content" }}>Start free →</a>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="hero" style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* Glow */}
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={container}>
          <div style={{ position: "relative", textAlign: "center" }}>
            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: MUTED, marginBottom: 24, background: BG2, border: `1px solid ${BORDER}`, padding: "6px 14px 6px 10px", borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, boxShadow: `0 0 8px ${GREEN}`, display: "inline-block" }} />
              Built for B2B service agencies &amp; consultants
            </div>

            <h1 style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.04em", marginBottom: 24, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
              Quote in minutes.<br />
              <em style={{ fontStyle: "normal", color: GREEN }}>Close one more a month.</em>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: MUTED, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 40px" }}>
              Drop in a scope. ScopeToQuote matches it against your past work,
              pulls the closest line items, and builds a ready-to-send estimate
              in under 2 minutes, using your prices, not a generic template.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              <BtnPrimary href="/signup" lg>Start for Free</BtnPrimary>
              <BtnGhost href="#how" lg>See how it works ↓</BtnGhost>
            </div>

            <p style={{ fontSize: 13, color: MUTED2 }}>
            </p>

            {/* Hero visual */}
            <div style={{ margin: "56px auto 0", maxWidth: 860, display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 0, alignItems: "center" }} className="hero-visual">
              {/* Left: Raw scope */}
              <div style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${BORDER}`, fontSize: 12, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444", display: "inline-block" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b", display: "inline-block" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                  </div>
                  <span>Client scope received</span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: MUTED, fontFamily: "'Courier New', monospace" }}>
                    <strong style={{ color: TEXT }}>SCOPE 1: n8n Workflow Automation</strong><br />
                    Setup &amp; Integration<br />
                    ─────────────────────────<br /><br />
                    Timeline: 4–6 weeks<br /><br />
                    OVERVIEW<br />
                    Client needs automation of<br />
                    onboarding, CRM sync, and<br />
                    invoice triggers via n8n...<br /><br />
                    DELIVERABLES<br />
                    - Cloud / self-hosted install<br />
                    - Up to 10 workflows<br />
                    - API connectors setup<br />
                    - Error handling + logging<br />
                    - Admin training session
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: GREEN }}>→</div>

              {/* Right: Generated estimate */}
              <div style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: `1px solid ${BORDER}`, fontSize: 12, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  <span>Estimate generated</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, background: "rgba(34,197,94,0.15)", color: GREEN, border: "1px solid rgba(34,197,94,0.3)", padding: "3px 10px", borderRadius: 999 }}>✦ 87% match</span>
                </div>
                <div style={{ padding: 20 }}>
                  {[
                    { desc: "n8n Cloud / Self-Hosted Install & Config", price: "$1,200" },
                    { desc: "Workflow Design & Build (up to 10)", price: "$4,500" },
                    { desc: "API Integration & Connector Setup", price: "$2,000" },
                    { desc: "Error Handling & Activity Logging", price: "$800" },
                    { desc: "Admin Training & Documentation", price: "$700" },
                    { desc: "Monthly Retainer: Support", price: "$600/mo" },
                  ].map((line, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < 5 ? `1px solid rgba(42,48,64,0.6)` : "none", fontSize: 13 }}>
                      <span style={{ color: TEXT }}>{line.desc}</span>
                      <span style={{ color: GREEN, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{line.price}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0 0", borderTop: `2px solid ${BORDER}`, marginTop: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>Total</span>
                    <span style={{ fontSize: 22, fontWeight: 800, color: GREEN }}>$9,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ─────────────────────────────────────────────── */}
      <div style={{ padding: "32px 0", background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: MUTED2 }}>Used by agencies across</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                "🤖 Automation (n8n / Make / Zapier)",
                "📣 Marketing & SEO",
                "💻 Web & Software Dev",
                "🎬 Video & Creative Production",
                "📊 IT & Ops Consulting",
              ].map((chip, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, color: MUTED, background: BG3, border: `1px solid ${BORDER}`, padding: "5px 14px", borderRadius: 999 }}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }} className="stats-grid">
            {[
              { num: "10–40", label: "Hours lost per month", sub: "Average agency quoting overhead at 10–20 estimates/mo, 1–2 hrs each" },
              { num: "43%", label: "Of won proposals close within 24 hrs", sub: "Speed kills competitors. Agencies that quote same-day win more" },
              { num: "<2 min", label: "With ScopeToQuote", sub: "From raw scope to priced, ready-to-send estimate PDF with your branding" },
            ].map((stat, i) => (
              <div key={i} style={{ background: BG2, padding: "40px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-0.04em", color: GREEN, lineHeight: 1, marginBottom: 8 }}>{stat.num}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 6 }}>{stat.label}</div>
                <div style={{ fontSize: 13, color: MUTED }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, margin: 0 }} />

      {/* ── PROBLEM ──────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: BG2 }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="problem-grid">
            <div>
              <Tag>The Problem</Tag>
              <h2 style={{ marginTop: 16, fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>
                The estimate grind<br />is bleeding your business.
              </h2>
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>Every new project starts the same way. A client sends a vague scope. You dig through Google Drive for last quarter's similar job. You copy-paste into a new doc, adjust numbers from memory, and hope you didn't miss a line item.</p>
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>It takes an hour. You do it ten times a week. That's time you're not billing, and money you can't see leaving.</p>
              <div style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.06) 0%, transparent 100%)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: RADIUS, padding: "24px 28px", marginTop: 28 }}>
                <strong style={{ display: "block", fontSize: 32, fontWeight: 800, color: GREEN, marginBottom: 4 }}>$1,000–$4,000</strong>
                <span style={{ fontSize: 14, color: MUTED }}>Invisible monthly cost for a 10-person agency doing 15 estimates/month at $75/hr blended rate. You can't bill that time back.</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "⏳", title: "You rebuild the same estimate every time", desc: "Even when the scope is 90% identical to something you've quoted before, you start from scratch. There's no system that learns from your work." },
                { icon: "⚠️", title: "Pricing drifts and you don't notice", desc: "Without a reference point, you quote from memory. A job that cost $4,500 last year gets quoted at $3,800 this year. Margin erosion is invisible until it's catastrophic." },
                { icon: "🐌", title: "Slow quotes lose deals", desc: "43% of won proposals are accepted within 24 hours of the client opening them. Every hour your quote sits unfinished is an hour a competitor can swoop in." },
                { icon: "📋", title: "Your institutional pricing lives in your head", desc: "When you hire or hand off to a team member, your pricing logic doesn't transfer. Inconsistent quotes confuse clients and signal amateur operations." },
              ].map((item, i) => (
                <div key={i} style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: RADIUS, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: "rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how" style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={container}>
          <div style={{ textAlign: "center" }}>
            <Tag>How It Works</Tag>
            <h2 style={{ marginTop: 16, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>Three steps. Done in minutes.</h2>
            <p style={{ fontSize: 18, color: MUTED, maxWidth: 560, margin: "0 auto" }}>No setup fees. No implementation. You'll have your first estimate in the time it takes to make a coffee.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: BORDER, borderRadius: RADIUS_LG, overflow: "hidden", marginTop: 60 }} className="steps-grid">
            {[
              { num: "01", icon: "📄", title: "Drop in your scope", desc: "Paste a project description or upload whatever the client sent: PDF, Word doc, forwarded email, Notion page. ScopeToQuote extracts the deliverables and maps them to line items automatically." },
              { num: "02", icon: "🤖", title: "AI finds your closest past work", desc: "Your estimate history trains a personal matching engine. For every new scope, the AI surfaces the most similar previous estimates with a match score, so you're always building on real data, not gut feel." },
              { num: "03", icon: "✅", title: "Review, adjust, send", desc: "Import the matched line items with one click. Adjust quantities and prices as needed. Apply tax, payment terms, and your branding, then export a professional PDF that looks like you spent an hour on it." },
            ].map((step, i) => (
              <div key={i} style={{ background: BG, padding: "40px 32px", position: "relative" }}>
                <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.04em", color: BORDER, marginBottom: 20, lineHeight: 1 }}>{step.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 18, background: GREEN_BG, border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{step.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI MATCHING FEATURE ───────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: BG2 }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="feature-hero-grid">
            <div>
              <Tag>Core Feature</Tag>
              <h2 style={{ marginTop: 16, fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Not generic AI.<br /><em style={{ fontStyle: "normal", color: GREEN }}>Your prices. Your logic.</em>
              </h2>
              <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginBottom: 16 }}>Every estimate you save builds your personal estimating engine. Next time a similar scope comes in, same industry, same deliverables, ballpark same size, ScopeToQuote surfaces the closest matches and pre-fills from them.</p>
              <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginBottom: 16 }}>You set the match threshold. Strict for exact repeatable scopes. Flexible when you want more options. You're always in control of what gets imported.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "24px 0" }}>
                <CheckItem>Matches on deliverable components, not just keywords. Partial overlaps still surface useful references</CheckItem>
                <CheckItem>Shows a percentage match score for every similar estimate so you know how confident to be</CheckItem>
                <CheckItem>Gets smarter with every estimate you save. The more you use it, the better it performs</CheckItem>
                <CheckItem>Your data never trains anyone else's model. Your estimates are private to your account</CheckItem>
              </div>
            </div>

            {/* Similar estimates widget */}
            <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, padding: 20, overflow: "hidden" }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED2, marginBottom: 16 }}>Similar estimates found: 5 results</div>
              {[
                { name: "CB-0008 · Estimate1", scope: "SCOPE 1: n8n Workflow Automation – Setup & Integration", match: 87, items: 6, total: "$9,800", high: true },
                { name: "CB-0004 · Scope1", scope: "SCOPE 1: Marketing Agency | Full Automation Build", match: 82, items: 8, total: "$14,700", high: true },
                { name: "CB-0011 · Estimate1 v2", scope: "SCOPE 3: n8n HR & Employee Onboarding Workflows", match: 78, items: 6, total: "$12,800", high: false },
              ].map((card, i) => (
                <div key={i} style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: RADIUS, padding: "14px 16px", marginBottom: 10, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{card.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 999, background: card.high ? "rgba(34,197,94,0.15)" : "rgba(234,179,8,0.15)", color: card.high ? GREEN : "#eab308" }}>{card.match}% match</span>
                  </div>
                  <div style={{ fontSize: 12, color: MUTED, marginBottom: 6 }}>{card.scope}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: MUTED2 }}>
                    <span>{card.items} items</span>
                    <span>{card.total}</span>
                  </div>
                </div>
              ))}
              <button style={{ display: "block", width: "100%", marginTop: 16, background: GREEN, color: "#0a1a0f", border: "none", borderRadius: 8, padding: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", textAlign: "center", fontFamily: FONT }}>
                Use this estimate → Import all line items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section id="features" style={{ padding: "96px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center" }}>
            <Tag>Everything Included</Tag>
            <h2 style={{ marginTop: 16, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>Everything you need to quote faster.</h2>
            <p style={{ fontSize: 18, color: MUTED, maxWidth: 560, margin: "0 auto 60px" }}>No add-ons. No integrations required to get started. Works out of the box.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="features-grid">
            {[
              { icon: "📥", bg: "rgba(34,197,94,0.1)", title: "Import Any Document", desc: "PDF, DOCX, TXT, CSV, Markdown. Upload whatever the client sent and get a parsed, structured scope in seconds. OCR supported for scanned documents." },
              { icon: "🗂️", bg: "rgba(99,102,241,0.1)", title: "Services Catalog", desc: "Build a library of your standard services with base prices, units, and billing types. One click to add any service to an estimate. No more misremembering rates." },
              { icon: "🔢", bg: "rgba(245,158,11,0.1)", title: "Estimate Versioning", desc: "Every revision is saved automatically. Client wants to compare V1 and V3? You have both. No more \"final_FINAL_v2\" filenames or overwritten docs." },
              { icon: "🧾", bg: "rgba(236,72,153,0.1)", title: "Professional PDF Export", desc: "Every estimate exports as a clean PDF with your logo, company details, line items, tax, and payment terms. Looks like you spent an hour on it. You spent three minutes." },
              { icon: "💰", bg: "rgba(6,182,212,0.1)", title: "Tax Codes & Payment Terms", desc: "Set up GST, VAT, sales tax, or any custom rate once. Attach standard payment terms at the org level or per estimate. Compliance without the headache." },
            ].map((card, i) => (
              <div key={i} style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, padding: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, marginBottom: 16, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{card.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ───────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: BG2 }}>
        <div style={container}>
          <div style={{ textAlign: "center" }}>
            <Tag>The Math</Tag>
            <h2 style={{ marginTop: 16, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>It pays for itself on the first estimate.</h2>
            <p style={{ fontSize: 18, color: MUTED, maxWidth: 560, margin: "0 auto 60px" }}>Conservative numbers. Your actual savings are probably higher.</p>
          </div>
          <div style={{ background: BG3, border: "1px solid rgba(34,197,94,0.2)", borderRadius: RADIUS_LG, padding: 48, maxWidth: 720, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="roi-grid">
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Your current process</h3>
                {[
                  ["Estimates per month", "15"],
                  ["Time per estimate (manual)", "90 min"],
                  ["Time per estimate (ScopeToQuote)", "12 min"],
                  ["Your hourly rate", "$75/hr"],
                  ["ScopeToQuote cost", "$49/mo"],
                ].map(([label, val], i, arr) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 15, padding: "10px 0", borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <span style={{ color: MUTED }}>{label}</span>
                    <strong style={{ color: TEXT }}>{val}</strong>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Your monthly ROI</h3>
                {[
                  ["Hours saved per month", "19.5 hrs"],
                  ["Dollar value of time saved", "$1,462"],
                  ["Tool cost", "− $49"],
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 15, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ color: MUTED }}>{label}</span>
                    <strong style={{ color: TEXT }}>{val}</strong>
                  </div>
                ))}
                <div style={{ background: GREEN_BG, border: "1px solid rgba(34,197,94,0.25)", borderRadius: RADIUS, padding: "20px 24px", marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>Net monthly benefit</span>
                  <span style={{ fontSize: 28, fontWeight: 800, color: GREEN }}>$1,413</span>
                </div>
                <p style={{ fontSize: 13, color: MUTED, marginTop: 10, textAlign: "center" }}>Payback period: <strong style={{ color: GREEN }}>first estimate of the month.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: "96px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center" }}>
            <Tag>Pricing</Tag>
            <h2 style={{ marginTop: 16, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>Simple pricing. Cancels with one click.</h2>
            <p style={{ fontSize: 18, color: MUTED, maxWidth: 560, margin: "0 auto 48px" }}>Start free. Upgrade when the ROI is obvious. That will be your second estimate.</p>
          </div>


          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="pricing-grid">
            {/* Free */}
            <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, padding: 32, position: "relative" }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 16 }}>Free</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em", color: TEXT }}>$0</span>
              </div>
              <p style={{ fontSize: 14, color: MUTED, marginBottom: 28, lineHeight: 1.55 }}>Try the product with no commitment. No credit card needed. See the matching in action before you pay a cent.</p>
              <a href="/signup" rel="noopener noreferrer" style={{ display: "block", width: "100%", textAlign: "center", padding: "13px 0", fontSize: 15, fontWeight: 600, background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 8, textDecoration: "none", marginBottom: 28, fontFamily: FONT }}>Get started free</a>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["10 estimates per month", "AI similarity matching", "PDF export (with ScopeToQuote watermark)", "Services catalog (up to 10 items)", "Branded PDF (your logo)", "Estimate versioning"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                    <span style={{ color: GREEN, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: MUTED }}>{item}</span>
                  </li>
                ))}
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                  <span style={{ color: MUTED2, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: MUTED2 }}>Limited tax codes &amp; payment terms</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                  <span style={{ color: MUTED2, flexShrink: 0, marginTop: 1 }}>✗</span>
                  <span style={{ color: MUTED2 }}>Team support</span>
                </li>
              </ul>
            </div>

            {/* Pro / Founding */}
            <div style={{ background: "linear-gradient(180deg, rgba(34,197,94,0.07) 0%, #1d2330 100%)", border: `1px solid ${GREEN}`, borderRadius: RADIUS_LG, padding: 32, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: GREEN, color: "#0a1a0f", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>Most Popular</div>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 16 }}>Pro</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 18, color: MUTED2, textDecoration: "line-through", marginRight: 4 }}>$49</span>
                <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em", color: TEXT }}>$29</span>
                <span style={{ fontSize: 15, color: MUTED }}>/mo</span>
                <div style={{ marginTop: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, background: GREEN_BG, padding: "2px 8px", borderRadius: 999 }}>Founding member price, locked forever</span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: MUTED, marginBottom: 28, lineHeight: 1.55 }}>Everything you need to quote faster, look professional, and never rebuild an estimate from scratch again.</p>
              <a href="https://live.scopetoquote.com/signup?next=/api/subscriptions/pro-checkout" rel="noopener noreferrer" style={{ display: "block", width: "100%", textAlign: "center", padding: "13px 0", fontSize: 15, fontWeight: 600, background: GREEN, color: "#0a1a0f", border: "none", borderRadius: 8, textDecoration: "none", marginBottom: 8, fontFamily: FONT }}>Claim founding price →</a>
              <p style={{ textAlign: "center", fontSize: 12, color: MUTED2, marginBottom: 28 }}>7-day free trial</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Unlimited estimates per month",
                  "AI similarity matching (all thresholds)",
                  "Branded PDF, your logo, no watermark",
                  "Unlimited services catalog",
                  "Estimate versioning & history",
                  "Tax codes & payment terms",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                    <span style={{ color: GREEN, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: MUTED }}>{item}</span>
                  </li>
                ))}
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                  <span style={{ color: MUTED2, flexShrink: 0, marginTop: 1 }}>✗</span>
                  <span style={{ color: MUTED2 }}>Team seats (Solo use)</span>
                </li>
              </ul>
            </div>

            {/* Agency */}
            <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, padding: 32, position: "relative" }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 16 }}>Agency</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em", color: TEXT }}>$99</span>
                <span style={{ fontSize: 15, color: MUTED }}>/mo</span>
              </div>
              <p style={{ fontSize: 14, color: MUTED, marginBottom: 28, lineHeight: 1.55 }}>For teams that quote together. Shared services catalog and estimate history means everyone quotes consistently at your rates.</p>
              <a href="https://calendly.com/revexos/scopetoquote" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", textAlign: "center", padding: "13px 0", fontSize: 15, fontWeight: 600, background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 8, textDecoration: "none", marginBottom: 28, fontFamily: FONT }}>Book a meeting →</a>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Everything in Pro",
                  "Unlimited team members",
                  "Shared services catalog across team",
                  "Shared estimate history",
                  "Team-level tax & payment defaults",
                  "Priority support (email + chat)",
                  "Onboarding call with founder",
                  "Custom AI match threshold per user",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                    <span style={{ color: GREEN, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: MUTED }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "96px 0", background: BG2 }}>
        <div style={containerNarrow}>
          <div style={{ textAlign: "center" }}>
            <Tag>FAQ</Tag>
            <h2 style={{ marginTop: 16, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 56 }}>Questions we get asked.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: RADIUS, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", fontSize: 15, fontWeight: 600, color: TEXT, textAlign: "left", gap: 16, fontFamily: FONT }}
                >
                  {faq.q}
                  {openFaq === i
                    ? <HiChevronUp style={{ width: 18, height: 18, color: MUTED, flexShrink: 0 }} />
                    : <HiChevronDown style={{ width: 18, height: 18, color: MUTED, flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 14, color: MUTED, lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section style={{ padding: "100px 0", background: BG }}>
        <div style={container}>
          <div style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 100%)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 24, padding: "64px 48px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Send your next quote<br /><em style={{ fontStyle: "normal", color: GREEN }}>before your competition does.</em>
            </h2>
            <p style={{ fontSize: 17, color: MUTED, marginBottom: 36 }}>Join agencies that have stopped rebuilding the same estimate from scratch every week. Your first 10 estimates are free. No credit card, no setup.</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <BtnPrimary href={SIGNUP_URL} lg>Start free now →</BtnPrimary>
              <BtnGhost href="https://calendly.com/revexos/scopetoquote?month=2026-03" target="_blank" rel="noopener noreferrer" lg>Book Live Demo</BtnGhost>
            </div>
            <p style={{ fontSize: 13, color: MUTED2, marginTop: 18 }}>Free tier available permanently · Founding member price ($29/mo) closes at 50 customers</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#0F1115", borderTop: `1px solid #1f2937`, padding: "48px 0" }}>
        <div style={container}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.png" alt="ScopeToQuote" width={48} height={48} style={{ borderRadius: 9 }} />
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em", fontFamily: FONT }}>ScopeToQuote</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "#6b7280" }}>prabhu@scopetoquote.com</span>
              <a href="/privacy" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/tos" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Terms of Service</a>
            </div>
            <p style={{ fontSize: 13, color: "#6b7280" }}>© {new Date().getFullYear()} ScopeToQuote. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
          .stats-grid, .steps-grid { grid-template-columns: 1fr !important; }
          .problem-grid, .feature-hero-grid, .pricing-grid, .roi-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-visual { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        a:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

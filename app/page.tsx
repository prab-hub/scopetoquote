"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiSparkles,
  HiArrowRight,
  HiBars3,
  HiXMark,
  HiDocumentText,
  HiDocumentDuplicate,
  HiShieldCheck,
  HiArrowDownTray,
  HiUsers,
  HiReceiptPercent,
  HiMagnifyingGlass,
  HiChevronDown,
  HiChevronUp,
  HiClock,
  HiFolder,
} from "react-icons/hi2";

const GREEN = "#16A34A";
const GREEN_LIGHT = "#DCFCE7";
const GREEN_MUTED = "#BBF7D0";
const SIGNUP_URL = "https://live.scopetoquote.com/signup";
const LOGIN_URL = "https://live.scopetoquote.com/login";

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
};

export default function ScopeToQuotePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      icon: HiDocumentText,
      title: "Drop in your scope",
      description:
        "Paste a project description or upload the client's document — PDF, Word, CSV, whatever they sent you.",
    },
    {
      icon: HiMagnifyingGlass,
      title: "ScopeToQuote finds your closest past work",
      description:
        "The AI scans your previous estimates for similar scopes, quantities, and line items. It surfaces the most relevant ones automatically.",
    },
    {
      icon: HiArrowDownTray,
      title: "Get a ready-to-send estimate",
      description:
        "Review, adjust if needed, and export a polished PDF — with your logo, payment terms, and tax already applied.",
    },
  ];

  const features = [
    {
      icon: HiSparkles,
      title: "AI Similarity Matching",
      description:
        "Every estimate you save trains your personal estimating engine. Next time a similar scope comes in, ScopeToQuote pulls the closest matches and builds from them. Not generic AI — your prices, your line items, your way.",
    },
    {
      icon: HiDocumentText,
      title: "Import Any Document",
      description:
        "Upload PDF, DOCX, DOC, TXT, CSV, or Markdown. ScopeToQuote extracts the scope, pulls out tasks and quantities, and maps them to line items — ready for review in seconds.",
    },
    {
      icon: HiFolder,
      title: "Your Services Catalog",
      description:
        "Build a catalog of your standard services with base prices, units, and billing types. When you create an estimate manually, your services are one click away.",
    },
    {
      icon: HiDocumentDuplicate,
      title: "Estimate Versioning",
      description:
        "Every revision is saved. Client wants to compare V1 and V3? You have both. No overwriting, no final_FINAL_v2 file names.",
    },
    {
      icon: HiArrowDownTray,
      title: "Professional PDF Export",
      description:
        "Clean PDF with your logo, line items broken out, tax applied, and payment terms stated. Looks like you spent an hour on it. You spent three minutes.",
    },
    {
      icon: HiUsers,
      title: "Contacts & CRM (Light)",
      description:
        "Keep a simple contact book. Attach a client to any estimate and their billing address pre-fills automatically. No separate CRM needed.",
    },
    {
      icon: HiReceiptPercent,
      title: "Tax Codes & Payment Terms",
      description:
        "Set up your tax codes once — GST, VAT, sales tax. Attach standard payment terms at the org level or per estimate. It just works.",
    },
    {
      icon: HiShieldCheck,
      title: "Private & Secure",
      description:
        "Your estimates are only used to generate suggestions for your own account — never shared across organizations. AES-256 at rest, TLS in transit.",
    },
  ];

  const faqs = [
    {
      q: "Does it use my estimates to train a shared AI?",
      a: "No. Your estimates are only used to generate suggestions for your own account. Nothing is shared across organizations.",
    },
    {
      q: "What file types can I import?",
      a: "PDF, Word (.docx, .doc), plain text (.txt), Markdown (.md), and CSV.",
    },
    {
      q: "Can I use my own tax rates?",
      a: "Yes. You can create custom tax codes for any rate, in addition to the built-in system codes.",
    },
    {
      q: "What happens if my uploaded file is a scanned image?",
      a: "ScopeToQuote uses OCR when a PDF is scanned and not machine-readable. Text-based PDFs are processed instantly.",
    },
    {
      q: "Is my data secure?",
      a: "All data is encrypted at rest (AES-256) and in transit (TLS). File content is processed in memory only — uploaded documents are never stored in the database.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#0F1115", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            {/* Logo */}
            <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.png" alt="ScopeToQuote" width={52} height={52} style={{ borderRadius: 10 }} />
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>ScopeToQuote</span>
            </a>

            {/* Desktop links */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
              <a href="#how-it-works" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>How It Works</a>
              <a href="#features" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>Features</a>
              <a href="#faq" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>FAQ</a>
              <a href="#pricing" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>Pricing</a>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
              <a
                href={LOGIN_URL}
                style={{ color: "#9ca3af", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
              >
                Log In
              </a>
              <a
                href={SIGNUP_URL}
                style={{ backgroundColor: GREEN, color: "#fff", padding: "8px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
              >
                Sign Up
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4 }}
              className="mobile-nav"
            >
              {mobileMenuOpen ? <HiXMark style={{ width: 24, height: 24 }} /> : <HiBars3 style={{ width: 24, height: 24 }} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div style={{ borderTop: "1px solid #1f2937", padding: "16px 0", display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>How It Works</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>Features</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>FAQ</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>Pricing</a>
              <a href={LOGIN_URL} style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }} onClick={() => setMobileMenuOpen(false)}>Log In</a>
              <a href={SIGNUP_URL} style={{ backgroundColor: GREEN, color: "#fff", padding: "8px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block", width: "fit-content" }} onClick={() => setMobileMenuOpen(false)}>Sign Up</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 0 60px", backgroundColor: "#ffffff" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: GREEN_LIGHT, color: GREEN, padding: "6px 16px", borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <HiSparkles style={{ width: 14, height: 14 }} />
              Estimates built from your real past work
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#111827", marginBottom: 24 }}>
              Your next estimate is probably one{" "}
              <span style={{ color: GREEN }}>you&apos;ve already written.</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#6b7280", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
              ScopeToQuote learns from your past work. Drop in a scope, get a fully-priced estimate in seconds — built from real jobs you&apos;ve actually done.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href={SIGNUP_URL} style={{ backgroundColor: GREEN, color: "#fff", padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Start Free <HiArrowRight style={{ width: 16, height: 16 }} />
              </a>
              <a href="#how-it-works" style={{ color: "#374151", border: "1px solid #d1d5db", padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
                See how it works ↓
              </a>
            </div>
          </div>

          {/* Hero cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, maxWidth: 900, margin: "56px auto 0", alignItems: "start" }}>
            {/* Messy scope */}
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 20, padding: 24, backgroundColor: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#f87171" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ color: "#9ca3af", fontSize: 12, marginLeft: 8 }}>client_scope_final_v2.pdf</span>
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Hey, here&apos;s the brief for the new project...</p>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>We need a full rebrand — logo, brand guidelines, website redesign (5-6 pages), social templates, and possibly a pitch deck. Timeline is tight, maybe 6 weeks? Budget TBD...</p>
              <div style={{ marginTop: 12, padding: 10, borderRadius: 8, backgroundColor: "#f9fafb", fontSize: 12, color: "#9ca3af" }}>[Attached: scope_notes_draft.docx, old_brief.pdf]</div>
            </div>

            {/* Clean estimate */}
            <div style={{ border: `2px solid ${GREEN}`, borderRadius: 20, padding: 24, backgroundColor: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>EST-2024-047</span>
                <span style={{ backgroundColor: GREEN_LIGHT, color: GREEN, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>Ready to send</span>
              </div>
              {[
                { item: "Brand Strategy & Positioning", price: "$2,400" },
                { item: "Logo Design (3 concepts)", price: "$1,800" },
                { item: "Brand Guidelines Doc", price: "$1,200" },
                { item: "Website Redesign (6 pages)", price: "$5,400" },
                { item: "Social Media Templates", price: "$900" },
                { item: "Pitch Deck Design", price: "$1,600" },
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "7px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <span style={{ color: "#374151" }}>{line.item}</span>
                  <span style={{ fontWeight: 600, color: GREEN }}>{line.price}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700, paddingTop: 10, marginTop: 2 }}>
                <span style={{ color: "#111827" }}>Total</span>
                <span style={{ color: GREEN }}>$13,300</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={{ backgroundColor: "#f9fafb", padding: "80px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: 24, letterSpacing: "-0.02em" }}>The estimate grind is real.</h2>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#6b7280", lineHeight: 1.8, marginBottom: 16 }}>
              Every new project starts the same way. Someone sends a vague scope. You dig through old spreadsheets, copy-paste from last quarter&apos;s quote, adjust numbers from memory, and hope you didn&apos;t miss anything.
            </p>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#6b7280", lineHeight: 1.8 }}>
              It takes an hour. You do it ten times a week.{" "}
              <strong style={{ color: "#111827" }}>That&apos;s time you&apos;re not billing.</strong>
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              {[
                { icon: HiClock, label: "1 hour per estimate", red: false },
                { icon: HiDocumentText, label: "10 estimates a week", red: false },
                { icon: HiArrowRight, label: "= 10 hours not billed", red: true },
              ].map(({ icon: Icon, label, red }, i) => (
                <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "12px 20px" }}>
                  <Icon style={{ width: 18, height: 18, color: red ? "#dc2626" : GREEN }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: red ? "#dc2626" : "#111827" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: "96px 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Three steps. <span style={{ color: GREEN }}>One estimate.</span>
            </h2>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              From messy scope to ready-to-send estimate in under 60 seconds.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 20, padding: "32px 28px", textAlign: "center", backgroundColor: "#fff" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <step.icon style={{ width: 26, height: 26, color: GREEN }} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, letterSpacing: "0.05em", marginBottom: 8, textTransform: "uppercase" }}>Step {i + 1}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Matching Feature */}
      <section style={{ padding: "96px 0", backgroundColor: "#f9fafb" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: GREEN_LIGHT, color: GREEN, padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 24 }}>
                <HiSparkles style={{ width: 13, height: 13 }} /> Core Feature
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Your estimates. <span style={{ color: GREEN }}>Your engine.</span>
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 16 }}>
                Every estimate you save trains your personal estimating engine. Next time a similar scope comes in, ScopeToQuote pulls the closest matches and builds from them.
              </p>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 16 }}>
                Not generic AI. Your prices. Your line items. Your way of structuring work.
              </p>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75 }}>
                You set the similarity threshold. Strict for exact matches. Loose when you want more options.{" "}
                <strong style={{ color: "#111827" }}>You&apos;re always in control.</strong>
              </p>
            </div>

            <div style={{ border: "1px solid #e5e7eb", borderRadius: 20, padding: 24, backgroundColor: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>Matching past estimates</span>
                <span style={{ backgroundColor: GREEN_LIGHT, color: GREEN, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>3 found</span>
              </div>
              {[
                { name: "Brand Redesign — Acme Co", match: 94, date: "Nov 2024" },
                { name: "Full Rebrand — TechStart", match: 87, date: "Aug 2024" },
                { name: "Identity System — Retail Co", match: 72, date: "Jun 2024" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{item.date}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 80, height: 6, borderRadius: 999, backgroundColor: "#f3f4f6", overflow: "hidden" }}>
                      <div style={{ width: `${item.match}%`, height: "100%", borderRadius: 999, backgroundColor: item.match >= 90 ? GREEN : item.match >= 80 ? "#4ade80" : GREEN_MUTED }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: GREEN, minWidth: 36 }}>{item.match}%</span>
                  </div>
                </div>
              ))}
              <button style={{ width: "100%", marginTop: 20, padding: "12px 0", borderRadius: 12, backgroundColor: GREEN, color: "#fff", fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>
                Build estimate from top match →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: "96px 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Everything you need. <span style={{ color: GREEN }}>Nothing you don&apos;t.</span>
            </h2>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              Built for contractors, agencies, and freelancers who write estimates every week.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 20, padding: 24, backgroundColor: "#fff" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <f.icon style={{ width: 22, height: 22, color: GREEN }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{f.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>Import from any format your clients send</p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
              {["PDF", "DOCX", "DOC", "TXT", "CSV", "Markdown"].map((fmt, i) => (
                <span key={i} style={{ padding: "8px 18px", border: "1px solid #e5e7eb", borderRadius: 999, fontSize: 13, color: "#6b7280", backgroundColor: "#fff" }}>{fmt}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "96px 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>Common questions</h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden", backgroundColor: "#fff" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{faq.q}</span>
                  {openFaq === i
                    ? <HiChevronUp style={{ width: 18, height: 18, color: GREEN, flexShrink: 0, marginLeft: 16 }} />
                    : <HiChevronDown style={{ width: 18, height: 18, color: "#9ca3af", flexShrink: 0, marginLeft: 16 }} />
                  }
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "96px 0", backgroundColor: "#f9fafb" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Simple pricing.
            </h2>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              No tiers, no credit card, no catch. We&apos;re in beta and it&apos;s completely free while we build with early users.
            </p>
          </div>

          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div style={{ border: `2px solid ${GREEN}`, borderRadius: 24, padding: "40px 40px 36px", backgroundColor: "#fff", textAlign: "center", position: "relative" }}>
              {/* Beta badge */}
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                <span style={{ backgroundColor: GREEN, color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 999, letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Beta — Limited Spots
                </span>
              </div>

              <div style={{ marginTop: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 64, fontWeight: 900, color: "#111827", letterSpacing: "-0.04em" }}>$0</span>
                <span style={{ fontSize: 18, color: "#6b7280", fontWeight: 500 }}> / month</span>
              </div>
              <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 32 }}>Free while in beta. Paid plans announced before launch.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36, textAlign: "left" }}>
                {[
                  "Unlimited estimates",
                  "AI similarity matching",
                  "Import PDF, DOCX, CSV & more",
                  "Professional PDF export",
                  "Services catalog",
                  "Estimate versioning",
                  "Contacts & CRM",
                  "Tax codes & payment terms",
                  "Priority support during beta",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href={SIGNUP_URL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, backgroundColor: GREEN, color: "#fff", padding: "15px 0", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", width: "100%" }}>
                Get free access <HiArrowRight style={{ width: 16, height: 16 }} />
              </a>
              <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 14 }}>No credit card required. Cancel anytime.</p>
            </div>

            <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", marginTop: 24 }}>
              Paid plans will be announced to beta users first — with a founder discount locked in.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div style={container}>
          <div style={{ backgroundColor: "#111827", borderRadius: 28, padding: "64px 48px", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(22,163,74,0.2)", color: "#86efac", padding: "6px 16px", borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <HiSparkles style={{ width: 13, height: 13 }} /> Free to start
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
              Stop re-writing estimates.<br />Start from where you left off.
            </h2>
            <p style={{ fontSize: 16, color: "#9ca3af", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
              ScopeToQuote is free to try. No credit card required. Start with your existing estimates and see how fast a new one comes together.
            </p>
            <a href={SIGNUP_URL} style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: GREEN, color: "#fff", padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              Start your free trial <HiArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0F1115", borderTop: "1px solid #1f2937", padding: "48px 0" }}>
        <div style={container}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.png" alt="ScopeToQuote" width={48} height={48} style={{ borderRadius: 9 }} />
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>ScopeToQuote</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "#6b7280" }}>hello@scopetoquote.com</span>
              <a href="/privacy" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/tos" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Terms of Service</a>
            </div>
            <p style={{ fontSize: 13, color: "#6b7280" }}>© {new Date().getFullYear()} ScopeToQuote. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}

import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

const GREEN = "#16A34A";

const container: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>

      {/* Nav */}
      <nav style={{ backgroundColor: "#111827", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", height: 64 }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HiSparkles style={{ width: 18, height: 18, color: "#fff" }} />
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>ScopeToQuote</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main style={{ padding: "64px 0 96px" }}>
        <div style={container}>
          <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 12 }}>Last updated: March 13, 2026</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 48 }}>
            ScopeToQuote is built for people who care about their business data. This policy explains what we collect, why, and how we protect it.
          </p>

          {[
            {
              title: "1. Who We Are",
              body: "ScopeToQuote is an AI-powered estimating tool for contractors, agencies, and freelancers. References to \"we\", \"us\", or \"our\" mean ScopeToQuote. You can reach us at hello@scopetoquote.com.",
            },
            {
              title: "2. What We Collect",
              body: null,
              list: [
                "Account information: name, email address, and password (hashed — we never see it).",
                "Organization details: company name, logo, tax codes, and payment terms you configure.",
                "Estimates and services: the line items, prices, and documents you create or upload.",
                "Uploaded files: processed in memory to extract text/scope data. File contents are not stored in our database after processing.",
                "Usage data: pages visited, features used, and error logs to improve the product.",
                "Device/browser info: IP address, browser type, and OS for security and analytics.",
              ],
            },
            {
              title: "3. How We Use Your Data",
              body: null,
              list: [
                "To operate the service — creating accounts, generating estimates, exporting PDFs.",
                "To power AI similarity matching — your past estimates are used only to generate suggestions for your own account. Your data is never used to train models for other users.",
                "To send transactional emails — account confirmations, password resets, important product updates.",
                "To improve the product — anonymised, aggregated usage patterns help us fix bugs and build better features.",
              ],
            },
            {
              title: "4. How We Store and Protect It",
              body: "All data is encrypted at rest using AES-256 and in transit using TLS 1.2+. We use row-level security (RLS) to ensure your organisation's data is inaccessible to other accounts. Uploaded documents are processed in memory and are not persisted to the database.",
            },
            {
              title: "5. Data Sharing",
              body: "We do not sell your data. We do not share it with advertisers. We may share it with trusted sub-processors (e.g. cloud infrastructure, email delivery) who are contractually bound to protect it. We will disclose data if required by law.",
            },
            {
              title: "6. Cookies",
              body: "We use session cookies to keep you logged in and analytics cookies to understand how the product is used. You can disable analytics cookies in your browser without losing core functionality.",
            },
            {
              title: "7. Your Rights",
              body: "You can request a copy of your data, ask us to correct it, or ask us to delete your account and all associated data at any time. Email hello@scopetoquote.com and we will respond within 30 days.",
            },
            {
              title: "8. Data Retention",
              body: "We keep your data for as long as your account is active. If you delete your account, your data is permanently deleted within 30 days, except where retention is required by law.",
            },
            {
              title: "9. Children",
              body: "ScopeToQuote is not directed at children under 16. We do not knowingly collect data from minors.",
            },
            {
              title: "10. Changes to This Policy",
              body: "If we make material changes, we will notify you by email and update the \"Last updated\" date above. Continued use of the service after changes constitutes acceptance.",
            },
            {
              title: "11. Contact",
              body: "Questions? Email hello@scopetoquote.com.",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{section.title}</h2>
              {section.body && <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75 }}>{section.body}</p>}
              {section.list && (
                <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {section.list.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: 15, color: "#4b5563", lineHeight: 1.7 }}>
                      <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111827", borderTop: "1px solid #1f2937", padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>← Back to ScopeToQuote</Link>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/tos" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>Terms of Service</Link>
          </div>
          <p style={{ fontSize: 13, color: "#6b7280" }}>© {new Date().getFullYear()} ScopeToQuote. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

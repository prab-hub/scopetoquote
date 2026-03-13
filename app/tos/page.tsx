import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

const GREEN = "#16A34A";

const container: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

export default function TOSPage() {
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
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 48 }}>
            These Terms govern your use of ScopeToQuote. By creating an account you agree to them. Please read them — they&apos;re written in plain English.
          </p>

          {[
            {
              title: "1. The Service",
              body: "ScopeToQuote provides AI-assisted estimating tools for service businesses. We offer it on a best-efforts basis during the beta period. Features may change, be added, or be removed as we develop the product.",
            },
            {
              title: "2. Your Account",
              body: "You must provide accurate information when creating an account. You are responsible for keeping your credentials secure. You may not share your account with others or create accounts on behalf of people without their consent. You must be at least 16 years old to use the service.",
            },
            {
              title: "3. Beta Period",
              body: "ScopeToQuote is currently free while in beta. We reserve the right to introduce paid plans in the future. We will give you reasonable notice before any free tier is removed or limited. Beta users who remain active will receive advance notice and a founder discount on paid plans.",
            },
            {
              title: "4. Your Content",
              body: null,
              list: [
                "You own your estimates, documents, contacts, and all other content you create in ScopeToQuote.",
                "By uploading content, you grant us a limited licence to process and store it solely to provide the service.",
                "You are responsible for ensuring you have the rights to any content you upload (e.g. client documents).",
                "We do not use your content to train AI models for other users or sell it to third parties.",
              ],
            },
            {
              title: "5. Acceptable Use",
              body: "You agree not to:",
              list: [
                "Use the service for unlawful purposes or to generate fraudulent estimates.",
                "Attempt to reverse-engineer, scrape, or abuse the API.",
                "Upload malware, spam, or content that infringes third-party intellectual property.",
                "Circumvent security controls or access other users' data.",
              ],
            },
            {
              title: "6. Intellectual Property",
              body: "ScopeToQuote, its logo, and its software are owned by us. Nothing in these Terms transfers ownership of our IP to you. We do not claim ownership of your content.",
            },
            {
              title: "7. Availability & Uptime",
              body: "We aim for high availability but do not guarantee 100% uptime, especially during the beta period. We are not liable for losses arising from downtime, data loss, or service interruptions.",
            },
            {
              title: "8. Limitation of Liability",
              body: "To the maximum extent permitted by law, ScopeToQuote is not liable for indirect, incidental, or consequential damages arising from your use of the service. Our total liability to you in any month is limited to the amount you paid us in that month (which during the beta period is $0).",
            },
            {
              title: "9. Termination",
              body: "You may cancel your account at any time. We may suspend or terminate accounts that violate these Terms. On termination, your data will be deleted within 30 days in accordance with our Privacy Policy.",
            },
            {
              title: "10. Changes to These Terms",
              body: "We may update these Terms. We will notify you by email with at least 14 days notice before material changes take effect. Continued use after that date constitutes acceptance.",
            },
            {
              title: "11. Governing Law",
              body: "These Terms are governed by the laws of the jurisdiction in which ScopeToQuote operates. Any disputes shall be resolved through good-faith negotiation before any formal proceedings.",
            },
            {
              title: "12. Contact",
              body: "Questions about these Terms? Email hello@scopetoquote.com.",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{section.title}</h2>
              {section.body && <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: section.list ? 12 : 0 }}>{section.body}</p>}
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

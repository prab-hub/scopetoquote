"use client";

import { useState } from "react";
import Link from "next/link";
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

const accentBlue = "#2563EB";
const accentBlueLight = "#DBEAFE";
const accentBlueMuted = "#BFDBFE";

export default function SmartEstimatesPage() {
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
      title: "Smart Estimate finds your closest past work",
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
        "Every estimate you save trains your personal estimating engine. Next time a similar scope comes in, Smart Estimate pulls the closest matches and builds from them. Not generic AI — your prices, your line items, your way.",
    },
    {
      icon: HiDocumentText,
      title: "Import Any Document",
      description:
        "Upload PDF, DOCX, DOC, TXT, CSV, or Markdown. Smart Estimate extracts the scope, pulls out tasks and quantities, and maps them to line items — ready for review in seconds.",
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
        "Every revision is saved. Client wants to compare V1 and V3? You have both. No overwriting, no &ldquo;final_FINAL_v2&rdquo; file names.",
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
      a: "Smart Estimate uses OCR (via AWS Textract) when a PDF is scanned and not machine-readable. Text-based PDFs are processed instantly without OCR.",
    },
    {
      q: "Is my data secure?",
      a: "All data is encrypted at rest (AES-256) and in transit (TLS). File content is processed in memory only — uploaded documents are never stored in the database. Row-level security ensures your data is only accessible to your organization.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background-primary)" }}
    >
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "var(--dark-bg-primary)",
          borderColor: "var(--dark-bg-secondary)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/smartestimates" className="flex items-center gap-2">
              <Image
                src="/Smart_Estimates_Logo.png"
                alt="Smart Estimate"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#how-it-works"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                FAQ
              </a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://smartestimates.revexos.com/signup"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: accentBlue }}
              >
                Start Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden py-4 border-t"
              style={{ borderColor: "var(--dark-bg-secondary)" }}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#how-it-works"
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#features"
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="https://smartestimates.revexos.com/signup"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-sm font-medium text-white transition-colors flex items-center justify-center gap-2 w-fit"
                  style={{ backgroundColor: accentBlue }}
                >
                  Start Free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: accentBlueLight,
                color: accentBlue,
              }}
            >
              <HiSparkles className="w-4 h-4" />
              Estimates built from your real past work
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{
                color: "var(--text-primary)",
                lineHeight: "1.1",
              }}
            >
              Your next estimate is probably one{" "}
              <span style={{ color: accentBlue }}>
                you&apos;ve already written.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
              style={{
                color: "var(--text-secondary)",
                lineHeight: "1.6",
              }}
            >
              Smart Estimate learns from your past work. Drop in a scope, get a
              fully-priced estimate in seconds — built from real jobs you&apos;ve
              actually done.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://smartestimates.revexos.com/signup"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-base font-medium text-white transition-all hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: accentBlue }}
              >
                Start Free
                <HiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-full text-base font-medium transition-colors border"
                style={{
                  color: "var(--text-primary)",
                  borderColor: "var(--border-strong)",
                }}
              >
                See how it works ↓
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto items-center">
            {/* Left: Messy scope */}
            <div
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--background-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span
                  className="text-xs ml-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  client_scope_final_v2.pdf
                </span>
              </div>
              <div className="space-y-2">
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Hey, here&apos;s the brief for the new project...
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  We need a full rebrand — logo, brand guidelines, website
                  redesign (5-6 pages), social templates, and possibly a pitch
                  deck. Timeline is tight, maybe 6 weeks? Budget TBD, let us
                  know what you think...
                </div>
                <div
                  className="text-xs mt-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: "var(--background-secondary)",
                    color: "var(--text-muted)",
                  }}
                >
                  [Attached: scope_notes_draft.docx, old_brief.pdf]
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2">
              <HiArrowRight
                className="w-8 h-8"
                style={{ color: accentBlue }}
              />
            </div>

            {/* Right: Clean estimate */}
            <div
              className="rounded-2xl border-2 p-6"
              style={{
                backgroundColor: "var(--background-card)",
                borderColor: accentBlue,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  EST-2024-047
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: accentBlueLight,
                    color: accentBlue,
                  }}
                >
                  Ready to send
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { item: "Brand Strategy & Positioning", price: "$2,400" },
                  { item: "Logo Design (3 concepts)", price: "$1,800" },
                  { item: "Brand Guidelines Doc", price: "$1,200" },
                  { item: "Website Redesign (6 pages)", price: "$5,400" },
                  { item: "Social Media Templates", price: "$900" },
                  { item: "Pitch Deck Design", price: "$1,600" },
                ].map((line, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm py-1 border-b"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <span style={{ color: "var(--text-primary)" }}>
                      {line.item}
                    </span>
                    <span
                      className="font-medium"
                      style={{ color: accentBlue }}
                    >
                      {line.price}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between text-sm font-bold pt-1">
                  <span style={{ color: "var(--text-primary)" }}>Total</span>
                  <span style={{ color: accentBlue }}>$13,300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "var(--background-secondary)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              The estimate grind is real.
            </h2>
            <p
              className="text-lg sm:text-xl"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              Every new project starts the same way. Someone sends a vague
              scope. You dig through old spreadsheets, copy-paste from last
              quarter&apos;s quote, adjust numbers from memory, and hope you
              didn&apos;t miss anything.
            </p>
            <p
              className="text-lg sm:text-xl mt-4"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              It takes an hour. You do it ten times a week.{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                That&apos;s time you&apos;re not billing.
              </strong>
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { icon: HiClock, label: "1 hour per estimate" },
                { icon: HiDocumentText, label: "10 estimates a week" },
                { icon: HiArrowRight, label: "= 10 hours not billed" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border"
                  style={{
                    backgroundColor: "var(--background-card)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: i === 2 ? "#DC2626" : accentBlue }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: i === 2 ? "#DC2626" : "var(--text-primary)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Three steps.{" "}
              <span style={{ color: accentBlue }}>One estimate.</span>
            </h2>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              From messy scope to ready-to-send estimate in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className="rounded-2xl border p-6 sm:p-8 text-center h-full"
                  style={{
                    backgroundColor: "var(--background-card)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: accentBlueLight }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{ color: accentBlue }}
                    />
                  </div>
                  <div
                    className="text-sm font-medium mb-2"
                    style={{ color: accentBlue }}
                  >
                    Step {index + 1}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5"
                    style={{ backgroundColor: accentBlueMuted }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Similarity Matching Feature — Lead Feature */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ backgroundColor: "var(--background-secondary)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: accentBlueLight,
                  color: accentBlue,
                }}
              >
                <HiSparkles className="w-4 h-4" />
                Core Feature
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)", lineHeight: "1.15" }}
              >
                Your estimates.{" "}
                <span style={{ color: accentBlue }}>Your engine.</span>
              </h2>
              <p
                className="text-lg mb-6"
                style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
              >
                Every estimate you save trains your personal estimating engine.
                Next time a similar scope comes in — same trade, same
                deliverables, ballpark same size — Smart Estimate pulls the
                closest matches and builds from them.
              </p>
              <p
                className="text-lg mb-6"
                style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
              >
                Not generic AI. Your prices. Your line items. Your way of
                structuring work.
              </p>
              <p
                className="text-lg"
                style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
              >
                You set the similarity threshold. Strict for exact matches.
                Loose when you want more options.{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  You&apos;re always in control.
                </strong>
              </p>
            </div>

            {/* Similarity UI mock */}
            <div className="space-y-4">
              <div
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Matching past estimates
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: accentBlueLight,
                      color: accentBlue,
                    }}
                  >
                    3 found
                  </span>
                </div>
                {[
                  { name: "Brand Redesign — Acme Co", match: 94, date: "Nov 2024" },
                  { name: "Full Rebrand — TechStart", match: 87, date: "Aug 2024" },
                  { name: "Identity System — Retail Co", match: 72, date: "Jun 2024" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-20 h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: "var(--border-subtle)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.match}%`,
                            backgroundColor:
                              item.match >= 90
                                ? accentBlue
                                : item.match >= 80
                                ? "#60A5FA"
                                : accentBlueMuted,
                          }}
                        />
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: accentBlue }}
                      >
                        {item.match}%
                      </span>
                    </div>
                  </div>
                ))}
                <button
                  className="w-full mt-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: accentBlue }}
                >
                  Build estimate from top match →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 sm:py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Everything you need.{" "}
              <span style={{ color: accentBlue }}>Nothing you don&apos;t.</span>
            </h2>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Built for contractors, agencies, and freelancers who write
              estimates every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: accentBlueLight }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: accentBlue }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Supported formats */}
          <div className="mt-12 text-center">
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Import from any format your clients send
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["PDF", "DOCX", "DOC", "TXT", "CSV", "Markdown"].map(
                (fmt, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium border"
                    style={{
                      backgroundColor: "var(--background-card)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {fmt}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials hidden for now */}

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Common questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden"
                style={{
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <HiChevronUp
                      className="w-5 h-5 flex-shrink-0 ml-4"
                      style={{ color: accentBlue }}
                    />
                  ) : (
                    <HiChevronDown
                      className="w-5 h-5 flex-shrink-0 ml-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ backgroundColor: "var(--background-secondary)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl p-8 sm:p-12 md:p-16 text-center"
            style={{ backgroundColor: "var(--dark-bg-primary)" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(37, 99, 235, 0.2)",
                color: "#93C5FD",
              }}
            >
              <HiSparkles className="w-4 h-4" />
              Free to start
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Stop re-writing estimates.
              <br />
              Start from where you left off.
            </h2>
            <p
              className="text-lg sm:text-xl mb-10 max-w-xl mx-auto"
              style={{ color: "var(--dark-text-secondary)" }}
            >
              Smart Estimate is free to try. No credit card required. Start with
              your existing estimates and see how fast a new one comes together.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://smartestimates.revexos.com/signup"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: accentBlue }}
              >
                Start your free trial
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{
          backgroundColor: "var(--dark-bg-primary)",
          borderColor: "var(--dark-bg-secondary)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/Smart_Estimates_Logo.png"
                alt="Smart Estimate"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center gap-6">
              <span
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                contact@revexos.com
              </span>
              <Link
                href="/"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                RevExOS
              </Link>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Smart Estimate by RevExOS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const TITLE = "ScopeToQuote: AI-Powered Estimating for Service Businesses";
const DESCRIPTION =
  "Create accurate estimates in seconds using your own past work. ScopeToQuote uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.";
const SITE_URL = "https://scopetoquote.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "ScopeToQuote",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "ScopeToQuote",
    type: "website",
    images: [{ url: "/logo.png", width: 1080, height: 1080, alt: "ScopeToQuote logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ScopeToQuote",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "prabhu@scopetoquote.com",
    contactType: "customer support",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ScopeToQuote",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free during beta",
  },
  featureList: [
    "AI similarity matching from past estimates",
    "Document import (PDF, DOCX, TXT, CSV, Markdown)",
    "Professional PDF export",
    "Services catalog",
    "Estimate versioning",
    "Tax codes and payment terms",
    "Contacts and light CRM",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T0TEZSZ1DP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T0TEZSZ1DP');
          `}
        </Script>
      </body>
    </html>
  );
}

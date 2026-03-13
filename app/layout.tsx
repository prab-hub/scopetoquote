import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ScopeToQuote — AI-Powered Estimating for Service Businesses",
  description:
    "Create accurate estimates in seconds using your own past work. ScopeToQuote uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.",
  openGraph: {
    title: "ScopeToQuote — AI-Powered Estimating for Service Businesses",
    description:
      "Create accurate estimates in seconds using your own past work. ScopeToQuote uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.",
    url: "https://live.scopetoquote.com",
    siteName: "ScopeToQuote",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Estimate — AI-Powered Estimating for Service Businesses",
  icons: {
    icon: "/Smart_Estimates_Logo.png",
    apple: "/Smart_Estimates_Logo.png",
  },
  description:
    "Create accurate estimates in seconds using your own past work. Smart Estimate uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.",
  alternates: {
    canonical: "https://smartestimates.revexos.com",
  },
  openGraph: {
    title: "Smart Estimate — AI-Powered Estimating for Service Businesses",
    description:
      "Create accurate estimates in seconds using your own past work. Smart Estimate uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.",
    url: "https://smartestimates.revexos.com",
    siteName: "Smart Estimate by RevExOS",
    type: "website",
  },
};

export default function SmartEstimatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

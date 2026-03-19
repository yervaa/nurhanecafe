import type { Metadata } from "next";

import "./globals.css";
import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";

export const metadata: Metadata = {
  title: "NurHane | Luxury Cookies & Sweet Moments",
  description:
    "A polished boutique cookie brand built with Next.js and Sanity for elegant, launch-ready bakery storytelling and ordering.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NurHane | Luxury Cookies & Sweet Moments",
    description:
      "A polished boutique cookie brand built with Next.js and Sanity for elegant, launch-ready bakery storytelling and ordering.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}

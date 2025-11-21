import "./globals.css";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AcreetionOS",
    template: "%s | AcreetionOS",
  },
  description: "The Future of Arch-Based Computing",
  openGraph: {
    title: "AcreetionOS",
    description: "The Future of Arch-Based Computing",
    url: "https://acreetionos.org",
    siteName: "AcreetionOS",
    images: [
      {
        url: "https://acreetionos.org/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcreetionOS",
    description: "The Future of Arch-Based Computing",
    images: ["https://acreetionos.org/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

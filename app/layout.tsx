import "./globals.css";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://acreetionos.org"),
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
        url: "/og-default.png",
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
    images: ["/og-default.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AcreetionOS",
  url: "https://acreetionos.org",
  logo: "https://acreetionos.org/icon.png",
  sameAs: [
    "https://discord.gg/acreetionos",
    "https://github.com/acreetionos",
    "https://facebook.com/acreetionos",
  ],
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AcreetionOS",
  description: "AcreetionOS is an Arch-based Linux distribution.",
  applicationCategory: "SystemApplication",
  downloadUrl: "https://acreetionos.org/downloads",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

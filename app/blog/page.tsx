import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest news, updates, and announcements from the AcreetionOS team.",
  openGraph: {
    title: "AcreetionOS Blog",
    description:
      "Read the latest news, updates, and announcements from the AcreetionOS team.",
    url: "https://acreetionos.org/blog",
    siteName: "AcreetionOS",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcreetionOS Blog",
    description:
      "Read the latest news, updates, and announcements from the AcreetionOS team.",
    images: ["/og-default.png"],
  },
};

export default function Blog() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <div className="max-w-5xl mx-auto px-10 py-32">
          <GlowHeading>Blog</GlowHeading>
          <GlassCard title="Welcome to the AcreetionOS Blog">
            Blog posts will appear here soon.
          </GlassCard>
        </div>
      </PageFade>
    </AuroraBackground>
  );
}
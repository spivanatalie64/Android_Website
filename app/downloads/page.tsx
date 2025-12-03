import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { DownloadCard } from "@/components/DownloadCard";
import { SystemInfoCard } from "@/components/SystemInfoCard";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download AcreetionOS ISO images. Choose from Cinnamon, Power Users, or Creators editions for your Arch-based Linux experience.",
  openGraph: {
    title: "Download AcreetionOS",
    description:
      "Download AcreetionOS ISO images. Choose from Cinnamon, Power Users, or Creators editions for your Arch-based Linux experience.",
    url: "https://acreetionos.org/downloads",
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
    title: "Download AcreetionOS",
    description:
      "Download AcreetionOS ISO images. Choose from Cinnamon, Power Users, or Creators editions for your Arch-based Linux experience.",
    images: ["/og-default.png"],
  },
};

export default function Downloads() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <div className="max-w-6xl mx-auto px-10 py-32">
          <GlowHeading>Downloads</GlowHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <DownloadCard edition="Cinnamon Edition" size="2.3 GB" link="#" />
            <DownloadCard edition="Power Users Edition" size="2.1 GB" link="#" />
            <DownloadCard edition="Creators Edition" size="2.5 GB" link="#" />
          </div>
          <div className="mt-20">
            <SystemInfoCard
              info={{
                Kernel: "6.10",
                Desktop: "Cinnamon",
                Base: "Arch Linux",
                FileSystem: "EXT4"
              }}
            />
          </div>
        </div>
      </PageFade>
    </AuroraBackground>
  );
}
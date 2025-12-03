import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { IconTile } from "@/components/IconTile";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";
import { FaDiscord, FaGithub, FaFacebook } from "react-icons/fa";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the AcreetionOS community on Discord, GitHub, and Facebook. Connect with users and contributors.",
  openGraph: {
    title: "Join the AcreetionOS Community",
    description:
      "Join the AcreetionOS community on Discord, GitHub, and Facebook. Connect with users and contributors.",
    url: "https://acreetionos.org/community",
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
    title: "Join the AcreetionOS Community",
    description:
      "Join the AcreetionOS community on Discord, GitHub, and Facebook. Connect with users and contributors.",
    images: ["/og-default.png"],
  },
};

export default function Community() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <div className="max-w-5xl mx-auto px-10 py-32">
          <GlowHeading>Join the Community</GlowHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
            <IconTile icon={<FaDiscord />} label="Discord" />
            <IconTile icon={<FaGithub />} label="GitHub" />
            <IconTile icon={<FaFacebook />} label="Facebook" />
          </div>
        </div>
      </PageFade>
    </AuroraBackground>
  );
}
import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Hero } from "@/components/Hero";
import { GlowHeading } from "@/components/GlowHeading";
import { HorizontalRow } from "@/components/HorizontalRow";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionDivider } from "@/components/SectionDivider";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AcreetionOS | The Future of Arch-Based Computing",
  description:
    "AcreetionOS is a modern, user-friendly Arch-based Linux distribution designed for everyone from beginners to power users.",
  openGraph: {
    title: "AcreetionOS | The Future of Arch-Based Computing",
    description:
      "AcreetionOS is a modern, user-friendly Arch-based Linux distribution designed for everyone from beginners to power users.",
    url: "https://acreetionos.org",
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
    title: "AcreetionOS | The Future of Arch-Based Computing",
    description:
      "AcreetionOS is a modern, user-friendly Arch-based Linux distribution designed for everyone from beginners to power users.",
    images: ["/og-default.png"],
  },
};

export default function Home() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <Hero />
        <div className="max-w-7xl mx-auto px-10 py-20">
          <GlowHeading>For Every User</GlowHeading>
          <HorizontalRow title="">
            <FeatureCard
              title="Cinnamon Edition"
              description="Stable, familiar, user-friendly."
              image="/placeholder.png"
            />
            <FeatureCard
              title="Power Users"
              description="Rolling release, Arch tooling."
              image="/placeholder2.png"
            />
            <FeatureCard
              title="Creators"
              description="PipeWire, multimedia tools, streaming support."
              image="/desktop-preview.png"
            />
          </HorizontalRow>
          <SectionDivider />
          <GlowHeading>Why AcreetionOS?</GlowHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <FeatureCard
              title="Approachable"
              description="Designed for humans, not just experts."
              image="/placeholder.png"
            />
            <FeatureCard
              title="Independent"
              description="Self-funded, bootstrapped, community-focused."
              image="/placeholder2.png"
            />
            <FeatureCard
              title="Open Source"
              description="Built on the Arch ecosystem."
              image="/desktop-preview.png"
            />
          </div>
        </div>
      </PageFade>
    </AuroraBackground>
  );
}
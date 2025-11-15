import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { AuroraPanel } from "@/components/AuroraPanel";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

export default function About() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <div className="max-w-4xl mx-auto px-10 py-32">
          <GlowHeading>About AcreetionOS</GlowHeading>
          <AuroraPanel>
            <p className="text-gray-200 text-lg leading-relaxed">
              AcreetionOS is an independent Arch-based Linux distribution
              focused on stability, polish, and approachability. Built by a
              small, self-funded team with a love for Linux and cinematic design.
            </p>
          </AuroraPanel>
        </div>
      </PageFade>
    </AuroraBackground>
  );
}
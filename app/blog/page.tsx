import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

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
"use client";

import React from "react";
import { NeonButton } from "./NeonButton";
import { GlassCard } from "./GlassCard";
import { GlowHeading } from "./GlowHeading";
import { AuroraPanel } from "./AuroraPanel";
import { FeatureCard } from "./FeatureCard";
import { HorizontalRow } from "./HorizontalRow";
import { ScreenPanel } from "./ScreenPanel";
import { StatBadge } from "./StatBadge";
import { IconTile } from "./IconTile";
import { GlowFrame } from "./GlowFrame";
import { Testimonial } from "./Testimonial";
import { SectionDivider } from "./SectionDivider";
import { FeatureRow } from "./FeatureRow";
import { Navbar } from "./Navbar";
import { SystemInfoCard } from "./SystemInfoCard";
import { FaDiscord, FaGithub, FaRegSmile } from "react-icons/fa";

export default function ReferenceGrid() {
  return (
    <div className="px-16 py-32 space-y-20 max-w-7xl mx-auto">
      <GlowHeading>Navbar</GlowHeading>
      <Navbar />
      <SectionDivider />
      <GlowHeading>Buttons</GlowHeading>
      <div className="flex gap-6">
        <NeonButton>Primary</NeonButton>
        <NeonButton>Secondary</NeonButton>
      </div>
      <SectionDivider />
      <GlowHeading>Cards</GlowHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard title="Glass Card Example">
          This is a frosted glass card with neon highlights.
        </GlassCard>
        <GlowFrame>
          <p>This glow frame wraps any content with neon borders.</p>
        </GlowFrame>
        <Testimonial
          quote="AcreetionOS is incredibly polished."
          author="Linux User"
        />
      </div>
      <SectionDivider />
      <GlowHeading>Feature Cards</GlowHeading>
      <div className="flex flex-wrap gap-10 justify-center">
        <FeatureCard
          title="Cinnamon Edition"
          description="Stable, polished desktop for everyday users."
          image="/placeholder.png"
        />
        <FeatureCard
          title="Power Users Edition"
          description="Rolling release, curated Arch tooling."
          image="/placeholder2.png"
        />
      </div>
      <SectionDivider />
      <GlowHeading>Icon Tiles</GlowHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <IconTile icon={<FaDiscord />} label="Discord" />
        <IconTile icon={<FaGithub />} label="GitHub" />
        <IconTile icon={<FaRegSmile />} label="AI Assistant" />
      </div>
      <SectionDivider />
      <GlowHeading>Horizontal Row (Netflix style)</GlowHeading>
      <HorizontalRow title="Editions">
        <GlassCard title="Cinnamon">User Friendly</GlassCard>
        <GlassCard title="COSMIC">Coming Soon</GlassCard>
        <GlassCard title="Gaming">Performance-tuned</GlassCard>
      </HorizontalRow>
      <SectionDivider />
      <GlowHeading>Screen Panel</GlowHeading>
      <ScreenPanel src="/desktop-preview.png" />
      <SectionDivider />
      <GlowHeading>System Info</GlowHeading>
      <SystemInfoCard
        info={{
          Kernel: "6.10",
          Desktop: "Cinnamon",
          Base: "Arch Linux",
          Init: "systemd",
          "File System": "EXT4"
        }}
      />
      <SectionDivider />
      <GlowHeading>Stats</GlowHeading>
      <div className="flex gap-6">
        <StatBadge label="Total Downloads" value="14,200+" />
        <StatBadge label="Active Users" value="3,781" />
      </div>
      <SectionDivider />
      <GlowHeading>Feature Row (Icon + Text)</GlowHeading>
      <FeatureRow
        icon={<FaGithub />}
        title="Open Source"
        text="Built on the Arch ecosystem with community contributions."
      />
      <SectionDivider />
      <GlowHeading>Aurora Panel</GlowHeading>
      <AuroraPanel>
        <p className="text-gray-200 text-lg">
          This panel uses layered aurora gradients and cosmic undertones.
        </p>
      </AuroraPanel>
    </div>
  );
}
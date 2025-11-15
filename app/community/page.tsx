import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlowHeading } from "@/components/GlowHeading";
import { IconTile } from "@/components/IconTile";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";
import { FaDiscord, FaGithub, FaFacebook } from "react-icons/fa";

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
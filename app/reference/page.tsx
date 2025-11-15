import React from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import ReferenceGrid from "@/components/ReferenceGrid";
import { Navbar } from "@/components/Navbar";
import { PageFade } from "@/components/PageFade";

export default function Reference() {
  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        <ReferenceGrid />
      </PageFade>
    </AuroraBackground>
  );
}
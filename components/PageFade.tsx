"use client";

import React from "react";
import { motion } from "framer-motion";

export function PageFade({ children }: { children: React.ReactNode }) {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}
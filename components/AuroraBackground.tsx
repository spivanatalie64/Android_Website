"use client";

import React from "react";
import { motion } from "framer-motion";

export function AuroraBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-aurora opacity-60"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[url('/stars.png')] opacity-30"
        animate={{
          backgroundPositionX: ["0px", "100px", "0px"],
          backgroundPositionY: ["0px", "50px", "0px"]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
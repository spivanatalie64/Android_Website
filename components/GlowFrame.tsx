"use client";

import React from "react";
import { motion } from "framer-motion";

export function GlowFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 20px rgba(0,200,255,0.4)",
          "0 0 35px rgba(255,60,249,0.6)",
          "0 0 20px rgba(0,200,255,0.4)"
        ]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="p-[2px] rounded-2xl bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple"
    >
      <div className="rounded-2xl bg-black/60 p-6">{children}</div>
    </motion.div>
  );
}
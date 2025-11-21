"use client";

import React from "react";
import { motion } from "framer-motion";

export function NeonButton({ children }: { children: React.ReactNode }) {
  const MotionButton = motion.button as any;
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="
        px-6 py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-neonBlue to-neonPink
        shadow-neon shadow-lg
        transition-all duration-300
      "
    >
      {children}
    </MotionButton>
  );
}
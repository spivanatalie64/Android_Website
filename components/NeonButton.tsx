"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { isExternalUrl } from "@/utils/links";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
}

export function NeonButton({ children, href }: NeonButtonProps) {
  const className = `
    inline-block px-6 py-3 rounded-xl font-semibold text-white
    bg-gradient-to-r from-neonBlue to-neonPink
    shadow-neon shadow-lg
    transition-all duration-300
  `;

  const MotionLink = motion(Link) as any;
  const MotionAnchor = motion.a as any;
  const MotionButton = motion.button as any;

  if (href) {
    if (isExternalUrl(href)) {
      return (
        <MotionAnchor
          href={href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={className}
        >
          {children}
        </MotionAnchor>
      );
    }

    return (
      <MotionLink
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </MotionButton>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="
        relative text-gray-300 hover:text-white 
        transition
        after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 
        after:bg-gradient-to-r from-neonBlue to-neonPink
        hover:after:w-full after:transition-all
      "
    >
      {label}
    </a>
  );
}

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2 
        bg-black/30 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl px-8 py-3 z-50
        flex gap-6 text-white
      "
    >
      <NavItem label="Home" href="/" />
      <NavItem label="Downloads" href="/downloads" />
      <NavItem label="Community" href="/community" />
      <NavItem label="Blog" href="/blog" />
      <NavItem label="About" href="/about" />
      <NavItem label="Reference" href="/reference" />
    </motion.nav>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

function NavItem({ label, href, isActive, onClick }: { label: string; href: string; isActive: boolean; onClick?: () => void }) {
  const MotionDiv = motion.div as any;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative transition-all duration-300 px-2 py-1 rounded-md
        ${isActive 
          ? "text-neonBlue font-semibold" 
          : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <MotionDiv
          layoutId="activeTab"
          className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-neonBlue via-neonPink to-neonBlue rounded-full shadow-[0_0_8px_rgba(0,207,255,0.6)]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const MotionNav = motion.nav as any;
  const MotionDiv = motion.div as any;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Downloads", href: "/downloads" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Reference", href: "/reference" },
  ];

  // Normalize pathname for comparison (handle trailing slashes)
  const normalizePath = (path: string) => {
    if (!path || path === "/") return "/";
    return path.replace(/\/+$/, "");
  };
  const isActiveRoute = (href: string) => {
    const normalizedPathname = normalizePath(pathname);
    const normalizedHref = normalizePath(href);
    return normalizedPathname === normalizedHref;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <MotionNav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          hidden md:flex
          fixed top-4 left-1/2 transform -translate-x-1/2 
          bg-black/30 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl px-8 py-3 z-50
          gap-6 text-white items-center
        "
      >
        {navLinks.map((link) => (
          <NavItem 
            key={link.href} 
            label={link.label} 
            href={link.href} 
            isActive={isActiveRoute(link.href)} 
          />
        ))}
      </MotionNav>

      {/* Mobile Navbar Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 focus:ring-offset-black"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile main navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <NavItem 
                key={link.href} 
                label={link.label} 
                href={link.href} 
                isActive={isActiveRoute(link.href)}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}
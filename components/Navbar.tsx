"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const DESKTOP_BREAKPOINT = 768;
const FOCUS_RESTORE_DELAY_MS = 100;

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
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
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

  // Close menu and return focus to toggle button
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    // Return focus to toggle button after close animation completes
    setTimeout(() => {
      toggleButtonRef.current?.focus();
    }, FOCUS_RESTORE_DELAY_MS);
  }, []);

  // Handle ESC key to close menu
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Auto-close menu when resizing past desktop breakpoint
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollYRef.current);
      };
    }
  }, [isOpen]);

  // Focus trap within mobile menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    firstElement?.focus();

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab: if on first element, go to last
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab: if on last element, go to first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabTrap);
    return () => document.removeEventListener("keydown", handleTabTrap);
  }, [isOpen]);

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
          ref={toggleButtonRef}
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
            ref={menuRef}
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
                onClick={closeMenu}
              />
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}
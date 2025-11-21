# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AcreetionOS Website** - A marketing-first hub for AcreetionOS, an Arch-based Linux distribution. This is the central online presence for discovery, downloads, community engagement, and contributor onboarding.

**Vision**: Cinematic neon aurora aesthetic with glassmorphism design language. Built for discoverability (SEO/AI-optimized) and contributor accessibility.

**Target Infrastructure**: Cloudflare Pages + Workers

## Development Commands

### Core Workflow
- **Start dev server**: `npm run dev` (runs on port 3000)
- **Build production**: `npm run build`
- **Start production**: `npm run start` (run after build)

### Deployment
- **Platform**: Cloudflare Pages (auto-deploy on push to main)
- **Build command**: `npm run build`
- **Build output**: `.next`
- **Framework**: Next.js

### Important Notes
- No test suite configured - QA is manual browser verification
- No linter configured - rely on TypeScript for type checking
- Check responsive breakpoints manually (mobile, tablet, desktop)
- TypeScript `strict: false` - be cautious with type safety

## Architecture

### App Router Structure
- Uses Next.js 14 App Router (not Pages Router)
- All routes in `app/` directory use the App Router conventions
- Root layout (`app/layout.tsx`) enforces dark mode with `<html className="dark">` and provides global metadata
- Each route is a thin wrapper that composes shared components

### Component Architecture
All components in `components/` are:
- **Presentational and stateless** - no data fetching, pure UI
- **Client components when animated** - most use `"use client"` for Framer Motion
- **Neon-themed** - consistent aurora glassmorphism design language

### Key Architectural Patterns

**Layout Composition**:
Every route typically follows this pattern:
```tsx
<AuroraBackground>  // Animated gradient + parallax starfield backdrop
  <Navbar />        // Floating navigation with motion animations
  <PageFade>        // Entry transition wrapper
    {/* Route-specific content */}
  </PageFade>
</AuroraBackground>
```

**Styling System**:
- Tailwind CSS with custom neon color palette defined in `tailwind.config.js`:
  - `neonBlue` (#00CFFF)
  - `neonPink` (#FF3CF9)
  - `neonPurple` (#A855F7)
  - `auroraGreen` (#3BFFAB)
- Custom `bg-aurora` gradient and `shadow-neon` utilities
- Dark mode enforced globally via `className="dark"` in root layout

**Animation Strategy**:
- All animations use Framer Motion, never raw CSS animations
- Common patterns: fade-in, float/scale on hover, parallax scrolling
- `motion.div` with variants for consistent timing/easing

### Routes Overview

| Route | Purpose | Key Components |
|-------|---------|----------------|
| `/` | Marketing hero + edition highlights | `Hero`, `GlowHeading`, `HorizontalRow`, `FeatureCard` |
| `/downloads` | ISO download CTAs + system specs | `DownloadCard`, `SystemInfoCard` |
| `/community` | Social/community links | `IconTile` with React Icons |
| `/blog` | Blog placeholder | `GlassCard` |
| `/about` | AcreetionOS narrative | `AuroraPanel`, `GlowHeading` |
| `/reference` | Component showcase/style guide | `ReferenceGrid` (imports all components) |

### Component Categories

**Layout Components** (3):
- `AuroraBackground` - Animated gradient layers + parallax starfield
- `PageFade` - Entry transition wrapper
- `Navbar` - Floating nav with motion animations

**Content Blocks** (8):
- `FeatureCard`, `GlassCard`, `AuroraPanel` - Various card styles
- `GlowFrame` - Bordered content container
- `Testimonial`, `ScreenPanel`, `StatBadge`, `SystemInfoCard` - Specialized displays

**Interactive Elements** (5):
- `NeonButton` - Animated CTA button with scale effect
- `DownloadCard`, `IconTile` - Clickable cards
- `FeatureRow`, `HorizontalRow` - Multi-column/scrolling displays

**Composition Helpers** (3):
- `GlowHeading` - Styled heading with neon glow
- `SectionDivider` - Visual section separator
- `Hero` - Landing hero section

**Reference Tool** (1):
- `ReferenceGrid` - Showcases all components in one view (used in `/reference` route)

## TypeScript Configuration

- Path alias `@/*` maps to project root
- `strict: false` - type checking is lenient (be careful!)
- Target: ES5 with modern lib support (dom, esnext)
- JSX preserved for Next.js to handle

## Asset Management

**Image References**:
- All images loaded from `/public` directory
- Current placeholders: `/placeholder*.png`, `/desktop-preview.png`, `/stars.png`
- Replace placeholders with actual AcreetionOS assets before production deployment
- See `MockUps/` directory for design reference (especially `AuroraParticlesLandingPage.png`)

## Design System

See [STYLE-GUIDE.md](STYLE-GUIDE.md) for complete design system documentation.

**Quick Reference**:
- Colors: neonBlue (#00CFFF), neonPink (#FF3CF9), neonPurple (#A855F7), auroraGreen (#3BFFAB)
- Typography: System sans-serif stack, bold for headings, regular for body
- Effects: Neon glows, glassmorphism (backdrop-blur + transparency)
- Animations: Framer Motion (fade, scale, parallax)

## Current Milestone & Roadmap

**Current Status**: Foundation (component kit finalization)

**Next Milestones** (see [MVP-ROADMAP.md](MVP-ROADMAP.md)):
1. **SEO & Navigation Foundation** - Metadata, Next.js Link, mobile nav
2. **Real Assets & Content** - Replace placeholders
3. **Downloads Hub** - Mirrors, guides, flasher tools
4. **Community & Contributor Hub** - Onboarding, team cards
5-9. **Content & Polish** - About, blog, metrics, performance
10. **Launch Preparation** - Testing, deployment, announce

**Post-MVP**:
11. **Visual Effects Enhancement** - Match Aurora Particles mockup intensity

## Known Limitations & TODOs

**Critical Path (Milestones 1-4)**:
1. **Navigation**: Navbar uses `<a>` tags (full page reload) - swap to `next/link` for client-side routing
2. **SEO**: Metadata only set at root level - add route-level metadata exports for better previews
3. **Mobile**: No hamburger menu - add responsive navigation
4. **Downloads**: No mirror selection or installation guides
5. **Community**: No contributor onboarding section

**Content (Milestone 2)**:
- Placeholder images and copy need replacement with real AcreetionOS assets

**Data (Future)**:
- All content is static JSX - no CMS or data fetching layer yet
- Future: Cloudflare D1 database + CMS integration

**Testing (Future)**:
- No automated tests - manual QA only
- Add Vitest + Testing Library for component tests

**Performance (Milestone 8)**:
- No performance monitoring
- `AuroraBackground` is expensive on mobile
- No reduced-motion media query support

## Development Tips

**Working with Components**:
- Use `/reference` route to preview all components without hunting through pages
- All components expect dark mode - light mode not supported
- `AuroraBackground` is expensive - use sparingly or optimize for mobile
- Framer Motion animations may need reduced-motion media query support for accessibility

**Code Organization**:
- Follow existing component patterns (presentational, stateless)
- Use path alias `@/*` for imports
- Keep components in `components/` directory
- Keep routes in `app/` directory

**Styling**:
- Use Tailwind utility classes (not CSS modules or inline styles)
- Reference design tokens from `tailwind.config.js`
- Follow glassmorphism pattern: `backdrop-blur-md` + `bg-opacity-60` + border
- Use neon colors for accents, not everywhere

**TypeScript**:
- TypeScript strict mode is off - be cautious with type safety
- Props interfaces named `{ComponentName}Props`
- Use `type` for unions, `interface` for objects
- Avoid `any` - use `unknown` if type is truly unknown

## Deployment Considerations

**Pre-Deploy Checklist**:
1. Verify all placeholder images exist in `/public` or replace with real assets
2. Add route-level metadata for SEO
3. Consider swapping `<a>` to `<Link>` in Navbar for SPA behavior
4. Test responsive breakpoints (especially mobile for complex animations)
5. Run `npm run build` to verify production build succeeds
6. Consider performance audit for animation-heavy pages

**Cloudflare Pages**:
- Auto-deploys on push to `main` branch
- Preview deployments for all PRs
- No configuration needed (uses Next.js preset)
- Environment variables set in Cloudflare dashboard
- Rollback via dashboard if needed

**Future Cloudflare Integrations**:
- **Workers**: API routes for Discord stats, GitHub data, download tracking
- **KV**: Download counts, feature flags, cached API responses
- **D1**: Edge database for blog posts, team profiles, analytics
- **R2**: ISO file hosting (free egress!)

## Documentation

For detailed information, refer to:
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Complete design system (colors, typography, components, animations)
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture (routing, data flow, deployment, integrations)
- **[MVP-ROADMAP.md](MVP-ROADMAP.md)** - 10 milestones to MVP + post-MVP visual effects
- **[original-website-components.md](original-website-components.md)** - Original site audit for migration reference
- **[agents.md](agents.md)** - Quick reference for AI agents
- **[README.md](README.md)** - Quick start guide

## Project Vision

This website serves as the **central marketing hub** for AcreetionOS:
- **Discovery**: SEO/AI-optimized for maximum discoverability
- **Downloads**: Easy access to ISO files with mirrors and installation guides
- **Community**: Clear paths to Discord, GitHub, GitLab
- **Contributors**: Lower barrier for new developers to contribute
- **Brand**: Cinematic neon aurora aesthetic that stands out

The goal is to make AcreetionOS **the** place online to discover, download, and engage with the project.

# AcreetionOS Website

A cinematic marketing site for AcreetionOS, an Arch-based Linux distribution that blends polished UX with neon aurora visuals. The project uses Next.js App Router with a reusable component kit so every route (home, downloads, community, blog, about, reference) stays cohesive while remaining easy to extend.

## Tech Stack
- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS with custom neon palette
- Framer Motion for immersive animations
- React Icons for social/community glyphs

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.
3. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Available Scripts
- `npm run dev` – Next dev server with hot reload.
- `npm run build` – Production build.
- `npm run start` – Serve the optimized build.

## Project Structure
```
app/
  layout.tsx          # Root layout enforcing dark mode + Tailwind globals
  globals.css         # Tailwind base + body styles
  page.tsx            # Landing page using Hero + feature components
  about/              # About route with AuroraPanel narrative
  blog/               # Blog placeholder route
  community/          # Social/contact entry points
  downloads/          # ISO download cards + SystemInfo
  reference/          # Component playground/style guide
components/           # Reusable neon-themed UI primitives
```

## Component Highlights
- **AuroraBackground** layers gradients + parallax starfield for depth.
- **Navbar** is a floating, animated nav using Framer Motion.
- **PageFade** handles entry transitions for each route.
- **GlowHeading, SectionDivider, AuroraPanel, GlassCard, FeatureCard** and friends provide a consistent neon glassmorphism toolkit.
- **ReferenceGrid** showcases every component in one route for quick QA and experimentation.

## Roadmap to MVP
- **Foundation**: Finalize component kit, Tailwind theme, and base routes (current milestone).
- **Content Pass**: Replace placeholder imagery and copy with finalized AcreetionOS assets, wire up Navbar with `next/link`, add route-level metadata.
**Interactivity & Metrics**: Integrate newsletter/community CTAs, add CMS/data fetching for blog + downloads, embed analytics.
- **MVP Launch**: Polish responsive states, performance audit, deploy to production (Vercel or preferred platform), announce AcreetionOS site MVP.

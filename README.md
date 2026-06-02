# AcreetionOS Website

A cinematic marketing site for [AcreetionOS](https://acreetionos.org), an Arch-based Linux distribution that blends polished UX with neon aurora visuals. The project uses Next.js App Router with a reusable component kit so every route (home, downloads, community, blog, about, reference) stays cohesive while remaining easy to extend. AcreetionOS GitHub Org and repository is [here](https://github.com/AcreetionOS-Linux).

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

## Deployment

**Target Platform**: Cloudflare Pages + Workers

**Why Cloudflare**:
- Global edge network (300+ data centers)
- Unlimited bandwidth on free tier
- Built-in DDoS protection and security
- Automatic CI/CD from Git
- Preview deployments for every PR
- Workers for serverless API routes
- R2 for ISO file hosting (future)
- D1 for edge database (future)

**Deploy to Cloudflare Pages**:
1. Connect your Git repository to Cloudflare Pages
2. Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
3. Push to main branch to deploy

## Roadmap to MVP

See [MVP-ROADMAP.md](MVP-ROADMAP.md) for detailed milestones.

- **Milestone 1-4**: Core functionality (SEO, assets, downloads, community)
- **Milestone 5-9**: Content and polish (about, blog, metrics, performance)
- **Milestone 10**: Launch preparation
- **Milestone 11**: Visual effects enhancement (post-MVP)

## Contributing

We welcome contributions! Please see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on how to get started.

## Documentation

- **[docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)** - Contributing guidelines
- **[CLAUDE.md](CLAUDE.md)** - Instructions for Claude Code
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Brand and design system
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture
- **[MVP-ROADMAP.md](MVP-ROADMAP.md)** - Development roadmap
- **[original-website-components.md](original-website-components.md)** - Original site audit
---

## 🤖 Pullfrog AI Review

This repository uses **Pullfrog AI** to automatically review pull requests.

Pullfrog is an AI-powered code review agent that analyzes every PR for code quality,
security issues, performance problems, and best practice violations. Reviews appear
as inline PR comments and checks. Trigger manually by commenting `@pullfrog` on any PR.

Powered by OpenRouter.
# AcreetionOS Agent Notes

## Project Snapshot
- Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, React Icons.
- Purpose: marketing/landing site for AcreetionOS with multiple informational routes (home, downloads, community, blog, about, reference).
- Styling: Tailwind with custom neon palette/background defined in `tailwind.config.js`, global dark theme enforced in `app/layout.tsx` + `app/globals.css`.
- Animations: `AuroraBackground`, `Navbar`, `PageFade`, `NeonButton`, and `GlowFrame` wrap `motion` primitives for fade/float/hover effects.
- Assets: Pages reference `/placeholder*.png`, `/desktop-preview.png`, `/stars.png`; ensure these exist in `public/` when deploying.

## Runbook
- Install deps: `npm install`
- Dev server: `npm run dev` (Next dev on port 3000)
- Production build: `npm run build` then `npm run start`
- No lint/test scripts; QA relies on manual verification in browser (check each route plus responsive breakpoints)

## Directory Cues
- `app/layout.tsx` – wraps every route with `<html className="dark">`, pulls in Tailwind globals.
- `app/page.tsx` – hero splash + feature rows assembled from shared components.
- `app/about|blog|community|downloads|reference/page.tsx` – thin route wrappers; each uses `AuroraBackground` + `Navbar` + `PageFade` before route-specific content.
- `app/reference/page.tsx` – renders `ReferenceGrid`, effectively a living style guide showcasing all molecules (buttons, cards, stats, etc.).
- `components/` – atomic neon/aurora-themed UI toolkit; all are presentational and stateless.

## Routes at a Glance
| Path | Purpose | Notable Components |
| --- | --- | --- |
| `/` | Marketing hero, edition highlights, USP grid | `Hero`, `GlowHeading`, `HorizontalRow`, `FeatureCard`, `SectionDivider` |
| `/downloads` | ISO download CTA + system specs | `DownloadCard`, `SystemInfoCard` |
| `/community` | Social/community entry points | `IconTile` with `FaDiscord`, `FaGithub`, `FaFacebook` |
| `/blog` | Placeholder blog teaser | `GlassCard` |
| `/about` | Short story of AcreetionOS | `AuroraPanel`, `GlowHeading` |
| `/reference` | Component playground/style reference | `ReferenceGrid` (which nests nearly every component) |

## Components Cheat Sheet
- Layout: `AuroraBackground` composes animated gradients + starfield layers; `PageFade` handles entry animation; `Navbar` is a floating motion nav with `NavItem` helper.
- CTAs: `NeonButton` (animated scale), `DownloadCard`, `IconTile`, `FeatureRow`.
- Content blocks: `FeatureCard`, `GlassCard`, `AuroraPanel`, `GlowFrame`, `Testimonial`, `ScreenPanel`, `StatBadge`, `SystemInfoCard`.
- Composition helpers: `GlowHeading`, `HorizontalRow`, `SectionDivider`.
- `ReferenceGrid.tsx` imports everything to provide ready-made examples—great for tinkering with layout/states without touching individual routes.

## Gotchas / Follow-ups
- Images referenced from `/public` are placeholders; replace with real renders or ensure placeholder assets exist before deployment.
- No data fetching yet; everything is static JSX. Introduce CMS/content layer by converting these pages to async server components when needed.
- Navbar currently uses `<a>` tags (full reload). Swap to `next/link` for client-side routing if SPA transitions are desired.
- SEO metadata only set at root (`app/layout.tsx`). Consider route-level metadata exports for richer previews.

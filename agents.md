# AcreetionOS Agent Notes

## Project Snapshot

**Purpose**: Marketing-first hub for AcreetionOS, an Arch-based Linux distribution. Central online presence for discovery, downloads, community, and contributor onboarding.

**Stack**:
- Next.js 14 (App Router) + React 18
- TypeScript (strict: false)
- Tailwind CSS with custom neon palette
- Framer Motion for animations
- React Icons for social/community glyphs

**Deployment**: Cloudflare Pages + Workers
- Global edge network (300+ locations)
- Unlimited bandwidth on free tier
- R2 for ISO file hosting (future)
- D1 for edge database (future)
- KV for download tracking (future)

**Styling Philosophy**:
- Neon aurora aesthetic with glassmorphism
- Dark mode enforced globally
- Custom Tailwind palette: neonBlue, neonPink, neonPurple, auroraGreen
- Defined in `tailwind.config.js`, enforced in `app/layout.tsx` + `app/globals.css`

**Assets**:
- Placeholder images: `/placeholder*.png`, `/desktop-preview.png`, `/stars.png`
- Must be replaced with real AcreetionOS assets before production
- See `MockUps/` directory for design references

---

## Quick Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Dev server (localhost:3000)
npm run build           # Production build
npm run start           # Serve production build

# No test/lint scripts - manual QA only
# Check responsive breakpoints manually in browser
```

---

## Architecture Quick Reference

### Directory Structure
```
app/                    # Next.js App Router
  layout.tsx           # Root layout (dark mode, metadata)
  page.tsx             # Homepage
  about/               # About page
  blog/                # Blog (placeholder)
  community/           # Community hub
  downloads/           # Download center
  reference/           # Component showcase

components/            # Reusable UI components (20 total)
  AuroraBackground.tsx # Animated backdrop
  Navbar.tsx           # Floating nav
  Hero.tsx             # Landing hero
  [etc...]             # All presentational/stateless

public/                # Static assets
MockUps/               # Design mockups (reference)
wrangler.toml          # Cloudflare Workers config
```

### Layout Pattern (Every Route)
```tsx
<AuroraBackground>      // Animated gradient + starfield
  <Navbar />            // Global navigation
  <PageFade>            // Entry transition
    {/* Route content */}
  </PageFade>
</AuroraBackground>
```

---

## Routes at a Glance

| Path | Purpose | Key Components |
|------|---------|----------------|
| `/` | Hero + feature highlights | `Hero`, `GlowHeading`, `FeatureCard`, `HorizontalRow` |
| `/downloads` | ISO downloads + mirrors | `DownloadCard`, `SystemInfoCard` |
| `/community` | Social platforms + contribute | `IconTile`, `GlassCard` |
| `/blog` | Blog posts (future CMS) | `GlassCard` |
| `/about` | Mission + philosophy | `AuroraPanel`, `GlowHeading` |
| `/reference` | Component showcase | `ReferenceGrid` |

---

## Component Inventory (20 Total)

**Layout (3)**:
- `AuroraBackground` - Animated gradient layers + parallax starfield
- `PageFade` - Entry transition wrapper (Framer Motion)
- `Navbar` - Floating nav with motion animations

**Content Blocks (8)**:
- `FeatureCard` - Feature highlight with image
- `GlassCard` - Glassmorphic content card
- `AuroraPanel` - Panel with aurora backdrop
- `GlowFrame` - Bordered container with glow
- `Testimonial` - User quote card
- `ScreenPanel` - Screenshot/preview container
- `StatBadge` - Metric display badge
- `SystemInfoCard` - Technical specs display

**Interactive (5)**:
- `NeonButton` - Animated CTA with hover/scale
- `DownloadCard` - ISO download card
- `IconTile` - Social platform clickable tile
- `FeatureRow` - Multi-column feature row
- `HorizontalRow` - Horizontal scrolling container

**Typography (3)**:
- `GlowHeading` - Heading with neon glow
- `SectionDivider` - Gradient divider line
- `Hero` - Landing hero section

**Meta (1)**:
- `ReferenceGrid` - Showcases all components (living style guide)

---

## Design System Quick Reference

**Colors**:
```js
neonBlue: #00CFFF      // Primary accent
neonPink: #FF3CF9      // Secondary accent
neonPurple: #A855F7    // Tertiary accent
auroraGreen: #3BFFAB   // Success/environment
```

**Gradients**:
- `bg-aurora` - Radial gradient (defined in tailwind.config.js)
- Button gradient: `linear-gradient(135deg, #00CFFF, #A855F7)`

**Effects**:
- `shadow-neon` - Neon glow effect
- Glassmorphism: `backdrop-blur-md` + `bg-opacity-60`

**Animations** (Framer Motion):
- Fade in: `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- Scale on hover: `whileHover={{ scale: 1.05 }}`
- Ambient pulse: `animate={{ opacity: [0.4, 0.7, 0.4] }}`

---

## Critical TODOs (See MVP-ROADMAP.md)

**Milestone 1** (SEO & Navigation):
- [ ] Add route-level metadata to all pages
- [ ] Convert Navbar `<a>` to Next.js `<Link>`
- [ ] Add mobile hamburger menu
- [ ] Create sitemap.xml and robots.txt

**Milestone 2** (Assets):
- [ ] Replace all `/placeholder*.png` with real assets
- [ ] Add proper logo variants
- [ ] Optimize images (WebP, proper sizing)

**Milestone 3** (Downloads):
- [ ] Add mirror selection (OSUOSL, RWTH Aachen)
- [ ] Create flasher tool download section
- [ ] Add installation guides (Etcher, Ventoy, dd)

**Milestone 4** (Community):
- [ ] Add contributor onboarding section
- [ ] Create team member cards
- [ ] Link Discord, GitHub, GitLab

---

## Gotchas & Known Issues

**Navigation**:
- ❌ Uses `<a>` tags (full page reload)
- ✅ Fix: Replace with `next/link` in Milestone 1

**SEO**:
- ❌ Metadata only at root level
- ✅ Fix: Add route-level metadata exports

**Assets**:
- ❌ Placeholder images everywhere
- ✅ Fix: Replace in Milestone 2

**Data**:
- ❌ All content hard-coded in JSX
- ✅ Future: CMS integration (Contentful/Sanity + D1)

**Testing**:
- ❌ No automated tests
- ✅ Manual QA only (for now)

**Performance**:
- ⚠️ `AuroraBackground` is expensive on mobile
- ✅ Optimize in Milestone 11 (post-MVP)

---

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** in `app/` or `components/`
3. **Preview** at `http://localhost:3000`
4. **Check `/reference`** to see all components
5. **Test responsive** (mobile, tablet, desktop)
6. **Build**: `npm run build` (verify no errors)
7. **Commit** and push to trigger Cloudflare Pages deployment

---

## Cloudflare Deployment

**Setup** (one-time):
1. Connect GitHub repo to Cloudflare Pages
2. Configure build:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
   - Node version: 18
3. Set environment variables (if needed)

**Deploy**:
- Push to `main` branch → auto-deploys to production
- Push to feature branch → auto-creates preview URL

**Rollback**:
- Cloudflare dashboard → Deployments → Rollback

---

## Future Integrations (Post-MVP)

**Cloudflare Workers**:
- `/api/discord-stats` - Live Discord member count
- `/api/github-stats` - GitHub stars, contributors
- `/api/download-tracker` - Track ISO downloads

**Cloudflare KV**:
- Download counts per mirror
- Feature flags
- Cache API responses

**Cloudflare D1** (Edge Database):
- Blog posts
- Team member profiles
- Download analytics

**Cloudflare R2** (Object Storage):
- Host ISO files (free egress!)
- Archive old releases
- Large assets (videos, high-res images)

---

## Quick Tips

✅ **DO**:
- Use `/reference` to preview components
- Follow the layout pattern (AuroraBackground → Navbar → PageFade)
- Use Framer Motion for all animations
- Test on mobile (animations are heavy)
- Check `STYLE-GUIDE.md` for design tokens
- Check `ARCHITECTURE.md` for technical details
- Check `MVP-ROADMAP.md` for current priorities

❌ **DON'T**:
- Add raw CSS animations (use Framer Motion)
- Use light mode styles (dark only)
- Hard-code colors (use Tailwind tokens)
- Skip responsive testing
- Commit placeholder images to production
- Use `<a>` tags for internal links (use `<Link>` after Milestone 1)

---

## Documentation Index

- **[README.md](README.md)** - Quick start guide
- **[CLAUDE.md](CLAUDE.md)** - Claude Code instructions
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Complete design system (colors, typography, components)
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture (routing, deployment, integrations)
- **[MVP-ROADMAP.md](MVP-ROADMAP.md)** - 10 milestones to MVP + post-MVP visual effects
- **[original-website-components.md](original-website-components.md)** - Original site audit
- **[wrangler.toml](wrangler.toml)** - Cloudflare Workers configuration

---

**Last Updated**: 2025-01-15 | **Current Milestone**: Foundation (component kit finalization)

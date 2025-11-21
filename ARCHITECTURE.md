# AcreetionOS Website Architecture

**Version 1.0** | Technical Architecture Documentation

---

## System Overview

The AcreetionOS website is a marketing-first hub built as a modern Next.js 14 application using the App Router architecture. It serves as the central discovery point for the AcreetionOS Linux distribution, providing downloads, community resources, and contributor onboarding.

### Technology Stack

**Core Framework**
- **Next.js 14.1.0** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type safety and developer experience

**Styling**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **PostCSS 8.4.31** - CSS processing
- **Autoprefixer 10.4.16** - Browser compatibility

**Animation**
- **Framer Motion 10.16.4** - Production-ready motion library

**Icons**
- **React Icons 4.11.0** - Icon library (Heroicons, Feather, etc.)

### Architecture Principles

1. **Server-First**: Leverage Next.js App Router for server-side rendering by default
2. **Component Composition**: Build complex UIs from small, reusable components
3. **Performance**: Optimize for Core Web Vitals and fast page loads
4. **Accessibility**: WCAG AA compliance for inclusive design
5. **SEO-Optimized**: Structured metadata and semantic HTML for discoverability
6. **Type Safety**: TypeScript throughout for reliability
7. **Presentational Components**: Stateless, pure UI components for maintainability

---

## Directory Structure

```
acreetionos_full_boilerplate/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx                # Root layout (dark mode, metadata)
│   ├── page.tsx                  # Homepage (/)
│   ├── globals.css               # Global styles, Tailwind imports
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── blog/
│   │   └── page.tsx              # Blog listing (/blog)
│   ├── community/
│   │   └── page.tsx              # Community hub (/community)
│   ├── downloads/
│   │   └── page.tsx              # Downloads center (/downloads)
│   └── reference/
│       └── page.tsx              # Component showcase (/reference)
│
├── components/                   # Reusable UI components
│   ├── AuroraBackground.tsx      # Animated gradient + starfield backdrop
│   ├── AuroraPanel.tsx           # Glass panel with aurora backdrop
│   ├── DownloadCard.tsx          # ISO download card
│   ├── FeatureCard.tsx           # Feature highlight card
│   ├── FeatureRow.tsx            # Horizontal feature display
│   ├── GlassCard.tsx             # Glassmorphism card
│   ├── GlowFrame.tsx             # Bordered content container
│   ├── GlowHeading.tsx           # Heading with neon glow
│   ├── Hero.tsx                  # Landing hero section
│   ├── HorizontalRow.tsx         # Horizontal scrolling container
│   ├── IconTile.tsx              # Social/platform icon tile
│   ├── Navbar.tsx                # Floating navigation bar
│   ├── NeonButton.tsx            # Animated CTA button
│   ├── PageFade.tsx              # Page transition wrapper
│   ├── ScreenPanel.tsx           # Screenshot/preview panel
│   ├── SectionDivider.tsx        # Visual section separator
│   ├── StatBadge.tsx             # Metric/stat display
│   ├── SystemInfoCard.tsx        # System specifications card
│   ├── Testimonial.tsx           # User testimonial card
│   └── ReferenceGrid.tsx         # Component showcase grid
│
├── public/                       # Static assets
│   ├── stars.png                 # Starfield background texture
│   ├── placeholder*.png          # Placeholder images (to be replaced)
│   └── desktop-preview.png       # Desktop screenshot
│
├── MockUps/                      # Design mockups and assets
│   ├── AuroraParticlesLandingPage.png
│   ├── AuroraGradiantLandingPage.png
│   ├── AlternateLandingPage.png
│   ├── 4-Page-MockUp.png
│   ├── AcreetionLogoNew.png
│   ├── DesktopBackGround.png
│   └── Landing Page.png
│
├── node_modules/                 # Dependencies (ignored in git)
├── .next/                        # Next.js build output (ignored)
├── .git/                         # Git repository
│
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
│
├── CLAUDE.md                     # Claude Code instructions
├── STYLE-GUIDE.md                # Brand and design system
├── ARCHITECTURE.md               # This file
├── MVP-ROADMAP.md                # Development roadmap
├── original-website-components.md # Original site audit
├── README.md                     # Project documentation
└── .gitignore                    # Git ignore rules
```

---

## Routing Architecture

### Next.js App Router Pattern

The website uses Next.js 14's App Router (not Pages Router). Each route is defined by a folder containing a `page.tsx` file.

```
Route Structure:
/                    → app/page.tsx
/about               → app/about/page.tsx
/blog                → app/blog/page.tsx
/community           → app/community/page.tsx
/downloads           → app/downloads/page.tsx
/reference           → app/reference/page.tsx
```

### Layout Composition

Every route follows a consistent layout pattern:

```tsx
<AuroraBackground>          // Animated backdrop (client component)
  <Navbar />                 // Global navigation (client component)
  <PageFade>                 // Entry transition (client component)
    {/* Route-specific content */}
  </PageFade>
</AuroraBackground>
```

**Why This Pattern**:
- Consistent visual experience across all pages
- AuroraBackground provides the signature neon aesthetic
- Navbar is always accessible for navigation
- PageFade creates smooth transitions between routes

### Root Layout

`app/layout.tsx` is the root layout that wraps all pages:

```tsx
<html lang="en" className="dark">
  <body>{children}</body>
</html>
```

**Key Responsibilities**:
- Enforces dark mode globally via `className="dark"`
- Imports global CSS (`globals.css`)
- Defines site-wide metadata (title, description)
- Sets up HTML document structure

---

## Component Architecture

### Component Categories

**1. Layout Components**
- `AuroraBackground` - Full-page animated gradient + starfield
- `PageFade` - Page transition wrapper using Framer Motion
- `Navbar` - Fixed floating navigation bar

**2. Content Blocks**
- `Hero` - Landing page hero section
- `FeatureCard` - Highlighted feature with image
- `GlassCard` - Glassmorphic content card
- `AuroraPanel` - Panel with aurora backdrop effect
- `GlowFrame` - Bordered container with glow

**3. Interactive Elements**
- `NeonButton` - Primary CTA with hover/scale animation
- `DownloadCard` - ISO download with mirror selection
- `IconTile` - Social platform clickable tile

**4. Typography & Decoration**
- `GlowHeading` - Heading with text glow effect
- `SectionDivider` - Gradient divider line
- `StatBadge` - Metric display badge

**5. Specialized**
- `SystemInfoCard` - Technical specifications display
- `Testimonial` - User quote/review card
- `ScreenPanel` - Screenshot/preview container
- `ReferenceGrid` - Component showcase (meta-component)

### Component Design Principles

**Presentational & Stateless**
- All components are pure UI components
- No data fetching logic
- No business logic
- Accept props for configuration

**Client vs. Server Components**

```tsx
// Client Component (uses animations, interactivity)
"use client";

import { motion } from "framer-motion";

export function NeonButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      // ...
    >
      {children}
    </motion.button>
  );
}
```

```tsx
// Server Component (default, no directive needed)
export default function AboutPage() {
  return (
    <AuroraBackground>
      {/* Static content */}
    </AuroraBackground>
  );
}
```

**When to Use Client Components**:
- Framer Motion animations
- React hooks (useState, useEffect, etc.)
- Browser-only APIs
- Event handlers (onClick, onHover, etc.)

**When to Use Server Components**:
- Static content rendering
- Data fetching (future CMS integration)
- SEO-critical content
- Reduces JavaScript bundle size

### Component Composition Pattern

Components are designed to nest naturally:

```tsx
<AuroraBackground>
  <Navbar />
  <PageFade>
    <Hero />
    <GlowHeading>Section Title</GlowHeading>
    <HorizontalRow>
      <FeatureCard title="Feature 1" />
      <FeatureCard title="Feature 2" />
      <FeatureCard title="Feature 3" />
    </HorizontalRow>
    <SectionDivider />
    <GlassCard>
      <p>Content here</p>
    </GlassCard>
  </PageFade>
</AuroraBackground>
```

---

## Styling Architecture

### Tailwind CSS Configuration

**Custom Theme Extension** (`tailwind.config.js`):

```javascript
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00CFFF",
        neonPink: "#FF3CF9",
        neonPurple: "#A855F7",
        auroraGreen: "#3BFFAB"
      },
      backgroundImage: {
        aurora: "radial-gradient(...)"  // Custom gradient
      },
      boxShadow: {
        neon: "0 0 25px rgba(0, 200, 255, 0.35)"
      }
    }
  }
}
```

### CSS Organization

**Global Styles** (`app/globals.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global body styles */
body {
  background: black;
  color: white;
}
```

**Component-Level Styles**:
- Use Tailwind utility classes in JSX
- No CSS modules or styled-components
- Inline styles only for dynamic values

**Example Component Styling**:
```tsx
<div className="rounded-lg border border-neonBlue/20 bg-slate-900/60
                backdrop-blur-md p-6 shadow-neon hover:border-neonBlue/60
                transition-all duration-300">
  {/* Content */}
</div>
```

### Dark Mode Strategy

Dark mode is **enforced globally**, not optional:
- Root HTML element has `className="dark"`
- All colors designed for dark backgrounds
- No light mode toggle
- Tailwind's `dark:` prefix not needed (everything is dark)

---

## Animation Architecture

### Framer Motion Integration

All animations use Framer Motion for consistency and performance.

**Common Animation Patterns**:

**1. Fade In on Mount**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

**2. Scale on Hover**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  Click Me
</motion.button>
```

**3. Ambient Animation (Aurora)**
```tsx
<motion.div
  animate={{ opacity: [0.4, 0.7, 0.4] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>
```

**4. Parallax Scroll**
```tsx
<motion.div
  animate={{
    backgroundPositionX: ["0px", "100px", "0px"],
    backgroundPositionY: ["0px", "50px", "0px"]
  }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
/>
```

### Performance Considerations

**GPU Acceleration**:
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, `margin` (triggers layout recalc)

**Reduced Motion**:
```tsx
// Future implementation needed
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Lazy Loading**:
- Heavy components should lazy load on scroll
- Consider React Suspense for code splitting

---

## Data Flow Architecture

### Current State: Static Content

All content is currently **hard-coded** in components:

```tsx
// Static content example
<FeatureCard
  title="Cinnamon Edition"
  description="Stable, familiar, user-friendly."
  image="/placeholder.png"
/>
```

### Future State: CMS Integration

**Recommended Approach**:
1. Convert pages to async server components
2. Fetch content from headless CMS (Contentful, Sanity, or Strapi)
3. Generate static pages at build time

```tsx
// Future blog implementation
export default async function BlogPage() {
  const posts = await fetchBlogPosts(); // Server-side fetch

  return (
    <AuroraBackground>
      <Navbar />
      <PageFade>
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </PageFade>
    </AuroraBackground>
  );
}
```

### Metadata Strategy

**Current**: Root-level metadata only (`app/layout.tsx`)

**Future**: Route-level metadata exports

```tsx
// app/about/page.tsx
export const metadata = {
  title: "About AcreetionOS",
  description: "Learn about our mission and philosophy",
  openGraph: {
    title: "About AcreetionOS",
    description: "...",
    images: ["/og-about.png"],
  },
};
```

---

## Asset Management

### Image Strategy

**Current Approach**:
- Static images in `/public` directory
- Referenced with absolute paths: `/image.png`
- Next.js serves directly from public folder

**Placeholder Assets** (to be replaced):
- `/placeholder.png`
- `/placeholder2.png`
- `/desktop-preview.png`
- `/stars.png` (actual starfield texture)

**Future Optimization**:
```tsx
import Image from 'next/image';

<Image
  src="/desktop-preview.png"
  alt="AcreetionOS Desktop"
  width={1200}
  height={675}
  loading="lazy"
  quality={90}
/>
```

**Benefits of next/image**:
- Automatic WebP conversion
- Responsive image sizes
- Lazy loading by default
- Image optimization

### Icon Strategy

Using React Icons library:
```tsx
import { FaDiscord, FaGithub } from 'react-icons/fa';

<FaDiscord className="w-6 h-6 text-neonBlue" />
```

**Icon Libraries Used**:
- Font Awesome (Fa*)
- Heroicons (Hi*)
- Feather (Fi*)

---

## Build & Deployment Architecture

### Build Process

**Development**:
```bash
npm run dev
# Starts Next.js dev server on localhost:3000
# Hot module replacement enabled
# React strict mode enabled
```

**Production Build**:
```bash
npm run build
# Creates optimized production build in .next/
# Minifies JavaScript and CSS
# Optimizes images
# Generates static HTML where possible
```

**Production Server**:
```bash
npm run start
# Serves production build
# Requires npm run build first
```

### Build Output

Next.js App Router generates:
- **Server-side rendered pages** - Dynamic HTML generation
- **Static pages** - Pre-rendered at build time (current state)
- **API routes** - Not currently used
- **Client bundles** - JavaScript for client components
- **CSS bundles** - Extracted Tailwind CSS

### Deployment Strategy

**Target Platform**: Cloudflare Pages + Workers

**Why Cloudflare**:
- Global edge network (300+ data centers)
- Unlimited bandwidth and requests on free tier
- Built-in DDoS protection
- Workers for serverless functions
- Automatic CI/CD from Git
- Preview deployments for PRs
- Built-in analytics and Web Analytics
- R2 for object storage (future asset hosting)
- D1 for edge SQL database (future use)
- KV for edge key-value storage

**Cloudflare Pages Configuration**:
```toml
# wrangler.toml (for Workers if needed)
name = "acreetionos-website"
compatibility_date = "2024-01-01"

[site]
bucket = ".next/static"

[[pages]]
framework = "next"
production_branch = "main"
```

**Build Settings** (Cloudflare Pages Dashboard):
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Node version: 18
```

**Alternative Platforms**:
- **Vercel** - Excellent Next.js support, paid tiers for scale
- **Netlify** - Good DX, similar to Cloudflare Pages
- **Self-hosted** - Docker + Node.js server on VPS

**Environment Variables** (future):
```env
# .env.local (not committed to git)
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/...
NEXT_PUBLIC_GITHUB_ORG=https://github.com/...
CMS_API_KEY=xxx
ANALYTICS_ID=xxx
```

**Cloudflare Pages Environment Variables**:
- Set via Cloudflare Pages dashboard
- Available at build time and runtime
- Separate values for production and preview environments
- Encrypted at rest

---

## Performance Architecture

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategies

**1. Code Splitting**
- Next.js automatically splits code by route
- Dynamic imports for heavy components

**2. Image Optimization**
- Use next/image for automatic optimization
- WebP format with PNG fallback
- Responsive image sizes

**3. CSS Optimization**
- Tailwind purges unused CSS in production
- Critical CSS inlined automatically
- Minified and compressed

**4. JavaScript Optimization**
- Client components only where needed
- Tree-shaking removes unused code
- Minification and compression

**5. Caching Strategy**
```
Static Assets: Cache-Control: public, max-age=31536000, immutable
HTML Pages: Cache-Control: public, max-age=0, must-revalidate
API Routes: Cache-Control: public, s-maxage=60, stale-while-revalidate
```

### Performance Monitoring

**Tools to Integrate**:
- Google Lighthouse (manual audits)
- Vercel Analytics (automatic)
- Web Vitals monitoring
- Error tracking (Sentry)

---

## SEO Architecture

### Current State

**Root Metadata** (`app/layout.tsx`):
```tsx
export const metadata = {
  title: "AcreetionOS",
  description: "The Future of Arch-Based Computing"
};
```

### SEO Roadmap

**Phase 1: Route-Level Metadata**
```tsx
// app/downloads/page.tsx
export const metadata = {
  title: "Download AcreetionOS | Arch-Based Linux Distribution",
  description: "Download the latest AcreetionOS ISO. Choose from multiple mirrors including OSU/OSL and RWTH Aachen.",
  openGraph: {
    title: "Download AcreetionOS",
    description: "...",
    url: "https://acreetionos.org/downloads",
    images: [
      {
        url: "/og-downloads.png",
        width: 1200,
        height: 630,
        alt: "AcreetionOS Downloads"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download AcreetionOS",
    description: "...",
    images: ["/twitter-downloads.png"],
  },
};
```

**Phase 2: Structured Data**
```tsx
// JSON-LD for organization
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AcreetionOS",
  "operatingSystem": "Linux",
  "applicationCategory": "DesktopApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "downloadUrl": "https://acreetionos.org/downloads"
}
</script>
```

**Phase 3: Sitemap & Robots**
```xml
<!-- public/sitemap.xml -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://acreetionos.org/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... -->
</urlset>
```

```txt
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://acreetionos.org/sitemap.xml
```

---

## Accessibility Architecture

### Current State

**Implemented**:
- Semantic HTML structure (headings, sections, nav)
- Alt text on images (placeholder text currently)
- Dark mode with sufficient contrast

**Missing**:
- Keyboard navigation testing
- ARIA labels on custom components
- Focus indicators on interactive elements
- Screen reader testing
- Reduced motion support

### Accessibility Roadmap

**1. Keyboard Navigation**
```tsx
// Ensure all interactive elements are focusable
<button
  className="focus:outline-none focus:ring-2 focus:ring-neonBlue"
  aria-label="Download AcreetionOS"
>
  Download
</button>
```

**2. ARIA Labels**
```tsx
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/">Home</a></li>
  </ul>
</nav>
```

**3. Skip Links**
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-0"
>
  Skip to main content
</a>
```

**4. Reduced Motion**
```tsx
// Respect user preferences
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

<motion.div
  animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
>
```

---

## Security Architecture

### Current Security Posture

**Built-in Next.js Security**:
- Automatic CSRF protection
- XSS prevention via React's JSX escaping
- Server-side rendering reduces client-side attack surface

**Content Security Policy** (future):
```tsx
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

### Future Considerations

**Environment Variables**:
- Never commit API keys to Git
- Use `.env.local` for secrets
- Prefix public vars with `NEXT_PUBLIC_`

**API Routes** (when added):
- Rate limiting
- Input validation
- Authentication/authorization
- CORS configuration

---

## Testing Architecture

### Current State

**No automated testing** - Manual QA only

### Testing Roadmap

**Phase 1: Component Testing**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

```tsx
// components/__tests__/NeonButton.test.tsx
import { render, screen } from '@testing-library/react';
import { NeonButton } from '../NeonButton';

test('renders button with text', () => {
  render(<NeonButton>Click Me</NeonButton>);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
```

**Phase 2: E2E Testing**
```bash
npm install --save-dev @playwright/test
```

```typescript
// e2e/homepage.spec.ts
test('downloads button navigates to downloads page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Download AcreetionOS');
  await expect(page).toHaveURL('/downloads');
});
```

**Phase 3: Visual Regression**
- Percy or Chromatic for visual diffs
- Catch unintended UI changes

---

## Developer Experience

### Code Organization Conventions

**File Naming**:
- Components: PascalCase (`NeonButton.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Pages: lowercase (`page.tsx`)
- Config: lowercase (`next.config.js`)

**Import Order**:
```tsx
// 1. External dependencies
import React from "react";
import { motion } from "framer-motion";

// 2. Internal components
import { NeonButton } from "@/components/NeonButton";

// 3. Types
import type { ButtonProps } from "@/types";

// 4. Styles/assets (if needed)
import "./styles.css";
```

**TypeScript Conventions**:
- Props interfaces named `{ComponentName}Props`
- Use `type` for unions, `interface` for objects
- Avoid `any` - use `unknown` if type is truly unknown

### Path Aliases

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Usage**:
```tsx
// Instead of: import { Hero } from "../../components/Hero"
import { Hero } from "@/components/Hero";
```

### Development Workflow

**1. Start Dev Server**
```bash
npm run dev
```

**2. Make Changes**
- Edit files in `app/` or `components/`
- Hot reload shows changes instantly
- TypeScript checks in editor

**3. Preview Build**
```bash
npm run build
npm run start
```

**4. Commit Changes**
```bash
git add .
git commit -m "feat: add downloads mirror selection"
git push
```

---

## Integration Points

### Current Integrations

**None** - Fully static site

### Future Integrations

**1. Cloudflare Workers API Routes**
```typescript
// workers/discord-stats.ts
export default {
  async fetch(request: Request, env: Env) {
    const guildId = env.DISCORD_GUILD_ID;
    const response = await fetch(`https://discord.com/api/v10/guilds/${guildId}`, {
      headers: { Authorization: `Bot ${env.DISCORD_BOT_TOKEN}` }
    });
    const data = await response.json();
    return new Response(JSON.stringify({ memberCount: data.approximate_member_count }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=300' }
    });
  }
};
```

**2. Cloudflare KV for Download Tracking**
```typescript
// Track download counts at edge
await env.DOWNLOADS_KV.put(`iso:${version}:count`, String(count + 1));
```

**3. Cloudflare D1 (Future Database)**
- Store blog posts
- Track download history
- User preferences
- Analytics data

**4. External APIs**
- **Discord API**: Live member count, online status
- **GitHub API**: Star count, contributors, latest releases
- **CMS** (Contentful/Sanity): Blog management, content updates

**5. Analytics**
- **Cloudflare Web Analytics** (privacy-friendly, free)
- **Plausible** (alternative, GDPR-compliant)
- Track conversions (downloads, Discord joins)
- Monitor popular pages

**6. Error Tracking**
- **Cloudflare Workers Analytics**: Track Worker errors and performance
- **Sentry** (alternative): Client-side error monitoring
- Real User Monitoring (RUM)

---

## Monitoring & Observability

### Metrics to Track

**Performance**:
- Page load times
- Core Web Vitals
- Bundle sizes
- API response times (future)

**Business**:
- Page views
- Unique visitors
- Download counts
- Discord join conversions
- GitHub star growth

**Technical**:
- Error rates
- Build times
- Deployment frequency
- Uptime percentage

### Logging Strategy

**Client-Side**:
```tsx
// Production-safe logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info');
}
```

**Server-Side** (future API routes):
```tsx
import { logger } from '@/lib/logger';

logger.info('User downloaded ISO', { mirror: 'osuosl' });
logger.error('Download failed', { error: err.message });
```

---

## Disaster Recovery

### Backup Strategy

**Code**:
- Git repository (GitHub/GitLab)
- Regular commits and branches
- Tagged releases

**Assets**:
- Original images backed up separately
- Design files (Figma, mockups) in version control
- Logo files in multiple formats

**Content** (future with CMS):
- CMS provider handles backups
- Regular exports to JSON
- Version history in CMS

### Rollback Strategy

**Cloudflare Pages Deployments**:
- Every deployment is immutable and versioned
- Instant rollback via Cloudflare dashboard
- Unlimited deployments retained
- Preview URLs available indefinitely
- Git commit linked to each deployment

**Rollback Options**:

**Option 1: Cloudflare Dashboard**
- Navigate to Pages project
- View deployment history
- Click "Rollback to this version" on any previous deployment
- Traffic switches instantly

**Option 2: Git Revert**
```bash
# Revert to previous commit
git revert HEAD
git push

# Cloudflare automatically deploys the reverted state
```

**Option 3: Specific Commit**
```bash
# Promote a specific deployment via Wrangler CLI
wrangler pages deployment list
wrangler pages deployment promote <deployment-id>
```

---

## Scalability Considerations

### Current Scale

**Expected Traffic**:
- 1,000-10,000 visitors/month (initial)
- 500-2,000 downloads/month
- Minimal server load (static site)

### Future Scale

**10x Growth** (100,000 visitors/month):
- Next.js handles automatically with CDN
- Static generation scales infinitely
- No backend bottlenecks currently

**If API Routes Added**:
- Database connection pooling
- Caching layer (Redis)
- Rate limiting per IP
- CDN for API responses

### CDN Strategy

**Cloudflare Global Network**:
- 300+ edge locations worldwide
- Automatic caching of static assets
- Smart routing for lowest latency
- HTTP/3 and QUIC support
- Brotli compression enabled by default
- WebP and AVIF automatic conversion (via Polish)

**Caching Strategy**:
```javascript
// Cache-Control headers for different asset types
Static Assets (images, fonts): max-age=31536000, immutable
HTML Pages: max-age=0, must-revalidate, public
API Responses: max-age=60, s-maxage=3600, stale-while-revalidate
```

**Asset Optimization**:
- Cloudflare Polish for automatic image optimization
- Minify JS/CSS via Cloudflare
- Brotli compression (better than gzip)
- Early Hints for faster resource loading
- Rocket Loader for async JavaScript

---

## Migration Paths

### From Current Site (acreetionos.org)

**Phase 1: Parallel Deployment**
- Deploy new site to staging URL
- Test thoroughly
- Gather feedback

**Phase 2: DNS Cutover**
- Point acreetionos.org to new site
- Set up redirects from old paths
- Monitor for 404s

**Phase 3: Sunset Old Site**
- Keep old site as backup for 30 days
- Archive old site content
- Remove old infrastructure

### Future CMS Migration

**Static → CMS**:
1. Set up headless CMS (Contentful/Sanity)
2. Migrate static content to CMS
3. Update pages to fetch from CMS
4. Deploy with build-time generation
5. Enable incremental static regeneration

---

## Technical Debt & Known Issues

### Current Technical Debt

1. **Navigation uses `<a>` tags** instead of Next.js `<Link>`
   - Impact: Full page reloads, poor UX
   - Fix: Replace in Navbar component

2. **No route-level metadata**
   - Impact: Poor SEO, generic social previews
   - Fix: Add metadata exports to each page

3. **Placeholder images**
   - Impact: Unprofessional appearance
   - Fix: Replace with real AcreetionOS assets

4. **No accessibility testing**
   - Impact: Potential WCAG violations
   - Fix: Audit with WAVE/axe, add ARIA labels

5. **No performance monitoring**
   - Impact: Can't track Core Web Vitals
   - Fix: Integrate Vercel Analytics or Lighthouse CI

6. **TypeScript strict mode off**
   - Impact: Loose type checking
   - Fix: Enable `strict: true` in tsconfig

7. **No automated tests**
   - Impact: Regressions possible during changes
   - Fix: Add Vitest + Testing Library

### Non-Critical Issues

- Animation performance on low-end devices (optimize in Milestone 11)
- No reduced motion support (add media query)
- Bundle size not optimized (lazy load heavy components)
- No error boundaries (add React error boundaries)

---

## Cloudflare-Specific Architecture

### Cloudflare Pages Setup

**Initial Setup**:
1. Connect GitHub/GitLab repository to Cloudflare Pages
2. Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
   - Node version: 18
3. Set environment variables in dashboard
4. Deploy on every push to main branch

**Preview Deployments**:
- Every PR gets a unique preview URL
- Format: `https://<commit-hash>.<project>.pages.dev`
- Ideal for stakeholder reviews
- Automatically cleaned up after merge

### Cloudflare Workers Integration

**Use Cases for Workers**:
1. **API Endpoints**: Discord stats, GitHub data, download tracking
2. **Middleware**: A/B testing, feature flags, geo-routing
3. **Edge Functions**: Real-time data aggregation
4. **Proxy**: Mirror selection based on user location

**Example Worker Structure**:
```
workers/
├── discord-stats.ts       # Discord API integration
├── download-tracker.ts    # Track ISO downloads
├── github-stats.ts        # GitHub API integration
└── geo-router.ts          # Route to nearest mirror
```

**Worker Bindings**:
```toml
# wrangler.toml
[[kv_namespaces]]
binding = "DOWNLOADS_KV"
id = "your-kv-id"

[[d1_databases]]
binding = "DB"
database_name = "acreetionos-db"
database_id = "your-db-id"

[[r2_buckets]]
binding = "ASSETS"
bucket_name = "acreetionos-assets"
```

### Cloudflare R2 (Object Storage)

**Future Use Cases**:
- Host ISO files (cheaper than bandwidth on other hosts)
- Store user-uploaded content (if community features added)
- Archive old releases
- Serve large assets (videos, high-res images)

**Cost Advantage**:
- Free egress (no bandwidth costs)
- $0.015/GB storage
- Ideal for distributing large ISO files

### Cloudflare D1 (Edge Database)

**Future Schema** (example):
```sql
-- Blog posts table
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Download tracking
CREATE TABLE downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version TEXT NOT NULL,
  mirror TEXT NOT NULL,
  user_agent TEXT,
  country TEXT,
  downloaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Team members
CREATE TABLE team (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  github_username TEXT,
  bio TEXT,
  avatar_url TEXT
);
```

### Cloudflare Web Analytics

**Setup**:
1. Enable in Cloudflare dashboard
2. Add beacon script to root layout
3. 100% privacy-compliant (no cookies, no tracking)
4. Core Web Vitals tracking included

**Metrics Tracked**:
- Page views
- Unique visitors
- Top pages
- Referrers
- Countries
- Browsers
- Core Web Vitals (LCP, FID, CLS)

### Cloudflare Images (Future)

**Automatic Optimization**:
- Resize images on-the-fly
- Convert to WebP/AVIF automatically
- Serve optimal format per browser
- Global CDN delivery

**Usage**:
```html
<!-- Original image -->
<img src="https://imagedelivery.net/<account-hash>/<image-id>/public" />

<!-- Resized variant -->
<img src="https://imagedelivery.net/<account-hash>/<image-id>/w=800,h=600" />
```

### Security via Cloudflare

**Built-in Protection**:
- DDoS mitigation (layer 3, 4, 7)
- WAF (Web Application Firewall) rules
- Bot management
- Rate limiting
- SSL/TLS termination

**Recommended Security Settings**:
- Always Use HTTPS: On
- Automatic HTTPS Rewrites: On
- Minimum TLS Version: 1.2
- HSTS: Enabled
- Security Level: Medium
- Challenge Passage: 30 minutes

**Page Rules for Enhanced Security**:
```
acreetionos.org/downloads/*
  - Browser Integrity Check: On
  - Security Level: High

acreetionos.org/api/*
  - Rate Limit: 100 requests/minute per IP
```

---

## Appendix: Key Files

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
```

### tailwind.config.js

```javascript
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00CFFF",
        neonPink: "#FF3CF9",
        neonPurple: "#A855F7",
        auroraGreen: "#3BFFAB"
      },
      backgroundImage: {
        aurora: "radial-gradient(...)"
      },
      boxShadow: {
        neon: "0 0 25px rgba(0, 200, 255, 0.35)"
      }
    }
  },
  plugins: []
};
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

**End of Architecture Documentation v1.0**

*This document should be updated as architectural decisions evolve.*

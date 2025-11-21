# AcreetionOS Website MVP Roadmap

**Goal**: Transform the site into a marketing-first hub that's demo-ready, SEO/AI-optimized, and encourages new contributor onboarding.

**Target**: Demoable MVP showcasing AcreetionOS as the central online presence.

---

## Milestone 1: SEO & Navigation Foundation ⚡

**Goal**: Make the site discoverable, professional, and navigable

**Deliverables**:
- [ ] Add route-level metadata to all pages (`/about`, `/downloads`, `/community`, `/blog`)
- [ ] Create unique title, description, and OpenGraph tags per route
- [ ] Add JSON-LD structured data for organization/software
- [ ] Create `robots.txt` and `sitemap.xml`
- [ ] Add favicon and OpenGraph images
- [ ] Convert Navbar `<a>` tags to Next.js `<Link>` components
- [ ] Add active route highlighting in navigation
- [ ] Add mobile hamburger menu
- [ ] Test responsive navigation on all breakpoints

**Success Criteria**:
- ✅ Every page has unique meta tags
- ✅ Navigation works without full page reloads
- ✅ Site works on mobile, tablet, desktop
- ✅ Rich social media previews work

**Outcome**: Site is crawlable, shareable, and has professional navigation

---

## Milestone 2: Real Assets & Content

**Goal**: Replace all placeholders with production-ready content

**Deliverables**:
- [ ] Replace all placeholder images with real AcreetionOS assets
- [ ] Add proper logo variants (header, footer, hero)
- [ ] Ensure `/stars.png` and other referenced assets exist
- [ ] Optimize images for web (WebP, proper sizing)
- [ ] Add alt text to all images for accessibility
- [ ] Proofread all copy for typos/grammar
- [ ] Ensure brand voice is consistent
- [ ] Remove any "Lorem ipsum" or placeholder text

**Success Criteria**:
- ✅ Zero placeholder images visible
- ✅ All assets optimized and loading fast
- ✅ Copy is polished and on-brand
- ✅ Images have proper alt text

**Outcome**: Site looks production-ready, not prototype

---

## Milestone 3: Downloads Hub

**Goal**: Complete download experience with mirrors, guides, and flasher tools

**Deliverables**:
- [ ] Add mirror selection component (OSUOSL, RWTH Aachen, Direct)
- [ ] Create flasher tool download section (Linux AppImage, Windows .exe)
- [ ] Add latest version number and release date
- [ ] Include checksum/signature verification instructions
- [ ] Create expandable installation guide sections:
  - Balena Etcher (beginner-friendly)
  - Ventoy multi-boot (intermediate)
  - `dd` command (advanced/Linux users)
- [ ] Add copy-to-clipboard for terminal commands
- [ ] Enhance `SystemInfoCard` with minimum/recommended specs
- [ ] Add compatibility notes (UEFI, Secure Boot, disk space, RAM)

**Success Criteria**:
- ✅ Users can download from multiple mirrors
- ✅ Installation guides are clear and complete
- ✅ System requirements are comprehensive
- ✅ Flasher tools are downloadable

**Outcome**: New users can successfully download and install AcreetionOS

---

## Milestone 4: Community & Contributor Hub

**Goal**: Make it easy to join community and start contributing

**Deliverables**:
- [ ] Add direct action buttons on community page:
  - "Join Discord" → direct invite link
  - "Browse Code on GitHub" → repo link
  - "Explore GitLab" → instance link
  - "Follow on Facebook" → page link
- [ ] Create "Get Involved" contributor onboarding section:
  - 💻 Developers (link to good first issues)
  - 🎨 Designers (link to design assets/guidelines)
  - 🧪 Testers (link to testing procedures)
  - 📝 Documenters (link to wiki/docs)
  - 📢 Advocates (social media kit)
  - 💰 Sponsors (link to funding model explanation)
- [ ] Add team member cards to About page
- [ ] Include GitHub profiles, roles, brief bios
- [ ] Add code of conduct link
- [ ] Show current priority areas for help

**Success Criteria**:
- ✅ Clear paths to join each community platform
- ✅ Beginners know exactly how to contribute
- ✅ Team is visible and human
- ✅ Working links to Discord, GitHub, GitLab

**Outcome**: Absolute beginners can easily join and contribute

---

## Milestone 5: About & Philosophy

**Goal**: Communicate what makes AcreetionOS unique

**Deliverables**:
- [ ] Port "Why We Don't Take Donations" explanation
- [ ] Add philosophy section (open, independent, bootstrapped)
- [ ] Include funding model transparency (proprietary apps fund OSS)
- [ ] Add "Why Choose AcreetionOS" differentiators
- [ ] Consider project history/timeline
- [ ] Add testimonials/user quotes if available

**Success Criteria**:
- ✅ Visitors understand funding model
- ✅ Unique value proposition is clear
- ✅ Philosophy aligns with original site's transparency

**Outcome**: Visitors understand what makes AcreetionOS special

---

## Milestone 6: Blog & Content System

**Goal**: Show the site is active and maintained

**Deliverables**:
- [ ] Create first 2-3 blog posts:
  - Welcome/announcement post
  - Latest release notes
  - "Getting Started with AcreetionOS" tutorial
- [ ] Set up blog post layout template
- [ ] Add RSS feed for blog
- [ ] Consider CMS integration (MDX, Contentful, Sanity) for easier updates
- [ ] Add blog post metadata for SEO

**Success Criteria**:
- ✅ At least 2 published blog posts
- ✅ Blog posts are well-formatted
- ✅ RSS feed works
- ✅ Easy to add new posts

**Outcome**: Site feels active and gives users resources

---

## Milestone 7: Social Proof & Metrics

**Goal**: Build credibility and show activity

**Deliverables**:
- [ ] Add total downloads counter (if API available)
- [ ] Add server status widget (if monitoring available)
- [ ] Add community stats (Discord members, GitHub stars)
- [ ] Add "As Seen On" section (DistroWatch, etc.)
- [ ] Consider AI assistant recommendation widget
- [ ] Add latest release version prominently

**Success Criteria**:
- ✅ Metrics are visible and updating
- ✅ Social proof elements present
- ✅ Credibility signals clear

**Outcome**: Visitors trust the project is active and popular

---

## Milestone 8: Performance & Accessibility

**Goal**: Ensure site works well for everyone

**Deliverables**:
- [ ] Run Lighthouse audit, fix critical issues
- [ ] Optimize Framer Motion animations (reduce motion for mobile)
- [ ] Implement lazy loading for heavy components
- [ ] Add `prefers-reduced-motion` media query support
- [ ] Ensure keyboard navigation works everywhere
- [ ] Add proper ARIA labels
- [ ] Test with screen reader
- [ ] Ensure color contrast meets WCAG AA
- [ ] Test on slow connections (3G simulation)

**Success Criteria**:
- ✅ Lighthouse score > 90 on all metrics
- ✅ Site loads in < 3 seconds
- ✅ Passes accessibility scan (WAVE/axe)
- ✅ Works with keyboard only
- ✅ Works with reduced motion

**Outcome**: Fast, accessible, smooth experience for all users

---

## Milestone 9: Analytics & Monitoring

**Goal**: Track success and catch errors

**Deliverables**:
- [ ] Add privacy-friendly analytics (Plausible, Fathom, or Google Analytics)
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Create conversion goals (downloads, Discord joins)
- [ ] Track most visited pages
- [ ] Set up uptime monitoring

**Success Criteria**:
- ✅ Analytics collecting data
- ✅ Error tracking active
- ✅ Conversion funnels defined

**Outcome**: Data-driven insights for improvements

---

## Milestone 10: Launch Preparation

**Goal**: Final polish before going live

**Deliverables**:
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Verify all links work (no 404s)
- [ ] Test all CTAs lead to correct destinations
- [ ] Deploy to production (Vercel recommended)
- [ ] Set up custom domain
- [ ] Configure SSL/HTTPS
- [ ] Set up CDN for assets
- [ ] Create preview/staging environment
- [ ] Document deployment process
- [ ] Create launch announcement
- [ ] Prepare demo talking points

**Success Criteria**:
- ✅ Works in all major browsers
- ✅ Zero console errors
- ✅ All links functional
- ✅ Site is live on production domain
- ✅ Demo materials ready

**Outcome**: Site is live and ready to show the world

---

## Fast Track to Demo (Minimum Viable)

**If timeline is tight**, complete these milestones in order:

### Critical Path (2-3 weeks):
1. ✅ **Milestone 1**: SEO & Navigation Foundation
2. ✅ **Milestone 2**: Real Assets & Content
3. ✅ **Milestone 3**: Downloads Hub
4. ✅ **Milestone 4**: Community & Contributor Hub
5. ✅ **Milestone 10**: Launch Preparation (abbreviated)

### Can defer post-demo:
- Milestone 5: About & Philosophy (use basic version)
- Milestone 6: Blog & Content System
- Milestone 7: Social Proof & Metrics
- Milestone 8: Performance & Accessibility (do basics only)
- Milestone 9: Analytics & Monitoring

---

## Success Metrics

**MVP is demo-ready when**:
- ✅ All pages have unique SEO metadata
- ✅ Navigation works smoothly (client-side routing)
- ✅ Downloads page has real ISO links + mirrors + guides
- ✅ Community page has working platform links + contributor onboarding
- ✅ Mobile experience is polished
- ✅ No placeholder content visible
- ✅ Site loads fast
- ✅ Zero critical errors
- ✅ Looks professional on all devices

**Post-Launch Goals**:
- 100+ Discord joins in first week
- 500+ downloads in first month
- 5+ new contributors engaged
- Featured on DistroWatch
- Positive community feedback

---

## Current Status

As noted in README.md, you're currently at:
> **Foundation**: Finalize component kit, Tailwind theme, and base routes (current milestone).

**Next Up**: Start Milestone 1 (SEO & Navigation Foundation)

---

## Notes

- Each milestone is independent but builds on previous work
- Milestones 1-4 are critical for a functional marketing hub
- Milestones 5-9 add polish and credibility
- Milestone 10 is the launch gate

Ready to start? Let me know which milestone to tackle first!

---

## Post-MVP Milestones

### Milestone 11: Visual Effects Enhancement 🎨

**Goal**: Match the Aurora Particles mockup visual intensity and effects

**Deliverables**:
- [ ] Enhance particle effects to match mockup density/style
  - Increase particle count and visibility
  - Add more prominent dot/particle overlay effect
  - Ensure particles animate smoothly with aurora gradients
- [ ] Intensify neon glow effects
  - Stronger border glows on cards and sections
  - More vibrant neon treatments on interactive elements
  - Enhanced shadow effects for depth
- [ ] Improve card styling
  - Add more prominent neon borders
  - Enhance glassmorphism effects
  - Increase visual contrast and hierarchy
- [ ] Add "Under the Hood" section to homepage
  - Modern Boot System card
  - EXT4 File System card
  - PipeWire Audio card
  - Technical specs with visual flair
- [ ] Add "Trusted By" section to homepage
  - OSU/OSL logo
  - RWTH Aachen logo
  - Other mirror partner logos
- [ ] Add "Meet the Team" section to homepage
  - Team member cards with photos
  - Role badges
  - Links to profiles
- [ ] Add AI Assistant recommendation cards
  - Gemini card
  - ChatGPT card
  - Claude card
  - "Talk to Humans" card (Discord link)
- [ ] Optimize visual effects for performance
  - Ensure smooth 60fps animations
  - Add GPU acceleration where needed
  - Test on mid-range devices
- [ ] Add section-specific background variations
  - Different aurora intensities per section
  - Parallax scrolling enhancements

**Success Criteria**:
- ✅ Visual intensity matches Aurora Particles mockup
- ✅ Particle effects are prominent and smooth
- ✅ Neon glows are vibrant and eye-catching
- ✅ All mockup sections present on homepage
- ✅ Effects perform well across devices
- ✅ Design maintains accessibility (contrast, motion)

**Outcome**: Site achieves the cinematic, high-impact visual presence of the mockup while maintaining performance and usability

# Contributing to AcreetionOS Website

Thank you for your interest in contributing to the AcreetionOS website! This guide will help you get started with development and ensure your contributions align with the project's goals and standards.

## ⚠️ Important: Issue-First Workflow

**All contributions must start with a GitHub issue. Pull requests without an associated issue will not be accepted.**

Before writing any code:
1. **Search existing issues** - Check if your idea or bug is already tracked
2. **Comment on the issue** - Express interest and discuss the approach
3. **Wait for maintainer approval** - Get confirmation before starting work
4. **Link your PR to the issue** - Reference the issue number in your PR

This workflow ensures:
- No duplicate work
- Clear communication about scope and approach
- Alignment with project priorities (see [MVP-ROADMAP.md](../MVP-ROADMAP.md))
- Better coordination among contributors

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/acreetionos-website.git
   cd acreetionos-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the site.

4. **Build for production** (to verify your changes)
   ```bash
   npm run build
   npm run start
   ```

## Development Workflow

### Step 1: Find or Create an Issue

**Before writing any code, you must:**

1. **Search existing issues**
   - Browse [GitHub Issues](https://github.com/your-org/acreetionos-website/issues)
   - Check for issues labeled `good first issue`, `help wanted`, or related to your area of interest
   - Review the [MVP-ROADMAP.md](../MVP-ROADMAP.md) to understand current priorities

2. **If an issue exists:**
   - Read the issue description carefully
   - Check if someone else is already working on it
   - **Comment on the issue** expressing your interest and proposed approach
   - Wait for maintainer confirmation before starting work

3. **If no issue exists:**
   - Create a new issue describing:
     - What you want to contribute (feature, bug fix, improvement)
     - Why it's valuable
     - Your proposed approach (if you have one)
   - Wait for maintainer feedback and approval
   - **Do not start coding until the issue is approved**

### Step 2: Get Assigned

Once you've commented on an issue and received approval:
- A maintainer will assign the issue to you (or you can ask to be assigned)
- This prevents duplicate work and ensures coordination

### Step 3: Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/acreetionos-website.git
   cd acreetionos-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch** (use the issue number in the branch name)
   ```bash
   git checkout -b feature/issue-123-add-mobile-menu
   # or
   git checkout -b fix/issue-456-navbar-routing
   ```

### Step 4: Make Your Changes

- Follow the code style guidelines below
- Test your changes in the browser
- Check responsive breakpoints (mobile, tablet, desktop)
- Reference the issue number in your commit messages

### Step 5: Commit Your Changes

Use [Conventional Commits](https://www.conventionalcommits.org/) format and include the issue number:
- `feat: add mobile hamburger menu (#123)`
- `fix: correct navbar link routing (#456)`
- `docs: update contributing guide (#789)`
- `refactor: simplify Hero component (#101)`
- `style: adjust neon glow intensity (#202)`

### Step 6: Create a Pull Request

**Required: Your PR must reference an issue number.**

1. **Push to your fork**
   ```bash
   git push origin feature/issue-123-add-mobile-menu
   ```

2. **Create a PR targeting the `development` branch**
   - Use the format: `feat: add mobile hamburger menu (#123)` or `fix: correct navbar routing (#456)`
   - In the PR description, include:
     - `Closes #123` or `Fixes #456` (this will auto-close the issue when merged)
     - Brief description of changes
     - How you tested the changes
     - Screenshots (if applicable)

3. **Link the issue**
   - GitHub will automatically link if you use `Closes #123` or `Fixes #456`
   - Or manually reference: `Related to #123`

**⚠️ PRs without an issue reference will be closed with a request to create/find an issue first.**

### Branch Strategy

- **`main`** - Production-ready code (auto-deploys to Cloudflare Pages)
- **`development`** - Active development branch (target for all PRs)
- **Feature branches** - Create from `development` for new features/fixes

## Code Style & Conventions

### TypeScript

- TypeScript `strict: false` is enabled - be cautious with type safety
- Use `interface` for object types, `type` for unions
- Avoid `any` - use `unknown` if type is truly unknown
- Props interfaces should be named `{ComponentName}Props`

### Component Development

**All components should be:**
- **Presentational and stateless** - no data fetching, pure UI
- **Client components when animated** - use `"use client"` for Framer Motion
- **Neon-themed** - follow the aurora glassmorphism design language

**Component Structure:**
```tsx
"use client"; // Only if using Framer Motion or hooks

import { motion } from "framer-motion";

interface ComponentNameProps {
  // Props here
}

export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Styling Guidelines

- **Use Tailwind CSS** - no CSS modules or inline styles
- **Follow the design system** - reference `tailwind.config.js` for color tokens
- **Glassmorphism pattern**: `backdrop-blur-md` + `bg-opacity-60` + border
- **Neon colors for accents only** - don't overuse neon colors
- **Dark mode enforced** - no light mode styles needed

**Color Tokens:**
- `neonBlue` (#00CFFF) - Primary accent
- `neonPink` (#FF3CF9) - Secondary accent
- `neonPurple` (#A855F7) - Tertiary accent
- `auroraGreen` (#3BFFAB) - Success/environment

### Animation Guidelines

- **Use Framer Motion** - never raw CSS animations
- **Common patterns**: fade-in, scale on hover, parallax scrolling
- **Accessibility**: Consider `prefers-reduced-motion` for future updates
- **Performance**: `AuroraBackground` is expensive on mobile - use sparingly

### File Organization

- **Components**: Place in `components/` directory
- **Routes**: Place in `app/` directory (Next.js App Router)
- **Imports**: Use path alias `@/*` for project root imports
- **Assets**: Place in `public/` directory

### Layout Pattern

Every route should follow this pattern:
```tsx
<AuroraBackground>
  <Navbar />
  <PageFade>
    {/* Route-specific content */}
  </PageFade>
</AuroraBackground>
```

## Testing

Currently, the project uses **manual QA only** (no automated tests). As a brochure website, thorough browser testing is essential for ensuring a polished user experience.

### Browser Testing Checklist

Before submitting a PR (and after addressing an issue), test your changes across:

**Desktop Browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS)
- [ ] Edge (latest)

**Mobile Browsers (if applicable):**
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

**Viewport Testing:**
- [ ] Desktop viewport (1920x1080, 1366x768)
- [ ] Tablet viewport (768px width)
- [ ] Mobile viewport (375px, 414px width)

**Functional Testing:**
- [ ] All internal links navigate correctly
- [ ] All external links open in new tabs
- [ ] Navigation menu works on all breakpoints
- [ ] Forms (if any) submit correctly
- [ ] No broken images or missing assets

**Visual & Performance:**
- [ ] Animations work smoothly (no jank or stuttering)
- [ ] Neon glow effects render correctly
- [ ] Glassmorphism effects display properly
- [ ] No layout shifts or visual regressions
- [ ] Page loads within acceptable time

**Console & Build:**
- [ ] No console errors or warnings
- [ ] No TypeScript errors
- [ ] `npm run build` completes successfully
- [ ] Production build runs without errors (`npm run start`)

## Design System Adherence

Before adding new components or styles:

1. **Check existing components** - Visit `/reference` route to see all components
2. **Follow STYLE-GUIDE.md** - Complete design system documentation
3. **Maintain consistency** - Use existing patterns and tokens
4. **Test visually** - Ensure your changes match the neon aurora aesthetic

## Project Priorities

See [MVP-ROADMAP.md](../MVP-ROADMAP.md) for current milestones and priorities. Focus areas:

- **Milestone 1**: SEO & Navigation Foundation
- **Milestone 2**: Real Assets & Content
- **Milestone 3**: Downloads Hub
- **Milestone 4**: Community & Contributor Hub

## Finding Issues to Work On

### Where to Look

1. **GitHub Issues** - Browse all open issues:
   - Filter by labels: `good first issue`, `help wanted`, `bug`, `enhancement`
   - Filter by milestone to align with [MVP-ROADMAP.md](../MVP-ROADMAP.md)
   - Search by keywords related to your skills/interests

2. **Roadmap Alignment** - Check [MVP-ROADMAP.md](../MVP-ROADMAP.md) for current priorities:
   - **Milestone 1**: SEO & Navigation Foundation
   - **Milestone 2**: Real Assets & Content
   - **Milestone 3**: Downloads Hub
   - **Milestone 4**: Community & Contributor Hub

3. **Good First Issues** - Look for issues labeled `good first issue`:
   - These are typically well-scoped and documented
   - Perfect for new contributors

### Common Contribution Areas

**Typical issues you might find:**
- Adding route-level metadata for SEO
- Converting remaining `<a>` tags to Next.js `<Link>`
- Adding mobile hamburger menu
- Replacing placeholder images
- Adding alt text to images
- Writing installation guides
- Optimizing `AuroraBackground` for mobile performance
- Adding reduced-motion support
- Improving accessibility (ARIA labels, keyboard navigation)
- Adding loading states
- Improving error boundaries

**Remember**: Even if you see an area that needs work, create or find an issue first before coding!

## Pull Request Guidelines

### ⚠️ Required: Issue Reference

**Your PR title and description MUST reference a GitHub issue number.**

### PR Title Format

Use conventional commit format with issue number:
- `feat: add mobile navigation menu (#123)`
- `fix: correct download card routing (#456)`
- `docs: update contributing guide (#789)`

### PR Description Template

```markdown
Closes #123  <!-- or Fixes #123, Related to #123 -->

## What
Brief description of changes

## Why
Motivation or problem solved (reference the issue)

## How
Implementation approach (if complex)

## Testing
- [ ] Tested in Chrome, Firefox, Safari, and Edge (latest versions)
- [ ] Tested desktop viewports (1920x1080, 1366x768)
- [ ] Tested tablet viewport (768px width)
- [ ] Tested mobile viewports (375px, 414px width)
- [ ] Verified all links work (internal and external)
- [ ] Verified animations work smoothly
- [ ] Verified no console errors or warnings
- [ ] Verified no visual regressions
- [ ] Ran `npm run build` successfully

## Screenshots
[If applicable, add screenshots of visual changes]
```

### Review Process

- **PRs without issue references will be closed** - You'll be asked to create/find an issue first
- PRs are reviewed by maintainers
- Address feedback promptly
- Keep PRs focused - one feature/fix per PR (one issue per PR)
- Ensure CI/CD passes (Cloudflare Pages preview)
- Once approved and merged, the linked issue will be automatically closed

## Questions?

- Check the documentation:
  - [README.md](../README.md) - Quick start
  - [STYLE-GUIDE.md](../STYLE-GUIDE.md) - Design system
  - [ARCHITECTURE.md](../ARCHITECTURE.md) - Technical details
  - [CLAUDE.md](../CLAUDE.md) - Development notes
  - [MVP-ROADMAP.md](../MVP-ROADMAP.md) - Current priorities and milestones
- **Open a GitHub issue** for questions or discussions (use the "Question" label)
- Join the community [Discord](https://discord.gg/rKs4C4kT)

## Summary: The Issue-First Workflow

**Remember these key steps:**e

1. ✅ **Search issues first** - Never start coding without checking existing issues
2. ✅ **Comment on the issue** - Express interest and discuss approach
3. ✅ **Get approval** - Wait for maintainer confirmation
4. ✅ **Link your PR** - Reference the issue number in PR title and description
5. ❌ **No PR without issue** - PRs without issue references will be closed

This workflow ensures organized, coordinated contributions that align with project goals. Thank you for following it! 🚀

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Celebrate diverse perspectives

Thank you for contributing to AcreetionOS! 🚀


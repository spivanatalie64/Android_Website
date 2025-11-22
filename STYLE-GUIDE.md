# AcreetionOS Brand Style Guide

**Version 1.0** | Visual Identity System for Website, Desktop Environment, and Social Media

---

## Color System

### Primary Palette

**Neon Blue** (Electric Cyan)
- HEX: `#00CFFF`
- RGB: `0, 207, 255`
- HSL: `191, 100%, 50%`
- Usage: Primary accent, CTAs, interactive elements, borders, highlights

**Neon Pink** (Electric Magenta)
- HEX: `#FF3CF9`
- RGB: `255, 60, 249`
- HSL: `302, 100%, 62%`
- Usage: Secondary accent, hover states, important highlights, gradient endpoints

**Neon Purple** (Vivid Purple)
- HEX: `#A855F7`
- RGB: `168, 85, 247`
- HSL: `271, 91%, 65%`
- Usage: Tertiary accent, links, badges, status indicators

**Aurora Green** (Electric Teal)
- HEX: `#3BFFAB`
- RGB: `59, 255, 171`
- HSL: `154, 100%, 62%`
- Usage: Success states, gradient mixing, environmental accents

### Background Colors

**Deep Space Black**
- HEX: `#000000` to `#0A0A0F`
- RGB: `0, 0, 0` to `10, 10, 15`
- Usage: Primary background, base layer

**Midnight Blue**
- HEX: `#0D1B2A` to `#1B263B`
- RGB: `13, 27, 42` to `27, 38, 59`
- Usage: Secondary backgrounds, card backgrounds, layered elements

**Cosmic Navy**
- HEX: `#0F1729`
- RGB: `15, 23, 41`
- Usage: Navbar, panels, elevated surfaces

### Gradient Definitions

**Aurora Gradient** (Primary)
```css
background: radial-gradient(circle at 20% 30%, rgba(0, 207, 255, 0.25), transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(255, 60, 249, 0.15), transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(59, 255, 171, 0.15), transparent 70%);
```

**Accretion Event Horizon** (Hero/Desktop Wallpaper)
```css
background: radial-gradient(ellipse at center,
            rgba(0, 207, 255, 0.4) 0%,
            rgba(255, 60, 249, 0.6) 35%,
            rgba(59, 255, 171, 0.3) 60%,
            rgba(168, 85, 247, 0.2) 80%,
            rgba(0, 0, 0, 1) 100%);
```

**Button Gradient**
```css
background: linear-gradient(135deg, #00CFFF 0%, #A855F7 100%);
```

**Card Border Gradient**
```css
border-image: linear-gradient(135deg, #00CFFF, #FF3CF9, #3BFFAB) 1;
```

### Text Colors

- **Primary Text**: `#FFFFFF` (Pure white)
- **Secondary Text**: `#E0E0E0` (Light gray)
- **Tertiary Text**: `#A0A0A0` (Medium gray)
- **Muted Text**: `#6B7280` (Dark gray)
- **Disabled Text**: `#4B5563` (Darker gray)

---

## Typography

### Font Families

**Primary Typeface**: System Default Sans-Serif Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Alternative (If Custom Font Needed)**: Inter, Outfit, or Space Grotesk
- Modern, geometric sans-serif
- Excellent readability at all sizes
- Strong weight variations for hierarchy

**Monospace** (Code/Terminal): JetBrains Mono, Fira Code, or Consolas
```css
font-family: "JetBrains Mono", "Fira Code", Consolas, Monaco, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| **Hero H1** | 56px - 64px | 800 (Extra Bold) | 1.1 | -0.02em |
| **Page H1** | 48px | 700 (Bold) | 1.2 | -0.01em |
| **H2** | 36px - 40px | 700 (Bold) | 1.3 | -0.01em |
| **H3** | 28px - 32px | 600 (Semi-Bold) | 1.4 | 0 |
| **H4** | 24px | 600 (Semi-Bold) | 1.4 | 0 |
| **H5** | 20px | 600 (Semi-Bold) | 1.5 | 0 |
| **Body Large** | 18px | 400 (Regular) | 1.6 | 0 |
| **Body** | 16px | 400 (Regular) | 1.6 | 0 |
| **Body Small** | 14px | 400 (Regular) | 1.5 | 0 |
| **Caption** | 12px | 400 (Regular) | 1.4 | 0.02em |
| **Button** | 16px | 600 (Semi-Bold) | 1 | 0.02em |
| **Label** | 14px | 500 (Medium) | 1.2 | 0.05em (uppercase) |

### Type Styles

**Glow Headings**
```css
color: #FFFFFF;
text-shadow: 0 0 20px rgba(0, 207, 255, 0.6),
             0 0 40px rgba(0, 207, 255, 0.4),
             0 0 60px rgba(0, 207, 255, 0.2);
```

**Neon Emphasis**
```css
color: #00CFFF;
text-shadow: 0 0 10px rgba(0, 207, 255, 0.8);
```

**Drop Shadow (Large Text)**
```css
text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
```

---

## Visual Effects

### Glow Effects

**Neon Border Glow**
```css
box-shadow: 0 0 20px rgba(0, 207, 255, 0.4),
            0 0 40px rgba(0, 207, 255, 0.2),
            inset 0 0 20px rgba(0, 207, 255, 0.1);
border: 1px solid rgba(0, 207, 255, 0.5);
```

**Card Hover Glow**
```css
box-shadow: 0 0 30px rgba(0, 207, 255, 0.5),
            0 0 60px rgba(255, 60, 249, 0.3);
border: 1px solid rgba(0, 207, 255, 0.8);
```

**Button Glow**
```css
box-shadow: 0 0 25px rgba(0, 207, 255, 0.5),
            0 4px 15px rgba(0, 0, 0, 0.3);
```

**Subtle Inner Glow**
```css
box-shadow: inset 0 0 30px rgba(0, 207, 255, 0.05);
```

### Glassmorphism

**Standard Glass Card**
```css
background: rgba(13, 27, 42, 0.6);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
```

**Intense Glass (Navbar/Modal)**
```css
background: rgba(15, 23, 41, 0.8);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(0, 207, 255, 0.2);
border-radius: 12px;
```

### Particle Effects

**Particle Overlay Specifications**
- Particle color: `rgba(0, 207, 255, 0.3)` to `rgba(255, 255, 255, 0.6)`
- Particle size: 1px - 3px diameter
- Density: 100-150 particles per viewport
- Animation: Slow drift (0.5px/s - 2px/s), occasional fade in/out
- Z-index: Between aurora gradient and content

**Starfield Layer**
- Star color: `rgba(255, 255, 255, 0.2)` to `rgba(255, 255, 255, 0.8)`
- Star size: 1px - 2px diameter
- Density: 200-300 stars per viewport
- Animation: Subtle parallax on scroll, gentle twinkle
- Background image or canvas-based

### Animation Principles

**Timing Functions**
- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` - Ease in-out
- **Snappy**: `cubic-bezier(0.25, 0.1, 0.25, 1)` - Fast response
- **Smooth**: `cubic-bezier(0.4, 0, 0.6, 1)` - Graceful
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful

**Durations**
- Micro-interactions: 150ms - 200ms
- Transitions: 300ms - 400ms
- Animations: 600ms - 1000ms
- Ambient effects: 5s - 40s (aurora, particles)

**Motion Preferences**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Specifications

### Buttons

**Primary Button (CTA)**
```css
Background: linear-gradient(135deg, #00CFFF 0%, #A855F7 100%);
Color: #FFFFFF;
Padding: 12px 32px;
Border-radius: 8px;
Font-size: 16px;
Font-weight: 600;
Box-shadow: 0 0 25px rgba(0, 207, 255, 0.35);
Transition: all 300ms ease;

Hover:
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(0, 207, 255, 0.6);

Active:
  transform: scale(0.98);
```

**Secondary Button**
```css
Background: transparent;
Color: #00CFFF;
Border: 2px solid #00CFFF;
Padding: 10px 30px;
Border-radius: 8px;
Font-size: 16px;
Font-weight: 600;
Box-shadow: 0 0 15px rgba(0, 207, 255, 0.2);
Transition: all 300ms ease;

Hover:
  background: rgba(0, 207, 255, 0.1);
  box-shadow: 0 0 25px rgba(0, 207, 255, 0.4);
```

**Ghost Button**
```css
Background: transparent;
Color: #E0E0E0;
Border: 1px solid rgba(255, 255, 255, 0.2);
Padding: 10px 24px;
Border-radius: 8px;
Font-size: 14px;
Font-weight: 500;

Hover:
  border-color: #00CFFF;
  color: #00CFFF;
```

### Cards

**Feature Card**
```css
Background: rgba(13, 27, 42, 0.6);
Backdrop-filter: blur(12px);
Border: 1px solid rgba(0, 207, 255, 0.2);
Border-radius: 16px;
Padding: 24px;
Box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
Transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

Hover:
  border-color: rgba(0, 207, 255, 0.6);
  box-shadow: 0 0 30px rgba(0, 207, 255, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
```

**Glass Panel**
```css
Background: rgba(15, 23, 41, 0.7);
Backdrop-filter: blur(16px) saturate(150%);
Border: 1px solid rgba(255, 255, 255, 0.15);
Border-radius: 20px;
Padding: 32px;
Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 0 40px rgba(0, 207, 255, 0.03);
```

**Stat Badge**
```css
Background: rgba(0, 207, 255, 0.1);
Border: 1px solid rgba(0, 207, 255, 0.3);
Border-radius: 24px;
Padding: 8px 16px;
Font-size: 14px;
Font-weight: 600;
Color: #00CFFF;
Text-shadow: 0 0 10px rgba(0, 207, 255, 0.5);
```

### Navigation

**Navbar**
```css
Position: fixed;
Top: 20px;
Width: calc(100% - 80px);
Max-width: 1200px;
Background: rgba(15, 23, 41, 0.85);
Backdrop-filter: blur(20px);
Border: 1px solid rgba(0, 207, 255, 0.15);
Border-radius: 16px;
Padding: 16px 32px;
Box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
Z-index: 1000;
```

**Nav Link**
```css
Color: #E0E0E0;
Font-size: 15px;
Font-weight: 500;
Padding: 8px 16px;
Border-radius: 8px;
Transition: all 200ms ease;

Hover:
  color: #00CFFF;
  background: rgba(0, 207, 255, 0.08);

Active:
  color: #00CFFF;
  background: rgba(0, 207, 255, 0.15);
  box-shadow: 0 0 15px rgba(0, 207, 255, 0.3);
```

#### Responsive Navbar Behavior

- Desktop (`md` and up): Show the full floating navbar centered at the top with horizontal links.
- Mobile (below `md`): Show a hamburger toggle button in the top-right that opens a full-screen, glassmorphic navigation overlay.
- When a mobile nav link is clicked, the overlay closes to return focus to the page content.

### Dividers

**Section Divider**
```css
Height: 1px;
Width: 100%;
Background: linear-gradient(90deg,
            transparent 0%,
            rgba(0, 207, 255, 0.3) 20%,
            rgba(255, 60, 249, 0.3) 50%,
            rgba(0, 207, 255, 0.3) 80%,
            transparent 100%);
Margin: 60px 0;
```

**Glow Divider**
```css
Height: 2px;
Width: 80%;
Background: linear-gradient(90deg, #00CFFF, #FF3CF9);
Box-shadow: 0 0 20px rgba(0, 207, 255, 0.5);
Border-radius: 2px;
```

---

## Layout System

### Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight spacing, icon gaps |
| `space-sm` | 8px | Compact elements |
| `space-md` | 16px | Default gap |
| `space-lg` | 24px | Comfortable spacing |
| `space-xl` | 32px | Section padding |
| `space-2xl` | 48px | Large sections |
| `space-3xl` | 64px | Hero spacing |
| `space-4xl` | 96px | Major sections |

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small elements |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards |
| `radius-xl` | 16px | Panels |
| `radius-2xl` | 20px | Large panels |
| `radius-full` | 9999px | Pills, badges |

### Container Widths

- **Max Content Width**: 1280px
- **Readable Width**: 720px (blog posts, long-form)
- **Form Width**: 480px
- **Card Grid**: 1140px

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet */
md: 768px   /* Tablet Landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

### Grid System

**12-Column Grid**
- Gutter: 24px (desktop), 16px (mobile)
- Margin: 40px (desktop), 20px (mobile)

**Common Layouts**
- Hero: Full width
- 3-column features: `lg:grid-cols-3 gap-8`
- 2-column about: `lg:grid-cols-2 gap-12`
- 4-column stats: `lg:grid-cols-4 gap-6`

---

## Iconography

### Icon Style

- **Type**: Line icons with rounded caps
- **Weight**: 2px stroke
- **Size Scale**: 16px, 20px, 24px, 32px, 48px
- **Color**: Match text color or use neon accent
- **Glow**: Apply subtle glow on hover

### Icon Libraries (Recommended)

- React Icons (Heroicons, Feather)
- Lucide Icons
- Phosphor Icons

### Social Icons

Apply neon glow on hover:
```css
filter: drop-shadow(0 0 8px currentColor);
```

---

## Imagery

### Photography Style

- **Tone**: Dark, moody, tech-focused
- **Treatment**: Desaturate slightly, increase contrast
- **Overlay**: Apply dark gradient overlay (30-50% opacity)

### Screenshots

- **Border**: 1px neon border with subtle glow
- **Shadow**: Large diffuse shadow for depth
- **Treatment**: Slight blur on background screenshots

### Desktop Wallpaper

**Accretion Disk Theme**
- Central black hole/void with bright accretion disk
- Colors: Cyan (#00CFFF) → Magenta (#FF3CF9) → Green (#3BFFAB) → Purple (#A855F7)
- Flow direction: Clockwise spiral
- Particle/light rays emanating outward
- Deep space starfield background

---

## Logo Usage

### Primary Logo

**AcreetionOS Wordmark**
- Color: White (#FFFFFF) with cyan (#00CFFF) accent on "OS"
- Treatment: Subtle glow effect
- Minimum size: 120px width
- Clear space: 16px on all sides

### Logo Variations

1. **Full Color**: White + cyan glow
2. **Monochrome**: Pure white
3. **Icon Only**: Stylized "A" symbol (if exists)

### Don'ts

- ❌ Don't rotate or skew
- ❌ Don't change colors outside brand palette
- ❌ Don't add drop shadows (glow only)
- ❌ Don't place on busy backgrounds without glassmorphic backdrop

---

## Desktop Environment Theme

### Window Manager

**Cinnamon Theme Specifications**

**Window Decorations**
```
Background: rgba(15, 23, 41, 0.95)
Border: 1px solid rgba(0, 207, 255, 0.2)
Border-radius: 12px (top corners)
Title bar height: 36px
Button size: 20px
Active glow: 0 0 15px rgba(0, 207, 255, 0.3)
```

**Panel/Taskbar**
```
Background: rgba(10, 10, 15, 0.9)
Backdrop-filter: blur(16px)
Border: 1px solid rgba(0, 207, 255, 0.1)
Height: 48px
Padding: 8px 16px
```

**Active Window Indicator**
```
Color: #00CFFF
Glow: 0 0 12px rgba(0, 207, 255, 0.6)
Height: 3px
```

### System Accents

- **Selection**: `rgba(0, 207, 255, 0.25)` with `#00CFFF` border
- **Focus Ring**: `2px solid #00CFFF` with glow
- **Scrollbar**: Dark background with `#00CFFF` thumb
- **Progress Bar**: Gradient from `#00CFFF` to `#A855F7`

### Terminal Theme

```
Background: #0A0A0F
Foreground: #E0E0E0
Cursor: #00CFFF
Selection: rgba(0, 207, 255, 0.3)

ANSI Colors:
Black: #1B263B
Red: #FF6B6B
Green: #3BFFAB
Yellow: #FFD93D
Blue: #00CFFF
Magenta: #FF3CF9
Cyan: #6FFFE9
White: #E0E0E0

Bright:
Black: #4B5563
Red: #FF8787
Green: #5FFFBE
Yellow: #FFE66D
Blue: #40DDFF
Magenta: #FF6BFF
Cyan: #89FFF3
White: #FFFFFF
```

### Wallpaper Guidelines

- Resolution: 3840x2160 (4K), scale down as needed
- Style: Accretion disk with aurora gradient
- Complexity: Medium (won't distract from windows)
- Color balance: Cool tones dominant, warm accents

---

## Social Media Templates

### Dimensions

**Profile Images**
- Twitter/X: 400x400px
- LinkedIn: 400x400px
- Facebook: 180x180px
- Discord: 512x512px
- GitHub: 460x460px

**Cover/Banner Images**
- Twitter/X: 1500x500px
- LinkedIn: 1584x396px
- Facebook: 820x312px
- Discord Server: 960x540px

### Social Post Templates

**Announcement Post**
```
Background: Aurora gradient
Logo: Top-left or centered
Headline: 40-48px bold white with cyan glow
Body: 20-24px light gray
Accent: Neon border or corner detail
Dimensions: 1200x630px (Open Graph)
```

**Feature Highlight**
```
Background: Dark with subtle aurora
Screenshot: Prominent with neon border glow
Title: 36px bold
Description: 18px
Badge: "New Feature" pill in cyan
Dimensions: 1080x1080px (Square)
```

**Quote/Testimonial**
```
Background: Glass panel effect
Quote: 28-32px italic with subtle glow
Attribution: 16px with profile image
Border: Gradient neon border
Dimensions: 1080x1350px (Portrait)
```

### Hashtag Strategy

Primary: `#AcreetionOS`
Secondary: `#ArchLinux #Linux #OpenSource #NeonAesthetic`

---

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- **Normal text**: 4.5:1 minimum
- **Large text** (18px+): 3:1 minimum
- **UI components**: 3:1 minimum

### Alternative Text

- All decorative images: `alt=""`
- Functional images: Descriptive alt text
- Complex graphics: Extended description

### Keyboard Navigation

- All interactive elements must be focusable
- Focus indicators must be visible (neon glow)
- Logical tab order maintained

### Screen Readers

- Semantic HTML structure
- ARIA labels on custom components
- Skip navigation links

---

## Voice & Tone

### Brand Voice Attributes

- **Innovative**: Forward-thinking, cutting-edge language
- **Approachable**: Friendly without being casual
- **Confident**: Authoritative but not arrogant
- **Transparent**: Honest about limitations and decisions
- **Inclusive**: Welcoming to beginners and experts

### Writing Guidelines

**Headlines**
- Bold, declarative statements
- Action-oriented when possible
- Avoid jargon unless speaking to technical audience

**Body Copy**
- Clear, concise sentences
- Active voice preferred
- Technical accuracy without condescension

**CTAs**
- Specific action verbs
- Create urgency without pressure
- Examples: "Download AcreetionOS", "Join Our Discord", "Explore the Docs"

### Terminology

**Preferred Terms**:
- "AcreetionOS" (not "Acretion OS" or "acretion-os")
- "Arch-based" (not "Arch derivative")
- "Desktop environment" (not "DE" in public-facing copy)
- "Community" (not "users")

---

## Implementation Notes

### CSS Custom Properties

```css
:root {
  /* Colors */
  --neon-blue: #00CFFF;
  --neon-pink: #FF3CF9;
  --neon-purple: #A855F7;
  --aurora-green: #3BFFAB;

  /* Backgrounds */
  --bg-primary: #000000;
  --bg-secondary: #0D1B2A;
  --bg-tertiary: #0F1729;

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #E0E0E0;
  --text-tertiary: #A0A0A0;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;

  /* Effects */
  --glow-sm: 0 0 10px;
  --glow-md: 0 0 20px;
  --glow-lg: 0 0 30px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tailwind CSS Extension

```javascript
// tailwind.config.js additions
module.exports = {
  theme: {
    extend: {
      colors: {
        neonBlue: '#00CFFF',
        neonPink: '#FF3CF9',
        neonPurple: '#A855F7',
        auroraGreen: '#3BFFAB',
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at 20% 30%, rgba(0,207,255,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,60,249,0.15), transparent 60%), radial-gradient(circle at 50% 50%, rgba(59,255,171,0.15), transparent 70%)',
        'accretion': 'radial-gradient(ellipse at center, rgba(0,207,255,0.4) 0%, rgba(255,60,249,0.6) 35%, rgba(59,255,171,0.3) 60%, rgba(168,85,247,0.2) 80%, rgba(0,0,0,1) 100%)',
      },
      boxShadow: {
        'neon': '0 0 25px rgba(0, 207, 255, 0.35)',
        'neon-lg': '0 0 35px rgba(0, 207, 255, 0.5)',
        'glow': '0 0 20px rgba(0, 207, 255, 0.4), 0 0 40px rgba(0, 207, 255, 0.2)',
      },
    },
  },
}
```

---

## File Formats & Export Settings

### Web Assets

- **Raster**: WebP (preferred), PNG fallback
- **Vector**: SVG (optimized)
- **Compression**: 80-90% quality for photos
- **Resolution**: 2x for retina displays

### Desktop Assets

- **Wallpapers**: PNG, 3840x2160px
- **Icons**: SVG or 512x512px PNG
- **Cursors**: PNG sequences, 32x32px base

### Print (if needed)

- **Resolution**: 300 DPI
- **Color Space**: CMYK (converted from RGB)
- **Format**: PDF or high-res PNG

---

**End of Style Guide v1.0**

*This document is a living standard. Update version number when making significant changes.*

# Original AcreetionOS.org Website Components

Documentation of components and content from the original https://acreetionos.org website for modernization reference.

---

## Header & Navigation

### Top Announcement Bar
- **DistroWatch Link**
- **Discord Server Link**
- **Facebook Community Link**

### Main Navigation Menu
1. Total Downloads (counter/metric)
2. Server Status
3. About
4. Downloads
5. Donate
6. Wiki
7. Contact & Support

### Branding
- AcreetionOS Logo
- Brand tagline/positioning

---

## Hero Section

### Welcome Message
**Heading**: Introduction to AcreetionOS
**Description**: "An approachable and user-friendly distribution based on the powerful Arch Linux core"

### Mission Statement
- Bridges Arch Linux flexibility with user simplicity
- Positioned as accessible alternative to traditional Arch installation

### Visual
- Large AcreetionOS logo/hero image

---

## Philosophy & Values Section

### Organizational Model
- **Open Source**: Community-driven development
- **Independent**: Not owned by larger organization
- **Bootstrapped**: Self-funded approach
- **Funding Model**: Revenue from proprietary apps on Windows/macOS funds AcreetionOS development

### Community Engagement
**Contribution Pathways**:
1. Developers
2. Designers
3. Testers
4. Documenters
5. Advocates
6. Sponsors

**Platform**: Discord-based community

---

## Technical Specifications

### System Details Table/Grid
| Component | Technology |
|-----------|------------|
| **Boot Process** | systemd-boot, syslinux, grub |
| **Filesystem** | EXT4 |
| **Audio Server** | Pipewire |
| **Desktop Environment** | Cinnamon |
| **Base** | Arch Linux (rolling release) |
| **Architecture** | x86_64 |

---

## Downloads Section

### USB Flasher Tools
**AcreetionOS Flasher**:
- Linux version (AppImage)
- Windows version (executable)

### ISO Downloads
**Download Options**:
1. Direct download link
2. OSUOSL mirror (Oregon State University Open Source Lab)
3. RWTH Aachen mirror (Germany)

**Download Features**:
- Mirror selection for faster regional downloads
- Trusted institutional mirrors highlighted

### Installation Guides

**Balena Etcher Guide**:
- Step-by-step flashing instructions
- User-friendly option for beginners

**Ventoy Multi-Boot Guide**:
- Instructions for multi-boot USB setup
- Advanced user option

**Advanced dd Command Tutorial**:
- Terminal-based flashing for power users
- Command-line instructions

---

## Community & Development Section

### Community Platforms
- **Discord Server** (primary community hub)
- **GitHub Organization** (code repositories)
- **GitLab Instance** (alternative code hosting)

### Team Members
- Display of team members
- Links to GitHub profiles
- 2 core team members listed

---

## Additional Features & Modals

### AI Assistant Recommendations
**Suggested Tools**:
- Google Gemini
- ChatGPT
- Claude

**Purpose**: Help users with AcreetionOS questions

### Donation Policy Modal
**Title**: "Why We Don't Take Donations"
**Content**: Explains self-funding model and rationale for not accepting direct donations

### Mirrors Section
**Trusted Mirrors**:
- Highlight of institutional partners (universities, OSS organizations)
- Geographic distribution for download optimization

---

## Footer

### Legal & Attribution
- Copyright notice
- Arch Linux attribution (as base distribution)

### Additional Links
- Legacy self-help tool
- Archive/historical resources

---

## Component Inventory Summary

### Interactive Elements
- [ ] Navigation menu (7 items)
- [ ] Announcement bar (3 links)
- [ ] Download buttons (ISO + flasher tools)
- [ ] Mirror selection
- [ ] Community platform links (Discord, GitHub, GitLab)
- [ ] Team member cards
- [ ] AI assistant recommendation cards
- [ ] Modal/popup (donation policy)

### Content Sections
- [ ] Hero/welcome
- [ ] Mission statement
- [ ] Philosophy & values
- [ ] Technical specifications grid
- [ ] Download center
- [ ] Installation guides
- [ ] Community section
- [ ] Team showcase
- [ ] Mirrors list
- [ ] Footer

### Data/Metrics
- [ ] Total downloads counter
- [ ] Server status indicator

### Assets Needed
- [ ] AcreetionOS logo (multiple sizes)
- [ ] Hero image
- [ ] Team member photos/avatars
- [ ] Platform icons (Discord, GitHub, GitLab, Facebook)
- [ ] Download icons
- [ ] AI assistant logos

---

## Modernization Notes

### Current vs New Implementation

**Navigation Differences**:
- Original: 7+ navigation items including metrics
- New: Simplified to Home, About, Downloads, Community, Blog, Reference

**Content Expansion Opportunities**:
- Server status could be real-time API integration
- Downloads counter could be dynamic
- Team section expandable with bios
- Wiki content could feed blog section

**Missing from New Site**:
- Total downloads metric
- Server status
- Donate section (intentionally removed per policy)
- Wiki (could become blog or docs)
- Contact/Support page
- Installation guides (Etcher, Ventoy, dd)
- Mirrors list
- USB flasher tool downloads
- Donation policy explanation
- AI assistant recommendations

**Enhanced in New Site**:
- Modern neon aurora aesthetic
- Framer Motion animations
- Component showcase (reference page)
- Glassmorphism design language
- More cinematic/marketing-focused presentation

### Content Migration Checklist
- [ ] Port technical specifications to SystemInfoCard
- [ ] Add installation guides to downloads page
- [ ] Create mirror selection component
- [ ] Add team member profiles to about page
- [ ] Create flasher tool download section
- [ ] Add server status widget
- [ ] Integrate downloads counter
- [ ] Port "Why We Don't Take Donations" content
- [ ] Add community platform links to community page
- [ ] Consider wiki/documentation section or merge into blog

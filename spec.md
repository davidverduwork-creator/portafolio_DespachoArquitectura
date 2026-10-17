# 🏛️ Project Specification (spec.md)
**Client/Project:** Corporate Website - Architecture Firm
**Tech Stack:** Astro, Tailwind CSS, Vanilla TypeScript, View Transitions

---

## 1. Overview & Aesthetics
- **Design Approach:** Editorial, high visual value, minimalist, and sophisticated. Inspired by integration with nature, volume, texture, and premium finishes.
- **Inspiration Reference:** [Belgrade Arbor](https://belgradearbor.rs/en)
  - *Key elements to replicate:* Smooth transitions between sections, high-resolution photography-centric design, clean serif/sans typography with wide line spacing, elegant micro-interactions, and non-intrusive navigation.

---

## 2. Color Palette & Design System

### Primary Colors (`colorPalette.md`)
- **#000000 (Absolute Black / Primary Dark):** Used for primary typography, contrast, and dark backgrounds.
- **#FFFFFF (Pure White / Clean White):** Clean section backgrounds and containers.
- **#FAF0E8 (Warm Cream / Surface Neutral):** Base background for organic warmth and soft lighting (replaces clinical white).
- **#9B6830 (Bronze / Dark Earth Tone):** Primary accent color (hover buttons, project details, decorative lines).
- **#B6956E (Sand / Warm Ochre):** Secondary accent, subtle borders, and secondary interactive states.
- **#778698 (Muted Slate / Gray):** Secondary texts, descriptions, subtitles, and project metadata.

---

## 3. Page Architecture & Navigation Flows

### View 1: Splash Screen / Landing (`src/pages/index.astro`)
- **Impact Hero (Full Screen - `100dvh`):**
  - Full-screen main photograph/render of an iconic project with a subtle overlay.
  - Primary typography featuring the studio name and minimalist tagline.
  - Intuitive animated indicator at the bottom to encourage scrolling (`animate-bounce`).
- **Behavior / Transition:**
  - Upon the first scroll down, a native transition is triggered (`View Transitions`) redirecting to the main experience (`/home`).

### View 2: Main Page (`src/pages/home.astro`)
- **Navbar:**
  - Minimalist and semi-transparent. Logo on the left, floating/dropdown menu or clean links (Studio, Projects, Services, Contact).
- **Section 1: Manifesto / About the Studio (`About`):**
  - Brief statement of intent regarding architectural philosophy (sustainability, spatial design, natural light).
- **Section 2: Featured Projects (`Portfolio Grid`):**
  - Asymmetric/editorial grid showcasing project images.
  - Hover effect: Project name, location, and year appear.
  - Scroll animation: Smooth fade-in-up entry using `IntersectionObserver`.
- **Section 3: Core Services:**
  - Interactive modules explaining working phases (see Section 4).
- **Section 4: Methodological Process / Philosophy:**
  - Timeline or steps from concept/sketch to construction.
- **Footer:**
  - Direct contact info, studio location, social media links (Instagram, LinkedIn, ArchDaily), and copyright credits.

---

## 4. Essential Architectural Services

1. **Architectural & Residential Design:**
   - New construction projects, exclusive villas, and custom residential architecture.
2. **Landscape Architecture & Urbanism:**
   - Integration of the natural environment with the built structure (*Belgrade Arbor* inspiration).
3. **Interior Design & Interior Landscaping:**
   - Premium material selection, technical lighting, and bespoke furniture.
4. **Comprehensive Project Management:**
   - Execution control, sustainability, permits, and technical site management.

---

## 5. Functional Requirements & Interactivity

- **Scroll & Animations:**
  - Smooth navigation using Astro's `View Transitions` for SPA-style page changes.
  - Progressive element reveal (images and paragraphs) using `IntersectionObserver` in TypeScript.
  - Zero heavy libraries (no GSAP/Framer Motion).
- **Asset & Image Handling:**
  - Mandatory implementation of Astro's `<Image />` component (`astro:assets`) for automatic optimization to WebP/AVIF formats.
  - Use of placeholders or visual skeletons during loading states.
- **Responsiveness & Accessibility:**
  - Flawless mobile-first design.
  - Compliance with WCAG contrast ratios using the defined color palette.
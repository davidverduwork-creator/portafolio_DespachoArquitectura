# GEMINI Project Guide: Portafolio Despacho de Arquitectura

## 1. Project Overview
This project is a high-end web portfolio for an architecture studio (**Despacho de Arquitectura**). The primary objective is to showcase architectural projects, philosophy, team, and services with an editorial, minimalist aesthetic featuring high-impact visual presentation, elegant typography, generous whitespace, and optimal performance.

## 2. Tech Stack
- **Framework**: [Astro](https://astro.build/) (Static Site Generation - SSG, Islands Architecture)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS, custom design tokens for architecture portfolio)
- **Language**: TypeScript / HTML / CSS / Markdown
- **Assets & Media**: Optimized responsive images (WebP/AVIF), vector graphics for architectural drawings/plans
- **Version Control**: Git + GitHub

## 3. Directory Structure
```text
portafolio_DespachoArquitectura/
├── .agents/
│   └── rules/
│       ├── architect.md        # Software Architect role definition & Phase 1 constraints
│       └── qa.md               # QA & Auditor role definition & auditing guidelines
├── Assets/                     # Raw design assets, blueprints, studio photos
├── public/                     # Static public assets (fonts, icons, robots.txt)
│   └── images/
├── src/
│   ├── components/             # Reusable Astro and UI components
│   │   ├── common/             # Generic reusable UI (Buttons, Modals, Typography)
│   │   ├── layout/             # Header, Navigation, Footer, Mobile Menu
│   │   └── portfolio/          # Project Card, Project Gallery, Filter, Lightbox
│   ├── content/                # Content collections (Projects, Services, Studio)
│   │   └── projects/           # Markdown/MDX project case studies
│   ├── layouts/                # Astro page layouts (BaseLayout, ProjectLayout)
│   ├── pages/                  # File-based routes (index, projects, studio, contact)
│   └── styles/                 # Global styles, Tailwind directives, font definitions
├── .gitignore
├── GEMINI.md                   # Project context, rules and configuration
└── README.md                   # Public repository documentation
```

## 4. Agent Roles & Governance
Project development is governed by specialized roles defined in `.agents/rules/`:

1. **Software Architect** (`.agents/rules/architect.md`):
   - Responsible for system design, content modeling, component hierarchy, performance budgeting, and technical specifications.
   - **STRICT RULE**: In Phase 1, the architect **does not write application code**. The focus is strictly on architectural planning and technical validation.

2. **Quality Auditor / QA** (`.agents/rules/qa.md`):
   - Responsible for auditing, quality control, accessibility (WCAG AA), Core Web Vitals, and structural integrity.
   - **STRICT RULE**: Operates strictly as an **Auditor**; identifies defects, benchmarks quality, and enforces standards without writing implementation code.

## 5. Development Phases
- **Phase 1: Architecture & Technical Planning** (Current Phase)
  - Define folder structure, rules, technical guidelines, and content schemas.
  - No application code written during this phase.
- **Phase 2: Design System & Information Architecture**
  - Define typography scales, color palettes, spacing systems, and page mockups/wireframes.
- **Phase 3: Implementation**
  - Astro project setup, component build, styling with Tailwind CSS, and content integration.
- **Phase 4: QA, Audit & Deployment**
  - Performance audits, responsive testing, accessibility compliance, and production deployment.

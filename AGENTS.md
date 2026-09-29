# AGENTS.md — Donutland Multi-Brand Implementation System

Welcome to the **Donutland Reverse-Engineering & Multi-Brand Implementation System**.  
This document defines the strict operational boundaries, architectural conventions, approved technology stack, and documentation map for all autonomous and pair-programming agents operating within `s:\Apps\donuts\`.

---

## 1. Core Directives & Standards Precedence

All agents working on this project must strictly comply with the following hierarchy of standards:

1. **Project-Local Instructions & Guidelines:** Defined in this file (`AGENTS.md`) and the verified documentation suite located in `docs/`.
2. **Global Development Standard:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md).
3. **Execution Boundaries:**
   - **DO NOT** attempt to perform full template reconstruction during the research phase.
   - **DO NOT** globally install heavy UI packages or clutter `package.json` with unapproved dependencies.
   - **DO NOT** invent CSS values, inaccessible URLs, or unsupported animations.
   - **DO** verify all findings against live DOM and network assets.
   - **DO** preserve existing code comments, docstrings, and verified documentation integrity.

---

## 2. Approved Technology Stack (Adeel Dev Standard Compliance)

When the implementation phase is activated by the user, all agents must adhere to the following stack:

| Layer | Approved Technology | Prohibited Alternatives | Notes & Exceptions |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router, Turbopack, React Server Components) | Pages Router, Remix, Gatsby | Clean route grouping: `(marketing)`, `(shop)`, `(blog)`, `admin/`. |
| **Styling** | Tailwind CSS v4 + Tailwind Merge + CVA | Plain CSS, CSS Modules, Styled Components | Custom theme tokens for `#f54f95`, `#f98000`, `#eeae23`, `#6e300f`. |
| **Base UI Primitives** | shadcn/ui (Radix Primitives) | Material UI, Chakra UI, Ant Design | Adapted to Donutland's rounded pill aesthetic. |
| **Icons (Static)** | **Phosphor Icons** (`@phosphor-icons/react`) | Lucide, Heroicons, Font Awesome | Mandatory default icon library per Adeel Dev Standard. |
| **Icons (Animated)** | **Iconimate** | Lottie for generic icons | Only use Lottie for the legacy hamburger menu if exact fidelity is required. |
| **Normal UI Animations** | **Motion** (`motion/react`) | React Spring, Framer Motion v10 legacy | For layout animations, drawers, page transitions, and hover states. |
| **Bespoke Animations & SVGs** | **Anime.js v3** | GSAP (commercial license restrictions) | For complex SVG dripping icing morphs and multi-stage path timelines. |
| **Illustrations / Assets** | **unDraw** / original 3D renders | Scraping or hotlinking copyrighted assets | Replace Webflow template demo assets with licensed/custom assets for clients. |
| **State Management** | Zustand (minimal headless store) | Redux, MobX | For cart drawer, product box selection, and theme switching. |

---

## 3. Documentation Map & Deliverables Directory

All reverse-engineering and architectural deliverables are permanently cataloged in `s:\Apps\donuts\docs\`:

```
s:\Apps\donuts\
├── docs/
│   ├── research/
│   │   ├── RESEARCH_CHECKLIST.md       # Multi-agent coordination and progress tracker
│   │   ├── MASTER_TEMPLATE_REPORT.md   # Executive synthesis of entire template
│   │   └── RESEARCH_VALIDATION.md      # Independent quality audit & cross-verification
│   ├── inventory/
│   │   ├── PAGE_INVENTORY.md           # 54 verified URLs with metadata & sections
│   │   ├── SITE_STRUCTURE.md           # Information architecture & mega-dropdown topology
│   │   ├── PAGE_VARIATION_MATRIX.md    # Cross-comparison matrix of all 5 variation sets
│   │   └── COMPONENT_INVENTORY.md      # Shared & variation-specific component decomposition
│   ├── design/
│   │   ├── DESIGN_SYSTEM.md            # Typography (Anton, Plus Jakarta), colors, spacing, drips
│   │   ├── ANIMATION_INVENTORY.md      # IX2 interactions, Lottie animations, Motion/Anime mapping
│   │   └── donutland.original.css      # Extracted original Webflow shared stylesheet
│   ├── assets/
│   │   └── ASSET_MANIFEST.md           # Media inventory, dimensions, and licensing analysis
│   └── architecture/
│       ├── TECHNICAL_FEASIBILITY.md    # Frontend architecture, Next.js feasibility, performance
│       ├── PROJECT_ARCHITECTURE.md     # Multi-tenant / multi-brand monorepo & package structure
│       ├── FIVE_WEBSITE_PLAN.md        # Strategy for assembling 5 distinct brand websites
│       └── IMPLEMENTATION_HANDOFF.md   # Step-by-step handoff for the implementation skill
├── screenshots/
│   ├── desktop/                        # Verified desktop screenshots (1440x900)
│   ├── mobile/                         # Verified mobile screenshots (390x844)
│   └── interactions/                   # Captured interactive states (e.g. Cart Drawer)
├── projects/                           # Reserved workspaces for the 5 commercial donut brands
│   ├── site-01-sprinklespree/
│   ├── site-02-glaze-and-co/
│   ├── site-03-puredonut/
│   ├── site-04-doughboyz/
│   └── site-05-the-donut-counter/
├── AGENTS.md                           # This operational guideline file
└── README.md                           # Master repo orientation
```

---

## 4. Multi-Brand Assembly Blueprint

The 25 discovered page variations (5 Home, 5 About, 5 Contact, 5 Subscribe, 5 Why Donutland) are configured into 5 distinct commercial brand websites without visual repetition:

1. **Site 1 ("SprinkleSpree"):** Fun & Playful Kids/Party World (Home 01 + About 05 + Contact 05 + Subscribe 03 + Why 05)
2. **Site 2 ("Glaze & Co."):** Modern Gourmet & Artisanal Patisserie (Home 02 + About 02 + Contact 02 + Subscribe 02 + Why 02)
3. **Site 3 ("PureDonut / KetoKreme"):** Clean Fitness, Keto & Organic Lab (Home 05 + About 03 + Contact 04 + Subscribe 04 + Why 01)
4. **Site 4 ("DoughBoyz"):** Bold Urban Streetwear, Skate & Nightlife (Home 04 + About 01 + Contact 01 + Subscribe 01 + Why 03)
5. **Site 5 ("The Donut Counter"):** Classic 1950s Americana Diner & Franchise (Home 03 + About 04 + Contact 03 + Subscribe 05 + Why 04)

---

## 5. Execution Rules for Future Implementation Agents

When the implementation skill is activated:
1. **Never copy Webflow runtime JS (`webflow.js`):** Webflow's proprietary JS engine must be completely replaced with clean React Server Components and declarative Motion/Anime hooks.
2. **Preserve SVG Drip Semantics:** The dripping icing dividers must be preserved as scalable vector assets (`.svg`) with CSS `fill: currentColor` to allow dynamic theming across different brand colors.
3. **Ensure Full Keyboard & Screen Reader Accessibility:** Ensure all custom drawers, dropdowns, and tab controls are WCAG 2.1 AA compliant.
4. **Optimize Assets:** Convert all photographic assets to Next.js `<Image />` with automatic WebP/AVIF delivery and modern `sizes` attributes.

# Donutland Multi-Brand Implementation Handoff

**Target Skill:** Specialized Website Implementation Skill  
**Author:** Google Antigravity (Lead Orchestrator)  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Repository Location:** `s:\Apps\donuts\`  
**Date:** September 2026  
**Status:** **Ready for Implementation Execution**  

---

## 1. Executive Handoff Overview

This document provides the definitive, actionable technical specification for the specialized coding skill that will implement the Donutland multi-brand platform.

All discovery, reverse-engineering, asset extraction, animation analysis, and cross-agent quality verification have been completed. **Do not repeat the discovery or exploration phase.** Begin implementation immediately using the specifications and assets cataloged herein.

### Primary Directives:
1. **Never copy legacy Webflow runtime JS (`webflow.js`):** All interactions must be reconstructed using React Server Components, declarative Motion (`motion/react`) hooks, and Anime.js.
2. **Strict Adeel Dev Standard Adherence:**
   - **Icons:** **Phosphor Icons** (`@phosphor-icons/react`) for static/interactive icons; **Iconimate** for animated micro-icons. Do not install Lucide, Heroicons, or Font Awesome.
   - **Normal UI Animation:** **Motion** for drawers, sticky navigation, dropdowns, and scroll-triggered reveals.
   - **Bespoke Animations & Timelines:** **Anime.js** for SVG dripping icing morphs and particle bursts.
   - **UI Primitives:** **shadcn/ui** (Radix UI) adapted to Donutland's rounded confectionery theme.
3. **Multi-Brand Design Engine:** Build a shared component package (`packages/ui/`) that dynamically renders 5 distinct brand websites based on typed configuration objects (`BrandConfig`).

---

## 2. Deliverables & Documentation Index

Before coding, consult the verified research artifacts in `docs/`:

| Artifact Category | File Location | Key Contents |
| :--- | :--- | :--- |
| **Executive Overview** | [`docs/research/MASTER_TEMPLATE_REPORT.md`](file:///s:/Apps/donuts/docs/research/MASTER_TEMPLATE_REPORT.md) | High-level synthesis of template architecture and findings. |
| **Page Inventory** | [`docs/inventory/PAGE_INVENTORY.md`](file:///s:/Apps/donuts/docs/inventory/PAGE_INVENTORY.md) | 54 verified URLs with metadata, H1s, sections, and evidence tiers. |
| **Site Structure** | [`docs/inventory/SITE_STRUCTURE.md`](file:///s:/Apps/donuts/docs/inventory/SITE_STRUCTURE.md) | IA hierarchy, 31-item mega-dropdown matrix, global footer breakdown. |
| **Variation Matrix** | [`docs/inventory/PAGE_VARIATION_MATRIX.md`](file:///s:/Apps/donuts/docs/inventory/PAGE_VARIATION_MATRIX.md) | Cross-comparison of all 5 variation sets across 7 criteria. |
| **Design Tokens** | [`docs/design/DESIGN_SYSTEM.md`](file:///s:/Apps/donuts/docs/design/DESIGN_SYSTEM.md) | Anton & Plus Jakarta scales, colors, spacing, borders, and drips. |
| **Animations** | [`docs/design/ANIMATION_INVENTORY.md`](file:///s:/Apps/donuts/docs/design/ANIMATION_INVENTORY.md) | IX2 interaction catalog, Lottie files, Motion/Anime code snippets. |
| **Components** | [`docs/inventory/COMPONENT_INVENTORY.md`](file:///s:/Apps/donuts/docs/inventory/COMPONENT_INVENTORY.md) | Atomic and section decomposition + 5-brand reuse matrix. |
| **Asset Manifest** | [`docs/assets/ASSET_MANIFEST.md`](file:///s:/Apps/donuts/docs/assets/ASSET_MANIFEST.md) | 358 canonical assets, CDN URLs, dimensions, and licensing tiers. |
| **Technical Feasibility** | [`docs/architecture/TECHNICAL_FEASIBILITY.md`](file:///s:/Apps/donuts/docs/architecture/TECHNICAL_FEASIBILITY.md) | Next.js 15 feasibility, bundle optimization, Zustand cart store. |
| **Project Architecture** | [`docs/architecture/PROJECT_ARCHITECTURE.md`](file:///s:/Apps/donuts/docs/architecture/PROJECT_ARCHITECTURE.md) | Turborepo / Next.js workspace structure and data flow. |
| **Five-Website Plan** | [`docs/architecture/FIVE_WEBSITE_PLAN.md`](file:///s:/Apps/donuts/docs/architecture/FIVE_WEBSITE_PLAN.md) | Detailed brand identities and page combination blueprints. |
| **Quality Review** | [`docs/research/RESEARCH_VALIDATION.md`](file:///s:/Apps/donuts/docs/research/RESEARCH_VALIDATION.md) | Independent audit report and verification scores. |
| **Operational Rules** | [`AGENTS.md`](file:///s:/Apps/donuts/AGENTS.md) | Coding standards, prohibited libraries, and operational boundaries. |
| **Visual Library** | [`screenshots/`](file:///s:/Apps/donuts/screenshots/) | Captured desktop, mobile, and interaction reference images. |

---

## 3. Technology Stack & Installation Specifications

Initialize the project using Next.js 15 with Turbopack and Tailwind CSS v4:

```bash
# Recommended initialization command (when activated)
pnpm create next-app@latest apps/web --typescript --tailwind --app --use-pnpm --turbopack
```

### Approved Package Manifest:
```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "motion": "^12.0.0",
    "animejs": "^3.2.2",
    "@phosphor-icons/react": "^2.1.7",
    "zustand": "^5.0.3",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.1",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-popover": "^1.1.6"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/animejs": "^3.1.12",
    "typescript": "^5.7.0"
  }
}
```

---

## 4. Step-by-Step Implementation Sequence

Execute the implementation in six sequential phases:

```
[Phase 1: Foundation & Tokens]
       │
[Phase 2: Global Shells & Cart Drawer]
       │
[Phase 3: Core Primitives & Section Library]
       │
[Phase 4: Dynamic CMS Templates & Shop Engine]
       │
[Phase 5: Brand Configuration & Multi-Tenancy]
       │
[Phase 6: Quality Verification & Responsive Audit]
```

### Phase 1: Foundation, Tokens & Base Layout
1. Configure `globals.css` with Tailwind CSS v4 `@theme` tokens:
   - Primary: `#f54f95` (Hot Pink)
   - Secondary: `#f98000` (Orange)
   - Accent: `#eeae23` (Glaze Yellow), `#6e300f` (Crust Brown)
   - Neutral: `#1b1b1b` (Black), `#f5f6f4` (Patisserie Cream)
2. Load fonts in `app/layout.tsx` using `next/font/google`:
   ```typescript
   import { Anton, Plus_Jakarta_Sans } from 'next/font/google';
   
   export const anton = Anton({
     weight: '400',
     subsets: ['latin'],
     variable: '--font-anton',
     display: 'swap',
   });
   
   export const plusJakarta = Plus_Jakarta_Sans({
     subsets: ['latin'],
     variable: '--font-plus-jakarta',
     display: 'swap',
   });
   ```
3. Implement the canonical `DripDivider.tsx` component using the verified SVG vector path (`viewBox="0 0 1920 187.499995"`).

### Phase 2: Global Navigation & Headless Cart
1. **`GlobalHeader.tsx`:** Sticky navigation bar transitioning from transparent to solid with elevation shadow.
2. **`MegaDropdown.tsx`:** Accessible dropdown supporting the 31-item category matrix with smooth fade/slide transitions.
3. **`MobileNav.tsx`:** Slide-down drawer triggered at `< 991px` breakpoint.
4. **`cartStore.ts` & `CartDrawer.tsx`:** Headless Zustand cart store with 480px right-sidebar drawer, quantity adjustments, and empty/filled states.
5. **`GlobalFooter.tsx`:** 8-column link directory, newsletter subscription form, and SVG drip transition.

### Phase 3: Section Library (Atomic & Composites)
1. **Hero Variations (01–05):**
   - `Hero01.tsx`: 3D perspective flip headline + tri-donut floating particles.
   - `Hero02.tsx`: 9-letter cascade text reveal + split chocolate donut.
   - `Hero03.tsx`: Split hero with category pill slider.
   - `Hero04.tsx`: Angled `-32deg` fly-in with streetwear marquee ticker.
   - `Hero05.tsx`: Pop-in health-first layout with macro nutrition badges.
2. **Product Components:**
   - `ProductCard.tsx`: Flavor color wrapper, hover zoom, quick-add CTA.
   - `ProductGrid.tsx`: Responsive 3-column / 4-column product matrix.
3. **Content Sections:**
   - `TestimonialMarquee.tsx`: Continuous looping review ribbon.
   - `SubscriptionSelector.tsx`: 3-tier frequency tabs with pricing cards.
   - `FAQAccordion.tsx`: Radix-based accessible disclosure panels.
   - `StaffGrid.tsx`: Team member cards with rotating plus-badges.

### Phase 4: Dynamic CMS & Shop Templates
1. **Product Detail (`/product/[slug]`):**
   - Left column: Dynamic title, star ratings, price, box selector pills (`[ 2 ]`, `[ 4 ]`), quantity input, Add to Cart CTA, Returns/Shipping accordions, and "As seen in" press badges.
   - Center/Right: High-resolution featured donut with floating ingredient particles.
2. **All Donuts Directory (`/all-donuts`):** Complete product catalog with category filter tabs.
3. **Blog Engine (`/all-blogs`, `/blog/[slug]`, `/category/[slug]`):**
   - Responsive editorial cards with reading times and category tags.
   - Dynamic article reader with rich typography and related post recommendations.
4. **Discrepancy Resolution:** Add 301 permanent redirect in `next.config.js`:
   ```javascript
   async redirects() {
     return [
       {
         source: '/blog-categories/events',
         destination: '/blog-category/event',
         permanent: true,
       },
     ];
   }
   ```

### Phase 5: Brand Configuration & Five-Website Assembly
Assemble the 5 commercial websites in `config/brands/` using the blueprints from `FIVE_WEBSITE_PLAN.md`:

```typescript
// Example: config/brands/sprinklespree.ts
export const sprinkleSpreeBrand: BrandConfig = {
  id: 'site-01',
  name: 'SprinkleSpree',
  tagline: 'Baking Happiness in Every Bite!',
  theme: {
    primaryColor: '#f54f95',
    secondaryColor: '#eeae23',
    accentColor: '#abd1ff',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
    borderRadius: 'pill',
  },
  layoutMapping: {
    homeVariation: 1,
    aboutVariation: 5,
    contactVariation: 5,
    subscribeVariation: 3,
    whyVariation: 5,
  },
  // ... commerce, navigation, and assets
};
```

Mount each brand dynamically based on subdomain or environmental route (`NEXT_PUBLIC_BRAND_ID`).

---

## 5. Verification Checklist for Implementation Engineer

Before declaring implementation complete, verify:

- [ ] `pnpm build` executes with zero TypeScript errors and zero ESLint warnings.
- [ ] Lighthouse score: Performance >= 95, Accessibility = 100, Best Practices = 100, SEO = 100.
- [ ] No Webflow proprietary JavaScript or unapproved icon libraries are bundled.
- [ ] Cart drawer opens smoothly from header, updates quantity in Zustand, and persists across reloads.
- [ ] All 5 brand websites can be rendered without visual overlap or styling leaks.
- [ ] Responsive layouts verified at 390px (mobile), 768px (tablet), 1280px (desktop), and 1920px (ultra-wide).
- [ ] `prefers-reduced-motion` successfully disables continuous marquee and floating animations.

---

## 6. Execution Command

When the user gives the instruction to begin implementation, launch the implementation skill with:
```bash
# Target: s:\Apps\donuts\
# Reference: s:\Apps\donuts\docs\architecture\IMPLEMENTATION_HANDOFF.md
```
**Research phase is COMPLETE. Awaiting user activation.**

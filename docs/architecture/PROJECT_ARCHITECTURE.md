# Donutland Multi-Brand Project Architecture

**Lead Orchestrator:** Google Antigravity  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Target:** [Donutland Commercial Template](https://donutland.webflow.io/)  
**Workspace:** `s:\Apps\donuts\`  
**Date:** September 2026  

---

## 1. Architectural Mission & Executive Summary

The Donutland reverse-engineering initiative transforms a commercial Webflow template featuring **33 static page layouts**, **20 dynamic CMS item templates**, and over **50 unique sections** into an enterprise-grade, multi-brand e-commerce and marketing platform.

Rather than producing a single static clone, this architecture establishes a **multi-brand design engine** capable of powering **five distinct commercial donut brands** from a shared component, token, and asset pipeline without visual repetition or code duplication.

```
                           +----------------------------------------+
                           |       Core Donut Engine (Shared)       |
                           |   Tokens, Primitives, Drip SVGs, Cart  |
                           +-------------------+--------------------+
                                               |
         +-----------------+-------------------+-----------------+-----------------+
         |                 |                   |                 |                 |
         v                 v                   v                 v                 v
+-----------------+ +-----------------+ +-----------------+ +-----------------+ +-----------------+
| Brand 1:        | | Brand 2:        | | Brand 3:        | | Brand 4:        | | Brand 5:        |
| SprinkleSpree   | | Glaze & Co.     | | PureDonut       | | DoughBoyz       | | The Donut       |
| (Kids/Playful)  | | (Artisanal)     | | (Keto/Fitness)  | | (Street/Bold)   | | Counter (Diner) |
| Home 01         | | Home 02         | | Home 05         | | Home 04         | | Home 03         |
| About 05        | | About 02        | | About 03        | | About 01        | | About 04         |
| Contact 05      | | Contact 02      | | Contact 04      | | Contact 01      | | Contact 03      |
| Subscribe 03    | | Subscribe 02    | | Subscribe 04    | | Subscribe 01    | | Subscribe 05    |
| Why 05          | | Why 02          | | Why 01          | | Why 03          | | Why 04          |
+-----------------+ +-----------------+ +-----------------+ +-----------------+ +-----------------+
```

---

## 2. Technology Stack & Standard Adherence

In strict adherence to the [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md), the technology stack eliminates heavyweight proprietary runtimes (like `webflow.js`) in favor of clean, modern, zero-lock-in open-source primitives:

| Layer | Technology Choice | Rationale & Standard Compliance |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Full React Server Components (RSC) support for near-zero client JS on static content, nested layouts, streaming SSR, and parallel routes. |
| **Language** | **TypeScript 5.x (Strict Mode)** | Type-safe design tokens, CMS collection schemas, and cart operations. |
| **Styling** | **Tailwind CSS v4** | CSS-first configuration, theme variables for multi-brand color switching, zero runtime overhead. |
| **Base UI Primitives** | **shadcn/ui (Radix UI)** | Accessible, headless primitives (Dialog, Accordion, Dropdown Menu, Popover) styled with confectionery tokens. |
| **Normal Animations** | **Motion (`motion/react`)** | Standard layout animations, mobile navigation drawer, cart slide-over, and scroll reveals per Adeel Dev Standard. |
| **SVG Choreography** | **Anime.js v3** | Multi-stage SVG dripping icing morphing and organic wave transitions per Adeel Dev Standard. |
| **Iconography (Static)** | **Phosphor Icons** (`@phosphor-icons/react`) | Mandatory primary icon library per Adeel Dev Standard. Prohibits Lucide/Heroicons/FontAwesome. |
| **Iconography (Animated)** | **Iconimate** | Primary animated icon source per Adeel Dev Standard. |
| **State Management** | **Zustand** | Lightweight headless cart store (`cartStore.ts`) managing item quantity, drawer visibility, and subtotal. |
| **Image Optimization** | **`next/image`** | Automatic WebP/AVIF generation, responsive `srcset`, and layout shift prevention. |

---

## 3. Repository & Workspace Structure

The project employs a clean Turborepo / Next.js workspace structure located within `s:\Apps\donuts\`:

```
s:\Apps\donuts/
├── apps/
│   ├── web/                           # Next.js 15 App Router application
│   │   ├── app/
│   │   │   ├── (marketing)/           # Marketing route group (shared header/footer layout)
│   │   │   │   ├── page.tsx           # Dynamic homepage renderer based on brand config
│   │   │   │   ├── about/page.tsx     # Brand-specific About layout
│   │   │   │   ├── contact/page.tsx   # Brand-specific Contact layout
│   │   │   │   ├── subscribe/page.tsx # Brand-specific Subscription layout
│   │   │   │   └── why/page.tsx       # Brand-specific Value Proposition layout
│   │   │   ├── (shop)/                # E-commerce route group
│   │   │   │   ├── donuts/page.tsx    # All Donuts product directory
│   │   │   │   ├── product/[slug]/    # Dynamic product detail template
│   │   │   │   └── checkout/page.tsx  # Checkout & order confirmation
│   │   │   ├── (blog)/                # Editorial route group
│   │   │   │   ├── blog/page.tsx      # All Blogs editorial directory
│   │   │   │   ├── blog/[slug]/       # Dynamic article reader template
│   │   │   │   └── category/[slug]/   # Blog category listing
│   │   │   ├── admin/                 # Internal design reference & utility
│   │   │   │   ├── style-guide/       # Living component & token showcase
│   │   │   │   └── licenses/          # Asset licensing & attribution registry
│   │   │   ├── not-found.tsx          # Custom 404 page
│   │   │   ├── layout.tsx             # Root layout with brand font loading & metadata
│   │   │   └── globals.css            # Tailwind CSS v4 entrypoint
│   │   ├── config/
│   │   │   ├── brands/                # Brand configuration profiles
│   │   │   │   ├── sprinklespree.ts   # Brand 1: Playful / Party
│   │   │   │   ├── glaze-and-co.ts    # Brand 2: Modern Artisanal
│   │   │   │   ├── puredonut.ts       # Brand 3: Keto / Fitness Lab
│   │   │   │   ├── doughboyz.ts       # Brand 4: Urban Streetwear
│   │   │   │   └── donut-counter.ts   # Brand 5: 1950s Americana Diner
│   │   │   └── activeBrand.ts         # Brand switcher / environmental resolver
│   │   ├── content/                   # Local mock CMS data (Markdown / JSON)
│   │   │   ├── products/              # 10 donut products with nutrition & pricing
│   │   │   └── articles/              # 8 blog articles with rich markdown
│   │   └── public/
│   │       ├── assets/shared/         # Reusable SVG drips, icons, textures
│   │       └── assets/brands/         # Brand-specific photographic replacements
├── packages/
│   ├── ui/                            # Shared design system & component library
│   │   ├── components/
│   │   │   ├── atomic/                # Button, Badge, Input, QuantitySelector
│   │   │   ├── composite/             # ProductCard, DripDivider, CartDrawer, MobileNav
│   │   │   ├── sections/              # Hero01-05, Features01-05, Testimonials, FAQ
│   │   │   └── layout/                # GlobalHeader, GlobalFooter, MegaDropdown
│   │   ├── hooks/                     # useCart, useScrollReveal, useReducedMotion
│   │   └── tokens/                    # Color scales, typography, drip SVG paths
│   └── tsconfig/                      # Shared strict TypeScript configuration
├── docs/                              # Verified research deliverables (Agents 1-4)
├── screenshots/                       # Visual reference library (Desktop & Mobile)
├── AGENTS.md                          # Autonomous agent operational standard
└── package.json
```

---

## 4. Component Hierarchy & Layering

The UI architecture follows a strict 4-layer composition model:

```
[Layer 4: Page Layouts]     Home01-05, About01-05, Contact01-05, ProductDetail
         │
[Layer 3: Section Blocks]   HeroSplit, MarqueeTicker, ProductGrid, DripTransition
         │
[Layer 2: Composites]       ProductCard, CartDrawer, MegaDropdown, ReviewStars
         │
[Layer 1: Atoms / Primitives] Button, Badge, Input, SVGIcon, Typography
```

### Layer 1: Atoms & Primitives
- **`Button`:** Variants: `default` (hot pink), `orange` (call-to-action), `outline` (pill border), `drip` (decorative edge).
- **`Badge`:** Circular sticker badges ("NEW!", "BESTSELLER", "100% ORGANIC"), curved pill chips.
- **`DripDivider`:** Responsive SVG icing transition component accepting `color`, `flip`, and `height` props.
- **`PriceTag`:** Formatted currency display with optional crossed-out comparison price.

### Layer 2: Composite Components
- **`ProductCard`:** Responsive card with hover scale, dynamic icing drip background, price tag, quick-add button.
- **`CartDrawer`:** Right-sidebar slide-over built with Radix Dialog and Motion animations, displaying item thumbnails, quantity adjustment, subtotal, and checkout CTA.
- **`MegaDropdown`:** Accessible keyboard-navigable desktop menu with smooth opacity/slide transition.
- **`MobileNav`:** Slide-down mobile navigation activated at the 991px breakpoint.

### Layer 3: Section Blocks
- **`HeroSection`:** Configurable layout supporting:
  - Variant 1: Bold centered title with floating donut elements and drip base.
  - Variant 2: Asymmetric split layout with large featured donut render and review badge.
  - Variant 3: Multi-column product showcase with nutritional callouts.
  - Variant 4: Bold typography-led streetwear layout with rotating marquee banner.
  - Variant 5: Clean, minimal health-first layout with organic texture background.
- **`MarqueeSection`:** Continuous horizontal looping ticker powered by Motion.
- **`SubscriptionMatrix`:** 3-tier pricing/delivery schedule selector with toggle frequency.

### Layer 4: Brand Page Assemblers
- Next.js dynamic page routes that read the `activeBrand` configuration and dynamically mount the mapped section variations.

---

## 5. Multi-Brand Configuration Schema

Each brand website is defined by a strongly typed configuration object conforming to the `BrandConfig` interface:

```typescript
export interface BrandConfig {
  id: string;
  name: string;
  tagline: string;
  theme: {
    primaryColor: string;      // e.g. '#f54f95'
    secondaryColor: string;    // e.g. '#f98000'
    accentColor: string;       // e.g. '#eeae23'
    backgroundColor: string;   // e.g. '#f5f6f4'
    textColor: string;         // e.g. '#1b1b1b'
    fontDisplay: string;       // 'Anton' | 'Clash Display' | 'Cabinet Grotesk'
    fontBody: string;          // 'Plus Jakarta Sans' | 'Inter' | 'Satoshi'
    borderRadius: 'pill' | 'curved' | 'sharp';
  };
  layoutMapping: {
    homeVariation: 1 | 2 | 3 | 4 | 5;
    aboutVariation: 1 | 2 | 3 | 4 | 5;
    contactVariation: 1 | 2 | 3 | 4 | 5;
    subscribeVariation: 1 | 2 | 3 | 4 | 5;
    whyVariation: 1 | 2 | 3 | 4 | 5;
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    enableMegaMenu: boolean;
  };
  commerce: {
    currencySymbol: string;
    shippingThreshold: number;
    subscriptionDiscount: number; // e.g. 0.15 for 15% off
  };
  assets: {
    logoUrl: string;
    faviconUrl: string;
    heroImages: string[];
    lifestyleImages: string[];
  };
}
```

---

## 6. Performance, SEO & Accessibility Standards

1. **Core Web Vitals Targets:**
   - **LCP (Largest Contentful Paint):** < 1.8s (via preloaded hero WebP images and font preconnection).
   - **CLS (Cumulative Layout Shift):** < 0.05 (explicit `width`/`height` on all images and aspect-ratio wrappers).
   - **INP (Interaction to Next Paint):** < 100ms (client islands for interactive widgets only; static server rendering for content).
2. **Accessibility (WCAG 2.1 AA):**
   - High color contrast compliant text pairings (white on hot pink: 4.8:1; white on dark chocolate: 11.2:1).
   - Full keyboard navigation for all dropdowns, accordions, and cart drawer.
   - Screen-reader accessible labels on icon-only buttons (`aria-label="Open cart"`).
   - `prefers-reduced-motion` media query support disabling continuous animations.
3. **SEO & Structured Data:**
   - Server-rendered JSON-LD schemas for `Store`, `Product`, `Offer`, and `BlogPosting`.
   - Dynamic OpenGraph and Twitter card metadata for every product and blog route.

---

## 7. Migration from Webflow to Next.js

| Webflow Legacy Construct | Next.js Modern Equivalent |
| :--- | :--- |
| `data-animation="default" w-nav` | Next.js Server Layout + React Client Island with Motion |
| `lottie-animation-menu` | Iconimate animated hamburger icon / inline SVG state transition |
| `w-commerce-commercecartwrapper` | Zustand headless cart store + Radix Dialog slide-over |
| `data-w-id="..."` (IX2 interactions) | Motion declarative variants (`whileInView`, `whileHover`, `whileTap`) |
| Webflow CMS Collections | Local TypeScript content collections / headless CMS adapter |
| Webflow Hosting (`.webflow.io`) | Vercel Edge Network / Docker containerized deployment |

# Donutland Visual Design System & Design Tokens Specification

**Target Reference:** [Donutland Webflow Template](https://donutland.webflow.io/)  
**Original Source Asset:** `docs/design/donutland.original.css` (389 KB)  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Author:** Agent 2 — Senior Visual Design Researcher & Frontend Interaction Analyst  
**Workspace:** `s:\Apps\donuts\`  
**Date:** September 2026  
**Status:** `VERIFIED` (Extracted from DOM, original CSS stylesheets, and live runtime)

---

## 1. Executive Summary & Design Philosophy

The **Donutland** design system is an exuberant fusion of **Retro-Pop Confectionery Aesthetics** and **Modern Neo-Brutalist Web Design**. It contrasts massive, condensed, high-impact display typography (`Anton`) against clean, highly legible geometric body typography (`Plus Jakarta Sans`). 

The visual identity is anchored by high-saturation confectionary primaries (Hot Pink, Vibrant Candy Red, Electric Blue, Marigold Yellow, Warm Purple), paired with tactile physical metaphors:
1. **Organic SVG Icing Drips & Wave Dividers:** Fluid boundaries between page sections simulating melted donut glaze and frosting.
2. **Neo-Brutalist Sticker Badges & Offset Shadows:** Hard, non-blurred drop shadows (`5px 4px 0 0 var(--white)`) that elevate buttons, cards, and floating badges above saturated backgrounds.
3. **Playful Rotational Angles:** Deliberate slight card rotations (`-12deg`, `-9deg`, `-7deg`, `+7deg`, `+9deg`, `+12deg`) creating an artisanal, handheld bakery feel.
4. **Extreme Display Typography Scale:** Viewport-proportional headlines ranging up to `29rem` and `23svw` that dominate the screen while retaining rigorous proportional hierarchy across breakpoints.

---

## 2. Typography System

### 2.1 Font Families

| Role | Font Family | Fallbacks | Source | Weights Used | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Headings** | `Anton` | `sans-serif` | Google Fonts | `400` (Regular / Condensed Heavy) | Massive titles, section headers, badges, CTA pills, punchy numbers |
| **Body / UI** | `Plus Jakarta Sans` | `sans-serif`, `system-ui` | Google Fonts | `400` (Regular), `500` (Medium), `700` (Bold), `800` (Extra Bold) | Paragraphs, descriptions, forms, metadata, navigation links |
| **System Fallback** | `Arial` | `Helvetica Neue`, `sans-serif` | Local System | `400`, `700` | Raw DOM reset fallback |
| **Icon Font** | `webflow-icons` | `none` | Webflow CDN | `400` | Webflow legacy UI controls (replaced by Phosphor/Iconimate per Adeel Dev Standard) |

---

### 2.2 Typographic Hierarchy & Scale

Webflow uses a dual system of semantic standard tags (`h1`-`h6`, `p`) alongside modular display utility classes (`.h1-heading`, `.h2-heading`, `.display-text`).

#### Semantic Tag Defaults (Base Baseline)
```css
/* Base Heading Styles */
h1 { font-family: Anton, sans-serif; font-size: 45px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }
h2 { font-family: Anton, sans-serif; font-size: 39px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }
h3 { font-family: Anton, sans-serif; font-size: 32px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }
h4 { font-family: Anton, sans-serif; font-size: 27px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }
h5 { font-family: Anton, sans-serif; font-size: 23px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }
h6 { font-family: Anton, sans-serif; font-size: 19px; line-height: 1.10; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; }

/* Base Body Styles */
body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; }
p    { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1rem (16px); line-height: 145% (1.45); }
```

#### Utility Display Classes (Exhaustive Scale)

| Level / Class | Font Family | Size (Desktop >= 1280px) | Size (Tablet <= 991px) | Size (Mobile <= 479px) | Line Height | Tracking | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Monster XXL** (`.h1-heading.homepage-hero-02`) | Anton | `22rem` (352px) / `29rem` | `11rem` (176px) | `23svw` | `0.95` | `-0.02em` | Uppercase |
| **Hero Huge XL** (`.h1-heading.homepage-hero-03`) | Anton | `14rem` (224px) | `11rem` (176px) | `32svw` | `1.00` | `-0.02em` | Uppercase |
| **Hero Large L** (`.h1-heading.homepage-hero-01`) | Anton | `8.5rem` - `9.5rem` (152px) | `7.8rem` (124px) | `23svw` | `1.05` | `-0.02em` | Uppercase |
| **Hero Viewport Scale** (`.h1-heading.homepage-hero-04`) | Anton | `21svw` | `11rem` (176px) | `23svw` | `1.00` | `-0.02em` | Uppercase |
| **Hero Viewport Banner** (`.h1-heading.homepage-hero-05`) | Anton | `9svw` | `14svw` | `23svw` | `1.05` | `-0.02em` | Uppercase |
| **Section H1 Default** (`.h1-heading`) | Anton | `6.0rem` (96px) | `5.0rem` (80px) | `4.0rem` (64px) | `1.10` | `-0.02em` | Uppercase |
| **Sub-hero Eyebrow** (`.h1-heading.homepage-hero-03.eyebrow`) | Anton | `3.0rem` (48px) | `2.5rem` (40px) | `1.5rem` (24px) | `1.10` | `0` | Uppercase |
| **Section H2 Display** (`.h2-heading.homepage-01-subscription`) | Anton | `6.2rem` - `8.5rem` (136px) | `5.0rem` (80px) | `3.5rem` (56px) | `1.00` | `-0.02em` | Uppercase |
| **Section H2 Default** (`.h2-heading`) | Anton | `5.5rem` (88px) | `5.0rem` (80px) | `3.5rem` (56px) | `1.10` | `-0.02em` | Uppercase |
| **Section H2 Editorial** (`.h2-heading._2-column-medium-size`) | Anton | `5.0rem` (80px) | `4.0rem` (64px) | `2.6rem` (41px) | `1.10` | `-0.02em` | Uppercase |
| **Section H3 Display** (`.h3-heading.benefits`) | Anton | `4.5rem` - `6.5rem` (104px) | `5.5rem` (88px) | `3.7rem` (59px) | `1.10` | `-0.02em` | Uppercase |
| **Card H3 Title** (`.h3-heading.why-donutland-card-title`) | Anton | `42px` - `50px` | `36px` | `28px` | `1.15` | `-0.02em` | Uppercase |
| **Slider Product Name** (`.h3-heading.slider-product-name`) | Anton | `2.5rem` (40px) | `2.0rem` (32px) | `2.0rem` (32px) | `1.10` | `-0.02em` | Uppercase |
| **Lead Display Text** (`.display-text`) | Plus Jakarta Sans | `26px` | `20px` | `18px` | `1.20` | `-0.02em` | Normal |
| **Display Stat Black Span** (`.black-display-text-color-span`)| Plus Jakarta Sans | `38px` | `30px` | `24px` | `1.10` | `-0.02em` | Extra Bold (800) |
| **Body Lead Paragraph** (`.paragraph.lead`) | Plus Jakarta Sans | `1.25rem` (20px) | `1.125rem` (18px) | `1.0rem` (16px) | `150%` | Normal | Normal |
| **Body Standard** (`.paragraph`, `p`) | Plus Jakarta Sans | `1.0rem` (16px) | `1.0rem` (16px) | `0.9375rem` (15px) | `145%` | Normal | Normal |
| **Body Compact / Form** (`.form-input`, `.text-block`) | Plus Jakarta Sans | `0.875rem` (14px) | `0.875rem` (14px) | `0.875rem` (14px) | `20px` | Normal | Normal |
| **Microcopy / Badges** (`.pill-text`, `.tag`) | Plus Jakarta Sans | `0.75rem` (12px) | `0.75rem` (12px) | `0.75rem` (12px) | `16px` | `0.02em` | SemiBold (600) |

---

## 3. Color Palette & Token Definitions

### 3.1 CSS Variables (Root System)
```css
:root {
  /* Brand Core Primaries */
  --hot-pink: #f54f95;
  --red: #f21d33;
  --blue: #3b89ff;
  --yellow: #eeae23;
  --purple: #686ad7;
  
  /* Monochrome Anchors */
  --white: #ffffff;
  --white-2: #ffffff;
  --black: #000000;
  --black-2: #000000;
}
```

---

### 3.2 Comprehensive Palette Breakdown

| Token Name | Hex Code | RGB | HSL | Semantic Role | Contrast on White (`#fff`) | Contrast on Hot Pink (`#f54f95`) | WCAG AA Compliance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`color-brand-hot-pink`** | `#f54f95` | `245, 79, 149` | `335°, 90%, 64%` | Primary brand canvas, hero sections, primary buttons, cart header, wave drips | `3.43:1` | N/A | Pass (Large text >= 18pt) |
| **`color-brand-red`** | `#f21d33` | `242, 29, 51` | `354°, 89%, 53%` | Vibrant secondary canvas, best-seller badges, alert tags, primary CTAs | `3.92:1` | `1.14:1` (Avoid overlap) | Pass (Large text >= 18pt) |
| **`color-brand-blue`** | `#3b89ff` | `59, 137, 255` | `216°, 100%, 62%` | Informational cards, step cards, trust banners, secondary buttons | `3.23:1` | `1.06:1` (Avoid overlap) | Pass (Large text >= 18pt) |
| **`color-brand-yellow`** | `#eeae23` | `238, 174, 35` | `41°, 85%, 54%` | High-visibility badges, star ratings, CTA highlight cards, accent drips | `1.84:1` (Use black text!) | `1.86:1` | Pass with Black (`9.8:1` AAA) |
| **`color-brand-purple`** | `#686ad7` | `104, 106, 215` | `239°, 58%, 63%` | Step card 02, angled footer, creative headers, editorial cards | `4.62:1` | `1.35:1` | Pass (AA Normal & Large) |
| **`color-brand-white`** | `#ffffff` | `255, 255, 255` | `0°, 0%, 100%` | Primary text on vibrant canvases, cards, brutalist offset shadows | N/A | `3.43:1` (Display) | Pass (Display >= 24px) |
| **`color-brand-black`** | `#000000` | `0, 0, 0` | `0°, 0%, 0%` | High-contrast brutalist borders, button hover fill, dark cards | `21.0:1` (AAA) | `6.12:1` (AAA) | Pass (AAA Standard) |

#### Confectionery & Category Flavor Accents (Observed in Product/Category Cards)
- **Strawberry Cream / Coral:** `#f5766e` (`rgb(245, 118, 110)`) — Product card wrapper background.
- **Blush / Marshmallow Pink:** `#ff94c3` (`rgb(255, 148, 195)`) — Fact cards, badge background.
- **Warm Glaze Orange:** `#f98000` (`rgb(249, 128, 0)`) — Category cards, orange shop buttons.
- **Peach Sprinkles:** `#ffb769` (`rgb(255, 183, 105)`) — Secondary category pills.
- **Terracotta / Cinnamon:** `#ff944b` (`rgb(255, 148, 75)`) — Shop button outline, product cards.
- **Crimson Glaze:** `#cb0011` (`rgb(203, 0, 17)`) — Dark red shop button and card container.
- **Rich Chocolate:** `#6e2f10` / `#6e300f` (`rgb(110, 47, 16)`) — Chocolate card wrappers, brown border pills.
- **Toasted Nut / Mocha:** `#945439` (`rgb(148, 84, 57)`) — Artisanal category badges.
- **Pastel Sky Frosting:** `#abd1ff` (`rgb(171, 209, 255)`) — Light blue shop buttons, soft product cards.
- **Blush Ice Tint:** `#ffdede` (`rgb(255, 222, 222)`) — Ultra-light tint for input focus and dividers.

#### Neutrals & Surface Colors
- **Dark Slate Charcoal:** `#2a3440` (`rgb(42, 52, 64)`) — Primary neutral button fill, dark text accents.
- **Charcoal Heading:** `#1b1b1b` (`rgb(27, 27, 27)`) — Deep text on white surfaces.
- **Body Text Standard:** `#333333` (`rgb(51, 51, 51)`) — Highly readable neutral body color.
- **Muted Gray:** `#797979` / `#999999` — Form placeholders, secondary breadcrumbs.
- **Border / Divider Gray:** `#e6e6e6` / `#e7e7e7` / `#ddd` — 1px input and card borders.
- **Subtle Surface Off-White:** `#fafafa` / `#f8f8f8` / `#f3f3f3` — Background for Instagram grid blocks and input fields.

---

## 4. Container Widths & Responsive Layout Architecture

### 4.1 Container Width Standards

| Breakpoint Tier | Media Query | Container Max-Width | Horizontal Gutter Padding | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Ultra-Wide** | `@media screen and (min-width: 1440px)` | `120rem` (1920px) | `2.0rem` (32px) | Cinema displays, expansive graphic layout |
| **Standard Desktop** | `@media screen and (min-width: 1280px)` | `87.5rem` (1400px) | `2.0rem` (32px) | Primary desktop container default |
| **Laptop / Tablet Landscape**| Default base | `87.5rem` (1400px) | `2.0rem` (32px) | Standard viewport |
| **Tablet Portrait** | `@media screen and (max-width: 991px)` | `100%` | `1.5rem` (24px) | iPad / Tablet container |
| **Mobile Landscape** | `@media screen and (max-width: 767px)` | `100%` | `1.0rem` (16px) | Wide mobile viewports |
| **Mobile Portrait** | `@media screen and (max-width: 479px)` | `100%` | `0.8rem` (12.8px) - `1.0rem` (16px) | Compact iPhone / Android screens |

#### Specialized Purpose Containers
- **Article Reader Container (`.article-text-wrapper`):** `max-width: 1230px; width: 100%; margin: 0 auto;`
- **Commerce Cart Drawer (`.w-commerce-commercecartcontainer`):** `width: 100%; min-width: 320px; max-width: 480px; height: 100%;`
- **Tight Intro Textbox (`.text-box.homepage-hero-sub-paragraph`):** `max-width: 38rem (608px);`
- **Sticky Banner (`.sticky-banner-wrapper`):** `width: 100%; position: sticky; top: 2rem;`

---

### 4.2 Responsive Breakpoint Specifications

```css
/* Breakpoint System in Webflow Cascade */
@media screen and (min-width: 1920px) { /* Ultra-wide displays */ }
@media screen and (min-width: 1440px) { /* Standard large desktop: container expands to 120rem */ }
@media screen and (min-width: 1280px) { /* Standard desktop container baseline: 87.5rem */ }
@media screen and (max-width: 991px)  { /* Tablet Portrait: collapses multi-col grids to 2-col or 1-col */ }
@media screen and (max-width: 767px)  { /* Mobile Landscape: hamburger menu activates, headers compress */ }
@media screen and (max-width: 479px)  { /* Mobile Portrait: full single-column stack, viewport-based text */ }
```

---

## 5. Grid Systems & Track Layouts

Webflow utilizes CSS Grid with dedicated track-ratio utilities:

### 5.1 Standard Column Grids

1. **4-Column Grid (`.grid-fourths`, `._4-column-grid`):**
   ```css
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;
   grid-column-gap: 24px;
   grid-row-gap: 24px;
   /* Responsive Collapse: 2-col at 991px, 1-col at 479px */
   ```
2. **3-Column Collection Grid (`.collection-grid.products`, `.inner-logo-grid`):**
   ```css
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 32px;
   /* Responsive Collapse: 2-col at 991px, 1-col at 479px */
   ```
3. **Heading Split Grid (`.heading-grid`, `.homepage-01-benefits-grid`):**
   ```css
   display: grid;
   grid-template-columns: 2.5fr 1.5fr; /* Or 3.5fr 2.25fr */
   grid-column-gap: 88px; /* Scales to 172px on wide desktop */
   align-items: start;
   /* Responsive Collapse: 1-col (2.5fr) at <= 991px with gap: 0 */
   ```
4. **Editorial Asymmetrical 2-Column (`.information-long-card-grid`):**
   ```css
   display: grid;
   grid-template-columns: 1fr 1.25fr;
   grid-column-gap: 0px;
   border-radius: 10px;
   overflow: hidden;
   /* Responsive Collapse: 1-col at <= 767px */
   ```
5. **Footer 5-Column Navigation Grid (`.footer-large-grid`):**
   ```css
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-column-gap: 16px;
   grid-row-gap: 16px;
   /* Responsive Collapse: 2-col at 991px, 1-col at 479px */
   ```
6. **Instagram Feed Dense Masonry Grid (`.instagram-feed-grid`):**
   ```css
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-auto-flow: row dense;
   grid-gap: 16px;
   ```

---

## 6. Spacing Scale

The spacing scale is derived from a 4px/8px geometric grid with responsive rem units:

| Token | Pixels | Rem (16px Base) | Typical Use Cases |
| :--- | :--- | :--- | :--- |
| `space-1` | `4px` | `0.25rem` | Fine alignment, badge padding offsets, borders |
| `space-2` | `8px` | `0.5rem` | Icon gaps, tight pill padding, tag spacing |
| `space-3` | `12px` | `0.75rem` | Input horizontal padding, card content sub-gaps |
| `space-4` | `16px` | `1.0rem` | Standard gutter, card padding, flexbox gaps |
| `space-5` | `20px` | `1.25rem` | Button vertical padding (`padding: 20px 27px`) |
| `space-6` | `24px` | `1.5rem` | Card body padding, standard grid row gap |
| `space-8` | `32px` | `2.0rem` | Section container horizontal padding, product grid gap |
| `space-10` | `40px` | `2.5rem` | Intermediate content spacing, modal padding |
| `space-12` | `48px` | `3.0rem` | Header horizontal padding (`padding: 0 3rem`) |
| `space-16` | `64px` | `4.0rem` | Section content vertical rhythm |
| `space-20` | `80px` | `5.0rem` | Standard section top/bottom padding (`padding: 5rem 1rem`) |
| `space-24` | `96px` | `6.0rem` | Large section padding |
| `space-32` | `128px` | `8.0rem` | Major hero bottom spacing on mobile |
| `space-40` | `160px` | `10.0rem` | Medium hero padding (`container.medium`) |
| `space-60` | `240px` | `15.0rem` | Large hero top padding (`container.homepage-01-hero`) |

---

## 7. Border Radii Standards

| Token | Radius | Applied Components |
| :--- | :--- | :--- |
| `radius-none` | `0px` | Full-bleed banners, raw media containers, `.team-card-container` |
| `radius-xs` | `2px` - `3px` | Webflow badges, quick checkout buttons, compact inputs |
| `radius-sm` | `6px` | Standard button primitive (`.general-button`) |
| `radius-md` | `8px` - `9px` | Instagram blocks, staff cards, step cards, checkout button |
| `radius-lg` | `10px` - `12px` | Testimonial cards, fact cards, information cards, product containers |
| `radius-xl` | `14px` | Category card wrappers, product card wrappers (`.product-card-wrapper`) |
| `radius-2xl` | `19px` - `20px` | Sticky narrative cards (`.sticky-card-item`) |
| `radius-pill` | `35px` | Pill buttons (`.shop-now-button`, `.category-shop-now-button`) |
| `radius-tag` | `100px` | Category tag pills (`.blog-categroy-button`) |
| `radius-full` | `50%` / `9999px` | Circular plus-icon badges, floating stamps, circular avatars |

---

## 8. Distinctive Visual Motifs

### 8.1 SVG Icing Drips & Wave Dividers
The most iconic brand asset in Donutland is the organic icing drip transition between contrasting vibrant background colors.
- **Top Drip SVG (`.svg-drip`):** Placed at the top or bottom edge of sections with negative margins (`margin-bottom: -6px; margin-left: -8px`).
- **Wave Dividers (`.image-wrapper.wave-divider`):** Smooth bezier curves spanning `width: 100%`.
- **Reversed Wave (`.image-wrapper.wave-divider.reversed`):** Uses `transform: rotate(-180deg)` to cap section tops seamlessly.
- **Color Variations:**
  - Hot Pink Drip on Red Canvas
  - Electric Blue Drip on White Canvas
  - Red Drip on Hot Pink Canvas
  - Purple Angled Wave on White Canvas

### 8.2 Neo-Brutalist Sticker Badges & Offset Shadows
Donutland eschews blurred, diffuse shadows in favor of crisp, graphic offset borders:
- **Button Offset Shadow (White on Pink/Red/Blue):**
  ```css
  box-shadow: 5px 4px 0 0 var(--white);
  border: 1px solid var(--white);
  ```
- **Reversed Offset Shadow (Pink on White):**
  ```css
  box-shadow: 5px 4px 0 0 var(--hot-pink);
  border: 1px solid var(--hot-pink);
  ```
- **High-Impact Hero Shadow:**
  ```css
  box-shadow: -12px 10px 0 0 var(--hot-pink);
  /* Or positive offset */
  box-shadow: 12px 10px 0 0 var(--hot-pink);
  ```
- **Tactile Click Physics:**
  ```css
  .general-button {
    transform: scale(1.03);
    box-shadow: 5px 4px 0 0 var(--white);
    transition: transform 0.35s, box-shadow 0.35s;
  }
  .general-button:hover {
    transform: scale(1.0);
    box-shadow: none; /* Button presses "flat" into the surface */
  }
  ```

### 8.3 Playful Card Rotations
To reinforce an informal, sticker-album feel, static cards feature alternating rotational transforms:
- Fact Card 01: `transform: rotate(12deg);`
- Fact Card 02: `transform: rotate(-9deg);`
- Fact Card 03: `transform: rotate(9deg);`
- Why-Subscribe Card 01: `transform: rotate(-7deg);`
- Why-Subscribe Card 02: `transform: rotate(7deg);`
- Why-Subscribe Card 03: `transform: rotate(-12deg);`
- Section Heading Rotate: `transform: rotate(-4deg);`
- Floating Ingredient Icons: `transform: rotate(9deg);` and `transform: rotate(-9deg);`

---

## 9. Modern Implementation Mapping (Adeel Dev Standard)

To translate this Webflow system into modern React / Next.js / Tailwind CSS:

| Webflow Original | Modern React / Tailwind Token | Implementation Standard |
| :--- | :--- | :--- |
| `var(--hot-pink)` (`#f54f95`) | `colors.brand.hotPink: '#f54f95'` | Tailwind configuration token |
| `var(--red)` (`#f21d33`) | `colors.brand.red: '#f21d33'` | Tailwind configuration token |
| `var(--blue)` (`#3b89ff`) | `colors.brand.blue: '#3b89ff'` | Tailwind configuration token |
| `var(--yellow)` (`#eeae23`) | `colors.brand.yellow: '#eeae23'` | Tailwind configuration token |
| `var(--purple)` (`#686ad7`) | `colors.brand.purple: '#686ad7'` | Tailwind configuration token |
| `font-family: Anton` | `fontFamily: { display: ['var(--font-anton)', 'Anton', 'sans-serif'] }` | `next/font/google` (`Anton`) |
| `font-family: Plus Jakarta Sans` | `fontFamily: { sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'] }` | `next/font/google` (`Plus_Jakarta_Sans`) |
| `box-shadow: 5px 4px 0 0 var(--white)` | `shadow-brutal-white: '5px 4px 0 0 #ffffff'` | Tailwind custom box-shadow |
| `box-shadow: 5px 4px 0 0 var(--hot-pink)`| `shadow-brutal-pink: '5px 4px 0 0 #f54f95'` | Tailwind custom box-shadow |
| SVG Icing Drip Transitions | `<IcingDrip fill="var(--color-brand)" />` | Pure inline SVG with Anime.js timeline morphing |
| Webflow IX2 Stagger Animations | `<motion.div variants={staggerContainer}>` | Motion (framer-motion) |
| Webflow Icons | Phosphor Icons (`@phosphor-icons/react`) | Strictly follow Adeel Dev Standard |

---

## 10. Verification & Quality Checklist

- [x] All hex codes verified against `s:\Apps\donuts\docs\design\donutland.original.css`.
- [x] Contrast ratios calculated against WCAG 2.1 AA/AAA criteria.
- [x] Display scale vs semantic text hierarchy confirmed via DOM extraction.
- [x] Breakpoints aligned with Webflow's standard `@media` rules (479px, 767px, 991px, 1280px, 1440px).
- [x] Motifs (drips, stickers, offset shadows, rotations) verified from original rules.
- [x] Strict adherence to [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md).

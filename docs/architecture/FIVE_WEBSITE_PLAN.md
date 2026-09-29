# Five-Website Implementation & Brand Assembly Plan

**Lead Orchestrator:** Google Antigravity  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Target Template:** [Donutland Commercial Template](https://donutland.webflow.io/)  
**Workspace:** `s:\Apps\donuts\`  
**Date:** September 2026  

---

## 1. Executive Strategy & Rationale

A primary business requirement is to leverage the 25 discovered page variations (5 Home, 5 About, 5 Contact, 5 Subscribe, 5 Why Donutland) plus shared shop and blog modules to generate **five distinct, commercially viable donut brand websites**.

### Anti-Pattern Avoidance:
1. **Never match purely by index:** Grouping `Home 01 + About 01 + Contact 01 + Subscribe 01 + Why 01` creates severe structural and tonal inconsistencies (e.g. Home 01 is maximalist tri-donut, while Contact 01 is an urban card grid).
2. **Never repeat visual personalities:** Each of the five websites must cater to a distinct demographic, market positioning, and visual aesthetic.
3. **Preserve single code engine:** All five brands share the underlying Next.js 15 / Tailwind CSS v4 component library in `packages/ui/`, differing only through typed configuration profiles (`BrandConfig`).

---

## 2. Five Brand Archetypes & Page Combination Matrix

| Brand Archetype | Target Demographic | Selected Page Combination | Primary Palette | Key Design Motifs |
| :--- | :--- | :--- | :--- | :--- |
| **Site 1: SprinkleSpree**<br>*(Playful / Kids & Parties)* | Families, birthday events, youth culture, confectionery lovers | **Home 01**<br>**About 05**<br>**Contact 05**<br>**Subscribe 03**<br>**Why 05** | Hot Pink (`#f54f95`)<br>Glaze Yellow (`#eeae23`)<br>Sky Blue (`#abd1ff`) | Massive 3D flying donuts, organic SVG dripping icing dividers, sticker badges, confetti physics. |
| **Site 2: Glaze & Co.**<br>*(Artisanal Gourmet Patisserie)* | Culinary enthusiasts, upscale foodies, corporate catering | **Home 02**<br>**About 02**<br>**Contact 02**<br>**Subscribe 02**<br>**Why 02** | Dark Chocolate (`#6e2f10`)<br>Warm Mocha (`#945439`)<br>Cream Off-White (`#f5f6f4`) | Elegant letter-by-letter cascade reveals, organic wave dividers, ingredient storytelling, editorial typography. |
| **Site 3: PureDonut / KetoKreme**<br>*(Keto, Vegan & Fitness Lab)* | Health-conscious, gluten-free, keto, athletes, clean-eating | **Home 05**<br>**About 03**<br>**Contact 04**<br>**Subscribe 04**<br>**Why 01** | Crisp White (`#ffffff`)<br>Sage / Mint Green (`#1ac500`)<br>Slate Charcoal (`#2a3440`) | Clean negative space, macro nutritional tables, pop-in card animations, transparent ingredient sourcing. |
| **Site 4: DoughBoyz**<br>*(Urban Streetwear & Skate Donut Bar)* | Gen Z, skaters, late-night cafe scene, streetwear fashion | **Home 04**<br>**About 01**<br>**Contact 01**<br>**Subscribe 01**<br>**Why 03** | Crimson Red (`#f21d33`)<br>Matte Black (`#1b1b1b`)<br>Glaze Orange (`#f98000`) | Extreme angled fly-ins (`-32deg`), marquee tickers, neo-brutalist offset borders, bold sticker badges. |
| **Site 5: The Donut Counter**<br>*(1950s Americana Diner & Franchise)* | Heritage patrons, breakfast crowd, traditionalists, franchise | **Home 03**<br>**About 04**<br>**Contact 03**<br>**Subscribe 05**<br>**Why 04** | Americana Blue (`#3b89ff`)<br>Honey Gold (`#eeae23`)<br>Warm Vanilla (`#fff5ea`) | Split hero showcase, horizontal category pill sliders, multi-location store finder, vintage diner badges. |

---

## 3. Deep Brand Profiles & Architectural Specifications

### Brand 1: SprinkleSpree (Playful & Party Confectionery)
- **Tagline:** *"Baking Happiness in Every Bite!"*
- **Target Audience:** Families, children's parties, sweet treat enthusiasts.
- **Design Tokens:**
  - Font Display: `Anton` (400, tight tracking)
  - Font Body: `Plus Jakarta Sans` (500)
  - Primary Color: `#f54f95` (Hot Pink)
  - Secondary Color: `#eeae23` (Glaze Yellow)
  - Surface: `#ffffff` with `#ffdede` soft pink accents
  - Border Radius: Full pill (`9999px`) and rounded cards (`24px`)
- **Page Assembly Rationale:**
  - **Home 01:** Features the iconic 3D perspective flip-up headline and three multi-directional flying donuts (`rotateX` reveal). Sets an immediate high-energy, fun tone.
  - **About 05:** Includes high-saturation team member cards with playful rotating plus-badges and celebration timelines.
  - **Contact 05:** Interactive party catering and wholesale request form with playful emoji-like iconography.
  - **Subscribe 03:** "Donut of the Month" celebration box with 3-step illustrated unboxing process.
  - **Why 05:** Playful stat counters ("100,000+ Sprinkles Spread Daily") and interactive flavor quiz CTA.

---

### Brand 2: Glaze & Co. (Artisanal Gourmet Patisserie)
- **Tagline:** *"Crafted with Sourdough, Glazed with Passion."*
- **Target Audience:** Gourmet food lovers, specialty coffee aficionados, luxury event planners.
- **Design Tokens:**
  - Font Display: `Anton` (used sparingly in high tracking `0.05em`) / `Cabinet Grotesk`
  - Font Body: `Plus Jakarta Sans` (400 light / regular)
  - Primary Color: `#6e2f10` (Dark Belgian Chocolate)
  - Secondary Color: `#945439` (Warm Hazelnut)
  - Accent Color: `#ffb769` (Peach Glaze)
  - Surface: `#f5f6f4` (Warm Patisserie Cream)
  - Border Radius: Subtle curves (`8px` to `12px`), refined borders
- **Page Assembly Rationale:**
  - **Home 02:** Opens with a sophisticated 9-letter cascading reveal (`.letter-d` through `.letter-d`) and scroll-driven rotating ingredients.
  - **About 02:** Focuses on master baker credentials, sourdough fermentation timelines, and ethically sourced single-origin cacao.
  - **Contact 02:** Concierge catering inquiry form with appointment scheduling and tasting requests.
  - **Subscribe 02:** Executive monthly patisserie box featuring seasonal chef collections and wine pairing notes.
  - **Why 02:** Detailed comparison matrix highlighting 48-hour slow fermentation versus commercial fast-fry methods.

---

### Brand 3: PureDonut / KetoKreme (Health, Keto & Fitness Lab)
- **Tagline:** *"Zero Guilt. 100% Flavor. Keto & Gluten-Free."*
- **Target Audience:** Fitness enthusiasts, keto practitioners, diabetics, clean-eating athletes.
- **Design Tokens:**
  - Font Display: `Anton` (clean uppercase)
  - Font Body: `Plus Jakarta Sans` (ultra-clean geometric)
  - Primary Color: `#1ac500` (Organic Chlorophyll Green)
  - Secondary Color: `#2a3440` (Scientific Slate)
  - Accent Color: `#3898ec` (Hydration Blue)
  - Surface: `#ffffff` with `#f9fafb` ultra-clean card backgrounds
  - Border Radius: Technical radius (`16px`) with micro-borders (`1px solid #e6e6e6`)
- **Page Assembly Rationale:**
  - **Home 05:** Macro-focused layout with floating protein metrics ("2g Net Carbs", "15g Protein", "Zero Sugar") and clean scale-in animation.
  - **About 03:** Food science lab origin story, certifications (Keto Certified, Non-GMO, Gluten-Free), and nutritionist endorsements.
  - **Contact 04:** Streamlined support form with FAQ tabs regarding allergen safety and macro breakdowns.
  - **Subscribe 04:** Weekly gym & fitness recurring delivery bundle with calorie macro calculator.
  - **Why 01:** Scientific ingredient breakdown comparing almond flour and monk fruit against bleached white flour and high fructose corn syrup.

---

### Brand 4: DoughBoyz (Urban Streetwear & Skate Donut Bar)
- **Tagline:** *"Late Night Glaze. Streetwear Appetite."*
- **Target Audience:** Skaters, university students, midnight snackers, streetwear culture.
- **Design Tokens:**
  - Font Display: `Anton` (ultra-bold, condensed, negative tracking `-0.03em`)
  - Font Body: `Plus Jakarta Sans` (bold weights 700/800)
  - Primary Color: `#f21d33` (Streetwear Crimson)
  - Secondary Color: `#1b1b1b` (Matte Black)
  - Accent Color: `#f98000` (Safety Orange)
  - Surface: `#1b1b1b` (Dark Mode default or high-contrast stark white/black)
  - Border Radius: Sharp neo-brutalist cuts (`4px`) with heavy `3px` solid black borders and `5px 4px` offset hard drop-shadows
- **Page Assembly Rationale:**
  - **Home 04:** Extreme angled fly-in animation (`-32deg` tilt) with snapping photo cutouts and looping horizontal marquee.
  - **About 01:** Underground garage bakery origins, skate team collaborations, and pop-up tour history.
  - **Contact 01:** Location card grid with embedded Google Maps markers for late-night food truck drops.
  - **Subscribe 01:** "Drop Club" limited-edition merchandise and donut box drops with countdown timers.
  - **Why 03:** Provocative anti-corporate manifesto with grunge sticker badges and raw typography.

---

### Brand 5: The Donut Counter (1950s Americana Diner & Franchise)
- **Tagline:** *"Serving American Comfort Since 1958."*
- **Target Audience:** Families, commuters, coffee-and-donut regulars, commercial franchise investors.
- **Design Tokens:**
  - Font Display: `Anton` (classic billboard Americana styling)
  - Font Body: `Plus Jakarta Sans` (friendly, legible 400/500)
  - Primary Color: `#3b89ff` (Americana Diner Blue)
  - Secondary Color: `#eeae23` (Golden Glaze)
  - Accent Color: `#f21d33` (Cherry Red)
  - Surface: `#fff5ea` (Warm Diner Vanilla Milkshake)
  - Border Radius: Classic pill buttons and rounded window cards
- **Page Assembly Rationale:**
  - **Home 03:** Split hero layout with horizontal category pill slider and prominent "Order Coffee & Box" combo CTA.
  - **About 04:** Archival diner photography, family recipe lineage, and vintage community service awards.
  - **Contact 03:** Dual-purpose customer feedback and franchise inquiry routing form.
  - **Subscribe 05:** "Morning Commuter Coffee & Cruller" weekly recurring subscription with locker pickup.
  - **Why 04:** Community values, local farmer dairy sourcing, and timeless American baking tradition.

---

## 4. Reusable vs Brand-Specific Asset Strategy

| Asset Category | Reusable Across All 5 Brands | Requires Custom Replacement Per Brand |
| :--- | :--- | :--- |
| **SVG Drip Dividers** | **Yes:** Vector curves with CSS `fill: currentColor` dynamically adopt brand primary colors. | None required; shape is universally applicable. |
| **Iconography** | **Yes:** Phosphor Icons (static) and Iconimate (animated) serve all functional needs. | Brand-specific novelty stickers (e.g. skater stickers for DoughBoyz vs diner neon badges for The Donut Counter). |
| **Component Architecture** | **Yes:** All 12 atomic primitives and 25 section layouts reside in shared `packages/ui/`. | None; layouts are dynamically configured via `BrandConfig`. |
| **Hero 3D Renders** | **Demonstration Only:** Template Webflow assets are non-redistributable. | **Must be replaced:** Custom 3D renders matching each brand's specific flavor profiles. |
| **Photography** | **Demonstration Only:** Template photography from Unsplash is licensed for demo. | **Must be replaced:** Original product photography matching client recipes and packaging. |

---

## 5. Implementation Roadmap & Recommended Order

1. **Sprint 1 (Foundation):** Next.js 15 workspace initialization, Tailwind CSS v4 token configuration, and core primitives (Button, DripDivider, Phosphor Icons).
2. **Sprint 2 (Shared Shells):** Global Header MegaMenu, Mobile Navigation Drawer, and Zustand-powered Cart Drawer.
3. **Sprint 3 (Brand 1 & Core Engine):** Implement SprinkleSpree (Home 01, About 05, Contact 05, Subscribe 03, Why 05) as the primary baseline implementation.
4. **Sprint 4 (Brand 2 & Brand 3):** Implement Glaze & Co. (Artisanal) and PureDonut (Health/Fitness) to prove token multi-tenancy.
5. **Sprint 5 (Brand 4 & Brand 5):** Implement DoughBoyz (Streetwear) and The Donut Counter (Americana Diner).
6. **Sprint 6 (CMS & E-Commerce Integration):** Dynamic product detail template (`/product/[slug]`), review stars, box selector, and checkout pipeline.

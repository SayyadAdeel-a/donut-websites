# Donutland Component Inventory & Atomic Decomposition

**Target Template:** [Donutland Webflow Template](https://donutland.webflow.io/)  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Author:** Agent 2 — Senior Visual Design Researcher & Frontend Interaction Analyst  
**Workspace:** `s:\Apps\donuts\`  
**Deliverable File:** `s:\Apps\donuts\docs\inventory\COMPONENT_INVENTORY.md`  
**Date:** September 2026  
**Status:** `VERIFIED` (Decomposed from live DOM tree, Webflow component classes, and CSS style rules)

---

## 1. Executive Summary & Component Architecture

The Donutland template is constructed on a highly reusable **Atomic & Sectional Component Architecture**. Although it showcases 25 distinct template page variations across 5 sectors, its underlying structural foundations rely on a tight, disciplined set of:
1. **Atomic Primitives:** Neo-brutalist buttons, sticker badges, form controls, and typography elements.
2. **Molecule & Organism Cards:** Product cards, category cards, testimonial reviews, benefit cards, and staff profiles.
3. **Hero Organisms (01 to 05):** 5 distinct headline and graphic presentation archetypes.
4. **Global Layout Shells:** Sticky Navigation Header, Slide-Over Cart Drawer, Mobile Navigation Overlay, Multi-Tier Footer, and Organic Icing Drip Dividers.

All components are mapped to **shadcn/ui** primitives adapted to Donutland's design tokens and the **Adeel Dev Standard**.

---

## 2. Global Shared Components

### 2.1 Global Header & Navigation (`<Header />`)
- **Webflow Classes:** `.header-navigation`, `.main-header-navigation-bar`, `.header-navigation-bar`, `.header-navigation-grid`, `.header-navigation-menu`.
- **Anatomy:**
  1. **Brand Logo Container:** Left-aligned SVG/WebP logo linking to root (`/`).
  2. **Navigation Link Menu:** Desktop horizontal links (`Homepages`, `About Us`, `Why Donutland`, `Subscribe & Save`, `Contact Us`, `Pages`).
  3. **Dropdown Flyouts:** Multi-column mega menus listing page variations `01` through `05`.
  4. **Cart Trigger Button:** Right-aligned shopping bag badge with dynamic item count pill.
  5. **Mobile Hamburger Button:** Animated toggle button activating the mobile drawer.
- **Responsive Behavior:**
  - Desktop (`>= 992px`): Horizontal grid layout (`min-height: 5.5rem; padding: 0 3rem;`).
  - Tablet/Mobile (`<= 991px`): Links collapse; animated hamburger icon (`width: 29px`) appears; menu opens as full-width drop-down panel.

---

### 2.2 Global Footer (`<Footer />`)
- **Webflow Classes:** `.container.footer`, `.footer-large-grid`, `.footer-grid`, `.footer-contact-form-wrapper`, `.footer-divider-large`, `.footer-bottom`.
- **Anatomy:**
  1. **Top Section Boundary:** Organic SVG Icing Drip Divider (or Angled Wave).
  2. **Newsletter / Contact Form:** Input field with neo-brutalist submit button (`.email-button`).
  3. **5-Column Navigation Grid:** 
     - Column 1: Brand mission statement & copyright.
     - Column 2: Homepages variation links (01 - 05).
     - Column 3: About Us variation links (01 - 05).
     - Column 4: Contact & Subscribe variation links.
     - Column 5: Legal, Licenses, and Social Media links.
  4. **Bottom Bar:** All rights reserved text + back to top link.
- **Variants (Background Color & Drip):**
  - `footer.hot-pink-svg-drip` (Hot pink background with top icing drip)
  - `footer.blue-wave` (Electric blue background with wave boundary)
  - `footer.red-svg-drip` (Vibrant red background with icing drip)
  - `footer.purple-angled-wave` (Purple background with diagonal divider)
  - `footer.red-background-no-drip` (Clean straight red footer)

---

### 2.3 Slide-Over Cart Drawer (`<CartDrawer />`)
- **Webflow Classes:** `.w-commerce-commercecartcontainerwrapper`, `.w-commerce-commercecartcontainer`, `.cart-top-header`, `.cart-item`, `.cart-thumbail-image-wrapper`.
- **Anatomy:**
  1. **Modal Backdrop:** Fullscreen fixed scrim (`rgba(0, 0, 0, 0.8)`).
  2. **Drawer Panel:** 480px max-width slide-over container from right edge.
  3. **Cart Header:** Hot pink banner (`.cart-top-header`) with title "Your Cart" and close icon button.
  4. **Item Scroll Container:** List of added products, including thumbnail, flavor title, unit price, quantity stepper, and remove link.
  5. **Footer Sticky Checkout:** Subtotal calculation, tax notice, and primary checkout CTA button (`.checkout-button`).
- **Base UI Primitive:** shadcn/ui `Sheet` (`SheetContent side="right"`).

---

### 2.4 Mobile Navigation Drawer (`<MobileNav />`)
- **Webflow Classes:** `.w-nav-menu`, `.header-navigation-menu`, `.lottie-animation-menu`.
- **Anatomy:**
  - Full-screen or top-sheet dropdown displaying all 25 navigation links categorized into expandable accordions.
  - Social media footer icons inside navigation drawer.
- **Base UI Primitive:** shadcn/ui `Sheet` (`SheetContent side="top"`).

---

### 2.5 Organic Icing Drip & Wave Dividers (`<IcingDrip />` / `<WaveDivider />`)
- **Webflow Classes:** `.svg-drip`, `.image-wrapper.wave-divider`, `.image-wrapper.wave-divider.reversed`.
- **Anatomy:**
  - Pure SVG vector graphic spanning 100% viewport width.
  - Seamlessly joins sections of differing background colors (e.g., Hot Pink to Red, Blue to White).
  - Can be inverted with `transform: rotate(-180deg)` to cap section tops.
- **Base Tech:** Inline SVG path morphing via Anime.js.

---

## 3. Page-Level Hero Components (01 - 05)

### 3.1 Hero 01: 3D Tri-Donut & Sprinkle Storm Hero (`<HeroHome01 />`)
- **Webflow Class:** `.container.homepage-01-hero`.
- **Components Included:**
  - Background Sprinkle Matrix (`.hero-sprinkles-background`).
  - 3 Staggered 3D Flip Display Headings (`DONUTS` in Anton).
  - 3 Multi-Directional Floating Donuts (`homepage-hero-01-donut-01`, `02`, `03`).
  - Sub-headline Text Block with Left-Aligned Callouts.
  - Dual Action CTAs: Primary Shop Now button (`.general-button.white-pink`) + Learn More link.
  - Social Proof Pill: "500+ Satisfied Donut Lovers".
- **Target Archetype:** Brand 1: SprinkleSpree (Kids & Party Donut World).

---

### 3.2 Hero 02: Letter-by-Letter Cascade & Artisanal Splash Hero (`<HeroHome02 />`)
- **Webflow Class:** `.container.homepage-02-hero`.
- **Components Included:**
  - Centered Giant Brand Display (`donutland` with 9 individual letter spans).
  - Rotating Ingredient Badges (`float-up-and-rotate-left` & `right` at `+/- 9deg`).
  - Pink Donut Box hero photograph with parallax depth.
  - Magnifying Glass graphic with scroll-driven rotation.
  - Dual Pill CTAs: "Shop now" (`.shop-now-button.pink`) and "Create a box".
- **Target Archetype:** Brand 2: Glaze & Co. (Modern Gourmet Patisserie).

---

### 3.3 Hero 03: Split Directory & Category Pill Filter Hero (`<HeroHome03 />`)
- **Webflow Class:** `.container.homepage-03-hero`.
- **Components Included:**
  - Top Horizontal Category Filter Pills (Subscriptions, Locations, Categories, Catering).
  - Split Hero: Left Eyebrow (`Welcome to`) + Main Anton Heading + Right-aligned flying donuts photograph (`donuts-flying-in-air.webp`).
  - Sub-paragraph describing delivery & catering coverage.
  - Action Button: Inverted white-border CTA (`.general-button.white-no-background`).
- **Target Archetype:** Brand 5: Heritage Diner / Classic Americana.

---

### 3.4 Hero 04: Streetwear Angled Cutout & Graphic Hero (`<HeroHome04 />`)
- **Webflow Class:** `.container.homepage-04-hero`.
- **Components Included:**
  - Ultra-Scale Viewport Heading (`21svw` Anton text angled at `-32deg`).
  - Irreverent "Finger through Donut" cutout photography (`finger-donut.webp`).
  - Kinetic Angled Subparagraph.
  - Bold Red CTA Button (`.general-button.white-red`).
  - Arrow Squiggle Lottie vector animation (`cYAJftIhhn.json`).
- **Target Archetype:** Brand 4: DoughBoyz (Urban Streetwear & Skate Donut Lab).

---

### 3.5 Hero 05: Minimalist Clean Macro Photography Hero (`<HeroHome05 />`)
- **Webflow Class:** `.container.homepage-05-hero`.
- **Components Included:**
  - Understated clean white canvas with high whitespace.
  - Horizontal Viewport Heading (`9svw` Anton text: "Healthy donuts").
  - High-Resolution Macro Donut Photography with crisp drop shadow.
  - Bouncing Donut Lottie animation (`donut-bouncing.json`).
  - Nutrition Guarantee Badges: Zero Refined Sugar, Keto Certified, Gluten Free.
- **Target Archetype:** Brand 3: PureDonut / KetoKreme (Clean Fitness & Organic).

---

## 4. Sectional & Molecule Components

### 4.1 Product Card (`<ProductCard />`)
- **Webflow Classes:** `.product-card-wrapper`, `.product-card-container`, `.product-card-top-content-wrapper`, `.product-card-bottom-content-wrapper`.
- **Flavor Color Variants:**
  - `.brown`: Chocolate Glaze (`#6e2f10`)
  - `.pink-orange`: Strawberry Sprinkle (`#f5766e`)
  - `.dark-red`: Raspberry Jam (`#cb0011`)
  - `.tan-orange`: Peanut Crunch (`#ff944b`)
- **Anatomy:**
  - Product Image Container with hover zoom (`transform: scale(1.08)`).
  - Flavor Name in Anton display font (`font-size: 2.5rem; text-transform: uppercase`).
  - Dietary Badges (e.g., "Keto", "Vegan", "Gluten Free").
  - Price Tag (`$3.50` / `$18.00 half-dozen`).
  - Direct "Add to Cart" Button.

---

### 4.2 Category Card (`<CategoryCard />`)
- **Webflow Classes:** `.category-card-wrapper`, `.category-card-container`, `.category-shop-now-button`.
- **Color Blocks:** Pink (`#f54f95`), Red (`#f21d33`), Orange (`#f98000`), Light Brown (`#945439`), Peach (`#ffb769`), Light Blue (`#abd1ff`).
- **Anatomy:**
  - Bold saturated background card with 14px border radius.
  - Category Title in massive Anton typography.
  - Category Donut Trio photograph.
  - Custom Pill Shop Now Button (`.category-shop-now-button`).

---

### 4.3 Value Proposition & Benefit Blocks (`<BenefitGrid />`)
- **Webflow Classes:** `.grid-fourths`, `.benefits-icon-grid`, `.benefits-icon-inner-grid`, `.product-benefit-grid-block`.
- **Anatomy:**
  - 4-Column or 3-Column responsive card grid.
  - Circular Phosphor Icon with colored background badge.
  - Benefit Title in Anton font (`font-size: 1.7rem`).
  - Descriptive paragraph in Plus Jakarta Sans (`145% line-height`).

---

### 4.4 Testimonial & Review Cards (`<TestimonialCard />` / `<ReviewMarquee />`)
- **Webflow Classes:** `.testimonial-card`, `.review-box-wrapper`, `.review-star-wrapper`, `._5-stars`.
- **Anatomy:**
  - 5-Star Rating SVG cluster (Vibrant Red or Gold Yellow stars).
  - Bold Customer Review Quote in quotes.
  - Customer Photo Thumbnail inside circular container.
  - Customer Name & Verified Buyer badge.
  - Marquee Review Ticker continuously sliding customer feedback across sections.

---

### 4.5 Subscription Tiers & Pricing (`<SubscriptionTiers />`)
- **Webflow Classes:** `.subscription-two-column-grid`, `.steps-card-wrapper`, `.why-subscribe-card-wrapper`.
- **Anatomy:**
  - **Delivery Frequency Selector:** Interactive tab switcher (Weekly, Bi-Weekly, Monthly) showing percentage savings (Save 15%).
  - **3-Step Illustrated Walkthrough:** Step 1: Choose Box Size -> Step 2: Pick Custom Flavors -> Step 3: Enjoy Fresh Delivery.
  - **Tier Pricing Cards:** Basic (6-pack), Plus (12-pack), Party (24-pack).
  - **Corporate Bulk Tier:** Custom inquiry module for office orders.

---

### 4.6 Team & Staff Profiles (`<StaffCard />`)
- **Webflow Classes:** `.staff-member-grid`, `.staff-card`, `.staff-card-top`, `.team-hover-card-bottom`.
- **Anatomy:**
  - Master Baker photo with 9px rounded corners.
  - Circular Plus-Icon Badge (`.plus-sign-image-wrapper`) that rotates 45 degrees on hover.
  - Slide-up biography panel revealing years of baking experience and favorite donut.

---

### 4.7 Contact Form & Department Routing (`<ContactSection />`)
- **Webflow Classes:** `.content-wrapper.contact-form`, `.contact-icons-grid`, `.locations-grid`.
- **Anatomy:**
  - Department Selector: 3 Cards for Customer Support, Event Catering, and Press Inquiries.
  - Neo-Brutalist Form: Floating border input fields (`First Name`, `Last Name`, `Email`, `Message`).
  - Physical Bakery Locations: Card directory of retail locations with operating hours and map links.

---

### 4.8 FAQ Accordion (`<FaqAccordion />`)
- **Webflow Classes:** `.accordion-title-wrapper`, `.faq-content-wrapper`.
- **Anatomy:**
  - Clean collapsible panel with subtle 1px divider lines.
  - Question title in Plus Jakarta Sans SemiBold.
  - Animated chevron indicator that rotates 180 degrees upon expansion.
  - Base UI Primitive: shadcn/ui `Accordion`.

---

## 5. Atomic Primitives (Design Tokens & shadcn/ui Adaptations)

| Primitive Component | Donutland Classes | Token Attributes | shadcn/ui Mapping |
| :--- | :--- | :--- | :--- |
| **Brutalist Button** | `.general-button.white-pink`, `.white-red` | `border: 1px solid var(--white); box-shadow: 5px 4px 0 0 var(--white); border-radius: 6px;` | `<Button variant="brutalist">` |
| **Pill Shop Button** | `.shop-now-button`, `.category-shop-now-button` | `border: 8px solid; border-radius: 35px; text-transform: uppercase; font-family: Anton;` | `<Button variant="pill">` |
| **Inverted Outline Button**| `.general-button.white-no-background` | `border: 1px solid var(--white); background: transparent; color: #fff;` | `<Button variant="outline">` |
| **Cart Button** | `.cart-button`, `.checkout-button` | `background: var(--hot-pink); border-radius: 9px; color: #fff;` | `<Button variant="cart">` |
| **Sticker Badge** | `.fact-card-wrapper`, `.image-wrapper.star` | `transform: rotate(12deg); border-radius: 10px; background: #ff94c3;` | `<Badge variant="sticker">` |
| **Dietary Tag Pill** | `.blog-categroy-button`, `.selector-buttons` | `border: 1px solid; border-radius: 100px; padding: 0.5rem 1rem;` | `<Badge variant="outline">` |
| **Input Field** | `.field-input`, `.w-input` | `border: 1px solid #ddd; border-radius: 6px; background: #fff; padding: 12px 16px;` | `<Input>` |
| **Tab Switcher** | `.tab-content-button` | `padding: 24px 32px; border-radius: 8px; font-weight: 500;` | `<TabsList>` / `<TabsTrigger>` |
| **Accordion Item** | `.accordion-title-wrapper` | `border-bottom: 1px solid #e6e6e6; padding: 18px 0;` | `<AccordionItem>` |

---

## 6. Component Reuse Matrix Across 5 Brand Archetypes

This matrix details how atomic and sectional components are re-used and styled across the **5 target production websites**:

| Component Module | Brand 1: SprinkleSpree (Party/Kids) | Brand 2: Glaze & Co. (Artisanal Boutique) | Brand 3: PureDonut (Clean Fitness/Keto) | Brand 4: DoughBoyz (Streetwear Skate) | Brand 5: Heritage Diner (Americana) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Global Header** | Hot Pink Canvas + Pill Badges | Transparent -> White Sticky Nav | Clean White Minimalist Nav | High-Contrast Black/Red Nav | Heritage Cream / Blue Nav |
| **Global Footer** | `footer.hot-pink-svg-drip` | `footer.blue-wave` | Clean No-Drip White/Gray | `footer.red-svg-drip` | `footer.purple-angled-wave` |
| **Cart Drawer** | Standard Hot Pink Header | Minimalist Warm Charcoal | Clean White + Nutrition Tags | Streetwear Black + High Contrast | Classic Heritage Navy |
| **Hero Component** | `<HeroHome01>` (3D Tri-Donut) | `<HeroHome02>` (Letter Cascade) | `<HeroHome05>` (Macro Minimal) | `<HeroHome04>` (Streetwear Slam) | `<HeroHome03>` (Split Directory) |
| **Product Card** | Saturated Pink & Orange Cards | Chocolate & Mocha Wrappers | Clean White + Macro Photo | High-Contrast Red & Black | Heritage Diner Blue & Yellow |
| **Category Card** | Full Palette (6 Colors) | Neutral Tan, Mocha, Cream | Subtle Pastel Greens & Tints | Neon Pink, Red, Black | Retro Diner Navy & Yellow |
| **Benefit Block** | 4-Col Playful Party Perks | 2-Col Master Baker Story | 4-Col Lab Nutrition Commitments| 3-Col Urban Culture Highlights | 4-Col Quality Heritage Specs |
| **Testimonial Card** | Review Star Marquee Ticker | Editorial Quote Grid | Athlete & Nutritionist Reviews| Customer Photo Wall of Fame | Local Community Quotes |
| **Subscription Tiers** | VIP Birthday Donut Club | Bi-Weekly Artisanal Box | Keto / Macro Calibrated Box | Limited Midnight Secret Drops | Corporate / Office Catering |
| **Contact Form** | Party Booking & Event Form | Departmental Inquiries | Fast Minimalist Nutrition Query| Skateboard Team / Collabs Form | Store Locator + Franchise Inquiry |
| **FAQ Accordion** | Party & Delivery FAQs | Ingredient Sourcing FAQs | Macro & Allergen FAQs | Pop-Up Drops & Returns FAQs | Franchise & Catering FAQs |
| **SVG Icing Drip** | Hot Pink & Yellow Drips | Subtle Cream Waves | None (Clean Straight Cuts) | High-Contrast Red Drips | Classic Soft Wave Dividers |
| **Brutalist Buttons** | White on Hot Pink Shadow | Subtle Mocha Shadow | Clean Solid Button (No Shadow)| Black on Red Hard Shadow | Classic Beveled Pill |

---

## 7. Verification & Traceability

- [x] All components mapped directly to class names in `donutland.original.css`.
- [x] Component breakdown covers all 5 page variations across all 5 marketing sectors.
- [x] Base primitives mapped to **shadcn/ui** tokens per Adeel Dev Standard.
- [x] Icons specified as Phosphor / Iconimate only (no Lucide, Heroicons, or Font Awesome).
- [x] Full reuse matrix establishes 100% component reusability across the 5 planned production websites.

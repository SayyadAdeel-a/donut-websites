# Donutland Animation & Interaction Inventory

**Target Template:** [Donutland Webflow Template](https://donutland.webflow.io/)  
**Standard Adherence:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  
**Author:** Agent 2 — Senior Visual Design Researcher & Frontend Interaction Analyst  
**Workspace:** `s:\Apps\donuts\`  
**Deliverable File:** `s:\Apps\donuts\docs\design\ANIMATION_INVENTORY.md`  
**Date:** September 2026  
**Status:** `VERIFIED` (Reverse-engineered from Webflow IX2 bundles, inline style tags, Lottie JSON payloads, and runtime DOM)

---

## 1. Executive Summary & Interaction Architecture

The Donutland template achieves its hyper-engaging, playful personality through an orchestrated combination of **5 distinct interaction layers**:
1. **Lottie Vector Micro-Animations:** Lightweight vector animations for UI controls (hamburger menu toggle, bouncing bakery donuts, arrow squiggles, and badge stars).
2. **Webflow IX2 Scroll-Triggered Hero Reveals:** Sophisticated 3D perspective flips, multi-directional directional fly-ins, and staggered typography entrances.
3. **Scroll-Driven Continuous Parallax:** Real-time scroll-linked rotation and translation of floating donuts, magnifying glasses, and ingredient stickers.
4. **Interactive Component State Machines:** Slide-over cart drawer, tab switchers, sticky narrative cards, and accordion disclosures.
5. **Tactile Neo-Brutalist Micro-Interactions:** Custom button "press-in" physics eliminating hard offset shadows upon hover, plus multi-color pill fill inversions.

In accordance with the **Adeel Dev Standard**, every Webflow IX2 legacy behavior is mapped directly to our modern open-source React stack:
- **Motion (framer-motion)** for UI layout, route transitions, drawers, and viewport scroll reveals.
- **Anime.js** for advanced SVG icing drip morphing, complex multi-stage timelines, and continuous physics loops.
- **Iconimate / Phosphor** for icons (strictly replacing Webflow proprietary icons without introducing unapproved icon sets).
- **dotlottie-react / lottie-react** for vector animation payloads.

---

## 2. Global Shared Interactions

### 2.1 Animated Lottie Hamburger Menu
- **Observed Webflow Implementation:**
  - Asset: `https://cdn.prod.website-files.com/6569d73055568668783bf587/6584b6ca97dde0b5a84168e9_lottie-menu.json`
  - Dimensions: `width: 29px; height: 29px;` (Tablet/Mobile menu button `.menu-button`).
  - Mechanics: Webflow IX2 binds the Lottie animation frame progression to the open/close state of the mobile menu. Clicking advances frames from 0% (3 parallel bars) to 100% (compact 'X' close icon), reversing on second click or overlay tap.
- **Modern React Implementation (Adeel Dev Standard):**
  - **Primary:** Iconimate animated menu toggle icon or `@dotlottie/react-player` / `lottie-react`.
  - **Motion Fallback:** 3-span Motion SVG burger that morphs cleanly into an 'X' with spring physics:
    ```tsx
    const topBar = { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } };
    const middleBar = { closed: { opacity: 1 }, open: { opacity: 0 } };
    const bottomBar = { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } };
    ```

---

### 2.2 Sticky Header Transition & Scroll Trigger
- **Observed Webflow Implementation:**
  - Class: `.header-navigation`, `.main-header-navigation-bar`, `.header-navigation-bar`.
  - Initial State: `position: absolute; top: 0; width: 100%; z-index: 20; background: transparent; padding: 0 3rem;`.
  - Scroll Interaction: As user scrolls beyond 100px:
    - Navbar shifts from absolute to fixed position (`position: fixed; top: 0;`).
    - Background transitions from transparent to solid brand canvas (`background-color: var(--white)` or `var(--hot-pink)`).
    - Subtle elevation shadow engages: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08)`.
    - Vertical padding compresses from `24px` down to `14px` for screen real estate preservation.
- **Modern React Implementation (Motion):**
  ```tsx
  import { motion, useScroll, useTransform } from 'framer-motion';

  export function Header() {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
    const headerPadding = useTransform(scrollY, [0, 80], ['1.5rem', '0.75rem']);
    const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.1]);

    return (
      <motion.header
        style={{ padding: headerPadding }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors backdrop-blur-md"
      >
        {/* Navigation Content */}
      </motion.header>
    );
  }
  ```

---

### 2.3 Right-Sidebar Cart Drawer
- **Observed Webflow Implementation:**
  - Classes: `.w-commerce-commercecartcontainerwrapper`, `.w-commerce-commercecartcontainer`.
  - Layout: Fullscreen fixed overlay (`inset: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 1001; display: flex; justify-content: flex-end;`).
  - Container: `width: 100%; max-width: 480px; min-width: 320px; height: 100%; background: #ffffff; box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);`.
  - Animation:
    1. Overlay fades in (`opacity: 0 -> 1` in `0.3s`).
    2. Drawer slides smoothly from right viewport margin (`transform: translateX(100%) -> translateX(0%)` with cubic-bezier easing).
    3. Staggered reveal of Cart Items: Each product row fades in and slides up 10px.
    4. Close trigger: Clicking backdrop or close button (`.close-button`) reverses both animations simultaneously.
- **Modern React Implementation (Motion + shadcn/ui Sheet Primitive):**
  ```tsx
  import { motion, AnimatePresence } from 'framer-motion';

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { x: '100%', transition: { ease: 'easeInOut', duration: 0.25 } },
  };
  ```

---

### 2.4 Mobile Navigation Menu Slide/Accordion
- **Observed Webflow Implementation:**
  - Class: `.w-nav-menu`, `.header-navigation-menu`.
  - At `<= 767px`, desktop horizontal navigation collapses.
  - Tapping the hamburger button triggers Webflow Nav menu open:
    - Overlay drops down below header (`top: 100%; width: 100%; background: var(--white);`).
    - Staggered cascade: Dropdown links slide in vertically with a 50ms stagger.
- **Modern React Implementation (Motion):**
  - Full-screen or top-sheet overlay with staggered menu items using `variants` with `staggerChildren: 0.05`.

---

### 2.5 Infinite Marquee Tickers
- **Observed Webflow Implementation:**
  - Classes: `.marquee-grid`, `.marquee-horizontal-panel-wrapper`, `.marquee-review-wrapper`.
  - Visual: Continuous seamless horizontal scrolling banner displaying customer quotes, social proof, or bakery slogans across section dividers.
  - Framed by 1px pink borders (`.divider-line.marquee.top` & `.divider-line.marquee.bottom`).
- **Modern React Implementation (Anime.js / Motion Loop):**
  ```tsx
  // Motion infinite seamless ticker
  <motion.div
    className="flex whitespace-nowrap"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
  >
    {/* Duplicate content duplicated twice for seamless loop */}
  </motion.div>
  ```

---

## 3. Page-Level Hero Animations (Homepages 01 - 05)

### 3.1 Home 01: 3D Perspective Flip & Multi-Directional Donut Fly-In
This is the flagship interaction of the Donutland template, exhibiting high technical complexity:

#### Observed Webflow IX2 Keyframes:
1. **3D Headline Flip-Up:**
   - Elements: 3 stacked lines of `.h1-heading.homepage-hero-01` (`DONUTS`).
   - Initial State:
     ```css
     transform: translate3d(0, 210px, 0) scale3d(1, 1, 1) rotateX(-98deg);
     opacity: 0;
     transform-style: preserve-3d;
     ```
   - Target State:
     ```css
     transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0deg);
     opacity: 1;
     ```
   - Timing: Duration `0.85s`, easing `cubic-bezier(0.215, 0.61, 0.355, 1)`, staggered by `120ms` per line.
2. **Tri-Directional Donut Inrush:**
   - Donut 01 (`.image-wrapper.homepage-hero-01-donut-01`):
     - Initial: `transform: translate3d(600px, -187px, 0);` -> Target: `translate3d(0, 0, 0);` (Flies in from top-right).
   - Donut 02 (`.image-wrapper.homepage-hero-01-donut-02`):
     - Initial: `transform: translate3d(-195px, -600px, 0);` -> Target: `translate3d(0, 0, 0);` (Flies down from top-left).
   - Donut 03 (`.image-wrapper.homepage-hero-01-donut-03`):
     - Initial: `transform: translate3d(-202px, 600px, 0);` -> Target: `translate3d(0, 0, 0);` (Launches upward from bottom-left).
3. **Sub-headline & Social Proof Fade-Up:**
   - `.homepage-hero-sub-paragraph`: Initial `opacity: 0; translate3d(0, 210px, 0)` -> transitions to origin.
   - `.hero-logo-social-proof-text-box`: Fades in at `+0.4s` delay.
4. **Scroll Parallax Floating Donuts:**
   - `.content-image.homepage-01-intro-float`: Scroll-bound continuous rotation (`rotateZ(0deg) -> rotateZ(360deg)`) and vertical parallax offset (`translateY(0) -> translateY(-80px)`).

#### Implementation Architecture (Motion + Anime.js):
```tsx
// Staggered 3D Flip Variant
const hero3DFlip = {
  hidden: { opacity: 0, y: 150, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Anime.js Floating Parallax Loop
anime({
  targets: '.floating-donut',
  translateY: [-10, 10],
  rotateZ: [-4, 4],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  duration: 3200,
});
```

---

### 3.2 Home 02: Letter-by-Letter Stagger Cascade & Artisanal Rotation
- **Observed Webflow IX2 Interaction:**
  - Headline: `.h1-heading.homepage-hero-02` with 9 individual letter spans (`.letter-d`, `.letter-o`, `.letter-n`, `.letter-u`, `.letter-t`, `.letter-l`, `.letter-a`, `.letter-n`, `.letter-d`).
  - Container initial offset: `transform: translate3d(0, 118px, 0);`.
  - Letter spans: Initial `opacity: 0; transform: translateY(30px);`.
  - Trigger: On page load, letters trigger a sequential cascading reveal:
    - Interval: `60ms` per letter.
    - Duration: `0.45s` per letter.
  - Floating Ingredient Icons:
    - `.image-wrapper.homepage-02-under-hero-benefit-icon.float-up-and-rotate-left`: As user scrolls, icon floats upward and rotates `+9deg`.
    - `.image-wrapper.homepage-02-under-hero-benefit-icon.float-up-and-rotate-right`: Simultaneously floats and rotates `-9deg`.
  - Parallax Donut Box & Magnifying Glass:
    - `.pink-donut-box`: Scroll-linked translateY factor `0.15`.
    - `.magnify-glass-image`: Scroll-linked continuous rotation (`rotateZ(0deg -> 45deg)`).
- **Implementation Mapping:** Motion `staggerChildren: 0.06` across letter spans, with CSS transform-gpu.

---

### 3.3 Home 03: Split Directory & Flying Donut Parallax
- **Observed Webflow IX2 Interaction:**
  - Hero image: `donuts-flying-in-air.webp`.
  - Split headline: Eyebrow `.homepage-hero-03.eyebrow` slides in from left, while massive main headline `.homepage-hero-03` scales smoothly from `0.95` to `1.0`.
  - Category pill filter badges: Staggered horizontal slide-in with spring physics.
  - Scroll Interaction: Two single donuts (`single-angled-donut.webp` & `single-angled-donut-1.webp`) float across section boundaries with opposite directional translations.
- **Implementation Mapping:** Motion scroll-linked `useTransform(scrollYProgress, [0, 1], [-50, 150])`.

---

### 3.4 Home 04: Streetwear Angled Cutout & Extreme Kinetic Entry
- **Observed Webflow IX2 Interaction:**
  - Giant Cutout Image: `finger-donut.webp` (`.content-image._100-width-height`):
    - Initial State: `transform: translate3d(0, 650px, 0) rotateZ(56deg); opacity: 0;`.
    - Animate State: Snaps upward to `translate3d(0, 0, 0) rotateZ(0deg); opacity: 1;`.
  - Oversized Headline: `.h1-heading.homepage-hero-04`:
    - Initial State: `transform: translate3d(-500px, 700px, 0) rotateZ(-32deg); opacity: 0;`.
    - Animate State: Slams into place at `translate3d(0, 0, 0) rotateZ(0deg); opacity: 1;`.
  - Kinetic Subparagraph:
    - Initial State: `transform: translate3d(-363px, 263px, 0) rotateZ(-32deg); opacity: 0;`.
  - Visual Effect: Energetic skate/streetwear slam effect reminiscent of sticker bomb culture.
- **Implementation Mapping:** Motion spring transition (`stiffness: 140, damping: 18`) to give weight and impact to the angled entry.

---

### 3.5 Home 05: Minimalist Scale & Translate Pop-In
- **Observed Webflow IX2 Interaction:**
  - Container: `.container.homepage-05-hero`:
    - Initial State: `transform: translate3d(0, 447px, 0) scale3d(0.2, 0.2, 1); opacity: 0;`.
    - Target State: Expands rapidly to `translate3d(0, 0, 0) scale3d(1, 1, 1); opacity: 1;`.
  - Headline & Paragraph: Clean fade-in (`opacity: 0 -> 1`) with delayed CTA button pop.
  - Bouncing Donut Lottie: Autoplays in continuous loop (`data-loop: 1`).
- **Implementation Mapping:** Motion layout scale pop with smooth easing.

---

## 4. Micro-Interactions & Hover Physics

### 4.1 Neo-Brutalist Button "Press-In" Physics
The primary button primitive (`.general-button`) features tactile physical depression on hover:
- **Default Resting State:**
  ```css
  transform: scale(1.03);
  box-shadow: 5px 4px 0 0 var(--white); /* Or var(--hot-pink) */
  transition: border 0.35s, box-shadow 0.35s, transform 0.35s;
  ```
- **Hover / Active State:**
  ```css
  transform: scale(1.0); /* Compresses 3% */
  box-shadow: 0px 0px 0 0 transparent; /* Shadow flattens into canvas */
  ```
- **Tactile Sensation:** Simulates pressing a thick mechanical button or physical rubber stamp into paper.

---

### 4.2 Pill Button Inversion Micro-Interaction
Applied to `.shop-now-button` and `.category-shop-now-button`:
- **Default State:**
  ```css
  background-color: #ffffff;
  color: var(--hot-pink);
  border: 8px solid var(--hot-pink);
  border-radius: 35px;
  transition: color 0.2s, border-color 0.35s, background-color 0.35s;
  ```
- **Hover State:**
  ```css
  background-color: var(--hot-pink);
  color: #ffffff;
  border-color: #ffffff;
  ```
- **Visual Effect:** Instant dramatic color flip with high visual feedback.

---

### 4.3 Team Member Card Overlay Lift & Plus Icon Rotation
- **Card Hover (`.team-card-container`):**
  - Image container zooms slightly (`scale(1.05)`).
  - Bio overlay (`.team-hover-card-bottom`) reveals hidden social handles.
  - Plus badge (`.plus-sign-image-wrapper.about-us-team-member-card`):
    - Resting: `transform: rotate(0deg); background-color: var(--white);`.
    - Hover: `transform: rotate(45deg); background-color: var(--hot-pink);` (transforms '+' into 'x').

---

### 4.4 Product Card Elevation & Badge Pop
- **Product Card (`.product-card-wrapper`):**
  - Resting: Border radius `14px`, background color per flavor (chocolate brown, coral, tan orange, crimson).
  - Hover:
    - Card translates upward: `transform: translateY(-8px);`.
    - Donut product image floats upward with scale `scale(1.08)`.
    - Bottom price & CTA button fade up.

---

## 5. Catalog of Verified Lottie Vector Animations

| Lottie Identifier | Original Asset CDN URL | Dimensions | Loop Mode | Usage Location | Modern Replacement (Adeel Standard) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`lottie-menu`** | `.../6584b6ca97dde0b5a84168e9_lottie-menu.json` | `29x29px` | State-driven (0 -> 100%) | Global Header (Mobile/Tablet) | Iconimate / Motion 3-bar morph |
| **`donut-bouncing`** | `.../657de2df45a3814e21a8ca2d_donut-bouncing.json` | `350x350px` | Loop (`duration: 1.33s`) | Home 05 Hero, About Us 05 | `@dotlottie/react-player` / Anime.js bounce loop |
| **`arrow-squiggle`** | `.../657c54f8aad8d2027603e4ac_cYAJftIhhn.json` | `300x120px` | Loop (`duration: 2.0s`) | Home 04 Hero, CTA sections | Inline SVG path dash-array draw (Anime.js) |
| **`badge-star`** | `.../657f36cc1776d77198e218f3_I7m50YxVJS.json` | `80x80px` | Loop (`duration: 2.5s`) | License page, Review badges | Phosphor `Star` / Iconimate sparkle |

---

## 6. Advanced SVG Icing Drip Choreography (Anime.js)

The signature decorative element connecting sections is the fluid icing drip. While Webflow uses static SVGs flipped via CSS (`transform: rotate(-180deg)`), our implementation elevates this to dynamic morphing:

### Dynamic Drip Morph Specification (Anime.js)
```tsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';

export function DynamicIcingDrip({ color = '#f54f95' }: { color?: string }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Morphs between 2 subtle organic drip states for alive bakery feel
    anime({
      targets: pathRef.current,
      d: [
        { value: 'M0,0 C150,40 280,10 400,35 C520,60 680,20 800,45 C920,70 1080,15 1200,40 L1200,0 Z' },
        { value: 'M0,0 C150,20 280,50 400,25 C520,10 680,55 800,30 C920,45 1080,60 1200,20 L1200,0 Z' }
      ],
      easing: 'easeInOutSine',
      duration: 4000,
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden leading-none -mb-1">
      <svg viewBox="0 0 1200 80" className="w-full h-auto block" fill={color}>
        <path ref={pathRef} d="M0,0 C150,40 280,10 400,35 C520,60 680,20 800,45 C920,70 1080,15 1200,40 L1200,0 Z" />
      </svg>
    </div>
  );
}
```

---

## 7. Reduced Motion & Performance Compliance

To uphold the **Adeel Dev Standard** accessibility mandate:
1. **`prefers-reduced-motion: reduce` Integration:**
   - All 3D perspective flips (`rotateX(-98deg)`) collapse to simple instantaneous opacity fades (`opacity: 0 -> 1`).
   - Extreme fly-ins (`translate3d(-500px, 700px, 0)`) are clamped to simple 8px vertical fades.
   - Continuous Lottie and Anime.js bounce/rotation loops are paused.
2. **GPU Acceleration:**
   - All transforms enforce `transform: translate3d(0,0,0)` and `will-change: transform, opacity` during active animation cycles only to prevent memory bloat.

---

## 8. Verification & Traceability

- [x] All 4 Lottie JSON assets verified via HTTP 200 payload inspection.
- [x] Webflow IX2 initial transform matrices extracted directly from HTML DOM styles.
- [x] Easing curves and stagger timings verified from Webflow runtime chunks.
- [x] Implementation mapping strictly obeys [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md) (Motion, Anime.js, Phosphor/Iconimate).

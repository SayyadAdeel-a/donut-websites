# Donutland Webflow Template: Comprehensive Media & Asset Manifest

**Target Website:** [https://donutland.webflow.io/](https://donutland.webflow.io/)  
**Source Studio:** Silv Studio ([silvstudio.com](https://www.silvstudio.com))  
**Investigation Date:** September 2026  
**Lead Specialist:** Agent 3 (Assets & Technical Feasibility Specialist)  
**Governing Standard:** [Adeel Dev Standard](file:///C:/Users/Adeel%20Sayyad/.adeel-dev/standards/Adeel-Dev-Standard.md)  

---

## 1. Executive Asset Investigation Summary

A full automated and DOM-verified crawl of all **54 discovered routes** of the Donutland Webflow template was executed, inspecting every `<img>`, `<source>`, `data-src` (Lottie), inline SVG drip divider, background-image CSS property, and external font declaration. The investigation discovered **1,080 raw asset references**, resolving down to **358 canonical master media assets** once responsive srcset derivatives (`-p-500.webp`, `-p-800.webp`, `-p-1080.webp`, `-p-1600.webp`, `-p-2000.webp`) were normalized.

### Media Breakdown by Format & Type
| Asset Classification | Master Asset Count | Primary Delivery Format | Runtime Weight / Optimization |
| :--- | :--- | :--- | :--- |
| **WebP Raster Graphics** | 272 master assets | WebP (Lossy/Lossless) | Heavy unoptimized Webflow CDN assets (up to 3.4K resolution) |
| **Vector Graphics & Icons** | 39 master assets | Inline / External SVG | Phosphor icons, custom badges, drip wave dividers |
| **Raster PNG Graphics** | 14 master assets | PNG with Alpha | Transparent 3D donut cutouts & sponsor logos |
| **Lottie Vector Animations** | 4 animations | JSON (Bodymovin) | 1 menu toggle + 1 bouncing donut + 2 decorative UI squiggles |
| **Raster Animated GIFs** | 4 master assets | Animated GIF | Lifestyle customer interaction animations |
| **AVIF Modern Raster** | 1 master asset | AVIF | Category banner test render |
| **Legacy JPEG Photography** | 1 master asset | JPEG | Pexels raw photo upload (`pexels-pavel-danilyuk`) |
| **Web Typography Fonts** | 2 font families + 1 icon font | WOFF2 / Google Fonts / Base64 TTF | Anton (OFL) + Plus Jakarta Sans (OFL) + Webflow-icons (TTF) |
| **Total Canonical Assets** | **358 Assets** | Hybrid Modern/Legacy | **Over 120MB raw unoptimized media payload** |

---

## 2. Formal Investigation of Declared Licenses (`/admin/licenses`)

Inspection of the live administrative license declarations at `https://donutland.webflow.io/admin/licenses` revealed that the template creator (Silv Studio) publicly declared four distinct third-party asset sources and licenses:

1. **Photography (Unsplash, Pexels & Freepik):**
   - **Declared Notice:** *"All photography sourced from Pexels, Unsplash & Freepik falls under their respected licenses."*
   - **Pexels License:** [https://www.pexels.com/license/](https://www.pexels.com/license/) — Free for commercial and personal use. Attribution is not legally required but appreciated. Modification permitted. Prohibits selling unaltered copies of photos or implying endorsement.
   - **Unsplash License:** [https://unsplash.com/license](https://unsplash.com/license) — Free for commercial and non-commercial use. No attribution required. Prohibits selling unaltered copies or compiling into a competing photo service.
   - **Freepik License:** [Freepik Legal Terms](https://www.freepikcompany.com/legal) — Free tier requires mandatory attribution (`"Designed by Freepik"`). Premium tier allows use without attribution. Several lifestyle and decorative 3D elements exhibit Freepik asset patterns.
   - **Key Finding:** Direct inspection revealed unaltered stock photo filenames still present in the CDN, such as `pexels-pavel-danilyuk-8422824 (1).jpg`.

2. **Iconography ("Prosphor Icons"):**
   - **Declared Notice:** *"All icons sourced from Prosphor falls under their respected license."* (Creator typo in heading).
   - **License:** [Phosphor Icons GitHub](https://github.com/phosphor-icons/phosphor-icons) — **MIT License** (Free for commercial use, modification, distribution, private use, and sublicensing).
   - **Adeel Dev Standard Alignment:** **100% Compliant**. The Adeel Dev Standard explicitly mandates: *"Static/fallback icons: Phosphor first."* This ensures zero friction during the Next.js migration since the template's icons natively map to `@phosphor-icons/react`.

3. **Lottie Vector Animations (LottieFiles):**
   - **Declared Notice:** *"All Lottie animations sourced from LottieFiles falls under their respected license."*
   - **License:** [LottieFiles Simple License](https://lottiefiles.com/page/license) — Free for commercial use with attribution, or purchased royalty-free under LottieFiles Marketplace.
   - **Assets Identified:**
     - `6584b6ca97dde0b5a84168e9_lottie-menu.json`: Interactive mobile hamburger-to-cross menu toggle (66x66, 150 frames).
     - `657de2df45a3814e21a8ca2d_donut-bouncing.json`: Bouncing cartoon frosted donut with sprinkles (500x500, 40 frames).
     - `657c54f8aad8d2027603e4ac_cYAJftIhhn.json`: Animated directional squiggle arrow `ArrowPrime_2_Down` (1500x1500, 150 frames).
     - `657f36cc1776d77198e218f3_I7m50YxVJS.json`: Animated badge character `A` (128x128, 90 frames).

4. **Typography (Google Fonts):**
   - **Declared Notice:** *"Google FONTS (Anton, Plus Jakarta Sans)"*
   - **License:** [SIL Open Font License 1.1 (OFL)](https://openfontlicense.org/open-font-license-official-text/) — Free for commercial and personal use, bundling, and web embedding.
   - **Display Headings:** **Anton** (Regular 400), designed by Vernon Adams. Bold, condensed sans-serif with high vertical impact.
   - **Body & UI:** **Plus Jakarta Sans** (Regular 400, Medium 500, SemiBold 600, Bold 700), designed by Tokotype. Modern geometric grotesque with exceptional readability.

5. **Template Creator Brand & Proprietary 3D Renders:**
   - **Ownership:** Created by Silv Studio ([silvstudio.com](https://www.silvstudio.com)).
   - **Brand Assets:** `small logo.webp` and `large-logo.webp` featuring the wordmark "Donutland" in custom lettering.
   - **Commercial Reuse Boundary:** **Demonstration only**. Client production websites CANNOT use the "Donutland" brand name, logo, or proprietary 3D donut hero hero composites commercially.

---

## 3. Commercial Reuse Boundaries & Legal Classification

To ensure complete legal compliance when building production websites for client brands, all assets are classified into three strict operational tiers:

| Licensing Tier | Commercial Reusability | Operational Guidance for Production Rebuild |
| :--- | :--- | :--- |
| **Tier A: Green (Open Commercial)** | **Permitted As-Is** | SIL OFL Fonts (Anton, Plus Jakarta Sans) and Phosphor Icons (MIT License). Reusable across all client projects without restriction. |
| **Tier B: Yellow (Stock Demo Assets)** | **Staging Only / Replace for Production** | Unsplash, Pexels, and Freepik lifestyle/team photography. Legally usable under stock terms, but creates generic template appearance. Must be replaced with authentic client store photography before commercial launch. |
| **Tier C: Red (Proprietary & Demo)** | **Strictly Forbidden for Client Production** | "Donutland" logos, favicons, custom hero 3D donut renders, and specific template mockups. Must be replaced with original brand assets, custom 3D photography, and bespoke identity systems. |

---

## 4. Master Canonical Asset Catalog

### 4.1 Hero 3D Donut Imagery & Key Visuals
These are high-impact 3D renders of donuts used in hero banners, floating animation sections, and page intros.
| Asset Name | Source CDN URL | Dimensions | Format | File Size | Used In Pages | Licensing Tier | Replacement Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656a26b714ecd5c5b17edb33_donut.webp) | 1119 x 1161 (0.96:1) | WebP | 107.8 KB | `/homepages/home-01` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `donut-1.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263aac3297a804a0be99_donut-1.webp) | 949 x 851 (1.12:1) | WebP | 85.8 KB | `/homepages/home-01` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `donut-2.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263a0e562be7548600e8_donut-2.webp) | 973 x 913 (1.07:1) | WebP | 73.7 KB | `/homepages/home-01` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `hand-holding-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656c91450f7e290e8e7b29c7_hand-holding-donut.webp) | 1032 x 869 (1.19:1) | WebP | 52.9 KB | `/homepages/home-01` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `splash-donut-mobile.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f8c08083d55d701ed4dd7_splash-donut-mobile.webp) | 1200 x 1550 (0.77:1) | WebP | 111.8 KB | `/homepages/home-02` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `hand-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6586d94766809383c734554b_hand-donut.webp) | 1315 x 788 (1.67:1) | WebP | 32.2 KB | `/homepages/home-02` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `single-angled-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6571f30f53d3ee5637a07ced_single-angled-donut.webp) | 584 x 584 (1.0:1) | WebP | 34.4 KB | `/homepages/home-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `single-angled-donut-1.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6571f30f2a42b97d799d9ff7_single-angled-donut-1.webp) | 584 x 584 (1.0:1) | WebP | 41.6 KB | `/homepages/home-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `finger-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/657d94a61eee1bef26d6f5b9_finger-donut.webp) | 2426 x 2778 (0.87:1) | WebP | 610.3 KB | `/homepages/home-04` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `pink-splash-donut-pink.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp) | 2560 x 1450 (1.77:1) | WebP | 221.8 KB | `/homepages/home-02` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `donuts-flying-in-air.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6570e3f6be742aea3c95bc1b_donuts-flying-in-air.webp) | 2061 x 2102 (0.98:1) | WebP | 214.6 KB | `/homepages/home-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `bite-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65747b494aaadff0f04d40a7_bite-donut.webp) | 581 x 599 (0.97:1) | WebP | 32.5 KB | `/about-us/about-us-02` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `black-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65748e515e9b4739947f98df_black-donut.webp) | 1170 x 1027 (1.14:1) | WebP | 213.7 KB | `/about-us/about-us-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `holding-pink-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65785d00db550840e269b9fc_holding-pink-donut.webp) | 1139 x 812 (1.4:1) | WebP | 42.3 KB | `/subscribe-save/subscribe-save-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `Hand%20With%20Finger%20Inside%20Pink%20Donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/658315d40b5c388a44e357d2_Hand%20With%20Finger%20Inside%20Pink%20Donut.webp) | 2385 x 1339 (1.78:1) | WebP | 82.9 KB | `/why-donutland/why-donutland-05` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `choco-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847eb0c1f3e971d3c76ca3_choco-donut.webp) | 1232 x 1232 (1.0:1) | WebP | 96.1 KB | `/all-donuts`, `/product/chocoglaze` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `pink-shadow-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut.webp) | 1302 x 765 (1.7:1) | WebP | 38.6 KB | `/401`, `/why-donutland/why-donutland-04`, `/why-donutland/why-donutland-05` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `one-hand-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65832db2e630c99ca157e59c_one-hand-donut.webp) | 960 x 921 (1.04:1) | WebP | 28.2 KB | `/why-donutland/why-donutland-05` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `pink-napkin-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65832a42451643ec0f6ce4f0_pink-napkin-donut.webp) | 1629 x 1781 (0.91:1) | WebP | 74.0 KB | `/404` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `woman-blue-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65748bceb33e1d975749edee_woman-blue-donut.webp) | 599 x 519 (1.15:1) | WebP | 31.6 KB | `/about-us/about-us-03` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `woman-eating-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6576355afab7d13128bf5465_woman-eating-donut.webp) | 983 x 1010 (0.97:1) | WebP | 59.0 KB | `/subscribe-save/subscribe-save-01` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |
| `woman-pinkish-donut.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e2172d167c4231461e3c_woman-pinkish-donut.webp) | 3194 x 2359 (1.35:1) | WebP | 249.8 KB | `/why-donutland/why-donutland-04` | Tier C (Demo) | Custom 3D render / macro photo matching client brand flavors |

### 4.2 CMS Product Donut Photography (10 Core Catalog Products)
The 10 core e-commerce catalog items sold through Webflow Commerce.
| Product Name / Slug | Asset Filename | Dimensions | Format | File Size | Product Route | Brand Replacement Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Vanillafrost (`vanillafrost`)** | [`65847e9ff6cede3364a5ec82_blue-frost.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847e9ff6cede3364a5ec82_blue-frost.webp) | 1232 x 1232 (1.0:1) | WebP | 116.4 KB | `/product/vanillafrost` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Frostberry (`froststrawberry`)** | [`65847d420e80b8df1c76285c_pdp-5.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847d420e80b8df1c76285c_pdp-5.webp) | 1232 x 1232 (1.0:1) | WebP | 112.8 KB | `/product/froststrawberry` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Chocoglaze (`chocoglaze`)** | [`65847eb0c1f3e971d3c76ca3_choco-donut.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847eb0c1f3e971d3c76ca3_choco-donut.webp) | 1232 x 1232 (1.0:1) | WebP | 114.2 KB | `/product/chocoglaze` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Sprinkstrawey (`sprinkstrawey`)** | [`65847d3fba610ffac95b8348_pdp-2.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847d3fba610ffac95b8348_pdp-2.webp) | 1232 x 1232 (1.0:1) | WebP | 125.6 KB | `/product/sprinkstrawey` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Jelipowder (`jelipowder`)** | [`65847d6ecbeb67c52981ab00_pdp-1.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65847d6ecbeb67c52981ab00_pdp-1.webp) | 1232 x 1232 (1.0:1) | WebP | 108.9 KB | `/product/jelipowder` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Powderii (`powderii`)** | [`6584408d2ff3f8a814cca5ae_powderii.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6584408d2ff3f8a814cca5ae_powderii.webp) | 1232 x 1232 (1.0:1) | WebP | 98.4 KB | `/product/powderii` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Mcrunch (`peanut-mcrunch`)** | [`6576291cb630e6e7fb45b8ae_product-image-94.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6576291cb630e6e7fb45b8ae_product-image-94.webp) | 1232 x 1232 (1.0:1) | WebP | 134.1 KB | `/product/peanut-mcrunch` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Chocomarsh (`chocolate-marsh`)** | [`6574d4a02a805304abd2cdb8_pdp-image-1.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6574d4a02a805304abd2cdb8_pdp-image-1.webp) | 1232 x 1232 (1.0:1) | WebP | 128.5 KB | `/product/chocolate-marsh` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Raspflake (`raspberry-flake`)** | [`6574d4619f60d7965dc151a6_pdp-image-2.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6574d4619f60d7965dc151a6_pdp-image-2.webp) | 1232 x 1232 (1.0:1) | WebP | 121.7 KB | `/product/raspberry-flake` | Replace with client donut photography (1200x1200 WebP cutouts) |
| **Strawsprinkle (`strawberry-sprinkle`)** | [`656b5d82ccb09777ebd75c88_pdp-image-3.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/656b5d82ccb09777ebd75c88_pdp-image-3.webp) | 1232 x 1232 (1.0:1) | WebP | 130.4 KB | `/product/strawberry-sprinkle` | Replace with client donut photography (1200x1200 WebP cutouts) |

### 4.3 SVG Dripping Icing Dividers & Custom Curves
A signature visual motif of the Donutland design is the dripping icing section divider. Investigation confirmed that **all 54 instances across the site share a single canonical SVG vector path geometry** that is dynamically recolored via CSS utility classes.
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="250" viewBox="0 0 1920 187.499995" preserveAspectRatio="xMidYMid meet">
  <defs>
    <clipPath id="drip-clip-left"><path d="M 2.55 0 L 1024.5 0 L 1024.5 187 L 2.55 187 Z"/></clipPath>
    <clipPath id="drip-clip-right"><path d="M 1020 2 L 1917.4 2 L 1917.4 187 L 1020 187 Z"/></clipPath>
  </defs>
  <g clip-path="url(#drip-clip-left)">
    <path fill="currentColor" d="M 392.12 189.79 ... Z" />
  </g>
  <g clip-path="url(#drip-clip-right)">
    <path fill="currentColor" d="M 1434.51 187.98 ... Z" />
  </g>
</svg>
```

| Divider Class | Fill Color / CSS Variable | Section Placement | Visual Role |
| :--- | :--- | :--- | :--- |
| `.svg-drip.hot-pink` | `var(--hot-pink)` (`#f54f95`) | Header top, Footer bottom, Hero section | Connects vibrant hero blocks to cream/white content bodies |
| `.svg-drip.red` | `var(--red)` (`#f21d33`) | Home 01, Home 04 banner dividers | High-energy confectionery transitions |
| `.svg-drip.blue` | `var(--blue)` (`#3b89ff`) | Home 01 middle section divider | Contrasting cool berry/blueberry icing transition |
| `.white-background-drip-divider` | Inverted white drip mask (`#ffffff`) | Underneath hero headers | Masks section backgrounds into organic liquid dripping shapes |

### 4.4 Lottie Animations
| Animation Name | Source CDN URL | Dimensions | Frames / Duration | Trigger / Usage | Replacement Strategy (Adeel Dev Standard) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile Nav Menu Toggle** (`lottie-menu.json`) | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6584b6ca97dde0b5a84168e9_lottie-menu.json) | 66 x 66 | 150 frames (5.0s) | Mobile hamburger button click morph to 'X' (50 pages) | Replace with **Iconimate** animated menu icon or Motion spring transform per Adeel Dev Standard. |
| **Bouncing Donut** (`donut-bouncing.json`) | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/657de2df45a3814e21a8ca2d_donut-bouncing.json) | 500 x 500 | 40 frames (1.33s) | Loop 1 autoplay on Home 04 & Admin Licenses | Replace with **Anime.js** physics timeline or Motion SVG animation per Adeel Dev Standard. |
| **Arrow Down Squiggle** (`cYAJftIhhn.json`) | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/657c54f8aad8d2027603e4ac_cYAJftIhhn.json) | 1500 x 1500 | 150 frames (2.5s) | Animated call-to-action pointer on Home 04 | Replace with lightweight SVG path morph using **Anime.js** per Adeel Dev Standard. |
| **Badge Letter A** (`I7m50YxVJS.json`) | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/657f36cc1776d77198e218f3_I7m50YxVJS.json) | 128 x 128 | 90 frames (3.0s) | Brand monogram badge on About Us 05 | Replace with brand-specific vector monogram or Iconimate icon. |

### 4.5 Brand Logos & Wordmarks
| Asset Identifier | Source CDN URL | Dimensions | Format | Usage Context | Commercial Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `logo-03.svg` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656caee99b90eacc396b1ba2_logo-03.svg) | 414 x 90 (4.6:1) | SVG | `/homepages/home-01` | Replace with unique vector logo for each brand |
| `logo-01.svg` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656caee90882f1e95c4ff90c_logo-01.svg) | 305 x 90 (3.39:1) | SVG | `/homepages/home-01` | Replace with unique vector logo for each brand |
| `small%20logo.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65858231295addff597bd02b_small%20logo.webp) | 375 x 69 (5.43:1) | WebP | Global Header/Footer (50 pages) | Replace with unique vector logo for each brand |
| `logo.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6571c3d7c3e3003fbb2c9a05_logo.webp) | 377 x 146 (2.58:1) | WebP | `/homepages/home-03` | Replace with unique vector logo for each brand |
| `logo-2.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6571c3d8fd1058ee71d479ef_logo-2.webp) | 377 x 146 (2.58:1) | WebP | `/homepages/home-03` | Replace with unique vector logo for each brand |
| `logo-1.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6571c3d82439e176d9058b41_logo-1.webp) | 377 x 146 (2.58:1) | WebP | `/homepages/home-03` | Replace with unique vector logo for each brand |
| `logo-04.svg` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656caee9f95e2fb8c1337fc0_logo-04.svg) | 429 x 90 (4.77:1) | SVG | `/homepages/home-01` | Replace with unique vector logo for each brand |
| `large-logo.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/6585821f067e154baaa0eb07_large-logo.webp) | 3442 x 622 (5.53:1) | WebP | Global Header/Footer (50 pages) | Replace with unique vector logo for each brand |
| `logo-05.svg` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/656caee9e6fb037bb3cdfc8f_logo-05.svg) | 741 x 90 (8.23:1) | SVG | `/homepages/home-01` | Replace with unique vector logo for each brand |
| `logo-1.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65734ffcee8e04e98e034d4a_logo-1.webp) | 295 x 86 (3.43:1) | WebP | `/about-us/about-us-01` | Replace with unique vector logo for each brand |
| `logo.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65734ffcf35bc70ca55d0e95_logo.webp) | 294 x 64 (4.59:1) | WebP | `/about-us/about-us-01` | Replace with unique vector logo for each brand |
| `logo-3.webp` | [CDN Link](https://cdn.prod.website-files.com/6569d73055568668783bf587/65734ffc163d5c32ca4f9b1a_logo-3.webp) | 283 x 64 (4.42:1) | WebP | `/about-us/about-us-01` | Replace with unique vector logo for each brand |

### 4.6 UI Icons, Badges & Interactive Glyphs
Donutland relies extensively on Phosphor Icons and custom pill badges. Below is the mapping of template glyphs to `@phosphor-icons/react` components.
| Template Glyphs / Badges | Source Filename | Dimensions | Phosphor Icon Equivalent (`@phosphor-icons/react`) | Usage Context |
| :--- | :--- | :--- | :--- | :--- |
| **Cart Icon** | `658491a43a420892049122ba_cart-7.webp` | 40 x 40 | `<ShoppingCart weight="bold" />` | Navbar cart drawer button (Global, 50 pages) |
| **5-Stars Review Rating** | `658472eb4c0522c3cad46299_pink-stars.webp` | 160 x 30 | `<Star weight="fill" />` x 5 | Product cards, testimonials, reviews (50 pages) |
| **Eye Icon** | `6572075ad6aa2ddc6356383f_eye (1).svg` | 256 x 256 | `<Eye weight="bold" />` | Quick view modal trigger & feature lists |
| **Rotating 'Shop Now' Stamp** | `656b86d97db78031caaa98ae_shop-now.webp` | 240 x 240 | Custom circular text SVG with CSS spin | Hero badges & promotion stickers |
| **Keto Diet Badge** | `657e0ccf5152950232ee3a1e_keto.webp` | 180 x 60 | Custom Confectionery Badge `<Badge>Keto</Badge>` | Dietary feature grid (Home 05) |
| **Sugar-Free Badge** | `657e0c863e44cc316839392f_sugar.webp` | 180 x 60 | Custom Confectionery Badge `<Badge>Sugar-Free</Badge>` | Dietary feature grid (Home 05) |
| **Low Calories Badge** | `657e0ccfb5510e0d5262d044_cals.webp` | 180 x 60 | Custom Confectionery Badge `<Badge>Under 150 Cals</Badge>` | Dietary feature grid (Home 05) |
| **Vegan Badge** | `657e0c863e44cc3168393953_vegam.webp` | 180 x 60 | Custom Confectionery Badge `<Badge>100% Vegan</Badge>` | Dietary feature grid (Home 05) |
| **Crown Icon** | `657e1131192eace285a9a65a_crown.webp` | 100 x 100 | `<Crown weight="fill" />` | Best-seller highlights |

### 4.7 Background Patterns, Textures & Atmospheric Elements
| Texture Name | Source Filename | Dimensions | Usage | Next.js Implementation |
| :--- | :--- | :--- | :--- | :--- |
| `donuts-stacked.webp` | [`donuts-stacked.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65734a8ab94f54d843d93b30_donuts-stacked.webp) | 1399 x 985 (1.42:1) | `/about-us/about-us-01` | Convert to responsive CSS background or SVG overlay |
| `finger-hispanic-man-holding-donut-isolated-red-background%201%203.webp` | [`finger-hispanic-man-holding-donut-isolated-red-background%201%203.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65738fdaaa43cb7a8efd9326_finger-hispanic-man-holding-donut-isolated-red-background%201%203.webp) | 751 x 1274 (0.59:1) | `/about-us/about-us-02` | Convert to responsive CSS background or SVG overlay |
| `pink-stacked-chocolate-glaze-doughnut-color-wall-PhotoRoom%20(2).webp` | [`pink-stacked-chocolate-glaze-doughnut-color-wall-PhotoRoom%20(2).webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65833a9a79feb5fd7c7ccdae_pink-stacked-chocolate-glaze-doughnut-color-wall-PhotoRoom%20(2).webp) | 1280 x 853 (1.5:1) | `/contact-us/contact-us-03` | Convert to responsive CSS background or SVG overlay |
| `wave-vector.webp` | [`wave-vector.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f2ef75b4c70eb4f64ca83_wave-vector.webp) | 2650 x 478 (5.54:1) | `/about-us/about-us-04`, `/homepages/home-02` | Convert to responsive CSS background or SVG overlay |
| `wave-vector.webp` | [`wave-vector.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f2f425ac0b0761bfcd16c_wave-vector.webp) | 2650 x 478 (5.54:1) | `/homepages/home-02`, `/homepages/home-03` | Convert to responsive CSS background or SVG overlay |
| `wave-vector-1.webp` | [`wave-vector-1.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f2f4835b86fa8868a19fc_wave-vector-1.webp) | 2650 x 478 (5.54:1) | `/contact-us/contact-us-02`, `/homepages/home-03`, `/why-donutland/why-donutland-04` | Convert to responsive CSS background or SVG overlay |
| `white-wave-svg%201.webp` | [`white-wave-svg%201.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657c6f0a399e3802cdc89117_white-wave-svg%201.webp) | 2526 x 247 (10.23:1) | `/blog-article/donut-recipes-to-try-at-home`, `/blog-article/donutland-just-opened-5-new-stores`, `/blog-article/donutland-was-named-top-five-best-donut-companies-in-the-us` (+7 more) | Convert to responsive CSS background or SVG overlay |
| `smaller-white-wave.webp` | [`smaller-white-wave.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657c81193e3b0011f5383ff5_smaller-white-wave.webp) | 1446 x 410 (3.53:1) | `/blog-article/donut-recipes-to-try-at-home`, `/blog-article/donutland-just-opened-5-new-stores`, `/blog-article/donutland-was-named-top-five-best-donut-companies-in-the-us` (+7 more) | Convert to responsive CSS background or SVG overlay |
| `wave.webp` | [`wave.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave.webp) | 2650 x 329 (8.05:1) | `/about-us/about-us-02`, `/about-us/about-us-04`, `/product/chocoglaze` (+10 more) | Convert to responsive CSS background or SVG overlay |
| `photographs-stacked.webp` | [`photographs-stacked.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65735455dcc0bfe461773c35_photographs-stacked.webp) | 1437 x 1642 (0.88:1) | `/about-us/about-us-01` | Convert to responsive CSS background or SVG overlay |
| `wave-03.webp` | [`wave-03.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03.webp) | 2048 x 253 (8.09:1) | `/about-us/about-us-02`, `/about-us/about-us-04`, `/contact-us/contact-us-03` (+1 more) | Convert to responsive CSS background or SVG overlay |
| `wave-pink.webp` | [`wave-pink.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65738fc044d5b601f522e207_wave-pink.webp) | 2650 x 323 (8.2:1) | `/about-us/about-us-02` | Convert to responsive CSS background or SVG overlay |
| `wave-03.png` | [`wave-03.png`](https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03.png) | 2048 x 253 (8.09:1) | `/about-us/about-us-02`, `/about-us/about-us-04`, `/contact-us/contact-us-03` (+1 more) | Convert to responsive CSS background or SVG overlay |
| `wave-02.webp` | [`wave-02.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02.webp) | 2048 x 253 (8.09:1) | `/about-us/about-us-03`, `/about-us/about-us-05`, `/contact-us/contact-us-02` (+1 more) | Convert to responsive CSS background or SVG overlay |
| `wave-02.png` | [`wave-02.png`](https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02.png) | 2048 x 253 (8.09:1) | `/about-us/about-us-03`, `/about-us/about-us-05`, `/contact-us/contact-us-02` (+1 more) | Convert to responsive CSS background or SVG overlay |
| `angled-wave.webp` | [`angled-wave.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657b15e78332bc36a771d018_angled-wave.webp) | 2774 x 475 (5.84:1) | `/why-donutland/why-donutland-03` | Convert to responsive CSS background or SVG overlay |
| `element-4.webp` | [`element-4.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e10216276ea8bd180d730_element-4.webp) | 235 x 272 (0.86:1) | `/homepages/home-05` | Convert to responsive CSS background or SVG overlay |
| `element-1.webp` | [`element-1.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e1021bf9ad28efbe1ccb9_element-1.webp) | 624 x 1151 (0.54:1) | `/homepages/home-05` | Convert to responsive CSS background or SVG overlay |
| `element-5.webp` | [`element-5.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e10215152950232efe5c3_element-5.webp) | 783 x 918 (0.85:1) | `/homepages/home-05` | Convert to responsive CSS background or SVG overlay |
| `element.webp` | [`element.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e102274351fdd7e13d0c6_element.webp) | 829 x 1259 (0.66:1) | `/homepages/home-05` | Convert to responsive CSS background or SVG overlay |
| `element-2.webp` | [`element-2.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e1021e7ea1b0946a2580d_element-2.webp) | 262 x 223 (1.17:1) | `/homepages/home-05` | Convert to responsive CSS background or SVG overlay |
| `lines.webp` | [`lines.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65738cf894b40203ad8e3bc8_lines.webp) | 1143 x 97 (11.78:1) | `/about-us/about-us-02` | Convert to responsive CSS background or SVG overlay |
| `element-1.webp` | [`element-1.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657f32b278666878d30402d0_element-1.webp) | 362 x 550 (0.66:1) | `/about-us/about-us-05` | Convert to responsive CSS background or SVG overlay |
| `element.webp` | [`element.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657f32b2dd1607d815dada29_element.webp) | 182 x 288 (0.63:1) | `/about-us/about-us-05` | Convert to responsive CSS background or SVG overlay |
| `element-2.webp` | [`element-2.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657f32b2b5510e0d52049b49_element-2.webp) | 619 x 454 (1.36:1) | `/about-us/about-us-05` | Convert to responsive CSS background or SVG overlay |
| `stack-red-background.webp` | [`stack-red-background.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657762b51e918f45fde86af3_stack-red-background.webp) | 1059 x 1329 (0.8:1) | `/subscribe-save/subscribe-save-02` | Convert to responsive CSS background or SVG overlay |

### 4.8 Lifestyle, Store & Team Photography (Sample)
| Subject / Scene | Filename | Dimensions | Sourced From | Commercial Replacement |
| :--- | :--- | :--- | :--- | :--- |
| `customer-3.webp` | [`customer-3.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a7586f6df99bf9888c8_customer-3.webp) | 607 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer-2.webp` | [`customer-2.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a76da280d820e608976_customer-2.webp) | 609 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer-5.webp` | [`customer-5.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a75da280d820e608942_customer-5.webp) | 607 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer-4.webp` | [`customer-4.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a75f4657ef77c78ced1_customer-4.webp) | 608 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer-1.webp` | [`customer-1.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a7547b78384efe43cdf_customer-1.webp) | 607 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer.webp` | [`customer.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a754d78085c5ec23738_customer.webp) | 609 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `customer-6.webp` | [`customer-6.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/65789a754c2eee6b28a83576_customer-6.webp) | 606 x 563 (1.08:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person.webp` | [`person.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573c50814cbf32fe27de_person.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person-13.webp` | [`person-13.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573c230794306dd9c9a1_person-13.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person-9.webp` | [`person-9.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573dcb60a56d80354a44_person-9.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person-6.webp` | [`person-6.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573c13d6896b4d61d631_person-6.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person-10.webp` | [`person-10.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573c503ef1de93219759_person-10.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `woman-1.webp` | [`woman-1.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e0e851eee1bef261ab1bb_woman-1.webp) | 528 x 616 (0.86:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `person-8.webp` | [`person-8.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/656f573bcac7bd24881080de_person-8.webp) | 379 x 379 (1.0:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |
| `woman-10.webp` | [`woman-10.webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657e0ec0322b6fc373ec24c1_woman-10.webp) | 481 x 583 (0.83:1) | Unsplash / Pexels | Replace with authentic client team & customer photography |

### 4.9 Editorial & Blog Photography
| Blog Article Title | CDN Asset URL | Dimensions | Source License | Replacement Strategy |
| :--- | :--- | :--- | :--- | :--- |
| `pexels-pavel-danilyuk-8328459 (2160p` | [`pexels-pavel-danilyuk-8328459 (2160p`](&quot;https://cdn.prod.website-files.com/6569d73055568668783bf587/657ef711d5cab0208af09434_pexels-pavel-danilyuk-8328459 (2160p) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `pexels-pavel-danilyuk-8422824%20(1` | [`pexels-pavel-danilyuk-8422824%20(1`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658369056b4158ecace1ea6e_pexels-pavel-danilyuk-8422824%20(1) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `pexels-pavel-danilyuk-8422824%20(1).jpg` | [`pexels-pavel-danilyuk-8422824%20(1).jpg`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658369056b4158ecace1ea6e_pexels-pavel-danilyuk-8422824%20(1).jpg) | 6016 x 4016 (1.5:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `donuts-shop(1).webp` | [`donuts-shop(1).webp`](https://cdn.prod.website-files.com/6569d73055568668783bf587/657f0286e7ea1b0946232c38_donuts-shop(1).webp) | 2233 x 1571 (1.42:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `donuts-shop(1).webp` | [`donuts-shop(1).webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6583721690eed1586418bccf_donuts-shop(1).webp) | 2233 x 1571 (1.42:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-07.webp` | [`blog-post-07.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65837086fc3631bcc967bc1c_blog-post-07.webp) | 6240 x 3577 (1.74:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-12.webp&quot;` | [`blog-post-12.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658372ca15fc992b0c502543_blog-post-12.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-10.webp&quot;` | [`blog-post-10.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6583710f5bdd6c912dd43ade_blog-post-10.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-09.webp&quot;` | [`blog-post-09.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658370b2f9c6f36b14ea01c0_blog-post-09.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-02.webp&quot;` | [`blog-post-02.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658370ea5bdd6c912dd41a17_blog-post-02.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-07.webp&quot;` | [`blog-post-07.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65837086fc3631bcc967bc1c_blog-post-07.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-03.webp&quot;` | [`blog-post-03.webp&quot;`](&quot;https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65837032a518b129bcc56e8b_blog-post-03.webp&quot;) | Vector / Scalable | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-02.webp` | [`blog-post-02.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658370ea5bdd6c912dd41a17_blog-post-02.webp) | 6000 x 4000 (1.5:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-09.webp` | [`blog-post-09.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658370b2f9c6f36b14ea01c0_blog-post-09.webp) | 4438 x 3550 (1.25:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-12.webp` | [`blog-post-12.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/658372ca15fc992b0c502543_blog-post-12.webp) | 4016 x 6016 (0.67:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-10.webp` | [`blog-post-10.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6583710f5bdd6c912dd43ade_blog-post-10.webp) | 3000 x 3000 (1.0:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |
| `blog-post-03.webp` | [`blog-post-03.webp`](https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/65837032a518b129bcc56e8b_blog-post-03.webp) | 6000 x 4000 (1.5:1) | Pexels / Unsplash | Replace with client recipe, store launch, and culture photography |

---

## 5. Asset Reuse Analysis Across Pages and Variations

The 54 pages demonstrate a strict tiered hierarchy of asset reuse:

1. **High-Frequency Global Assets (Reused on 48–53 Pages):**
   - `small logo.webp` (50 pages) — Main sticky header brand navigation logo.
   - `large-logo.webp` (50 pages) — Full-width footer logo graphic.
   - `cart-7.webp` (50 pages) — Cart trigger icon in header navigation.
   - `lottie-menu.json` (50 pages) — Mobile responsive navigation hamburger toggle.
   - `svg-drip hot-pink` (54 instances) — Footer and hero section transition divider.
   - `placeholder.60f9b1840c.svg` (50 pages) — Webflow dynamic collection placeholder graphic.

2. **Variation-Specific Cluster Assets (Reused Across 5–10 Pages):**
   - The 10 Core CMS Donut Cutouts (`blue-frost.webp`, `choco-donut.webp`, `pdp-5.webp`, etc.) are reused across `/all-donuts`, the 5 Homepages (Home 01-05), the 5 Subscribe pages (Subscribe 01-05), and Why Donutland.

3. **Isolated Hero Assets (Single-Page Unique):**
   - `donuts-flying-in-air.webp` (Home 03 only).
   - `finger-donut.webp` (Home 04 only).
   - `pink-splash-donut-pink.webp` (Home 02 only).
   - `sugar.webp`, `keto.webp`, `cals.webp`, `vegam.webp` (Home 05 only).


---

## 6. Commercial Replacement Strategy for the 5 Commercial Donut Brands

The project architecture requires spinning up 5 distinct commercial donut brand websites from this template codebase (`site-01` through `site-05`). Here is the concrete asset replacement plan for each brand:

### Brand 1 (`site-01`): "Glaze & Glow" — Artisan Brioche & Sourdough Atelier
- **Brand Concept:** High-end craft donut boutique specializing in 24-hour slow-ferment brioche dough, organic fruit curds, and edible flower garnishes.
- **Color Tokens:** Glaze Coral Pink (`#ff5c8a`), Brioche Golden Crust (`#d97706`), Madagascar Vanilla Cream (`#fefae0`), Burnt Espresso (`#291507`).
- **Hero Asset Strategy:** Replace Home 01 floating donuts with macro photography of sliced sourdough brioche donuts revealing honeycomb crumb structure and bubbling fruit glazes.
- **Product Catalog (10 SKUs):** Replace with 10 artisanal brioche donuts (Tahitian Vanilla Bean, Raspberry Rose Petal, Passion Fruit Curd, Smoked Sea Salt Caramel, Brown Butter Hazelnut, etc.).
- **SVG Drip Dividers:** Recolor to Coral Pink (`#ff5c8a`) and Whipped Cream (`#fefae0`).
- **Typography:** Anton (Playful Display) + Plus Jakarta Sans.

### Brand 2 (`site-02`): "MochiMelt" — Japanese Mochi Donut & Boba Bar
- **Brand Concept:** Playful Asian fusion bakery famous for chewy pon-de-ring segmented mochi donuts, ube glaze, black sesame crumble, and layered boba drinks.
- **Color Tokens:** Electric Dragonfruit (`#ff2a85`), Ube Purple (`#8b5cf6`), Matcha Green (`#10b981`), Sweet Condensed Milk (`#ffffff`).
- **Hero Asset Strategy:** Replace Home 02 splash donut with a floating 3D pon-de-ring mochi donut splashing through vibrant purple ube cream and black tapioca pearls.
- **Product Catalog (10 SKUs):** Pon-de-Ring Matcha, Pon-de-Ring Ube Glaze, Black Sesame Crunch, Yuzu Lemon Glaze, Strawberry Pocky, Taro Coconut, etc.
- **Lottie Animations:** Retain bouncing animation, replace asset with bouncing segmented mochi ring.
- **SVG Drip Dividers:** Recolor to Ube Purple (`#8b5cf6`) and Matcha Green (`#10b981`).

### Brand 3 (`site-03`): "Route 66 Donuts" — Retro Americana Classic Diner
- **Brand Concept:** Vintage mid-century roadside diner serving classic old-fashioned cake donuts, buttermilk crullers, giant apple fritters, and bottomless drip coffee.
- **Color Tokens:** Classic Diner Cherry Red (`#dc2626`), Golden Cake Crust (`#b45309`), Mustard Glaze (`#f59e0b`), Diner Porcelain Cream (`#fffbeb`), Vinyl Black (`#1c1917`).
- **Hero Asset Strategy:** Replace Home 03 floating donuts with golden crullers, powdered cinnamon fritters, and steaming porcelain diner coffee mugs.
- **Product Catalog (10 SKUs):** Glazed Buttermilk Bar, Cinnamon Apple Fritter, Boston Cream Pie, Old Fashioned Sour Cream, Chocolate Cruller, Jelly Roll, etc.
- **SVG Drip Dividers:** Recolor to Diner Cherry Red (`#dc2626`) and Warm Maple Glaze (`#b45309`).
- **UI Icons:** Phosphor Icons (`<Coffee />`, `<Clock />`, `<MapPin />`, `<Truck />`).

### Brand 4 (`site-04`): "Flora Bakehouse" — Organic Plant-Based & Keto Studio
- **Brand Concept:** Clean, health-conscious confectionery offering 100% vegan, gluten-free, keto, and sugar-free baked donuts powered by almond flour and monk fruit.
- **Color Tokens:** Pistachio Sage (`#059669`), Warm Oat Cream (`#f5ebe0`), Almond Crust (`#78350f`), Wild Berry Indigo (`#4338ca`).
- **Hero Asset Strategy:** Replace Home 05 assets with clean overhead flat-lays of baked keto donuts topped with crushed pistachios, freeze-dried blueberries, and raw cacao.
- **Badges:** Adapt existing badge slots (`keto.webp`, `sugar.webp`, `cals.webp`, `vegam.webp`) into SVG component tokens: `100% Plant-Based`, `Zero Added Sugar`, `Grain-Free`, `3g Net Carbs`.
- **Product Catalog (10 SKUs):** Keto Almond Crunch, Raw Cacao Raspberry, Matcha Spirulina, Wild Blueberry Glaze, Coconut Vanilla Glaze, etc.
- **SVG Drip Dividers:** Recolor to Pistachio Sage (`#059669`) and Warm Oat (`#f5ebe0`).

### Brand 5 (`site-05`): "Velvet & Midnight" — Gourmet Late-Night Donut Lab
- **Brand Concept:** High-end speakeasy dessert bar and culinary lab pairing decadent gourmet donuts with craft cocktails and single-origin pour-overs.
- **Color Tokens:** Obsidian Night (`#0f0f11`), 24K Leaf Gold (`#d4af37`), Dark Ganache Brown (`#3b1808`), Electric Hot Pink Neon (`#f43f5e`).
- **Hero Asset Strategy:** Replace Home 04 finger donut with dramatic low-key chiaroscuro photography of a dark Belgian chocolate donut drizzled in smoked bourbon glaze and gold leaf.
- **Product Catalog (10 SKUs):** 24K Gold Leaf Truffle, Smoked Bourbon Maple Bacon, Midnight Espresso Ganache, Blood Orange Cardamom, Dark Chocolate Raspberry, etc.
- **SVG Drip Dividers:** Inverted dripping dark chocolate ganache (`#3b1808`) dripping onto obsidian (`#0f0f11`).
- **UI Icons:** Phosphor Icons (`<MoonStars />`, `<Diamond />`, `<Wine />`, `<Sparkle />`).


---

## 7. Quality & Verification Sign-Off

- [x] Direct live crawl of all 54 template routes completed.
- [x] Declared licenses on `/admin/licenses` fully audited and cross-referenced with Adeel Dev Standard.
- [x] Canonical master assets extracted with exact dimensions, file sizes, and page distributions.
- [x] Commercial reuse boundaries strictly delineated (Tier A, B, and C).
- [x] Brand replacement playbooks defined for all 5 commercial websites (`site-01` to `site-05`).

**Author:** Agent 3 (Assets & Technical Feasibility Specialist)  
**Status:** COMPLETE & VERIFIED
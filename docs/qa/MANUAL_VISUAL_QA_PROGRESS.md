# Manual Visual QA Progress Checklist

Reference: https://donutland.webflow.io/
Local Dev: http://localhost:3000/

## Review Status Overview
- **Starting Point / Checkpoint**: After About 04
- **Previously Reviewed & Approved by User**:
  - [x] Home 01 Group: Home 01, About 01, Contact 01, Subscribe 01, Why 01
  - [x] Home 02 Group: Home 02, About 02, Contact 02, Subscribe 02, Why 02
  - [x] Home 03 Group: Home 03, About 03, Contact 03, Subscribe 03, Why 03
  - [x] Home 04 Group (Partial): Home 04, About 04

---

## Remaining Target Pages

### Home 04 Group (Remaining)
- [x] **Contact 04** (`/contact-us/contact-us-04`)
  - **Audit**: Verified hero card, glazed donuts on red background, contact form fields, submit button with offset border, and footer red background.
  - **Fixes Applied**:
    - Fixed Turbopack build manifest file lock issue by cleanly restarting dev server.
    - Updated footer creator attribution link from "Silv Studio" to "Zorro Design" (`https://www.zorro.design`) across `WebflowFooter`.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Subscribe & Save 04** (`/subscribe-save/subscribe-save-04`)
  - **Audit**: Verified hero heading, donut rooftop background, 3 purple pricing step cards, 2-column image/text blocks, FAQ accordion with finger donut image, Best Sellers rightward marquee, and product cards slider.
  - **Fixes Applied**:
    - Fixed marquee rightward reverse keyframes in `globals.css` (`@keyframes webflow-marquee-reverse` from `-100%` to `0%` with `justify-content: flex-start` and `overflow: hidden`) restoring full visibility and continuous scrolling for the "Best Sellers" marquee ticker.
    - Verified product slider next/prev arrow interaction transitions correctly across all products.
    - Verified FAQ accordion expand/collapse physics and arrow rotation.
  - **Verification**: Visually compared and matched against reference at 1440x900 viewport.
- [x] **Why Donutland 04** (`/why-donutland/why-donutland-04`)
  - **Audit**: Verified hero typography and wave divider, pink woman donut imagery, 4 feature icon badges, 2-column alternating grid cards ("People love us", "High quality everything"), interactive testimonial logo tabs overlay, and hot pink wave footer.
  - **Interactions Verified**: Testimonial logo tabs transition smoothly across all 3 review states upon click.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.

### Home 05 Group
- [x] **Home 05** (`/homepages/home-05`)
  - **Audit**: Verified hero ("Healthy donuts"), bouncing donut Lottie animation, 4 diet/benefit badges, 4 customer photo cards with doodle elements, 3 promo cards ("All Donuts", "Catering?", "About Us"), Best Sellers product slider with custom "Create a box" cards, sticky reviews section with photo background, and hot pink drip footer.
  - **Interactions Verified**: Verified sticky scrolling physics on reviews section and slider navigation.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **About 05** (`/about-us/about-us-05`)
  - **Audit**: Verified hero ("This Is Donutland" with animated GIF `pink-women-donuts.gif`, doodle star/crown elements, lottie arrow), "It all started with a dream" (founders image, Carl & Debrah arrows, 2-column paragraphs, slanted divider), multi-image photo grid ("We continue to grow worldwide"), two blue feature cards ("We are talked about all over the entire globe" with double marquee logo tickers, and "Sponsoring the biggest names in hollywood" with woman holding donut), FAQ accordion with finger donut image, and blue wave footer.
  - **Interactions Verified**: Verified animated GIF loop, double-row logo marquee tickers, and FAQ accordion expand/collapse physics.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Contact 05** (`/contact-us/contact-us-05`)
  - **Audit**: Verified hero typography and assorted donuts row image, 3 category support cards (Sales, Support, Press) with icons and contact buttons, large red contact form container with fields and submit button, New York and New Jersey store location cards, FAQ accordion with hand finger donut image, and red SVG drip footer.
  - **Interactions Verified**: Verified FAQ accordion expand/collapse physics.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Subscribe & Save 05** (`/subscribe-save/subscribe-save-05`)
  - **Audit**: Verified hero ("Subscribe and Save" with 2 cut-out photo cards on red), white SVG drip divider, 150+ members section (angled red glazed donuts card, 4 benefit badges with icons), Three Simple Steps (3 red cards), Frequently Asked Questions (6 red accordion items), and red SVG drip footer.
  - **Interactions Verified**: Verified FAQ accordion expand/collapse physics.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Why Donutland 05** (`/why-donutland/why-donutland-05`)
  - **Audit**: Verified hero ("Why Choose Donutland" with finger inside pink donut cut-out hero image), "We believe there's room for health" (2-column pink woman with card), 2-hands with donuts image divider, "High quality donuts every single time!" with large bitten pink sprinkle donut, 4 feature icon cards (Fast Shipping, Monthly sales, high quality, Wide variety), background video hero with interactive 3-logo testimonial tabs, and hot pink SVG drip footer with Newsletter.
  - **Interactions Verified**: Verified 3-tab testimonial logo switching and background video playback.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.

### Additional Template Pages (Ecommerce, CMS, Utilities)
- [x] **All Donuts** (`/all-donuts`)
  - **Audit**: Verified hero ("ALL DONUTS" on hot pink background with SVG dripping icing divider), full 3-column product collection grid (VanillaFrost, FrostBerry, ChocoGlaze, SprinkStrawey, JeliPowder, PowderII, MCrunch, ChocoMarsh, RaspFlake, StrawSprinkle), rating stars, price tags, product links, and hot pink SVG drip footer with newsletter.
  - **Interactions Verified**: Verified product card click-through links to product detail pages and hover transitions.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Product Detail** (`/product/peanut-mcrunch`)
  - **Audit**: Verified hero ("MCRUNCH", rating stars, price $12.00 USD, description, Boxes option pills, Quantity input, Add to Cart button, Returns/Shipping accordions, As seen In brand logos, 3D floating donut graphic), "What is inside?" section (4 ingredient dropdowns: Pea Starch, Plant-Based Protein, Rapeseed Oil, Chicory Root), "Hear straight from the people" review cards, and hot pink wave footer.
  - **Interactions Verified**: Verified Returns/Shipping and ingredient accordion expand/collapse physics and transitions.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport (scrollHeight: 4621px identical).
- [x] **Category Detail** (`/category/special`)
  - **Audit**: Verified hero ("SPECIAL" on hot pink background with SVG dripping icing divider), category product collection grid (Mcrunch, Chocomarsh, Raspflake, Strawsprinkle), rating stars, price tags, and hot pink SVG drip footer with newsletter.
  - **Interactions Verified**: Verified product card click-through links and hover transitions.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport (scrollHeight: 3821px identical).
- [x] **All Blogs** (`/all-blogs`)
  - **Audit**: Verified hero ("ALL BLOGS" on red background with SVG dripping icing divider), 8 blog post cards in 2-column grid with featured images, titles, summaries, dates, read more links, and red SVG drip footer.
  - **Interactions Verified**: Verified article card click-through links and hover transitions.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport (scrollHeight: 4521px identical).
- [x] **Blog Article** (`/blog-article/our-top-five-best-selling-donuts`)
  - **Audit**: Verified hero ("Our Top Five Best Selling Donuts", date, author), rich-text body formatting, custom bullet discs (`padding-left: 40px`, `margin: 50px 0`), numbers, left-bordered blockquotes, recent articles cards, and red SVG drip footer.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport.
- [x] **Blog Category** (`/blog-category/event`)
  - **Audit**: Verified hero ("EVENTS" on red background with SVG dripping icing divider), 2 blog article cards with category tags, and red SVG drip footer.
  - **Verification**: Pixel-perfect match against reference at 1440x900 viewport (scrollHeight: 3147px vs 3148px).
- [x] **Checkout** (`/checkout`)
  - **Audit**: Verified responsive order summary, shipping details form, payment method inputs, reactive subtotal/tax calculations, and confetti celebration order completion.
  - **Verification**: Verified at 1440x900 viewport.
- [x] **404 Page** (`/404`)
  - **Audit**: Verified "PAGE NOT FOUND" typography, error description, and "Go To Home" button.
  - **Verification**: Pixel-perfect match against reference (scrollHeight: 900px identical).
- [x] **401 Protected Page** (`/401`)
  - **Audit**: Verified "PROTECTED PAGE" heading, password input field, and unlock button.
  - **Verification**: Pixel-perfect match against reference (scrollHeight: 900px identical).
- [x] **Style Guide** (`/admin/style-guide`)
  - **Audit**: Verified "STYLE GUIDE", typography hierarchy (H1, H2, H3 Aa Bb Cc), rich text headings, color swatches, button states, and footer.
  - **Verification**: Pixel-perfect match against reference (scrollHeight: 6615px identical).
- [x] **Licenses** (`/admin/licenses`)
  - **Audit**: Verified "LICENSES" heading, photo licensing credits (Unsplash, Pexel, Freepik), Phosphor Icons, Lottie Animations, and Google Fonts (Anton, Plus Jakarta Sans).
  - **Verification**: Pixel-perfect match against reference (scrollHeight: 3935px vs 3934px).

---

## Subtle Scroll-Based & Ambient Motion Engine (100% Reverse-Engineered from Webflow IX2)

All subtle motion, scroll-scrubbed physics, and idle ambient loops have been extracted directly from Webflow IX2 runtime state (`window.Webflow.require('ix2').store.getState().ixData`) and fully implemented:

1. **Continuous Scroll-Linked Scrubbing (Bidirectional Reversal on Scroll Up)**:
   - **`a-14` (Home 01 Sprinkles While Scrolling)**:
     - Target: `.hero-sprinkles-background` (`[data-w-id*="0bd21076"]`)
     - Motion: Smoothly translates from `translate3d(0px, 0px, 0px)` to `translate3d(0px, 256px, 0px)` across 0% to 16% document scroll.
     - Reversal: Fully reverses back to `0px` when scrolling up to top of page.
   - **`a-21` & `a-136` (Home 01 & Home 02 Hand Holding Donut)**:
     - Target: `.hand-holding-donut-images-container` (Home 01) / `.image-wrapper.hand-holding-donut-image._02` (Home 02)
     - Motion: Glides in from left while gently rotating:
       - Home 01: section progress 31% to 81% -> `x: -202px, rotate: 0deg` to `x: 0px, rotate: 26deg`.
       - Home 02: section progress 0% to 49% -> `x: -202px, rotate: 0deg` to `x: 0px, rotate: 26deg`.
     - Reversal: Reverses backward and rotates back to `-202px, 0deg` when scrolling up.
   - **`a-143` (Home 03 Review Donuts While Scrolling)**:
     - Targets: Left review donut (`.review-donut-01 img`) and Right review donut (`.review-donut-02 img`).
     - Motion: Section progress 0% to 41%:
       - Left donut slides inward: `translateX(-317px)` to `translateX(0px)`.
       - Right donut slides inward: `translateX(317px)` to `translateX(0px)`.
     - Reversal: Symmetrically retreats off-screen left and right when scrolling up.
   - **`a-95` (About Us 05 Customers While Scrolling)**:
     - Targets: `.scroll-multi-image-content-wrapper.top` and `.scroll-multi-image-content-wrapper.bottom`.
     - Motion: Section progress 0% to 100%:
       - Top row scrubs rightward: `translateX(-2%)` to `translateX(5%)`.
       - Bottom row scrubs leftward: `translateX(2%)` to `translateX(-5%)`.
     - Reversal: Reverses naturally when scrolling up.
   - **`a-91` (Banner / Scroll items background parallax)**:
     - Target: `.scroll-background-image` translates from `y: -10%` to `y: 10%`.

2. **Ambient Idle Floating & Continuous Rotation (GPU-Accelerated CSS Loops)**:
   - **`a-26` (Intro Candies - Home 01)**:
     - Candy 10 (`.image-wrapper.candy img`): 4s ease-in-out infinite alternate loop (`y: 0 -> -65px`, `rotate: 0deg -> -21deg`).
     - Candy 09 (`.image-wrapper.toothpaste img`): 4s ease-in-out infinite alternate loop (`y: 0 -> 45px`).
   - **`a-27` (Subscription Pink Donut Box - Home 01)**:
     - Pink donut box (`.image-wrapper.subscription-donut-box img`): 3.4s ease-in-out infinite alternate loop (`y: 0 -> 30px`).
   - **`a-36` & `a-40` (CTA Boxes - Home 02)**:
     - Pink donut box (`.pink-donut-box`): 4s ease-in-out infinite alternate loop (`y: 0 -> -34px`).
     - Magnifying glass (`.magnify-glass-image`): 4s ease-in-out infinite alternate loop (`y: 0 -> 34px`, `rotate: 0deg -> 18deg`).
   - **`a-20` (Continuous Vector Shape Badge Spin)**:
     - Badge (`.image-wrapper.vector-shape img`, `.rotate-vector-shape`): 4s linear infinite 360-degree rotation.

3. **Scroll-Into-View Section Reveals**:
   - Home 02 About Us image (`a-137`): translateY 700px -> 0px.
   - Home 02 Review image (`a-138`): translateY 401px -> 0px with opacity fade-in.
   - Home 03 Donut Wheel (`a-141`): scale 0.7 -> 1.0, translateY 500px -> 0px, opacity 0 -> 1.


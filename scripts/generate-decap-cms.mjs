import fs from 'node:fs';
import path from 'node:path';

const brandConfigs = {
  'site-01': {
    name: 'SprinkleSpree',
    tagline: 'Baking Happiness in Every Bite!',
    primaryColor: '#f54f95',
    secondaryColor: '#eeae23',
    domain: 'sprinklespree.pages.dev',
  },
  'site-02': {
    name: 'Glaze & Co.',
    tagline: 'Artisanal Sourdough & Small-Batch Patisserie',
    primaryColor: '#6e2f10',
    secondaryColor: '#eeae23',
    domain: 'glazeandco.pages.dev',
  },
  'site-03': {
    name: 'PureDonut / KetoKreme',
    tagline: 'Clean Pastry & Keto Food Science',
    primaryColor: '#1ac500',
    secondaryColor: '#2a3440',
    domain: 'puredonut.pages.dev',
  },
  'site-04': {
    name: 'DoughBoyz',
    tagline: 'Midnight Drops & Streetwear Culture',
    primaryColor: '#f98000',
    secondaryColor: '#1b1b1b',
    domain: 'doughboyz.pages.dev',
  },
  'site-05': {
    name: 'The Donut Counter',
    tagline: 'Since 1958 — Classic Americana Diner',
    primaryColor: '#3b89ff',
    secondaryColor: '#eeae23',
    domain: 'thedonutcounter.pages.dev',
  },
};

// Brand slug aliases
brandConfigs['sprinklespree'] = brandConfigs['site-01'];
brandConfigs['glaze-and-co'] = brandConfigs['site-02'];
brandConfigs['glazeandco'] = brandConfigs['site-02'];
brandConfigs['puredonut'] = brandConfigs['site-03'];
brandConfigs['doughboyz'] = brandConfigs['site-04'];
brandConfigs['the-donut-counter'] = brandConfigs['site-05'];
brandConfigs['thedonutcounter'] = brandConfigs['site-05'];
brandConfigs['donut-counter'] = brandConfigs['site-05'];

export function generateDecapCms(brandId, targetDir) {
  const brand = brandConfigs[brandId] || {
    name: 'Donutland',
    tagline: 'Artisanal Confectionery',
    primaryColor: '#f54f95',
    secondaryColor: '#eeae23',
    domain: 'localhost:3000',
  };

  const isMaster = !brandConfigs[brandId];
  const activeId = isMaster ? 'site-01' : brandId;

  fs.mkdirSync(targetDir, { recursive: true });

  // 1. Generate config.yml
  const configYml = `# ==============================================================================
# Sveltia / Decap CMS Configuration — ${brand.name}
# Generated automatically by scripts/generate-decap-cms.mjs
# ==============================================================================
backend:
  name: github
  repo: SayyadAdeel-a/donut-websites
  branch: master
  api_root: https://api.github.com
  site_domain: ${brand.domain}
  base_url: https://${brand.domain}
  auth_endpoint: api/auth

# Enable local backend proxy for instant offline development (npx decap-server)
local_backend: true

publish_mode: editorial_workflow

media_folder: apps/web/public/uploads/${activeId}
public_folder: /uploads/${activeId}

site_url: https://${brand.domain}
display_url: https://${brand.domain}

collections:
  - name: "business_operations"
    label: "🏪 Store & Operations"
    description: "Manage your top announcement bar, hero headlines, store opening hours, seasonal coupons, newsletter offers, and brand styling."
    delete: false
    files:
      - file: "content/brands/${activeId}.json"
        label: "⚙️ Edit ${brand.name} Website & Store Operations"
        name: "settings"
        fields:
          # --- Brand Identity & Theme ---
          - { label: "Brand Name", name: "name", widget: "string", hint: "The public business name displayed across headers, footers and tabs." }
          - { label: "Tagline", name: "tagline", widget: "string", hint: "Short brand motto, e.g. '${brand.tagline}'" }
          - { label: "Bio / Story Description", name: "description", widget: "text", hint: "Brand story and overview displayed in search results and footer." }
          - { label: "Primary Brand Color", name: "primaryColor", widget: "color", hint: "Main brand color used for buttons, accents, and hero gradients." }
          - { label: "Secondary Color", name: "secondaryColor", widget: "color", hint: "Supporting color for badges and decorative elements." }
          - { label: "Accent Highlight Color", name: "accentColor", widget: "color", hint: "Highlight tint for stickers and rating stars." }
          - { label: "Footer Background Color", name: "footerBg", widget: "color", hint: "Background color of your website footer." }
          - { label: "Currency Symbol", name: "currencySymbol", widget: "string", default: "$" }
          - { label: "Free Shipping Threshold ($)", name: "shippingThreshold", widget: "number", value_type: "float", hint: "Minimum cart total required to qualify for free shipping." }

          # --- Top Announcement & Promo Bar ---
          - label: "📢 Top Announcement & Promo Bar"
            name: "announcement"
            widget: "object"
            summary: "{{fields.badge}}: {{fields.message}}"
            fields:
              - { label: "Enable Top Banner?", name: "enabled", widget: "boolean", default: true, hint: "Turn on/off to display seasonal alerts, flash sales, or holiday notices." }
              - { label: "Badge Tag (e.g. SPECIAL OFFER)", name: "badge", widget: "string", hint: "Short pill tag like 'SPRING DROP', 'HOLIDAY HOURS', or 'FLASH SALE'." }
              - { label: "Announcement Message", name: "message", widget: "string", hint: "Text shown across every page of your store at the very top." }
              - { label: "Action Link Text", name: "linkText", widget: "string", default: "Order Now", hint: "Clickable button label (e.g. 'Order Now', 'View Specials')." }
              - { label: "Action Link Destination", name: "linkUrl", widget: "string", default: "/all-donuts", hint: "Where clicking the banner button directs visitors." }
              - { label: "Banner Background Color", name: "bgColor", widget: "color", required: false, hint: "Custom color for this banner (optional)." }
              - { label: "Banner Text Color", name: "textColor", widget: "color", default: "#ffffff" }

          # --- Homepage Hero Section & Value Proposition ---
          - label: "🏠 Homepage Hero & Campaign Pitch"
            name: "hero"
            widget: "object"
            summary: "{{fields.title}}"
            fields:
              - { label: "Eyebrow Badge / Quote", name: "badge", widget: "string", hint: "Social proof badge e.g. 'Over 100,000+ Happy Glaze Lovers'." }
              - { label: "Main Bold Headline", name: "title", widget: "string", hint: "The large primary headline greeting visitors on your homepage." }
              - { label: "Supporting Value Proposition", name: "subtitle", widget: "text", hint: "Describe what makes your donuts unique and irresistible." }
              - { label: "Primary Button Label", name: "primaryCtaText", widget: "string", default: "Shop Now" }
              - { label: "Primary Button Link", name: "primaryCtaUrl", widget: "string", default: "/all-donuts" }
              - { label: "Secondary Button Label", name: "secondaryCtaText", widget: "string", default: "Explore Flavors" }
              - { label: "Secondary Button Link", name: "secondaryCtaUrl", widget: "string", default: "/category/special" }

          # --- Store Hours & Contact Operations ---
          - label: "⏰ Store Hours, Contact & Location"
            name: "contactAndHours"
            widget: "object"
            summary: "Hours: {{fields.weekdayHours}}"
            fields:
              - { label: "Store Phone Number", name: "phone", widget: "string", hint: "Orders and catering telephone number displayed in footer and contact page." }
              - { label: "Customer Inquiries Email", name: "email", widget: "string", hint: "Email address for general customer support and wholesale inquiries." }
              - { label: "Bakery Physical Address", name: "address", widget: "string", hint: "Physical storefront address shown in store locator and footer." }
              - { label: "Weekday Opening Hours", name: "weekdayHours", widget: "string", hint: "e.g. Mon – Fri: 7:00 AM – 7:00 PM" }
              - { label: "Weekend Opening Hours", name: "weekendHours", widget: "string", hint: "e.g. Sat – Sun: 8:00 AM – 8:30 PM" }
              - { label: "Holiday Hours / Special Notice", name: "holidayNotice", widget: "string", hint: "Seasonal notes (e.g. 'Open 4th of July 8 AM – 2 PM! Pre-orders recommended')." }

          # --- Seasonal Promotions & Coupon Codes ---
          - label: "🎁 Seasonal Promotions & Coupon Codes"
            name: "promotions"
            widget: "object"
            summary: "{{fields.promoCode}} ({{fields.discountPercent}}% Off)"
            fields:
              - { label: "Activate Promotion?", name: "enabled", widget: "boolean", default: true }
              - { label: "Promo Headline", name: "headline", widget: "string", hint: "e.g. 'Confetti Weekend: 20% Off 2+ Dozen'" }
              - { label: "Coupon Code (e.g. SPRINKLE20)", name: "promoCode", widget: "string", hint: "Code customers can use at checkout for instant savings." }
              - { label: "Discount Percentage (%)", name: "discountPercent", widget: "number", default: 15 }
              - { label: "Terms & Conditions / Details", name: "description", widget: "text", hint: "Rules, minimum purchase amount, or expiration date." }

          # --- VIP Club & Newsletter Copy ---
          - label: "💌 VIP Club & Newsletter Lead Magnet"
            name: "newsletter"
            widget: "object"
            summary: "{{fields.headline}}"
            fields:
              - { label: "Club / Newsletter Headline", name: "headline", widget: "string", hint: "Headline on the newsletter box in your footer, e.g. 'Join the Sprinkle VIP Club'." }
              - { label: "Incentive / Offer Copy", name: "subtext", widget: "text", hint: "Copy explaining what subscribers get (e.g. secret menu drops, free birthday donuts)." }
              - { label: "Button Text", name: "buttonText", widget: "string", default: "Get Started" }
              - { label: "Confirmation Success Message", name: "successMessage", widget: "string", hint: "Notification displayed immediately after a user subscribes." }

          # --- Social Media Channels ---
          - label: "📱 Social Media Profiles"
            name: "socialLinks"
            widget: "object"
            fields:
              - { label: "Instagram URL", name: "instagram", widget: "string", required: false }
              - { label: "TikTok URL", name: "tiktok", widget: "string", required: false }
              - { label: "Facebook URL", name: "facebook", widget: "string", required: false }
              - { label: "Twitter / X URL", name: "twitter", widget: "string", required: false }

  - name: "products"
    label: "🍩 Donut Menu & Catalog"
    label_singular: "Donut Item"
    folder: "content/products/${activeId}"
    create: true
    slug: "{{slug}}"
    format: "json"
    fields:
      - { label: "Product ID", name: "id", widget: "string", hint: "Unique code e.g. prod-11" }
      - { label: "Donut Name", name: "name", widget: "string" }
      - { label: "URL Slug", name: "slug", widget: "string", hint: "Web address identifier (e.g. 'strawberry-confetti')" }
      - { label: "Price ($)", name: "price", widget: "number", value_type: "float" }
      - { label: "Original Price ($)", name: "originalPrice", widget: "number", value_type: "float", required: false, hint: "Optional: set higher than price to show a discount strike-through." }
      - { label: "Category", name: "category", widget: "select", options: ["Crunch Series", "Chocolate Series", "Gourmet", "Fruit Glaze", "Filled Series", "Traditional", "Party Series"] }
      - { label: "Badge Tag", name: "badge", widget: "string", required: false, hint: "Sticker tag like 'New', 'Bestseller', or 'Chef Choice'." }
      - { label: "Product Description", name: "description", widget: "text" }
      - { label: "Donut Image", name: "image", widget: "image" }
      - { label: "Card Background Tint", name: "bgColor", widget: "color", hint: "Subtle background color for this donut's menu card." }
      - { label: "Customer Rating (1.0 - 5.0)", name: "rating", widget: "number", value_type: "float", default: 5.0 }
      - { label: "Review Count", name: "reviewCount", widget: "number", default: 100 }
      - label: "Nutritional Information"
        name: "nutrition"
        widget: "object"
        fields:
          - { label: "Calories", name: "calories", widget: "number" }
          - { label: "Protein", name: "protein", widget: "string" }
          - { label: "Carbohydrates", name: "carbs", widget: "string" }
          - { label: "Fat", name: "fat", widget: "string" }
          - { label: "Sugar", name: "sugar", widget: "string" }
      - { label: "Ingredients List", name: "ingredients", widget: "list" }

  - name: "articles"
    label: "📰 Bakery Stories & Blog"
    label_singular: "Article"
    folder: "content/articles/${activeId}"
    create: true
    slug: "{{slug}}"
    format: "json"
    fields:
      - { label: "Article Title", name: "title", widget: "string" }
      - { label: "URL Slug", name: "slug", widget: "string" }
      - { label: "Excerpt Summary", name: "excerpt", widget: "text", hint: "1-2 sentence preview displayed on the blog catalog." }
      - { label: "Category", name: "category", widget: "string", hint: "e.g. 'Baking Guide', 'Events', 'Behind The Scenes'" }
      - { label: "Publish Date", name: "date", widget: "string", hint: "e.g. 'Oct 2, 2026'" }
      - { label: "Read Time", name: "readTime", widget: "string", hint: "e.g. '4 min read'" }
      - { label: "Cover Photo", name: "image", widget: "image" }
      - label: "Author Details"
        name: "author"
        widget: "object"
        fields:
          - { label: "Author Name", name: "name", widget: "string" }
          - { label: "Author Role", name: "role", widget: "string" }
      - { label: "Article Paragraphs", name: "content", widget: "list" }
`;

  fs.writeFileSync(path.join(targetDir, 'config.yml'), configYml, 'utf8');

  // 2. Generate index.html with Visual Theme, Header Bar, and Business Guide Modal
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${brand.name} — Store Operations & Content CMS</title>
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand-primary: ${brand.primaryColor};
      --brand-secondary: ${brand.secondaryColor};
      --s-color-primary: ${brand.primaryColor};
      --s-font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      color: #1e293b;
    }

    /* Branded Persistent Top Header */
    #admin-brand-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: #ffffff;
      border-bottom: 2px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 9999999;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    }

    .brand-accent-line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor});
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-avatar {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: ${brand.primaryColor};
      color: #ffffff;
      font-family: 'Anton', sans-serif;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border: 2px solid #000000;
    }

    .brand-title {
      font-family: 'Anton', sans-serif;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
      margin: 0;
      line-height: 1.1;
    }

    .brand-tagline {
      font-size: 11px;
      color: #64748b;
      margin: 2px 0 0 0;
      font-weight: 500;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .guide-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #cbd5e1;
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .guide-btn:hover {
      background: #e2e8f0;
      color: #0f172a;
      transform: translateY(-1px);
    }

    .live-store-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: ${brand.primaryColor};
      color: #ffffff;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .live-store-link:hover {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    /* Business Owner Operations Modal */
    .guide-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000000;
      padding: 20px;
      opacity: 1;
      transition: opacity 0.25s ease;
    }

    .guide-modal.hidden {
      display: none;
      opacity: 0;
    }

    .guide-modal-content {
      background: #ffffff;
      border-radius: 20px;
      max-width: 820px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 28px 32px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      border: 2px solid #000000;
      position: relative;
    }

    .guide-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }

    .guide-modal-header h2 {
      font-family: 'Anton', sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0;
      color: #0f172a;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 28px;
      color: #64748b;
      cursor: pointer;
      line-height: 1;
      padding: 0 6px;
      border-radius: 8px;
    }

    .close-btn:hover {
      color: #0f172a;
      background: #f1f5f9;
    }

    .guide-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }

    .guide-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px;
      transition: all 0.2s ease;
    }

    .guide-card:hover {
      border-color: #cbd5e1;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .guide-card.highlight {
      background: linear-gradient(135deg, rgba(245, 79, 149, 0.08), rgba(238, 174, 35, 0.08));
      border: 2px dashed ${brand.primaryColor};
    }

    .guide-icon {
      font-size: 26px;
      margin-bottom: 8px;
    }

    .guide-card h3 {
      font-size: 14px;
      font-weight: 800;
      margin: 0 0 6px 0;
      color: #0f172a;
    }

    .guide-card p {
      font-size: 12px;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
    }

    /* Custom Scrollbars */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }

    /* ==========================================================================
       Sveltia CMS Layout Fixes & Visual Polish
       ========================================================================== */

    /* 1. Prevent Top Header Overlap — Push Sveltia App Shell below brand header */
    .sui.app-shell,
    div.app-shell,
    #nc-root {
      position: fixed !important;
      top: 60px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      height: calc(100vh - 60px) !important;
      max-height: calc(100vh - 60px) !important;
      overflow: hidden !important;
    }

    /* 2. Top Application Toolbar Polish */
    .sui.toolbar.primary,
    .toolbar-wrapper > .sui.toolbar {
      background: #ffffff !important;
      border-bottom: 1px solid #e2e8f0 !important;
      min-height: 52px !important;
      padding: 0 20px !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
    }

    .sui.search-bar {
      border-radius: 9999px !important;
      border: 1px solid #cbd5e1 !important;
      background: #f1f5f9 !important;
      padding: 4px 12px !important;
    }

    /* 3. Widen Left Sidebar so Collection Titles Never Truncate */
    .primary-sidebar,
    aside.primary-sidebar,
    div.primary-sidebar,
    [class*="primary-sidebar"] {
      width: 320px !important;
      min-width: 300px !important;
      max-width: 360px !important;
      flex: 0 0 320px !important;
      background: #ffffff !important;
      border-right: 1px solid #e2e8f0 !important;
    }

    /* Un-truncate sidebar labels and give them clean breathing room */
    .primary-sidebar [role='treeitem'] .label,
    .primary-sidebar [role='listbox'] .label,
    .primary-sidebar .label {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: normal !important;
      word-break: break-word !important;
      line-height: 1.35 !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      color: #1e293b !important;
    }

    .primary-sidebar [role='treeitem'] > .row {
      min-height: 44px !important;
      padding: 6px 12px !important;
      border-radius: 10px !important;
      margin-bottom: 4px !important;
      transition: all 0.15s ease !important;
    }

    .primary-sidebar [role='treeitem'][aria-selected='true'] > .row {
      background: rgba(245, 79, 149, 0.08) !important;
      color: ${brand.primaryColor} !important;
      font-weight: 700 !important;
    }

    /* 4. Beautiful Spacing & Background for Main Content Area */
    .list-view,
    .grid-view,
    main,
    [class*="content-pane"] {
      background: #f8fafc !important;
      padding: 24px 32px !important;
    }

    /* 5. Transform File Entries & Rows into Prominent Interactive Cards */
    .list-view [role='grid'] .grid-row,
    .list-view .grid-row,
    [role='row'][tabindex] {
      background: #ffffff !important;
      border: 2px solid #e2e8f0 !important;
      border-radius: 16px !important;
      padding: 18px 24px !important;
      margin-bottom: 14px !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04) !important;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      height: auto !important;
    }

    .list-view [role='grid'] .grid-row:hover,
    .list-view .grid-row:hover,
    [role='row'][tabindex]:hover {
      border-color: ${brand.primaryColor} !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
      background: #ffffff !important;
    }

    .list-view .grid-cell {
      border: none !important;
      height: auto !important;
      white-space: normal !important;
    }

    .list-view .grid-cell.title {
      font-size: 16px !important;
      font-weight: 700 !important;
      color: #0f172a !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
    }

    /* Distinctive "Edit Content ✏️" Call-To-Action Pill on Cards */
    .list-view [role='grid'] .grid-row::after,
    .list-view .grid-row::after {
      content: '✏️ Edit Content';
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: ${brand.primaryColor};
      color: #ffffff;
      font-size: 13px;
      font-weight: 700;
      padding: 8px 18px;
      border-radius: 9999px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      flex-shrink: 0;
      margin-left: 20px;
      transition: opacity 0.15s ease;
    }

    .list-view [role='grid'] .grid-row:hover::after,
    .list-view .grid-row:hover::after {
      opacity: 0.9;
    }

    /* 6. Modal / Popover / Drawers Stacking */
    [popover], dialog, .sui.dialog, [role='dialog'], [class*="pane-wrapper"], .sui.drawer {
      z-index: 10000000 !important;
    }
  </style>
</head>
<body>
  <!-- Brand Header Bar -->
  <header id="admin-brand-header">
    <div class="brand-accent-line"></div>
    <div class="brand-left">
      <div class="brand-avatar">${brand.name.charAt(0)}</div>
      <div>
        <h1 class="brand-title">${brand.name}</h1>
        <p class="brand-tagline">${brand.tagline}</p>
      </div>
    </div>
    <div class="header-actions">
      <button id="guide-toggle-btn" class="guide-btn" type="button">
        💡 Operations Guide
      </button>
      <a href="/" target="_blank" class="live-store-link">
        🌐 View Live Store ↗
      </a>
    </div>
  </header>

  <!-- Interactive Operations Guide Modal -->
  <div id="guide-modal" class="guide-modal hidden">
    <div class="guide-modal-content">
      <div class="guide-modal-header">
        <h2>🏪 ${brand.name} — Store Content & Operations Guide</h2>
        <button id="guide-close-btn" class="close-btn" type="button">&times;</button>
      </div>
      <div class="guide-grid">
        <div class="guide-card">
          <div class="guide-icon">📢</div>
          <h3>Top Announcement Bar</h3>
          <p>Update monthly specials, flash sales, holiday opening alerts, and promo banner links across every page.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">🏠</div>
          <h3>Homepage Hero Pitch</h3>
          <p>Revamp the bold headline, supporting value proposition, and call-to-action buttons whenever launching new campaigns.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">⏰</div>
          <h3>Store Hours & Contact</h3>
          <p>Keep your bakery phone number, physical address, and weekday/weekend operating hours current.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">🎁</div>
          <h3>Promotions & Coupons</h3>
          <p>Launch limited-time discount codes and percentage-off deals to boost weekend ordering volume.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">💌</div>
          <h3>VIP Club & Newsletter</h3>
          <p>Customize the birthday perks, special tasting invites, and sign-up incentive copy in your footer.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">🍩</div>
          <h3>Donut Menu & Pricing</h3>
          <p>Add new donut creations, change pricing, upload pictures, set rating stars, and update nutritional facts.</p>
        </div>
        <div class="guide-card">
          <div class="guide-icon">📰</div>
          <h3>Stories & Articles</h3>
          <p>Publish seasonal recipes, community events, and bakery announcements in the blog.</p>
        </div>
        <div class="guide-card highlight">
          <div class="guide-icon">🚀</div>
          <h3>Automatic Live Publishing</h3>
          <p>Every time you click <strong>Save</strong> and <strong>Publish</strong>, Cloudflare automatically builds and deploys your website live in ~60 seconds with zero manual coding!</p>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Modal toggle interactions
    const toggleBtn = document.getElementById('guide-toggle-btn');
    const closeBtn = document.getElementById('guide-close-btn');
    const modal = document.getElementById('guide-modal');

    if (toggleBtn && modal) {
      toggleBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }
  </script>

  <!-- Git CMS Core Script (Sveltia CMS: Decap CMS config.yml compatible with GitHub Token & OAuth login) -->
  <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml, 'utf8');
  console.log(`✓ Generated Decap CMS Portal for [${brandId} (${brand.name})] at ${targetDir}`);
}

// If run directly via CLI: node scripts/generate-decap-cms.mjs <brandId> <targetDir>
if (process.argv[1]?.endsWith('generate-decap-cms.mjs')) {
  const brandArg = process.argv[2] || 'site-01';
  const outArg = process.argv[3] || 'apps/web/public/admin';
  generateDecapCms(brandArg, path.resolve(outArg));
}

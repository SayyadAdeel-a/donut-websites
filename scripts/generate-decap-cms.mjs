import fs from 'node:fs';
import path from 'node:path';

const brandConfigs = {
  'site-01': {
    name: 'SprinkleSpree',
    tagline: 'Baking Happiness in Every Bite!',
    primaryColor: '#f54f95',
    secondaryColor: '#eeae23',
    domain: 'site-01-sprinklespree.pages.dev',
  },
  'site-02': {
    name: 'Glaze & Co.',
    tagline: 'Artisanal Sourdough & Small-Batch Patisserie',
    primaryColor: '#eeae23',
    secondaryColor: '#6e300f',
    domain: 'site-02-glaze-and-co.pages.dev',
  },
  'site-03': {
    name: 'PureDonut',
    tagline: 'Clean Pastry & Keto Food Science',
    primaryColor: '#1ac500',
    secondaryColor: '#eeae23',
    domain: 'site-03-puredonut.pages.dev',
  },
  'site-04': {
    name: 'DoughBoyz',
    tagline: 'Midnight Drops & Streetwear Culture',
    primaryColor: '#f98000',
    secondaryColor: '#1b1b1b',
    domain: 'site-04-doughboyz.pages.dev',
  },
  'site-05': {
    name: 'The Donut Counter',
    tagline: 'Since 1958 — Classic Americana Diner',
    primaryColor: '#3b89ff',
    secondaryColor: '#eeae23',
    domain: 'site-05-the-donut-counter.pages.dev',
  },
};

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
# Decap CMS Configuration — ${brand.name}
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
  - name: "brand_settings"
    label: "Brand Identity & Theme"
    delete: false
    files:
      - file: "content/brands/${activeId}.json"
        label: "${brand.name} Settings"
        name: "settings"
        fields:
          - { label: "Brand Name", name: "name", widget: "string" }
          - { label: "Tagline", name: "tagline", widget: "string" }
          - { label: "Bio / Description", name: "description", widget: "text" }
          - { label: "Primary Brand Color", name: "primaryColor", widget: "color" }
          - { label: "Secondary Color", name: "secondaryColor", widget: "color" }
          - { label: "Accent Color", name: "accentColor", widget: "color" }
          - { label: "Footer Background", name: "footerBg", widget: "color" }
          - { label: "Currency Symbol", name: "currencySymbol", widget: "string", default: "$" }
          - { label: "Free Shipping Threshold ($)", name: "shippingThreshold", widget: "number", value_type: "float" }

  - name: "products"
    label: "Donut Menu & Products"
    label_singular: "Product"
    folder: "content/products/${activeId}"
    create: true
    slug: "{{slug}}"
    format: "json"
    fields:
      - { label: "Product ID", name: "id", widget: "string" }
      - { label: "Product Name", name: "name", widget: "string" }
      - { label: "URL Slug", name: "slug", widget: "string" }
      - { label: "Price ($)", name: "price", widget: "number", value_type: "float" }
      - { label: "Original Price ($)", name: "originalPrice", widget: "number", value_type: "float", required: false }
      - { label: "Category", name: "category", widget: "select", options: ["Crunch Series", "Chocolate Series", "Gourmet", "Fruit Glaze", "Filled Series", "Traditional", "Party Series"] }
      - { label: "Badge", name: "badge", widget: "string", required: false }
      - { label: "Description", name: "description", widget: "text" }
      - { label: "Product Image", name: "image", widget: "image" }
      - { label: "Card Background Tint", name: "bgColor", widget: "color" }
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
    label: "Stories & Articles"
    label_singular: "Article"
    folder: "content/articles/${activeId}"
    create: true
    slug: "{{slug}}"
    format: "json"
    fields:
      - { label: "Article Title", name: "title", widget: "string" }
      - { label: "URL Slug", name: "slug", widget: "string" }
      - { label: "Excerpt Summary", name: "excerpt", widget: "text" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "string" }
      - { label: "Read Time", name: "readTime", widget: "string" }
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

  // 2. Generate index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${brand.name} — Admin Portal</title>
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-color: ${brand.primaryColor};
      --secondary-color: ${brand.secondaryColor};
    }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      background-color: #f7f7f8;
    }
    /* Brand custom badge overlay for Decap CMS */
    .brand-admin-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor});
      z-index: 999999;
    }
  </style>
</head>
<body>
  <div class="brand-admin-banner"></div>
  <!-- Git CMS Core Script (Sveltia CMS: 100% Decap CMS config.yml compatible with built-in GitHub Token & OAuth login) -->
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

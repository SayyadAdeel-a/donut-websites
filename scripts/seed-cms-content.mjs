import fs from 'node:fs';
import path from 'node:path';

// Import existing TypeScript content arrays
import { products } from '../apps/web/content/products.ts';
import { articles } from '../apps/web/content/articles.ts';
import { productCategories, blogCategories } from '../apps/web/content/categories.ts';
import { allBrands } from '../packages/ui/tokens/brands.ts';

const brandIds = ['site-01', 'site-02', 'site-03', 'site-04', 'site-05'];

console.log('--- Seeding Decap CMS Content Folders for All 5 Brands ---');

// 1. Seed brand settings
const brandsDir = path.resolve('content/brands');
fs.mkdirSync(brandsDir, { recursive: true });

for (const id of brandIds) {
  const brand = allBrands[id];
  const brandFile = path.join(brandsDir, `${id}.json`);
  const data = {
    id: brand.id,
    name: brand.name,
    tagline: brand.tagline,
    description: brand.description,
    primaryColor: brand.theme.primaryColor,
    secondaryColor: brand.theme.secondaryColor,
    accentColor: brand.theme.accentColor,
    footerBg: brand.theme.footerBg,
    currencySymbol: brand.commerce.currencySymbol,
    shippingThreshold: brand.commerce.shippingThreshold,
    featuredProductIds: brand.featuredProductIds,
  };
  fs.writeFileSync(brandFile, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Seeded brand settings: ${brandFile}`);
}

// 2. Seed products per brand
for (const id of brandIds) {
  const prodDir = path.resolve(`content/products/${id}`);
  fs.mkdirSync(prodDir, { recursive: true });

  for (const p of products) {
    const filePath = path.join(prodDir, `${p.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(p, null, 2), 'utf8');
  }
  console.log(`✓ Seeded ${products.length} products for ${id} in ${prodDir}`);
}

// 3. Seed blog articles per brand
for (const id of brandIds) {
  const artDir = path.resolve(`content/articles/${id}`);
  fs.mkdirSync(artDir, { recursive: true });

  for (const a of articles) {
    const filePath = path.join(artDir, `${a.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(a, null, 2), 'utf8');
  }
  console.log(`✓ Seeded ${articles.length} articles for ${id} in ${artDir}`);
}

// 4. Seed categories
const catDir = path.resolve('content/categories');
fs.mkdirSync(catDir, { recursive: true });
fs.writeFileSync(path.join(catDir, 'products.json'), JSON.stringify(productCategories, null, 2), 'utf8');
fs.writeFileSync(path.join(catDir, 'blogs.json'), JSON.stringify(blogCategories, null, 2), 'utf8');
console.log(`✓ Seeded categories in ${catDir}`);

console.log('\n✅ All 5 brand CMS collections successfully seeded.\n');

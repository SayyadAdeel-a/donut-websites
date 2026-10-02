import fs from 'node:fs';
import path from 'node:path';

const brands = [
  { id: 'site-01', name: 'SprinkleSpree', otherBrands: ['Glaze & Co', 'PureDonut', 'DoughBoyz', 'The Donut Counter'] },
  { id: 'site-02', name: 'Glaze & Co.', otherBrands: ['SprinkleSpree', 'PureDonut', 'DoughBoyz', 'The Donut Counter'] },
  { id: 'site-03', name: 'PureDonut', otherBrands: ['SprinkleSpree', 'Glaze & Co', 'DoughBoyz', 'The Donut Counter'] },
  { id: 'site-04', name: 'DoughBoyz', otherBrands: ['SprinkleSpree', 'Glaze & Co', 'PureDonut', 'The Donut Counter'] },
  { id: 'site-05', name: 'The Donut Counter', otherBrands: ['SprinkleSpree', 'Glaze & Co', 'PureDonut', 'DoughBoyz'] },
];

const templateVariationPatterns = [
  'Main Index',
  'Five Brands',
  '5 Brands',
  'Home 01', 'Home 02', 'Home 03', 'Home 04', 'Home 05',
  'About 01', 'About 02', 'About 03', 'About 04', 'About 05',
  'Contact 01', 'Contact 02', 'Contact 03', 'Contact 04', 'Contact 05',
  'Subscribe 01', 'Subscribe 02', 'Subscribe 03', 'Subscribe 04', 'Subscribe 05',
  'Why Donutland 01', 'Why Donutland 02', 'Why Donutland 03', 'Why Donutland 04', 'Why Donutland 05',
  'Return to Donutland',
  'admin/style-guide',
];

console.log('--- Deep Auditing all dist/ exports for cross-brand and template leaks ---');
let leakCount = 0;

for (const b of brands) {
  const dir = path.resolve('dist', b.id);
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    continue;
  }

  function scan(d) {
    for (const f of fs.readdirSync(d)) {
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) {
        scan(full);
      } else if (full.endsWith('.html')) {
        const content = fs.readFileSync(full, 'utf8');
        
        // 1. Check template variation patterns
        for (const p of templateVariationPatterns) {
          if (content.includes(p)) {
            console.log(`❌ [${b.id}] ${path.relative(dir, full)} contains template leak: "${p}"`);
            leakCount++;
          }
        }

        // 2. Check cross-brand mentions (other brand names)
        for (const other of b.otherBrands) {
          if (content.includes(other)) {
            console.log(`❌ [${b.id}] ${path.relative(dir, full)} contains foreign brand: "${other}"`);
            leakCount++;
          }
        }
      }
    }
  }
  scan(dir);
}

console.log(`\nAudit completed: ${leakCount} leak(s) found across all brand exports.`);

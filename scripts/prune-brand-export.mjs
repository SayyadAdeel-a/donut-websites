import fs from 'node:fs';
import path from 'node:path';
import { generateDecapCms } from './generate-decap-cms.mjs';

// Determine outDir whether run from repo root or apps/web
const candidateOutDirs = [
  path.resolve(process.cwd(), 'apps/web/out'),
  path.resolve(process.cwd(), 'out'),
];

const outDir = candidateOutDirs.find((d) => fs.existsSync(d));

if (!outDir) {
  // Not an export build or out directory doesn't exist yet
  process.exit(0);
}

const isExport = process.env.NEXT_EXPORT === 'true';
const brandId = process.env.NEXT_PUBLIC_BRAND_ID?.toLowerCase().trim();

if (!isExport) {
  process.exit(0);
}

console.log(`\n========================================================`);
console.log(`[Static Export Pruner] Running for Brand: "${brandId || 'MASTER'}"`);
console.log(`[Static Export Pruner] Target Directory: ${outDir}`);
console.log(`========================================================\n`);

// If master/unbranded mode, keep all variations for template preview
if (!brandId || brandId === 'master' || brandId === 'none') {
  console.log('[Static Export Pruner] Master mode detected. Preserving full template showcase.');
  process.exit(0);
}

// 1. Remove unwanted variation directories from the brand's static output
const dirsToRemove = [
  'homepages',
  'about-us',
  'contact-us',
  'subscribe-save',
  'why-donutland',
  'brand',
  'blog',
  '401',
];

for (const dirName of dirsToRemove) {
  const dirPath = path.join(outDir, dirName);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✓ Pruned unwanted directory: /${dirName}`);
  }
}

// 2. Remove unwanted individual files
const filesToRemove = [
  '401.html',
  '401.txt',
  path.join('admin', 'style-guide.html'),
  path.join('admin', 'style-guide.txt'),
  path.join('admin', 'style-guide'),
];

for (const relPath of filesToRemove) {
  const filePath = path.join(outDir, relPath);
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath, { recursive: true, force: true });
    console.log(`✓ Pruned unwanted file: /${relPath}`);
  }
}

// 2.5 Generate Brand-Specific Decap CMS Admin Portal
if (brandId && brandId !== 'master' && brandId !== 'none') {
  generateDecapCms(brandId, path.join(outDir, 'admin'));
}

// 3. Write Cloudflare Pages _redirects file
const redirectsContent = `# ==============================================================================
# Cloudflare Pages Static Redirect Rules — Isolated Brand: ${brandId}
# Generated automatically by scripts/prune-brand-export.mjs
# ==============================================================================
/homepages/*            /                   301
/about-us/*             /about              301
/contact-us/*           /contact            301
/subscribe-save/*       /subscribe          301
/why-donutland/*        /why                301
/brand/*                /                   301
/admin/style-guide      /                   301
/401                    /404                301
/blog-categories/events /blog-category/event 301
/blog/:slug             /blog-article/:slug 301
`;

fs.writeFileSync(path.join(outDir, '_redirects'), redirectsContent, 'utf8');
console.log('✓ Generated Cloudflare Pages _redirects file');

// 4. Write Cloudflare Pages _headers file for security & cache
const headersContent = `# ==============================================================================
# Cloudflare Pages HTTP Security & Caching Headers
# ==============================================================================
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
`;

fs.writeFileSync(path.join(outDir, '_headers'), headersContent, 'utf8');
console.log('✓ Generated Cloudflare Pages _headers file');

// Ensure favicon.ico is present in export root
const iconSvgPath = path.resolve(outDir, '../app/icon.svg');
const outFavicon = path.join(outDir, 'favicon.ico');
if (!fs.existsSync(outFavicon) && fs.existsSync(iconSvgPath)) {
  fs.copyFileSync(iconSvgPath, outFavicon);
  console.log('✓ Ensured favicon.ico is present in export root');
}

// 5. Verification audit of remaining top-level contents
console.log('\n--- Brand Static Export Audit ---');
const entries = fs.readdirSync(outDir);
console.log('Remaining top-level entries:', entries.join(', '));

const hasUnwanted = entries.some((e) =>
  ['homepages', 'about-us', 'contact-us', 'subscribe-save', 'why-donutland', 'brand', '401.html'].includes(e)
);

if (hasUnwanted) {
  console.error('❌ ERROR: Unwanted routes still present in export output!');
  process.exit(1);
} else {
  console.log('✅ PASS: Brand route isolation verified. Zero template leakage.\n');
}

// 6. Copy isolated output to dist/${brandId} for multi-brand static hosting verification
const repoRootDir = outDir.includes(path.join('apps', 'web'))
  ? path.resolve(outDir, '../../..')
  : path.resolve(outDir, '..');
const distBrandDir = path.join(repoRootDir, 'dist', brandId);
if (fs.existsSync(distBrandDir)) {
  fs.rmSync(distBrandDir, { recursive: true, force: true });
}
fs.cpSync(outDir, distBrandDir, { recursive: true });
console.log(`✓ Archived brand export to: ${distBrandDir}\n`);

const fs = require('fs');
const path = require('path');
const { clonePage } = require('./clone-page');

const pagesToClone = [
  // Homepages
  { path: '/homepages/home-03', file: 'apps/web/app/homepages/home-03/page.tsx' },
  { path: '/homepages/home-04', file: 'apps/web/app/homepages/home-04/page.tsx' },
  { path: '/homepages/home-05', file: 'apps/web/app/homepages/home-05/page.tsx' },

  // About Us
  { path: '/about-us/about-us-01', file: 'apps/web/app/about-us/about-us-01/page.tsx' },
  { path: '/about-us/about-us-02', file: 'apps/web/app/about-us/about-us-02/page.tsx' },
  { path: '/about-us/about-us-03', file: 'apps/web/app/about-us/about-us-03/page.tsx' },
  { path: '/about-us/about-us-04', file: 'apps/web/app/about-us/about-us-04/page.tsx' },
  { path: '/about-us/about-us-05', file: 'apps/web/app/about-us/about-us-05/page.tsx' },

  // Contact Us
  { path: '/contact-us/contact-us-01', file: 'apps/web/app/contact-us/contact-us-01/page.tsx' },
  { path: '/contact-us/contact-us-02', file: 'apps/web/app/contact-us/contact-us-02/page.tsx' },
  { path: '/contact-us/contact-us-03', file: 'apps/web/app/contact-us/contact-us-03/page.tsx' },
  { path: '/contact-us/contact-us-04', file: 'apps/web/app/contact-us/contact-us-04/page.tsx' },
  { path: '/contact-us/contact-us-05', file: 'apps/web/app/contact-us/contact-us-05/page.tsx' },

  // Subscribe & Save
  { path: '/subscribe-save/subscribe-save-01', file: 'apps/web/app/subscribe-save/subscribe-save-01/page.tsx' },
  { path: '/subscribe-save/subscribe-save-02', file: 'apps/web/app/subscribe-save/subscribe-save-02/page.tsx' },
  { path: '/subscribe-save/subscribe-save-03', file: 'apps/web/app/subscribe-save/subscribe-save-03/page.tsx' },
  { path: '/subscribe-save/subscribe-save-04', file: 'apps/web/app/subscribe-save/subscribe-save-04/page.tsx' },
  { path: '/subscribe-save/subscribe-save-05', file: 'apps/web/app/subscribe-save/subscribe-save-05/page.tsx' },

  // Why Donutland
  { path: '/why-donutland/why-donutland-01', file: 'apps/web/app/why-donutland/why-donutland-01/page.tsx' },
  { path: '/why-donutland/why-donutland-02', file: 'apps/web/app/why-donutland/why-donutland-02/page.tsx' },
  { path: '/why-donutland/why-donutland-03', file: 'apps/web/app/why-donutland/why-donutland-03/page.tsx' },
  { path: '/why-donutland/why-donutland-04', file: 'apps/web/app/why-donutland/why-donutland-04/page.tsx' },
  { path: '/why-donutland/why-donutland-05', file: 'apps/web/app/why-donutland/why-donutland-05/page.tsx' },

  // Listings & CMS
  { path: '/all-donuts', file: 'apps/web/app/all-donuts/page.tsx' },
  { path: '/all-blogs', file: 'apps/web/app/all-blogs/page.tsx' },
  { path: '/category/special', file: 'apps/web/app/category/special/page.tsx' },
  { path: '/product/peanut-mcrunch', file: 'apps/web/app/product/peanut-mcrunch/page.tsx' },
  { path: '/blog-article/our-top-five-best-selling-donuts', file: 'apps/web/app/blog-article/our-top-five-best-selling-donuts/page.tsx' },
  { path: '/blog-category/event', file: 'apps/web/app/blog-category/event/page.tsx' },

  // Utility
  { path: '/404', file: 'apps/web/app/404/page.tsx' },
  { path: '/401', file: 'apps/web/app/401/page.tsx' },
];

async function run() {
  console.log(`Starting batch reconstruction of ${pagesToClone.length} pages...`);
  const results = [];
  for (const page of pagesToClone) {
    try {
      await clonePage(page.path, page.file);
      results.push({ ...page, status: 'SUCCESS' });
    } catch (err) {
      console.error(`Failed ${page.path}:`, err.message);
      results.push({ ...page, status: 'FAILED', error: err.message });
    }
  }
  console.log('\n--- BATCH CLONING SUMMARY ---');
  console.table(results);
}

run();

import http from 'node:http';

const sites = [
  { id: 'site-01', name: 'SprinkleSpree', port: 5001, expectedHero: 'DONUTS' },
  { id: 'site-02', name: 'Glaze & Co.', port: 5002, expectedHero: 'donutland' },
  { id: 'site-03', name: 'PureDonut / KetoKreme', port: 5003, expectedHero: 'Healthy donuts' },
  { id: 'site-04', name: 'DoughBoyz', port: 5004, expectedHero: 'donutland' },
  { id: 'site-05', name: 'The Donut Counter', port: 5005, expectedHero: 'Welcome to' },
];

const routes = [
  '/',
  '/about',
  '/contact',
  '/subscribe',
  '/why',
  '/all-donuts',
  '/category/special',
  '/product/peanut-mcrunch',
  '/all-blogs',
  '/blog-category/event',
  '/blog-article/our-top-five-best-selling-donuts',
  '/checkout',
  '/admin/licenses',
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('================================================================');
  console.log('   STATIC DEPLOYMENT VERIFICATION TEST SUITE (CLOUDFLARE PAGES)  ');
  console.log('================================================================\n');

  let passed = 0;
  let failed = 0;

  for (const site of sites) {
    console.log(`\n▶ Testing Site: [${site.id}] ${site.name} (http://localhost:${site.port})`);
    console.log('----------------------------------------------------------------');

    // 1. Check all canonical routes
    for (const route of routes) {
      const url = `http://localhost:${site.port}${route}`;
      try {
        const res = await fetchUrl(url);
        if (res.statusCode === 200) {
          const titleMatch = res.body.match(/<title>([^<]+)<\/title>/i);
          const title = titleMatch ? titleMatch[1].trim() : '(No Title)';
          console.log(`  ✓ [200 OK] ${route.padEnd(46)} | Title: ${title}`);
          passed++;

          // For homepage, verify expected hero text
          if (route === '/') {
            const strippedText = res.body.replace(/<[^>]+>/g, '');
            if (strippedText.includes(site.expectedHero)) {
              console.log(`    ↳ Verified variation hero text: "${site.expectedHero}"`);
              passed++;
            } else {
              console.error(`    ✗ FAILED: Expected hero text "${site.expectedHero}" missing!`);
              failed++;
            }
          }
        } else {
          console.error(`  ✗ FAILED [${res.statusCode}] ${route}`);
          failed++;
        }
      } catch (err) {
        console.error(`  ✗ FAILED (Error) ${route}:`, err.message);
        failed++;
      }
    }

    // 2. Check Redirect Rules (_redirects)
    console.log('\n  Checking Cloudflare Pages _redirects rules...');
    const redirectTests = [
      { from: '/homepages/home-01', expectedTo: '/' },
      { from: '/about-us/about-us-01', expectedTo: '/about' },
      { from: '/contact-us/contact-us-01', expectedTo: '/contact' },
      { from: '/subscribe-save/subscribe-save-01', expectedTo: '/subscribe' },
      { from: '/why-donutland/why-donutland-01', expectedTo: '/why' },
      { from: '/brand/site-02', expectedTo: '/' },
      { from: '/admin/style-guide', expectedTo: '/' },
      { from: '/401', expectedTo: '/404' },
    ];

    for (const rt of redirectTests) {
      const url = `http://localhost:${site.port}${rt.from}`;
      try {
        const res = await fetchUrl(url);
        if (res.statusCode === 301 && res.headers.location === rt.expectedTo) {
          console.log(`  ✓ [301 Redirect] ${rt.from} -> ${res.headers.location}`);
          passed++;
        } else {
          console.error(`  ✗ FAILED redirect ${rt.from}: got ${res.statusCode} -> ${res.headers.location}`);
          failed++;
        }
      } catch (err) {
        console.error(`  ✗ FAILED redirect ${rt.from}:`, err.message);
        failed++;
      }
    }

    // 3. Check 404 Unknown Route Handling
    console.log('\n  Checking 404 Unknown Route Handling...');
    try {
      const res = await fetchUrl(`http://localhost:${site.port}/some-completely-invalid-slug`);
      if (res.statusCode === 404 && res.body.includes('Page Not Found')) {
        console.log(`  ✓ [404 Fallback] /some-completely-invalid-slug -> returns 404 with custom 404.html template`);
        passed++;
      } else {
        console.error(`  ✗ FAILED 404 handling: status ${res.statusCode}`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✗ FAILED 404 handling:`, err.message);
      failed++;
    }

    // 4. Verify Brand Isolation (Zero cross-brand contamination)
    console.log('\n  Checking Brand Isolation...');
    const homeRes = await fetchUrl(`http://localhost:${site.port}/`);
    const otherBrands = sites.filter((s) => s.id !== site.id);
    let crossContaminated = false;

    for (const other of otherBrands) {
      // In the navbar/footer, should not link to or show other brands
      if (homeRes.body.includes(`>${other.name}<`) || homeRes.body.includes(`"${other.name}"`)) {
        console.error(`  ✗ WARNING: Possible reference to other brand "${other.name}" found in ${site.name}`);
        crossContaminated = true;
      }
    }

    if (!crossContaminated) {
      console.log(`  ✓ Verified: Zero cross-brand mentions detected.`);
      passed++;
    }
  }

  console.log('\n================================================================');
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('================================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();

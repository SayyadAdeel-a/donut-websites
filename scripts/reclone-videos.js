const { clonePage } = require('./clone-page');

async function main() {
  const pages = [
    ['/about-us/about-us-04', 'apps/web/app/about-us/about-us-04/page.tsx'],
    ['/why-donutland/why-donutland-03', 'apps/web/app/why-donutland/why-donutland-03/page.tsx'],
    ['/why-donutland/why-donutland-05', 'apps/web/app/why-donutland/why-donutland-05/page.tsx'],
  ];

  for (const [url, target] of pages) {
    console.log(`Re-cloning ${url}...`);
    await clonePage(url, target);
  }
  console.log('Finished re-cloning video pages.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

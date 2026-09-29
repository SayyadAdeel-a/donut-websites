async function inspect(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\nURL: ${url}`);
  console.log(`Status: ${res.status}`);
  // Check body children
  const bodyIdx = html.indexOf('<body');
  if (bodyIdx !== -1) {
    const bodyContent = html.slice(bodyIdx, bodyIdx + 1000);
    console.log('Body snippet:', bodyContent);
  }
}

async function run() {
  await inspect('https://donutland.webflow.io/all-donuts');
  await inspect('https://donutland.webflow.io/404');
  await inspect('https://donutland.webflow.io/401');
}
run();

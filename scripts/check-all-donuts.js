async function checkAllDonuts() {
  const res = await fetch('https://donutland.webflow.io/all-donuts');
  const html = await res.text();
  const navEnd = html.indexOf('</nav>');
  const footerStart = html.indexOf('<section class="footer');
  const content = html.slice(navEnd + 6, footerStart).trim();
  console.log('All donuts content length:', content.length);
  console.log('Start snippet:', content.slice(0, 300));
}
checkAllDonuts();

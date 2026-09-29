async function checkAllDonutsSections() {
  const res = await fetch('https://donutland.webflow.io/all-donuts');
  const html = await res.text();
  const firstSectionIdx = html.indexOf('<section class="section');
  const footerStart = html.indexOf('<section class="footer');
  const content = html.slice(firstSectionIdx, footerStart).trim();
  console.log('All donuts sections length:', content.length);
  console.log('Start snippet:', content.slice(0, 200));
  console.log('End snippet:', content.slice(-200));
}
checkAllDonutsSections();

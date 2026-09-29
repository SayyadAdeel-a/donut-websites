const fs = require('fs');

async function testExtract() {
  const res = await fetch('https://donutland.webflow.io/homepages/home-02');
  const html = await res.text();
  
  // Find <div class="page-wrapper">
  const startIdx = html.indexOf('<div class="page-wrapper">');
  if (startIdx === -1) {
    console.error('page-wrapper not found!');
    return;
  }
  
  // Find where page-wrapper ends: usually right before <section class="footer or <script
  let endIdx = html.indexOf('<section class="footer', startIdx);
  if (endIdx === -1) {
    endIdx = html.indexOf('<script', startIdx);
  }
  
  let wrapperHtml = html.slice(startIdx, endIdx).trim();
  // Ensure the wrapper closes its div
  if (!wrapperHtml.endsWith('</div>')) {
    wrapperHtml += '</div>';
  }
  
  console.log('Extracted length:', wrapperHtml.length);
  console.log('Start snippet:', wrapperHtml.slice(0, 150));
  console.log('End snippet:', wrapperHtml.slice(-150));
}
testExtract();

const fs = require('fs');
const path = require('path');
const { convertHtmlToJsx } = require('./html-to-jsx');

async function clonePage(urlPath, targetFile) {
  const url = `https://donutland.webflow.io${urlPath}`;
  console.log(`Fetching ${url}...`);
  const res = await fetch(url);
  if (!res.ok && res.status !== 404 && res.status !== 401) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();

  let bodyContent = '';

  // Check 1: utility-page-wrap (for 404, 401)
  const utilIdx = html.indexOf('<div class="utility-page-wrap">');
  if (utilIdx !== -1) {
    const endIdx = html.indexOf('</body>', utilIdx);
    bodyContent = html.slice(utilIdx, endIdx !== -1 ? endIdx : undefined).trim();
  } else {
    // Check 2: page-wrapper
    const pageWrapperIdx = html.indexOf('<div class="page-wrapper">');
    if (pageWrapperIdx !== -1) {
      const footerMatch = html.slice(pageWrapperIdx).match(/<section[^>]*class="[^"]*footer[^"]*"/i);
      let endIdx = footerMatch ? pageWrapperIdx + footerMatch.index : -1;
      if (endIdx === -1) endIdx = html.indexOf('<script', pageWrapperIdx);
      let wrapperHtml = html.slice(pageWrapperIdx, endIdx).trim();
      if (!wrapperHtml.endsWith('</div>')) wrapperHtml += '</div>';
      bodyContent = wrapperHtml;
    } else {
      // Check 3: direct sections between nav and footer (like /all-donuts)
      const firstSecIdx = html.indexOf('<section class="section');
      if (firstSecIdx !== -1) {
        const footerMatch = html.slice(firstSecIdx).match(/<section[^>]*class="[^"]*footer[^"]*"/i);
        let endIdx = footerMatch ? firstSecIdx + footerMatch.index : -1;
        if (endIdx === -1) endIdx = html.indexOf('<script', firstSecIdx);
        const sectionsHtml = html.slice(firstSecIdx, endIdx).trim();
        bodyContent = `<div class="page-wrapper">${sectionsHtml}</div>`;
      } else {
        throw new Error(`Could not find content container in ${url}`);
      }
    }
  }

  const jsxContent = convertHtmlToJsx(bodyContent);

  // Generate component code
  let componentName = urlPath
    .replace(/^\//, '')
    .split(/[-_/]/)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') + 'Page';

  if (/^[0-9]/.test(componentName)) {
    componentName = 'Page' + componentName;
  }

  const isUtility = urlPath === '/404' || urlPath === '/401';

  const code = `'use client';

import React from 'react';
import Link from 'next/link';
${isUtility ? '' : "import { WebflowHeader, WebflowFooter } from '@donutland/ui';"}

export default function ${componentName}() {
  return (
    <>
      ${isUtility ? '' : `<WebflowHeader activePath="${urlPath}" />`}
      ${jsxContent}
      ${isUtility ? '' : '<WebflowFooter />'}
    </>
  );
}
`;

  const targetAbsPath = path.resolve(__dirname, '..', targetFile);
  fs.mkdirSync(path.dirname(targetAbsPath), { recursive: true });
  fs.writeFileSync(targetAbsPath, code, 'utf8');
  console.log(`Successfully wrote ${targetFile} (${code.length} chars)`);
}

module.exports = { clonePage };

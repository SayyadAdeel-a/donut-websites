const fs = require('fs');
const path = require('path');
const { convertHtmlToJsx } = require('./html-to-jsx');

const inputPath = 'C:\\Users\\Adeel Sayyad\\.gemini\\antigravity\\brain\\99362d52-531d-4548-8ed2-d9d3f9d4a170\\.system_generated\\steps\\827\\output.txt';
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse JSON from output
const jsonStart = fileContent.indexOf('```json\n') + 8;
const jsonEnd = fileContent.lastIndexOf('\n```');
const jsonStr = fileContent.slice(jsonStart, jsonEnd);
const rawHtml = JSON.parse(jsonStr);

const jsxContent = convertHtmlToJsx(rawHtml);

const componentCode = `'use client';

import React from 'react';
import Link from 'next/link';
import { WebflowHeader, WebflowFooter } from '@donutland/ui';

export default function Home01Page() {
  return (
    <>
      <WebflowHeader activePath="/homepages/home-01" />
      ${jsxContent}
      <WebflowFooter />
    </>
  );
}
`;

const targetPath = path.resolve(__dirname, '../apps/web/app/homepages/home-01/page.tsx');
fs.writeFileSync(targetPath, componentCode, 'utf8');
console.log('Successfully wrote reconstructed Home 01 to:', targetPath);

const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = walk(path.resolve(__dirname, '../apps/web/app'));
const badFiles = [];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('"https":"//')) {
    badFiles.push(file);
    console.log(`Found corrupted style in ${path.relative(path.resolve(__dirname, '..'), file)}`);
    
    // Fix pattern: style={{"backgroundImage":"url(&quot","https":"//...&quot"}}
    content = content.replace(/style=\{\{"backgroundImage":"url\(&quot","https":"(\/\/[^"&]+)(?:&quot;)?"\}\}/g, (m, url) => {
      return `style={{"backgroundImage":"url('https:${url}')"}}`;
    });
    // Also catch with &quot; at end
    content = content.replace(/style=\{\{"backgroundImage":"url\(&quot","https":"(\/\/[^"]+)"\}\}/g, (m, url) => {
      const cleanUrl = url.replace(/&quot;?$/, '');
      return `style={{"backgroundImage":"url('https:${cleanUrl}')"}}`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Repaired ${path.basename(file)}`);
  }
}

console.log(`Finished checking styles. Total files with issue: ${badFiles.length}`);

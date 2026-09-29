const fs = require('fs');
const path = require('path');

function walk(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, list);
    else if (f.endsWith('.tsx')) {
      const c = fs.readFileSync(p, 'utf8');
      const matches = c.match(/"opacity":"0"/g);
      if (matches) {
        console.log(path.relative(path.resolve(__dirname, '..'), p), 'has', matches.length, 'opacity:0 instances');
        list.push({ file: p, count: matches.length });
      }
    }
  }
  return list;
}

const list = walk(path.resolve(__dirname, '../apps/web/app'));
console.log(`Total files with hidden elements: ${list.length}`);

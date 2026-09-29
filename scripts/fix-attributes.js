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
let modifiedCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Boolean attributes
  content = content.replace(/\bautoFocus="(?:true|)"/g, 'autoFocus={true}');
  content = content.replace(/\bautoFocus="false"/g, 'autoFocus={false}');
  content = content.replace(/\brequired="(?:true|required|)"/gi, 'required={true}');
  content = content.replace(/\bdisabled="(?:true|disabled|)"/gi, 'disabled={true}');
  content = content.replace(/\breadonly="(?:true|readonly|)"/gi, 'readOnly={true}');
  content = content.replace(/\breadOnly="(?:true|readonly|)"/gi, 'readOnly={true}');
  content = content.replace(/\bchecked="(?:true|checked|)"/gi, 'checked={true}');
  content = content.replace(/\bmultiple="(?:true|multiple|)"/gi, 'multiple={true}');
  content = content.replace(/\bautoPlay="(?:true|)"/gi, 'autoPlay={true}');
  content = content.replace(/\bautoplay="(?:true|)"/gi, 'autoPlay={true}');
  content = content.replace(/\bloop="(?:true|)"/gi, 'loop={true}');
  content = content.replace(/\bmuted="(?:true|)"/gi, 'muted={true}');
  content = content.replace(/\bplaysinline="(?:true|)"/gi, 'playsInline={true}');
  content = content.replace(/\bplaysInline="(?:true|)"/gi, 'playsInline={true}');
  content = content.replace(/\bcontrols="(?:true|)"/gi, 'controls={true}');
  content = content.replace(/\bopen="(?:true|)"/gi, 'open={true}');
  content = content.replace(/\bnovalidate="(?:true|)"/gi, 'noValidate={true}');
  content = content.replace(/\bnoValidate="(?:true|)"/gi, 'noValidate={true}');

  // Number attributes
  content = content.replace(/\bmaxLength="(\d+)"/g, 'maxLength={$1}');
  content = content.replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}');
  content = content.replace(/\brows="(\d+)"/g, 'rows={$1}');
  content = content.replace(/\bcols="(\d+)"/g, 'cols={$1}');

  // ARIA attributes
  content = content.replace(/\baria-busy="false"/g, 'aria-busy={false}');
  content = content.replace(/\baria-busy="true"/g, 'aria-busy={true}');
  content = content.replace(/\baria-checked="false"/g, 'aria-checked={false}');
  content = content.replace(/\baria-checked="true"/g, 'aria-checked={true}');
  content = content.replace(/\baria-disabled="false"/g, 'aria-disabled={false}');
  content = content.replace(/\baria-disabled="true"/g, 'aria-disabled={true}');

  // Vendor prefixes in style objects
  content = content.replace(/"Ms([A-Z][a-zA-Z0-9]*)":/g, '"ms$1":');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log(`Updated attributes in ${path.relative(path.resolve(__dirname, '..'), file)}`);
  }
}

console.log(`Done. Updated ${modifiedCount} files.`);

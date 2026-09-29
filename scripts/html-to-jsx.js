const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(html) {
  let jsx = html;

  // Remove XML prologues and DOCTYPE declarations (invalid in JSX)
  jsx = jsx.replace(/<\?xml[\s\S]*?\?>/gi, '');
  jsx = jsx.replace(/<!DOCTYPE[\s\S]*?>/gi, '');

  // Remove script tags entirely
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Replace HTML comments <!-- ... --> with JSX comments {/* ... */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Replace class= with className=
  jsx = jsx.replace(/\bclass="/g, 'className="');

  // Replace for= with htmlFor=
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');

  // SVG and HTML attributes camelCase
  const attrMap = {
    'xmlns:xlink': 'xmlnsXlink',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-width': 'strokeWidth',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'tabindex': 'tabIndex',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'inputmode': 'inputMode',
    'zoomandpan': 'zoomAndPan',
    'preserveaspectratio': 'preserveAspectRatio',
    'srcset': 'srcSet',
    'readonly': 'readOnly',
    'maxlength': 'maxLength',
    'xml:space': 'xmlSpace',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'shape-rendering': 'shapeRendering',
  };

  for (const [attr, repl] of Object.entries(attrMap)) {
    const regex = new RegExp(`\\b${attr}=`, 'g');
    jsx = jsx.replace(regex, `${repl}=`);
  }

  // Convert style strings to JSX style objects: style="color: red; margin-top: 10px;"
  jsx = jsx.replace(/style="([^"]*)"/g, (match, rawStyleStr) => {
    if (!rawStyleStr.trim()) return '';
    // Replace &quot; or &#39; so semicolons inside entities are not treated as CSS rule separators
    let styleStr = rawStyleStr.replace(/&quot;/g, "'").replace(/&#39;/g, "'");
    const rules = styleStr.split(';').filter(r => r.trim());
    const obj = {};
    for (const rule of rules) {
      const colonIdx = rule.indexOf(':');
      if (colonIdx === -1) continue;
      let prop = rule.slice(0, colonIdx).trim();
      let val = rule.slice(colonIdx + 1).trim();

      // Convert kebab-case property to camelCase
      if (prop.startsWith('-webkit-')) {
        prop = prop.slice(8);
        prop = 'Webkit' + prop.charAt(0).toUpperCase() + prop.slice(1);
      } else if (prop.startsWith('-ms-')) {
        prop = prop.slice(4);
        prop = 'ms' + prop.charAt(0).toUpperCase() + prop.slice(1);
      }
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      obj[prop] = val;
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // Self-closing tags: img, input, br, hr, source
  jsx = jsx.replace(/<(img|input|br|hr|source)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Fix Webflow server template tags like value="<%WF_FORM_VALUE_PATH% />"
  jsx = jsx.replace(/value="<%WF_FORM_VALUE_PATH% \/>"/g, 'defaultValue=""');
  jsx = jsx.replace(/value="<%WF_FORM_VALUE_PAGE% \/>"/g, 'defaultValue=""');

  // React TypeScript type fixes for boolean and number attributes
  jsx = jsx.replace(/\bautoFocus="true"/g, 'autoFocus={true}');
  jsx = jsx.replace(/\bautoFocus="false"/g, 'autoFocus={false}');
  jsx = jsx.replace(/\bautoFocus=""/g, 'autoFocus={true}');
  jsx = jsx.replace(/\bautoPlay=""/gi, 'autoPlay={true}');
  jsx = jsx.replace(/\bloop=""/gi, 'loop={true}');
  jsx = jsx.replace(/\bmuted=""/gi, 'muted={true}');
  jsx = jsx.replace(/\bplaysinline=""/gi, 'playsInline={true}');
  jsx = jsx.replace(/\bplaysInline=""/gi, 'playsInline={true}');
  jsx = jsx.replace(/\bcontrols=""/gi, 'controls={true}');
  jsx = jsx.replace(/\bdisabled=""/gi, 'disabled={true}');
  jsx = jsx.replace(/\breadonly=""/gi, 'readOnly={true}');
  jsx = jsx.replace(/\breadOnly=""/gi, 'readOnly={true}');
  jsx = jsx.replace(/\brequired=""/gi, 'required={true}');
  jsx = jsx.replace(/\bchecked=""/gi, 'checked={true}');
  jsx = jsx.replace(/\bmaxLength="(\d+)"/g, 'maxLength={$1}');
  jsx = jsx.replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}');
  jsx = jsx.replace(/\baria-busy="false"/g, 'aria-busy={false}');
  jsx = jsx.replace(/\baria-busy="true"/g, 'aria-busy={true}');
  jsx = jsx.replace(/\baria-checked="false"/g, 'aria-checked={false}');
  jsx = jsx.replace(/\baria-checked="true"/g, 'aria-checked={true}');
  jsx = jsx.replace(/\baria-disabled="false"/g, 'aria-disabled={false}');
  jsx = jsx.replace(/\baria-disabled="true"/g, 'aria-disabled={true}');

  return jsx;
}

module.exports = { convertHtmlToJsx };

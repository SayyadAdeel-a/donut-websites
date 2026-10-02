import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

function createStaticServer(siteDir, brandName, port) {
  const redirects = [];
  const redirectsFile = path.join(siteDir, '_redirects');
  if (fs.existsSync(redirectsFile)) {
    const lines = fs.readFileSync(redirectsFile, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const parts = trimmed.split(/\s+/);
      if (parts.length >= 2) {
        redirects.push({ from: parts[0], to: parts[1], status: parseInt(parts[2] || '301', 10) });
      }
    }
  }

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // 0. API Route for Direct Brand Settings Saving
    if (req.method === 'POST' && (pathname === '/api/save-brand' || pathname === '/admin/api/save-brand')) {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          const targetId = parsed.brandId;
          const brandData = parsed.data;
          if (targetId && brandData) {
            const jsonPath = path.resolve('content/brands', `${targetId}.json`);
            fs.writeFileSync(jsonPath, JSON.stringify(brandData, null, 2), 'utf8');
            console.log(`✓ [API] Successfully saved updated brand configuration to ${jsonPath}`);
            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify({ ok: true, message: 'Brand configuration saved successfully!' }));
            return;
          }
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: err.message }));
          return;
        }
      });
      return;
    }

    // 1. Check redirects
    for (const rule of redirects) {
      if (rule.from.endsWith('/*')) {
        const prefix = rule.from.slice(0, -2);
        if (pathname.startsWith(prefix)) {
          res.writeHead(rule.status, { Location: rule.to });
          res.end();
          return;
        }
      } else if (rule.from === pathname) {
        res.writeHead(rule.status, { Location: rule.to });
        res.end();
        return;
      }
    }

    // 2. Resolve file path
    let filePath = path.join(siteDir, pathname);

    // Try exact file
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(filePath, res);
      return;
    }

    // Try clean URL (.html)
    if (fs.existsSync(filePath + '.html') && fs.statSync(filePath + '.html').isFile()) {
      serveFile(filePath + '.html', res);
      return;
    }

    // Try index.html in directory
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, res);
        return;
      }
    }

    // 3. Fallback to 404.html
    const notFoundPath = path.join(siteDir, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(notFoundPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });

  server.listen(port, () => {
    console.log(`[Static Server] ${brandName} listening on http://localhost:${port}`);
  });

  return server;
}

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
}

const sites = [
  { id: 'site-01', name: 'SprinkleSpree', port: 5001 },
  { id: 'site-02', name: 'Glaze & Co.', port: 5002 },
  { id: 'site-03', name: 'PureDonut / KetoKreme', port: 5003 },
  { id: 'site-04', name: 'DoughBoyz', port: 5004 },
  { id: 'site-05', name: 'The Donut Counter', port: 5005 },
];

for (const site of sites) {
  const dir = path.resolve('dist', site.id);
  if (fs.existsSync(dir)) {
    createStaticServer(dir, site.name, site.port);
  } else {
    console.warn(`[Static Server] Warning: ${dir} does not exist yet.`);
  }
}

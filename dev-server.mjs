/*
 * Local dev server: serves /dist statically AND runs the /api functions in-process.
 *
 * `http-server dist` alone can't do the second part, so submitting the book-a-demo
 * form locally used to 405 and show the generic error. This mirrors what Vercel does
 * in production: static file first, /api/* dispatched to the matching handler.
 *
 * Reads .env so RESEND_API_KEY is available (no dotenv dependency in this project).
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 5173;

// --- .env ---
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

// Vercel's handlers expect res.status().json() / .send(); node:http gives neither.
function decorate(res) {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
    return res;
  };
  res.send = (body) => {
    res.end(body);
    return res;
  };
  return res;
}

async function handleApi(req, res, routeName) {
  const file = path.join(__dirname, 'api', `${routeName}.js`);
  if (!fs.existsSync(file)) {
    return decorate(res).status(404).json({ error: 'not_found' });
  }
  try {
    // Cache-busted import so editing a handler doesn't need a server restart.
    const mod = await import(`${new URL(`file://${file.replace(/\\/g, '/')}`).href}?t=${Date.now()}`);
    await mod.default(req, decorate(res));
  } catch (err) {
    console.error(`[dev] /api/${routeName} threw:`, err);
    if (!res.headersSent) decorate(res).status(500).json({ error: 'handler_error' });
  }
}

function serveStatic(req, res, pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel.endsWith('/')) rel += 'index.html';
  const full = path.join(DIST, rel);

  // Directory without the trailing slash: redirect, matching vercel.json trailingSlash:true.
  if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
    res.writeHead(308, { Location: `${pathname}/` });
    return res.end();
  }
  if (!full.startsWith(DIST) || !fs.existsSync(full)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>404</h1>');
  }
  res.writeHead(200, {
    'Content-Type': MIME[path.extname(full).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  fs.createReadStream(full).pipe(res);
}

http
  .createServer(async (req, res) => {
    const { pathname } = new URL(req.url, `http://localhost:${PORT}`);
    // Tolerate both /api/book-demo and /api/book-demo/ (the site posts the slashed form).
    const apiMatch = pathname.match(/^\/api\/([A-Za-z0-9_-]+)\/?$/);
    if (apiMatch) return handleApi(req, res, apiMatch[1]);
    return serveStatic(req, res, pathname);
  })
  .listen(PORT, () => {
    console.log(`\n  dist  → http://localhost:${PORT}/`);
    console.log(`  api   → http://localhost:${PORT}/api/book-demo/`);
    console.log(
      `  resend key: ${process.env.RESEND_API_KEY ? 'loaded from .env' : 'MISSING — form will return 500'}\n`
    );
  });

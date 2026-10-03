// Zero-dependency local server for the mirrored site.
//   node server.mjs [port]        (default 3000)
//
// Resolution order for every request:
//   1. overrides/<path>   – your own files shadow the mirror
//   2. site/<path>        – the captured mirror
// Text responses (html / js / css / json) additionally pass through the
// string replacements in overrides.json, so you can rebrand or repoint
// copy and links without touching the mirror.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(ROOT, 'site');
const OVERRIDES = path.join(ROOT, 'overrides');
const PORT = Number(process.argv[2] || process.env.PORT || 3000);
const EXT_PREFIX = '/__ext/web-assets.nousresearch.com';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.map': 'application/json',
};
const TEXT = /\.(html|js|css|json|txt|xml|svg)$/;

function loadReplacements() {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'overrides.json'), 'utf8'));
    return Object.entries(cfg.replace || {}).filter(([k]) => !k.startsWith('_'));
  } catch { return []; }
}

function find(rel) {
  for (const base of [OVERRIDES, SITE]) {
    const root = path.resolve(base);
    for (const cand of [rel, path.join(rel, 'index.html'), rel + '.html']) {
      const file = path.resolve(root, cand);
      if (!file.startsWith(root + path.sep)) continue;
      if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
    }
  }
  return null;
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');

  // Client-side navigations ask for RSC payloads, which a static mirror does not hold.
  // A 404 makes Next.js fall back to a normal full-page load of the same URL.
  if (req.headers['rsc'] || url.searchParams.has('_rsc')) { res.writeHead(404); return res.end(); }

  let file = find(rel === '' ? 'index.html' : rel);
  let status = 200;
  if (!file) { file = find('404.html'); status = 404; }
  if (!file) { res.writeHead(404, { 'content-type': 'text/plain' }); return res.end('Not found'); }

  const ext = path.extname(file).toLowerCase();
  const type = TYPES[ext] || 'application/octet-stream';
  const headers = { 'content-type': type };
  headers['cache-control'] = /^_next\/static|^font\/|^__ext\//.test(rel) ? 'public, max-age=3600' : 'no-cache';

  if (TEXT.test(file)) {
    let body = fs.readFileSync(file, 'utf8');
    // the original asset host now lives on this server
    body = body.split('https://web-assets.nousresearch.com').join(EXT_PREFIX);
    for (const [from, to] of loadReplacements()) body = body.split(from).join(to);
    res.writeHead(status, headers);
    return res.end(body);
  }

  // Range support so <video> can seek.
  const size = fs.statSync(file).size;
  const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
  if (range) {
    const start = range[1] ? Number(range[1]) : 0;
    const end = range[2] ? Number(range[2]) : size - 1;
    res.writeHead(206, { ...headers, 'accept-ranges': 'bytes', 'content-range': `bytes ${start}-${end}/${size}`, 'content-length': end - start + 1 });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(status, { ...headers, 'accept-ranges': 'bytes', 'content-length': size });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Local mirror running at http://localhost:${PORT}`));

// Mirrors https://nousresearch.com into ./site using headless Chromium.
// Usage: node tools/capture.mjs            (needs `playwright` resolvable)
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ORIGIN, MIRROR_HOSTS, MIRROR_IMAGE_HOSTS, localPath } from './paths.mjs';

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../site');
const BLOCK = /googletagmanager|google-analytics|doubleclick|googleads|datadoghq|betterstack|vercel-scripts|_vercel\/|33be7c63cabd3a23|twitter\.com|x\.com|twimg/;

const saved = new Map(); // local rel path -> content-type

function save(rel, body, type) {
  if (!rel) return;
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  saved.set(rel, type);
}

async function sitemapUrls() {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)/g)].map((m) => m[1]);
}

const pages = new Set(await sitemapUrls());
pages.add(`${ORIGIN}/`);
const done = new Set();
const htmlPages = new Map(); // rel path -> html

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
// The browser never does TLS itself: every request is fetched by Node (which verifies
// certificates normally) and handed to the page via route.fulfill. This also lets us
// record each response as it passes through.
await ctx.route('**/*', async (route) => {
  const req = route.request();
  const u = req.url();
  if (BLOCK.test(u)) return route.abort();
  const rel = localPath(u);
  if (rel === null && !/^https?:/.test(u)) return route.continue();
  if (rel === null) return route.abort(); // other third parties (embeds, analytics)
  const isRsc = req.headers()['rsc'] || /_rsc=/.test(u);
  let res;
  try {
    const headers = { ...req.headers() };
    delete headers['host']; delete headers['accept-encoding']; delete headers['range'];
    res = await fetch(u, { method: req.method(), headers, redirect: 'follow' });
  } catch (e) { return route.abort(); }
  const body = Buffer.from(await res.arrayBuffer());
  const type = res.headers.get('content-type') || '';
  if (res.status === 200 && !isRsc && !type.includes('text/html')) save(rel, body, type);
  const out = {};
  res.headers.forEach((v, k) => { if (!/^(content-encoding|content-length|transfer-encoding|connection)$/i.test(k)) out[k] = v; });
  await route.fulfill({ status: res.status, headers: out, body });
});

async function visit(url) {
  const page = await ctx.newPage();
  try {
    const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    if (!res || res.status() !== 200) { console.log('skip', res?.status(), url); return true; }
    const html = await (await fetch(url)).text();
    const u = new URL(url);
    const rel = u.pathname === '/' ? 'index.html' : /\.html$/.test(u.pathname) ? u.pathname.slice(1) : `${u.pathname.replace(/^\//, '')}/index.html`;
    htmlPages.set(rel, html);
    // scroll to trigger lazy images / observers
    const h = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += 500) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(120); }
    await page.waitForTimeout(800);
    await page.setViewportSize({ width: 390, height: 844 }); // mobile-only assets
    await page.waitForTimeout(1500);
    const links = await page.$$eval('a[href]', (as) => as.map((a) => a.href));
    for (const l of links) {
      const lu = new URL(l);
      if (lu.origin === ORIGIN && !/\.(png|jpe?g|svg|webp|pdf|zip)$/i.test(lu.pathname)) pages.add(lu.origin + (lu.pathname.replace(/\/$/, '') || '/'));
    }
    console.log('ok  ', url);
    return true;
  } catch (e) { console.log('fail', url, e.message.split('\n')[0]); return false; }
  finally { await page.close(); }
}

let queue;
while ((queue = [...pages].filter((p) => !done.has(p))).length) {
  for (let i = 0; i < queue.length; i += 4) {
    await Promise.all(queue.slice(i, i + 4).map(async (u) => { done.add(u); if (!(await visit(u))) await visit(u); }));
  }
}
await browser.close();

for (const [rel, html] of htmlPages) save(rel, html, 'text/html');

// Sweep text files for referenced assets the browser never requested.
const esc = (h) => h.replaceAll('.', String.raw`\.`);
const extRe = [...MIRROR_HOSTS, ...MIRROR_IMAGE_HOSTS].map(esc).join('|');
// Local assets stop at the first char that cannot be in a path; external CDN URLs keep their
// commas/colons/queries (e.g. substack's and google docs' signed image URLs).
const REF = new RegExp(String.raw`(?:/_next/static/[\w\-./%]+|/font/[\w\-./%]+|https://(?:${extRe})/[^\s"'\\)<>]+)`, 'g');
for (let round = 0; round < 4; round++) {
  const want = new Set();
  for (const [rel, type] of saved) {
    if (!/text|javascript|json|css|svg/.test(type) && !/\.(js|css|html|json|svg)$/.test(rel)) continue;
    const txt = fs.readFileSync(path.join(OUT, rel), 'utf8');
    for (const m of txt.matchAll(REF)) {
      const abs = (m[0].startsWith('http') ? m[0] : ORIGIN + m[0].replace(/[?#].*/, '')).replace(/&amp;|\\u0026/g, '&').replace(/[.,;]+$/, '');
      const lp = localPath(abs);
      if (lp && !saved.has(lp) && !fs.existsSync(path.join(OUT, lp))) want.add(abs);
    }
  }
  if (!want.size) break;
  console.log(`sweep ${round}: ${want.size} extra assets`);
  for (const abs of want) {
    const res = await fetch(abs);
    if (res.ok) save(localPath(abs), Buffer.from(await res.arrayBuffer()), res.headers.get('content-type') || '');
    else console.log('  miss', res.status, abs);
  }
}
console.log(`saved ${saved.size} files into ${OUT}`);

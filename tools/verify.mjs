import { chromium } from 'playwright';
// Usage: node server.mjs & node tools/verify.mjs   (checks every sitemap URL against localhost:3000)
const sm = (await (await fetch('https://nousresearch.com/sitemap.xml')).text());
const paths = [...sm.matchAll(/<loc>https:\/\/nousresearch\.com([^<]*)/g)].map(m => m[1] || '/');
const b = await chromium.launch();
let bad = 0;
for (const p of paths) {
  const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const issues = [];
  page.on('response', r => { const u = r.url(); if (u.startsWith('http://localhost') && r.status() >= 400 && !/_rsc=|_vercel|33be7c/.test(u)) issues.push(`${r.status()} ${u.replace('http://localhost:3000','')}`); });
  // An external request only counts if it reached the network: the CSP cancels tracker scripts
  // before they leave, which shows up as a failed request ("blocked:csp").
  page.on('requestfinished', (r) => { const u = r.url(); if (!/^(http:\/\/localhost|data:|blob:)/.test(u)) issues.push(`EXTERNAL LOADED ${u.slice(0,90)}`); });
  page.on('pageerror', e => issues.push('PAGEERROR ' + e.message.slice(0,120)));
  try { await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle', timeout: 45000 }); } catch (e) { issues.push('GOTO ' + e.message.split('\n')[0]); }
  const h = await page.evaluate(() => [document.title, document.body.innerText.length]);
  const uniq = [...new Set(issues)];
  if (uniq.length) bad++;
  console.log((uniq.length ? 'ISSUES ' : 'clean  ') + p, JSON.stringify(h), uniq.slice(0,6).join(' | '));
  if (process.env.SHOT && p === '/') await page.screenshot({ path: process.env.SHOT });
  await page.close();
}
console.log('pages with issues:', bad, '/', paths.length);
await b.close();

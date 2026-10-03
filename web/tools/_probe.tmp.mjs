import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', async (route) => { const u = route.request().url(); if (!/nousresearch(\.com|-com-backup\.vercel\.app)|vercel-storage|twimg\.com/.test(u)) return route.abort(); try { const hd = { ...route.request().headers() }; delete hd.host; delete hd['accept-encoding']; delete hd.range; const r = await fetch(u, { headers: hd }); const o = {}; r.headers.forEach((v, k) => { if (!/^(content-encoding|content-length|transfer-encoding|connection)$/i.test(k)) o[k] = v; }); await route.fulfill({ status: r.status, headers: o, body: Buffer.from(await r.arrayBuffer()) }); } catch { await route.abort(); } });
const p = await ctx.newPage();
await p.goto('https://nousresearch.com' + (process.argv[2] || '/'), { waitUntil: 'networkidle' });
await p.waitForTimeout(2500);
const snap = () => p.evaluate(() => {
  const q = (s) => document.querySelector(s);
  const pin = q('.bg-hermes-paper');
  const hw = q('.hermes-web'), fr = q('.hw-footer-reveal'), frame = q('.hw-frame');
  const vars = (el, names) => el ? Object.fromEntries(names.map(n => [n, el.style.getPropertyValue(n)])) : null;
  return {
    y: Math.round(scrollY), docH: document.documentElement.scrollHeight,
    htmlAttrs: Object.fromEntries([...document.documentElement.attributes].map(a => [a.name, a.value.slice(0, 40)])),
    htmlStyle: document.documentElement.getAttribute('style'),
    bodyStyle: document.body.getAttribute('style'), bodyClass: document.body.className,
    pinned: pin ? { cls: pin.className.replace(/.*(invisible|translate-y-0|-translate-y-full).*/, '$1'), inert: pin.hasAttribute('inert') } : null,
    hwStyle: hw && hw.getAttribute('style'),
    footerStyle: fr && fr.getAttribute('style'),
    frame: frame && [...frame.children].map(c => c.className + ' | ' + (c.getAttribute('style') || '') + ' | ' + [...c.attributes].filter(a => a.name.startsWith('data-')).map(a => a.name + '=' + a.value).join(',')),
  };
});
const out = [];
for (const y of [0, 400, 900, 1800, 3000, 4500, 6000, 7500]) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(900); out.push(await snap()); }
for (const o of out) console.log(JSON.stringify(o));
await b.close();

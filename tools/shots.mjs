import { chromium } from 'playwright';
const [out, ...pages] = process.argv.slice(2);
const b = await chromium.launch();
for (const p of pages) {
  const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle' });
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(100); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/shot${p.replace(/\//g, '-') || '-home'}.png`, fullPage: false });
  await page.close();
}
await b.close();

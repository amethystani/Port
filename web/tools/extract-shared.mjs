// Pulls the shared, data-like content (footer columns, announcements) out of the captured home page.
//   node tools/extract-shared.mjs            -> prints JSON
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { findNode, rewriteUrl } from './html-to-jsx.mjs';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../site');
export const load = (f) => parse(fs.readFileSync(path.join(SITE, f), 'utf8'));
export const attr = (n, k) => (n.attrs || []).find((a) => a.name === k)?.value;
export const kids = (n) => (n.childNodes || []).filter((c) => c.tagName);
export const text = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join(''));
export const all = (n, f, out = []) => { if (n.tagName && f(n)) out.push(n); (n.childNodes || []).forEach((c) => all(c, f, out)); return out; };
const hasClass = (n, c) => (attr(n, 'class') || '').split(/\s+/).includes(c);

export function footerColumns(doc) {
  const footer = findNode(doc, '.hw-footer-reveal');
  const grid = findNode(footer, '.hw-teams-footer-grid');
  const cols = [];
  for (const col of all(grid, (n) => hasClass(n, 'hw-teams-footer-column'))) {
    const ps = all(col, (n) => n.tagName === 'p').map((p) => text(p).trim());
    const links = all(col, (n) => n.tagName === 'a').map((a) => ({
      label: text(a).trim(),
      href: rewriteUrl(attr(a, 'href')),
      external: attr(a, 'target') === '_blank',
    }));
    cols.push({ group: ps[0], title: ps[1], links });
  }
  return cols;
}

export function announcements(doc) {
  const cards = all(doc, (n) => hasClass(n, 'nw-announcement-card'));
  return cards.map((c) => {
    const imgs = all(c, (n) => n.tagName === 'img');
    const spans = all(c, (n) => n.tagName === 'span').map((s) => text(s).trim());
    return {
      url: attr(c, 'href'),
      image: rewriteUrl(attr(imgs[0], 'src')),
      handle: spans[0],
      text: all(c, (n) => n.tagName === 'p').map(text).join(''),
      date: spans[spans.length - 1],
    };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const doc = load('index.html');
  console.log(JSON.stringify({ footer: footerColumns(doc), announcements: announcements(doc) }, null, 1));
}

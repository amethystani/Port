// Shared by capture.mjs and server.mjs so both agree on where a URL lives on disk.
import crypto from 'node:crypto';

export const ORIGIN = 'https://nousresearch.com';

// Hosts whose assets are copied into site/__ext/<host>/ and rewritten to local URLs.
export const MIRROR_HOSTS = [
  'web-assets.nousresearch.com',
  'hermes-assets.nousresearch.com',
  '5jdxmo9ix2ncv3a2.public.blob.vercel-storage.com',
  'substackcdn.com',
  'lh7-rt.googleusercontent.com',
];

// Filenames over 100 chars (e.g. substack's url-encoded paths) are replaced by a hash + extension.
export function safeRel(rel) {
  return rel
    .split('/')
    .map((seg) => {
      if (seg.length <= 100) return seg;
      const ext = /\.[a-z0-9]{2,5}$/i.exec(seg)?.[0] ?? '';
      return crypto.createHash('sha1').update(seg).digest('hex') + ext;
    })
    .join('/');
}

// URL -> path relative to site/, or null when the URL is not ours to mirror.
export function localPath(u) {
  const url = new URL(u);
  const pathname = decodeURIComponent(url.pathname).replace(/^\//, '');
  if (url.origin === ORIGIN) return safeRel(pathname);
  if (MIRROR_HOSTS.includes(url.hostname)) return safeRel(`__ext/${url.hostname}/${pathname}`);
  return null;
}

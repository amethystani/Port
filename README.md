# Port

A local, offline mirror of [nousresearch.com](https://nousresearch.com) that you can serve
yourself and adapt to your own use case. It is the real Next.js build (original HTML,
JS, CSS, fonts, images, hero video and the interactive blog demos), so the page renders and
hydrates exactly like the live site.

## Run it

```sh
node server.mjs            # http://localhost:3000  (PORT=8080 node server.mjs, or pass a port)
```

Needs only Node 18+. No install step, no build step.

- Client-side route changes fall back to normal full page loads (the mirror holds the
  server-rendered pages, not the RSC payloads) – visually identical, just a refresh per click.
- Analytics and ad trackers (Google Tag Manager, Datadog, Vercel Insights) are blocked by a
  Content-Security-Policy so the copy does not report visits. `ALLOW_EXTERNAL=1 node server.mjs`
  turns that off.
- Links to other Nous properties (portal, hermes-agent docs, shop, GitHub, X) still point to
  the real internet.

## Adapt it

Two layers sit on top of the untouched mirror in `site/`:

| Layer | Use it for |
| --- | --- |
| `overrides.json` | Exact-string replacements applied to every html/js/css/json response: brand name, copy, links, colors. The page text appears twice in Next.js output (HTML and flight payload); both are replaced. |
| `overrides/` | Files that shadow `site/` at the same URL path: swap a logo, font, image, or replace a whole page. |

```json
{ "replace": { "Nous Research": "Acme Labs", "https://portal.nousresearch.com": "https://app.acme.dev" } }
```

Replacements are plain substrings, so keep them specific (replacing "Nous" alone will also
hit CSS class names and URLs). Restart is not needed – both layers are read per request.

## Re-capture the live site

```sh
npm install        # playwright, only for capturing
npm run capture    # rewrites ./site from https://nousresearch.com
node server.mjs & node tools/verify.mjs   # loads every sitemap page and reports 404s / leaked requests
```

`tools/capture.mjs` drives headless Chromium, but fetches every request through Node so TLS
verification stays on, saves the original server HTML for each sitemap page, then sweeps the
downloaded files for assets the browser never requested.

## Notes

- Content, logos, fonts (Rules, Aeonik Fono *TRIAL*) and artwork belong to Nous Research and
  their licensors. This repo is for local development and study; replace the branding and
  fonts before putting anything derived from it on a public domain.
- `/privacy` and `/terms` return 404 on the live site, so they do not exist here either.

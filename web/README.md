# nous-web

An editable Next.js rebuild of [nousresearch.com](https://nousresearch.com): the same 36 pages, written as
readable React + TypeScript instead of compiled bundles, with the text in data files you can change and the
behaviours (menus, search palette, article tools, 3D scenes) as small components.

It is meant as a starting point you can adapt to your own site. The look comes from the original's compiled
CSS, fonts and images, which are included so the result matches the live site; see
[Branding](#branding-and-licensing) before publishing anything.

```
Next.js 16 (App Router) · React 19 · TypeScript · three.js · Lenis (smooth scroll)
```

## Run it

```sh
cd web
npm install
npm run dev          # http://localhost:3000  (hot reload)

npm run build        # production build (also type-checks)
npm start            # serve the build; PORT=3100 npm start  (or: npx next start -p 3100)
npm run typecheck
```

Node 20 or newer. Every page is generated at build time; the only server code is `app/api/search`.

## Where things are

```
app/
  layout.tsx            page shell: fonts, theme, frame, header/menu/palette, film grain
  (home)/page.tsx       the home page
  (editorial)/          blog, releases, careers, one job, and each article ([slug])
  api/search/           POST { query } → results, used by the ⌘K palette
  sitemap.ts robots.ts
components/
  home/ blog/ catalogue/ article/   page sections and the article reader
  chrome/               header, footer, frame, art shader, film grain
  research/             nav dropdown, ⌘K palette (Composer), phone menu
  behavior/             smooth scroll, scroll reveals, theme toggle, footer reveal
  ui/                   Button, Dialog, Select, Field, list disclosure, type helpers
  icons/                the SVGs
content/                ← the words. Edit these.
lib/                    helpers, motion, search, 3D scenes, speech
styles/                 the design system's CSS (01–09), page CSS, and custom.css (yours)
public/                 images, fonts, the demo video
tools/                  extraction and verification scripts (not part of the site)
```

## Change the content

Almost all copy lives in `content/`. Edit, save, and the page updates.

| To change | Edit |
| --- | --- |
| Site name, URL, description, share image | `lib/site.ts` (set `NEXT_PUBLIC_SITE_URL` in production) |
| Home page hero, mission, Hermes features | `content/home.ts` |
| The announcements strip on the home page | `content/announcements.ts` |
| Footer columns and links | `content/footer.ts` |
| Header dropdowns (Nous / Hermes / Community / Portal) | `content/research-navigation.ts` |
| Phone menu | `content/mobile-menu.ts` |
| ⌘K palette's suggested questions and answers | `content/composer.ts` |
| Blog posts: title, author, date, image, related | `content/posts.ts` |
| Blog post bodies | `content/posts/<slug>.html` |
| Releases list | `content/releases.ts` |
| Open roles | `content/jobs.ts` |

**Add a blog post:** add an entry to `content/posts.ts` (copy an existing one), put the article body in
`content/posts/<your-slug>.html`, and put its images under `public/`. Headings with an `id` become the
article's "Contents" list and reading rail. The post appears on `/blog`, in search, in the sitemap and
under any post that lists it in `related`.

**Search** (`lib/search.ts`) is built from your own content: pages, posts, releases and roles. There is no
external index to maintain.

## Adapt it to your own site

1. `lib/site.ts`: name, URL, description, social links.
2. Replace the images in `public/assets/` and the Nous marks in `components/icons/` and the footer.
3. Replace the fonts (`public/font/`, declared with `@font-face` in `styles/06-app.css`); see the licensing note below.
4. Re-theme in `styles/custom.css`, which loads last. The site is two blues, a bright one (frame, buttons,
   headings, links) and a darker one for body copy; `custom.css` explains each variable and has them ready to copy:
   ```css
   :root  { --hermes-color-blue: #0a7d4b; --hermes-primary: #0a7d4b; --nw-theme-blue: #064d2d; }
   .nous-web { --nw-ink: #0a7d4b; --nw-editorial-link: #0a7d4b;
               --nw-editorial-text: #064d2d; --hw-teams-ink: #064d2d; --nw-key-ink: #064d2d; }
   ```
   That recolours all text, the frame and the buttons on every page. The artwork (hero image, footer
   picture, mission images, the wing icon in the search bar) is blue artwork, so replace those files too.
5. Rewrite the copy in `content/`, and delete the pages you do not need (and their sitemap entries).

## How it was checked against the live site

The rebuild was compared with nousresearch.com three ways. All of these scripts need the rebuild running
(`npx next start -p 3100`); the first two fetch the live site through Node, so TLS verification stays on.

| Check | Command | Result when this was written |
| --- | --- | --- |
| Server-rendered HTML, element by element, for every sitemap page | `node tools/dom-diff.mjs` | 36 of 36 identical |
| Pixels against the live site (`FULL=1` for whole pages, `THEME=dark` for dark mode) | `VIEWPORTS=1440x900,390x844 node tools/compare.mjs / /blog …` | see below |
| Behaviour: menus, palette, dialogs, rail, dock, scroll, 3D, video | `node tools/behavior-check.mjs` | all checks pass |

Pixel results, all 36 pages: the first screen is identical at desktop size (36 of 36) and at phone size
(34 of 36); whole pages are identical for 28 of 36 at desktop size; dark mode is identical on the six pages
tried. Every remaining difference was traced to the test environment rather than the rebuild: the original
could not load images from one host (so its articles came out shorter), its announcements request failed
(an error line made its home page 102px taller), and one animated GIF was caught on a different frame.
Against the offline copy of the original, which loads everything, all 19 articles have exactly the same
page height as the rebuild.

The behaviours were also compared against the original running side by side: the same steps on both, with
the resulting state, spoken text, scene pixels and layout compared.

## Differences from the live site

Deliberate, and small:

- **No analytics or tracking.** The original loads Google Tag Manager, Datadog and Vercel Insights; none of
  that is here.
- **Search runs on your content** (`lib/search.ts`) rather than Nous's own index, so results come from this
  site's pages.
- **Announcements are static data** (`content/announcements.ts`, captured from the live page). The live site
  loads them with a server action.
- **Canonical and share URLs use `site.url`**, not `nousresearch.com`.
- **The article logo** is chosen on the server for article pages; the live site swaps it after load.
- **One reading-rail preview** (the second "Logic puzzles" section of the thinking-efficiency article) can
  show a different excerpt. The original's rule counts the whitespace in its source HTML as text; this
  one measures real text.
- **Third-party images** that the original hot-links are copied into `public/assets/external/`.
- **Links to other Nous sites** (portal, hermes-agent docs, shop, Discord, GitHub, X) still point at the
  real ones.

## Branding and licensing

The Nous Research name, marks, artwork, copy and the Rules and Aeonik Fono (trial) fonts belong to Nous
Research and their licensors. This project is for local development and study. Before putting anything
derived from it on a public domain, replace the branding, artwork, text and fonts with your own and make
sure you hold licences for any font you keep.

## Tools (`tools/`)

Not part of the site; used to build and verify it.

| Script | Purpose |
| --- | --- |
| `dom-diff.mjs`, `compare.mjs`, `behavior-check.mjs` | verification (above) |
| `html-to-jsx.mjs` | converts captured HTML into JSX components |
| `extract-posts.mjs`, `extract-lists.mjs`, `extract-shared.mjs`, `write-content.mjs` | one-off extraction of the content files from the captured pages |
| `localize-external.mjs` | copies hot-linked third-party images into `public/` |

`extract-posts.mjs` keeps math blocks' exact whitespace (they render with `white-space: pre`); run it with
`BODIES_ONLY=1` to rewrite the post bodies without touching `content/posts.ts`.

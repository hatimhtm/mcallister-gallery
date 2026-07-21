<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets-readme/hero-banner-dark.svg" />
    <img src="assets-readme/hero-banner.svg" alt="Dr. Caryn McAllister Gallery — Beauty, color & joy, for all" width="100%" />
  </picture>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML+CSS+JS-Vanilla-1C1A17?style=for-the-badge&logoColor=F6F4EF" alt="Vanilla HTML/CSS/JS" />
  <img src="https://img.shields.io/badge/Dependencies-Zero-F6F4EF?style=for-the-badge&labelColor=1C1A17&color=F6F4EF" alt="Zero dependencies" />
  <img src="https://img.shields.io/badge/Build_step-None-1C1A17?style=for-the-badge" alt="No build step" />
  <img src="https://img.shields.io/badge/Vercel-Ready-F6F4EF?style=for-the-badge&labelColor=1C1A17&logo=vercel&logoColor=F6F4EF&color=F6F4EF" alt="Vercel ready" />
  <img src="https://img.shields.io/badge/Code-MIT-1C1A17?style=for-the-badge" alt="MIT code" />
</p>

<p align="center">
  <em>A one-page gallery site for Dr. Caryn McAllister — a Connecticut doctor of physical therapy whose
  gallery pairs original watercolors, acrylics and mixed media with one mission: greater access to
  healthcare for all. Quiet editorial layout, museum lightbox, and not a single framework in sight —
  three hand-written files you can read over coffee.</em>
</p>

---

### `/// WHAT IT IS`

```
┌─────────────────────────────────────────────────────────────────────────┐
│ INTRO         Blurred-painting curtain wiped away by ink splatters —    │
│               a canvas track matte, no video, once per session          │
├─────────────────────────────────────────────────────────────────────────┤
│ HERO          Serif headline with an inline painting "chip", floating   │
│               polaroid card, mouse parallax, scrolling ticker           │
├─────────────────────────────────────────────────────────────────────────┤
│ 01 ON VIEW    Drag-to-explore rail of six highlights, oversized         │
│               italic numerals, scroll-snap on touch                     │
├─────────────────────────────────────────────────────────────────────────┤
│ 02 COLLECTION 22 works in a masonry grid — filter chips                 │
│               (Florals · Land & Sea · Menagerie · Abstract),            │
│               numbered catalogue captions, cursor "View" bubble         │
├─────────────────────────────────────────────────────────────────────────┤
│ 03 THE SALON  48 framed originals photographed as they hang, led by     │
│               an installation shot of the collection in situ            │
├─────────────────────────────────────────────────────────────────────────┤
│ QUOTE         Full-bleed band over a darkened painting                  │
├─────────────────────────────────────────────────────────────────────────┤
│ 04 THE GALLERY  Founder & director, mission, socials                    │
├─────────────────────────────────────────────────────────────────────────┤
│ 05 CONNECT    "Come closer." → message the gallery on Instagram         │
└─────────────────────────────────────────────────────────────────────────┘
│ LIGHTBOX      Any artwork → full-screen viewer: arrows, keyboard,       │
│               swipe, piece counter, per-piece inquiry link              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### `/// HIGHLIGHTS`

```
TYPOGRAPHY    Cormorant Garamond display serif over Inter micro-caps —
              a fine-gallery pairing on paper-white #f6f4ef.

MOTION        Ink-splatter track-matte intro on a 2D canvas: the blur is
              pre-baked into a JPEG and each frame is one blit + six
              destination-out fills, so it runs at display refresh rate
              (60/120 fps). The ink carries through the site: the viewer
              opens as a blooming ink blot (composited transform), the
              quote band has torn painted edges, section numbers sit on
              watercolor daubs. All honoring prefers-reduced-motion.

MOBILE        Not a squeezed desktop: full-width CTAs, swipe rails,
              horizontal filter chips, thumb-pill lightbox arrows.

IMAGES        Every photographed frame was cropped to the artwork;
              real lazy-loading with intrinsic sizes (no layout shift),
              responsive srcset (800px variants for grid rendering,
              full resolution reserved for the lightbox), watercolor
              wash placeholders per piece.

ZERO ANYTHING No framework, no bundler, no npm, no CDN. index.html +
              styles.css + app.js + self-hosted fonts (latin woff2
              subsets, OFL). The page makes zero external requests.
```

---

### `/// RUN IT`

```bash
# it's a static site — any server works
cd mcallister-gallery
python3 -m http.server 8000
# → http://localhost:8000
```

Or just open `index.html` in a browser.

---

### `/// EDIT THE COLLECTION`

Every artwork lives in the `WORKS` (collection) and `SALON` (framed works) arrays at the top of [`app.js`](app.js):

```js
{ slug: "meadow", title: "Meadow Song", medium: "Acrylic on canvas",
  size: "", cat: "landscapes", wash: "#2c827f" },
```

- **Rename a piece** → edit `title`.
- **Add dimensions** → fill `size` (e.g. `"11 × 14 in"`) — it appears in captions and the viewer automatically.
- **Swap the highlights rail** → the `FEATURED` slug list right below.
- **Add a work** → drop a `.jpg` in `assets/art/` and add one line (with its `w`/`h` pixel size;
  if it's wider than 900px, also export an 800px-wide `<slug>-800.jpg` for the grid).

`?flat` on any URL disables animations — handy for pixel-perfect screenshots.

---

### `/// DEPLOY`

Push to GitHub → import in [Vercel](https://vercel.com/new) → framework preset **Other**, no build command,
output directory `.` — done. `vercel.json` already ships clean URLs and immutable caching for `assets/`.
After the first deploy, update the `og:url` / `og:image` domain in `index.html` if the project name differs.

---

### `/// RIGHTS`

Code is MIT — take what you like. The paintings and their photographs are **© Dr. Caryn McAllister
Gallery, all rights reserved**, and are not covered by the code license.

<p align="center"><em>Beauty, color &amp; joy — for all.</em></p>

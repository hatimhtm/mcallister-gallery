/* Dr. Caryn McAllister Gallery */

/* To add a size for any piece, fill in the `size` field, e.g. size: "11 × 14 in".
   It will appear automatically in the grid captions and the viewer. */
const WORKS = [
  { slug: "meadow",         title: "Meadow Song",        medium: "Acrylic on canvas",     size: "", w: 1600, h: 1200, cat: "landscapes", wash: "#2c827f" },
  { slug: "daisies",        title: "Daisies in the Wind", medium: "Watercolor & ink",     size: "", w: 1147, h: 1560, cat: "florals",    wash: "#798454" },
  { slug: "boats",          title: "Resting Boats",      medium: "Ink & watercolor wash", size: "", w: 1218, h: 1600, cat: "landscapes", wash: "#7f7f72" },
  { slug: "trillium",       title: "Trillium",           medium: "Watercolor & ink",      size: "", w: 708, h: 1170, cat: "florals",    wash: "#88667b" },
  { slug: "prima",          title: "Prima",              medium: "Mixed media on canvas", size: "", w: 760, h: 908, cat: "menagerie",  wash: "#9ea1a6" },
  { slug: "shoreline",      title: "Shoreline",          medium: "Watercolor",            size: "", w: 1153, h: 1529, cat: "landscapes", wash: "#8a835b" },
  { slug: "muscari",        title: "Grape Hyacinths",    medium: "Watercolor & ink",      size: "", w: 1170, h: 1560, cat: "florals",    wash: "#839a75" },
  { slug: "mirror-lake",    title: "Mirror Lake",        medium: "Acrylic on board",      size: "", w: 1221, h: 1600, cat: "abstracts",  wash: "#6c8a8f" },
  { slug: "young-hare",     title: "Young Hare",         medium: "Watercolor & ink",      size: "", w: 877, h: 1189, cat: "menagerie",  wash: "#99938c" },
  { slug: "daffodil",       title: "Golden Bloom"   ,   medium: "Watercolor & ink",      size: "", w: 1277, h: 983, cat: "florals",    wash: "#9c8a51" },
  { slug: "palms-i",        title: "Windswept Palms I"   , medium: "Watercolor",          size: "", w: 1170, h: 1560, cat: "landscapes", wash: "#7a8235" },
  { slug: "marigold",       title: "Orange Blossom Days", medium: "Acrylic on canvas",    size: "", w: 1017, h: 1030, cat: "florals",  wash: "#b46f30" },
  { slug: "little-owl",     title: "Little Owl",         medium: "Watercolor & ink",      size: "", w: 606, h: 913, cat: "menagerie",  wash: "#7e7d70" },
  { slug: "garden-reverie", title: "Garden Reverie",     medium: "Watercolor",            size: "", w: 1219, h: 1600, cat: "florals",    wash: "#b3a690" },
  { slug: "autumn-fire",    title: "Autumn Fire",        medium: "Mixed media",           size: "", w: 1219, h: 1600, cat: "landscapes", wash: "#968d86" },
  { slug: "peach-blossom",  title: "Blush Bloom"  ,      medium: "Watercolor & ink",      size: "", w: 1257, h: 1253, cat: "florals",    wash: "#9c7d62" },
  { slug: "sea-change",     title: "Sea Change",         medium: "Mixed media",           size: "", w: 1290, h: 1249, cat: "abstracts",  wash: "#888160" },
  { slug: "hare-heart",     title: "Hare with a Heart",  medium: "Watercolor & ink",      size: "", w: 1170, h: 1560, cat: "menagerie",  wash: "#92a172" },
  { slug: "palms-ii",       title: "Windswept Palms II",        medium: "Watercolor",            size: "", w: 1170, h: 1560, cat: "landscapes", wash: "#7d773d" },
  { slug: "solitude",       title: "Solitude",           medium: "Mixed media",           size: "", w: 896, h: 1137, cat: "abstracts",  wash: "#a19b83" },
  { slug: "birdbath",       title: "The Birdbath",       medium: "Watercolor & ink",      size: "", w: 1222, h: 1600, cat: "landscapes", wash: "#678e90" },
  { slug: "the-muse",       title: "The Muse",           medium: "Mixed media on canvas", size: "", w: 900, h: 913, cat: "abstracts",  wash: "#868585" },
];

/* Slugs featured in the "On View" showcase, in order */
const FEATURED = ["meadow", "the-muse", "autumn-fire", "prima", "mirror-lake", "marigold"];

/* The Salon: framed originals, photographed ready to hang. Rendered in
   their frames — the frame is part of the object. First entry is the
   installation photograph that opens the section. */
const SALON = [
  { slug: "salon-in-situ", title: "The Salon, in situ", medium: "The collection installed", size: "Connecticut", w: 1200, h: 1600, cat: "salon", wash: "#8a8378" },
  { slug: "salon-02", title: "Horizon in Red", medium: "Watercolor", size: "Framed", w: 1600, h: 1385, cat: "salon", wash: "#855e57" },
  { slug: "salon-03", title: "Lotus", medium: "Watercolor", size: "Framed", w: 1600, h: 1050, cat: "salon", wash: "#877e6c" },
  { slug: "salon-04", title: "Storm Light", medium: "Watercolor", size: "Framed", w: 1600, h: 1200, cat: "salon", wash: "#797567" },
  { slug: "salon-05", title: "Silver Bloom", medium: "Watercolor & ink", size: "Framed", w: 1600, h: 1200, cat: "salon", wash: "#94896f" },
  { slug: "salon-06", title: "Cove", medium: "Watercolor", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#887d69" },
  { slug: "salon-07", title: "Carnations", medium: "Watercolor", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#a29282" },
  { slug: "salon-08", title: "Ember Shore", medium: "Acrylic", size: "Framed", w: 1054, h: 1600, cat: "salon", wash: "#5b6a7b" },
  { slug: "salon-09", title: "Undertow", medium: "Mixed media", size: "Framed", w: 1600, h: 1274, cat: "salon", wash: "#8a8b87" },
  { slug: "salon-10", title: "Cocktail Hour", medium: "Watercolor & ink", size: "Framed suite of eight", w: 1600, h: 1546, cat: "salon", wash: "#958f82" },
  { slug: "salon-11", title: "Snow Field", medium: "Mixed media", size: "Framed", w: 1475, h: 1600, cat: "salon", wash: "#8a8882" },
  { slug: "salon-12", title: "Plume", medium: "Mixed media", size: "Framed", w: 1600, h: 1113, cat: "salon", wash: "#8b867b" },
  { slug: "salon-13", title: "Dogwood Nights", medium: "Watercolor & ink", size: "Framed", w: 1600, h: 1075, cat: "salon", wash: "#948381" },
  { slug: "salon-14", title: "Wild Bouquet", medium: "Watercolor & ink", size: "Framed", w: 1174, h: 1600, cat: "salon", wash: "#877d71" },
  { slug: "salon-15", title: "Tulip", medium: "Watercolor", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#a49285" },
  { slug: "salon-16", title: "Corps de Ballet", medium: "Acrylic on canvas", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#988e7e" },
  { slug: "salon-17", title: "Island Walk", medium: "Watercolor", size: "Framed", w: 1409, h: 1600, cat: "salon", wash: "#828362" },
  { slug: "salon-18", title: "Garden Suite", medium: "Watercolor & ink", size: "Framed suite of nine", w: 1484, h: 1600, cat: "salon", wash: "#9a8d78" },
  { slug: "salon-19", title: "Night Sail", medium: "Mixed media", size: "Framed", w: 1600, h: 1231, cat: "salon", wash: "#7d7e7f" },
  { slug: "salon-20", title: "The Sage", medium: "Ink & wash", size: "Framed", w: 1252, h: 1600, cat: "salon", wash: "#9a8e7b" },
  { slug: "salon-21", title: "Five Hares", medium: "Watercolor", size: "Framed suite of five", w: 1600, h: 711, cat: "salon", wash: "#877d6e" },
  { slug: "salon-22", title: "Sunset Regatta", medium: "Watercolor", size: "Framed", w: 1600, h: 1344, cat: "salon", wash: "#a4947f" },
  { slug: "salon-23", title: "Composition in Silver", medium: "Mixed media", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#948770" },
  { slug: "salon-24", title: "House in the Mist", medium: "Watercolor", size: "Framed", w: 1138, h: 1600, cat: "salon", wash: "#8e9176" },
  { slug: "salon-25", title: "Scarlet Dahlia", medium: "Watercolor", size: "Framed", w: 1284, h: 1600, cat: "salon", wash: "#8e6258" },
  { slug: "salon-26", title: "Firebird Garden", medium: "Mixed media", size: "Framed", w: 1296, h: 1600, cat: "salon", wash: "#8a6d63" },
  { slug: "salon-27", title: "Butterfly in Plum", medium: "Watercolor & ink", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#a08f83" },
  { slug: "salon-28", title: "Blue Bunny", medium: "Acrylic on canvas", size: "Framed", w: 1352, h: 1600, cat: "salon", wash: "#507878" },
  { slug: "salon-29", title: "Midnight Hare", medium: "Acrylic", size: "Framed", w: 1322, h: 1600, cat: "salon", wash: "#867f72" },
  { slug: "salon-30", title: "Serenade", medium: "Watercolor", size: "Framed", w: 1290, h: 1600, cat: "salon", wash: "#9b7c56" },
  { slug: "salon-31", title: "Beneath the Palm", medium: "Watercolor", size: "Framed", w: 1414, h: 1600, cat: "salon", wash: "#767c62" },
  { slug: "salon-32", title: "Waterfall", medium: "Mixed media", size: "Framed", w: 1297, h: 1600, cat: "salon", wash: "#8d8c76" },
  { slug: "salon-33", title: "Riverbank Poppies", medium: "Watercolor", size: "Framed", w: 1511, h: 1600, cat: "salon", wash: "#97998e" },
  { slug: "salon-34", title: "Honeybee", medium: "Watercolor & ink", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#9a8e80" },
  { slug: "salon-35", title: "Marsh Heron", medium: "Mixed media", size: "Framed", w: 1278, h: 1600, cat: "salon", wash: "#827962" },
  { slug: "salon-36", title: "Lake in the Mountains", medium: "Watercolor", size: "Framed", w: 1281, h: 1600, cat: "salon", wash: "#797969" },
  { slug: "salon-37", title: "Garden Cat", medium: "Watercolor", size: "Framed", w: 1255, h: 1600, cat: "salon", wash: "#7f735b" },
  { slug: "salon-38", title: "Cherry Tree", medium: "Watercolor", size: "Framed", w: 1600, h: 1190, cat: "salon", wash: "#b9ac99" },
  { slug: "salon-39", title: "Poppies at Noon", medium: "Watercolor", size: "Framed", w: 1600, h: 1212, cat: "salon", wash: "#ab9d8f" },
  { slug: "salon-40", title: "Quiet Marsh", medium: "Mixed media", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#9c8f7b" },
  { slug: "salon-41", title: "The Garden Gate", medium: "Watercolor & ink", size: "Framed", w: 1286, h: 1600, cat: "salon", wash: "#757566" },
  { slug: "salon-42", title: "Nocturne", medium: "Mixed media", size: "Framed", w: 1200, h: 1600, cat: "salon", wash: "#8f8a7f" },
  { slug: "salon-43", title: "Little Scruff", medium: "Acrylic", size: "Framed", w: 1600, h: 1571, cat: "salon", wash: "#6b6760" },
  { slug: "salon-44", title: "Sweethearts by the Sea", medium: "Acrylic on canvas", size: "Framed", w: 1033, h: 1600, cat: "salon", wash: "#97948d" },
  { slug: "salon-46", title: "Two Trees", medium: "Watercolor", size: "Framed", w: 1600, h: 1183, cat: "salon", wash: "#7b7d48" },
  { slug: "salon-47", title: "Red Mesa", medium: "Watercolor", size: "Framed", w: 1600, h: 1081, cat: "salon", wash: "#817553" },
  { slug: "salon-48", title: "Evening Dogwood", medium: "Watercolor", size: "Framed", w: 1600, h: 1122, cat: "salon", wash: "#776b55" },
  { slug: "salon-49", title: "Daydreamer", medium: "Mixed media", size: "Framed", w: 1234, h: 1600, cat: "salon", wash: "#97876f" },
  { slug: "salon-50", title: "Safe Harbor", medium: "Watercolor", size: "Framed", w: 1560, h: 1600, cat: "salon", wash: "#99918b" },
];

const ALLWORKS = WORKS.concat(SALON);   /* one shared index space for the lightbox */

const FLAT = new URLSearchParams(location.search).has("flat"); // visual-QA mode: no animations
if (FLAT) document.documentElement.style.scrollBehavior = "auto";

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* sessionStorage throws when site data is blocked — never let that kill the page */
const store = {
  get(k) { try { return sessionStorage.getItem(k); } catch (_) { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, v); } catch (_) { /* blocked */ } },
};

const detailOf = (w) => [w.medium, w.size].filter(Boolean).join(" · ");

/* works wider than 900px have an 800px variant for grid-size rendering;
   the full-resolution file is reserved for the lightbox */
const srcsetFor = (w, sizes) =>
  w.w > 900
    ? ` srcset="assets/art/${w.slug}-800.jpg 800w, assets/art/${w.slug}.jpg ${w.w}w" sizes="${sizes}"`
    : "";
const GRID_SIZES = "(max-width: 599px) 92vw, (max-width: 1100px) 46vw, 30vw";
const FEAT_SIZES = "(max-width: 880px) 82vw, 560px";

/* duplicate ticker content so the -50% translate loops seamlessly */
const tickerRow = document.querySelector(".ticker-row");
tickerRow.innerHTML += tickerRow.innerHTML;

/* ---------- intro: ink-splatter track matte (canvas) ----------
   Stage is 1600x900 units mapped cover-style onto the viewport.
   Each frame = one image blit + a wash + the wordmark + up to six
   destination-out path fills. No runtime blur, no SVG mask — the
   blurred curtain is pre-baked into assets/intro-blur.jpg, so the
   whole thing composites on the GPU at display refresh rate. */
const INTRO_SPLATS = [
  { cx: 320,  cy: 210, d: "M409 -15C394 60 366 126 330 186C295 246 245 308 197 344C150 380 97 415 45 403C-8 391 -26 282 -117 270C-208 257 -445 373 -500 328C-556 283 -456 113 -451 2C-445 -109 -514 -286 -467 -336C-419 -386 -243 -288 -165 -296C-87 -305 -52 -398 2 -385C56 -371 89 -238 160 -217C230 -197 384 -297 426 -263C467 -229 425 -89 409 -15ZM-398 611m-26 0a26 26 0 1 0 51 0a26 26 0 1 0 -51 0ZM185 -746m-50 0a50 50 0 1 0 99 0a50 50 0 1 0 -99 0ZM427 430m-38 0a38 38 0 1 0 76 0a38 38 0 1 0 -76 0ZM-789 -41m-22 0a22 22 0 1 0 45 0a22 22 0 1 0 -45 0ZM443 -460m-42 0a42 42 0 1 0 84 0a42 42 0 1 0 -84 0Z" },
  { cx: 800,  cy: 120, d: "M325 -11C351 65 436 221 422 282C407 342 313 356 238 352C163 348 43 268 -30 258C-103 248 -135 292 -199 293C-263 293 -366 317 -413 261C-460 206 -485 32 -481 -41C-476 -113 -443 -146 -384 -174C-325 -202 -190 -197 -126 -209C-61 -221 -54 -210 5 -246C64 -281 185 -433 229 -421C272 -410 250 -244 266 -175C282 -107 299 -87 325 -11ZM415 -564m-44 0a44 44 0 1 0 89 0a44 44 0 1 0 -89 0ZM-649 233m-26 0a26 26 0 1 0 52 0a26 26 0 1 0 -52 0ZM-251 -488m-31 0a31 31 0 1 0 62 0a31 31 0 1 0 -62 0ZM700 122m-32 0a32 32 0 1 0 64 0a32 32 0 1 0 -64 0Z" },
  { cx: 810,  cy: 560, d: "M731 -11C728 62 483 93 404 177C326 260 331 429 260 488C189 547 82 519 -22 532C-127 546 -324 628 -368 569C-411 510 -263 270 -281 180C-300 90 -423 134 -476 29C-529 -75 -648 -384 -599 -448C-551 -513 -291 -369 -185 -357C-79 -346 -40 -337 38 -379C117 -421 220 -628 284 -609C348 -590 347 -364 421 -265C496 -165 733 -85 731 -11ZM-883 325m-41 0a41 41 0 1 0 82 0a41 41 0 1 0 -82 0ZM-555 596m-30 0a30 30 0 1 0 60 0a30 30 0 1 0 -60 0ZM-68 -997m-32 0a32 32 0 1 0 65 0a32 32 0 1 0 -65 0ZM127 -880m-43 0a43 43 0 1 0 85 0a43 43 0 1 0 -85 0Z" },
  { cx: 1280, cy: 240, d: "M463 -18C437 63 425 94 402 185C380 275 404 456 328 524C252 592 60 591 -54 592C-168 592 -297 581 -359 527C-420 472 -401 352 -424 265C-447 177 -475 98 -499 2C-523 -94 -620 -255 -567 -309C-515 -362 -267 -270 -182 -319C-97 -368 -116 -601 -56 -604C4 -606 77 -384 180 -334C283 -284 514 -358 561 -306C608 -253 490 -100 463 -18ZM-855 315m-40 0a40 40 0 1 0 81 0a40 40 0 1 0 -81 0ZM220 -620m-31 0a31 31 0 1 0 61 0a31 31 0 1 0 -61 0ZM303 -728m-49 0a49 49 0 1 0 97 0a49 49 0 1 0 -97 0Z" },
  { cx: 240,  cy: 760, d: "M503 8C511 55 325 65 281 134C236 203 275 363 237 420C199 477 127 490 52 475C-23 459 -155 372 -213 329C-270 286 -268 278 -293 217C-318 157 -340 48 -365 -33C-390 -115 -457 -213 -440 -270C-424 -328 -332 -332 -264 -380C-196 -428 -114 -558 -31 -560C53 -562 191 -460 235 -391C279 -323 189 -214 234 -147C279 -81 495 -39 503 8ZM-575 347m-29 0a29 29 0 1 0 58 0a29 29 0 1 0 -58 0ZM395 -586m-24 0a24 24 0 1 0 48 0a24 24 0 1 0 -48 0ZM600 -111m-34 0a34 34 0 1 0 68 0a34 34 0 1 0 -68 0Z" },
  { cx: 1420, cy: 720, d: "M573 39C570 127 491 195 418 233C344 270 207 210 131 264C55 318 9 557 -39 558C-86 559 -84 312 -155 271C-227 230 -450 353 -470 311C-490 270 -289 104 -277 22C-266 -60 -415 -125 -400 -182C-385 -239 -257 -263 -189 -321C-121 -378 -87 -495 6 -527C98 -558 295 -546 365 -507C436 -469 396 -384 430 -293C465 -202 575 -48 573 39ZM103 -747m-33 0a33 33 0 1 0 66 0a33 33 0 1 0 -66 0ZM-110 -627m-38 0a38 38 0 1 0 76 0a38 38 0 1 0 -76 0ZM-622 -395m-45 0a45 45 0 1 0 91 0a45 45 0 1 0 -91 0Z" },
];
const WIPE_START = 1000, WIPE_STAGGER = 115, WIPE_DUR = 1200;
const INTRO_END = WIPE_START + (INTRO_SPLATS.length - 1) * WIPE_STAGGER + WIPE_DUR + 80;

const playIntro = !FLAT && !REDUCED && !store.get("introShown");

if (playIntro) {
  store.set("introShown", "1");
  document.body.classList.add("intro-on");

  const canvas = document.getElementById("intro");
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const splats = INTRO_SPLATS.map((s) => ({ ...s, path: new Path2D(s.d) }));
  const bg = new Image();
  bg.src = "assets/intro-blur.jpg";

  let W, H, S, ox, oy;
  const resize = () => {
    W = innerWidth; H = innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    S = Math.max(W / 1600, H / 900);
    ox = (W - 1600 * S) / 2; oy = (H - 900 * S) / 2;
  };
  resize();
  addEventListener("resize", resize);

  const easeOut = (p) => 1 - Math.pow(1 - Math.min(Math.max(p, 0), 1), 3);
  const INK = "#1c1a17", SOFT = "#5d574c";
  const nameFont = (px) => `600 ${px}px "Cormorant Garamond", Georgia, serif`;

  /* avoid an in-canvas font swap mid-animation, and re-measure only when needed */
  let fontsReady = document.fonts.check('600 96px "Cormorant Garamond"');
  document.fonts.load('600 96px "Cormorant Garamond"').then(() => { fontsReady = true; wm = null; });
  let wm = null; // cached wordmark metrics
  const measureWordmark = () => {
    ctx.font = nameFont(96 * S);
    const w1 = ctx.measureText("Dr. Caryn M").width;
    const w3 = ctx.measureText("Allister").width;
    ctx.font = nameFont(96 * 0.64 * S);
    const wc = ctx.measureText("c").width;
    const total = w1 + wc + w3;
    return { S, w1, wc, w3, total, fit: Math.min(1, (W * 0.88) / total) };
  };

  const drawWordmark = (t) => {
    const p = easeOut((t - 120) / 900);
    if (p <= 0) return;
    ctx.globalAlpha = p;
    const baseY = oy + 460 * S + (1 - p) * 16 * S;
    if (!wm || wm.S !== S) wm = measureWordmark();
    const { w1, wc, w3, total, fit } = wm;

    ctx.save();
    ctx.translate(W / 2, baseY);
    ctx.scale(fit, fit);
    ctx.textBaseline = "alphabetic";

    ctx.fillStyle = SOFT;
    ctx.font = `500 ${21 * S}px Inter, sans-serif`;
    try { ctx.letterSpacing = `${9 * S}px`; } catch (_) { /* older engines */ }
    ctx.textAlign = "center";
    ctx.fillText("THE GALLERY OF", 0, -74 * S);

    try { ctx.letterSpacing = "0px"; } catch (_) {}
    ctx.fillStyle = INK;
    ctx.textAlign = "left";
    let x = -total / 2;
    ctx.font = nameFont(96 * S);
    ctx.fillText("Dr. Caryn M", x, 20 * S); x += w1;
    ctx.font = nameFont(96 * 0.64 * S);
    ctx.fillText("c", x, -6 * S); x += wc;
    ctx.font = nameFont(96 * S);
    ctx.fillText("Allister", x, 20 * S);

    ctx.strokeStyle = "rgba(28,26,23,0.35)";
    ctx.lineWidth = Math.max(1, S);
    ctx.beginPath();
    ctx.moveTo(-160 * S, 64 * S); ctx.lineTo(160 * S, 64 * S);
    ctx.stroke();

    ctx.fillStyle = SOFT;
    ctx.font = `500 ${19 * S}px Inter, sans-serif`;
    try { ctx.letterSpacing = `${13 * S}px`; } catch (_) {}
    ctx.textAlign = "center";
    ctx.fillText("GALLERY", 6 * S, 106 * S);
    try { ctx.letterSpacing = "0px"; } catch (_) {}
    ctx.restore();
    ctx.globalAlpha = 1;
  };

  const qaOffset = +(new URLSearchParams(location.search).get("it") || 0); // QA: render the timeline at +N ms
  let t0 = null, bgAt = null;
  const frame = (now) => {
    if (t0 === null) t0 = now - qaOffset;
    const t = now - t0;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";

    // curtain: pre-blurred painting with a slow settle-zoom, paper wash, wordmark
    ctx.fillStyle = "#f6f4ef";
    ctx.fillRect(0, 0, W, H);
    if (bg.complete && bg.naturalWidth) {
      if (bgAt === null) bgAt = t;
      const z = 1.08 - 0.08 * Math.min(1, t / 6000);
      const bw = 1600 * S * z, bh = 900 * S * z;
      ctx.globalAlpha = Math.min(1, (t - bgAt) / 300 + (bgAt < 50 ? 1 : 0)); // fade in if it arrived late
      ctx.drawImage(bg, (W - bw) / 2, (H - bh) / 2, bw, bh);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(246,244,239,0.45)";
      ctx.fillRect(0, 0, W, H);
    }
    drawWordmark(t);

    // the wipe: splats erase the curtain, revealing the live page beneath
    ctx.globalCompositeOperation = "destination-out";
    splats.forEach((s, i) => {
      const p = easeOut((t - WIPE_START - i * WIPE_STAGGER) / WIPE_DUR);
      if (p <= 0) return;
      ctx.save();
      ctx.translate(ox + s.cx * S, oy + s.cy * S);
      const k = p * 1.4 * S;
      ctx.scale(k, k);
      ctx.fill(s.path);
      ctx.restore();
    });

    if (t < INTRO_END) requestAnimationFrame(frame);
    else {
      // soft landing: fade out whatever slivers of curtain remain, then unmount
      document.body.classList.add("intro-fade");
      setTimeout(() => {
        document.body.classList.remove("intro-on", "intro-fade");
        removeEventListener("resize", resize);
        canvas.width = canvas.height = 0;   // release the backing store (~20MB at 2x DPR)
      }, 420);
    }
  };
  requestAnimationFrame(frame);
}

/* ---------- build works grid ---------- */
const grid = document.getElementById("grid");
WORKS.forEach((w, i) => {
  const fig = document.createElement("figure");
  fig.className = "work reveal";
  fig.dataset.cat = w.cat;
  fig.dataset.index = i;
  fig.tabIndex = 0;
  fig.setAttribute("role", "button");
  fig.setAttribute("aria-label", `${w.title}, ${w.medium}. Open viewer.`);
  fig.innerHTML = `
    <div class="work-frame" style="--wash:${w.wash}">
      <img src="assets/art/${w.slug}.jpg"${srcsetFor(w, GRID_SIZES)} alt="${w.title} — ${w.medium}" width="${w.w}" height="${w.h}" loading="lazy">
    </div>
    <figcaption class="work-caption">
      <span class="t"><span class="idx">${String(i + 1).padStart(2, "0")}</span>${w.title}</span>
      <span class="m">${detailOf(w)}</span>
    </figcaption>`;
  grid.appendChild(fig);
});

/* ---------- build featured track ---------- */
const track = document.getElementById("feat-track");
FEATURED.forEach((slug, n) => {
  const i = WORKS.findIndex((w) => w.slug === slug);
  if (i < 0) return;
  const w = WORKS[i];
  const card = document.createElement("figure");
  card.className = "feat-card reveal";
  card.dataset.index = i;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${w.title}, ${w.medium}. Open viewer.`);
  card.innerHTML = `
    <span class="feat-no">${String(n + 1).padStart(2, "0")}</span>
    <div class="feat-img" style="--wash:${w.wash}">
      <img src="assets/art/${w.slug}.jpg"${srcsetFor(w, FEAT_SIZES)} alt="${w.title} — ${w.medium}" width="${w.w}" height="${w.h}" loading="lazy">
    </div>
    <figcaption class="feat-caption">
      <span class="t">${w.title}</span>
      <span class="m">${detailOf(w)}</span>
    </figcaption>`;
  track.appendChild(card);
});

/* ---------- build salon grid ---------- */
const salonGrid = document.getElementById("salon-grid");
SALON.forEach((w, i) => {
  const idx = WORKS.length + i;
  const fig = document.createElement("figure");
  fig.className = "work reveal" + (w.slug === "salon-in-situ" ? " salon-lead" : "");
  fig.dataset.index = idx;
  fig.tabIndex = 0;
  fig.setAttribute("role", "button");
  fig.setAttribute("aria-label", `${w.title}, ${w.medium}. Open viewer.`);
  fig.innerHTML = `
    <div class="work-frame" style="--wash:${w.wash}">
      <img src="assets/art/${w.slug}.jpg"${srcsetFor(w, GRID_SIZES)} alt="${w.title} — ${w.medium}" width="${w.w}" height="${w.h}" loading="lazy">
    </div>
    <figcaption class="work-caption">
      <span class="t"><span class="idx">${String(i + 1).padStart(2, "0")}</span>${w.title}</span>
      <span class="m">${detailOf(w)}</span>
    </figcaption>`;
  salonGrid.appendChild(fig);
});
salonGrid.addEventListener("click", (e) => {
  const work = e.target.closest(".work");
  if (work) openLb(+work.dataset.index);
});
salonGrid.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.closest(".work")) {
    e.preventDefault();
    openLb(+e.target.closest(".work").dataset.index);
  }
});

document.querySelectorAll(".work-frame img").forEach((img) => {
  if (img.complete && img.naturalWidth) img.classList.add("loaded");
  else img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
});

/* ---------- featured: drag to scroll (desktop) ---------- */
let dragState = null;
let suppressClick = false;
track.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") return;
  suppressClick = false;                        // never let a stale flag eat this interaction
  dragState = { x: e.clientX, left: track.scrollLeft, moved: false };
  track.classList.add("dragging");
});
addEventListener("pointermove", (e) => {
  if (!dragState) return;
  const dx = e.clientX - dragState.x;
  if (Math.abs(dx) > 6) dragState.moved = true;
  track.scrollLeft = dragState.left - dx;
});
const endDrag = () => {
  if (dragState?.moved) {
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 0);  // clear even if no click follows
  }
  dragState = null;
  track.classList.remove("dragging");
};
addEventListener("pointerup", endDrag);
addEventListener("pointercancel", endDrag);
track.addEventListener("click", (e) => {
  if (suppressClick) { e.stopPropagation(); e.preventDefault(); return; }
  const card = e.target.closest(".feat-card");
  if (card) openLb(+card.dataset.index);
}, true);
track.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.closest(".feat-card")) {
    e.preventDefault();
    openLb(+e.target.closest(".feat-card").dataset.index);
  }
});

/* ---------- filters ---------- */
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach((btn) => {
  btn.setAttribute("aria-pressed", btn.classList.contains("is-active") ? "true" : "false");
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const f = btn.dataset.filter;
    grid.querySelectorAll(".work").forEach((el) => {
      el.classList.toggle("is-hidden", f !== "all" && el.dataset.cat !== f);
    });
  });
});

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
);
const startReveals = () => document.querySelectorAll(".reveal").forEach((el) => {
  if (FLAT) el.classList.add("in");
  else io.observe(el);
});
startReveals();
if (FLAT) document.querySelector(".hero").style.minHeight = "auto";

/* ---------- header state ---------- */
const header = document.getElementById("site-header");
const setHeaderState = () => header.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();   // a restored mid-page scroll position may never fire a scroll event

/* ---------- hero parallax (desktop) ---------- */
const hero = document.querySelector(".hero");
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const layers = [...hero.querySelectorAll("[data-parallax]")];
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((el) => {
      const s = +el.dataset.parallax;
      el.style.translate = `${nx * s}px ${ny * s}px`;
    });
  });
  hero.addEventListener("mouseleave", () => layers.forEach((el) => { el.style.translate = "0px 0px"; }));
}

/* ---------- cursor "view" bubble ---------- */
const bubble = document.getElementById("cursor-view");
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !REDUCED) {
  let x = 0, y = 0, bx = 0, by = 0, scale = 0, target = 0, raf = null;
  const label = bubble.querySelector("span");
  const loop = () => {
    bx += (x - bx) * 0.18;
    by += (y - by) * 0.18;
    scale += (target - scale) * 0.18;
    bubble.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
    // stop burning frames once everything has settled; mousemove restarts us
    if (Math.abs(x - bx) < 0.1 && Math.abs(y - by) < 0.1 && Math.abs(target - scale) < 0.005) {
      raf = null;
      return;
    }
    raf = requestAnimationFrame(loop);
  };
  addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    const overWork = e.target.closest(".work, .feat-card");
    target = overWork ? 1 : 0;
    if (overWork) label.textContent = e.target.closest(".feat-card") ? "Open" : "View";
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
}

/* ---------- lightbox ---------- */
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbTitle = document.getElementById("lb-title");
const lbMedium = document.getElementById("lb-medium");
const lbCount = document.getElementById("lb-count");
let current = 0;
let visible = [];
let hideTimer = null;
let lastFocus = null;

function openLb(index) {
  clearTimeout(hideTimer);                     // a close may still be pending — cancel it
  visible = [...document.querySelectorAll(".work:not(.is-hidden)")].map((el) => +el.dataset.index);
  if (!visible.includes(index)) visible = ALLWORKS.map((_, i) => i);  // e.g. featured card outside the active filter
  current = visible.indexOf(index);
  renderLb();
  lastFocus = document.activeElement;
  lb.hidden = false;
  void lb.offsetWidth;                         // force a style flush so the ink-bloom transition actually plays
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  lb.querySelector(".lb-close").focus({ preventScroll: true });
}
function renderLb() {
  const w = ALLWORKS[visible[current]];
  lbImg.src = `assets/art/${w.slug}.jpg`;
  lbImg.alt = `${w.title} — ${w.medium}`;
  lbTitle.textContent = w.title;
  lbMedium.textContent = detailOf(w);
  lbCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;
}
function closeLb() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => { lb.hidden = true; }, 580);   // let the ink blot shrink back
  if (lastFocus?.focus) lastFocus.focus({ preventScroll: true });
}
const step = (d) => { current = (current + d + visible.length) % visible.length; renderLb(); };

grid.addEventListener("click", (e) => {
  const work = e.target.closest(".work");
  if (work) openLb(+work.dataset.index);
});
grid.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.closest(".work")) {
    e.preventDefault();
    openLb(+e.target.closest(".work").dataset.index);
  }
});
lb.querySelector(".lb-close").addEventListener("click", closeLb);
lb.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lb.querySelector(".lb-next").addEventListener("click", () => step(1));
lb.addEventListener("click", (e) => {
  if (e.target === lb || e.target.classList.contains("lb-ink")) closeLb();
});
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;   // ignore keys during the closing fade too
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
  if (e.key === "Tab") {
    // keep focus inside the dialog
    const focusables = [...lb.querySelectorAll("button, a[href]")];
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (!lb.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  }
});

/* QA: ?lb=N opens the viewer on work N */
const lbQA = new URLSearchParams(location.search).get("lb");
if (lbQA !== null) setTimeout(() => openLb(+lbQA || 0), 400);

/* swipe (track a single touch by identifier so a second finger can't fake a step) */
let touchX = null, touchId = null;
lb.addEventListener("touchstart", (e) => {
  if (touchId !== null) return;
  touchX = e.touches[0].clientX;
  touchId = e.touches[0].identifier;
}, { passive: true });
lb.addEventListener("touchend", (e) => {
  const t = [...e.changedTouches].find((c) => c.identifier === touchId);
  if (!t || touchX === null) return;
  const dx = t.clientX - touchX;
  if (Math.abs(dx) > 48) step(dx > 0 ? -1 : 1);
  touchX = null; touchId = null;
}, { passive: true });

/* Dr. Caryn McAllister Gallery */

/* To add a size for any piece, fill in the `size` field, e.g. size: "11 × 14 in".
   It will appear automatically in the grid captions and the viewer. */
const WORKS = [
  { slug: "meadow",         title: "Meadow Song",        medium: "Acrylic on canvas",     size: "", cat: "landscapes", wash: "#2c827f" },
  { slug: "daisies",        title: "Daisies in the Wind", medium: "Watercolor & ink",     size: "", cat: "florals",    wash: "#798454" },
  { slug: "boats",          title: "Resting Boats",      medium: "Ink & watercolor wash", size: "", cat: "landscapes", wash: "#7f7f72" },
  { slug: "trillium",       title: "Trillium",           medium: "Watercolor & ink",      size: "", cat: "florals",    wash: "#88667b" },
  { slug: "prima",          title: "Prima",              medium: "Mixed media on canvas", size: "", cat: "menagerie",  wash: "#9ea1a6" },
  { slug: "shoreline",      title: "Shoreline",          medium: "Watercolor",            size: "", cat: "landscapes", wash: "#8a835b" },
  { slug: "muscari",        title: "Grape Hyacinths",    medium: "Watercolor & ink",      size: "", cat: "florals",    wash: "#839a75" },
  { slug: "mirror-lake",    title: "Mirror Lake",        medium: "Acrylic on board",      size: "", cat: "abstracts",  wash: "#6c8a8f" },
  { slug: "young-hare",     title: "Young Hare",         medium: "Watercolor & ink",      size: "", cat: "menagerie",  wash: "#99938c" },
  { slug: "daffodil",       title: "Daffodil at Dawn",   medium: "Watercolor & ink",      size: "", cat: "florals",    wash: "#9c8a51" },
  { slug: "palms-i",        title: "Where the Palms Lean", medium: "Watercolor",          size: "", cat: "landscapes", wash: "#7a8235" },
  { slug: "marigold",       title: "Marigold Days",      medium: "Acrylic on canvas",     size: "", cat: "abstracts",  wash: "#b46f30" },
  { slug: "little-owl",     title: "Little Owl",         medium: "Watercolor & ink",      size: "", cat: "menagerie",  wash: "#7e7d70" },
  { slug: "garden-reverie", title: "Garden Reverie",     medium: "Watercolor",            size: "", cat: "florals",    wash: "#b3a690" },
  { slug: "autumn-fire",    title: "Autumn Fire",        medium: "Mixed media",           size: "", cat: "landscapes", wash: "#968d86" },
  { slug: "peach-blossom",  title: "Peach Blossom",      medium: "Watercolor & ink",      size: "", cat: "florals",    wash: "#9c7d62" },
  { slug: "sea-change",     title: "Sea Change",         medium: "Mixed media",           size: "", cat: "abstracts",  wash: "#888160" },
  { slug: "hare-heart",     title: "Hare with a Heart",  medium: "Watercolor & ink",      size: "", cat: "menagerie",  wash: "#92a172" },
  { slug: "palms-ii",       title: "Trade Winds",        medium: "Watercolor",            size: "", cat: "landscapes", wash: "#7d773d" },
  { slug: "solitude",       title: "Solitude",           medium: "Mixed media",           size: "", cat: "abstracts",  wash: "#a19b83" },
  { slug: "birdbath",       title: "The Birdbath",       medium: "Watercolor & ink",      size: "", cat: "landscapes", wash: "#678e90" },
  { slug: "the-muse",       title: "The Muse",           medium: "Mixed media on canvas", size: "", cat: "abstracts",  wash: "#868585" },
];

/* Slugs featured in the "On View" showcase, in order */
const FEATURED = ["meadow", "the-muse", "autumn-fire", "prima", "mirror-lake", "marigold"];

const FLAT = new URLSearchParams(location.search).has("flat"); // visual-QA mode: no animations
if (FLAT) document.documentElement.style.scrollBehavior = "auto";

const detailOf = (w) => [w.medium, w.size].filter(Boolean).join(" · ");

/* duplicate ticker content so the -50% translate loops seamlessly */
const tickerRow = document.querySelector(".ticker-row");
tickerRow.innerHTML += tickerRow.innerHTML;

/* ---------- intro: ink-splatter track-matte reveal ---------- */
const playIntro = !FLAT
  && !sessionStorage.getItem("introShown")
  && !matchMedia("(prefers-reduced-motion: reduce)").matches;
if (playIntro) {
  sessionStorage.setItem("introShown", "1");
  document.body.classList.add("intro-on", "intro-hold");
  setTimeout(() => {                                                     // flick the ink
    document.querySelectorAll("#intro animateTransform").forEach((a, i) => {
      setTimeout(() => a.beginElement(), i * 115);
    });
  }, 1000);
  setTimeout(() => document.body.classList.remove("intro-hold"), 1300);  // site rises through the splats
  setTimeout(() => document.body.classList.remove("intro-on"), 2750);
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
      <img src="assets/art/${w.slug}.jpg" alt="${w.title} — ${w.medium}" loading="lazy">
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
      <img src="assets/art/${w.slug}.jpg" alt="${w.title} — ${w.medium}" loading="lazy">
    </div>
    <figcaption class="feat-caption">
      <span class="t">${w.title}</span>
      <span class="m">${detailOf(w)}</span>
    </figcaption>`;
  track.appendChild(card);
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
  dragState = { x: e.clientX, left: track.scrollLeft, moved: false };
  track.classList.add("dragging");
});
addEventListener("pointermove", (e) => {
  if (!dragState) return;
  const dx = e.clientX - dragState.x;
  if (Math.abs(dx) > 6) dragState.moved = true;
  track.scrollLeft = dragState.left - dx;
});
addEventListener("pointerup", () => {
  if (dragState?.moved) suppressClick = true;
  dragState = null;
  track.classList.remove("dragging");
});
track.addEventListener("click", (e) => {
  if (suppressClick) { suppressClick = false; e.stopPropagation(); e.preventDefault(); return; }
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
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
    const f = btn.dataset.filter;
    document.querySelectorAll(".work").forEach((el) => {
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
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 40);
}, { passive: true });

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
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let x = 0, y = 0, bx = 0, by = 0, scale = 0, target = 0, raf = null;
  const label = bubble.querySelector("span");
  const loop = () => {
    bx += (x - bx) * 0.18;
    by += (y - by) * 0.18;
    scale += (target - scale) * 0.18;
    bubble.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
    raf = requestAnimationFrame(loop);
  };
  addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    if (!raf) { bx = x; by = y; loop(); }
    const overWork = e.target.closest(".work, .feat-card");
    target = overWork ? 1 : 0;
    if (overWork) label.textContent = e.target.closest(".feat-card") ? "Open" : "View";
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

function openLb(index) {
  visible = [...document.querySelectorAll(".work:not(.is-hidden)")].map((el) => +el.dataset.index);
  current = Math.max(0, visible.indexOf(index));
  renderLb();
  lb.hidden = false;
  requestAnimationFrame(() => lb.classList.add("open"));
  document.body.style.overflow = "hidden";
}
function renderLb() {
  const w = WORKS[visible[current]];
  lbImg.src = `assets/art/${w.slug}.jpg`;
  lbImg.alt = `${w.title} — ${w.medium}`;
  lbTitle.textContent = w.title;
  lbMedium.textContent = detailOf(w);
  lbCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;
}
function closeLb() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { lb.hidden = true; }, 350);
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
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

/* swipe */
let touchX = null;
lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 48) step(dx > 0 ? -1 : 1);
  touchX = null;
}, { passive: true });

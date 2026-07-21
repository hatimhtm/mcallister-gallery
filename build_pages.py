#!/usr/bin/env python3
"""Generate one page per artwork under work/, plus sitemap.xml and robots.txt.

Source of truth stays the WORKS and SALON arrays in app.js — this script
parses them, so editing a title there and re-running rebuilds the pages.
Run:  python3 build_pages.py
"""
import os, re, html

BASE = "https://mcallister-gallery.vercel.app"   # update if the deploy domain changes
ROOT = os.path.dirname(os.path.abspath(__file__))

entry_re = re.compile(
    r'\{\s*slug:\s*"(?P<slug>[\w-]+)",\s*(?:f:\s*"(?P<f>[\w-]+)",\s*)?title:\s*"(?P<title>[^"]+)"\s*,\s*medium:\s*"(?P<medium>[^"]+)"\s*,\s*'
    r'size:\s*"(?P<size>[^"]*)"\s*,\s*w:\s*(?P<w>\d+)\s*,\s*h:\s*(?P<h>\d+)\s*,\s*cat:\s*"(?P<cat>\w+)"\s*,\s*wash:\s*"(?P<wash>#[0-9a-fA-F]{6})"')

js = open(os.path.join(ROOT, "app.js")).read()
works_src = js.split("const WORKS = [")[1].split("];")[0]
salon_src = js.split("const SALON = [")[1].split("];")[0]

def parse(src, coll):
    out = []
    for m in entry_re.finditer(src):
        d = m.groupdict()
        d["f"] = d["f"] or d["slug"]
        d["w"], d["h"] = int(d["w"]), int(d["h"])
        d["coll"] = coll
        out.append(d)
    return out

works = parse(works_src, "The Collection")
salon = [w for w in parse(salon_src, "The Salon") if w["slug"] != "salon-in-situ"]
all_works = works + salon
assert len(works) == 22, f"expected 22 collection works, got {len(works)}"
assert len(salon) == 48, f"expected 48 salon works, got {len(salon)}"

CAT_LABEL = {"florals": "Florals", "landscapes": "Land & Sea",
             "menagerie": "Menagerie", "abstracts": "Abstract", "salon": "The Salon"}

TEMPLATE = open(os.path.join(ROOT, "work-template.html")).read()

os.makedirs(os.path.join(ROOT, "work"), exist_ok=True)

def srcset(w):
    if w["w"] > 900:
        return (f' srcset="/assets/art/{w["slug"]}-800.jpg 800w, /assets/art/{w["slug"]}.jpg {w["w"]}w"'
                f' sizes="(max-width: 880px) 92vw, 54vw"')
    return ""

def nav_card(w, label):
    return (f'<a class="wp-adj" href="/work/{w["slug"]}.html">'
            f'<img src="/assets/art/{w["f"] if w["w"] <= 900 else w["f"] + "-800"}.jpg" alt="" width="{w["w"]}" height="{w["h"]}" loading="lazy">'
            f'<span><small>{label}</small><em>{html.escape(w["title"])}</em></span></a>')

for i, w in enumerate(all_works):
    prev_w = all_works[(i - 1) % len(all_works)]
    next_w = all_works[(i + 1) % len(all_works)]
    # salon pages numbered 01-48, matching the grid
    number = f"No. {i + 1:02d}" if w["coll"] == "The Collection" else f"No. {i - len(works) + 1:02d}"
    detail = " · ".join(x for x in [w["medium"], w["size"]] if x)
    esc_t = html.escape(w["title"])
    jsonld = f'''{{
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "name": "{esc_t}",
    "artMedium": "{html.escape(w["medium"])}",
    "artform": "Painting",
    "width": "{w["w"]} px (digital image)",
    "image": "{BASE}/assets/art/{w["f"]}.jpg",
    "url": "{BASE}/work/{w["slug"]}.html",
    "isPartOf": {{ "@type": "CollectionPage", "name": "Dr. Caryn McAllister Gallery — {w["coll"]}", "url": "{BASE}/" }},
    "publisher": {{ "@type": "Organization", "name": "Dr. Caryn McAllister Gallery" }}
  }}'''
    page = (TEMPLATE
            .replace("{{TITLE}}", esc_t)
            .replace("{{DETAIL}}", html.escape(detail))
            .replace("{{MEDIUM}}", html.escape(w["medium"]))
            .replace("{{PRESENTATION}}", html.escape(w["size"]) if w["size"] else "Details on request")
            .replace("{{COLLECTION}}", w["coll"])
            .replace("{{COLL_ANCHOR}}", "salon" if w["coll"] == "The Salon" else "works")
            .replace("{{CATEGORY}}", CAT_LABEL.get(w["cat"], w["cat"]))
            .replace("{{NUMBER}}", number)
            .replace("{{SLUG}}", w["slug"])
            .replace("{{FILE}}", w["f"])
            .replace("{{W}}", str(w["w"]))
            .replace("{{H}}", str(w["h"]))
            .replace("{{WASH}}", w["wash"])
            .replace("{{SRCSET}}", srcset(w))
            .replace("{{BASE}}", BASE)
            .replace("{{PREV_CARD}}", nav_card(prev_w, "Previous"))
            .replace("{{NEXT_CARD}}", nav_card(next_w, "Next"))
            .replace("{{JSONLD}}", jsonld))
    open(os.path.join(ROOT, "work", f'{w["slug"]}.html'), "w").write(page)

# sitemap + robots
urls = [f"{BASE}/"] + [f"{BASE}/work/{w['slug']}.html" for w in all_works]
sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
sm += [f"  <url><loc>{u}</loc></url>" for u in urls]
sm.append("</urlset>")
open(os.path.join(ROOT, "sitemap.xml"), "w").write("\n".join(sm) + "\n")
open(os.path.join(ROOT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\nSitemap: {BASE}/sitemap.xml\n")

print(f"{len(all_works)} pages, sitemap ({len(urls)} urls), robots.txt")

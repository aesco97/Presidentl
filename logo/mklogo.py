"""Presidentl logo pack.

The wordmark is converted from Alfa Slab One to outlined <path> data, so the SVGs
render identically everywhere without the font installed — which is the whole
point of a logo file.
"""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform

BLUE="#2E4A7A"; RED="#A63A32"; PAPER="#F6EFDF"; INK="#3D3320"

font=TTFont("alfa-slab-one.ttf")
gs=font.getGlyphSet(); cmap=font.getBestCmap(); upm=font["head"].unitsPerEm
hmtx=font["hmtx"]

def wordmark_path(text, size, tracking_em=0.01):
    """Return (svg_path_d, width, ascent, descent) with text flipped upright."""
    scale=size/upm
    x=0.0; parts=[]
    for ch in text:
        g=cmap[ord(ch)]
        pen=SVGPathPen(gs)
        # y-flip: font coords are y-up, SVG is y-down
        tp=TransformPen(pen, Transform(scale,0,0,-scale,x,0))
        gs[g].draw(tp)
        d=pen.getCommands()
        if d: parts.append(d)
        x += hmtx[g][0]*scale + size*tracking_em
    x -= size*tracking_em
    return " ".join(parts), x

def mark(cx, cy, r):
    """Top-hat-in-a-circle, drawn on a 28x28 grid scaled to radius r."""
    u=(r*2)/28.0
    X=lambda v: cx-r+v*u
    Y=lambda v: cy-r+v*u
    star_pts=[(14,19),(14.9,21.3),(17.3,21.4),(15.4,22.9),(16.1,25.2),
              (14,23.8),(11.9,25.2),(12.6,22.9),(10.7,21.4),(13.1,21.3)]
    star=" ".join(f"{X(a):.2f},{Y(b):.2f}" for a,b in star_pts)
    return f'''<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{r:.2f}" fill="{BLUE}"/>
  <rect x="{X(8.5):.2f}" y="{Y(6):.2f}" width="{11*u:.2f}" height="{9*u:.2f}" rx="{u:.2f}" fill="{PAPER}"/>
  <rect x="{X(8.5):.2f}" y="{Y(12):.2f}" width="{11*u:.2f}" height="{3*u:.2f}" fill="{RED}"/>
  <rect x="{X(5.5):.2f}" y="{Y(15):.2f}" width="{17*u:.2f}" height="{2.6*u:.2f}" rx="{1.3*u:.2f}" fill="{PAPER}"/>
  <polygon points="{star}" fill="{PAPER}"/>'''

def svg(w,h,body,bg=None):
    b=f'<rect width="{w:.0f}" height="{h:.0f}" fill="{bg}"/>\n  ' if bg else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" '
            f'width="{w:.0f}" height="{h:.0f}" role="img" aria-label="Presidentl">\n  {b}{body}\n</svg>\n')

# ---------- 1. mark only ----------
open("logo/presidentl-mark.svg","w").write(svg(256,256, mark(128,128,127)))

# ---------- 2. horizontal lockup ----------
FS=110
d,wmw = wordmark_path("PRESIDENTL", FS)
r=91; gap=38; pad=30
capline=FS*0.72                      # Alfa Slab One cap height ≈ 0.72em
w=pad+r*2+gap+wmw+pad
h=pad+r*2+pad
baseline=h/2+capline/2
body=(mark(pad+r, h/2, r) +
      f'\n  <g transform="translate({pad+r*2+gap:.2f},{baseline:.2f})">'
      f'<path d="{d}" fill="{BLUE}"/></g>')
open("logo/presidentl-horizontal.svg","w").write(svg(w,h,body))
open("logo/presidentl-horizontal-on-paper.svg","w").write(svg(w,h,body,PAPER))

# ---------- 3. vertical lockup ----------
FSv=96
dv,wmwv = wordmark_path("PRESIDENTL", FSv)
rv=80; padv=32; gapv=30
caplinev=FSv*0.72
wv=max(rv*2, wmwv)+padv*2
hv=padv+rv*2+gapv+caplinev+padv
bodyv=(mark(wv/2, padv+rv, rv) +
       f'\n  <g transform="translate({(wv-wmwv)/2:.2f},{padv+rv*2+gapv+caplinev:.2f})">'
       f'<path d="{dv}" fill="{BLUE}"/></g>')
open("logo/presidentl-vertical.svg","w").write(svg(wv,hv,bodyv))

# ---------- 4. one-colour versions (stamps, merch, engraving) ----------
# A true single-colour mark: one compound path with fill-rule="evenodd", so the
# hat and star are knocked OUT and the background shows through. Nesting parity
# does the work — circle fills, crown knocks out, band fills again inside it,
# brim and star knock out.
def mono_path(cx,cy,r):
    u=(r*2)/28.0
    X=lambda v: cx-r+v*u
    Y=lambda v: cy-r+v*u
    def rect(x,y,w,h):
        return f"M{X(x):.2f},{Y(y):.2f} H{X(x+w):.2f} V{Y(y+h):.2f} H{X(x):.2f} Z"
    circle=(f"M{cx-r:.2f},{cy:.2f} a{r:.2f},{r:.2f} 0 1,0 {r*2:.2f},0 "
            f"a{r:.2f},{r:.2f} 0 1,0 {-r*2:.2f},0 Z")
    crown=rect(8.5,6,11,9)          # knocked out
    band =rect(8.5,12,11,3)         # filled again (nested inside crown)
    brim =rect(5.5,15,17,2.6)       # knocked out
    star_pts=[(14,19),(14.9,21.3),(17.3,21.4),(15.4,22.9),(16.1,25.2),
              (14,23.8),(11.9,25.2),(12.6,22.9),(10.7,21.4),(13.1,21.3)]
    star="M"+" L".join(f"{X(a):.2f},{Y(b):.2f}" for a,b in star_pts)+" Z"
    return " ".join([circle,crown,band,brim,star])

def mono(colour, path):
    d=mono_path(128,128,127)
    open(path,"w").write(svg(256,256, f'<path d="{d}" fill="{colour}" fill-rule="evenodd"/>'))
mono(INK,  "logo/presidentl-mark-mono-ink.svg")
mono(PAPER,"logo/presidentl-mark-mono-reverse.svg")

# ---------- 5. wordmark alone ----------
dw,ww = wordmark_path("PRESIDENTL", 120)
open("logo/presidentl-wordmark.svg","w").write(
    svg(ww+40, 120, f'<g transform="translate(20,{20+120*0.72:.2f})"><path d="{dw}" fill="{BLUE}"/></g>'))

print("SVGs written:")
import os
for f in sorted(os.listdir("logo")): print("  logo/"+f, os.path.getsize("logo/"+f), "bytes")

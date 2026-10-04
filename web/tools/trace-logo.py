"""Traces the logo (tools/assets/logo-source.jpg: dark mark on a flat background) into a clean SVG path.

    python3 tools/trace-logo.py        # writes tools/assets/logo-path.json {viewBox, d, width, height}
Needs Pillow, numpy and potracer (pip install pillow numpy potracer).
"""
import json, os
import numpy as np
from PIL import Image, ImageFilter
import potrace

HERE = os.path.dirname(__file__)
SRC = os.path.join(HERE, 'assets', 'logo-source.jpg')
OUT = os.path.join(HERE, 'assets', 'logo-path.json')
SCALE = 6          # trace at 6x so curves come out smooth
SIZE = 1000        # the SVG's coordinate width after normalising

im = Image.open(SRC).convert('L')
dark = np.array(im) < 110
ys, xs = np.where(dark)
pad = 4
x0, x1, y0, y1 = max(xs.min() - pad, 0), xs.max() + pad, max(ys.min() - pad, 0), ys.max() + pad
crop = im.crop((x0, y0, x1, y1))
big = crop.resize((crop.width * SCALE, crop.height * SCALE), Image.LANCZOS).filter(ImageFilter.GaussianBlur(SCALE * 0.28))
bits = np.array(big) < 118
bm = potrace.Bitmap(~bits)  # potracer fills the True cells; we want the dark mark filled
plist = bm.trace(turdsize=40, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY, alphamax=0.8, opticurve=True, opttolerance=0.25)

k = SIZE / big.width
def pt(p): return f'{p.x * k:.2f} {p.y * k:.2f}'
parts = []
for curve in plist:
    parts.append(f'M{pt(curve.start_point)}')
    for seg in curve.segments:
        if seg.is_corner:
            parts.append(f'L{pt(seg.c)}L{pt(seg.end_point)}')
        else:
            parts.append(f'C{pt(seg.c1)} {pt(seg.c2)} {pt(seg.end_point)}')
    parts.append('Z')
w, h = SIZE, round(big.height * k, 2)
json.dump({'width': w, 'height': h, 'viewBox': f'0 0 {w} {h}', 'd': ''.join(parts)}, open(OUT, 'w'))
print('traced', len(plist), 'shapes ->', os.path.relpath(OUT), f'viewBox 0 0 {w} {h}', 'path chars', len(''.join(parts)))

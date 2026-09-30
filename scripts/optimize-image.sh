#!/bin/bash
# Turns a full-resolution Figma export into the web-ready set the components use.
#
# Figma hands back originals that are often 4000px+ and several megabytes, which
# is far too heavy to ship. Every photo therefore goes through here once and
# lands as webp (what browsers actually get) plus a jpg fallback, at two widths
# so the components can offer a srcset.
#
#   ./scripts/optimize-image.sh <source> <public/v2/name-without-extension>
#
# Widths follow the design's breakpoints: 2400 covers the 1440 desktop frame on
# a retina screen, 1280 covers tablet and phone.
set -euo pipefail

src=${1:?source image required}
dest=${2:?destination basename required, e.g. public/v2/hero-home}

for width in 2400 1280; do
  magick "$src" -resize "${width}x>" -strip -quality 82 "${dest}-${width}.jpg"
  cwebp -quiet -q 80 -resize "$width" 0 "$src" -o "${dest}-${width}.webp"
done

ls -lh "${dest}"-*.{jpg,webp}

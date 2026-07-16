# Presidentl — logo files

The wordmark is **Alfa Slab One**, converted to outlines. No font needs to be
installed for these to render correctly, anywhere.

## Which file to use

| File | Use for |
|---|---|
| `presidentl-horizontal.svg` | Default. Site headers, docs, press, email signatures. |
| `presidentl-vertical.svg` | Square-ish spaces — social avatars, posters, merch. |
| `presidentl-mark.svg` | The mark alone, where the name already appears nearby. |
| `presidentl-wordmark.svg` | Type only, where the mark would be redundant. |
| `presidentl-mark-mono-ink.svg` | One colour, dark. Stamps, embossing, faxes, laser engraving. |
| `presidentl-mark-mono-reverse.svg` | One colour, light. For dark or photographic backgrounds. |
| `*-on-paper.svg` / `-on-paper-*.png` | Where transparency isn't supported. |

**Prefer the SVGs.** They're a few KB, scale infinitely, and stay crisp on any
display. The PNGs (`-512`, `-1200`, `-2400`) are transparent-background exports for
tools that won't take vectors. Pick a PNG at least 2× the size you'll display.

## Colours

| | Hex | Role |
|---|---|---|
| Blue | `#2E4A7A` | Circle, wordmark |
| Red | `#A63A32` | Hat band only |
| Paper | `#F6EFDF` | Hat, brim, star, and the background field |
| Ink | `#3D3320` | Mono version |

## Rules

- **Clear space:** keep a margin equal to the mark's radius free on all sides.
- **Minimum size:** 24px tall for the wordmark, 20px for the mark — below that the
  star and hat band close up and it turns to mush.
- **On dark or busy backgrounds:** use `presidentl-mark-mono-reverse.svg`, or place
  the full-colour logo on a Paper (`#F6EFDF`) field.
- **Don't:** stretch, rotate, recolour off-palette, add shadows or effects, swap the
  typeface, or rebuild the mark by hand. Place the supplied artwork.

## Regenerating

`python3 mklogo.py` rebuilds every SVG from `alfa-slab-one.ttf`. Geometry lives in
one place, so edits stay consistent across the whole set.

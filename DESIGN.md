---
name: Marvel Marathon
description: Donkere, poster-gedreven MCU-kijkgids — cinematic streaming-premium in één HTML-bestand
colors:
  deep-black: "#07080c"
  surface: "#10131a"
  surface-raised: "#181c26"
  hairline: "#242936"
  text: "#f4f5f7"
  muted: "#a7aebb"
  marvel-red: "#e62429"
  marvel-red-deep: "#8f1216"
typography:
  display:
    fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.9rem, 7.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.03em"
  headline:
    fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif'
    fontSize: "1.5rem"
    fontWeight: 400
    letterSpacing: "0.07em"
  title:
    fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif'
    fontSize: "1.45rem"
    fontWeight: 400
    letterSpacing: "0.05em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontSize: "0.85rem"
    fontWeight: 400
rounded:
  badge: "3px"
  focus: "4px"
  chip: "6px"
  toast-btn: "8px"
  control: "10px"
  panel: "12px"
  card: "14px"
  hero: "16px"
  sheet: "18px"
  pill: "999px"
spacing:
  gap-grid: "0.65rem"
  gap-inline: "0.6rem"
  pad-card: "1rem"
  pad-page: "1rem"
  section-top: "1.8rem"
  section-bottom: "0.8rem"
components:
  button-primary:
    backgroundColor: "{colors.marvel-red}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#f03338"
  button-ghost:
    backgroundColor: "rgba(255,255,255,.08)"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
    height: "44px"
  button-undo:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    size: "44px"
  route-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "1rem"
  poster-tile:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.control}"
  tile-chip:
    backgroundColor: "rgba(7,8,12,.72)"
    textColor: "#ffffff"
    rounded: "{rounded.chip}"
    padding: "0.1rem 0.42rem 0"
  tile-chip-hot:
    backgroundColor: "{colors.marvel-red}"
    textColor: "#ffffff"
    rounded: "{rounded.chip}"
  play-trailer:
    backgroundColor: "rgba(7,8,12,.72)"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.95rem 0.5rem 0.6rem"
    height: "44px"
---

# Design System: Marvel Marathon

## Overview

**Creative North Star: "Cinematic streaming-premium"** (user-pinned, 2026-08-08)

A dark, poster-driven watch guide in the register of Disney+/Netflix: deep near-black ground, one loud identity red, condensed display type, and TMDB artwork doing all the visual heavy lifting. The posters *are* the interface — the UI itself stays nearly monochrome so the film art reads as the only saturated content. Chrome is thin (1px hairlines), depth is soft (offset+blur black shadows), and every screen answers one question: which film is next.

Mobile-first with a bottom-sheet detail grammar; on desktop the same sheet becomes a centered card. One breakpoint (760px), no framework, single HTML file.

**Key Characteristics:**
- Near-black ground, artwork carries all color beyond one red
- Bebas Neue condensed display over a system sans body
- 1px hairline borders, soft deep shadows, generous radii on media surfaces
- Dutch UI copy; controls name their action

## Colors

Two-color identity (near-black + Marvel red); everything else is neutral chrome around TMDB artwork.

### Primary
- **Marvel Red** (`--red`, #e62429): the single identity color. Fills the primary "Gekeken" button, the progress bar, the wordmark badge, the watched check chip, the hot status chip, the next-film ring, the focus outline, and the toast undo text. Never used for body text or large surfaces outside the utility set below.
- **Marvel Red Deep** (`--red-deep`, #8f1216): declared in `:root` but currently unreferenced by any rule; the dark-red gradients below are hard-coded. Treat it as the reserved dark counterpart when a token is needed.
- **Dark-red utility set** (intentional literals, part of the system): intro solid gradient `linear-gradient(160deg, #b3151a, #6d090d)`; finale hero gradient `linear-gradient(150deg, #a3141a, #4b070a)` with border #b8353a and pale-red body text #ffd9da; primary button hover #f03338; red tints rgba(230,36,41,.35/.25/.12) for glow, ring shadow, trailer-pill hover, and toast-undo hover wash.

### Neutral
- **Deep Black** (`--bg`, #07080c): page ground, scrim gradients, chip backgrounds (as rgba).
- **Surface** (`--surface`, #10131a): cards, hero base, sheet body.
- **Surface Raised** (`--surface2`, #181c26): tile/poster placeholders, availability box, toast, undo button, progress track.
- **Hairline** (`--line`, #242936): all 1px borders — header bottom, cards, sheet availability box, toast, icon/undo buttons.
- **Text** (`--text`, #f4f5f7): headings, body, emphasized meta values. ~17:1 on `--bg`.
- **Muted** (`--muted`, #a7aebb): meta lines, descriptions' secondary copy, ledes, footer, idle icon buttons. ~8.5:1 on `--bg`.
- **Pure White** (#fff): text sitting on red or on artwork — button labels, wordmark badge, chip text, sheet close, intro titles, play-trailer label. Never used for running text on the dark ground (that is `--text`).
- **Scrim blacks** (near-black rgba, part of the system): chip/pill scrim `rgba(7,8,12,.72)`, sheet-close scrim `rgba(7,8,12,.65)`, overlay `rgba(4,5,8,.7)`, hero gradient stops `rgba(7,8,12,.97/.88/.45/.12)` — all derived from `--bg`, always paired with #fff foregrounds.

### Named Rules
**The Artwork Carries the Color Rule.** The UI palette is black, greys, and one red. All other color on screen comes from TMDB posters and backdrops. Do not introduce a second accent.

**The Red-as-Signal Rule.** Red marks exactly one thing per surface: the primary action or the "next" state. White text on red for buttons; red-as-text appears only in the toast undo button (bold, on `--surface2` — borderline contrast, keep it bold and short).

## Typography

**Display Font:** Bebas Neue (Google Fonts, weight 400 only), fallback "Arial Narrow", sans-serif — `--display`
**Body Font:** system sans stack (-apple-system … Arial) — `--sans`

**Character:** Condensed all-caps cinema-marquee display against a quiet neutral body. Bebas is always weight 400 with positive letter-spacing and tight line-height (0.9–0.95); it never carries paragraphs.

### Hierarchy
- **Display** (400, `clamp(1.9rem, 7.5vw, 3rem)`, lh 0.95, ls .03em): hero film title. Variants: sheet title `clamp(1.7rem, 6.5vw, 2.4rem)`; finale `clamp(2.4rem, 9vw, 3.4rem)`; intro wordmark `clamp(5rem, 26vw, 6rem)` ls .04em; intro subtitle `clamp(1.2rem, 6vw, 1.6rem)` ls .55em.
- **Headline** (400, 1.5rem, ls .07em): section headers (`h2.row`).
- **Title** (400, 1.45rem, ls .05em): route card names; also counter (1.25rem, .06em), wordmark bar (1.35rem, .05em), tile number chip (.95rem) and tile fallback text (1.05rem).
- **Body** (400, .88–.95rem, lh 1.45–1.6): route descriptions, sheet synopsis (max 62ch), lede (max 60ch). Weight 600 for emphasized meta (`b`), 700 for button labels.
- **Label** (400, .78–.85rem): meta lines, facts, footer, intro skip hint (ls .12em).

### Type steps (the complete size set in use)
- Sans: .78rem (footer, intro hint) · .82 · .85 · .88 · .9 · .92 · .95 · 1rem.
- Bebas fixed: .95rem (chips) · 1.05 (tile fallback) · 1.25 (counter) · 1.35 (wordmark) · 1.45 (route h3) · 1.5rem (h2.row).
- Bebas fluid clamps: minima 1.2 / 1.7 / 1.9 / 2.4 / 5rem (intro sub, sheet title, hero title, finale title, intro wordmark).

### Named Rules
**The Bebas-Never-Reads Rule.** Bebas Neue is for names, numbers, and headers only — anything longer than a title line uses the system sans.

## Layout

- **Container:** `max-width: 1100px`, centered; page padding 1rem (1.5rem ≥760px); main bottom padding 3rem (4rem desktop).
- **Section rhythm:** `h2.row` margin `1.8rem 0 .8rem` sets the vertical beat.
- **Poster grid:** 3 columns, gap .65rem mobile → 6 columns, gap .8rem ≥760px. All posters are `aspect-ratio: 2/3`.
- **Route picker:** stacked cards (gap .9rem) mobile → 3-column grid with vertical card layout ≥760px.
- **Breakpoint:** exactly one, `@media (min-width: 760px)`. Mobile is the source layout.
- **Sticky header:** wordmark + spacer + counter + icon button in a flex bar (`padding .65rem 1rem`), with a 3px progress track beneath.
- **Safe areas:** `viewport-fit=cover`; toast and intro hint use `max(…, env(safe-area-inset-bottom))`.

## Elevation & Depth

Hybrid: tonal layering (`--bg` → `--surface` → `--surface2`) plus soft, deep black shadows with real offset+blur. Shadows are structural — they lift artwork (posters) and floating chrome (toast, buttons) off the ground; flat surfaces stay flat and rely on 1px hairlines. The sticky header uses translucency instead: `color-mix(in srgb, var(--bg) 82%, transparent)` + `backdrop-filter: blur(14px)`.

### Shadow Vocabulary
- **Poster lift** (`0 6px 18px rgba(0,0,0,.55)` fan; `0 12px 30px rgba(0,0,0,.6)` sheet poster; `0 14px 34px rgba(0,0,0,.6)` hero poster): artwork floating over backdrops.
- **Red glow** (`0 8px 24px rgba(230,36,41,.35)`): primary button only.
- **Next ring** (`0 0 0 2px var(--red), 0 10px 30px rgba(230,36,41,.25)`): the up-next tile — the only tinted ring in the system.
- **Floating chrome** (`0 12px 30px rgba(0,0,0,.55)` toast; `0 4px 12px rgba(0,0,0,.5)` check chip).

### Named Rules
**The Hairline Rule.** Resting containers get `1px solid var(--line)`, not shadows. Shadows are reserved for things that float: posters, buttons, toast, the next-ring.

## Shapes

Rounded-rectangle language, radius scaled to surface size — the complete set is 3 / 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 999px: 3px wordmark badge, 4px focus outline, 6px fan posters and tile chips (num/kind), 8px toast undo, 10px controls/buttons/tiles/posters, 12px availability box and toast, 14px route cards, 16px hero, 18px sheet (top corners only on mobile, all corners desktop), 999px play-trailer pill. Perfect circles for the two check/close chips (26px done marker, 44px sheet close). All media is clipped to its container (`overflow: hidden`) and posters keep strict 2/3 aspect.

## Components

### Buttons
- **Shape:** rounded controls (10px), `min-height: 44px`, weight 700, `.7rem 1.1rem` padding.
- **Primary** ("Gekeken"): red fill, white text, red glow shadow, inline check icon; hover lightens to #f03338.
- **Ghost** ("Details", finale switch): `rgba(255,255,255,.08)` fill, 1px `rgba(255,255,255,.18)` border; hover brightens border to `rgba(255,255,255,.45)`.
- **Undo** ("Markeer als niet gekeken"): `--surface2` fill, muted text, hairline border; hover raises text to `--text`.
- **Icon button** (route switch): 44×44px, transparent, hairline border, muted icon; hover: red border + text color. Transitions .15s.

### Sticky Header
Translucent blurred bar (see Elevation) with Bebas wordmark (red badge "MARVEL" + "MARATHON"), live counter (`done / total`, `aria-live="polite"`), icon button, and a 3px `--surface2` progress track whose red fill animates width over `.5s cubic-bezier(.22,.9,.3,1)`.

### Route Card
`--surface` card, hairline border, 14px radius, with a three-poster "fan" (64px-wide w185 posters, rotated -6°/2°/8°, offset and shadowed; defaults to the route's first three titles, overridable per route via a `fan` list), Bebas title, muted description, and a facts line ("n films/titels · ± n uur kijktijd" — "titels" when the route mixes content types). Hover (pointer devices only): red border + `translateY(-2px)`.

### Hero ("Nu aan de beurt")
16px-radius card: full-bleed w780/w1280 backdrop (srcset, `object-position: top`) under a bottom-up scrim `linear-gradient(to top, rgba(7,8,12,.97) 10% → .12 100%)`; content bottom-aligned over it — 104px poster (132px desktop) with heavy lift shadow, Bebas title, meta line, primary + ghost CTA. Enters with `heroIn` (.45s, fade + 10px rise). Finale variant swaps the backdrop for a dark red gradient with `#b8353a` border.

### Poster Grid Tile
Buttons with 10px radius, 2/3 aspect, lazy-loaded w342 poster. States: **watched** = `grayscale(1) brightness(.5)` + 26px red check chip bottom-right; **next** = 2px red ring + red-tinted shadow. Hover (pointer only): `scale(1.03)`. Image failure removes the img and injects a Bebas-set title fallback panel.

**Tile chips** — one shared anatomy: Bebas .95rem ls .05em, #fff text, `rgba(7,8,12,.72)` scrim, padding `.1rem .42rem 0`, 6px radius, 6px inset from the corner.
- **Number chip** (`.num`, top-left): position in the route.
- **Kind chip** (`.kind`, top-right): content-type label — "Serie", "Short", "Special" (films get no chip).
- **Hot chip** (`.kind.hot`): same anatomy on solid `--red` — status labels "Bios" (now in cinemas) or the release year (upcoming). The only red-filled chip besides the check.

### Detail Sheet
Bottom sheet on mobile (`align-items: flex-end`, 18px top radii, max-height 92dvh, slides up 40px over `.32s cubic-bezier(.2,.85,.3,1)`), centered card ≥760px (max-width 680px, all corners 18px). Overlay `rgba(4,5,8,.7)` fades .25s. Structure: 16/8 backdrop head with scrim into `--surface`, play-trailer pill, 44px circular close chip, poster overlapping the head (-3.4rem), Bebas title, meta line (`Type · jaar · duur · MCU Fase n`), synopsis, availability box (hairline `--surface2` panel with platform + JustWatch link), and a full-width toggle action (primary or undo style depending on watched state).

**Play-trailer pill** (bottom-right of the head, only when a trailer exists): pill radius (999px), `rgba(7,8,12,.72)` + 1px `rgba(255,255,255,.25)` border, `backdrop-filter: blur(6px)`, min-height 44px, filled play SVG + "Trailer" label (.88rem, 700, #fff). Hover: border `--red`, background `rgba(230,36,41,.25)`.

**Trailer embed state**: clicking the pill replaces the head content with a `youtube-nocookie.com` iframe (`.yt`, autoplay); `.sheet-head:has(iframe.yt)` switches to aspect 16/9 on #000 and drops the gradient overlay. The close chip is re-created on top and keeps working.

**Content types & meta format**: entries are film (default), serie, short, or special. Series show episode counts instead of minutes — `"9 afl."`, plus `" · 2 seizoenen"` when multi-season; unknown runtime reads "duur nog onbekend". Status logic for dated entries: before release "Verwacht · maand jaar", then "Nu in de bioscoop" for a 90-day cinema window, then back to the platform text.

**Live availability**: with an optional `TMDB_KEY` constant set, the sheet fetches TMDB watch-providers (NL, flatrate, max 2 names), caches per title in localStorage for 24h, and swaps the availability text to "Nu te zien op …". Without a key (or on any failure) the static platform indication stands — the visual anatomy never changes.

### Toast
Bottom-fixed pill (`--surface2`, hairline, 12px radius, deep shadow) sliding up over `.35s cubic-bezier(.2,.85,.3,1)`; message + red "Ongedaan maken" text button (hover: `rgba(230,36,41,.12)` wash). Auto-hides after 5s; `role="status"`.

### Icons
Inline SVG only, 24 viewBox, `stroke="currentColor"`, `stroke-width: 2` (2.5 for the check), round caps/joins, 13–20px rendered. No icon font, no external sets.

### Intro (signature)
First visit: 8-poster flipbook montage (`flash` .32s each, staggered .3s) under a multiply red wash, resolving to a dark red gradient while "MARVEL" settles from `scale(5)` (`settle`, 2.9s `cubic-bezier(.16,.8,.26,1)`); auto-dismiss at 4s. Return visits (`localStorage mm-intro`): quick beat — no montage, wordmark `quickIn` .8s, dismiss ~1.1s. Skippable by tap/Enter/Space (`role="button"`, `tabindex="0"`). Reduced motion: montage hidden, everything static, longer read time.

## Motion

- **Curve family:** ease-out cubics — `cubic-bezier(.2,.85,.3,1)` (sheet, toast), `.2,.8,.3,1` (heroIn, quickIn), `.22,.9,.3,1` (progress width), `.16,.8,.26,1` (intro settle). Micro-transitions (borders, colors, tile scale) use plain `.15s`–`.18s ease`.
- **Durations:** micro .15–.18s; entrances .32–.45s; progress .5s; intro beats .7–2.9s.
- **`prefers-reduced-motion: reduce`:** montage removed, intro static, hero animation off. JS also routes reduced-motion users to the quick intro path.

**The Enter-From-Below Rule.** Things arrive by rising: hero +10px, sheet +40px, toast +90px, fadeUp +8px. Nothing slides in sideways.

## Do's and Don'ts

### Do:
- **Do** keep the UI monochrome-plus-red; let posters and backdrops supply all other color.
- **Do** give every interactive element a ≥44px hit target and the shared focus style (`outline: 2px solid var(--red); outline-offset: 3px; border-radius: 4px`).
- **Do** ship an `onerror` fallback for every TMDB image (hide, or titled panel for tiles) and `loading="lazy"` in the grid; posters w342 (w185 in fans), backdrops w780 with w1280 srcset on the hero.
- **Do** write Dutch UI copy where controls name their action: "Gekeken", "Details", "Trailer", "Ongedaan maken", "Markeer als niet gekeken", "Kies een andere route" — and status copy that states the fact: "Nu in de bioscoop", "Verwacht · juli 2026", "Nu te zien op …".
- **Do** scrim backdrops with a `to top` gradient from `rgba(7,8,12,…)` before placing text over them.
- **Do** preserve the sheet's a11y contract: focus trap on Tab, `aria-modal`, Escape to close, body scroll lock, focus restore to the opener.

### Don't:
- **Don't** add a second accent color, colored greys, or light-mode variants — the world is dark-only.
- **Don't** use Bebas Neue below ~0.95rem or for running text; don't add font weights (400 only).
- **Don't** put shadows on resting containers; use the 1px `--line` border.
- **Don't** add breakpoints beyond 760px or design desktop-first.
- **Don't** guard hover effects without `@media (hover: hover)` on touch-transform hovers (route lift, tile scale).
- **Don't** bypass the poster 2/3 aspect ratio or crop artwork into non-rectangular shapes.

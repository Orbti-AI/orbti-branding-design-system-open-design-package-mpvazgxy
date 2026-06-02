# ORBTI — Branding & Design System

> Category: Custom · Brand / Product
> Surface: web (cream-first, responsive)
> Version: v1.1 — extracted from the shipped ORBTI site (`05-site/`); default theme set to cream-first by brand decision (the source site was dark-first — see PROVENANCE.md)

The canonical rules document for the **ORBTI** brand and design system. ORBTI is
an AI-agent agency — it builds bespoke AI agents for operations, customer
experience, and strategic intelligence, plus digital products (a CRM) and an
education arm (Academy), all unified under a proprietary visual system.

Everything below is extracted byte-for-byte from real source files (token CSS,
component CSS, brand SVGs, copy, and the product PRD). See **PROVENANCE.md** for
the file-by-file evidence map and **colors_and_type.css** for the machine-readable
token layer. Do not invent tokens outside this palette.

---

## 1. Product Context & Visual Theme

**Product context.** ORBTI is an **agent-design & AI-engineering** company — it
designs and engineers bespoke AI agents. Its product surfaces (the
shipped site this system was extracted from) are a conversion landing page, three
service pages — **Core** (operations), **Pulse** (customer experience), **Horizon**
(strategic intelligence) — a **CRM** product page, an **Academy** training arm, and
the open-source **ORBIT** framework. Audience: C-level, heads of operations, CX and
BI. The system must read credible and high-end. See README.md for the full overview.

**Cream-first, warm always, premium.** ORBTI's default canvas is a warm cream
(`#FDF5F1`) — not a clinical white. Every neutral carries a faint warm cast
(reds/browns mixed into the inks), so the whole interface reads like warm paper at
dusk rather than a cold "tech" dashboard. A single coral→terracotta accent does all
the heavy lifting: CTAs, links, focus rings, selection, glows. A warm **near-black
(`#0A0808`) is the alternate dark theme** — reserved for intentional dark moments
(a dark hero, splash, or the reverse logo), not the default surface.

The mood is **confident, technical, editorial**. References that shaped it:
Anthropic (clamp type system, two-color restraint), Rootly (premium dark,
auto-rotating tabs), Sandbar (warm cream alternate), Tesoro (5-color structure),
Habito (toggles, scramble motion). The product context is an AI agency selling
expertise — so the system must feel credible and high-end, never playful or
gradient-soaked.

**Signature moves**
- Warm cream canvas with a faint 40px dot grid overlay (dark dots, `rgba(30,5,5,.04)`); the dark alternate inverts it to cream dots on near-black (`rgba(253,245,241,.04)`).
- One coral accent (`#E8704B`) used sparingly — at most twice per view.
- Mono (JetBrains Mono) eyebrows/labels in uppercase with wide tracking.
- Soft radial coral glow behind hero focal points (`--gradient-glow`, `--shadow-glow`).
- Orbital iconography (concentric dashed rings around a coral core).

---

## 2. Color

Two themes share one brand accent. **Cream is the default.** A warm near-black is
the alternate dark theme, not a cold slate.

### Brand
| Token | Hex | Role |
|---|---|---|
| `--color-coral-sunset` | `#E8704B` | Primary accent · CTAs · links · focus |
| `--color-terracotta` | `#B85C3A` | Secondary accent · active state |
| `--color-terracotta-light` | `#D47A56` | Hover |
| `--color-coral-light` | `#F08B63` | Highlight · inline code |

### Cream theme (default) — semantic
| Token | Hex |
|---|---|
| `--color-bg` | `#FDF5F1` |
| `--color-surface` | `#EDE4DC` |
| `--color-surface-deep` | `#E5DAD0` |
| `--color-border` | `#DDD0C5` |
| `--color-border-subtle` | `#EBE2DA` |
| `--color-text` | `#1E0505` |
| `--color-text-secondary` | `#4A0E0E` |
| `--color-text-muted` | `#8B3A3A` |
| `--color-text-faint` | `#B85C5C` |

### Dark theme (alternate) — semantic
| Token | Hex |
|---|---|
| `--color-bg` | `#0A0808` |
| `--color-surface` | `#0E0909` |
| `--color-surface-deep` | `#120B0B` |
| `--color-border` | `#3A2525` |
| `--color-border-subtle` | `rgba(58,37,37,.5)` |
| `--color-text` | `#FDF5F1` |
| `--color-text-secondary` | `#EDE4DC` |
| `--color-text-muted` | `#DDD4CE` |
| `--color-text-faint` | `#9E5A5A` |

### Functional / status
`--color-success #4A7A5B` · `--color-error #C04040` · `--color-warning #C08840` · `--color-info #5B7A9E`.
Status colors are muted/desaturated to sit inside the warm palette — never neon.

### Overlays, alphas & gradients
Coral is also expressed as low-alpha tints for backgrounds and states:
`--color-coral-bg` (8%), `--color-coral-bg-hover` (14%), `--color-coral-bg-active` (20%),
`--color-text-selection` (35%), `--color-focus-ring` (50%).
Gradients: `--gradient-accent` (coral→terracotta 135°), `--gradient-glow` (radial coral),
`--gradient-hero` (layered radial dark reds), `--gradient-overlay-bottom` (image scrims).

**Switching themes:** cream is applied to `:root` by default; set
`data-theme="dark"` on `<html>`/`<body>` for the dark alternate (and
`data-theme="light"` is available as an explicit alias of the default).

---

## 3. Typography

**Inter** for everything visible; **JetBrains Mono** for labels, eyebrows, code,
stats, and metadata. Display and body are different families only by weight/role —
the contrast is weight (300 light leads vs 900 black headlines), not face.

```
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
```

Loaded via Google Fonts (no local font files were captured). `colors_and_type.css`
binds them with `@import` so previews and kits render the real faces.

### Scale (fluid, clamp() — zero breakpoints)
| Class / token | Size | Weight | Use |
|---|---|---|---|
| `--text-display-xxl` | `clamp(2.5rem … 4.5rem)` | 900 | Hero headline |
| `--text-display-xl` | `clamp(2rem … 3.25rem)` | 700 | Page h1 |
| `--text-display-l` | `clamp(1.625rem … 2.375rem)` | 700 | Section h2 |
| `--text-display-m` | `clamp(1.375rem … 1.75rem)` | 600 | h3 / card title |
| `--text-display-s` | `clamp(1.125rem … 1.3rem)` | 700 | h4 |
| `--text-body-xl` | `clamp(1.125rem … 1.3rem)` | 300 | Lead / hero subtitle |
| `--text-body-l / m / s / xs` | `1.1rem` → `0.6875rem` | 400 | Body copy |
| `--text-label-l / m / s` | `0.875` → `0.625rem` | 500–700 | Mono labels |

### Rules
- Headline tracking is tight (`--tracking-display: -0.04em`); mono labels are wide (`0.3em`) and uppercase.
- Line height: 1.1 display, 1.25 heading, 1.65 body.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs, `max-width: 65ch` on `p`.
- Leads use weight **300** for an airy, premium feel against the black canvas.

---

## 4. Spacing

10-tier **fluid** scale via `clamp()` (`--space-4xs` … `--space-3xl`, ~2px → 144px).
Density is generous and editorial — sections breathe with `--space-2xl` vertical padding.

- **Section rhythm:** `--section-py: var(--space-2xl)`, `--section-px: clamp(1.5rem,1rem+2vw,3rem)`.
- **Site margin:** `clamp(1.5rem … 5rem)`; max content width `1280px`; narrow column `720px`.
- **Radius:** `xs 4 · s 6 · m 8 · l 12 · xl 14 · 2xl 20 · pill 100 · full 50%`. Cards use `--radius-xl` (14px); buttons `--radius-s` (6px).
- **Shadows:** near-black elevation (`--shadow-xs`…`--shadow-xl`) plus three coral **glow** shadows for focal emphasis — glow replaces drop-shadow as the brand's "lift."

---

## 5. Layout & Composition

- **12-column grid** (`.grid`, `--grid-columns: 12`) with `container-type: inline-size`; component grids adapt with **container queries**, not viewport media queries.
- **Sticky blur nav** (`--nav-height: 4.25rem`) that gains a translucent background + blur + hairline border once scrolled (`.nav-scrolled`). Mobile collapses to a clip-path circle reveal menu.
- **Hero:** ≥80vh, left-aligned content (`max-width 720px`), optional full-bleed background image with bottom scrim + pulsing coral glow.
- **Section header pattern:** mono `.section-label` (eyebrow, bottom-bordered) → `h2` → `.lead`.
- **Footer:** 4-column grid (`2fr` brand + 3× link columns), collapses to one column ≤640px.
- Responsive philosophy: fluid type + spacing means most layout "just scales"; explicit breakpoints are reserved for nav and footer structural changes.

---

## 6. Components

All components are class-based, theme-aware (cream default, dark alternate), and
consume the tokens above. Full CSS is preserved under `source_examples/design-system/`.

- **Buttons** — `.btn` + size (`-s/-m/-l/-xl`) + variant: `.btn-primary` (coral fill, glow on hover), `.btn-secondary` (outline → coral on hover), `.btn-ghost` (coral text, tinted hover). `:active` scales to `0.98`.
- **Cards** — `.card` (transparent, bordered, coral-tint on hover) with variants: `.card-accent` (gradient top bar), `.card-image`, `.card-stat` (huge coral number + mono label), `.card-pillar` (48px product icon). `.cards-grid` uses container queries.
- **Pills / badges** — `.pill`, `.pill-filled`, `.pill-accent`, sizes `-s/-l`; `.badge-coral/-muted/-success`; `.npm-badge` (mono, `$`-prefixed command chip).
- **Inputs** — `.input`, `.textarea`, `.select` (custom coral chevron), `.checkbox` (coral check), `.toggle` (spring-animated coral switch). Focus = coral border + 3px focus ring. Error/success border states.
- **Nav** — `.nav` sticky + `.nav-scrolled`; `.nav-link` with animated coral underline; hamburger morph to ✕; clip-path mobile overlay.
- **Tabs** — `.tabs` with auto-rotating progress bar (`--duration-tab: 5000ms`), pauses on hover; pill-tab variant.
- **Sections** — `.hero`, `.cta-section`, `.framework-bar` (the O-R-B-I-T method letters), `.footer`.
- **Product family** — three service marks (Core, Pulse, Horizon) each with an orbital SVG icon + lockup; a CRM product; an Academy. Use the matching `assets/icons/icon-orbti-*.svg` and `assets/logos/orbti-*-lockup.svg`.

---

## 7. Motion & Interaction

- **Durations:** `instant 100 · fast 150 · base 250 · slow 400 · slower 600 · reveal 800ms`.
- **Easing:** `--ease-default` (smooth), `--ease-snappy` (0.16,1,0.3,1 for underlines/menus), `--ease-spring` (toggles), `--ease-out` (transforms/reveals).
- **Hover:** color shift + (for primary CTA) coral glow; nav underline grows left→right; cards warm with a coral tint.
- **Focus:** always a visible coral ring — `outline: 2px solid var(--color-focus-ring); outline-offset: 3px` globally, `box-shadow: 0 0 0 3px` on form fields.
- **Scroll:** word-by-word / line-by-line reveals (GSAP SplitText), parallax (`--parallax-range: 15%`), Lenis smooth scroll, scramble text on labels, auto-rotating tabs.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` collapses all animation/transition durations to ~0 and disables smooth scroll — always honor it.

---

## 8. Voice & Brand

- **Official logo (primary, applied by default):** the primary brand mark is the **terracotta astronaut tile** — an engraved figure (a small bird etched on the helmet) above the `ORBTI` wordmark, on a warm cream rounded-square with a thick terracotta border. This is the **default applied mark across the brand — on both light and dark surfaces.** Its warm cream field sits naturally on the default cream canvas, and is intentional even against the dark alternate theme: the tile is meant to read as a bright, self-contained badge, not to dissolve into the background. The **full logo** — engraving **plus the `ORBTI` wordmark** — is preserved byte-for-byte at `assets/logos/orbti-logo.png`. The **app-icon form** is a **wordmark-less variant** — the astronaut engraving alone on the same cream/terracotta tile, no `ORBTI` lettering — preserved at `build/icon.png` (runtime icon) and aliased at `assets/logos/orbti-icon.png`; use it wherever the mark renders small or square (favicon, app icon, avatar, social profile) so the wordmark never has to compete at small sizes. Both share the brand terracotta ink `#B85C3A` and the cream `--color-bg` (light) `#FDF5F1`. The mark was recolored from the original burnt-umber master (`#5A2819`) at the brand owner's request — a tonal gradient map shifts the ink onto the brand terracotta while preserving the cream field and the engraving's depth; the wordmark-less icon was recolored from its own clean upload through the identical gradient map so its ink matches the full logo exactly. The umber master is retained at `assets/logos/orbti-logo-umber-original.png`, and a brighter coral `#E8704B` variant is on hand. Keep clear-space ≥ the border thickness on all sides; treat the recolored terracotta tiles as canonical and do not recolor them further, place them on busy backgrounds, or stretch the tile.
- **Reverse logo (optional, specific-case only):** the official **reverse** mark inverts the tile — a **near-black field** (`#0A0808`, the dark alternate theme's canvas) carries the engraving and `ORBTI` wordmark in coral `#E8704B`, and the border becomes a coral ring that reads as a glow against the dark canvas. Preserved at `assets/logos/orbti-logo-reverse.png` (RGBA, transparent outside the tile), with a **wordmark-less reverse app-icon** form — the coral astronaut engraving alone on the near-black tile, no `ORBTI` lettering — at `assets/logos/orbti-icon-reverse.png` for small / square dark-surface slots (favicon, avatar, app icon) where the wordmark would crowd, mirroring the cream full-logo/app-icon split. It is **not** the default for dark surfaces — the cream tile above stays primary everywhere. Reach for the reverse mark only in **select, intentional moments** where its dissolve-into-the-canvas, coral-glow treatment is the desired effect (e.g. a dark hero, splash, or a deliberately understated dark-mode footer). **Never apply the reverse mark on a cream / light field** (`#FDF5F1` or any light surface) — its coral-on-near-black treatment only reads against the dark canvas; on cream the tile becomes a dark block that fights the page and loses the coral-ring glow. On light surfaces use the primary cream tile instead. Do not place the reverse mark on busy backgrounds or below ~32px, where the coral engraving thickens; do not recolor it further.
- **Mark hierarchy:** the **cream terracotta tile is the lead mark** and is applied by default wherever the brand appears, in two forms: the **full logo with wordmark** (`assets/logos/orbti-logo.png`) for brand-level placements where the `ORBTI` lettering reads clearly, and the **wordmark-less icon** (`build/icon.png` / `assets/logos/orbti-icon.png`) for identity/app slots that are small or square — favicon, app icon, avatar, splash, social profile — where the wordmark would crowd. Use the flat **`ORBTI` wordmark** (`assets/logos/orbti-wordmark-*.svg`) for in-product nav, headers, and footers where the full illustration would be too heavy. Use the **reverse coral tile** only as an occasional, intentional dark-surface variant (see above). Use the **product lockups** (Core / Pulse / Horizon) only for those sub-brands.
- **Name:** always **ORBTI**, set in Inter 900 with `-0.03em` tracking; an optional small coral dot sits to the upper right of the wordmark.
- **Tone:** provocative, confident, technical. Primary language is **Brazilian Portuguese**. Sentence-case headlines, em-dashes for asides, no exclamation spam.
- **Core concept:** *"ORBTI é agent design e AI engineering."* — the brand leads with what it *is* (it designs and engineers bespoke AI agents), not with process-transformation claims. Do not reintroduce "repensamos processos do zero" style positioning.
- **Method:** the proprietary **ORBIT** framework — the `.framework-bar` spells the letters as labeled chips.
- **Terminology:** Serviços = Core / Pulse / Horizon; Produtos = CRM; Academy; Framework. "Agentes de IA," "humanos no comando," "resultados reais — não demos bonitas."
- **Capitalization:** mono labels are UPPERCASE with wide tracking; display headlines are sentence case.

---

## 9. Anti-patterns

Avoid — these break the ORBTI system:

- ❌ **Cold/neutral greys.** Every neutral must carry the warm red/brown cast. No `#1a1a1a` slate, no pure `#fff` surfaces.
- ❌ **Purple/violet or rainbow gradients.** The only gradients are coral→terracotta and the layered dark-red hero. Accent stays singular.
- ❌ **More than one accent per view, or coral as a fill on large areas.** Coral is a highlight, not a background; use the 8–20% coral tints for surfaces/states.
- ❌ **Generic emoji feature icons** (✨🚀🎯) or an icon next to every heading. Use the orbital SVG marks and mono eyebrows.
- ❌ **Drop-shadow stacks for emphasis.** Lift comes from the coral *glow*, not heavy box-shadows.
- ❌ **Inter as a "designy" display substitute elsewhere** — keep Inter for ORBTI; do not swap to Fraunces/Roboto. Mono is JetBrains Mono only.
- ❌ **Tight, dense dashboard spacing on marketing surfaces.** Honor the generous fluid section rhythm.
- ❌ **Hard breakpoints where fluid `clamp()` / container queries belong.** Reserve media queries for nav/footer structure.
- ❌ **Ignoring `prefers-reduced-motion`** or removing the visible coral focus ring.
- ❌ **Invented metrics / English filler copy.** Voice is PT-BR, specific, and evidence-led.

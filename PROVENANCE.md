# Provenance — ORBTI Branding & Design System

This package was constructed from **local code evidence only**. No GitHub
repositories or Figma files were linked (see `context/source-context.md`). The
evidence is a browser-copied snapshot of the shipped ORBTI marketing site,
captured under the project root with `context_local-code_05-site_*` filenames
(originating path: `05-site/`).

Every token, component rule, color, font, and asset in this package traces to a
concrete source file below. Nothing was authored from URL text or from memory.

## Source → package map

| Package artifact | Source evidence file(s) |
|---|---|
| `colors_and_type.css` → color tokens | `…design-system_tokens_colors.css` |
| `colors_and_type.css` → type tokens | `…design-system_tokens_typography.css`, `…base_typography.css` |
| `colors_and_type.css` → spacing/radius/z | `…design-system_tokens_spacing.css` |
| `colors_and_type.css` → motion tokens | `…design-system_tokens_motion.css` |
| `colors_and_type.css` → base body/selection | `…design-system_base_reset.css` |
| `colors_and_type.css` → `.btn` helpers | `…design-system_components_buttons.css` |
| `colors_and_type.css` → `.card` / `.pill` / `.input` | `…components_cards.css`, `…components_pills.css`, `…components_inputs.css` |
| `DESIGN.md` → product context, pages, method | `…prd-site-orbti.md`, `…copy_landing-page.md`, `…copy_orbti-*.md` |
| `DESIGN.md` → nav / tabs / sections / footer | `…components_nav.css`, `…components_tabs.css`, `…components_sections.css`, `…utilities_layout.css` |
| `assets/logos/*` | `…assets_logos_*.svg`, `…assets_imagens_logos_*.svg` |
| `assets/icons/*` | `…assets_icones_icon-orbti-*.svg` |
| `assets/backgrounds/*` | `…assets_imagens_backgrounds_*.png`, `…assets_imagens_apresentacoes_01-cover-planet-orbti.png` |
| `assets/logos/orbti-logo.png` | **full logo (with `ORBTI` wordmark), recolored to brand terracotta** (`#B85C3A`, SHA-256 `484434b1…`). Derived from the user-provided master (uploaded `mpvpvyj0-Agrupar_3x.png`, 4038×3978 RGBA, SHA-256 `775844e5…`) via a tonal gradient map — see the recolor note below. |
| `build/icon.png` + `assets/logos/orbti-icon.png` | **app icon — wordmark-less variant** (just the astronaut engraving, no `ORBTI` lettering; SHA-256 `70d2785b…`). Recolored from a **separate clean user upload** — the sépia/umber icon master, preserved byte-for-byte as `assets/logos/orbti-icon-umber-original.png` (SHA-256 `3fee7b6c…`, 4038×3978 RGBA) — through the **identical** gradient map anchors (`black=#5A2819`, `mid=#B85C3A`, `white=#FDF5F1`, midpoint 82 so the ink mass lands on the brand terracotta, whitepoint 232 so the cream field stays neutral), so its ink matches the full logo exactly. **Intentionally distinct** from `orbti-logo.png` — the icon drops the wordmark for small / square slots. The two `build/` + `assets/` copies are byte-identical to each other. |
| `assets/logos/orbti-logo-umber-original.png` | the **original burnt-umber master** the user uploaded, preserved byte-for-byte (SHA-256 `775844e5…`) as the reversible source for the recolor. |
| `assets/logos/orbti-icon-umber-original.png` | the **clean wordmark-less icon master** the user uploaded (sépia/umber astronaut, no `ORBTI`), preserved byte-for-byte (SHA-256 `3fee7b6c…`) as the reversible source for the icon + reverse-icon recolors. |
| `assets/logos/orbti-logo-coral.png` | alternate **coral `#E8704B`** recoloring of the same master (cream field), kept on hand should the brand prefer the brighter primary accent. |
| `assets/logos/orbti-logo-reverse.png` | the official **reverse logo** for dark surfaces (SHA-256 `8d7fcc67…`, RGBA, transparent outside the tile). Derived from the umber master by inverting the tonal field to near-black `#0A0808` and mapping the engraving + `ORBTI` wordmark to coral `#E8704B`, so the tile border reads as a coral glow on the dark canvas. User-confirmed as the canonical reverse mark. |
| `assets/logos/orbti-icon-reverse.png` | the **wordmark-less reverse app-icon** (SHA-256 `577bac03…`, RGBA, transparent outside the tile). Same inverted near-black field + coral `#E8704B` engraving as the reverse logo, but built from the wordmark-less astronaut source (the clean icon master, preserved as `assets/logos/orbti-icon-umber-original.png`) through the identical inversion + colorize so its coral matches the full reverse exactly. For small / square dark-surface slots (favicon, avatar, app icon). User-confirmed as the icon form of the reverse mark. |
| `source_examples/design-system/*` | the original token + component CSS, copied verbatim |
| `source_examples/page-servico-core.html` | `…servicos_core.html` (a real product/service page) |
| `ui_kits/app/*` | composition modeled on `…index.html` + the `servicos/*.html` pages |

## Notes & decisions

- **Authoritative tokens.** Two color definitions exist in the evidence: an older
  deep-red set in the PRD prose (`#1E0505` bg, `#6B1818` border) and the
  **shipped** warm near-black set in `design-system/tokens/colors.css`
  (`#0A0808` bg, `#3A2525` border). The shipped CSS is the file actually imported
  by `main.css`, so it is treated as the source of truth. The PRD palette is noted
  only as historical context.
- **Default theme flipped to cream (v1.1, brand decision — NOT from source).** The
  shipped ORBTI site was **dark-first** (near-black `#0A0808` applied to `:root`).
  At the brand owner's request the package default was inverted: `colors_and_type.css`
  now binds the **warm cream** theme (`#FDF5F1`) to `:root` / `[data-theme="light"]`,
  and the near-black set moved to `[data-theme="dark"]` as the **alternate**. Both
  token sets are unchanged extracted values — only which one is the default changed.
  This is a deliberate brand evolution, not a provenance correction; the dark theme
  remains fully supported (and the `ui_kits/app/` kit intentionally showcases it).
- **Fonts.** No font binaries were captured. The production site loads **Inter**
  and **JetBrains Mono** from Google Fonts; `colors_and_type.css` reproduces that
  with `@import`. There is therefore intentionally **no `fonts/` directory**.
- **`build/` directory.** The original site evidence contained no
  `context/.../files/build/…` runtime assets. The `build/` directory was added
  later to hold the **ORBTI app icon** (`build/icon.png`) — the right home for a
  favicon/app/social mark. It now holds the **wordmark-less** variant (astronaut
  tile, no `ORBTI` lettering), recolored from the user's clean icon upload. This is
  the package's first genuine asset divergence: `build/icon.png` (icon, no wordmark)
  and `assets/logos/orbti-logo.png` (full logo, with wordmark) are **no longer
  byte-identical** — they are two intentionally different marks sharing one
  terracotta treatment.
- **Assets preserved byte-for-byte.** Logos, product lockups, orbital icons, and
  background images were copied without re-encoding or redrawing.
- **`.fuse_hidden*` files** in the snapshot are editor temp duplicates of the named
  files and were ignored in favor of their resolved counterparts.
- **Transient uploads removed.** The raw chat uploads (`mpv…-image.png`,
  `mpvr7jtk-Camada-copiar_3x.png`, `mpvpvyj0-Agrupar_3x.png`, the `.pxd`) and the
  review-only proof composites (`logo-*-proof.png`, `logo-*-tile.png`,
  `logo-*-on-darkfield.png`, `logo-wordmark-variants.png`, `icon-recolor-proof.png`)
  were deleted from the project root after their pixels were preserved into the
  canonical `assets/` / `build/` files above. The durable link to source is the
  SHA-256 hash recorded per file, not the original upload filename.

---
name: orbti-branding-design-system
description: ORBTI brand & design system — a cream-first warm canvas (with a warm near-black dark alternate) and a single coral/terracotta accent, Inter + JetBrains Mono, fluid clamp() tokens, and a full web component library. Use when generating any ORBTI-branded artifact (landing pages, marketing sites, service/product pages, decks, dashboards) or when a project selects "Branding e design system" as its active design system.
user-invocable: true
---

# ORBTI Branding & Design System

An agent-usable skill for generating on-brand **ORBTI** artifacts. ORBTI is an
AI-agent agency (services: Core / Pulse / Horizon; products: a CRM; an Academy)
with a premium, cream-first, warm visual identity (dark near-black as the
intentional alternate). This package was extracted
byte-for-byte from the shipped ORBTI site — every token, asset, and rule traces
to a real source file (see `PROVENANCE.md`).

## What's inside

- **`DESIGN.md`** — canonical rules: theme, color, type, spacing, layout, components, motion, voice, anti-patterns.
- **`colors_and_type.css`** — machine-readable token + helper layer. Binds Inter + JetBrains Mono via `@import`. Paste/link this first.
- **`README.md`** — package guide, product overview, preview manifest, reuse workflow.
- **`PROVENANCE.md`** — source→artifact evidence map.
- **`assets/`** — real preserved brand marks: `logos/` (full logo `orbti-logo.png` with wordmark + wordmark-less `orbti-icon.png` + reverse `orbti-logo-reverse.png` & wordmark-less reverse `orbti-icon-reverse.png` + flat wordmarks + Core/Pulse/Horizon lockups), `icons/` (orbital product icons, light + dark), `backgrounds/` (hero PNGs).
- **`build/`** — ORBTI **app icon** (`icon.png`): the **wordmark-less** terracotta tile (no `ORBTI` lettering), recolored to match the full logo; use for favicon / app icon / avatar / social profile.
- **`preview/`** — focused review cards (color, type, spacing, radius, shadows, components, brand assets).
- **`source_examples/`** — original token + component CSS and a real service page, copied verbatim.
- **`ui_kits/app/`** — a runnable React UI kit composing the ORBTI marketing surface from the tokens.

> Note: **no `fonts/`** directory — fonts load from Google Fonts CDN, bound in
> `colors_and_type.css`. `build/` holds the wordmark-less app icon (`icon.png`),
> intentionally distinct from the full logo `assets/logos/orbti-logo.png`.

## Source context

Built from local code evidence only — no GitHub/Figma were linked. The evidence is
a browser-copied snapshot of the ORBTI site (`05-site/`), captured under the
project's `context/` intake (`context_local-code_05-site_*`). The authoritative
tokens come from `design-system/tokens/*.css`; product context from `prd-site-orbti.md`
and `copy/*.md`. See `context/source-context.md` and `PROVENANCE.md`.

## When to use this skill

- A project's **active design system** is "Branding e design system" / ORBTI.
- The user asks for an ORBTI landing page, marketing/site page, service or product
  page, pitch deck, or dashboard.
- Any artifact that must read as warm, cream-first, premium, with a single coral
  accent and Inter + JetBrains Mono (dark near-black reserved for intentional moments).

Do **not** use it to recreate other brands, or to apply a cold/neutral grey or
purple-gradient aesthetic — those violate the system.

## How to use

1. **Read first:** `README.md` and `DESIGN.md` for rules; `colors_and_type.css` for tokens.
2. **Bind tokens:** link or inline `colors_and_type.css` in the artifact's first
   `<style>`/`<link>`; build with the semantic custom properties and helper classes
   (`.display-*`, `.btn`, `.card`, `.pill`, `.input`, `.section-label`).
3. **Reuse real assets:** pull marks from `assets/logos/`, `assets/icons/`, and
   `assets/backgrounds/` — never redraw the wordmark or orbital icons.
4. **Inspect references:** check `preview/*.html` for the intended look of each
   subsystem, and `source_examples/design-system/*.css` for the full component CSS.
5. **Compose product UI:** model layouts on `ui_kits/app/` (NavBar, Hero,
   ServicesGrid, FrameworkBar, ContactForm, Footer).
6. **Respect voice:** PT-BR, sentence-case headlines, mono uppercase eyebrows, the
   ORBIT method, "resultados reais — não demos bonitas."
7. **Honor anti-patterns** in `DESIGN.md §9` and always keep `prefers-reduced-motion`
   and the visible coral focus ring.

Before generating, agents should review: `README.md`, `DESIGN.md`,
`colors_and_type.css`, `preview/`, `assets/`, `source_examples/`, and
`ui_kits/app/`.

## Design system highlights

- **Warm near-black canvas** `#0A0808` with a faint dot-grid; every neutral carries a red/brown cast.
- **One accent:** coral sunset `#E8704B` → terracotta `#B85C3A`, used at most twice per view; expressed as 8–20% tints for surfaces/states.
- **Type:** Inter (300 leads → 900 display) + JetBrains Mono (uppercase, wide-tracked labels); fluid `clamp()` scale, zero breakpoints.
- **Lift = glow,** not heavy shadow: `--shadow-glow` behind focal points.
- **Layout:** 12-col grid with container queries; sticky blur nav; ≥80vh hero; generous `--space-2xl` section rhythm.
- **Motion:** GSAP-style reveals, auto-rotating tabs, spring toggles; reduced-motion always honored.
- **Two themes,** one accent: warm cream default, near-black dark alternate (`data-theme="dark"`).

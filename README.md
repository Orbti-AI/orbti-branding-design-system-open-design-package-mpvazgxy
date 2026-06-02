# ORBTI — Branding & Design System (Open Design package)

A reusable Open Design design-system package for the **ORBTI** brand: a cream-first,
warm, premium visual identity built around a single coral/terracotta accent, Inter +
JetBrains Mono, fluid `clamp()` tokens, and a full web component library. Drop it
into any Open Design project to generate on-brand ORBTI artifacts.

`DESIGN.md` is the canonical rules document; `colors_and_type.css` is the
machine-readable token layer; `SKILL.md` is the agent entry point.

---

## Product Overview

**ORBTI is an agent-design & AI-engineering company.** Its core concept — *"ORBTI é
agent design e AI engineering."* — frames the whole brand: it designs and engineers
bespoke AI agents for operations, customer experience, and strategic intelligence,
with humans in command.

This is evidenced directly by the source files (`prd-site-orbti.md`, `copy/*.md`,
and the shipped HTML pages):

**Primary UI surfaces** (the captured site, `05-site/`):
- **Landing page** (`index.html`) — the main conversion surface: hero, provocation, services, framework, CTA, footer.
- **Service pages** — **Core** (agents for operations), **Pulse** (agents for customer experience), **Horizon** (agents for strategic intelligence), under `servicos/`.
- **Product page** — **CRM** (`produtos/crm.html`).
- **Academy** (`academy/index.html`) — training in AI agents / Claude.
- **Solutions** — Framework (the open-source ORBIT method) and Web design, under `solucoes/`.
- A **design-system styleguide** (`design-system/styleguide.html`) and a token-driven CSS library.

**Core capabilities the product offers** (from copy + PRD): the ORBTI platform
provides bespoke AI agents for back-office automation (Core), customer experience at
scale (Pulse), and BI / decision intelligence (Horizon). It also includes a
proprietary delivery method (**ORBIT**), a CRM product, and an education arm
(Academy). The service is designed for C-level, heads of operations, CX, and BI
buyers, and is built to convert visitors into booked demonstrations.

**Source repository / source folder.** No Git/Figma sources were linked. The
evidence is a local-code snapshot of the ORBTI site, originally `05-site/`, captured
under this project's `context/` intake as `context_local-code_05-site_*` files. See
`context/source-context.md` and `PROVENANCE.md` for the full map.

---

## Package contents

```
.
├── DESIGN.md                  ← canonical rules (theme, color, type, spacing, layout, components, motion, voice, anti-patterns)
├── colors_and_type.css        ← token + helper layer; binds Inter + JetBrains Mono via @import
├── README.md                  ← this guide
├── SKILL.md                   ← agent-usable skill entry (YAML frontmatter + usage)
├── PROVENANCE.md              ← source → artifact evidence map
├── assets/
│   ├── logos/                 ← orbti-logo.png (full logo, with wordmark) + orbti-icon.png (app-icon, no wordmark) + orbti-logo-reverse.png + orbti-icon-reverse.png (optional reverse, with/without wordmark) + orbti-wordmark-{light,dark,coral}.svg + {core,pulse,horizon}-lockup.svg
│   ├── icons/                 ← icon-orbti-{core,pulse,horizon}[-light].svg (orbital marks)
│   └── backgrounds/           ← 01-orbital-glow-abstract.png, 10-abstrata-background-dark.png, 01-cover-planet-orbti.png
├── build/
│   └── icon.png               ← ORBTI app icon — wordmark-less terracotta tile (favicon/app/avatar/social)
├── preview/                   ← focused review cards (see Preview Manifest)
├── source_examples/
│   ├── design-system/         ← colors.css, buttons.css, cards.css, nav.css, main.css (verbatim)
│   └── page-servico-core.html ← a real ORBTI service page (verbatim)
└── ui_kits/app/               ← runnable React UI kit (index.html + components/ + README.md)
```

> **`build/`** holds the ORBTI **app icon** (`build/icon.png`) — the
> **wordmark-less** terracotta astronaut tile (no `ORBTI` lettering), for small /
> square slots like favicon, app icon, avatar, and social profile. It is recolored
> from the user-provided icon upload through the same brand gradient map as the full
> logo, and aliased at `assets/logos/orbti-icon.png`. This is **distinct** from the
> full logo `assets/logos/orbti-logo.png`, which carries the `ORBTI` wordmark. The
> remaining brand marks are SVG design assets under `assets/`.
> **No `fonts/`** directory: Inter and JetBrains Mono load from Google Fonts (as on
> the production site); `colors_and_type.css` binds them with `@import`.

---

## Preview Manifest

Each card is a standalone HTML file that links `../colors_and_type.css` and renders
real brand tokens/assets. Open them from the **Design System** tab.

| Card (path) | What reviewers inspect | Demonstrates (source-backed) |
|---|---|---|
| `preview/colors-primary.html` | The single brand accent, its tints, and muted status colors | `--color-coral-sunset/-terracotta`, coral tint scale, `--color-success/-error/-warning/-info` (from `tokens/colors.css`) |
| `preview/colors-theme-dark.html` | Default dark theme semantic surfaces + a sample card | `--color-bg/-surface/-border/-text*` dark aliases; `.btn-primary` |
| `preview/colors-theme-light.html` | Warm cream light alternate | `data-theme="light"` semantic aliases |
| `preview/typography-specimens.html` | Fluid type scale, Inter weights, JetBrains Mono | `.display-*`, `.lead`, `.section-label`, `--text-*` (from `tokens/typography.css`) |
| `preview/spacing-tokens.html` | The 10-tier fluid spacing scale | `--space-4xs … --space-3xl` |
| `preview/spacing-radius.html` | Corner radii and where each is used | `--radius-xs … --radius-pill/-full` |
| `preview/spacing-shadows.html` | Near-black elevation vs. the coral glow | `--shadow-xs … -xl`, `--shadow-glow*` |
| `preview/components-buttons.html` | Button variants/sizes, pills, product pillar cards | `.btn-*`, `.pill*`, `.card` (from `components/{buttons,pills,cards}.css`) + real `assets/icons/` |
| `preview/components-inputs.html` | Form fields, coral focus ring, error state, checkbox | `.input`, `.textarea`, focus ring, error border (from `components/inputs.css`) |
| `preview/brand-assets.html` | Full logo (with wordmark) + app icon (wordmark-less) + reverse logo & reverse app icon (optional, specific-case) + wordmarks, lockups, orbital icons, hero background | Loads the real full logo from `assets/logos/orbti-logo.png`, the wordmark-less app icon from `build/icon.png`, the optional reverse marks from `assets/logos/orbti-logo-reverse.png` (with wordmark) and `assets/logos/orbti-icon-reverse.png` (wordmark-less) on a near-black field, plus `assets/logos/`, `assets/icons/`, `assets/backgrounds/` via `<img>` |

---

## Reuse workflow

1. **Bind tokens.** Link or inline `colors_and_type.css` in the artifact's first
   `<style>`/`<link>`. It defines all custom properties and a set of helper classes.
2. **Read the rules.** Skim `DESIGN.md` (esp. §9 anti-patterns) and the relevant
   `preview/*.html` card for the subsystem you're building.
3. **Build with tokens, not literals.** Use `var(--color-*)`, `var(--space-*)`,
   `var(--text-*)`, `var(--radius-*)`, and the helper classes. Never hardcode hex/px.
4. **Reuse real assets.** Pull marks from `assets/` (wordmarks, Core/Pulse/Horizon
   lockups, orbital icons, hero backgrounds) — don't redraw them.
5. **Compose product UI.** Start from `ui_kits/app/` (NavBar, Hero, ServicesGrid,
   FrameworkBar, ContactForm, Footer) and `source_examples/` for full component CSS.
6. **Keep the voice.** PT-BR, sentence-case headlines, mono uppercase eyebrows, one
   coral accent, glow-not-shadow lift, honored `prefers-reduced-motion` + coral
   focus ring.

---

## At a glance

- **Theme:** cream-first warm canvas `#FDF5F1`; warm near-black `#0A0808` dark alternate.
- **Accent:** coral sunset `#E8704B` → terracotta `#B85C3A`, used ≤ twice per view.
- **Type:** Inter (300→900) + JetBrains Mono; fluid `clamp()` scale.
- **Grid:** 12-col with container queries; `1280px` max; generous section rhythm.
- **Lift:** coral glow, not heavy shadows. **Motion:** GSAP-style reveals, honor reduced-motion.

See `DESIGN.md` for the complete specification and `PROVENANCE.md` for evidence.

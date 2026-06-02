# ORBTI Applied UI Kit

A runnable, React-based composition of the ORBTI marketing surface, built
entirely on the canonical `colors_and_type.css` token layer. It demonstrates how
the design system's tokens and components assemble into a real product page.

## Run it

Open `ui_kits/app/index.html` in the **Design System** preview (or any static
server). It loads React 18, ReactDOM, and Babel standalone from CDN, links
`../../colors_and_type.css`, loads each role component from `components/`, and
mounts the composed `<App />` into `#root`. No build step.

## Structure

```
ui_kits/app/
├── index.html              ← runnable entry: React + Babel + colors_and_type.css, mounts <App/>
├── README.md               ← this file
└── components/
    ├── App.jsx             ← shell — composes every role into the scrollable surface (window.App)
    ├── NavBar.jsx          ← navigation — sticky blur nav, coral-underline links, CTA (window.NavBar)
    ├── Hero.jsx            ← primary surface — orbital-glow bg, display headline, dual CTA (window.Hero)
    ├── ServicesGrid.jsx    ← list/rail — Core/Pulse/Horizon accent cards + ServiceCard item (window.ServicesGrid, window.ServiceCard)
    ├── FrameworkBar.jsx    ← ORBIT method letter chips (window.FrameworkBar)
    ├── ContactForm.jsx     ← input/composer — controlled fields, validation, success state (window.ContactForm)
    └── Footer.jsx          ← 4-column brand footer (window.Footer)
```

## How it composes

`components/App.jsx` reads the role components off `window` and stacks them inside a
sticky nav + scroll container: `components/NavBar.jsx` → `components/Hero.jsx` →
`components/ServicesGrid.jsx` → `components/FrameworkBar.jsx` →
`components/ContactForm.jsx` → `components/Footer.jsx`. Each component file assigns
both `window.<Name>` and `globalThis.<Name>` so Babel's per-script scopes can share
them, exactly as the Claude Design JSX-kit contract requires.

## Usage workflow

1. Read `../../DESIGN.md` and `../../colors_and_type.css` for tokens and rules.
2. Copy a role component as a starting point for a new surface; keep all values
   referencing CSS custom properties (no hardcoded hex / px).
3. Add the new component's `<script type="text/babel">` tag to `index.html` and
   compose it in `App.jsx`.
4. Reuse the real brand assets under `../../assets/` (icons, logos, backgrounds)
   rather than redrawing marks.

## Design notes

- **Dark-first.** The shell sets `data-theme="dark"`; switch to `light` for the
  warm cream alternate.
- **One accent.** Coral appears on the primary CTA, link underline, focus rings,
  and the eyebrow pill — nowhere else. Surfaces lift with the coral *glow*, not
  heavy shadows.
- **Fluid, not fixed.** Type and spacing use the `clamp()` tokens, so the layout
  flexes without hard breakpoints; media queries only restructure nav, services
  grid, framework, and footer.
- **Interaction fidelity.** `NavBar` toggles its scrolled style off the scroll
  container; `ContactForm` is a working form with inline validation and a success
  state — not a static mock.

## Source basis

Modeled on the shipped ORBTI site (`05-site/index.html` and `05-site/servicos/*.html`),
with component CSS preserved under `../../source_examples/design-system/`. See
`../../PROVENANCE.md` for the full evidence map.

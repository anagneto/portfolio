# Deck Design System

The approved visual vocabulary for the Happyfact deck. **Slides 1-10 are the approved bar.** Build every new or revised slide from these primitives instead of inventing one-off styling. Source of truth: `src/app/globals.css` (styles) + `src/slides.tsx` (components).

---

## Stage & slides

- Fixed **1280×720** design space (`.stage`), scaled to fit the viewport. Think in those pixels.
- Each slide is one `<section className="slide [variant]">`. Padding `80px 96px`. Default = left-aligned, vertically centered.
- **Variants** (space-separated string on the slide):
  - _none_ — standard content slide (left-aligned).
  - `center` — centered + `text-center` (cover, reframe, flow, close).
  - `section` — section divider, top-anchored, left-aligned (uses `SectionHead`).
  - `cover` — title slide (bigger h1, shimmer animation).
- Progress dots auto-render; `section` slides get a darker/taller dot.

## Type scale

| Use | Size | Notes |
|-----|------|-------|
| h1 (content) | `76px` | via `<h1>` or `ContentHead` (adds `mb-28`) |
| h1 (cover) | `88px` | |
| h1 (section) | `84px` | gradient, via `SectionHead` |
| h2 | `30px` | purple `#7c3aed` |
| Hero statement | `30-34px` | big in-slide claims, often `gradient-text` |
| Primary body / bullets | `22-26px` | dense content lands at 22-24 |
| Secondary / supporting | `18-20px` | usually `.dim` |
| Captions, sub-labels | `13-17px` | `.muted` or mono |

Headlines: `ContentHead` for standard slides (h1 + `mb-28`), `SectionHead` for dividers.

## Color & text helpers

- `--accent` pink `#f43f5e`, `--accent-2` purple `#9333ea`.
- `.gradient-text` — pink→purple gradient fill (headlines, emphasis words).
- `.dim` — secondary text `#565067`. `.muted` — tertiary `#8e88a0`.
- `<b>`/`<strong>` — auto-bumped to `--text-strong` (near-black).
- `<code>` — pink mono chip with tinted bg/border. Use for commands, file names, `/slash` commands.
- `.eyebrow` — mono, uppercase, tracked, pink. Part labels / kickers.

## Components (React — in `slides.tsx`)

Shared, prefer these over re-writing markup:

- **`Bullets({ items })`** — accent-dot bullet list, `space-y-8`. Default for prose bullet slides.
- **`RoleCard({ avatar, name, desc, n, delay })`** — team member card (avatar + number + name + desc), with reveal stagger.
- **`SectionHead({ part, title })`** — eyebrow + gradient h1 for `section` slides.
- **`ContentHead({ children })`** — standard slide h1 with bottom margin.
- **`CapabilityGrid`** — see "extracted components" below.
- **`TierGrid` / `Tier`** — comparison cards.
- **`StepFlow`** — numbered step cards with arrows.
- **`PillRow`** — wrapped mono tags (`variant="pill"` rect, `variant="chip"` rounded).
- **`SpecialistSlide`** — one team member: avatar + name + role header, its `CLAUDE.md` brief (left codeblock), 2-3 example prompts as callouts (right). Props: `avatar, name, role, path, brief[], prompts[]`.

## Components (CSS classes — in `globals.css`)

- **`.glass`** — the default card. Translucent white, subtle border + shadow, hover lift. Use for any boxed content.
- **`.tier`** / **`.tier.feature`** — comparison columns. `.feature` is the highlighted/destination column (gradient bg, lifted, pink border). Add `.tier-ribbon` for the "what this talk is built on" tag. Sub-parts: `.tier-emoji`, `.tier-name`, `.tier-sub`, `.tier-feats` with `.row` + `.mk` (✓ pink) / `.no` (› muted), `.tier-tag`.
- **`.pill`** — mono tag in a rounded rect. For skill/feature tag clouds.
- **`.spec-chip`** — softer rounded-full chip. For specialist/keyword chips on cover-style slides.
- **`.callout`** — quote box with left gradient bar. For pull-quotes.
- **`.codeblock`** — mono pre-block for folder trees / install snippets. `.c` = comment (muted), `.k` = keyword/dir (pink).
- **`.cap-icon`** — 52px rounded gradient icon badge.
- **`.cover-badge`**, **`.cover-rule`** — cover-only ornaments.

## Motion

- `.reveal` — fades + rises + blurs in. Add stagger with `.d1`–`.d6` (delays ~0.05s→0.74s).
- Cover h1 also shimmers (looping). Honors `prefers-reduced-motion`.

## Icons

`lucide-react`, sized `26-40px`, colored `var(--accent)` (use the `ACCENT` const). Examples in use: `FileText`, `Globe`, `MessagesSquare`, `ArrowRight`.

## Rules of thumb

1. One idea per slide, lots of whitespace.
2. Reach for an existing primitive first; only add CSS when nothing fits, and add it as a reusable class (not inline) so it joins this catalog.
3. Emphasis = `<b>` (strong color) or `.gradient-text` (key phrase). Don't stack both unless it's a hero line.
4. Cards are `.glass` by default; `.tier` only for side-by-side comparisons.
5. No em dashes in copy (Ana's rule). Commas, periods, parentheses.

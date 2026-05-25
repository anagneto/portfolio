# Claude Code for Leaders — talk deck

Scoped instructions for this talk. Applies when working in this folder. For the
portfolio app as a whole, see the portfolio root CLAUDE.md.

## What this is
A minimalist slide deck, "Claude Code for Leaders: Your Team of Specialists", a
~30-35 min guest talk by Ana Neto for **Happyfact** (a collective of fractional
Growth, Marketing & Operations leaders). It lives as a route inside the
portfolio Next.js app (it used to be a standalone deck; that's archived).

The narrative source (full speaker notes and rationale) now lives alongside this
deck at `./NARRATIVE.md` (moved here from `~/Personal Assistant/projects/happyfact/`).
There is also a Notion version in Ana's Personal Dashboard; it is currently stale
(describes the old standalone deck). If you change slide content, update
`NARRATIVE.md` too, and flag the Notion divergence.

## Where things are (all relative to this folder)
- `slides.tsx`   single source of truth for slide content (array of `{ variant?, node }`)
- `Deck.tsx`     renders slides, keyboard nav, progress dots, fixed 1280x720 scaled stage
- `deck.css`     all theme + component styling (imported by `page.tsx`)
- `CodeModal.tsx` "Full file" + Copy-to-clipboard modal (ExpandableCode)
- `ModeBadge.tsx` the plan/auto mode info badges
- `page.tsx`     route entry, imports `./deck.css`
- `DESIGN.md`    approved design vocabulary, build new slides from these primitives

Route: `/talks/claude-code-for-leaders`. Avatars: `public/avatars/*.svg`.

## Commands (run from the portfolio root, not here)
- `npm run dev` then open `/talks/claude-code-for-leaders` (portfolio dev port 3002)
- `npm run build` for a production build
- PDF: print the route from the browser (print CSS paginates each slide).

## The downloadable workspace (keep in sync with the slides)
The full copyable starter team lives at:
`public/talks/claude-code-for-leaders-workspace/my-work/`
It holds the root `CLAUDE.md`, six `team/<specialist>/CLAUDE.md` files, client
briefs, `practice/`, and `INDEX.md`. **The six specialist files MUST match the
`fullBrief` strings in `slides.tsx`** (the "Full file" modal shows that string,
and attendees download the workspace). Edit both, or flag the divergence.

## Design
- Minimalist, light background. Accents: pink `#f43f5e`, purple `#9333ea`.
  Big `h1` use a pink->purple gradient (`.gradient-text`); `h2` are purple.
- Fonts: Outfit (display/body), JetBrains Mono (code + eyebrows).
- One idea per slide, lots of whitespace. Section dividers use the `section`
  variant; the cover uses `cover center`. See `DESIGN.md` for the full catalog.

## Talk content rules (so edits stay on-message)
- **Core model:** ONE team of specialists, not a team per client. Specialists
  live under `team/`; each client is context under `clients/<name>/`, with that
  client's outputs co-located in their folder. Never frame it as a team per client.
- **The workflow** is always: 1) Gather context + state goal, 2) Plan (save it),
  3) Execute (`/clear`, run the plan).
- Claude Cowork is the honest easy on-ramp, Claude Code the power tool. Don't
  pretend Cowork doesn't exist.
- Audience is mostly **non-technical** leaders. Keep terminal detail light, lead
  with the "direct a team" framing.

## Writing style (Ana's preference)
- **No em dashes.** Use commas, periods, or parentheses instead.
- Concise and direct.

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
It holds the root `CLAUDE.md`, six `.claude/skills/<specialist>/SKILL.md` files,
a `clients/<name>/CLAUDE.md` per client, `practice/`, and `INDEX.md`. **The six
specialist files MUST match the `fullBrief` strings in `slides.tsx`** (the "Full
file" modal shows that string, and attendees download the workspace) — including
the YAML frontmatter (`name` + `description`) that makes each skill self-activate.
The slides show the clean path `skills/`; the real workspace must use
`.claude/skills/` so the skills actually load. Client context is a per-client
`CLAUDE.md` (NOT `brief.md`) so it auto-loads when you open that client's folder.
**Whenever you change client workflow, files, or the tree, regenerate the zip**
(`cd public/talks && rm -f claude-code-for-leaders-workspace.zip && zip -r
claude-code-for-leaders-workspace.zip claude-code-for-leaders-workspace -x
'*.DS_Store' '*__MACOSX*'`). Edit both, or flag the divergence.

## Design
- Minimalist, light background. Accents: pink `#f43f5e`, purple `#9333ea`.
  Big `h1` use a pink->purple gradient (`.gradient-text`); `h2` are purple.
- Fonts: Outfit (display/body), JetBrains Mono (code + eyebrows).
- One idea per slide, lots of whitespace. Section dividers use the `section`
  variant; the cover uses `cover center`. See `DESIGN.md` for the full catalog.

## Talk content rules (so edits stay on-message)
- **Core model:** ONE team of specialists, not a team per client. Each specialist
  is a **skill** (a `SKILL.md`) that self-activates on its `description`; shown as
  `skills/` on slides, really `.claude/skills/`. Skills walk up to the workspace
  root, so they follow you into every client folder. Each client is a folder with
  its own `CLAUDE.md` (voice, goals, current state). **To work on a client you
  open their folder; that `CLAUDE.md` auto-loads. You work from the root only for
  portfolio-wide tasks** (the chief-of-staff). Never frame it as a team per client.
  "Some skills you write, some you install" — the custom team and the pre-built
  marketplace are the same primitive.
- **Keep context fresh:** the loop is open the client folder → describe the task
  (the right skill activates) → save outputs in that folder → end by updating the
  client's `CLAUDE.md` + `INDEX.md`. The chief-of-staff owns weekly freshness.
- **The workflow** is always: 1) Gather context + state goal, 2) Plan (save it),
  3) Execute (`/clear`, run the plan).
- Claude Cowork is the honest easy on-ramp, Claude Code the power tool. Don't
  pretend Cowork doesn't exist.
- Audience is mostly **non-technical** leaders. Keep terminal detail light, lead
  with the "direct a team" framing.

## Writing style (Ana's preference)
- **No em dashes.** Use commas, periods, or parentheses instead.
- Concise and direct.

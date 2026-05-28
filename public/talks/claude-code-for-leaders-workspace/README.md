# Example workspace — "Your team of specialists"

This is a ready-to-copy starter for the setup in the talk *Claude Code for
Leaders*. It's a fractional growth leader's workspace: one shared team of AI
specialists, client work co-located per client, and a space for your own practice.

## Use it
1. Copy `my-work/` somewhere on your computer (rename it to your business).
2. Open the folder in Claude Code (or Claude Cowork).
3. Edit `my-work/CLAUDE.md` and `practice/positioning.md` to be about you.
4. Replace the Acme and Globex `CLAUDE.md` files with your real clients.
5. To work on a client, open their folder (e.g. `clients/acme/`). Their
   `CLAUDE.md` loads automatically and your skills come with you. Then give one
   real task, using Gather → Plan → Execute. Describe the task and the matching
   specialist activates itself, no need to pick one.

## Structure
```
my-work/
  CLAUDE.md            how your team works (loads every session)
  INDEX.md             one map of every deliverable
  .claude/skills/      shared specialists, each a skill with its own SKILL.md
    researcher/  strategist/  copywriter/
    brainstorm/  chief-of-staff/  analyst/
  clients/             one folder per client: open the one you're on
    acme/    CLAUDE.md (loads here) + research/ strategy/ copy/ reports/
    globex/  CLAUDE.md + research/ strategy/ copy/ reports/
  practice/            your own business (not a client)
    positioning.md  pipeline.md  planning/  content/
```

## How it works
- **Specialists are skills.** Each is a folder with a `SKILL.md` whose
  `description` line makes it self-activate when your task matches. The slides
  show the clean path `skills/`; here it's the real `.claude/skills/` so Claude
  loads them. Because skills are found by walking up to the workspace root, they
  are available inside every client folder, no duplication.
- **Each client is a folder with its own `CLAUDE.md`.** Open the client you're
  working on and that file loads automatically, so every specialist starts
  knowing the client. Work from the root only for portfolio-wide tasks.
- **Keep it current.** End each task by updating that client's `CLAUDE.md` and
  adding a line to `INDEX.md`. Because the client `CLAUDE.md` auto-loads, the
  update is live the very next session. The chief-of-staff owns this freshness.

These specialist files are the same ones shown in the deck under "Full file" —
copy them as-is, then tune the rules to how you work.

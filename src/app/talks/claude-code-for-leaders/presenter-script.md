# Live Demo — Presenter Script

**Goal:** From a blank machine to running your first prompt in Claude Code, live.
**Platform on stage:** macOS · **Install method:** native installer · **First prompt:** `/init`
**Rough runtime:** 6–9 minutes

> The setup zip is the talk's starter workspace, served from the deck:
> `/talks/claude-code-for-leaders-workspace.zip`. Attendees grab it from the
> **"Grab the starter workspace"** button on the closing slide (which also has a
> **"Setup instructions"** button that shows the audience handout in a modal).
> Folder used throughout this script: `claude-demo`.

---

## 0. Pre-flight checklist (do this BEFORE you go on stage)

Live installs fail in front of crowds for boring reasons. Knock these out first:

- [ ] **Terminal font is big.** Bump to ~18–22pt so the back row can read it. (Terminal → Settings → Profiles → Font)
- [ ] **Clean terminal window.** New window, no scrollback clutter, prompt at the top.
- [ ] **Internet works on venue wifi** (the installer + login both need it). Have a phone hotspot as backup.
- [ ] **Pre-download the starter workspace zip** to `~/Downloads/` so you're not waiting on a download live. The audience grabs it from the closing slide's button.
- [ ] **Decide your login story.** First `claude` run opens a browser to sign in (~30s).
  - *Option A (show it):* Be logged OUT so the audience sees the real flow. More authentic, slightly riskier.
  - *Option B (safe):* Be logged IN already so `claude` drops straight into a session. Recommended if wifi is shaky.
- [ ] **Test the whole flow once on this exact machine** the morning of. If `claude` isn't found after install, you'll know to open a fresh tab (see Gotchas).
- [ ] **Have a Finder window ready** on the Desktop for the manual folder-creation bit.
- [ ] **Delete any leftover `claude-demo`** folder from rehearsals so `mkdir` doesn't look weird.

---

## 1. Open the terminal

**DO:** `Cmd + Space`, type `Terminal`, hit Enter.

**SAY:**
> "Everything we do today happens in the terminal. Don't be scared of it — it's just a place to type commands. I'll go slow."

**ON-SCREEN:** A fresh terminal prompt.

---

## 2. Create the project folder — *two ways*

You're showing both because half the audience thinks in commands and half thinks in Finder.

### Way 1 — the command

**DO:**
```bash
mkdir ~/Desktop/claude-demo
cd ~/Desktop/claude-demo
```

**SAY:**
> "`mkdir` = make directory. I'm creating a folder called `claude-demo` on my Desktop. Then `cd` — change directory — to step inside it. Now my terminal is *working from inside* that folder."

**ON-SCREEN:** Prompt now shows `claude-demo`.

### Way 2 — manually in Finder

**DO:** Switch to the Finder window on the Desktop → right-click → **New Folder** → name it. Then show it's the same folder.

**SAY:**
> "Same thing, no typing. Right-click, New Folder. The terminal and Finder are looking at the exact same place — two doors into the same room."

**ON-SCREEN:** New folder appears on Desktop next to the one you made with `mkdir`.

> Tip: make the Finder one a *different* name (e.g. `claude-demo-2`) so it's obviously a second folder, then `cd` back into your real `claude-demo` for the rest of the demo.

---

## 3. Install Claude Code (native installer)

**DO:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**SAY:**
> "One line. This downloads and installs Claude Code. No Node, no setup — the installer handles everything. This is the official command from Anthropic."

**ON-SCREEN:** Install progress, then a success message.

**Verify it worked:**
```bash
claude --version
```

**SAY:**
> "And there's the version number — it's installed."

> ⚠️ **Gotcha:** if `claude` says *command not found*, open a **new terminal tab** (`Cmd + T`), `cd ~/Desktop/claude-demo`, and try again. The installer adds `claude` to your PATH, which a fresh tab always picks up. (No full restart needed.)

---

## 4. Add your setup

Your zip is already in `~/Downloads/` from pre-flight. Show *both* the drag way and the command way if you like — drag reads better on stage.

### Drag way (Finder)
**DO:** Open `~/Downloads`, double-click `claude-code-for-leaders-workspace.zip` to unzip, drag the unzipped contents **into** the `claude-demo` folder.

### Command way
**DO:**
```bash
unzip ~/Downloads/claude-code-for-leaders-workspace.zip -d ~/Desktop/claude-demo
```

**SAY:**
> "This is my setup — a folder of skills and config I've built up. Dropping it in means Claude starts this project already knowing my workflows, instead of from zero."

**ON-SCREEN:** Confirm the files landed:
```bash
ls -a
```
> You should see the `.claude` folder (and whatever else is in the zip). The `-a` flag shows hidden folders — `.claude` starts with a dot, so it's hidden by default.

> ⚠️ **Confirm before the talk** exactly what's in the zip and where it should go. If it unzips into a *subfolder* (e.g. `setup/.claude`), adjust the path so `.claude` ends up at the root of `claude-demo`.

---

## 5. Start Claude Code

**DO:**
```bash
claude
```

**SAY:**
> "Now I just type `claude` and it starts up *inside this folder* — so it has access to everything we just put here."

**ON-SCREEN / first-run flow (warn the room what they'll see):**
1. **Browser login** opens (if you chose Option A). Sign in to your Anthropic account, come back to the terminal. (~30s)
2. **Welcome screen** with session info and command hints.
3. Theme defaults to auto — no picker to deal with.
4. Claude will ask permission as it needs to touch files — there's no scary upfront "trust this folder" wall.

**SAY (while the browser does its thing):**
> "First time only, it opens the browser so I can log in. After this it just remembers me."

---

## 6. Run the first prompt — `/init`

**DO:** Inside the Claude session, type:
```
/init
```

**SAY:**
> "`/init` is my first prompt. Watch — Claude reads through the whole project, figures out what it is, and writes itself a `CLAUDE.md` — basically a notes file so it remembers how this project works every time I come back. I didn't tell it anything; it figured it out."

**ON-SCREEN:** Claude explores files, then writes `CLAUDE.md`. Open it / show it.

**CLOSER:**
> "That's it. Blank folder to an AI that understands my project, in under ten minutes. From here I just talk to it in plain English."

---

## Quick command reference (for your confidence monitor)

```bash
# 1. folder
mkdir ~/Desktop/claude-demo && cd ~/Desktop/claude-demo

# 2. install
curl -fsSL https://claude.ai/install.sh | bash
claude --version

# 3. setup
unzip ~/Downloads/claude-code-for-leaders-workspace.zip -d ~/Desktop/claude-demo
ls -a

# 4. run
claude
#   then inside the session:
/init
```

## If something breaks live (recovery lines)

- **Install hangs / wifi dies:** "Live demos, everyone's favorite. Let me switch to my hotspot." → switch, re-run the curl line.
- **`command not found: claude`:** "Just needs a fresh tab to see it." → `Cmd+T`, `cd` back, retry.
- **Login won't complete:** Fall back to the pre-logged-in machine/window you prepared.
- **Total failure:** Have a screen recording of the full flow queued as a backup. Narrate over it.

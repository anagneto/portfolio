# Claude Code for Leaders: Your Team of Specialists

**Talk for Happyfact** (collective of fractional Growth, Marketing & Operations leaders)
**Format:** ~30 to 35 minutes, slide-by-slide content.
**Built deck:** This is now a live Next.js deck inside Ana's portfolio at the route `/talks/claude-code-for-leaders` (source: `portfolio/src/app/talks/claude-code-for-leaders/`, single source of truth `slides.tsx`). It used to be a standalone deck (Slidev, then a separate Next app); that's archived at `~/Work/Archive/happyfact-talk/`. This md is the narrative source; if you change slide content, keep them in sync.
**Starter workspace:** Attendees can download a ready-to-copy team at `/talks/claude-code-for-leaders-workspace.zip` (also linked from the `/talks` index and the closing slide). Source: `portfolio/public/talks/claude-code-for-leaders-workspace/`.
**Speaker:** Ana Neto (guest)
**Audience:** Senior fractional leaders, mostly non-technical, action-oriented, embedded in startups and scaleups, familiar with OKRs and the MOKAS framework.

> How to read this doc: each slide has **On slide** (what the audience sees, keep it sparse) and **Speaker notes** (what you say). Timings are a guide, not a script.

> **Core model (read first):** There is **one team** of specialists, not a team per client. Each specialist is a **skill** (a folder with a `SKILL.md`) that lives once and self-activates when a task matches its `description`. Skills are found by walking up to the workspace root, so they follow you into every client folder. Each client is a folder with **its own `CLAUDE.md`** (voice, goals, current state). To work on a client you **open their folder**: their `CLAUDE.md` loads automatically and your skills come along. You work from the root only for portfolio-wide tasks.
> ```
> my-work/
>   CLAUDE.md            <- how your team works (always loaded)
>   skills/              <- one SKILL.md per specialist (shown clean; really .claude/skills/)
>     researcher/        <- each specialist self-activates on its description
>     copywriter/
>     strategist/
>     chief-of-staff/
>   clients/
>     acme/CLAUDE.md     <- this client's context, auto-loads when you open the folder
>     globex/CLAUDE.md
>   INDEX.md             <- one map of every saved output
> ```

---

## Slide 1: Title

**On slide:**
- **Claude Code for Leaders**
- Subtitle: Stop being a team of one. Run a team of specialists.
- Your name, "Guest session for Happyfact"

**Speaker notes:**
Open warm and human. "I'm not here to turn you into engineers. I'm here to show you a tool I use every single day to run more projects than one person should reasonably be able to. By the end you'll see Claude Code not as a coding tool, but as a team of specialists you direct." Set the promise, then move fast.

*(~30 sec)*

---

## Slide 2: The leader's bottleneck

**On slide:**
- You're senior. You're embedded. You own outcomes.
- But you're effectively a **team of one**.
- Research, strategy decks, copy, competitor teardowns, meeting prep, follow-ups, all you.
- The work always outpaces the hours.

**Speaker notes:**
Name their reality. Fractional leaders are hired to move fast and own results, but they don't get a team handed to them. Every deliverable, the research behind it, and the admin around it lands on one person, often across several clients at once. The constraint is never ideas. It's throughput. Ask the room: "How many of you wish you could clone yourself for the grunt work?" Hands go up. That's the setup.

*(~1 min)*

---

## Slide 3: The reframe

**On slide:**
- What if you had a **team of specialists**...
- ...available on day one...
- ...that you direct like any team you've led?
- A researcher. A strategist. A copywriter. A brainstorm partner. A chief of staff.

**Speaker notes:**
This is the whole talk in one slide. Claude Code lets you stand up a team of specialists in minutes, and direct them the way you'd direct people: give them context, give them a brief, review their work. One team that serves all your clients. The rest of the session is how. Pause here. Let the reframe land before you touch any "how."

*(~1 min)*

---

# Part 1: The mindset shift

---

## Slide 4: What Claude Code actually is

**On slide:**
- An AI assistant that runs in your **terminal**.
- It can read your files, write documents, search the web, and connect to your tools.
- "It happens to be great at code. But it's just as good as a **knowledge worker**."
- Visual: simple terminal window, not scary.

**Speaker notes:**
Bust the myth immediately. Yes, it was built for developers, and yes the name says "Code." But underneath it's a general-purpose AI that can read and write any document, do research, analyze a spreadsheet or PDF, and take actions on your behalf. The terminal looks intimidating for about ten minutes, then it disappears. You type in plain English. Reassure them: "If you can write a Slack message, you can drive this."

*(~1.5 min)*

---

## Slide 5: Why Claude Code, and not the Claude app or Cowork?

**On slide:**
- **The chat app** is a conversation. Great for a quick question, forgets when you close the tab.
- **Claude Cowork** is the easy on-ramp: same engine, on your desktop, no terminal. Great for one-off "go do this for me" tasks.
- **Claude Code** is the power tool, where you build a team that *lasts*:
  1. **Persistent context + memory** — it reads your real files and remembers your clients across sessions.
  2. **It acts, it doesn't just talk** — saves docs, edits files, connects to Notion, runs multi-step work.
  3. **Repeatable specialists, skills & automation** — set up once, reuse forever.

**Speaker notes:**
Answer the two questions everyone is silently asking. First, "I already chat with Claude or ChatGPT, why a terminal?" The chat window is a single conversation that starts from zero each time. Second, and be honest here, "what about Claude Cowork?" Cowork is genuinely great and it's probably the easiest starting point for this room: it's the same underlying agent, on your desktop, no terminal, and it can work across your files and apps. If the terminal scares you, start with Cowork. The reason to graduate to Claude Code is permanence and control: you build a real team with their own briefs, you accumulate **memory** about each client, you install skills, and you can automate. Cowork does a task. Claude Code becomes a system you keep. Frame it as a spectrum, not a competition.

*(~2 min)*

---

## Slide 6: From doing the work to directing a team

**On slide:**
- Old model: you do the work.
- New model: you **direct** the work.
- Your value moves up: judgment, taste, the brief, the review.
- The leader's job, applied to an AI team.

**Speaker notes:**
This is the emotional core for a leadership audience. You already know how to get great work out of a team: give them context, a clear brief, and honest feedback. Those exact skills are what make you good at this. You're not learning to code. You're managing a team that happens to be made of AI specialists. The better your brief and your review, the better the output. Garbage brief, garbage deliverable, same as with people.

*(~1 min)*

---

## Slide 7: Meet your team

**On slide:**
- **The Researcher** — market, competitors, audience, trends.
- **The Strategist** — OKRs, MOKAS, positioning, plans.
- **The Copywriter** — landing pages, emails, ads, posts.
- **The Brainstorm Partner** — pressure-tests your thinking.
- **The Chief of Staff** — meeting prep, planning, tasks, follow-ups.
- **The Analyst** — reads your data, spreadsheets, reports.
- Visual: six role cards / avatars.

**Speaker notes:**
Introduce the cast. Every one of these is the same underlying tool, pointed at a different job with a different brief. One team, shared across all your clients. You'll see how to set each one up in a moment. Tell them you'll come back to these roles with concrete examples later, so they should be thinking "which of these would save me the most time this week?" Plant that question now.

*(~1 min)*

---

# Part 2: How to run your team

---

## Slide 8: Give your team a brief (CLAUDE.md)

**On slide:**
- `CLAUDE.md` = your team's **operating manual**, read automatically every session.
- What goes in it:
  - How you work and what you value
  - Who your specialists are
  - Your standing rules (always plan first, always save outputs)
- Each specialist is a **skill** (a `SKILL.md`); its `description` makes it self-activate. You describe the task, not the teammate.

**Speaker notes:**
The single most important practical idea. A plain text file called CLAUDE.md sits in your workspace, and Claude reads it automatically every time you start. Think of it as the operating manual for your whole team: how you like to work, who the specialists are, your house rules. This is team-level, not client-level. Then each specialist is a skill: a small folder with a SKILL.md brief. The magic is one line at the top, the `description` — that's how Claude knows to reach for the copywriter when you say "draft the landing page." You don't pick the specialist, you describe the task and the right one shows up. Keep CLAUDE.md concise, it loads every session, so link to detail rather than pasting everything in. Client detail lives somewhere else, which is the next slide.

*(~1.5 min)*

---

## Slide 9: Specialists are skills that self-activate

**On slide:**
- Each specialist = a skill: a folder (shown as `skills/`, really `.claude/skills/`) with its own `SKILL.md`.
- That brief gives it identity, tone, and what to focus on; the `description` line makes it discoverable.
- You don't open a folder, you describe the task and the matching skill activates.
- Visual: the `skills/` tree (researcher / copywriter / strategist / chief-of-staff).

**Speaker notes:**
Here's how the team exists on your machine. Each role is a skill: a small folder with a SKILL.md that says who it is, its tone, the references it should lean on, where to save work. The first line, the `description`, is what makes it work like a real teammate: when you say "draft Acme's pricing page," Claude sees the copywriter's description matches and reaches for it automatically. You don't switch specialists by opening folders, you just describe the work. Show the tree visually so non-technical folks see it's just nested folders, nothing exotic. Two things to land: this is **one** team you build once, not a new team per client, and it's the same primitive as the pre-built skills coming up in a few slides, some you write, some you install.

*(~1.5 min)*

---

## Slide 10: Your clients are context, not separate teams

**On slide:**
- One team. Many clients.
- Each client is a folder with its own `CLAUDE.md` (voice, goals, current state).
- **Open the client you're working on** and their `CLAUDE.md` loads itself; your skills come with you. Work the root for the whole portfolio.
- End every task by updating that client's `CLAUDE.md`, so it stays current.

**Speaker notes:**
This is the structural idea that keeps you sane across multiple engagements. You do not clone your whole team for every client. You keep one team, and each client is just a folder with its own CLAUDE.md: who they are, their positioning, their goals, their current priorities. The trick: when you sit down to work on Acme, you open Acme's folder. That CLAUDE.md loads automatically, so every specialist already knows the client, and because skills are found by walking up to the root, your whole team is right there with you. No "remember to load the brief." For work that spans clients, like planning your week, you stay at the root and the chief-of-staff reads across all of them. The expertise is reusable, the context is swappable, and each client folder becomes a tidy knowledge asset you can hand over at the end. One more habit to plant here: the last step of any task is updating that client's CLAUDE.md, because it auto-loads next time, so the update is immediately live.

*(~1.5 min)*

---

## Slide 11: The controls (essential slash commands)

**On slide:**
- Type `/` to see commands. The ones that matter:
  - `/init` — auto-create a CLAUDE.md for a folder
  - `/clear` — wipe the conversation, start fresh
  - `/compact` — compress to free up memory
  - `/memory` — edit your briefs
  - `/model` — switch between deeper vs faster AI
- These are how you **steer**, not features to memorize.

**Speaker notes:**
Slash commands are the dashboard controls. You only need a handful. /init writes you a starter brief. /clear gives a specialist a clean desk between unrelated tasks, which matters more than people expect. /model lets you pick a deeper thinker for strategy or a faster one for quick jobs. Tell them not to memorize the list, just know the dashboard exists and they'll learn the five they use. Full reference is in the appendix.

*(~1.5 min)*

---

## Slide 12: Hire pre-built specialists (the skills marketplace)

**On slide:**
- Your specialists **are** skills. Some you write, some you install.
- **Skills** = installable, ready-made expert playbooks.
- Real marketing examples that already exist:
  - Copywriting, SEO audit, content strategy
  - Pricing strategy, cold email, customer research
  - Ad creative, landing page / conversion optimization
- Drop one in, and your team gains an instant expert.

**Speaker notes:**
This slide tends to get the room excited, so give it room to breathe. The key line: the specialists you just wrote and these pre-built ones are the **same thing**, both skills. The difference is only who authored them. So beyond the roles you write yourself, there's a marketplace of pre-built skills: structured playbooks an expert has already encoded. Need a competitor comparison page, a pricing analysis, a cold email sequence, a customer research synthesis? There's likely a skill for it. You drop it in and your team can run that play to a professional standard, even in an area you personally know less well. Native commands are the controls, skills are specialists you hire on demand. Note for accuracy: skills come from Anthropic and from community marketplaces, quality varies, so treat a new skill like a new contractor and check its first output.

*(~2 min)*

---

## Slide 13: The flow that always works

**On slide:**
- Three steps, every time, for anything that matters:
  1. **Gather + goal** — collect the context, state what you actually want.
  2. **Plan** — let it propose a plan. Save it. Review and steer.
  3. **Execute** — `/clear`, hand it the agreed plan, let it produce the output with a clean head.
- Visual: three boxes, Gather to Plan to Execute.

**Speaker notes:**
If they remember one working habit, make it this. The AI has a limited working memory. If you make it gather, think, and write all in one messy conversation, the output suffers. So work in three clean moves. First, give it the context and state the goal clearly. Second, have it write a plan you can review and edit, this is where you steer before any real work happens. Third, clear the slate and let it execute the agreed plan into a clean deliverable. This is exactly how you'd brief a person: align on the plan before they spend a day writing. It feels slower for two minutes and saves you an hour.

*(~1.5 min)*

---

## Slide 14: Shared memory (save everything + a docs index)

**On slide:**
- Tell it to **save to a file**. Screen output disappears, files don't.
- Keep one `INDEX.md` listing every document.
- Two kinds of memory:
  - **Briefs** (CLAUDE.md) — what you write.
  - **Memory** — durable facts it remembers about you and your clients.
- The index is memory for you **and** for the team.

**Speaker notes:**
Two small habits that compound, plus a clarification. First, always have it save outputs to files, never just print to the chat, because the chat is gone when you close it. Second, keep an index of everything you've produced, so any specialist can be pointed at the index and instantly know what already exists for that client. On memory: distinguish the brief you write (CLAUDE.md) from the accumulated memory the tool keeps, the durable facts it learns about how you work and about your clients. Over a few weeks this becomes a real, reusable knowledge base.

*(~1.5 min)*

---

## Slide 15: Meet them where you work (connect your tools)

**On slide:**
- Claude Code connects to external tools (the plumbing is called **MCP**).
- **Notion** (most useful for us): create pages, manage tasks, search your workspace.
- **Web browsing**: it can search the web, open live pages, pull facts, even screenshot a competitor's page.
- **Slack** and more: read a channel, summarize a thread, draft a reply.

**Speaker notes:**
Your specialists don't live in a silo. Through connections (the technical name is MCP, you can forget it) Claude Code can work inside the tools you already use. Notion is the big one for us: "draft the strategy doc and add the three follow-up tasks to the client's Notion board" is one instruction. On web browsing, since people ask: it can search the web and also open and read live pages, so it can pull current facts, check a competitor's actual live site, grab a screenshot, and even fill in forms. On Slack, even if you don't use it: it can read a channel, summarize a long thread you missed, or draft a reply for you to send. The point of the slide is simply "it plugs into your stack," keep the setup detail light.

*(~1.5 min)*

---

# Part 3: A week with your team

> Each of these is one concrete, relatable example. Show a real prompt on screen where useful. Move briskly, this part should feel like "oh, I'd use that on Monday." All examples follow the Gather to Plan to Execute flow from Slide 13.

---

## Slide 16: Monday, the Strategist

**On slide:**
- 0. Open Acme's folder (their CLAUDE.md loads itself).
- 1. "Look at last quarter's results." (gather + goal)
- 2. "Draft a plan for refreshed MOKAS objectives and key results. Save the plan." (plan)
- 3. `/clear` "Execute the plan into a clean strategy doc." (execute)
- Output: a reviewable strategy draft, not a blank page.

**Speaker notes:**
Start the week with strategy, and use it to model the three-step flow live on the slide. First open Acme's folder, so their CLAUDE.md is already loaded and the strategist isn't starting cold. State the goal, it proposes a plan, you edit, then it executes. This is the flow applied to your highest-value work: it does the structure and the legwork, you bring the judgment that earns your fee. Tie explicitly to MOKAS since this audience lives in it.

*(~1.5 min)*

---

## Slide 17: The Researcher

**On slide:**
- "Find this client's top 5 competitors. Build a comparison table: positioning, pricing, key claims."
- "Summarize what target buyers complain about in reviews and forums."
- Hours of tab-hopping, compressed to minutes.

**Speaker notes:**
Research is the most universally painful task and the easiest win. Competitor teardowns, audience and review mining, market sizing, trend scans. It searches the web, opens real pages, and hands you a structured table or summary you can drop into a deck. Reinforce: always sanity-check the facts, you're the editor. But the blank-page-to-first-draft time goes from a day to a coffee break.

*(~1.5 min)*

---

## Slide 18: The Copywriter

**On slide:**
- "Using this client's tone of voice, write a landing page for X. Three headline options."
- "Draft a 4-email nurture sequence for this audience."
- "Give me 10 ad variations to test."
- On-brand because the client's CLAUDE.md was already loaded.

**Speaker notes:**
The copywriter reads the client's context and tone of voice, so output sounds like the client, not like generic AI. This is volume work where speed compounds: variations to test, first drafts to react to, the boring-but-necessary email flows. You stay the editor and the taste. Note honestly: the first draft is rarely the final, but starting from a solid draft beats starting from nothing every time.

*(~1.5 min)*

---

## Slide 19: The Chief of Staff

**On slide:**
- **"I'm stressed this week!!! Help me get a grip."**
- "Plan my week across all three clients. What's slipping?"
- "Turn my call notes into a summary with action items."
- "Add these tasks to the client's Notion board."
- The admin that eats your edges, handled.

**Speaker notes:**
This is the role that gives you your evenings back, and it's also the one that picks you up on a bad day. Open it with the human moment: sometimes you sit down overwhelmed, three clients, a dozen open loops. You can literally say "I'm stressed this week, help me get a grip," and have it lay out everything on your plate, what's actually urgent, and what to drop. Then the practical stuff: meeting notes into clean summaries with owners and dates, weekly planning across clients, turning decisions into Notion tasks. Personal aside optional: mention you run your own assistant this way day to day, it makes it real.

*(~1.5 min)*

---

## Slide 20: Client-ready deliverables

**On slide:**
- Your output is what clients see. Claude Code produces **finished artifacts**, not just chat.
- Formatted reports and docs, polished one-pagers, even simple HTML pages or PDFs.
- "Turn the research into a clean, branded one-page summary I can send the client."
- From raw thinking to something you'd put your name on.

**Speaker notes:**
Close Part 3 on the thing that matters most to a fractional leader: the deliverable. Because everything is saved to files and it can format properly, you can ask for a polished, shareable artifact: a clean report, a tidy one-pager, a simple web page or PDF. So the chain is research, to strategy, to copy, to a client-ready document, all inside one tool. This is the difference between "I used AI to help me think" and "I used AI to ship the deliverable." For people judged on output, that's the punchline.

*(~1.5 min)*

---

# Part 4: Best practices

---

## Slide 21: Manage context and avoid content rot

**On slide:**
- The AI's working memory is **finite**. Keep it clean.
  - `/clear` between unrelated tasks. `/compact` to compress mid-task.
  - Keep CLAUDE.md lean, link to detail instead of pasting it.
- **Watch for content rot.**
  - A stale client `CLAUDE.md` quietly misleads every specialist who opens that folder.
  - End each task by updating it (the chief-of-staff owns this).

**Speaker notes:**
Two practices that separate people who love this tool from people who get frustrated. First, manage the context window. It has finite working memory, so clear it between unrelated jobs and compact it when a session gets long. Keep your CLAUDE.md files lean. Second, and this is the one people forget: content rot. Each client's CLAUDE.md auto-loads when you open their folder, which is exactly why a stale one is dangerous: an out-of-date "current priorities" line will confidently steer your whole team wrong, every session, until you fix it. Treat your context like a garden, a few minutes of weeding keeps the whole system trustworthy. Make updating that client's CLAUDE.md and the index the last step of meaningful work, and let the chief-of-staff sweep them weekly.

*(~1.5 min)*

---

## Slide 22: Let it coach you (/insights)

**On slide:**
- `/insights` reviews your **last 30 days** of sessions (all local, private).
- It shows where you hit friction and what's slowing you down.
- It even suggests improvements to your CLAUDE.md briefs.
- Run it monthly. Your team gets better because you do.

**Speaker notes:**
A genuinely underused feature. Run /insights and it analyzes your own usage over the last month, entirely on your machine, nothing leaves your computer. It tells you where you keep hitting friction, which tasks eat your time, and it suggests concrete improvements to your briefs. It's like a retro on how you work with your team. Make it a monthly habit. The whole system compounds: better briefs, better skills, less friction, every month.

*(~1.5 min)*

---

# Part 5: Getting started and close

---

## Slide 23: Start this week

**On slide:** (this slide is a click-through accordion in the built deck)
- Reframe up top: **"The terminal is just a text box. You type in plain English, not code."**
- **1. Install it** - a 5-minute, one-time setup, or open Cowork (no install). Expands to the native install line; "Show me exactly" opens a zero-to-one walkthrough (open Terminal on Mac/Windows, paste, log in once).
- **2. Set up your team** - a short CLAUDE.md + one skill (a `SKILL.md`). "Show me exactly" shows a real CLAUDE.md plus where skills actually live (`.claude/skills/`) and a minimal SKILL.md.
- **3. Give one real task** - using Gather to Plan to Execute. "Show me exactly" shows a worked first prompt.
- Footer: Don't build the whole system. Get one win. (Too much? Open Cowork first.)

**Speaker notes:**
Lower the activation energy, and lower the fear first. Most of this room has never opened a terminal, so the slide leads by de-scaring it ("just a text box, plain English") and keeps a Cowork escape hatch on both ends. Nobody should leave planning to build an elaborate system. The path to belief is one real win: install (or start with Cowork), write a few lines of team context, set up one specialist, and hand it one task you'd otherwise do tonight. Each step is collapsed by default; click one open as you talk it through, and use the "Show me exactly" detail only if the room wants it. Tell them they can download the whole starter team (link on the closing slide and the /talks page) so they don't have to build it from scratch. The clients folder and the rest can grow later.

*(~1 min)*

---

## Slide 24: What to watch for

**On slide:**
- **Verify the facts.** It's confident even when it's wrong. You're the editor.
- **Context in, quality out.** A thin brief gives thin work.
- **Keep context fresh.** A stale client `CLAUDE.md` misleads the team (content rot).
- **You're still accountable.** It's your team, your name on the deliverable.

**Speaker notes:**
Be honest so you're credible. It can state wrong things confidently, so treat outputs like a sharp junior's first draft: fast, useful, needs a check. The quality of what you get tracks the quality of the brief you give, and that brief has to stay current. And accountability never transfers, the client hired you, not the tool. Framing this as "managing a talented but junior team" keeps expectations right and actually makes them more effective with it.

*(~1 min)*

---

## Slide 25: Close

**On slide:**
- You're still the leader.
- Now you have a team.
- The bottleneck wasn't your ideas. It was throughput.
- Big closing line: **"Stop being a team of one."**
- Your contact / where to find the skills and docs.

**Speaker notes:**
Return to the opening. The constraint was never your thinking, it was how much one person can output. Claude Code doesn't replace the leader, it gives the leader leverage. End on the team-of-one line and invite questions. The final "Thank you" slide has a "Grab the starter workspace" button (the same .zip is on the /talks page), so point them there. Confident, warm, done.

*(~1 min)*

---

# Appendix (reference slides, show only if asked)

---

## Appendix A: Install

**On slide:**
- Mac / Linux: `curl -fsSL https://claude.ai/install.sh | bash`
- Windows (PowerShell): `irm https://claude.ai/install.ps1 | iex`
- Needs a Claude subscription or API key. First run walks you through sign-in.
- Start: `cd` into your workspace folder, then `claude`
- No terminal yet? Try **Claude Cowork** on the desktop app first.

---

## Appendix A2: The terminal is just two commands

**On slide:**
- Three cards: `cd acme` (go into a folder), `ls` (see what's inside), `cd ..` (go back up).
- Each mapped to what it is in Finder (double-click, look in the window, back button).
- The only rule: work on one client, go into (`cd`) their folder; plan across all, stay in the top folder. In Cowork, click "Work in a Folder."

**Speaker notes:**
A confidence slide for anyone the terminal scares. The whole message: you already know how to do this, it's just clicking folders. Going into a folder is `cd`, looking at what's inside is `ls`, backing out is `cd ..`. That's the entire vocabulary you need. Keep it light and fast. If someone asks "where do I actually work?", this is your answer: one client, go into their folder; whole portfolio, stay at the top. Pull it up on demand if the room looks nervous about the terminal during the getting-started section.

*(~1 min)*

---

## Appendix A3: Start with Claude Cowork

**On slide:**
- Four numbered steps: 1) Download the Claude app at claude.com/download, open the Cowork tab. 2) Click "Work in a Folder," pick your folder, allow access. 3) Describe the task in plain English. 4) Claude shows a plan, you approve, it runs.
- Footnote: open Customize to add connectors (Notion, Slack, Drive) and skills. Needs a paid plan.

**Speaker notes:**
This is the escape hatch for anyone the terminal lost. Same Claude, normal app window, no install scripts. The flow mirrors what they just learned: instead of typing `cd` you click "Work in a Folder," then you describe the task exactly the same way. Two honest notes: Cowork needs a paid plan, and the deeper workspace setup (shared skills, a CLAUDE.md per client folder) is cleanest in Claude Code, so frame Cowork as the friendly on-ramp, not the final home. Pull this up if hands go up during getting-started.

*(~1 min)*

---

## Appendix B: Slash command cheat sheet

**On slide:**
| Command | What it does |
| --- | --- |
| `/help` | Show all commands |
| `/init` | Auto-create a CLAUDE.md for this folder |
| `/clear` | Wipe conversation, start fresh |
| `/compact` | Compress conversation to free memory |
| `/memory` | Edit your CLAUDE.md briefs |
| `/model` | Switch AI model (deeper vs faster) |
| `/mcp` | Manage tool connections (Notion, etc.) |
| `/insights` | Analyze your last 30 days and suggest improvements |
| `/cost` | See token usage and cost |

---

## Appendix C: Keyboard shortcuts

**On slide:**
- `Escape` — stop mid-response
- `Esc` `Esc` — undo / rewind
- `Ctrl+C` — cancel
- `Ctrl+V` — paste an image (screenshots work)
- `Up` / `Down` — scroll previous prompts

---

## Appendix D: Where to find skills

**On slide:**
- Type `/` in a session to see what's installed.
- Skills come from Anthropic and from community marketplaces.
- Treat a new skill like a new contractor: check its first output.
- Useful marketing-adjacent skills exist for copywriting, SEO, pricing, cold email, customer research, ad creative, and conversion optimization.

---

*Notes for Ana, not for slides:*
- *Now ~25 content slides, roughly 32 to 35 minutes. If you need a tight 30, trim Part 3 to your two strongest specialist examples (Strategist + Chief of Staff).*
- *Structure is one team + a `clients/` folder (see the top of this doc). Slides 8, 9, 10 set it up; Part 3 examples all assume it.*
- *Cowork is handled honestly on Slide 5 as the easy on-ramp, and referenced again on Slides 23 and Appendix A. If most of the room is very non-technical, you could even open the Q&A with "start with Cowork tonight."*
- *No live demo in this version. If you want one later, the natural moment is Slide 16: open a real client's folder, then run the Strategist through Gather to Plan to Execute.*
- *The MOKAS references (Slides 3, 7, 16) are deliberate, since Happyfact owns that framework.*

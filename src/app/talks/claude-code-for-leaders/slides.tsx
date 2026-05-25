import type { ReactNode } from "react";
import {
  FileText,
  Globe,
  MessagesSquare,
  ArrowRight,
  ArrowUpRight,
  PenLine,
  Search,
  Map,
  Tag,
  Mail,
  Users,
  Megaphone,
  TrendingUp,
  Palette,
  Sparkles,
  ClipboardCheck,
  Target,
  FolderOpen,
  ListChecks,
  Rocket,
  Mic,
  AlertTriangle,
  Eraser,
  Download,
} from "lucide-react";
import { ExpandableCode } from "./CodeModal";
import { ModeBadge } from "./ModeBadge";
import { Accordion } from "./Accordion";

type Slide = { variant?: string; node: ReactNode };

const ACCENT = "var(--accent)";

/* Corey Haines' marketing skills (the ones Ana actually uses).
   Each card links to its folder in the repo. */
const SKILLS_REPO = "https://github.com/coreyhaines31/marketingskills/tree/main/skills";

/* The example team brief. Shown on the "Give your team a brief" slide AND
   called back to from the "Start this week" step 2 modal, so it lives here
   once to keep the two in sync. */
const SAMPLE_CLAUDE_MD = `# CLAUDE.md — My fractional growth practice

## How I work
- I'm a fractional growth lead serving 3 clients at once.
- Always plan first, save the plan, then execute on /clear.
- No em dashes. Concise and direct.

## My team (team/)
- researcher/      market, competitors, audience
- strategist/      OKRs, MOKAS, positioning
- copywriter/      pages, emails, ads
- chief-of-staff/  prep, planning, tasks
Each folder has its own CLAUDE.md with that specialist's rules.

## My clients (clients/)
- Each client has clients/<name>/brief.md: voice, goals, constraints.
- Point a specialist at the right brief before asking for work.

## Standing rules
- Save every deliverable to docs/ and list it in docs/INDEX.md
- Verify facts before presenting them. I'm the editor.
- Keep briefs current; stale context misleads the team.`;

/* ---------- shared building blocks ---------- */

function Bullets({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-8 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-4 leading-relaxed">
          <span
            className="mt-[16px] h-[7px] w-[7px] shrink-0 rounded-full"
            style={{ background: ACCENT }}
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleCard({
  avatar,
  name,
  desc,
  n,
  delay,
}: {
  avatar: string;
  name: string;
  desc: string;
  n: number;
  delay: string;
}) {
  return (
    <div className={`glass role-card reveal ${delay}`}>
      <div className="role-top">
        <span className="role-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/avatars/${avatar}.svg`} alt={name} />
        </span>
        <span className="role-num">{String(n).padStart(2, "0")}</span>
      </div>
      <div className="role-name">{name}</div>
      <div className="role-desc">{desc}</div>
    </div>
  );
}

function SectionHead({ part, title }: { part: string; title: string }) {
  return (
    <>
      <div className="eyebrow mb-6">{part}</div>
      <h1 className="gradient-text">{title}</h1>
    </>
  );
}

function ContentHead({ children }: { children: ReactNode }) {
  return <h1 className="mb-28">{children}</h1>;
}

/* Wrapped tag cloud. variant "pill" = mono rect (skills/features),
   "chip" = softer rounded-full (specialist/keyword chips). */
function PillRow({
  items,
  variant = "pill",
  className = "",
}: {
  items: string[];
  variant?: "pill" | "chip";
  className?: string;
}) {
  const cls = variant === "chip" ? "spec-chip" : "pill";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((s) => (
        <span key={s} className={cls}>
          {s}
        </span>
      ))}
    </div>
  );
}

/* Icon + title + desc cards in a grid (capability/feature overview). */
function CapabilityGrid({
  items,
  cols = 4,
  className = "mt-9",
}: {
  items: { icon: ReactNode; t: string; d: string }[];
  cols?: number;
  className?: string;
}) {
  return (
    <div className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {items.map((c) => (
        <div key={c.t} className="glass flex flex-col gap-3 px-5 py-6">
          <span className="cap-icon text-[26px]">{c.icon}</span>
          <div className="text-[19px] font-bold text-[var(--text-strong)]">{c.t}</div>
          <div className="text-[14px] dim">{c.d}</div>
        </div>
      ))}
    </div>
  );
}

/* Comparison column. feature = highlighted/destination card; ribbon = top tag. */
function Tier({
  feature = false,
  ribbon,
  className = "",
  children,
}: {
  feature?: boolean;
  ribbon?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`tier ${feature ? "feature" : ""} ${className}`}>
      {ribbon && <span className="tier-ribbon">{ribbon}</span>}
      {children}
    </div>
  );
}

/* A single ✓/› row inside a Tier. ok = pink check, else muted chevron. */
function TierRow({ ok = false, children }: { ok?: boolean; children: ReactNode }) {
  return (
    <div className="row">
      <span className={ok ? "mk" : "no"}>{ok ? "✓" : "›"}</span> {children}
    </div>
  );
}

/* Horizontal numbered steps with a connecting rail (the "flow" pattern).
   The final step is the payoff and renders as the highlighted destination. */
function StepFlow({
  steps,
}: {
  steps: { n: string; t: string; d: string; icon: ReactNode; prompt: ReactNode; badge?: ReactNode }[];
}) {
  return (
    <div className="step-flow mt-16">
      <div className="step-rail" />
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <div
            key={s.n}
            className={`step-card glass reveal d${i + 1}${last ? " step-card-final" : ""}`}
          >
            <div className="step-card-top">
              <span className="step-badge">{s.n}</span>
              <span className="step-icon">{s.icon}</span>
            </div>
            <div className="step-eyebrow">STEP {s.n}</div>
            <div className="step-title">{s.t}</div>
            <div className="step-desc">{s.d}</div>
            <div className="step-prompt">{s.prompt}</div>
            {s.badge && <div className="step-badge-row">{s.badge}</div>}
          </div>
        );
      })}
    </div>
  );
}

/* A hireable skill on the "specialists for hire" board. If href is given the
   whole card is a link and a ↗ cue appears on hover. */
function SkillCard({
  icon,
  name,
  desc,
  href,
}: {
  icon: ReactNode;
  name: string;
  desc: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="skill-icon">{icon}</span>
        {href && <ArrowUpRight className="skill-arrow" size={18} />}
      </div>
      <div className="mt-4 font-mono text-[15.5px] font-semibold text-[var(--text-strong)]">
        {name}
      </div>
      <div className="mt-1 text-[13px] leading-snug dim">{desc}</div>
    </>
  );
  const cls = "glass skill-card flex flex-col px-5 py-5 text-left";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/* One specialist: header (avatar + name + role), its CLAUDE.md brief on the
   left, a couple of example prompts (callouts) on the right. */
function SpecialistSlide({
  avatar,
  name,
  role,
  path,
  brief,
  fullBrief,
  prompts,
}: {
  avatar: string;
  name: string;
  role: string;
  path: string;
  brief: string[];
  fullBrief: string;
  prompts: ReactNode[];
}) {
  return (
    <>
      <div className="mb-9 flex items-center gap-5">
        <span className="role-avatar" style={{ width: 66, height: 66 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/avatars/${avatar}.svg`} alt={name} />
        </span>
        <div>
          <div className="text-[40px] font-bold leading-none text-[var(--text-strong)]">{name}</div>
          <div className="mt-2 font-mono text-[16px] muted">{role}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start gap-10">
        <div>
          <div className="mb-3 font-mono text-[13px] uppercase tracking-wider muted">Its brief</div>
          <ExpandableCode
            title={path}
            full={fullBrief}
            preview={
              <pre className="codeblock text-[15.5px] leading-[1.7]">
                <span className="c"># {path}</span>{"\n"}
                <span className="k"># {name}</span>{"\n"}
                {brief.join("\n")}
              </pre>
            }
          />
        </div>
        <div>
          <div className="mb-3 font-mono text-[13px] uppercase tracking-wider muted">How you direct it</div>
          <div className="flex flex-col gap-4">
            {prompts.map((p, i) => (
              <div key={i} className="callout text-[18px] italic leading-relaxed">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- slides ---------- */

export const slides: Slide[] = [
  // 1 — cover
  {
    variant: "cover center",
    node: (
      <>
        <div className="reveal d1 cover-badge eyebrow mb-12">
          <span className="dot" />
          Guest session · Happyfact
        </div>
        <h1 className="reveal d2 gradient-text">Claude Code for Leaders</h1>
        <div className="reveal d3 cover-rule mt-12 mb-10" />
        <h2 className="reveal d3">Your team of specialists</h2>
        <p className="reveal d4 mt-12 text-[22px] dim">
          Stop being a team of one. Run a team of specialists.
        </p>
        <PillRow
          variant="chip"
          className="reveal d5 mt-12 items-center justify-center"
          items={["Researcher", "Strategist", "Copywriter", "Brainstorm Partner", "Chief of Staff"]}
        />
        <p className="absolute bottom-12 left-[96px] text-[15px] muted">
          Ana Neto · Guest session for Happyfact
        </p>
      </>
    ),
  },

  // 2 — bottleneck
  {
    variant: "center",
    node: (
      <>
        <h1>You&apos;re already using AI</h1>
        <div className="mt-12 text-left whitespace-nowrap">
          <div className="flex items-start gap-4 text-[26px] leading-relaxed">
            <span className="mt-[16px] h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: ACCENT }} />
            <span>Claude, ChatGPT, Perplexity, every day. And it&apos;s working just fine!</span>
          </div>
          <ul className="mt-6 ml-11 space-y-5 text-[23px] leading-relaxed dim">
            {[
              <>But how much time goes into crafting the <b>right prompt</b>, for every task?</>,
              <>And re-explaining everything each session, to pick up <b>last week&apos;s work</b>?</>,
              <>And digging for the <b>exact conversation</b> where you finally hit a breakthrough?</>,
            ].map((it, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[13px] h-[6px] w-[6px] shrink-0 rounded-full"
                  style={{ background: "var(--text-muted)" }}
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 text-[30px] font-semibold gradient-text">
          There has to be a better way...
        </p>
      </>
    ),
  },

  // 3 — reframe
  {
    variant: "center",
    node: (
      <>
        <h1>The reframe</h1>
        <div className="mt-14 space-y-9 text-[34px] leading-relaxed">
          <p>What if your context <b className="gradient-text">lived in files</b>, not a chat you lose...</p>
          <p className="dim">...so every session starts already briefed...</p>
          <p className="dim">...and one assistant becomes a <b className="gradient-text">team that compounds</b>?</p>
        </div>
        <PillRow
          variant="chip"
          className="mt-16 items-center justify-center"
          items={["Persistent memory", "Organized context", "A team that builds week over week"]}
        />
      </>
    ),
  },

  // 4 — Part 1
  { variant: "section", node: <SectionHead part="Part 1 of 4" title="The mindset shift" /> },

  // 5 — what claude code is
  {
    node: (
      <>
        <h1 className="mb-10">What Claude Code actually is</h1>
        <p className="max-w-[1000px] text-balance text-[27px] leading-relaxed">
          The same Claude you already chat with, now living{" "}
          <b>on your computer</b>, where it can{" "}
          <b className="gradient-text">consult relevant files and act</b>.
        </p>

        <CapabilityGrid
          items={[
            { icon: "📁", t: "Reads your files", d: "docs, notes, sheets" },
            { icon: "✍️", t: "Writes documents", d: "drafts, decks, reports" },
            { icon: "🌐", t: "Browses the web", d: "research, live pages" },
            { icon: "🛠️", t: "Uses your tools", d: "Notion, Slack, more" },
          ]}
        />

        <div className="mt-8 flex items-center gap-6">
          <p className="text-balance text-[19px] dim">
            You direct it in <b>plain English</b>. Don&apos;t let &ldquo;Code&rdquo; scare you, you
            never write any.
          </p>
          <div className="callout shrink-0 text-[19px] italic">
            &ldquo;Same Claude chat you know, just with way more capabilities.&rdquo;
          </div>
        </div>
      </>
    ),
  },

  // 6 — why claude code
  {
    node: (
      <>
        <h1 className="mb-12">Chat, Cowork, or Claude Code?</h1>
        <div className="grid grid-cols-3 items-stretch gap-6">
          <Tier>
            <span className="tier-emoji">💬</span>
            <div className="tier-name">The chat app</div>
            <div className="tier-sub">claude.ai, in your browser</div>
            <div className="tier-feats">
              <TierRow>A conversation, where most start</TierRow>
              <TierRow>You re-explain context each time</TierRow>
              <TierRow>Great for thinking, not doing</TierRow>
            </div>
            <div className="tier-tag"><b>Best for:</b> quick questions &amp; drafts</div>
          </Tier>

          <Tier>
            <span className="tier-emoji">🖥️</span>
            <div className="tier-name">Claude Cowork</div>
            <div className="tier-sub">desktop app · no setup · sandboxed</div>
            <div className="tier-feats">
              <TierRow ok><b>Same engine</b>, it plans and acts</TierRow>
              <TierRow ok>Safe, simple, nothing to install</TierRow>
              <TierRow ok>The easy, no-setup on-ramp</TierRow>
            </div>
            <div className="tier-tag"><b>Best for:</b> getting started today</div>
          </Tier>

          <Tier feature ribbon="What this talk is built on">
            <span className="tier-emoji">⚡</span>
            <div className="tier-name">Claude Code</div>
            <div className="tier-sub">same engine · runs on your machine</div>
            <div className="tier-feats">
              <TierRow ok>Your files, tools &amp; persistent memory</TierRow>
              <TierRow ok>Full control, skills &amp; automation</TierRow>
              <TierRow ok>Grows a team that compounds</TierRow>
            </div>
            <div className="tier-tag"><b>Best for:</b> a system that lasts</div>
          </Tier>
        </div>
      </>
    ),
  },

  // 7 — from doing to directing
  {
    node: (
      <>
        <h1 className="mb-12 text-balance">From doing the work to directing a team</h1>
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-5">
          {/* OLD MODEL */}
          <Tier>
            <div className="font-mono text-[13px] uppercase tracking-wider muted">
              Old model · chats
            </div>
            <div className="tier-name">You manage the context</div>
            <div className="mt-5 flex flex-col gap-[14px] text-[18px] dim">
              <div className="flex items-start gap-3"><span className="no">›</span> Hunt down the right files</div>
              <div className="flex items-start gap-3"><span className="no">›</span> Re-write the prompt, every time</div>
              <div className="flex items-start gap-3"><span className="no">›</span> Organize the artifacts yourself</div>
              <div className="flex items-start gap-3"><span className="no">›</span> Keep the chat fed with what it needs</div>
            </div>
          </Tier>

          {/* ARROW */}
          <div className="flex items-center justify-center px-1">
            <ArrowRight size={40} style={{ color: ACCENT }} strokeWidth={2.4} />
          </div>

          {/* NEW MODEL */}
          <Tier feature>
            <div className="font-mono text-[13px] uppercase tracking-wider" style={{ color: ACCENT }}>
              New model · Claude Code
            </div>
            <div className="tier-name">You build the system</div>
            <div className="mt-5 flex flex-col gap-[14px] text-[18px]" style={{ color: "var(--text-secondary)" }}>
              <div className="flex items-start gap-3"><span className="mk">✓</span> A team of <b>specialized agents</b></div>
              <div className="flex items-start gap-3"><span className="mk">✓</span> Each one already briefed</div>
              <div className="flex items-start gap-3"><span className="mk">✓</span> Context lives in files, not your head</div>
              <div className="flex items-start gap-3"><span className="mk">✓</span> You direct, they execute</div>
            </div>
          </Tier>
        </div>
        <p className="mt-8 text-center text-[19px] dim">
          Same you. Very different <b className="gradient-text">leverage</b>.
        </p>
      </>
    ),
  },

  // 8 — meet your team
  {
    node: (
      <>
        <h1 className="mb-12">Meet your team</h1>
        <div className="grid grid-cols-3 gap-5">
          <RoleCard n={1} delay="d1" avatar="Researcher" name="Researcher" desc="market, competitors, audience" />
          <RoleCard n={2} delay="d2" avatar="Strategist" name="Strategist" desc="OKRs, MOKAS, positioning" />
          <RoleCard n={3} delay="d3" avatar="Copywriter" name="Copywriter" desc="pages, emails, ads" />
          <RoleCard n={4} delay="d4" avatar="Brainstorm" name="Brainstorm Partner" desc="pressure-tests thinking" />
          <RoleCard n={5} delay="d5" avatar="ChiefOfStaff" name="Chief of Staff" desc="prep, planning, tasks" />
          <RoleCard n={6} delay="d6" avatar="Analyst" name="Analyst" desc="data, sheets, reports" />
        </div>
      </>
    ),
  },

  // 9 — Part 2
  { variant: "section", node: <SectionHead part="Part 2 of 4" title="How to run your team" /> },

  // 10 — give your team a brief
  {
    node: (
      <>
        <h1 className="mb-14">Give your team a brief (CLAUDE.md)</h1>
        <div className="grid grid-cols-2 items-center gap-12">
          <div className="text-[23px]">
            <Bullets
              items={[
                <><code>CLAUDE.md</code> = your team&apos;s <b>operating manual</b>, read automatically every session</>,
                <>Contains: how you work, who your specialists are, your standing rules</>,
                <>Write it once. Every specialist starts already briefed.</>,
              ]}
            />
          </div>
          <ExpandableCode
            title="CLAUDE.md"
            full={SAMPLE_CLAUDE_MD}
            preview={
              <pre className="codeblock text-[16px]">
                <span className="c"># CLAUDE.md</span>{"\n"}
                <span className="k">## How I work</span>{"\n"}
                Fractional growth lead. 3 clients.{"\n"}
                No em dashes. Always plan first.{"\n"}
                {"\n"}
                <span className="k">## My team</span>{"\n"}
                team/ holds my specialists{"\n"}
                clients/ holds each client brief{"\n"}
                {"\n"}
                <span className="k">## Standing rules</span>{"\n"}
                Save outputs to docs/, list in INDEX.md
              </pre>
            }
          />
        </div>
      </>
    ),
  },

  // 11 — one team many clients
  {
    node: (
      <>
        <h1 className="mb-14">One team. Many clients.</h1>
        <div className="grid grid-cols-2 items-center gap-12">
          <div className="text-[22px]">
            <Bullets
              items={[
                <>Specialists live <b>once</b>, under <code>team/</code>, shared across every client</>,
                <>Each client gets a folder: a short brief <b>plus its own outputs</b> (research, copy, reports)</>,
                <>Your own <code>practice/</code> holds your business: positioning, pipeline, content</>,
              ]}
            />
            <div className="callout mt-9 text-[18px] italic leading-relaxed">
              &ldquo;Acme&apos;s copywriter&rdquo; and &ldquo;Globex&apos;s copywriter&rdquo; are the
              same copywriter, handed a different brief.
            </div>
          </div>
          <pre className="codeblock text-[15px] leading-[1.65]">
            <span className="k">my-work/</span>{"\n"}
            {"  "}CLAUDE.md{"            "}<span className="c"># how your team works</span>{"\n"}
            {"  "}<span className="k">team/</span>{"               "}<span className="c"># shared specialists</span>{"\n"}
            {"    "}researcher/{"  "}strategist/{"  "}copywriter/{"\n"}
            {"    "}brainstorm/{"  "}chief-of-staff/{"  "}analyst/{"\n"}
            {"  "}<span className="k">clients/</span>{"\n"}
            {"    "}<span className="k">acme/</span>{"\n"}
            {"      "}brief.md{"         "}<span className="c"># voice, goals, constraints</span>{"\n"}
            {"      "}research/{"  "}strategy/{"  "}copy/{"  "}reports/{"\n"}
            {"    "}<span className="k">globex/</span>{"\n"}
            {"      "}brief.md{"\n"}
            {"  "}<span className="k">practice/</span>{"           "}<span className="c"># your own business</span>{"\n"}
            {"    "}positioning.md{"  "}pipeline.md{"  "}planning/{"\n"}
            {"  "}INDEX.md{"             "}<span className="c"># one map of everything</span>
          </pre>
        </div>
      </>
    ),
  },

  /* ----- One slide per specialist: brief + example prompts ----- */

  // Researcher
  {
    node: (
      <SpecialistSlide
        avatar="Researcher"
        name="Researcher"
        role="market · competitors · audience"
        path="team/researcher/CLAUDE.md"
        brief={[
          "Maps markets, competitors, audiences.",
          "",
          "- Cite every source + date",
          "- Tables over essays",
          "- Flag what you couldn't verify",
        ]}
        fullBrief={`# Researcher

## Role
You research markets, competitors, and audiences for my clients. You produce
decision-ready findings, not walls of text. I read your work to make a call,
so lead with the call.

## Scope
- In scope: market sizing, competitor teardowns, audience and buyer research,
  review and forum mining, pricing and positioning landscape.
- Not in scope: writing the copy (that's the Copywriter), setting the strategy
  (that's the Strategist), analyzing the client's own data (that's the Analyst).
  If a request drifts there, say so and hand it off.

## Before you start
- Read the client brief first: clients/<name>/brief.md. It tells you their
  audience, goals, and what they already know.
- Skim clients/<name>/research/ so you don't repeat existing work.
- If the goal is vague, ask me one sharp question before you spend time.

## How you work
- Cite every source with a link and the date you checked it. No date, no claim.
- Prefer comparison tables to paragraphs. One row per competitor or segment.
- Separate fact from inference. Label anything you are inferring as such.
- Clearly flag anything you could not verify. A known gap beats a confident guess.
- Quote real customer language verbatim when you find it. It's gold for the
  Copywriter and Strategist.

## Output
- Save to clients/<name>/research/<topic>.md and add one line to INDEX.md.
- Structure every report:
  1. Takeaway (2-3 sentences: what this means for the client)
  2. Evidence (tables, quotes, sources with dates)
  3. Open questions (what still needs verifying, and how)
- Keep it skimmable. If it's longer than two screens, it's a deck, not research.

## Example tasks
- "Read Acme's brief. Find their top 5 competitors and build a comparison table:
  positioning, pricing, key claims, weak spots."
- "Mine reviews and forums for what Globex's buyers actually complain about.
  Quote them. Group the complaints into themes."`}
        prompts={[
          <>&ldquo;Find this client&apos;s top 5 competitors. Build a comparison table: positioning, pricing, key claims.&rdquo;</>,
          <>&ldquo;Summarize what target buyers complain about in reviews and forums.&rdquo;</>,
        ]}
      />
    ),
  },

  // Strategist
  {
    node: (
      <SpecialistSlide
        avatar="Strategist"
        name="Strategist"
        role="OKRs · MOKAS · positioning"
        path="team/strategist/CLAUDE.md"
        brief={[
          "Turns goals into clear plans.",
          "",
          "- Objectives + key results",
          "- Tie every recommendation to a metric",
          "- Propose, then wait for my steer",
        ]}
        fullBrief={`# Strategist

## Role
You turn client goals into clear, measurable plans. You decide what we should
do and why, and you tie it to a number. You are not here to execute, you are
here to point the work in the right direction.

## Scope
- In scope: objectives and key results, positioning, channel and priority
  calls, quarterly plans, pressure-testing a direction against the market.
- Not in scope: gathering the raw research (that's the Researcher), writing the
  assets (that's the Copywriter), pulling the numbers (that's the Analyst). Use
  their outputs as your inputs.

## Before you start
- Read clients/<name>/brief.md for goals and constraints.
- Read the latest in clients/<name>/research/ and clients/<name>/reports/.
  Strategy with no evidence under it is just an opinion.
- If last quarter's plan exists in clients/<name>/strategy/, read it and say
  what worked and what didn't before proposing the next one.

## How you work
- Frame work as objectives and key results. Every objective gets a metric and
  a target. If you can't measure it, it's a theme, not an objective.
- Tie every recommendation to the metric it moves and the evidence behind it.
- Show the trade-off. What are we choosing NOT to do, and why is that ok.
- Propose the plan, then stop and wait for my steer before going further.
  Do not start producing the assets.
- Be willing to say "the data doesn't support this yet, here's what to test."

## Output
- Save to clients/<name>/strategy/<quarter-or-topic>.md, add a line to INDEX.md.
- One page maximum. If it needs more than a page, it isn't a strategy yet.
- Structure: the goal, the 2-4 objectives (each with a key result), the
  priorities in order, what we're deliberately not doing, the risks.

## Example tasks
- "Read Acme's brief and last quarter's report. Draft refreshed objectives and
  key results for Q3. One page."
- "Pressure-test this positioning against our top two competitors. Where is it
  weak, and what would make it sharper?"`}
        prompts={[
          <>&ldquo;Read Acme&apos;s brief and last quarter&apos;s results. Draft refreshed MOKAS objectives.&rdquo;</>,
          <>&ldquo;Pressure-test this positioning against our top 2 competitors.&rdquo;</>,
        ]}
      />
    ),
  },

  // Copywriter
  {
    node: (
      <SpecialistSlide
        avatar="Copywriter"
        name="Copywriter"
        role="pages · emails · ads"
        path="team/copywriter/CLAUDE.md"
        brief={[
          "Writes in each client's voice.",
          "",
          "- Read the client brief first",
          "- No em dashes, no jargon",
          "- Always give 2-3 options",
        ]}
        fullBrief={`# Copywriter

## Role
You write landing pages, emails, and ads for my clients. You write in each
client's voice, never a generic one. The reader should not be able to tell a
machine wrote it.

## Scope
- In scope: landing and product pages, email and nurture sequences, ads, social
  posts, headlines and subject lines.
- Not in scope: deciding the strategy or the offer (that's the Strategist),
  inventing facts or stats (ask the Researcher or the client). You write what's
  true and decided, in the right voice.

## Before you write
- Read the active client's brief: clients/<name>/brief.md. Match their tone,
  their audience, and their banned words exactly.
- Read clients/<name>/strategy/ so the copy serves the actual objective.
- Reuse real customer language from clients/<name>/research/ where it fits.
- Missing one fact? Ask me for that one fact. Do not invent a number, a quote,
  a customer name, or a result.

## House style (overridden by a client's brief when they conflict)
- No em dashes. Use commas, periods, or parentheses.
- Short sentences. Concrete over clever. Cut every word that isn't working.
- Lead with the benefit to the reader, not the feature.
- No hype words: revolutionary, seamless, game-changing, unlock, supercharge.
- Always give me 2-3 distinct options so I can choose, not 3 reworded versions
  of the same line.

## Output
- Save drafts to clients/<name>/copy/<asset>.md, add a line to INDEX.md.
- Order each draft: headline options first, then the body, then a one-line
  rationale per option (what angle it takes and who it's for).
- Mark anything that needs a real fact with [VERIFY: ...] so I catch it.

## Example tasks
- "Using Acme's voice, write the hero and three headline options for the new
  pricing page. One line on the angle behind each headline."
- "Draft a 4-email nurture sequence for Globex's audience. Map each email to a
  stage: hook, value, proof, ask."`}
        prompts={[
          <>&ldquo;Using this client&apos;s tone, write a landing page for X. Three headline options.&rdquo;</>,
          <>&ldquo;Draft a 4-email nurture sequence for this audience.&rdquo;</>,
        ]}
      />
    ),
  },

  // Brainstorm Partner
  {
    node: (
      <SpecialistSlide
        avatar="Brainstorm"
        name="Brainstorm Partner"
        role="pressure-tests thinking"
        path="team/brainstorm/CLAUDE.md"
        brief={[
          "Challenges ideas, never flatters.",
          "",
          "- One question at a time",
          "- Surface risks + blind spots",
          "- Give the strongest counter",
        ]}
        fullBrief={`# Brainstorm Partner

## Role
You pressure-test my thinking. You challenge ideas, you don't flatter them.
Your job is to make my decisions better before they cost me anything, not to
make me feel good about them.

## Scope
- In scope: stress-testing plans, surfacing risks and blind spots, generating
  angles I haven't considered, playing devil's advocate.
- Not in scope: producing deliverables. You are a thinking partner. When we
  reach a decision, hand the execution to the right specialist.

## How you work
- Ask one question at a time, then wait for my answer. No interrogations.
- Surface the risks, the blind spots, and the assumptions I'm not testing.
- Always offer the strongest counter-argument, the version a smart skeptic
  would make. Steelman it, don't strawman it.
- It's fine, and useful, to tell me an idea is bad. Just say exactly why and
  what would change your mind.
- Don't agree to be agreeable. If you find yourself validating, push instead.
- Separate "this is risky" from "this is wrong." Name which one you mean.

## Output
- No file deliverable by default. This is a conversation.
- When we land on a decision, summarize it in 3 bullets: what we decided, why,
  and the biggest risk we're accepting. If it concerns a client, save that
  summary to clients/<name>/ ; if it's about my practice, save to practice/.

## Example tasks
- "Here's my plan for the Q3 launch. Poke holes in it. Start with the weakest
  assumption."
- "Give me three angles for this campaign I haven't considered, then argue
  against my current favorite."`}
        prompts={[
          <>&ldquo;Here&apos;s my plan for the Q3 launch. Poke holes in it.&rdquo;</>,
          <>&ldquo;Give me three angles I haven&apos;t considered for this campaign.&rdquo;</>,
        ]}
      />
    ),
  },

  // Chief of Staff
  {
    node: (
      <SpecialistSlide
        avatar="ChiefOfStaff"
        name="Chief of Staff"
        role="prep · planning · tasks"
        path="team/chief-of-staff/CLAUDE.md"
        brief={[
          "Keeps me on top of everything.",
          "",
          "- Knows all clients + deadlines",
          "- Notes into action items",
          "- Pushes tasks to Notion",
        ]}
        fullBrief={`# Chief of Staff

## Role
You keep me on top of every client and every deadline, plus my own practice.
You see across the whole portfolio so I don't carry it in my head. You catch
what's slipping before I have to ask.

## Scope
- In scope: weekly and daily planning across all clients, turning my call notes
  into action items, tracking deadlines, prepping me for meetings, flagging
  conflicts and overload.
- Not in scope: doing the client work itself. You coordinate the team and me,
  you don't write the copy or run the analysis.

## How you work
- Know the full picture: read each clients/<name>/brief.md and the latest in
  their folders, plus practice/pipeline.md and practice/planning/.
- Turn my raw call notes into a clean summary with clear action items. Every
  item gets an owner (me, a specialist, or the client) and a due date.
- Flag what's slipping or colliding before I ask. Surface the deadline risk,
  the double-booked week, the client who's gone quiet.
- Protect my focus. If a week is overloaded, propose what to move, not just
  that it's full.
- Push tasks to Notion when I say so (via the Notion MCP). Don't push without
  my go-ahead.

## Output
- Save weekly plans to practice/planning/<week>.md and add a line to INDEX.md.
- Action items as a checklist: [ ] owner, task, due date.
- Lead every plan with "What needs attention this week" (the 3 things that
  matter most), then the per-client breakdown.

## Example tasks
- "Plan my week across all clients. What's slipping, and what should I move?"
- "Turn these call notes into a summary with action items, owners, and dates.
  Then draft the follow-up email for me to approve."`}
        prompts={[
          <>&ldquo;Plan my week across all three clients. What&apos;s slipping?&rdquo;</>,
          <>&ldquo;Turn my call notes into a summary with action items.&rdquo;</>,
        ]}
      />
    ),
  },

  // Analyst
  {
    node: (
      <SpecialistSlide
        avatar="Analyst"
        name="Analyst"
        role="data · sheets · reports"
        path="team/analyst/CLAUDE.md"
        brief={[
          "Turns raw data into decisions.",
          "",
          "- Number first, then takeaway",
          "- Call out anomalies + caveats",
          "- Clean tables + charts",
        ]}
        fullBrief={`# Analyst

## Role
You turn raw data into decisions for my clients. You make numbers mean
something. I should be able to read your top line and know what to do.

## Scope
- In scope: pulling and cleaning data, funnels and cohorts, dashboards, monthly
  client reports, spotting what changed and why it might matter.
- Not in scope: deciding the strategy off the back of it (that's the
  Strategist), writing the narrative copy (that's the Copywriter). You give them
  a clean, sourced read of reality.

## Before you start
- Read clients/<name>/brief.md for the goals and the metrics that matter to them.
- Read the last report in clients/<name>/reports/ so you compare like for like.
- Confirm where the data is coming from before you analyze it.

## How you work
- Show the number first, then the takeaway. Number, then "so what."
- Always give context: vs last period, vs target, vs benchmark. A number with
  no comparison is noise.
- Call out anomalies, caveats, and small sample sizes out loud. Don't bury them.
- Never present a metric you can't source. If the data is dirty, say so and say
  how dirty.
- Build clean tables and simple charts. No chartjunk, no 3D, no rainbow.

## Output
- Save reports to clients/<name>/reports/<period>.md, add a line to INDEX.md.
- Structure: one headline insight at the top (the single most important change),
  then the metrics table, then notable movements, then caveats.
- Round sensibly. Decimals only when they change a decision.

## Example tasks
- "Pull last month's funnel for Acme into a table. Flag what changed vs the
  prior month and what's worth investigating."
- "Build the monthly report I can send Globex. One headline insight, a clean
  metrics table, and a short note on what to watch."`}
        prompts={[
          <>&ldquo;Pull last month&apos;s funnel numbers into a table and flag what changed.&rdquo;</>,
          <>&ldquo;Build a simple monthly report I can send the client.&rdquo;</>,
        ]}
      />
    ),
  },

  // 13 — skills
  {
    node: (
      <>
        <h1 className="mb-3">Hire pre-built specialists (skills)</h1>
        <p className="mb-8 max-w-[920px] text-[22px] dim">
          You don&apos;t have to train every specialist from scratch. <b>Skills</b> are installable,
          ready-made expert playbooks. Install one, your team gains an instant expert.
        </p>
        <div className="grid grid-cols-4 gap-4">
          <SkillCard icon={<PenLine size={20} />} name="copywriting" desc="pages, emails & ads that convert" href={`${SKILLS_REPO}/copywriting`} />
          <SkillCard icon={<Search size={20} />} name="seo-audit" desc="find what blocks your rankings" href={`${SKILLS_REPO}/seo-audit`} />
          <SkillCard icon={<Map size={20} />} name="content-strategy" desc="plan what to publish, and why" href={`${SKILLS_REPO}/content-strategy`} />
          <SkillCard icon={<Tag size={20} />} name="pricing-strategy" desc="tiers, packaging, willingness to pay" href={`${SKILLS_REPO}/pricing-strategy`} />
          <SkillCard icon={<Mail size={20} />} name="cold-email" desc="outbound that actually gets replies" href={`${SKILLS_REPO}/cold-email`} />
          <SkillCard icon={<Users size={20} />} name="customer-research" desc="synthesize what buyers really want" href={`${SKILLS_REPO}/customer-research`} />
          <SkillCard icon={<Megaphone size={20} />} name="ad-creative" desc="headlines & variations at scale" href={`${SKILLS_REPO}/ad-creative`} />
          <SkillCard icon={<TrendingUp size={20} />} name="page-cro" desc="lift conversions, page by page" href={`${SKILLS_REPO}/page-cro`} />
        </div>
      </>
    ),
  },

  // more specialists worth hiring (power tools + more marketing)
  {
    node: (
      <>
        <h1 className="mb-3">More specialists worth hiring</h1>
        <p className="mb-8 max-w-[940px] text-[22px] dim">
          Same install-and-go idea, wider range: from building and planning to launches and content.
          Install one, and that expertise is on tap.
        </p>
        <div className="grid grid-cols-4 gap-4">
          <SkillCard icon={<Palette size={20} />} name="frontend-design" desc="polished pages without a designer" href="https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design" />
          <SkillCard icon={<Sparkles size={20} />} name="superpowers" desc="brainstorm, plan, pressure-test" href="https://github.com/obra/superpowers" />
          <SkillCard icon={<ClipboardCheck size={20} />} name="plannotator" desc="review work in your browser" href="https://github.com/backnotprop/plannotator" />
          <SkillCard icon={<Target size={20} />} name="jobs-to-be-done" desc="frame work around real customer jobs" href="https://github.com/deanpeters/Product-Manager-Skills" />
          <SkillCard icon={<Rocket size={20} />} name="launch-strategy" desc="plan a launch end to end" href={`${SKILLS_REPO}/launch-strategy`} />
          <SkillCard icon={<MessagesSquare size={20} />} name="social-content" desc="one idea into a week of posts" href={`${SKILLS_REPO}/social-content`} />
          <SkillCard icon={<Mail size={20} />} name="email-sequence" desc="nurture flows that run themselves" href={`${SKILLS_REPO}/email-sequence`} />
          <SkillCard icon={<Users size={20} />} name="marketing-psychology" desc="persuasion principles on tap" href={`${SKILLS_REPO}/marketing-psychology`} />
        </div>
      </>
    ),
  },

  // 16 — meet them where you work
  {
    node: (
      <>
        <h1 className="mb-4">Meet them where you work</h1>
        <p className="mb-10 max-w-[860px] text-balance text-[22px] dim">
          Your specialists plug into the tools you already use. The connector standard is called{" "}
          <b>MCP</b>.
        </p>

        <div className="grid grid-cols-3 gap-5">
          <div className="glass tool-card reveal d1">
            <span className="tool-icon"><FileText size={24} /></span>
            <div className="tool-name">Notion</div>
            <div className="tool-desc">Create pages, manage tasks, search your workspace.</div>
            <div className="tool-eg">&ldquo;Add these to the client&apos;s board&rdquo;</div>
          </div>
          <div className="glass tool-card reveal d2">
            <span className="tool-icon"><Globe size={24} /></span>
            <div className="tool-name">Web browsing</div>
            <div className="tool-desc">Search, open live pages, pull facts in real time.</div>
            <div className="tool-eg">&ldquo;Screenshot their pricing page&rdquo;</div>
          </div>
          <div className="glass tool-card reveal d3">
            <span className="tool-icon"><MessagesSquare size={24} /></span>
            <div className="tool-name">Slack</div>
            <div className="tool-desc">Read a channel, summarize a thread, draft a reply.</div>
            <div className="tool-eg">&ldquo;Summarize the #launch channel&rdquo;</div>
          </div>
        </div>

        <div className="reveal d4 mt-9 flex flex-wrap items-center gap-3">
          <span className="text-[15px] muted">Plus the rest of your stack:</span>
          {["Gmail", "Google Drive", "Calendar", "GitHub", "Linear", "+ hundreds more"].map((t) => (
            <span key={t} className="spec-chip">{t}</span>
          ))}
        </div>
      </>
    ),
  },

  // Part 3 — Best practices
  { variant: "section", node: <SectionHead part="Part 3 of 4" title="Best practices" /> },

  // the flow that always works
  {
    variant: "center",
    node: (
      <>
        <div className="eyebrow mb-4">The workflow</div>
        <h1>The flow that always works</h1>
        <StepFlow
          steps={[
            {
              n: "1",
              t: "Gather + goal",
              d: "context + what you want",
              icon: <FolderOpen size={22} />,
              prompt: "Using our brand voice (in brand-voice.md), plan our next 5 blog posts.",
            },
            {
              n: "2",
              t: "Plan",
              d: "propose, save, steer",
              icon: <ListChecks size={22} />,
              prompt: "Plan the task and save it in plans/blog-posts.md before implementing.",
              badge: (
                <ModeBadge label="Use plan mode" title="Plan mode">
                  <p>
                    <b>Plan mode</b> tells Claude to think the whole task through and write up a
                    plan, <b>without touching any files yet</b>. You read the plan, tweak it, and
                    only then approve.
                  </p>
                  <p>
                    Think of it as briefing a specialist and getting their proposal back before they
                    start the work. Great for anything bigger than a one-liner.
                  </p>
                  <p className="info-modal-how">
                    <b>How:</b> press <kbd>Shift</kbd> + <kbd>Tab</kbd> to cycle modes until it says{" "}
                    <b>plan mode</b>, or just ask <i>&ldquo;plan this first, don&rsquo;t change
                    anything yet.&rdquo;</i>
                  </p>
                </ModeBadge>
              ),
            },
            {
              n: "3",
              t: "Execute",
              d: "/clear, run the plan",
              icon: <Rocket size={22} />,
              prompt: (
                <>
                  <code>/clear</code>, then execute the plan in plans/blog-posts.md
                </>
              ),
              badge: (
                <ModeBadge label="Use auto / edit mode" title="Auto & edit mode">
                  <p>
                    Once you trust the plan, you don&rsquo;t want to approve every single step.
                    These modes let Claude <b>run the plan and make the changes for you</b>.
                  </p>
                  <p>
                    <b>Edit mode (accept edits)</b> auto-approves file edits so Claude keeps moving.{" "}
                    <b>Auto mode</b> goes further and also runs commands on its own. Use edit mode by
                    default, auto when you fully trust the task.
                  </p>
                  <p className="info-modal-how">
                    <b>How:</b> press <kbd>Shift</kbd> + <kbd>Tab</kbd> to cycle modes until you see{" "}
                    <b>accept edits</b> (or auto). You stay in control: hit <kbd>Esc</kbd> any time
                    to stop and steer.
                  </p>
                </ModeBadge>
              ),
            },
          ]}
        />
        <p className="mt-14 text-[20px] dim">
          Same three moves, every task. <b>Repeat it until it is muscle memory.</b>
        </p>
      </>
    ),
  },

  // shared memory
  {
    node: (
      <>
        <h1 className="mb-14">Shared memory</h1>
        <div className="text-[24px]">
          <Bullets
            items={[
              <span className="text-balance">The chat is <b>temporary</b>, files are <b>permanent</b>. Whatever you want kept, tell it to <b>save it in the right place</b>.</span>,
            ]}
          />
        </div>
        <PillRow
          variant="chip"
          className="mt-5"
          items={[
            "a conversation",
            "a research note",
            "an idea",
            "a client update",
          ]}
        />
        <div className="mt-7 grid grid-cols-2 gap-6">
          <div className="glass px-7 py-6">
            <div className="text-[22px] font-bold text-[var(--text-strong)]">Briefs (CLAUDE.md)</div>
            <div className="mt-1 text-[18px] dim">
              <b>You write it.</b> Read at the start of every chat: brand voice, client context, how you work.
            </div>
          </div>
          <div className="glass px-7 py-6">
            <div className="text-[22px] font-bold text-[var(--text-strong)]">Memory</div>
            <div className="mt-1 text-[18px] dim">
              <b>It remembers.</b> Durable facts about you and your clients, so you stop repeating yourself.
            </div>
          </div>
        </div>
        <div className="callout mt-7 text-[19px]">
          <b>Keep it clean.</b> Every so often, ask it to <b>audit your briefs and docs</b> and flag
          anything stale or done. A wrong fact misleads more than a missing one.
        </div>
      </>
    ),
  },

  // 24 — manage context / content rot
  {
    node: (
      <>
        <h1 className="mb-4">Manage context, avoid content rot</h1>
        <p className="mb-10 max-w-[900px] text-balance text-[22px] dim">
          Two habits keep your team sharp: a <b>clean working memory</b>, and <b>briefs that stay
          true</b>.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {/* DO */}
          <div className="glass px-8 py-7">
            <div className="flex items-center gap-4">
              <span className="ctx-icon"><Eraser size={22} /></span>
              <div className="text-[23px] font-bold text-[var(--text-strong)]">Keep working memory clean</div>
            </div>
            <div className="mt-6 space-y-4 text-[20px]">
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span><code>/clear</code> between unrelated tasks</span></div>
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span><code>/compact</code> mid-task</span></div>
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span>Keep CLAUDE.md lean, link to detail</span></div>
            </div>
          </div>
          {/* WATCH */}
          <div
            className="glass px-8 py-7"
            style={{
              borderColor: "rgba(244, 63, 94, 0.42)",
              background: "linear-gradient(160deg, rgba(244, 63, 94, 0.06), rgba(147, 51, 234, 0.06))",
            }}
          >
            <div className="flex items-center gap-4">
              <span className="ctx-icon ctx-icon-warn"><AlertTriangle size={22} /></span>
              <div className="text-[23px] font-bold" style={{ color: ACCENT }}>Watch for content rot</div>
            </div>
            <div className="mt-6 space-y-4 text-[20px]">
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span>Stale briefs quietly mislead the team</span></div>
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span>Schedule a quick cleanup</span></div>
              <div className="flex items-start gap-3"><span className="ctx-dot" /> <span>Update client briefs and the index</span></div>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 25 — insights
  {
    node: (
      <>
        <ContentHead>Let it coach you · /insights</ContentHead>
        <div className="text-[25px]">
          <Bullets
            items={[
              <><code>/insights</code> reviews your <b>last 30 days</b> of sessions <span className="muted">(all local, private)</span></>,
              <>Shows where you hit friction and what slows you down</>,
              <>Suggests improvements to your CLAUDE.md briefs</>,
            ]}
          />
        </div>
        <p className="mt-12 text-[20px] dim">Run it monthly. Your team gets better because you do.</p>
      </>
    ),
  },

  // whisper flow — talk, don't type
  {
    node: (
      <>
        <div className="eyebrow mb-4">Power tip</div>
        <h1 className="mb-10">
          Talk, <span className="gradient-text">don&apos;t type</span>
        </h1>
        <div className="grid grid-cols-[1fr_1.05fr] items-center gap-14">
          <div className="text-[23px]">
            <Bullets
              items={[
                <>Voice dictation (like <b>Wispr Flow</b>) lets you brief it <b>out loud</b>, the way you&apos;d talk to a colleague.</>,
                <>You think faster than you type. Ramble the full context, it sorts it out.</>,
                <>The lowest-friction way in. No perfect prompt required.</>,
              ]}
            />
            <div className="mt-8">
              <ModeBadge label="How to set up Wispr Flow" title="Set up Wispr Flow">
                <p>
                  <b>Wispr Flow</b> is a free voice-to-text app that types whatever you say, into
                  <b> any app</b> (Claude Code, Cowork, your browser, email).
                </p>
                <ol className="info-modal-steps">
                  <li>
                    Download it from <b>wisprflow.ai</b> (Mac and Windows) and install like any app.
                  </li>
                  <li>
                    Allow <b>microphone</b> and <b>accessibility</b> access when it asks, that is how
                    it types for you.
                  </li>
                  <li>
                    Pick a <b>hold-to-talk key</b> (it suggests one). Hold it, speak, let go.
                  </li>
                </ol>
                <p className="info-modal-how">
                  <b>Use it:</b> click into Claude, hold the key, say your goal and context, release.
                  Your words land as text. No typing.
                </p>
              </ModeBadge>
            </div>
          </div>

          {/* voice becomes a structured brief */}
          <div className="whisper-card glass reveal d2">
            <div className="whisper-head">
              <span className="whisper-mic">
                <Mic size={20} />
              </span>
              <span className="whisper-wave" aria-hidden="true">
                {[14, 26, 38, 22, 44, 30, 18, 34, 24, 40, 16, 28, 36, 20].map((h, i) => (
                  <span key={i} style={{ height: h, animationDelay: `${i * 0.09}s` }} />
                ))}
              </span>
              <span className="whisper-key">hold to talk</span>
            </div>

            <p className="whisper-said">
              &ldquo;Ok so for the Q3 launch, audience is fractional CMOs, tone is
              confident not salesy, and I want three LinkedIn posts plus a short
              email...&rdquo;
            </p>

            <div className="whisper-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="whisper-brief">
              <span className="whisper-brief-label">The 30-second brief</span>
              <ul>
                <li><span className="whisper-tag">Context</span> Q3 launch, fractional CMOs</li>
                <li><span className="whisper-tag">Tone</span> confident, not salesy</li>
                <li><span className="whisper-tag">Goal</span> 3 LinkedIn posts + 1 email</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // multi-tabs — run your team in parallel
  {
    node: (
      <>
        <div className="eyebrow mb-4 reveal d1">Power tip</div>
        <h1 className="mb-7 reveal d1">One tab, one task</h1>
        <p className="mb-9 text-[23px] reveal d2 dim" style={{ maxWidth: 820 }}>
          Open <b className="gradient-text">several tabs at once</b>, each its own specialist on its
          own task. Your team works in parallel while you steer.
        </p>

        <div className="tabs-lanes mb-8">
          {[
            { icon: <PenLine />, n: "Tab 1", t: "Copywriter", desc: "Drafting launch posts", delay: "d3" },
            { icon: <Search />, n: "Tab 2", t: "Researcher", desc: "Pulling competitor data", delay: "d4" },
            { icon: <TrendingUp />, n: "Tab 3", t: "Analyst", desc: "Building the client report", delay: "d5" },
          ].map((c) => (
            <div key={c.n} className={`tabs-lane glass reveal ${c.delay}`}>
              <div className="tabs-lane-chrome">
                <span className="tabs-dot" />
                <span className="tabs-dot" />
                <span className="tabs-dot" />
                <span className="tabs-lane-num">{c.n}</span>
              </div>
              <div className="tabs-lane-body">
                <span className="cap-icon text-[24px]">{c.icon}</span>
                <div>
                  <div className="text-[20px] font-bold text-[var(--text-strong)]">{c.t}</div>
                  <div className="text-[14px] dim">{c.desc}</div>
                </div>
              </div>
              <span className="tabs-lane-live">
                <span className="tabs-live-dot" /> running
              </span>
            </div>
          ))}
        </div>

        <div
          className="callout reveal d6 text-[19px]"
          style={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <span className="ctx-icon ctx-icon-warn" style={{ width: 40, height: 40, flexShrink: 0 }}>
            <AlertTriangle size={20} />
          </span>
          <span>
            <b>One rule.</b> Never run two tabs on the <b>same files</b> at once, they overwrite each
            other. Different tasks, different folders.
          </span>
        </div>
      </>
    ),
  },

  // 26 — Part 5
  { variant: "section", node: <SectionHead part="Part 4 of 4" title="Getting started & close" /> },

  // 27 — start this week
  {
    variant: "top",
    node: (
      <>
        <div className="eyebrow mb-2">Getting started</div>
        <h1 className="mb-3">Start this week</h1>
        <p className="text-[23px] mb-5" style={{ color: "var(--text-secondary)" }}>
          The terminal is just a text box. You type in{" "}
          <b className="gradient-text">plain English</b>, not code.
        </p>

        <Accordion
          items={[
            {
              title: "Install it",
              body: (
                <>
                  A 5-minute, one-time setup. Or skip it entirely and open Cowork, no install needed.
                  <div className="acc-artifact">
                    <div>
                      Mac / Linux:{" "}
                      <code>curl -fsSL https://claude.ai/install.sh | bash</code>
                    </div>
                    <div className="mt-2">
                      Windows: <code>irm https://claude.ai/install.ps1 | iex</code>
                    </div>
                    <div className="mt-3">
                      <ModeBadge label="Show me exactly" title="Install it, step by step">
                        <p>
                          You have <b>never</b> opened a terminal? Perfect, here is the whole thing.
                          It is just a window that runs the lines you paste.
                        </p>
                        <ol className="info-modal-steps">
                          <li>
                            <b>Open the terminal.</b> Mac: press <kbd>Cmd</kbd> + <kbd>Space</kbd>,
                            type <i>Terminal</i>, hit Enter. Windows: open the <b>Start</b> menu, type{" "}
                            <i>PowerShell</i>, hit Enter.
                          </li>
                          <li>
                            <b>Breathe.</b> This window only runs lines you paste into it. Reading these
                            cannot break your computer.
                          </li>
                          <li>
                            <b>Paste the install line</b> and press Enter, then wait a minute. Mac/Linux:{" "}
                            <code>curl -fsSL https://claude.ai/install.sh | bash</code>. Windows:{" "}
                            <code>irm https://claude.ai/install.ps1 | iex</code>.
                          </li>
                          <li>
                            <b>Start it.</b> Type <code>claude</code> and press Enter. The first time, it
                            opens your browser to log in once.
                          </li>
                          <li>
                            <b>You did it</b> when Claude greets you and you can type a request in plain
                            English.
                          </li>
                        </ol>
                        <p className="info-modal-how">
                          <b>Rather not?</b> Open <b>Claude Cowork</b> instead, same brain, in a normal
                          chat window, nothing to install.
                        </p>
                      </ModeBadge>
                    </div>
                  </div>
                </>
              ),
            },
            {
              title: "Set up your team",
              body: (
                <>
                  Write a short CLAUDE.md (who they are) and make one specialist folder. That is the
                  whole &ldquo;team&rdquo;, the same one from earlier.
                  <div className="acc-artifact">
                    <div className="mt-3">
                      <ModeBadge label="Show me exactly" title="A real CLAUDE.md">
                        <p>The same brief from earlier. Yours can be even shorter to start.</p>
                        <pre className="codeblock codeblock-wrapped">{SAMPLE_CLAUDE_MD}</pre>
                      </ModeBadge>
                    </div>
                  </div>
                </>
              ),
            },
            {
              title: "Give one real task",
              body: (
                <>
                  Pick one task you would actually delegate. Walk it through{" "}
                  <b style={{ color: "var(--text-strong)" }}>Gather &rarr; Plan &rarr; Execute</b>.
                  <div className="acc-artifact">
                    <div className="mt-3">
                      <ModeBadge label="Show me exactly" title="One real first task">
                      <p>
                        Say this to your <b>social strategist</b>, one message at a time:
                      </p>
                      <ol className="info-modal-steps">
                        <li>
                          <b>Gather + goal:</b> <i>&ldquo;Read clients/acme/brief.md and our last 10
                          LinkedIn posts. I want 5 post ideas for Acme for next week.&rdquo;</i>
                        </li>
                        <li>
                          <b>Plan:</b> <i>&ldquo;Plan it first, don&rsquo;t write anything yet. Save the
                          plan.&rdquo;</i> You read it, tweak it, approve.
                        </li>
                        <li>
                          <b>Execute:</b> run <code>/clear</code>, then{" "}
                          <i>&ldquo;Now run the plan.&rdquo;</i>
                        </li>
                      </ol>
                      <p className="info-modal-how">
                        <b>That is the whole loop.</b> Every task, big or small, is this same three-step
                        rhythm.
                      </p>
                      </ModeBadge>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />

        <p className="mt-5 text-[20px] dim">
          Don&apos;t build the whole system. Get one win.{" "}
          <span className="muted text-[16px]">
            Too much? Open <b>Cowork</b> first, same brain, in a chat window.
          </span>
        </p>
      </>
    ),
  },

  // 28 — what to watch for
  {
    node: (
      <>
        <ContentHead>What to watch for</ContentHead>
        <div className="text-[23px]">
          <Bullets
            items={[
              <><b>Verify the facts.</b> It&apos;s confident even when it&apos;s wrong. You&apos;re the editor.</>,
              <><b>Context in, quality out.</b> A thin brief gives thin work.</>,
              <><b>Keep context fresh.</b> Stale briefs mislead the team.</>,
              <><b>You&apos;re still accountable.</b> It&apos;s your team, your name on the deliverable.</>,
            ]}
          />
        </div>
      </>
    ),
  },

  // 29 — close
  {
    variant: "center",
    node: (
      <>
        <h1 className="gradient-text">Stop being a team of one.</h1>
        <p className="mt-10 text-[26px] dim">You&apos;re still the leader. Now you have a team.</p>
        <p className="mt-3 text-[20px] muted">
          The bottleneck wasn&apos;t your ideas. It was throughput.
        </p>
        <p className="absolute bottom-12 left-[96px] text-[15px] muted">Ana Neto · Happyfact</p>
      </>
    ),
  },

  // 30 — Appendix
  { variant: "section", node: <SectionHead part="Reference" title="Appendix" /> },

  // 31 — install & cheat sheet
  {
    node: (
      <>
        <ContentHead>Install &amp; cheat sheet</ContentHead>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="mb-4 text-[20px] font-bold text-[var(--text-strong)]">Install</div>
            <pre className="codeblock text-[16px]">
              <span className="c"># Mac / Linux</span>{"\n"}
              curl -fsSL https://claude.ai/install.sh | bash{"\n"}
              <span className="c"># Windows (PowerShell)</span>{"\n"}
              irm https://claude.ai/install.ps1 | iex{"\n"}
              cd ~/my-work &amp;&amp; claude
            </pre>
            <p className="mt-4 text-[16px] dim">No terminal yet? Try Claude Cowork on the desktop app.</p>
          </div>
          <div>
            <div className="mb-4 text-[20px] font-bold text-[var(--text-strong)]">Commands</div>
            <table className="w-full text-left text-[17px]">
              <tbody className="dim">
                {[
                  ["/init", "Create CLAUDE.md"],
                  ["/clear", "Start fresh"],
                  ["/compact", "Compress memory"],
                  ["/model", "Switch model"],
                  ["/mcp", "Tool connections"],
                  ["/insights", "Workflow review"],
                ].map(([c, d]) => (
                  <tr key={c}>
                    <td className="py-1.5 pr-6"><code>{c}</code></td>
                    <td className="py-1.5">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    ),
  },

  // 32 — thank you
  {
    variant: "center",
    node: (
      <>
        <h1 className="gradient-text">Thank you</h1>
        <p className="mt-8 text-[24px] dim">Questions, disagreement, honest takes welcome.</p>
        <a
          href="/talks/claude-code-for-leaders-workspace.zip"
          download
          className="deck-dl-btn"
        >
          <Download size={18} /> Grab the starter workspace
        </a>
        <p className="mt-8 text-[18px] muted">Ana Neto</p>
      </>
    ),
  },
];

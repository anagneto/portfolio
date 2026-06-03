"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BookOpen, Check, Copy, X } from "lucide-react";

/* "Setup instructions" button for the closing slide. Opens a modal with the
   from-scratch install + /init guide (macOS / Windows tabs) that mirrors
   ./audience-instructions.md. Same portal + keydown-swallow pattern as
   CodeModal so the deck's arrow-key nav doesn't fire underneath and Escape
   closes it. Portaled into #deck-root to escape the scaled .stage transform. */

const C = ({ children }: { children: string }) => (
  <code className="instr-inline">{children}</code>
);

/* A command line with its own copy-to-clipboard button. */
function Cmd({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked; ignore
    }
  }
  return (
    <div className="instr-code">
      <span className="instr-code-text">{children}</span>
      <button type="button" className="instr-copy" onClick={copy} aria-label="Copy command">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="instr-step">
      <span className="instr-num">{n}</span>
      <div className="instr-step-body">
        <div className="instr-step-title">{title}</div>
        {children}
      </div>
    </li>
  );
}

function MacSteps() {
  return (
    <ol className="instr-steps">
      <Step n={1} title="Open the Terminal">
        Press <C>Cmd + Space</C>, type <b>Terminal</b>, press Enter.
      </Step>
      <Step n={2} title="Create a project folder">
        <Cmd>mkdir ~/Desktop/claude-demo</Cmd>
        <Cmd>cd ~/Desktop/claude-demo</Cmd>
        <p className="instr-note">
          Prefer no typing? Right-click the Desktop, New Folder, name it{" "}
          <C>claude-demo</C>, then run <C>cd ~/Desktop/claude-demo</C>.
        </p>
      </Step>
      <Step n={3} title="Install Claude Code">
        <Cmd>curl -fsSL https://claude.ai/install.sh | bash</Cmd>
        <p className="instr-note">Check it worked:</p>
        <Cmd>claude --version</Cmd>
        <p className="instr-note">
          If you see <i>command not found</i>, open a new tab (<C>Cmd + T</C>),{" "}
          <C>cd ~/Desktop/claude-demo</C>, and try again.
        </p>
      </Step>
      <Step n={4} title="Add the workspace">
        <Cmd>unzip ~/Downloads/claude-code-for-leaders-workspace.zip -d ~/Desktop/claude-demo</Cmd>
        <p className="instr-note">
          Or double-click the zip in Finder, then drag the contents into your{" "}
          <C>claude-demo</C> folder.
        </p>
      </Step>
      <Step n={5} title="Start Claude Code">
        <Cmd>claude</Cmd>
        <p className="instr-note">
          First time only, your browser opens to sign in to your Anthropic account.
          Then come back to the Terminal.
        </p>
      </Step>
      <Step n={6} title="Run your first prompt">
        Inside Claude Code, type <C>/init</C>. It reads your project and writes a{" "}
        <C>CLAUDE.md</C> describing it. You&apos;re up and running.
      </Step>
    </ol>
  );
}

function WindowsSteps() {
  return (
    <ol className="instr-steps">
      <Step n={1} title="Open PowerShell">
        Press the <C>Windows</C> key, type <b>PowerShell</b>, press Enter.
      </Step>
      <Step n={2} title="Create a project folder">
        <Cmd>mkdir $HOME\Desktop\claude-demo</Cmd>
        <Cmd>cd $HOME\Desktop\claude-demo</Cmd>
      </Step>
      <Step n={3} title="Install Claude Code">
        <Cmd>irm https://claude.ai/install.ps1 | iex</Cmd>
        <p className="instr-note">Check it worked:</p>
        <Cmd>claude --version</Cmd>
        <p className="instr-note">
          If you see an error, open a new PowerShell window, then{" "}
          <C>cd $HOME\Desktop\claude-demo</C> and try again.
        </p>
      </Step>
      <Step n={4} title="Add the workspace">
        Open <C>Downloads</C>, right-click the zip, <b>Extract All</b>, and copy the
        contents into your <C>claude-demo</C> folder.
      </Step>
      <Step n={5} title="Start Claude Code">
        <Cmd>claude</Cmd>
        <p className="instr-note">
          First time only, your browser opens to sign in. Then return to PowerShell.
        </p>
      </Step>
      <Step n={6} title="Run your first prompt">
        Inside Claude Code, type <C>/init</C>. It reads your project and writes a{" "}
        <C>CLAUDE.md</C> describing it. You&apos;re up and running.
      </Step>
    </ol>
  );
}

export function InstructionsModal() {
  const [open, setOpen] = useState(false);
  const [os, setOs] = useState<"mac" | "windows">("mac");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  return (
    <>
      <button type="button" className="deck-instr-btn" onClick={() => setOpen(true)}>
        <BookOpen size={18} /> Setup instructions
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="code-modal-backdrop" onClick={() => setOpen(false)}>
            <div className="code-modal instr-modal" onClick={(e) => e.stopPropagation()}>
              <div className="code-modal-head">
                <span className="font-mono text-[14px]">Get Claude Code running</span>
                <div className="code-modal-actions">
                  <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="instr-body">
                <p className="instr-lead">
                  From nothing to your first AI prompt in about 10 minutes. You&apos;ll
                  need an internet connection and an Anthropic account (you sign in
                  during step 5). Grab the zip first with the{" "}
                  <b>&ldquo;Grab the starter workspace&rdquo;</b> button on this slide,
                  it lands in your <C>Downloads</C> folder.
                </p>

                <div className="instr-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={os === "mac"}
                    className={`instr-tab ${os === "mac" ? "active" : ""}`}
                    onClick={() => setOs("mac")}
                  >
                    macOS
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={os === "windows"}
                    className={`instr-tab ${os === "windows" ? "active" : ""}`}
                    onClick={() => setOs("windows")}
                  >
                    Windows
                  </button>
                </div>

                {os === "mac" ? <MacSteps /> : <WindowsSteps />}

                <p className="instr-foot">
                  Stuck? Most problems are fixed by opening a fresh terminal window after
                  installing, then <C>cd</C>-ing back into your folder.
                </p>
              </div>
            </div>
          </div>,
          document.getElementById("deck-root") ?? document.body
        )}
    </>
  );
}

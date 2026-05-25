"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X, Copy, Check } from "lucide-react";

/* Wraps an inline code preview with a "Full file" button that opens a modal
   showing the complete file. While open, it swallows keydown events so the
   deck's arrow-key navigation doesn't fire underneath, and Escape closes it.
   The modal is portaled to <body> so it escapes the scaled .stage transform. */
export function ExpandableCode({
  preview,
  title,
  full,
  className = "",
}: {
  preview: ReactNode;
  title: string;
  full: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(full);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked; ignore
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Escape") setOpen(false);
    };
    // capture phase so we run before the deck's window listener
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  return (
    <div className={`relative ${className}`}>
      {preview}
      <button type="button" className="code-expand" onClick={() => setOpen(true)}>
        <Maximize2 size={14} /> Full file
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="code-modal-backdrop" onClick={() => setOpen(false)}>
            <div className="code-modal" onClick={(e) => e.stopPropagation()}>
              <div className="code-modal-head">
                <span className="font-mono text-[14px]">{title}</span>
                <div className="code-modal-actions">
                  <button type="button" className="code-copy" onClick={copy}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
              </div>
              <pre className="code-modal-body">
                {full.split("\n").map((line, i) => (
                  <div key={i} className={line.startsWith("#") ? "k" : undefined}>
                    {line || " "}
                  </div>
                ))}
              </pre>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

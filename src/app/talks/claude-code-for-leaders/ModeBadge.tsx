"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/* A small clickable badge that sits below a step card. Clicking it opens a
   modal explaining a Claude Code mode (plan / auto). Mirrors ExpandableCode:
   it swallows keydown events so the deck's arrow-key nav doesn't fire, Escape
   closes it, and the modal is portaled to <body> to escape the scaled stage. */
export function ModeBadge({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

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
      <button type="button" className="mode-badge" onClick={() => setOpen(true)}>
        {label}
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="code-modal-backdrop" onClick={() => setOpen(false)}>
            <div className="info-modal" onClick={(e) => e.stopPropagation()}>
              <div className="info-modal-head">
                <span className="info-modal-title">{title}</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              <div className="info-modal-body">{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

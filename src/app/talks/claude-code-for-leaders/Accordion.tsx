"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/* Collapsible step list for the "Start this week" slide. Rows start collapsed
   and opening one closes the others, so the slide height stays bounded while
   presenting. Each row's body holds the plain-English what + why, one small
   artifact, and a "Show me exactly" ModeBadge for the details. */
export type AccordionItem = { title: ReactNode; body: ReactNode };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-row${isOpen ? " open" : ""}`} key={i}>
            <button
              type="button"
              className="acc-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="acc-num">{i + 1}</span>
              <span className="acc-title">{it.title}</span>
              <ChevronDown className="acc-chev" size={22} />
            </button>
            <div className="acc-panel">
              <div className="acc-body">{it.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "./slides";

export default function Deck() {
  const [current, setCurrent] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  // Scale the 1280x720 stage to fit the viewport (screen only).
  useEffect(() => {
    const fit = () => {
      const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
      if (stageRef.current) {
        stageRef.current.style.transform = `translate(-50%, -50%) scale(${s})`;
      }
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setCurrent(clamped);
      if (typeof window !== "undefined") {
        history.replaceState(null, "", `#${clamped + 1}`);
      }
    },
    [total]
  );

  // Restore slide from URL hash on load and on hash changes (deep-linking).
  useEffect(() => {
    const syncFromHash = () => {
      const fromHash = parseInt(window.location.hash.replace("#", ""), 10);
      if (!Number.isNaN(fromHash)) {
        setCurrent(Math.max(0, Math.min(total - 1, fromHash - 1)));
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          go(current + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(current - 1);
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(total - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, total]);

  return (
    <>
      <div className="stage" ref={stageRef}>
        {slides.map((s, i) => (
          <section
            key={i}
            className={`slide ${s.variant ?? ""} ${i === current ? "active" : ""}`}
          >
            {s.node}
          </section>
        ))}
      </div>

      {/* Progress dots */}
      <div className="chrome progress">
        {slides.map((s, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`dot ${s.variant?.includes("section") ? "section" : ""} ${
              i === current ? "on" : ""
            }`}
            onClick={() => go(i)}
          />
        ))}
      </div>
      <div className="chrome counter">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </>
  );
}

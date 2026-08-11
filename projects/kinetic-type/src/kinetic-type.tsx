"use client";

import { useRef, type PointerEvent } from "react";
import "./styles.css";

const words = ["MOVE", "MAKE", "BREAK", "BUILD"];

export function KineticType({ compact = false }: { compact?: boolean }) {
  const fieldRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    fieldRef.current?.style.setProperty("--x", `${x}%`);
    fieldRef.current?.style.setProperty("--y", `${y}%`);
    fieldRef.current?.querySelectorAll<HTMLElement>(".kinetic-words span").forEach((word, index) => {
      const factor = (index - 1.5) * 0.45;
      word.style.setProperty("--tx", `${(x - 50) * factor}px`);
      word.style.setProperty("--ty", `${(y - 50) * factor}px`);
    });
  }

  return (
    <div className={`kinetic-field${compact ? " is-compact" : ""}`} ref={fieldRef} onPointerMove={handlePointerMove}>
      <div className="kinetic-orbit" aria-hidden="true" />
      <div className="kinetic-label"><span>Interactive type field</span><span>Move your cursor</span></div>
      <div className="kinetic-words">
        {words.map((word) => <span key={word}>{word}</span>)}
      </div>
      <div className="kinetic-coordinates" aria-hidden="true"><span>X</span><i /><span>Y</span></div>
    </div>
  );
}

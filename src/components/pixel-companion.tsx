"use client";

import { useRef, useState } from "react";

// Original 16×18 pixel sprite. Each character is one square, never a smoothed image.
const sprite = [
  "......kkkk......", "....kkkkkkkk....", "...kkkkkkkkkk...",
  "...kkwwkkwwkk...", "...kwwwkkwwwk...", "...kwkwkkwkwk...",
  "...kwwwbbwwwk...", "...kkwbbbbwkk...", "..kkkkwwwwkkkk..",
  ".kkkkwwwwwwkkkk.", "kkkkwwwwwwwwkkkk", "kk.kwwwwwwwwk.kk",
  "...kwwwwwwwwk...", "...kwwwwwwwwk...", "...kkwwwwwwkk...",
  "....kkkkkkkk....", "...bbbb..bbbb...", "..bbbbb..bbbbb..",
];

export default function PixelCompanion() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hop, setHop] = useState(0);
  const drag = useRef<{ x: number; y: number; startX: number; startY: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value));

  return (
    <button
      className="pixel-companion"
      type="button"
      aria-label="Pixel penguin: click to hop, drag to move, or use arrow keys. Home resets position."
      title="Drag me around. Click for a hop."
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        drag.current = { x: event.clientX, y: event.clientY, startX: position.x, startY: position.y, moved: false };
        suppressClick.current = false;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        const origin = drag.current;
        if (!origin) return;
        const dx = event.clientX - origin.x;
        const dy = event.clientY - origin.y;
        if (Math.abs(dx) + Math.abs(dy) > 4) origin.moved = true;
        setPosition({ x: clamp(origin.startX + dx, 32), y: clamp(origin.startY + dy, 20) });
      }}
      onPointerUp={() => { suppressClick.current = drag.current?.moved ?? false; drag.current = null; }}
      onPointerCancel={() => { drag.current = null; suppressClick.current = true; }}
      onLostPointerCapture={() => { drag.current = null; }}
      onClick={() => { if (!suppressClick.current) setHop((value) => value + 1); suppressClick.current = false; }}
      onKeyDown={(event) => {
        const steps: Record<string, [number, number]> = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8] };
        if (event.key === "Home") { event.preventDefault(); setPosition({ x: 0, y: 0 }); }
        const step = steps[event.key];
        if (!step) return;
        event.preventDefault();
        setPosition((value) => ({ x: clamp(value.x + step[0], 32), y: clamp(value.y + step[1], 20) }));
      }}
    >
      <svg key={hop} className={hop ? "penguin hop" : "penguin arrive"} viewBox="0 0 16 18" aria-hidden="true" shapeRendering="crispEdges">
        {sprite.flatMap((row, y) => [...row].map((pixel, x) => pixel === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" className={`pixel-${pixel}`} />))}
      </svg>
    </button>
  );
}

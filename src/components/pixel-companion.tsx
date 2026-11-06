"use client";

import { useEffect, useRef, useState } from "react";

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
  const [hop, setHop] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    const onVisibility = () => setVisible(!document.hidden);
    observer.observe(node);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  return (
    <>
      <div ref={track} className="penguin-track" data-paused={paused || !visible}>
        <button className="pixel-companion" type="button" aria-label="Make the penguin jump" title="Tap to jump" onClick={() => setHop(value => value + 1)}>
          <span className="penguin-facing"><span key={hop} className={hop ? "penguin-jump hop" : "penguin-jump"}>
            <svg className="penguin" viewBox="0 0 16 18" aria-hidden="true" shapeRendering="crispEdges">
              {sprite.flatMap((row, y) => [...row].map((pixel, x) => pixel === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" className={`pixel-${pixel}`} />))}
            </svg>
          </span></span>
        </button>
      </div>
      <button className="motion-toggle" type="button" aria-label={paused ? "Resume penguin walking" : "Pause penguin walking"} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume" : "Pause"}</button>
    </>
  );
}

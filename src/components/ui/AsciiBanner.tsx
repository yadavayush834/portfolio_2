"use client";

import React, { useState } from "react";

const asciiVariants = [
  {
    label: "SLANT",
    art: `
   ___  __  ___  __ _____ __  __
  /   | \\ \\/ / / / / ___// / / /
 / /| |  \\  / / / /\\__ \\/ /_/ / 
/ ___ |  / / /_/ /___/ / __  /  
/_/  |_| /_/ \\____//____/_/ /_/   
`.trim(),
  },
  {
    label: "BLOCK",
    art: `
█████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
███████║ ╚████╔╝ ██║   ██║███████╗███████║
██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║  ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝
`.trim(),
  },
  {
    label: "MINIMAL",
    art: `
 _ _ _ _   _ _   _ _   _ _ _ _   _   _ 
/ _ _ _ \\ | | | | | | / _ _ _ \\ | | | |
| |_| | | | |_| | | | \\_ _ _ \\  | |_| |
|  _  | |  \\_ _/| |_|  _ _ _) | |  _  |
|_| |_| |   | |  \\_ _/| _ _ _/  |_| |_|
`.trim(),
  },
];

export function AsciiBanner() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const nextVariant = () => {
    setSelectedIdx((prev) => (prev + 1) % asciiVariants.length);
  };

  return (
    <div className="space-y-2 select-none group cursor-pointer" onClick={nextVariant}>
      <pre
        className="font-mono text-[10px] sm:text-xs leading-none text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200 overflow-x-auto whitespace-pre font-bold"
        aria-hidden="true"
      >
        {asciiVariants[selectedIdx].art}
      </pre>
      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
        <span>[ASCII: {asciiVariants[selectedIdx].label}]</span>
        <span>• click to toggle</span>
      </div>
    </div>
  );
}

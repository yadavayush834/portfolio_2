"use client";

import React, { useState } from "react";

const asciiVariants = [
  {
    label: "CYBER SLANT",
    art: `
   ___   __  __ _   _ ____  _   _ 
  /   |  \\ \\/ /| | | / ___|| | | |
 / /| |   \\  / | | | \\___ \\| |_| |
/ ___ |   / /  | |_| |___) |  _  |
/_/  |_|  /_/    \\___/|____/|_| |_|
`.trim(),
  },
  {
    label: "3D SOLID",
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
    label: "FULL NAME (AYUSH YADAV)",
    art: `
   _   __   __ _   _ ____  _   _    __   __ _   ____    _   __   __
  / \\  \\ \\ / /| | | / ___|| | | |   \\ \\ / // \\ |  _ \\  / \\  \\ \\ / /
 / _ \\  \\ V / | | | \\___ \\| |_| |    \\ V // _ \\| | | |/ _ \\  \\ V / 
/ ___ \\  | |  | |_| |___) |  _  |     | |/ ___ \\ |_| / ___ \\  | |  
/_/   \\_\\|_|   \\___/|____/|_| |_|     |_/_/   \\_\\___//_/   \\_\\|_|  
`.trim(),
  },
  {
    label: "ISOMETRIC RETRO",
    art: `
 ▄▄▄       ██   ██ █    ██   ██████  ██   ██ 
▒████▄      ▒████▒  ██  ██▒▒██    ▒  ██   ██▒
▒██  ▀█▄     ▒██░  ▓██  █▄░░ ▓██▄   ▒███████▒
░██▄▄▄▄██    ░ █░  ▓▓█▄▄██▒  ▒   ██▒░██   ██▒
 ▒█   ▓██▒ ░ █░    ▒██████▒▒██████▒▒░██  ▒██▒
`.trim(),
  },
  {
    label: "MINI GLYPH (AYUSH YADAV)",
    art: `
 █▀█ █▄█ █░█ █▀ █░█   █▄█ █▀█ █▀▄ █▀█ █░█
 █▀█ ░█░ █▄█ ▄█ █▀█   ░█░ █▀█ █▄▀ █▀█ ░█░
`.trim(),
  },
  {
    label: "GHOST WIRE",
    art: `
┌─┐┬ ┬┬ ┬┌─┐┬ ┬  ┬ ┬┌─┐┌┬┐┌─┐┬  ┬
├─┤└┬┘│ │└─┐├─┤  └┬┘├─┤ ││├─┤└┐┌┘
┴ ┴ ┴ └─┘└─┘┴ ┴   ┴ ┴ ┴─┴┘┴ ┴ └┘ 
`.trim(),
  },
  {
    label: "COMPACT DOTS",
    art: `
  __ _ _  _ _  _ ____ _  _ 
 / _\\| | | | | |/ ___| || |
/ /_\\\\ \\_/ | |_|\\___ \\| __|
\\_||_|\\__/  \\__/|____/|_||_|
`.trim(),
  },
  {
    label: "MATRIX CODE",
    art: `
[■] 01000001 01011001 01010101 01010011 01001000
>>  A . Y . U . S . H   Y . A . D . A . V
`.trim(),
  },
];

export function AsciiBanner() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const nextVariant = () => {
    setSelectedIdx((prev) => (prev + 1) % asciiVariants.length);
  };

  return (
    <div
      className="space-y-1.5 select-none group cursor-pointer overflow-hidden no-scrollbar"
      onClick={nextVariant}
      title="Click to toggle ASCII art style"
    >
      <pre
        className="font-mono text-[9px] sm:text-[11px] md:text-xs leading-[1.12] text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 overflow-hidden no-scrollbar whitespace-pre font-bold"
        aria-label="Ayush Yadav ASCII art"
      >
        {asciiVariants[selectedIdx].art}
      </pre>
      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
        <span>[{asciiVariants[selectedIdx].label}]</span>
        <span className="text-zinc-700">•</span>
        <span className="text-zinc-500 group-hover:text-zinc-300">click to switch ({selectedIdx + 1}/{asciiVariants.length})</span>
      </div>
    </div>
  );
}

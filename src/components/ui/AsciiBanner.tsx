"use client";

import React, { useState } from "react";

const asciiVariants = [
  // 1. 3D Block Solid (Default)
  [
    "█████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗",
    "██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║",
    "███████║ ╚████╔╝ ██║   ██║███████╗███████║",
    "██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║",
    "██║  ██║   ██║   ╚██████╔╝███████║██║  ██║",
    "╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝",
  ].join("\n"),

  // 2. Cyber Slant
  [
    "   ___   __  __ _   _ ____  _   _ ",
    "  /   |  \\ \\/ /| | | / ___|| | | |",
    " / /| |   \\  / | | | \\___ \\| |_| |",
    "/ ___ |   / /  | |_| |___) |  _  |",
    "/_/  |_|  /_/    \\___/|____/|_| |_|",
  ].join("\n"),

  // 3. Full Name Classic (AYUSH YADAV)
  [
    "   _   __   __ _   _ ____  _   _    __   __ _   ____    _   __   __",
    "  / \\  \\ \\ / /| | | / ___|| | | |   \\ \\ / // \\ |  _ \\  / \\  \\ \\ / /",
    " / _ \\  \\ V / | | | \\___ \\| |_| |    \\ V // _ \\| | | |/ _ \\  \\ V / ",
    "/ ___ \\  | |  | |_| |___) |  _  |     | |/ ___ \\| |_| / ___ \\  | |  ",
    "/_/   \\_\\|_|   \\___/|____/|_| |_|     |_/_/   \\_\\___//_/   \\_\\|_|  ",
  ].join("\n"),

  // 4. Isometric Retro
  [
    " ▄▄▄       ██   ██ █    ██   ██████  ██   ██ ",
    "▒████▄      ▒████▒  ██  ██▒▒██    ▒  ██   ██▒",
    "▒██  ▀█▄     ▒██░  ▓██  █▄░░ ▓██▄   ▒███████▒",
    "░██▄▄▄▄██    ░ █░  ▓▓█▄▄██▒  ▒   ██▒░██   ██▒",
    " ▒█   ▓██▒ ░ █░    ▒██████▒▒██████▒▒░██  ▒██▒",
  ].join("\n"),

  // 5. Mini Glyph Blocks
  [
    "█▀█ █▄█ █░█ █▀ █░█   █▄█ █▀█ █▀▄ █▀█ █░█",
    "█▀█ ░█░ █▄█ ▄█ █▀█   ░█░ █▀█ █▄▀ █▀█ ░█░",
  ].join("\n"),

  // 6. Cyber Boxed Unicode
  [
    "╔═╗╦ ╦╦ ╦╔═╗╦ ╦   ╦ ╦╔═╗╔╦╗╔═╗╦  ╦",
    "╠═╣╚╦╝║ ║╚═╗╠═╣   ╚╦╝╠═╣ ║║╠═╣╚╗╔╝",
    "╩ ╩ ╩ ╚═╝╚═╝╩ ╩    ╩ ╩ ╩ ╩─┴┘╩ ╩ ╚╝ ",
  ].join("\n"),

  // 7. Ghost Wireframe
  [
    "┌─┐┬ ┬┬ ┬┌─┐┬ ┬   ┬ ┬┌─┐┌┬┐┌─┐┬  ┬",
    "├─┤└┬┘│ │└─┐├─┤   └┬┘├─┤ ││├─┤└┐┌┘",
    "┴ ┴ ┴ └─┘└─┘┴ ┴    ┴ ┴ ┴─┴┘┴ ┴ └┘ ",
  ].join("\n"),

  // 8. Minimalist Box Frame (AYUSH YADAV)
  [
    "//==================================\\\\",
    "||       A Y U S H   Y A D A V      ||",
    "\\\\==================================//",
  ].join("\n"),

  // 9. Minimalist Dot-Matrix
  [
    "  __ _ _  _ _  _ ____ _  _ ",
    " / _\\| | | | | |/ ___| || |",
    "/ /_\\\\ \\_/ | |_|\\___ \\| __|",
    "\\_||_|\\__/  \\__/|____/|_||_|",
  ].join("\n"),
];

export function AsciiBanner() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const nextVariant = () => {
    setSelectedIdx((prev) => (prev + 1) % asciiVariants.length);
  };

  return (
    <div
      className="select-none cursor-pointer overflow-hidden no-scrollbar py-1"
      onClick={nextVariant}
      title="Click to switch ASCII style"
    >
      <pre
        className="font-mono text-[9px] sm:text-[11px] md:text-xs leading-tight text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-150 overflow-hidden no-scrollbar whitespace-pre font-bold tracking-normal"
        aria-label="Ayush Yadav ASCII art"
      >
        {asciiVariants[selectedIdx]}
      </pre>
    </div>
  );
}

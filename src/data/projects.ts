export type Project = {
  name: string;
  description: string;
  repository?: string;
  features?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    name: "MacHypr",
    description: "A macOS-inspired Arch Linux desktop with a native menu bar, workspace-aware dock, and one-command setup.",
    repository: "https://github.com/yadavayush834/machypr",
  },
  {
    name: "Patchwork Studio",
    description: "A local website studio for building and exporting responsive sites with a visual editor.",
    features: [
      "Four visual themes, starter sites, and reusable sections.",
      "Drag-and-drop scenes, layers, colors, fonts, and undo/redo.",
      "Animated ASCII backgrounds, video loops, and image/video uploads.",
      "Desktop and phone previews with separate mobile positioning.",
      "Local autosave, editable project ZIPs, and standalone website exports.",
    ],
  },
  {
    name: "Indian sign language interpreter",
    description: "A React app with a Python backend for recognizing hand landmarks and interpreting signs.",
    repository: "https://github.com/yadavayush834/Indian-sign-language-intepreter",
  },
];

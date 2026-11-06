export type Project = {
  name: string;
  description: string;
  repository?: string;
};

export const projects: readonly Project[] = [
  {
    name: "MacHypr",
    description: "A macOS-inspired setup for Arch Linux and Hyprland, with a custom menu bar, dock, and one-command installer.",
    repository: "https://github.com/yadavayush834/machypr",
  },
  {
    name: "Patchwork Studio",
    description: "A visual website builder with drag-and-drop editing, themes, animated backgrounds, mobile previews, and project and website exports. Saves your work locally.",
  },
  {
    name: "Indian Sign Language Interpreter",
    description: "A sign-language recognition project using hand landmarks, with a React interface and Python backend.",
    repository: "https://github.com/yadavayush834/Indian-sign-language-intepreter",
  },
];

export type Project = {
  name: string;
  description: string;
  tools: readonly string[];
  repository: string;
};

export const projects: readonly Project[] = [
  {
    name: "MacHypr",
    description:
      "A macOS-inspired Arch Linux desktop with a native menu bar, a dock that follows your workspace, and one-command setup.",
    tools: ["Hyprland", "Python", "GTK"],
    repository: "https://github.com/yadavayush834/machypr",
  },
  {
    name: "Kafka event pipeline",
    description:
      "A Rust producer and consumer that send simulated sensor readings through Kafka, validate events, and flag high temperatures.",
    tools: ["Rust", "Kafka", "Docker"],
    repository: "https://github.com/yadavayush834/kafka-rust-pipeline",
  },
  {
    name: "Product recommendations",
    description:
      "A Magento module that finds related products using OpenSearch vector search and embeddings from Ollama or AWS Bedrock.",
    tools: ["PHP", "Magento", "OpenSearch"],
    repository:
      "https://github.com/yadavayush834/magento-aiproductrecommendation",
  },
  {
    name: "Game-Bot",
    description:
      "An imitation-learning experiment that records gameplay, trains a PyTorch model, and replays predicted keyboard and mouse actions.",
    tools: ["Python", "PyTorch", "MobileNetV2"],
    repository: "https://github.com/yadavayush834/game_ai",
  },
  {
    name: "Sign language interpreter",
    description:
      "A sign-language project with a React interface and a Python backend for hand-landmark recognition and model inference.",
    tools: ["React", "FastAPI", "MediaPipe"],
    repository:
      "https://github.com/yadavayush834/Indian-sign-language-intepreter",
  },
];

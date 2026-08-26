export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Computer Vision" | "Backend & Cryptography" | "Web3 & Distributed Systems" | "Applied Systems";
  featured: boolean;
  monogram: string;
  accentColor: string; // for custom aesthetic lighting
  badge: string;
  architectureNotes: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoType?: "isl-sim" | "crypto-sim" | "vector-sim" | "link";
  liveUrl?: string;
  vectorKeywords: string[]; // For our interactive AI matcher
}

export const projectCategories = [
  "All Systems",
  "AI & Computer Vision",
  "Backend & Cryptography",
  "Web3 & Distributed Systems",
  "Applied Systems",
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "game-bot",
    title: "Game-Bot (AI Gameplay Agent)",
    tagline: "Imitation learning neural agent that learns gameplay control directly from human demonstrations.",
    category: "AI & Computer Vision",
    featured: true,
    monogram: "GB",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badge: "PyTorch / DAgger / Vision",
    architectureNotes: "Uses MSS for high-throughput screen frame capture, MobileNetV2 backbone for low-latency visual feature extraction, multi-label action policy head, and DAgger iterative dataset aggregation.",
    keyFeatures: [
      "Sub-millisecond frame buffer capture using MSS and memory-mapped NumPy arrays",
      "DAgger (Dataset Aggregation) loop to eliminate distributional shift during autonomous gameplay",
      "MobileNetV2 feature extraction with custom multi-label keyboard/mouse action heads",
      "Real-time non-blocking input interception and replay with Pynput"
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "MobileNetV2", "MSS", "Pynput", "NumPy"],
    githubUrl: "https://github.com/yadavayush834/game_ai",
    vectorKeywords: ["reinforcement learning", "imitation learning", "computer vision", "game ai", "pytorch", "neural network", "mobilenet", "opencv", "frame capture"]
  },
  {
    id: "isl-interpreter",
    title: "ISL Interpreter (Sign Language AI)",
    tagline: "Real-time Indian Sign Language to speech & text translator running client-side with MediaPipe & TensorFlow.js.",
    category: "AI & Computer Vision",
    featured: true,
    monogram: "ISL",
    accentColor: "from-cyan-500/20 to-blue-500/10",
    badge: "MediaPipe / TF.js / Accessible",
    architectureNotes: "Extracts 21 3D hand keypoints per hand via MediaPipe in the browser, processes temporal landmark vectors via TensorFlow.js classification graph, and triggers Web Speech API synthesis.",
    keyFeatures: [
      "Zero-installation client-side inference executing at 30+ FPS directly in the web browser",
      "Multi-hand spatial coordinate normalization resistant to lighting and camera angle variances",
      "Real-time text accumulation and bidirectional speech synthesis via Web Speech API",
      "Full-stack authentication and cloud gesture sync with Firebase & MongoDB"
    ],
    techStack: ["React", "TensorFlow.js", "MediaPipe", "FastAPI", "Firebase", "MongoDB"],
    githubUrl: "https://github.com/yadavayush834/Indian-sign-language-intepreter",
    liveDemoType: "isl-sim",
    vectorKeywords: ["sign language", "accessibility", "mediapipe", "tensorflow.js", "gesture recognition", "computer vision", "real-time audio", "react"]
  },
  {
    id: "secure-chat",
    title: "SecureChat (Zero-Trust Cryptographic Messenger)",
    tagline: "End-to-end authenticated real-time messenger with client-side ECC signatures and replay-resistant protocols.",
    category: "Backend & Cryptography",
    featured: true,
    monogram: "SC",
    accentColor: "from-amber-500/20 to-orange-500/10",
    badge: "WebSockets / ethers.js / ECC",
    architectureNotes: "Eliminates server-stored passwords. Client signs challenge nonces using secp256k1 private keys via ethers.js; backend verifies signatures before granting ephemeral WebSocket session channels.",
    keyFeatures: [
      "Zero-trust authentication using BIP-39 mnemonic seeds and elliptic curve digital signatures (secp256k1)",
      "Strict nonce-based replay attack mitigation on every WebSocket payload",
      "Ultra low-latency bidirectional messaging with presence indicators and typing telemetry",
      "MongoDB capped event collections for optimized audit streaming"
    ],
    techStack: ["React", "Node.js", "Socket.IO", "ethers.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/yadavayush834/chat_app",
    liveDemoType: "crypto-sim",
    vectorKeywords: ["cryptography", "websockets", "real-time chat", "ethers.js", "ecc signatures", "zero-trust", "node.js", "security", "bip39"]
  },
  {
    id: "magento-ai-rec",
    title: "AI Semantic Recommendation Engine",
    tagline: "Vector search and hybrid recommendation service built for IndiaHandmade.com (Digital India Corporation).",
    category: "Applied Systems",
    featured: false,
    monogram: "REC",
    accentColor: "from-violet-500/20 to-purple-500/10",
    badge: "OpenSearch k-NN / Ollama / Magento",
    architectureNotes: "Synchronizes product catalog into OpenSearch dense vector indices; uses Ollama embedding models for semantic matching with an AWS Bedrock-ready orchestration interface.",
    keyFeatures: [
      "High-dimensional k-NN vector search indexing thousands of artisanal handicraft SKUs",
      "Hybrid ranking blending semantic similarity scores with customer browsing intent",
      "Pluggable embedding pipeline compatible with local Ollama and cloud AWS Bedrock APIs",
      "Custom Magento 2 REST API endpoints seamlessly integrated into production checkout flows"
    ],
    techStack: ["PHP", "Magento 2", "OpenSearch k-NN", "Ollama", "AWS Bedrock", "MySQL"],
    githubUrl: "https://github.com/yadavayush834/magento-aiproductrecommendation",
    vectorKeywords: ["opensearch", "vector search", "knn", "embeddings", "ollama", "recommendations", "ecommerce", "magento", "bedrock"]
  },
  {
    id: "pay-per-pr",
    title: "Pay-per-PR (Solana Bounty Protocol)",
    tagline: "Decentralized micro-bounty protocol rewarding open-source GitHub pull request merges directly on Solana.",
    category: "Web3 & Distributed Systems",
    featured: false,
    monogram: "PR",
    accentColor: "from-indigo-500/20 to-sky-500/10",
    badge: "Solana / Anchor / Next.js",
    architectureNotes: "Smart contract escrow written in Rust with Anchor framework. GitHub Webhook listeners verify PR merge commit signatures and programmatically release SOL escrow funds to developer wallet.",
    keyFeatures: [
      "Non-custodial smart escrow program ensuring trustless payout upon PR merge",
      "Webhook oracle verifying cryptographically signed Git commit trees",
      "Instant token settlement on Solana Devnet/Mainnet with sub-cent transaction fees"
    ],
    techStack: ["Next.js", "Solana", "Anchor", "Rust", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yadavayush834/pay-per-pr",
    vectorKeywords: ["solana", "web3", "smart contracts", "anchor", "rust", "github webhook", "escrow", "crypto"]
  },
  {
    id: "quillvanta",
    title: "Quillvanta (Local RAG & Knowledge Agent)",
    tagline: "Privacy-first Retrieval-Augmented Generation agent with local vector indexing and ultra-fast Groq LLM reasoning.",
    category: "AI & Computer Vision",
    featured: false,
    monogram: "QV",
    accentColor: "from-rose-500/20 to-pink-500/10",
    badge: "ChromaDB / Groq / RAG",
    architectureNotes: "Chunks heterogeneous documents into ChromaDB embeddings, executes hybrid BM25 + dense semantic retrieval, and streams low-latency context-grounded completions via Groq LPU inference.",
    keyFeatures: [
      "Zero telemetry local document parsing for sensitive private archives",
      "Dynamic chunk reranking optimizing context window utilization",
      "Sub-200ms time-to-first-token streaming responses using Groq LPUs"
    ],
    techStack: ["Python", "ChromaDB", "Groq API", "LangChain", "FastAPI"],
    githubUrl: "https://github.com/yadavayush834/quillvanta",
    vectorKeywords: ["rag", "chromadb", "groq", "llm", "vector database", "semantic retrieval", "python"]
  },
  {
    id: "suraksha-cam",
    title: "Suraksha Cam (Security & Telemetry Hub)",
    tagline: "Real-time edge security monitor with automated motion detection, incident logging, and analytics dashboard.",
    category: "Applied Systems",
    featured: false,
    monogram: "SC",
    accentColor: "from-amber-500/20 to-yellow-500/10",
    badge: "TypeScript / Recharts / WebSockets",
    architectureNotes: "Consumes edge camera motion triggers via WebSocket streams and visualizes temporal incident frequencies with interactive Recharts time series.",
    keyFeatures: [
      "Live incident frequency heatmap and anomaly detection indicators",
      "Resilient offline-first telemetry caching with indexedDB fallbacks"
    ],
    techStack: ["React", "TypeScript", "Recharts", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/yadavayush834/suraksha-cam",
    vectorKeywords: ["security", "iot", "motion detection", "telemetry", "recharts", "dashboard"]
  },
  {
    id: "jjk-open",
    title: "JJK Open (Interactive GenAI Experience)",
    tagline: "Gamified domain expansion experience powered by multimodal Google Gemini generative pipelines.",
    category: "Applied Systems",
    featured: false,
    monogram: "JJK",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    badge: "React / Vite / Gemini AI",
    architectureNotes: "Interactive state machine synthesizing dynamic battle narratives and adaptive character dialogue with structured JSON schema streaming.",
    keyFeatures: [
      "Dynamic procedural story branching based on live user inputs",
      "Synthesized anime visual styling and customized audio cue triggers"
    ],
    techStack: ["React", "Vite", "Google GenAI SDK", "Tailwind CSS"],
    githubUrl: "https://github.com/yadavayush834/jjk-open",
    vectorKeywords: ["gemini", "generative ai", "multimodal", "react", "gamification"]
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  score: string;
  verificationBadge: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  tag: string;
  items: {
    name: string;
    level: "Core" | "Advanced" | "Production" | "Applied";
    iconName?: string;
  }[];
}

export const profileData = {
  name: "Ayush Yadav",
  title: "Backend & Applied AI Engineer",
  tagline: "Architecting real-time distributed systems, cryptographic security workflows, and production AI pipelines.",
  location: "Delhi, India",
  email: "ayushwell100@gmail.com",
  phone: "+91 9810679438",
  availability: "Open for Software Engineering Roles & Research Collaborations",
  statusBeacon: "ONLINE / ACTIVE",
  resumePath: "/Ayush-Yadav-Resume.pdf",
  socials: {
    github: "https://github.com/yadavayush834",
    x: "https://x.com/sudorunner0",
    leetcode: "https://leetcode.com/u/ayushwell100",
    email: "mailto:ayushwell100@gmail.com",
  },
  metrics: [
    { label: "LeetCode & DSA", value: "300+", detail: "Problems solved with optimal complexity" },
    { label: "Academic CGPA", value: "8.64", detail: "B.Tech Computer Science & Engineering" },
    { label: "Infosys C++ Exam", value: "100%", detail: "Springboard Verified Certification" },
    { label: "Govt. Ministry Project", value: "Live", detail: "Digital India Corp (IndiaHandmade)" },
  ],
  bio: `Backend developer and systems builder specialized in high-performance services, real-time protocols (WebSockets), zero-trust cryptographic authentication, and applied AI. Built vector search recommendation systems with OpenSearch k-NN & Ollama for the Ministry of Textiles and developed real-time computer vision sign language interpreters.`,
  
  experiences: [
    {
      id: "dic-ministry",
      role: "Backend Development Intern",
      organization: "Digital India Corporation — Ministry of Textiles",
      period: "June 2026 – Present",
      location: "India (Hybrid)",
      badge: "Govt. of India Initiative",
      highlights: [
        "Mapped the end-to-end customer discovery journey to Magento 2 REST APIs on IndiaHandmade.com.",
        "Engineered an AI-powered recommendation module utilizing OpenSearch k-NN for high-dimensional semantic search.",
        "Integrated Ollama embedding pipelines with an AWS Bedrock-compatible modular architecture for personalized product recommendation carousels."
      ],
      techStack: ["PHP", "Magento 2", "MySQL", "OpenSearch k-NN", "Ollama", "AWS Bedrock", "REST APIs"]
    },
    {
      id: "gssoc-oss",
      role: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSoC)",
      period: "2026",
      location: "Remote",
      badge: "Open Source",
      highlights: [
        "Authored pull requests for flagship repositories including CommitPulse and Hybrid Recommender.",
        "Implemented end-to-end unit and UI testing suites, patched security vulnerabilities, and elevated code health.",
        "Architected scalable backend microservices and FastAPI endpoints with robust error handling."
      ],
      techStack: ["React", "TypeScript", "Python", "FastAPI", "Jest", "Vitest", "Git"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "dce-btech",
      degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
      institution: "Dronacharya College of Engineering",
      period: "2024 — 2028",
      location: "Gurugram, Haryana, India",
      score: "8.64 CGPA",
      details: "Consistent academic performance (Sem 1: 8.30, Sem 2: 8.80, Sem 3: 8.79) with focus on Operating Systems, Networks, Cryptography, and Distributed Computing."
    },
    {
      id: "kv-school",
      degree: "Senior Secondary & High School (CBSE)",
      institution: "Kendriya Vidyalaya",
      period: "2012 — 2024",
      location: "Delhi, India",
      score: "Class 10: 90% | Class 12: 84%",
      details: "Strong foundational grounding in Mathematics, Physics, and algorithmic computer programming."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Infosys Springboard: C++ Programming",
      issuer: "Infosys Springboard",
      score: "100% Score",
      verificationBadge: "Verified Master Score",
      description: "Comprehensive mastery of object-oriented architecture, memory management, pointers, and STL efficiency."
    },
    {
      title: "NPTEL: Data Structures & Algorithms",
      issuer: "IIT / NPTEL",
      score: "68% Elite Grade",
      verificationBadge: "Academic Certified",
      description: "Rigorous theoretical and applied coursework in graph theory, dynamic programming, and asymptotic analysis."
    },
    {
      title: "300+ Algorithmic Problems Solved",
      issuer: "LeetCode & CodeChef",
      score: "Active Rank",
      verificationBadge: "Competitive Solver",
      description: "Consistent problem solving in dynamic programming, trees, graphs, sliding windows, and bit manipulation."
    }
  ] as CertificationItem[],

  skillCategories: [
    {
      id: "languages",
      name: "Core Languages",
      tag: "Runtime",
      items: [
        { name: "C++ (STL & OOP)", level: "Advanced" },
        { name: "C (Systems & Raylib)", level: "Advanced" },
        { name: "Python", level: "Production" },
        { name: "TypeScript", level: "Production" },
        { name: "JavaScript (ES6+)", level: "Production" },
        { name: "PHP", level: "Applied" },
        { name: "SQL", level: "Production" },
        { name: "Bash", level: "Advanced" }
      ]
    },
    {
      id: "backend-infra",
      name: "Backend & Systems",
      tag: "Architecture",
      items: [
        { name: "NestJS", level: "Production" },
        { name: "FastAPI", level: "Production" },
        { name: "Express.js", level: "Production" },
        { name: "Node.js", level: "Production" },
        { name: "Socket.IO (WebSockets)", level: "Production" },
        { name: "API Scaling (10k+ QPS)", level: "Production" },
        { name: "REST & GraphQL APIs", level: "Production" },
        { name: "Magento 2 REST APIs", level: "Applied" }
      ]
    },
    {
      id: "ai-vision",
      name: "Applied AI, Agents & Vision",
      tag: "Intelligence",
      items: [
        { name: "PyTorch", level: "Advanced" },
        { name: "LLM Autonomous Agents", level: "Production" },
        { name: "TensorFlow.js", level: "Production" },
        { name: "MediaPipe (Gesture AI)", level: "Production" },
        { name: "OpenSearch k-NN", level: "Production" },
        { name: "Ollama (Local Embeddings)", level: "Production" },
        { name: "AWS Bedrock", level: "Applied" },
        { name: "OpenCV", level: "Advanced" }
      ]
    },
    {
      id: "databases-storage",
      name: "Databases & Storage",
      tag: "Persistence",
      items: [
        { name: "PostgreSQL", level: "Production" },
        { name: "MySQL", level: "Production" },
        { name: "Redis (Caching/Queues)", level: "Production" },
        { name: "MongoDB", level: "Production" },
        { name: "Supabase", level: "Production" },
        { name: "ChromaDB (Vector Search)", level: "Advanced" }
      ]
    },
    {
      id: "security-web3",
      name: "Security, Web3 & Graphics",
      tag: "Protocols",
      items: [
        { name: "Cryptographic Auth (ECC/ECDSA)", level: "Advanced" },
        { name: "BIP-39 & Signatures", level: "Advanced" },
        { name: "Solana Anchor / Web3", level: "Advanced" },
        { name: "Raylib (C Game Dev)", level: "Advanced" },
        { name: "Passport.js & JWT", level: "Production" }
      ]
    },
    {
      id: "devops-tooling",
      name: "DevOps & Tooling",
      tag: "Infrastructure",
      items: [
        { name: "Docker", level: "Production" },
        { name: "Git & GitHub Actions", level: "Production" },
        { name: "Next.js & Tailwind CSS", level: "Production" },
        { name: "Postman / APIDash", level: "Production" },
        { name: "Jest / Vitest", level: "Production" },
        { name: "Linux / Arch Environment", level: "Production" }
      ]
    }
  ] as SkillCategory[]
};

# Portfolio Design & Engineering Architecture Notes

This document captures the complete design principles, technical decisions, data model, and insights developed during the creation and iteration of **Ayush Yadav's Portfolio**.

---

## 1. Core Profile & Background

- **Name**: Ayush Yadav
- **Title**: Backend & Applied AI Engineer
- **Location**: Delhi, India
- **Email**: `ayushwell100@gmail.com`
- **Profiles**:
  - GitHub: [github.com/yadavayush834](https://github.com/yadavayush834) (61 public repositories)
  - X / Twitter: [x.com/sudorunner0](https://x.com/sudorunner0)
  - LinkedIn: [linkedin.com/in/ayush-yadav-537614265](https://www.linkedin.com/in/ayush-yadav-537614265/)
  - LeetCode: [leetcode.com/u/ayushwell100](https://leetcode.com/u/ayushwell100) (300+ Problems Solved)
- **Current Internship**:
  - **Backend Development Intern** at *Digital India Corporation (Ministry of Textiles)*
  - Working on IndiaHandmade.com: Magento 2 REST APIs, OpenSearch k-NN semantic search, Ollama embeddings, AWS Bedrock.
- **Open Source**:
  - **GirlScript Summer of Code (GSSoC '26)** contributor on CommitPulse & Hybrid Recommender.
- **Education & Credentials**:
  - **B.Tech CSE (2024–2028)** @ Dronacharya College of Engineering — 8.64 CGPA
  - **Infosys Springboard**: C++ Programming (100% Score)
  - **NPTEL**: Data Structures & Algorithms (68% Elite Grade)

---

## 2. Design System & Aesthetics

### The Minimalist Philosophy
1. **Zero Clutter**: Avoid redundant hero titles, generic animated particles, loud gradient meshes, or overcrowded badge walls.
2. **ASCII Hero Identity**: Monospace ASCII lettering serves as the primary name banner, eliminating duplicate `<h1>` text while giving an authentic terminal/hacker personality.
3. **Borderless Typography**:
   - Replaced boxed card containers with clean, line-by-line typography and consistent left-accent dividers (`border-l-2`).
   - Uniform font sizing and monospace accents prevent visual hierarchy fatigue.
4. **Color Uniformity**:
   - Replaced multi-colored score tags (green, amber, cyan) with uniform `font-mono text-zinc-400` / `text-zinc-500` to maintain clean visual balance.
5. **Zero Scrollbars**:
   - Eliminated ugly native Windows horizontal and vertical scrollbars across `<pre>`, `html`, and `body` using `scrollbar-width: none; -ms-overflow-style: none;` and `::-webkit-scrollbar { display: none; width: 0; }`.

---

## 3. Technical Stack & Architecture

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Styling**: Tailwind CSS v4 with `@custom-variant dark (&:where(.dark, .dark *));`
- **Icons**: Custom lightweight inline SVG icons (`GithubIcon`, `XIcon`, `LinkedinIcon`) + Lucide Icons (`Sun`, `Moon`, `ChevronDown`, `Download`, `Mail`, `Copy`, `Check`, `Code2`, `ArrowUpRight`).
- **State Management**:
  - Interactive ASCII art font cycler (12 curated FIGlet styles with escaped characters).
  - Progressive disclosure: 3 flagship projects visible by default with a "See more projects" expand toggle.
  - Light/Dark theme switching synchronized with `document.documentElement`, `document.body`, and `localStorage`.

---

## 4. Skills & Technologies Matrix (Extracted from 61 GitHub Repositories)

- **Core Languages**: C++ (STL & OOP), C (Systems & Raylib), Python, TypeScript, JavaScript (ES6+), PHP, SQL, Bash
- **Backend & Systems**: NestJS, FastAPI, Express.js, Node.js, Socket.IO (WebSockets), API Scaling (10k+ QPS), REST & GraphQL APIs, Magento 2 REST APIs
- **Applied AI, Agents & Vision**: PyTorch, LLM Autonomous Agents (`daily_use_agent`, `lil-agent`), TensorFlow.js, MediaPipe (Gesture AI), OpenSearch k-NN, Ollama (Local Embeddings), AWS Bedrock, OpenCV
- **Databases & Storage**: PostgreSQL, MySQL, Redis (Caching/Queues), MongoDB, Supabase, ChromaDB (Vector Search)
- **Security, Web3 & Graphics**: Cryptographic Auth (ECC/ECDSA), BIP-39 & Signatures, Solana Anchor / Web3, Raylib (C Game Dev), Passport.js & JWT
- **DevOps & Tooling**: Docker, Git & GitHub Actions, Next.js & Tailwind CSS, Postman / APIDash, Jest / Vitest, Linux / Arch Environment

---

## 5. Hosting & Deployment Insights: Why Next.js on Vercel Beats Rust

- **Static Generation**: During `npm run build`, Next.js compiles the entire page into pure static HTML/CSS/JS.
- **Global Edge CDN**: Vercel serves cached assets from edge nodes worldwide, yielding **sub-25ms Time-To-First-Byte (TTFB)**.
- **No WASM/Compute Overhead**: Rewriting a 1-page portfolio in Rust/WASM would require downloading heavier `.wasm` binaries and bridging DOM calls through JavaScript without any perceptible runtime benefit.
- **Perfect Lighthouse Score**: Static CDN delivery ensures 100/100 scores in Performance, SEO, and Accessibility.

---

## 6. GitHub Profile README Blueprint

To replicate this exact aesthetic on your GitHub profile:
1. Create a repository named `yadavayush834/yadavayush834`.
2. Add a `README.md` containing the 3D Solid ASCII banner, brief bio, flagship project links, line-by-line skills, and social links.
3. (Optional) Automate dynamic statistics using a GitHub Action cron job or embed generated 3D contribution cards from **CommitPulse**.

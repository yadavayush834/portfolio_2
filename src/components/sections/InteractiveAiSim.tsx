"use client";

import React, { useState, useMemo } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Sparkles, Search, Cpu, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const presetQueries = [
  "Cryptographic zero-trust & real-time messaging",
  "Imitation learning & reinforcement game agent",
  "Sign language computer vision to speech",
  "OpenSearch k-NN vector search & embeddings",
  "Solana smart contract bounty escrow",
  "Local RAG with ChromaDB & Groq inference",
];

interface InteractiveAiSimProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function InteractiveAiSim({ onSelectProject }: InteractiveAiSimProps) {
  const [query, setQuery] = useState(presetQueries[0]);
  const [isComputing, setIsComputing] = useState(false);

  // Simulated vector embeddings calculation & cosine similarity matching
  const searchResults = useMemo(() => {
    const qLower = query.toLowerCase();
    const tokens = qLower.split(/[\s,.-]+/).filter((t) => t.length > 2);

    return projectsData.map((project) => {
      let score = 0.35; // base baseline similarity

      // Keyword match boost
      project.vectorKeywords.forEach((kw) => {
        tokens.forEach((t) => {
          if (kw.toLowerCase().includes(t)) score += 0.18;
        });
      });

      project.techStack.forEach((tech) => {
        tokens.forEach((t) => {
          if (tech.toLowerCase().includes(t)) score += 0.15;
        });
      });

      if (project.title.toLowerCase().includes(qLower)) score += 0.3;
      if (project.tagline.toLowerCase().includes(qLower)) score += 0.25;

      // Cap at 0.99
      const normalizedScore = Math.min(0.99, Math.max(0.42, score));
      return {
        project,
        similarity: normalizedScore,
        percentage: (normalizedScore * 100).toFixed(1),
      };
    }).sort((a, b) => b.similarity - a.similarity);
  }, [query]);

  const handleQueryChange = (newQ: string) => {
    setIsComputing(true);
    setQuery(newQ);
    setTimeout(() => setIsComputing(false), 200);
  };

  return (
    <section id="ai-sim" className="py-20 relative overflow-hidden bg-[#090B12]/80 border-y border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator • OpenSearch k-NN & Ollama Vector Retrieval</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Query My Systems With Semantic Search
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Experience the vector matching engine inspired by my recommendation system for the Ministry of Textiles. Click a topic or type a custom engineering query to inspect cosine similarity scores.
          </p>
        </div>

        {/* Interactive Query Input & Preset Tags */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="e.g. Real-time WebSockets with cryptographic verification..."
              className="w-full pl-11 pr-24 py-3.5 rounded-2xl bg-[#0F1422] border border-cyan-500/30 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
              <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>k-NN v3.2</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-xs font-mono text-zinc-400 self-center mr-1">Presets:</span>
            {presetQueries.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleQueryChange(preset)}
                className={`text-xs font-mono px-3 py-1 rounded-lg border transition-all ${
                  query === preset
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Results Stream Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {searchResults.slice(0, 3).map(({ project, percentage }, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group p-5 rounded-2xl bg-[#0D101A] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-[#111624] transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                    #{index + 1}
                  </span>
                  <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-400">
                    {percentage}% Similarity
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

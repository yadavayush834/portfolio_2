"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Code2, Cpu, Database, Shield, Wrench, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 className="w-4 h-4 text-cyan-400" />,
    "backend-infra": <Cpu className="w-4 h-4 text-amber-400" />,
    "ai-vision": <Layers className="w-4 h-4 text-emerald-400" />,
    "databases-storage": <Database className="w-4 h-4 text-sky-400" />,
    "security-tools": <Shield className="w-4 h-4 text-rose-400" />,
  };

  const filteredCategories = profileData.skillCategories.filter((cat) => {
    if (selectedCategory === "all") return true;
    return cat.id === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Skill Matrix
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Categorized by runtime environments, backend architectures, AI/ML models, and security workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                : "bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            All Disciplines
          </button>
          {profileData.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                  : "bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-[#0D101A] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 space-y-5 group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                    {categoryIcons[cat.id] || <Code2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">{cat.name}</h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {cat.tag}
                    </span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  {cat.items.length} Modules
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-colors"
                  >
                    <div className="font-mono text-xs font-semibold text-zinc-200">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

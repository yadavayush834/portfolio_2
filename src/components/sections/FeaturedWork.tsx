"use client";

import React from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
  onLaunchDemo?: (demoType: string) => void;
}

export function FeaturedWork({ onSelectProject, onLaunchDemo }: FeaturedWorkProps) {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="featured" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>Flagship Engineering Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Selected Systems & Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Deep-dive into production systems spanning computer vision imitation learning, client-side gesture recognition, and cryptographic zero-trust architectures.
            </p>
          </div>

          <a href="#all-projects">
            <Button variant="outline" size="md">
              View All 8+ Repositories
            </Button>
          </a>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-10">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0B0E17] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Background ambient lighting accent */}
              <div
                className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br ${project.accentColor} blur-[90px] opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                {/* Left Column (Index, Title, Description, Features) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-400 font-bold">
                      SYSTEM 0{index + 1}
                    </span>
                    <Badge variant="cyan">{project.category}</Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed font-light">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Architecture Callout */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Spec</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                      {project.architectureNotes}
                    </p>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      variant="cyan"
                      size="md"
                      onClick={() => onSelectProject(project)}
                      icon={<ArrowUpRight className="w-4 h-4" />}
                    >
                      Deep Dive Inspector
                    </Button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="md" icon={<GithubIcon className="w-4 h-4" />}>
                        Source Code
                      </Button>
                    </a>
                    {project.liveDemoType && (
                      <Button
                        variant="ghost"
                        size="md"
                        icon={<Sparkles className="w-4 h-4 text-cyan-400" />}
                        onClick={() => {
                          if (onLaunchDemo && project.liveDemoType) {
                            onLaunchDemo(project.liveDemoType);
                          }
                        }}
                      >
                        Try Interactive Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Column (Key Implementation Points & Tech Matrix) */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#0E121E]/80 border border-white/[0.06]">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Key Technical Benchmarks
                    </div>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ProjectItem } from "@/data/projects";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onLaunchDemo?: (demoType: string) => void;
}

export function ProjectModal({ project, onClose, onLaunchDemo }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0C0F17] shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 z-10">
        {/* Top bar with category & close button */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
              {project.monogram}
            </span>
            <Badge variant="cyan">{project.category}</Badge>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Architectural Notes */}
        <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Architecture & System Implementation</span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.architectureNotes}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Engineering Highlights & Benchmarks</span>
          </div>
          <ul className="grid grid-cols-1 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8 space-y-2.5">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="md" icon={<GithubIcon className="w-4 h-4" />}>
                View Source Repository
              </Button>
            </a>
            {project.liveDemoType && (
              <Button
                variant="cyan"
                size="md"
                icon={<Sparkles className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  if (onLaunchDemo && project.liveDemoType) {
                    onLaunchDemo(project.liveDemoType);
                  }
                }}
              >
                Launch Live Simulator
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Inspector
          </Button>
        </div>
      </div>
    </div>
  );
}

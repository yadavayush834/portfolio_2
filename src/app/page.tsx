"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { projectsData, ProjectItem } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";
import { AsciiBanner } from "@/components/ui/AsciiBanner";
import {
  Download,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Phone,
  Sparkles,
} from "lucide-react";

export default function MinimalPortfolio() {
  const [copied, setCopied] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleProject = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-zinc-800 selection:text-white py-16 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Header / Intro */}
        <section className="space-y-4">
          <AsciiBanner />

          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            {profileData.title} • {profileData.location}
          </p>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light pt-1">
            I engineer scalable backend systems, real-time WebSocket applications with cryptographic authentication, and applied AI pipelines. Currently building semantic recommendation modules at{" "}
            <span className="text-white font-medium">Digital India Corporation (Ministry of Textiles)</span>.
          </p>

          {/* Minimal Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={profileData.resumePath}
              download="Ayush-Yadav-Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white text-xs font-medium transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs transition-all"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Email</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Experience
          </h2>

          <div className="space-y-6">
            {profileData.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm font-medium text-white">
                    {exp.role}{" "}
                    <span className="text-zinc-400 font-normal">
                      at {exp.organization}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 shrink-0">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Selected Projects
            </h2>
            <span className="text-xs font-mono text-zinc-500">Click to expand</span>
          </div>

          <div className="space-y-3">
            {projectsData.slice(0, 5).map((project) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-4 transition-all duration-200 hover:border-zinc-700"
                >
                  <div
                    onClick={() => toggleProject(project.id)}
                    className="flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white group-hover:text-zinc-200">
                          {project.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-zinc-300" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Project Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/60 space-y-3 text-xs text-zinc-300">
                      <div>
                        <span className="font-mono text-zinc-500 uppercase text-[10px] block mb-1">
                          Architecture
                        </span>
                        <p className="leading-relaxed text-zinc-300">
                          {project.architectureNotes}
                        </p>
                      </div>

                      <ul className="space-y-1 list-disc list-inside text-zinc-400">
                        {project.keyFeatures.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {profileData.skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-850 space-y-1.5"
              >
                <div className="font-mono text-zinc-400 text-[11px]">
                  {cat.name}
                </div>
                <div className="text-zinc-300 leading-relaxed">
                  {cat.items.map((i) => i.name).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Education & Certifications
          </h2>

          <div className="space-y-4 text-xs">
            {/* B.Tech Degree */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-white">
                  B.Tech in Computer Science & Engineering
                </span>
                <span className="font-mono text-zinc-400 text-xs shrink-0">8.64 CGPA</span>
              </div>
              <div className="text-zinc-400">
                Dronacharya College of Engineering (2024–2028)
              </div>
            </div>

            {/* Infosys C++ */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-white">
                  Infosys Springboard: C++ Programming
                </span>
                <span className="font-mono text-emerald-400 text-xs shrink-0">100% Score</span>
              </div>
              <div className="text-zinc-400">
                Object-oriented architecture, memory management & STL efficiency
              </div>
            </div>

            {/* NPTEL DSA */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-white">
                  NPTEL: Data Structures & Algorithms
                </span>
                <span className="font-mono text-zinc-400 text-xs shrink-0">68% Score</span>
              </div>
              <div className="text-zinc-400">
                IIT certified coursework in graph algorithms & dynamic programming
              </div>
            </div>

            {/* 300+ DSA Problems */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-white">
                  300+ Algorithmic Problems Solved
                </span>
                <span className="font-mono text-amber-400 text-xs shrink-0">Active Rank</span>
              </div>
              <div className="text-zinc-400">
                Active competitive problem solving across LeetCode & CodeChef
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section className="pt-8 border-t border-zinc-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">Get in touch</h3>
              <p className="text-xs text-zinc-400">
                Feel free to email me directly for opportunities or questions.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white text-xs font-medium transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-zinc-600">
            <span>© {new Date().getFullYear()} Ayush Yadav</span>
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </section>
      </div>
    </div>
  );
}

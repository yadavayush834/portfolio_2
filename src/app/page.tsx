"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { projectsData, ProjectItem } from "@/data/projects";
import { GithubIcon, XIcon } from "@/components/ui/Icons";
import { AsciiBanner } from "@/components/ui/AsciiBanner";
import {
  Download,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Sun,
  Moon,
} from "lucide-react";

export default function MinimalPortfolio() {
  const [copied, setCopied] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme ? savedTheme === "dark" : true;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    if (nextTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleProject = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-[#09090b] text-[#f4f4f5]" : "light bg-[#fafafa] text-[#18181b]"} antialiased selection:bg-zinc-300 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-white py-16 sm:py-24 px-6 transition-colors duration-200`}>
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Header / Intro */}
        <section className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <AsciiBanner />
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white dark:hover:border-zinc-700 hover:border-zinc-400 transition-all cursor-pointer shrink-0"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-500 font-mono">
            {profileData.title} • {profileData.location}
          </p>

          <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-700 leading-relaxed font-light pt-1">
            I engineer scalable backend systems, real-time WebSocket applications with cryptographic authentication, and applied AI pipelines. Currently building semantic recommendation modules at{" "}
            <span className="dark:text-white text-zinc-900 font-medium">Digital India Corporation (Ministry of Textiles)</span>.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={profileData.resumePath}
              download="Ayush-Yadav-Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg dark:bg-zinc-100 bg-zinc-900 dark:text-zinc-900 text-zinc-100 hover:opacity-90 text-xs font-medium transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-700 hover:border-zinc-400 text-xs transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 dark:text-zinc-500 text-zinc-400" />
            </a>

            <a
              href={profileData.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-700 hover:border-zinc-400 text-xs transition-all"
            >
              <XIcon className="w-3.5 h-3.5" />
              <span>𝕏</span>
              <ArrowUpRight className="w-3 h-3 dark:text-zinc-500 text-zinc-400" />
            </a>

            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-700 hover:border-zinc-400 text-xs transition-all"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 dark:text-zinc-500 text-zinc-400" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-700 hover:border-zinc-400 text-xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 dark:text-zinc-400 text-zinc-500" />
                  <span>Email</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest dark:text-zinc-500 text-zinc-400">
            Experience
          </h2>

          <div className="space-y-6">
            {profileData.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm font-medium dark:text-white text-zinc-900">
                    {exp.role}{" "}
                    <span className="dark:text-zinc-400 text-zinc-500 font-normal">
                      at {exp.organization}
                    </span>
                  </div>
                  <div className="text-xs font-mono dark:text-zinc-500 text-zinc-400 shrink-0">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs dark:text-zinc-400 text-zinc-600 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded dark:bg-zinc-900 bg-zinc-100 text-[11px] font-mono dark:text-zinc-400 text-zinc-600 border dark:border-zinc-800/60 border-zinc-200"
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
            <h2 className="text-xs font-mono uppercase tracking-widest dark:text-zinc-500 text-zinc-400">
              Selected Projects
            </h2>
            <span className="text-xs font-mono dark:text-zinc-500 text-zinc-400">Click to expand</span>
          </div>

          <div className="space-y-3">
            {(showAllProjects ? projectsData : projectsData.slice(0, 3)).map((project) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  className="rounded-xl border dark:border-zinc-850 border-zinc-200 dark:bg-zinc-900/40 bg-white p-4 transition-all duration-200 dark:hover:border-zinc-700 hover:border-zinc-400"
                >
                  <div
                    onClick={() => toggleProject(project.id)}
                    className="flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium dark:text-white text-zinc-900 group-hover:text-zinc-600 dark:group-hover:text-zinc-200">
                          {project.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-400 text-zinc-600">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs dark:text-zinc-400 text-zinc-600 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-zinc-950 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <ChevronDown
                        className={`w-4 h-4 dark:text-zinc-500 text-zinc-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 dark:text-zinc-300 text-zinc-800" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Project Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t dark:border-zinc-800/60 border-zinc-200 space-y-3 text-xs dark:text-zinc-300 text-zinc-700">
                      <div>
                        <span className="font-mono dark:text-zinc-500 text-zinc-400 uppercase text-[10px] block mb-1">
                          Architecture
                        </span>
                        <p className="leading-relaxed dark:text-zinc-300 text-zinc-700">
                          {project.architectureNotes}
                        </p>
                      </div>

                      <ul className="space-y-1 list-disc list-inside dark:text-zinc-400 text-zinc-600">
                        {project.keyFeatures.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded dark:bg-zinc-800 bg-zinc-100 text-[10px] font-mono dark:text-zinc-300 text-zinc-700"
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

          {/* See More Projects Toggle */}
          <div className="pt-1">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 text-xs font-mono dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-700 hover:border-zinc-400 transition-all cursor-pointer"
            >
              <span>{showAllProjects ? "Show fewer projects ↑" : `See more projects (${projectsData.length}) ↓`}</span>
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest dark:text-zinc-500 text-zinc-400">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {profileData.skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-3.5 rounded-xl dark:bg-zinc-900/40 bg-white border dark:border-zinc-850 border-zinc-200 space-y-1.5"
              >
                <div className="font-mono dark:text-zinc-400 text-zinc-500 text-[11px]">
                  {cat.name}
                </div>
                <div className="dark:text-zinc-300 text-zinc-700 leading-relaxed">
                  {cat.items.map((i) => i.name).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest dark:text-zinc-500 text-zinc-400">
            Education & Certifications
          </h2>

          <div className="space-y-4 text-xs">
            {/* B.Tech Degree */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium dark:text-white text-zinc-900">
                  B.Tech in Computer Science & Engineering
                </span>
                <span className="font-mono dark:text-zinc-400 text-zinc-500 text-xs shrink-0">8.64 CGPA</span>
              </div>
              <div className="dark:text-zinc-400 text-zinc-500">
                Dronacharya College of Engineering (2024–2028)
              </div>
            </div>

            {/* Infosys C++ */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium dark:text-white text-zinc-900">
                  Infosys Springboard: C++ Programming
                </span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs shrink-0 font-medium">100% Score</span>
              </div>
              <div className="dark:text-zinc-400 text-zinc-500">
                Object-oriented architecture, memory management & STL efficiency
              </div>
            </div>

            {/* NPTEL DSA */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium dark:text-white text-zinc-900">
                  NPTEL: Data Structures & Algorithms
                </span>
                <span className="font-mono dark:text-zinc-400 text-zinc-500 text-xs shrink-0">68% Score</span>
              </div>
              <div className="dark:text-zinc-400 text-zinc-500">
                IIT certified coursework in graph algorithms & dynamic programming
              </div>
            </div>

            {/* 300+ DSA Problems */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium dark:text-white text-zinc-900">
                  300+ Algorithmic Problems Solved
                </span>
                <span className="font-mono text-amber-600 dark:text-amber-400 text-xs shrink-0 font-medium">Active Rank</span>
              </div>
              <div className="dark:text-zinc-400 text-zinc-500">
                Active competitive problem solving across LeetCode & CodeChef
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section className="pt-8 border-t dark:border-zinc-800/80 border-zinc-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium dark:text-white text-zinc-900">Get in touch</h3>
              <p className="text-xs dark:text-zinc-400 text-zinc-500">
                Feel free to email me directly for opportunities or questions.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg dark:bg-zinc-100 bg-zinc-900 dark:text-zinc-900 text-zinc-100 hover:opacity-90 text-xs font-medium transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono dark:text-zinc-600 text-zinc-400">
            <span>© {new Date().getFullYear()} Ayush Yadav</span>
          </div>
        </section>
      </div>
    </div>
  );
}

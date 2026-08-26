import React from "react";
import { profileData } from "@/data/profile";
import { Code2, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#06070B] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle blueprint grid in footer background */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Column: Monogram & Bio */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono font-bold text-cyan-400">
            AY
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-tight">
              {profileData.name}
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              {profileData.title} • {profileData.location}
            </p>
          </div>
        </div>

        {/* Center: System status info */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next.js 16 • React 19 • Tailwind CSS</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={profileData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-xs font-mono text-zinc-400">
        © {currentYear} Ayush Yadav. Built with high-craft systems architecture & custom interactive modules.
      </div>
    </footer>
  );
}

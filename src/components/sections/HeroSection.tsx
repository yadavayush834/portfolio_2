"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Download, ArrowRight, Terminal, Sparkles, Shield, Cpu, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="overview" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Ambience & Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-35 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Status & Role Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-beacon" />
            <span>Digital India Corp • Backend & AI Intern</span>
          </div>
          <Badge variant="amber" size="sm">
            <Sparkles className="w-3 h-3" /> GSSoC Contributor &apos;26
          </Badge>
          <Badge variant="emerald" size="sm">
            B.Tech CSE • 8.64 CGPA
          </Badge>
        </div>

        {/* Hero Thesis Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              zero-trust backends
            </span>
            , vector search &{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              applied AI systems.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-light">
            Hey, I&apos;m <span className="font-semibold text-white">Ayush Yadav</span>. I engineer high-throughput
            APIs, OpenSearch k-NN semantic recommendation modules, WebSockets with ECC signatures, and real-time computer vision agents.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#featured">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Featured Systems
              </Button>
            </a>
            <a href={profileData.resumePath} download="Ayush-Yadav-Resume.pdf">
              <Button variant="secondary" size="lg" icon={<Download className="w-4 h-4 text-cyan-400" />}>
                Download Verified Resume
              </Button>
            </a>
            <a href="#ai-sim">
              <Button variant="cyan" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                Try Vector Search Simulator
              </Button>
            </a>
          </div>
        </div>

        {/* Systems Metrics & Live Spec Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profileData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-cyan-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Live Engineering Terminal Snippet */}
        <div className="mt-8 rounded-2xl bg-[#090C14] border border-white/[0.08] p-4 sm:p-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-zinc-400 ml-2">ayush@node-runtime:~$ sys-status --active</span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>KERNEL: READY</span>
            </div>
          </div>
          <div className="font-mono text-xs text-zinc-300 space-y-1 overflow-x-auto">
            <p className="text-zinc-400">
              <span className="text-cyan-400">❯</span> ACTIVE_PROJECT: <span className="text-emerald-400">&quot;IndiaHandmade AI Recs (OpenSearch k-NN + Ollama)&quot;</span>
            </p>
            <p className="text-zinc-400">
              <span className="text-cyan-400">❯</span> CRYPTO_ENGINE: <span className="text-amber-300">&quot;ethers.js / secp256k1 signature challenge / zero-trust&quot;</span>
            </p>
            <p className="text-zinc-400">
              <span className="text-cyan-400">❯</span> COMPUTER_VISION: <span className="text-sky-300">&quot;PyTorch DAgger / MediaPipe 21 3D Hand Landmarks&quot;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

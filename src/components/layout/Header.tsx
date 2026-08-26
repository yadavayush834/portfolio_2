"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Download, Terminal, Menu, X, Code2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Vector Search", href: "#ai-sim" },
  { label: "Systems", href: "#featured" },
  { label: "Journey", href: "#experience" },
  { label: "Sandboxes", href: "#demos" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all">
            <div className="w-full h-full bg-[#08090D] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              {profileData.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 px-3 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-zinc-300 hover:text-cyan-300 px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Availability Beacon + Resume Button) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon" />
            <span>Available for Hire</span>
          </div>

          <a href={profileData.resumePath} download="Ayush-Yadav-Resume.pdf">
            <Button variant="secondary" size="sm" icon={<Download className="w-3.5 h-3.5 text-cyan-400" />}>
              Resume
            </Button>
          </a>

          <a href="#contact">
            <Button variant="cyan" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
              Connect
            </Button>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a href={profileData.resumePath} download="Ayush-Yadav-Resume.pdf">
            <Button variant="secondary" size="sm" className="px-2.5">
              <Download className="w-3.5 h-3.5 text-cyan-400" />
            </Button>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-5 mt-2 bg-[#0C0F17]/95 border-b border-white/10 backdrop-blur-2xl space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon" />
            <span>{profileData.availability}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.04] px-3 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <a href="#contact" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="cyan" size="sm" className="w-full">
                Connect
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

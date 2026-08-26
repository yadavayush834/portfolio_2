"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, Phone, MapPin, Copy, Check, Send, Download, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ContactConsole() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#090C14] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & quick copy cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Send className="w-3.5 h-3.5" />
                <span>Direct Dispatch & Collaboration</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Let&apos;s Build Together
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Currently open for backend engineering roles, AI research, and high-impact distributed systems projects. Reach out directly or dispatch a transmission below.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#0E121E] border border-white/[0.08] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono text-white font-medium">
                      {profileData.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.email, "email")}
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.08] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#0E121E] border border-white/[0.08] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Direct Phone</div>
                    <div className="text-xs sm:text-sm font-mono text-white font-medium">
                      {profileData.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.phone, "phone")}
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] transition-colors"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#0E121E] border border-white/[0.08] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Location Base</div>
                  <div className="text-xs sm:text-sm font-mono text-white font-medium">
                    {profileData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume & Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={profileData.resumePath} download="Ayush-Yadav-Resume.pdf" className="flex-1">
                <Button variant="primary" size="md" className="w-full" icon={<Download className="w-4 h-4" />}>
                  Download Verified Resume
                </Button>
              </a>
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" icon={<GithubIcon className="w-4 h-4" />}>
                  GitHub
                </Button>
              </a>
              <a href={profileData.socials.leetcode} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" icon={<Code2 className="w-4 h-4 text-amber-400" />}>
                  LeetCode
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Console Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0C0F17] border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-beacon" />
                <span className="text-xs font-mono text-cyan-300 font-bold uppercase">
                  DIRECT TRANSMISSION CHANNEL
                </span>
              </div>
              <Badge variant="mono">SECURE_SOCKET</Badge>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ayush / Engineering Lead"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 font-mono transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 font-mono transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 uppercase">Project / Collaboration Details</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project architecture, or collaboration opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 font-mono transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <p className="text-[11px] font-mono text-zinc-400">
                  Transmissions delivered directly to <span className="text-cyan-400">{profileData.email}</span>
                </p>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={formStatus === "sending"}
                  icon={formStatus === "sent" ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
                >
                  {formStatus === "sending"
                    ? "Dispatching..."
                    : formStatus === "sent"
                    ? "Transmission Delivered!"
                    : "Dispatch Transmission"}
                </Button>
              </div>

              {formStatus === "sent" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been logged. I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

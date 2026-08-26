"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#080A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path & Formal Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Experience & Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Proven track record of building production backend modules, open source tooling, and rigorous academic computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-white/[0.08]">
              <Briefcase className="w-4 h-4" />
              <span>Production & Open Source Engineering</span>
            </div>

            <div className="space-y-6">
              {profileData.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-[#0D101A] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 relative space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-cyan-300 font-medium">
                        {exp.organization}
                      </div>
                    </div>
                    {exp.badge && <Badge variant="cyan">{exp.badge}</Badge>}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Verified Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider pb-2 border-b border-white/[0.08]">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Degrees & Foundations</span>
              </div>

              {profileData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-[#0D101A] border border-white/[0.08] space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <Badge variant="amber">{edu.score}</Badge>
                  </div>
                  <div className="text-xs text-zinc-300">{edu.institution}</div>
                  <div className="text-xs font-mono text-zinc-500">
                    {edu.period} • {edu.location}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-white/[0.08]">
                <Award className="w-4 h-4" />
                <span>Verified Milestones & Certifications</span>
              </div>

              <div className="space-y-3">
                {profileData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-sm text-white">
                        {cert.title}
                      </span>
                      <Badge variant="emerald">{cert.score}</Badge>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mb-1.5">
                      {cert.issuer} • {cert.verificationBadge}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

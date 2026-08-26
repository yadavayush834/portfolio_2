"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractiveAiSim } from "@/components/sections/InteractiveAiSim";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { InteractiveDemos } from "@/components/sections/InteractiveDemos";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ContactConsole } from "@/components/sections/ContactConsole";
import { ProjectModal } from "@/components/ui/Modal";
import { ProjectItem } from "@/data/projects";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleLaunchDemo = (demoType: string) => {
    const demosElement = document.getElementById("demos");
    if (demosElement) {
      demosElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#08090D] text-[#F0F4FC]">
      {/* Floating Header */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Interactive AI / Vector Search Simulator */}
        <InteractiveAiSim onSelectProject={setSelectedProject} />

        {/* Featured Flagship Systems */}
        <FeaturedWork
          onSelectProject={setSelectedProject}
          onLaunchDemo={handleLaunchDemo}
        />

        {/* Complete Project Catalog */}
        <ProjectGrid onSelectProject={setSelectedProject} />

        {/* Experience & Career Journey */}
        <ExperienceTimeline />

        {/* Interactive Sandboxes (ISL & Zero-Trust Cryptography) */}
        <InteractiveDemos />

        {/* Technical Capabilities Matrix */}
        <SkillsMatrix />

        {/* Direct Contact Dispatch Console */}
        <ContactConsole />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchDemo={handleLaunchDemo}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectDialog from "./ProjectDialog";

export default function WorkSection() {
  const { projects, personal } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: "All work", value: "all", count: projects.length },
    { label: "Enterprise & ERP", value: "enterprise", count: projects.filter(p => p.category === "enterprise").length },
    { label: "Full Stack", value: "fullstack", count: projects.filter(p => p.category === "fullstack").length },
    { label: "AI & Mobile", value: "aimobile", count: projects.filter(p => p.category === "aimobile").length },
  ];

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const renderProjectArt = (project: Project) => {
    switch (project.artStyle) {
      case "donate":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0e1d38] via-[#0c162c] to-[#080d1a] relative flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute w-44 h-44 rounded-full bg-[#38bdf8]/10 blur-2xl pointer-events-none"></div>
            <div className="w-[84%] bg-[#0f1b34]/95 border border-[#1e3256] rounded-xl p-5 shadow-2xl relative z-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8] mb-2">
                <span>DONATION PLATFORM</span>
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              </div>
              <strong className="block text-[22px] font-bold text-[#f8fafc] tracking-tight">
                DonateHub<span className="text-[#38bdf8]">.</span>
              </strong>
              <p className="text-[12px] text-[#94a3b8] mt-1">
                Verified charities · Public requests · Transparent tracking
              </p>
              <div className="flex gap-2 mt-3 pt-3 border-t border-[#1a2d4c] text-[10px] text-[#38bdf8] font-mono">
                <span>React.js</span>
                <span>•</span>
                <span>Spring Boot</span>
                <span>•</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        );

      case "hotel":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c223c] via-[#0b1a30] to-[#080d1a] relative flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute w-44 h-44 rounded-full bg-blue-500/15 blur-2xl pointer-events-none"></div>
            <div className="w-[84%] bg-[#0e213b]/95 border border-[#1e3d63] rounded-xl p-5 shadow-2xl relative z-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#38bdf8] mb-2">
                <span>ENTERPRISE ERP</span>
                <span className="text-[10px] bg-blue-950/80 border border-blue-700/60 px-2 py-0.5 rounded text-blue-200">
                  Azure Cloud
                </span>
              </div>
              <strong className="block text-[22px] font-bold text-[#f8fafc] tracking-tight">
                Hotel ERP System<span className="text-[#38bdf8]">.</span>
              </strong>
              <p className="text-[12px] text-[#94a3b8] mt-1">
                Reservations · Invoices · Billing · Maintenance · RBAC
              </p>
              <div className="flex gap-2 mt-3 pt-3 border-t border-[#1a3454] text-[10px] text-[#38bdf8] font-mono">
                <span>Spring Boot</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>RBAC Security</span>
              </div>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#161d3e] via-[#0f1631] to-[#080d1a] relative flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute w-44 h-44 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none"></div>
            <div className="w-[84%] bg-[#131b38]/95 border border-[#273562] rounded-xl p-5 shadow-2xl relative z-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300 mb-2">
                <span>AI TALENT ENGINE</span>
                <span className="text-[10px] text-[#38bdf8]">✳ Gemini API</span>
              </div>
              <strong className="block text-[22px] font-bold text-[#f8fafc] tracking-tight">
                AI Recruitment<span className="text-[#38bdf8]">.</span>
              </strong>
              <p className="text-[12px] text-[#a5b4fc] mt-1">
                Resume parsing · Contextual question generation · Scoring
              </p>
              <div className="flex gap-2 mt-3 pt-3 border-t border-[#202d53] text-[10px] text-[#38bdf8] font-mono">
                <span>FastAPI</span>
                <span>•</span>
                <span>Python</span>
                <span>•</span>
                <span>LLM Integration</span>
              </div>
            </div>
          </div>
        );

      case "bus":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c1c38] via-[#0a1529] to-[#080d1a] relative flex items-center justify-center p-6 overflow-hidden">
            {/* Road lines simulation matching map-grid in dark blue */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#38bdf8]"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-[#38bdf8]"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[#38bdf8] animate-ping"></div>
            </div>
            <div className="w-[84%] bg-[#0e1c36]/95 border border-[#1b345b] rounded-xl p-5 shadow-2xl relative z-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#38bdf8] mb-2">
                <span>IOT & TRANSIT</span>
                <span>GPS Live</span>
              </div>
              <strong className="block text-[22px] font-bold text-[#f8fafc] tracking-tight">
                Smart Bus System<span className="text-[#38bdf8]">.</span>
              </strong>
              <p className="text-[12px] text-[#94a3b8] mt-1">
                Live location maps · Automated schedules · Notifications
              </p>
              <div className="flex gap-2 mt-3 pt-3 border-t border-[#182f53] text-[10px] text-[#38bdf8] font-mono">
                <span>Flutter</span>
                <span>•</span>
                <span>Dart</span>
                <span>•</span>
                <span>Maps API</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="work-section pt-[100px] sm:pt-[115px] pb-[100px] sm:pb-[115px] border-b border-[#1e293b]" id="work" aria-labelledby="work-title">
      <div className="wrap">
        {/* Section Heading */}
        <div className="section-heading flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-10">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="work-title" className="text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.045em] font-bold text-[#f8fafc]">
              From an idea<br />to an application<span className="text-[#38bdf8]">.</span>
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#94a3b8] max-w-[420px] leading-[1.7]">
            Enterprise platforms, full-stack web solutions, and mobile architectures. Explore the details or view source code.
          </p>
        </div>

        {/* Work Controls & Filters */}
        <div className="work-controls flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-9">
          <div className="filters flex flex-wrap gap-2.5" role="group" aria-label="Filter work">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`rounded-[20px] px-[18px] py-[9px] text-[13px] transition-all flex items-center gap-1.5 ${
                  activeFilter === opt.value
                    ? "bg-[#38bdf8] text-[#080d1a] font-semibold border border-[#38bdf8]"
                    : "bg-[#0f172a] border border-[#1e293b] text-[#94a3b8] hover:border-[#334155] hover:text-[#f8fafc]"
                }`}
                aria-pressed={activeFilter === opt.value}
              >
                <span>{opt.label}</span>
                <span className="opacity-60 text-[11px]">{opt.count}</span>
              </button>
            ))}
          </div>

          <p id="result-count" className="text-[13px] text-[#64748b] font-mono" aria-live="polite">
            Showing {filtered.length} item{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* Project Grid */}
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8" id="project-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card bg-[#0f172a] border border-[#1e293b] hover:border-[#38bdf866] rounded-[18px] overflow-hidden transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Art banner */}
              <div className="project-art h-[230px] relative overflow-hidden flex items-center justify-center">
                {renderProjectArt(project)}
              </div>

              {/* Project info */}
              <div className="project-info p-7 sm:p-8 flex flex-col flex-grow">
                <span className="project-type text-[11px] tracking-[0.12em] text-[#38bdf8] font-bold uppercase mb-2.5">
                  {project.type}
                </span>

                <h3 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.03em] text-[#f8fafc] mb-2.5 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] text-[#94a3b8] leading-[1.6] mb-6 flex-grow">
                  {project.summary}
                </p>

                {/* Bottom row: Tags and details button */}
                <div className="project-bottom flex justify-between items-center gap-4 pt-4 border-t border-[#1e293b] mt-auto">
                  <div className="tags flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] bg-[#0c1426] border border-[#1e293b] rounded-[6px] px-2.5 py-1 text-[#94a3b8]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[11px] text-[#64748b] px-1 py-1">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="details-button inline-flex items-center gap-2 text-[13px] font-semibold text-[#38bdf8] hover:text-[#7dd3fc] transition-colors shrink-0"
                  >
                    <span>Explore details</span>
                    <span aria-hidden="true" className="text-base font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Footer */}
        <div className="work-footer flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8 border-t border-[#1e293b] text-[14px] text-[#64748b]">
          <p>More code, experiments, and things in progress.</p>
          <a
            className="text-link text-[#38bdf8] hover:underline underline-offset-4 flex items-center gap-1.5 font-semibold"
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Find me on GitHub</span>
            <span aria-hidden="true">⌘</span>
          </a>
        </div>
      </div>

      {/* Project Details Modal Dialog */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        email={personal.contact.email}
      />
    </section>
  );
}

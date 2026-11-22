"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { Github, Mail } from "lucide-react";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
  email: string;
}

export default function ProjectDialog({ project, onClose, email }: ProjectDialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04070f]/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0b1326] text-[#f8fafc] border border-[#1e293b] rounded-[20px] p-6 sm:p-10 max-w-[680px] w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        {/* Dialog Top */}
        <div className="flex items-center justify-between pb-3 mb-2">
          <span className="eyebrow text-[#38bdf8] text-[11px] sm:text-[12px] font-bold tracking-[0.18em]">
            {project.type}
          </span>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="w-9 h-9 rounded-full bg-[#0f172a] hover:bg-[#1e293b] border border-[#1e293b] text-[#f8fafc] flex items-center justify-center text-xl transition-colors"
          >
            ×
          </button>
        </div>

        {/* Dialog Title */}
        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.04em] text-[#f8fafc] mb-4">
          {project.title}
        </h2>

        {/* Lead Description */}
        <p className="text-[15px] sm:text-[16px] text-[#94a3b8] leading-[1.7] mb-6">
          {project.description}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h3 className="text-[15px] font-bold tracking-tight text-[#f8fafc] mb-3">
            Inside the project
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[14px] text-[#cbd5e1] leading-relaxed"
              >
                <span className="text-[#38bdf8] font-bold shrink-0 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-[15px] font-bold tracking-tight text-[#f8fafc] mb-3">
            Built with
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="text-[12px] bg-[#0f172a] border border-[#1e293b] text-[#cbd5e1] rounded-[6px] px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Dialog Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1e293b]">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary-btn"
            >
              <Github className="w-4 h-4" />
              <span>View source on GitHub</span>
            </a>
          )}
          <a
            href={`mailto:${email}?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}`}
            className="button secondary-btn"
          >
            <Mail className="w-4 h-4" />
            <span>Ask about this project</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="wrap site-footer flex flex-col sm:flex-row justify-between items-center py-10 sm:py-12 border-t border-[#1e293b] text-[13px] text-[#64748b] gap-4">
      {/* Wordmark */}
      <a href="#home" className="wordmark text-[24px] font-bold tracking-[-1.6px] text-[#f8fafc]">
        {personal.wordmark}<span className="text-[#38bdf8]">.</span>
      </a>

      {/* Copyright */}
      <p className="text-center sm:text-left">
        © {new Date().getFullYear()} {personal.name}
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-6 text-[13px]">
        <a
          href={personal.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#38bdf8] transition-colors"
        >
          GitHub
        </a>
        <a
          href={personal.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#38bdf8] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.contact.email}`}
          className="hover:text-[#38bdf8] transition-colors"
        >
          Email
        </a>
        <a
          href={`mailto:${personal.contact.email}?subject=Resume%20Request`}
          className="hover:text-[#38bdf8] transition-colors"
        >
          Résumé
        </a>
      </div>
    </footer>
  );
}

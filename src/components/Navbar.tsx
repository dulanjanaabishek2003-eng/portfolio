"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080d1ae8] backdrop-blur-xl border-b border-white/[0.06]">
      <div className="nav-shell wrap h-[84px] sm:h-[91px] flex items-center justify-between">
        {/* Wordmark */}
        <a href="#home" className="wordmark text-2xl sm:text-[29px] font-bold tracking-[-1.6px] text-[#f8fafc]" aria-label="Abishek home">
          {personal.wordmark}<span className="text-[#38bdf8]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[35px] text-[14px]">
          <a
            href="#work"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
          >
            Toolkit
          </a>
          <a
            href="#contact"
            className="nav-contact flex items-center gap-4 sm:gap-6 border border-[#334155] hover:border-[#38bdf8] rounded-[28px] px-5 py-2 text-[#f8fafc] hover:text-[#38bdf8] transition-all"
          >
            <span>Let’s talk</span>
            <span className="dot inline-block w-[7px] h-[7px] rounded-full bg-[#38bdf8]"></span>
          </a>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 border border-[#1e293b] rounded-lg p-2 text-[#f8fafc]"
        >
          <span className={`w-5 h-[2px] bg-[#f8fafc] transition-transform ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`}></span>
          <span className={`w-5 h-[2px] bg-[#f8fafc] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080d1a] border-b border-[#1e293b] px-6 py-6 space-y-4 shadow-2xl">
          <a
            href="#work"
            onClick={closeMenu}
            className="block text-lg font-medium text-[#94a3b8] hover:text-[#38bdf8] py-1"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block text-lg font-medium text-[#94a3b8] hover:text-[#38bdf8] py-1"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="block text-lg font-medium text-[#94a3b8] hover:text-[#38bdf8] py-1"
          >
            Toolkit
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-4 border border-[#334155] rounded-[28px] px-5 py-2 text-[#f8fafc] hover:border-[#38bdf8]"
            >
              <span>Let’s talk</span>
              <span className="dot inline-block w-[7px] h-[7px] rounded-full bg-[#38bdf8]"></span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

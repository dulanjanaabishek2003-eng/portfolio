"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <section className="hero wrap min-h-[680px] lg:min-h-[740px] pt-12 pb-16 lg:py-[75px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-[60px] items-center" id="home" aria-labelledby="hero-title">
      {/* Left Column: Hero Copy */}
      <div className="hero-copy">
        {/* Availability Badge */}
        <div className="availability text-[13px] sm:text-[14px] tracking-[0.025em] flex items-center gap-[10px] text-[#cbd5e1] mb-7">
          <span className="dot dot-pulse inline-block w-[7px] h-[7px] rounded-full bg-[#38bdf8]"></span>
          <span>{personal.availability}</span>
        </div>

        {/* Intro */}
        <p className="intro text-[18px] sm:text-[20px] text-[#cbd5e1] mb-4">
          {personal.heroIntro}
        </p>

        {/* Hero Title */}
        <h1
          id="hero-title"
          className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.055em] font-normal text-[#f8fafc]"
        >
          {personal.heroTitlePrefix}
          <br />
          with an{" "}
          <em className="text-[#38bdf8] text-[1.07em]">
            {personal.heroTitleEm}
            <br className="hidden sm:inline" /> {personal.heroTitleSuffix}
          </em>
        </h1>

        {/* Hero Description */}
        <p className="hero-description max-w-[480px] text-[15px] sm:text-[16px] text-[#94a3b8] leading-[1.8] mt-6">
          {personal.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions flex flex-wrap gap-3 mt-8">
          <a
            className="button primary-btn"
            href="#work"
          >
            <span>Explore my work</span>
            {/* Grid SVG icon matching reference */}
            <svg viewBox="0 0 20 20" aria-hidden="true" className="w-[17px] h-[17px]">
              <rect x="3" y="3" width="5" height="5" rx="1" />
              <rect x="12" y="3" width="5" height="5" rx="1" />
              <rect x="3" y="12" width="5" height="5" rx="1" />
              <rect x="12" y="12" width="5" height="5" rx="1" />
            </svg>
          </a>

          <a
            className="button secondary-btn"
            href={`${basePath}/Abishek_Siriwardhana_CV.pdf`}
            download="Abishek_Siriwardhana_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download CV</span>
            {/* Doc SVG icon matching reference */}
            <svg viewBox="0 0 20 20" aria-hidden="true" className="w-[17px] h-[17px]">
              <path d="M5 4h7l3 3v10H5zM12 4v4h3M8 11h4M8 14h4" />
            </svg>
          </a>
        </div>

        {/* Footnote */}
        <div className="hero-footnote flex items-center gap-3 text-[12px] text-[#64748b] mt-7">
          <span>Based in Sri Lanka</span>
          <i className="w-[3px] h-[3px] bg-[#475569] rounded-full inline-block"></i>
          <span>NSBM Green University</span>
          <i className="w-[3px] h-[3px] bg-[#475569] rounded-full inline-block"></i>
          <span>3rd-Year Undergraduate</span>
        </div>
      </div>

      {/* Right Column: Portrait Scene */}
      <div className="portrait-scene">
        {/* Orbits & Glow */}
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="hero-glow"></div>

        {/* Top-Left Floating Tag: Full-stack development */}
        <div className="floating-tag tag-java hidden sm:flex">
          <span className="tag-icon font-mono font-bold text-[#38bdf8]">&#123; &#125;</span>
          <div>
            <b>Full-stack development</b>
            <small>Java · Spring Boot · React</small>
          </div>
        </div>

        {/* Central Portrait Card */}
        <figure className="portrait-card">
          <div className="portrait-topline">
            <span>THE PERSON BEHIND THE CODE</span>
            <b>&lt;/&gt;</b>
          </div>

          <div className="portrait-image">
            <img
              src={`${basePath}/portrait.jpg`}
              alt="Abishek Siriwardhana"
              width={320}
              height={310}
              className="w-full h-[310px] object-cover object-[center_20%] saturate-[0.92] contrast-[1.05] hover:saturate-100 hover:scale-[1.02] transition-all duration-500 rounded-[9px]"
            />
          </div>

          <figcaption className="flex items-center justify-between pt-5 px-1.5 pb-2">
            <div>
              <h2 className="text-[18px] tracking-[-0.5px] font-bold text-[#f8fafc]">
                {personal.name}
              </h2>
              <p className="text-[12px] text-[#94a3b8] mt-1">
                Aspiring Software Engineer
              </p>
            </div>
            <span className="portrait-mark font-serif italic text-[31px] text-[#38bdf8]">
              {personal.monogram}
            </span>
          </figcaption>
        </figure>

        {/* Bottom-Right Floating Tag: AI & Cloud */}
        <div className="floating-tag tag-data hidden sm:flex">
          <span className="tag-icon text-[#38bdf8]">✳</span>
          <div>
            <b>AI & Cloud architecture</b>
            <small>Gemini API · Docker · Azure</small>
          </div>
        </div>

        {/* Scene Caption */}
        <span className="scene-caption hidden md:inline-block">
          Always building. Always learning.
        </span>
      </div>
    </section>
  );
}

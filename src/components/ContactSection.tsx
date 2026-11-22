"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copyStatus, setCopyStatus] = useState<string>("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.contact.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus(`Copy: ${personal.contact.email}`);
    }
    setTimeout(() => {
      setCopyStatus("");
    }, 4500);
  };

  return (
    <section className="contact-section py-[100px] sm:py-[120px]" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-inner flex flex-col md:flex-row justify-between items-start md:items-center gap-12 lg:gap-16">
        {/* Left Copy */}
        <div className="max-w-[620px]">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2 id="contact-title" className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.04] tracking-[-0.055em] font-bold text-[#f8fafc] mb-5">
            Have an opportunity?<br />
            <em className="text-[#38bdf8]">Let’s build it.</em>
          </h2>

          <p className="text-[16px] sm:text-[17px] text-[#94a3b8] leading-[1.7] mb-7">
            Open to software engineering internships, graduate opportunities,<br className="hidden sm:inline" />
            and conversations about high-impact digital solutions.
          </p>

          <a
            href={`mailto:${personal.contact.email}`}
            className="email-link text-[20px] sm:text-[26px] font-bold text-[#f8fafc] hover:text-[#38bdf8] border-b-2 border-[#38bdf8] pb-1 inline-block mb-8 transition-colors break-all"
          >
            {personal.contact.email}
          </a>

          <div className="contact-actions flex flex-wrap items-center gap-4">
            <a
              className="button primary-btn"
              href={`mailto:${personal.contact.email}?subject=Hello%20Abishek!`}
            >
              <span>Say hello</span>
              {/* Mail SVG icon matching reference */}
              <svg viewBox="0 0 20 20" aria-hidden="true" className="w-[17px] h-[17px]">
                <rect x="2" y="4" width="16" height="12" rx="2" />
                <path d="m3 5 7 6 7-6" />
              </svg>
            </a>

            <button
              onClick={handleCopyEmail}
              className="button secondary-btn"
              type="button"
            >
              Copy email
            </button>

            {copyStatus && (
              <span className="text-[13px] text-[#38bdf8] font-medium transition-all" aria-live="polite">
                {copyStatus}
              </span>
            )}
          </div>
        </div>

        {/* Right Decorative Badge matching reference in Dark Blue */}
        <div className="contact-decoration hidden md:block text-right select-none" aria-hidden="true">
          <div className="asterisk text-[68px] text-[#38bdf8] leading-none mb-4">
            ✳
          </div>
          <span className="text-[12px] tracking-[0.2em] text-[#64748b] font-bold leading-[1.8] block">
            GOOD THINGS START<br />
            WITH A CONVERSATION.
          </span>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section className="about-section wrap grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 pt-[100px] sm:pt-[115px] pb-[100px] sm:pb-[115px] border-b border-[#1e293b]" id="about" aria-labelledby="about-title">
      {/* Left Column: Eyebrow, Title, Signature */}
      <div className="about-label flex flex-col justify-between">
        <div>
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2 id="about-title" className="text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.045em] font-bold text-[#f8fafc]">
            The curiosity<br />behind the code<span className="text-[#38bdf8]">.</span>
          </h2>
        </div>
        <div className="about-signature font-serif text-[42px] italic text-[#38bdf8] mt-8 lg:mt-12">
          {personal.name.split(" ")[0]}.
        </div>
      </div>

      {/* Right Column: Bio Narrative & Education Card */}
      <div className="about-copy">
        <p className="large-copy text-[22px] sm:text-[26px] leading-[1.4] text-[#f8fafc] tracking-[-0.02em] mb-7">
          I’m a Software Engineering undergraduate who enjoys building dependable, useful systems for the web and mobile.
        </p>

        <p className="text-[15px] sm:text-[16px] text-[#94a3b8] leading-[1.8] mb-5">
          I study at <span className="text-[#f8fafc] font-medium">NSBM Green University</span> as a 3rd-year undergraduate reading for a BSc (Hons) in Software Engineering. I have hands-on experience architecting full-stack applications with <span className="text-[#f8fafc]">Java, Spring Boot, React.js, C#, Python, and Flutter</span>.
        </p>

        <p className="text-[15px] sm:text-[16px] text-[#94a3b8] leading-[1.8] mb-5">
          Throughout my academic journey, I have contributed to impactful projects including <span className="text-[#38bdf8]">DonateHub</span> (a full-stack donation management system), a comprehensive <span className="text-[#38bdf8]">Hotel ERP System</span> deployed on Microsoft Azure, AI-powered recruitment tools using the Google Gemini API, and smart public transit tracking applications.
        </p>

        <p className="text-[15px] sm:text-[16px] text-[#94a3b8] leading-[1.8] mb-8">
          I am looking for a Software Engineering internship or role where I can contribute to high-impact products, collaborate with dedicated engineering teams, and continuously elevate my architectural and problem-solving skills.
        </p>

        {/* Education Card matching reference in Dark Blue */}
        <div className="education-card flex items-center gap-5 bg-[#0f172a] border border-[#1e293b] rounded-[14px] p-5 sm:p-6 shadow-md">
          <div className="education-icon p-3 bg-[#0c1426] border border-[#1e293b] rounded-[10px] text-[#38bdf8] shrink-0">
            {/* Graduation Cap SVG */}
            <svg viewBox="0 0 28 28" aria-hidden="true" className="w-[26px] h-[26px] fill-none stroke-current stroke-[1.5]">
              <path d="m3 10 11-5 11 5-11 5-11-5Zm4 3v7c4 3 10 3 14 0v-7m4-3v10" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-[0.14em] text-[#64748b] font-bold uppercase block mb-1">
              {personal.education.badge}
            </span>
            <h3 className="text-[16px] sm:text-[18px] font-bold text-[#f8fafc]">
              {personal.education.degree}
            </h3>
            <p className="text-[13px] text-[#94a3b8] mt-0.5">
              {personal.education.institution} · {personal.education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

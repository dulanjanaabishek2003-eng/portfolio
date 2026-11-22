import React from "react";

export default function SkillsSection() {
  const categories = [
    {
      icon: "</>",
      title: "Interfaces",
      description: "Building responsive, component-based user experiences.",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & CSS3",
        "Next.js"
      ]
    },
    {
      icon: "{ }",
      title: "Backend & systems",
      description: "Connecting business logic, enterprise services, and relational data.",
      skills: [
        "Java",
        "Spring Boot",
        "C#",
        "ASP.NET Core",
        "Python",
        "REST APIs",
        "MySQL",
        "SQL Server"
      ]
    },
    {
      icon: "✳",
      title: "AI, Cloud & DevOps",
      description: "Integrating intelligent models, mobile apps, and automated workflows.",
      skills: [
        "Google Gemini API",
        "Flutter & Dart",
        "React Native",
        "Docker",
        "Kubernetes",
        "Microsoft Azure",
        "Firebase",
        "Git & GitHub",
        "Postman"
      ]
    }
  ];

  return (
    <section className="skills-section wrap pt-[100px] sm:pt-[115px] pb-[100px] sm:pb-[115px] border-b border-[#1e293b]" id="skills" aria-labelledby="skills-title">
      {/* Section Heading */}
      <div className="section-heading flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-10">
        <div>
          <p className="eyebrow">MY TOOLKIT</p>
          <h2 id="skills-title" className="text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.045em] font-bold text-[#f8fafc]">
            Different tools.<br />One connected experience<span className="text-[#38bdf8]">.</span>
          </h2>
        </div>
        <p className="text-[15px] sm:text-[16px] text-[#94a3b8] max-w-[420px] leading-[1.7]">
          The technologies I use across interfaces, backend architectures, mobile applications, and AI integrations.
        </p>
      </div>

      {/* 3 Skill Columns in Dark Blue */}
      <div className="skill-columns grid grid-cols-1 md:grid-cols-3 gap-7">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] border border-[#1e293b] hover:border-[#38bdf855] rounded-[18px] p-7 sm:p-9 transition-colors flex flex-col justify-between shadow-md"
          >
            <div>
              <span className="skill-icon text-[26px] text-[#38bdf8] mb-5 block font-mono">
                {cat.icon}
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.03em] text-[#f8fafc] mb-2.5">
                {cat.title}
              </h3>
              <p className="text-[14px] text-[#94a3b8] leading-[1.6] mb-6 min-h-[44px]">
                {cat.description}
              </p>
            </div>

            <div className="skill-tags flex flex-wrap gap-2 pt-2 border-t border-[#1e293b]">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[12px] bg-[#0c1426] border border-[#1e293b] hover:border-[#38bdf844] text-[#cbd5e1] rounded-[6px] px-3 py-1.5 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: "all" | "fullstack" | "enterprise" | "aimobile";
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  repo?: string;
  live?: string;
  domain?: string;
  artStyle: "donate" | "hotel" | "ai" | "bus";
}

export const portfolioData = {
  personal: {
    name: "Abishek Siriwardhana",
    wordmark: "abishek",
    monogram: "as.",
    title: "Software Engineering Undergraduate & Full-Stack Developer",
    availability: "Open to internship & software engineering opportunities",
    heroIntro: "Hi, I’m Abishek.",
    heroTitlePrefix: "Full-stack systems,",
    heroTitleEm: "engineering",
    heroTitleSuffix: "mindset.",
    heroDescription: "A 3rd-year Software Engineering undergraduate at NSBM Green University building resilient full-stack applications, enterprise platforms, and AI-powered solutions. Turning ideas into things people can use.",
    footnote: [
      "Based in Sri Lanka",
      "NSBM Green University",
      "3rd-Year Undergraduate"
    ],
    contact: {
      email: "dulanjanaabishek2003@gmail.com",
      github: "https://github.com/dulanjanaabishek2003-eng",
      linkedin: "https://www.linkedin.com/in/abishek-siriwardhana-33b631401",
    },
    education: {
      badge: "EDUCATION",
      degree: "BSc (Hons) in Software Engineering",
      institution: "NSBM Green University",
      period: "2022–Present (3rd Year)",
    }
  },

  stackStrip: [
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "Flutter",
    "MySQL",
    "Docker",
    "Gemini API",
    "C#",
    "Tailwind CSS"
  ],

  projects: [
    {
      id: "donatehub",
      title: "DonateHub",
      subtitle: "Full-Stack Donation Management Platform",
      type: "Group Project / Donation Platform",
      category: "fullstack",
      artStyle: "donate",
      summary: "Connecting donors with verified organizations through public donation requests and transparent donation tracking.",
      description: "DonateHub is a full-stack web application developed to connect donors with verified organizations through public donation requests and transparent donation tracking. The platform aims to make the donation process more accessible, organized, and transparent.",
      features: [
        "Connect donors seamlessly with verified organizations.",
        "Publish and manage public donation requests in real time.",
        "Organize donation requests by specialized categories.",
        "Transparent donation tracking for increased trust and accountability.",
        "Accessible, responsive UI for both donors and organizations."
      ],
      stack: ["React.js", "Java", "Spring Boot", "MySQL", "Maven", "REST APIs"],
      repo: "https://github.com/dulanjanaabishek2003/donatehub",
    },
    {
      id: "hotel-erp",
      title: "Hotel ERP System",
      subtitle: "Hotel Operations Management Platform",
      type: "Enterprise / Hotel Operations",
      category: "enterprise",
      artStyle: "hotel",
      summary: "Centralized hotel operations platform integrating reservations, room inventory, billing, invoices, and RBAC.",
      description: "Hotel ERP System is a comprehensive full-stack enterprise web application developed to streamline and manage hotel operations through a centralized platform. It integrates customer management, reservations, service charges, billing, and maintenance.",
      features: [
        "Customer profile and room inventory management.",
        "Room reservation and dynamic availability tracking.",
        "Guest check-in and check-out workflows.",
        "Service charge computation, invoice generation, and billing.",
        "Maintenance request management and staff task assignment.",
        "Dedicated Manager & Administrator analytics dashboards with RBAC security."
      ],
      stack: ["Spring Boot", "React.js", "MySQL", "Microsoft Azure", "Java", "Postman"],
      repo: "https://github.com/dulanjanaabishek2003/Hotel-ERP-System",
    },
    {
      id: "ai-recruitment",
      title: "AI-Powered Recruitment",
      subtitle: "Intelligent Candidate Screening & Matching",
      type: "AI & ML / Talent Platform",
      category: "aimobile",
      artStyle: "ai",
      summary: "AI model integration using Google Gemini API to parse resumes, generate interview questions, and rank candidates.",
      description: "An innovative digital platform leveraging Google Gemini API and modern language models to automate resume parsing, generate context-aware interview questionnaires, and match candidates with job criteria.",
      features: [
        "Automated resume parsing and key technical skill extraction.",
        "Google Gemini API integration for adaptive interview question generation.",
        "Candidate-to-job similarity scoring algorithm.",
        "Analytics dashboard for recruiters and interviewers."
      ],
      stack: ["React.js", "Python", "FastAPI", "Gemini API", "Firebase", "Prompt Engineering"],
      repo: "https://github.com/dulanjanaabishek2003",
    },
    {
      id: "smart-bus",
      title: "Smart Bus System",
      subtitle: "IoT & Real-time Transit Tracking",
      type: "Mobile / IoT Transit Platform",
      category: "aimobile",
      artStyle: "bus",
      summary: "Connected public transit tracking system providing live bus locations, dynamic schedules, and route updates.",
      description: "A connected transit management system integrating mobile applications and GPS tracking to provide passengers with live bus locations, arrival predictions, and automated schedule updates.",
      features: [
        "Real-time GPS bus location tracking on dynamic maps.",
        "Dynamic route schedules and automated arrival time estimations.",
        "Driver schedule assignments and dispatch monitoring.",
        "Passenger notifications for transit delays and schedule changes."
      ],
      stack: ["Flutter", "Dart", "Spring Boot", "MySQL", "Google Maps API"],
      repo: "https://github.com/dulanjanaabishek2003",
    }
  ] as Project[]
};

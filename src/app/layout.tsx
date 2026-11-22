import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080d1a",
};

export const metadata: Metadata = {
  title: "Abishek Siriwardhana | Software Engineer & Developer Portfolio",
  description:
    "Portfolio of Abishek Siriwardhana — 3rd-year Software Engineering undergraduate at NSBM Green University. Building resilient full-stack applications, enterprise platforms, and AI integrations.",
  keywords: [
    "Abishek Siriwardhana",
    "dulanjanaabishek2003",
    "Software Engineer",
    "Full-Stack Developer",
    "NSBM Green University",
    "Spring Boot",
    "React",
    "Java",
    "Sri Lanka",
    "DonateHub",
    "Hotel ERP System"
  ],
  authors: [{ name: "Abishek Siriwardhana" }],
  openGraph: {
    title: "Abishek Siriwardhana | Developer Portfolio",
    description: "Full-stack systems, with an engineering mindset. Selected projects, technical skills, and experience.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

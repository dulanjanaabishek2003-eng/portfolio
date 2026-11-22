import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AmbientEffects from "@/components/AmbientEffects";

export default function Home() {
  return (
    <>
      <AmbientEffects />
      <Navbar />
      <main id="main">
        <Hero />
        <StackStrip />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

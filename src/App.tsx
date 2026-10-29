import { About } from "./components/About";
import { CustomCursor, Grain, MatrixBg, ScrollProgress } from "./components/Atmosphere";
import { BootSequence } from "./components/BootSequence";
import { CipherSpace } from "./components/CipherSpace";
import { Contact } from "./components/Contact";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { Projects } from "./components/Projects";
import { SkillOrbit } from "./components/SkillOrbit";
import { SkillsMarquee } from "./components/SkillsMarquee";
import { useIsFinePointer } from "./hooks";

export default function App() {
  const fine = useIsFinePointer();

  return (
    <div className={`relative min-h-screen bg-obsidian text-white ${fine ? "cursor-none-root" : ""}`}>
      <BootSequence />
      <Grain />
      <MatrixBg />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <SkillsMarquee />
        <SkillOrbit />
        <About />
        <Expertise />
        <Projects />
        <CipherSpace />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

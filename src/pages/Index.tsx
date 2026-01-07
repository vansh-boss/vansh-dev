import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
import Education from "@/components/Education";
import { Sidebar } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;




import Projects from "@/components/home/Projects";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
      <>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </>
  );
}

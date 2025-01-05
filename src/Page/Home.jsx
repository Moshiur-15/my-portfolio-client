import About from "../Components/About";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contect from "./Contect";

export default function Home() {
  return (
    <div className="font-roboto">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" className="lg:mb-44">
        <Contect />
      </section>
    </div>
  );
}

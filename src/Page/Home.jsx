import About from "../Components/About";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contect from "./Contect";

export default function Home() {
  return (
    <div className="font-roboto">
      <section id="hero" className="xl:mx-[115px]">
        <Hero />
      </section>
      <section id="about" className="xl:mx-[115px]">
        <About />
      </section>
      <section id="skills" className="xl:mx-[100px]">
        <Skills />
      </section>
      <section id="projects" className="xl:mx-[105px]">
        <Projects />
      </section>
      <section id="contact" className="lg:mb-44">
        <Contect />
      </section>
    </div>
  );
}

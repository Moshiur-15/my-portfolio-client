import About from "../Components/About";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div className="font-roboto">
        <Hero/>
        <About />
        <Skills />
    </div>
  )
}

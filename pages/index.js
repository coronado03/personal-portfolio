import Navigation from "../components/navbar"
import Hero from "../components/main";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";
import Footer from "../components/footer";
import About from "../components/about";


export default function Home() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}

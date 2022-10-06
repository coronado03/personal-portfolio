import Navigation from "../components/navbar"
import Hero from "../components/main";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";
import Footer from "../components/footer";
import About from "../components/about";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Coronado Portfolio</title>
        <meta name="description" content="Portfolio of Sebastian Coronado!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

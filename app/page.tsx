import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import WhyFutureByte from "@/components/WhyFutureByte";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Services />
        <HowWeWork />
        <Projects />
        <WhyFutureByte />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Expertise from "@/components/portfolio/Expertise";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Portfolio from "@/components/portfolio/Portfolio";
import Credentials from "@/components/portfolio/Credentials";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Portfolio />
      <Credentials />
      <Contact />
    </main>
  );
};

export default Index;

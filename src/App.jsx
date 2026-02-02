
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 bg-zinc-950 text-center border-t border-zinc-900">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mohammad Shadathusen Rolli
        </p>
      </footer>
    </div>
  );
}

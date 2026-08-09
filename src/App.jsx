import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import "./styles/main.css";

const SECTION_IDS = ["about", "experience", "skills", "projects", "certs", "resume", "contact"];

export default function App() {
  const [active, setActive] = useState("about");
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY + window.innerHeight * 0.3;
        let current = SECTION_IDS[0];
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= y) current = id;
        }
        setActive(current);
        ticking.current = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar active={active} />
      <main className="page">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

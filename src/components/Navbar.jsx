import { useEffect, useState } from "react";
import { personal } from "../data/portfolio";

const LINKS = [
  { id: "about", label: "about", num: "01" },
  { id: "experience", label: "experience", num: "02" },
  { id: "skills", label: "skills", num: "03" },
  { id: "projects", label: "projects", num: "04" },
  { id: "certs", label: "certifications", num: "05" },
  { id: "contact", label: "contact", num: "06" },
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const initials = personal.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a
          href="#about"
          className="nav__logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("about");
          }}
        >
          <span className="nav__logo-mark">{`<${initials}/>`}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? "nav__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.id);
              }}
            >
              <span className="nav__link-num">{l.num}.</span>
              {l.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              handleClick("resume");
            }}
          >
            resume.pdf
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}>
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            style={{ transitionDelay: `${i * 40}ms` }}
            className={`nav__mobile-link ${active === l.id ? "nav__mobile-link--active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(l.id);
            }}
          >
            <span className="nav__link-num">{l.num}.</span>
            {l.label}
          </a>
        ))}
        <a
          className="nav__cta nav__cta--mobile"
          href="#resume"
          onClick={(e) => {
            e.preventDefault();
            handleClick("resume");
          }}
        >
          resume.pdf
        </a>
      </div>
    </header>
  );
}

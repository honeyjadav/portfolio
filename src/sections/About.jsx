import { personal } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section hero">
      <div className="section__inner hero__inner">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            hi, my name is
          </p>
          <h1 className="hero__name">{personal.name}.</h1>
          <h2 className="hero__title">{personal.title}.</h2>
          <p className="hero__subtitle">{personal.subtitle}</p>
          <p className="hero__summary">{personal.summary}</p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a
              className="btn btn--ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </div>

          <div className="hero__socials">
            <a href={`https://${personal.github}`} target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <span className="hero__socials-sep">/</span>
            <a href={`https://${personal.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <span className="hero__socials-sep">/</span>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="code-window">
            <div className="code-window__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="code-window__title">about-me.js</span>
            </div>
            <pre className="code-window__body">
              <code>
<span className="tok-kw">const</span> <span className="tok-var">developer</span> = {"{"}
{"\n  "}<span className="tok-key">name</span>: <span className="tok-str">'{personal.name}'</span>,
{"\n  "}<span className="tok-key">role</span>: <span className="tok-str">'{personal.title}'</span>,
{"\n  "}<span className="tok-key">location</span>: <span className="tok-str">'{personal.location}'</span>,
{"\n  "}<span className="tok-key">stack</span>: [<span className="tok-str">'React'</span>, <span className="tok-str">'Node'</span>, <span className="tok-str">'MongoDB'</span>],
{"\n  "}<span className="tok-key">learning</span>: <span className="tok-str">'Data Science'</span>,
{"\n  "}<span className="tok-key">available</span>: <span className="tok-bool">true</span>,
{"\n"}{"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-cue__line" />
        scroll
      </a>
    </section>
  );
}

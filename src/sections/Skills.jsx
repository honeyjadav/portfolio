import { useState } from "react";
import { skills } from "../data/portfolio";

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__heading">
          <span className="section__num">03.</span> Skills.ini
        </h2>

        <div className="skills">
          <div className="skills__tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`skills__tab ${active === cat ? "skills__tab--active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills__panel skill-pills">
            {skills[active].map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <h2 className="section__heading">
          <span className="section__num">04.</span> Projects
        </h2>

        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-card__head">
                <span className="project-card__icon">{p.icon}</span>
                <span className="project-card__type">{p.type}</span>
              </div>
              <h3 className="project-card__name">{p.displayName}</h3>
              <p className="project-card__desc">{p.description}</p>
              <p className="project-card__impact">↳ {p.impact}</p>
              <div className="tag-row">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              {p.link && (<a
                className="project-card__link"
                href={`https://${p.link}`}
                target="_blank"
                rel="noreferrer"
              >
                {p.link} ↗
              </a>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { experience, education } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <h2 className="section__heading">
          <span className="section__num">02.</span> Experience
        </h2>

        <div className="timeline">
          {experience.map((job) => (
            <article key={job.id} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">
                    {job.role} <span className="timeline__at">@ {job.company}</span>
                  </h3>
                  <div className="timeline__head-right">
                    {job.award && <span className="badge badge--award">🏆 {job.award}</span>}
                    <span className="timeline__period">{job.period}</span>
                  </div>
                </div>
                <p className="timeline__type">{job.type}</p>
                <ul className="timeline__bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="section__subheading">Education</h3>
        <div className="edu-grid">
          {education.map((ed) => (
            <div key={ed.short} className="edu-card">
              <div className="edu-card__head">
                <span className="edu-card__short">{ed.short}</span>
                <span className={`badge ${ed.status === "In Progress" ? "badge--progress" : "badge--done"}`}>
                  {ed.status}
                </span>
              </div>
              <p className="edu-card__degree">{ed.degree}</p>
              <p className="edu-card__inst">{ed.institution}</p>
              <div className="edu-card__foot">
                <span>{ed.period}</span>
                {ed.cgpa && <span>{ed.cgpa}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

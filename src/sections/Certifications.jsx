import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certs" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__heading">
          <span className="section__num">05.</span> Certifications
        </h2>

        <div className="cert-grid">
          {certifications.map((c) => (
            <div key={c.id} className="cert-card" style={{ "--issuer-color": c.issuerColor }}>
              <div className="cert-card__head">
                <span className="cert-card__issuer">{c.issuer}</span>
                <span
                  className={`badge ${c.status === "earned" ? "badge--done" : "badge--progress"}`}
                >
                  {c.status === "earned" ? "Earned" : "In Progress"}
                </span>
              </div>
              <h3 className="cert-card__name">{c.name}</h3>
              <p className="cert-card__date">{c.date}</p>

              {c.status === "in-progress" && (
                <>
                  <div className="skill-bar__track cert-card__track">
                    <div className="skill-bar__fill" style={{ width: `${c.progress}%` }} />
                  </div>
                  <p className="cert-card__progress-text">
                    {c.progress}% · {c.completedModules.length}/{c.totalModules} modules complete
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="section__inner">
        <h2 className="section__heading">
          <span className="section__num">06.</span> Resume.doc
        </h2>
        <div className="resume__card">
          <div>
            <p className="resume__lead">
              Want the full picture — internships, education, and everything in one place?
            </p>
            <p className="resume__sub">Grab a copy of my resume as a PDF.</p>
          </div>
          <a className="btn btn--primary" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Honey_Jadav_Resume.pdf">
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

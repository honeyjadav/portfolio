import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <p className="eyebrow eyebrow--center">
          <span className="eyebrow__dot" />
          07. what's next?
        </p>
        <h2 className="contact__heading">Get In Touch</h2>
        <p className="contact__blurb">
          I'm currently open to new opportunities and always happy to chat about full-stack
          development, data science, or interesting projects. My inbox is open.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${personal.email}`}>
          Say Hello
        </a>

        <div className="contact__grid">
          <a className="contact__item" href={`mailto:${personal.email}`}>
            <span className="contact__item-label">Email</span>
            <span className="contact__item-value">{personal.email}</span>
          </a>
          <span className="contact__item">
            <span className="contact__item-label">Location</span>
            <span className="contact__item-value">{personal.location}</span>
          </span>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__socials">
          <a href={`https://${personal.github}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`https://${personal.linkedin}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
        <p className="footer__note">
          Designed &amp; built by {personal.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

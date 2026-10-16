import Link from "next/link";
import ResumeDownload from "../components/ResumeDownload";

export default function HomePage() {
  return (
    <section className="home-page">
      <p className="home-intro">Software engineer for practical systems</p>
      <h1>I turn complex workflows into software people can use.</h1>
      <p className="home-role">
        Sean Rad P. Alberto · AI, automation &amp; full-stack engineering
      </p>
      <p className="home-summary">
        I design and build practical systems that connect people, data, and the
        work between them—from AI-assisted experiences and internal automations
        to production web and mobile applications.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/projects">View Projects</Link>
        <ResumeDownload className="button button-secondary">Download Resume</ResumeDownload>
      </div>
      <ul aria-label="Selected proof points" className="hero-proof">
        <li><strong>3</strong><span>hands-on roles</span></li>
        <li><strong>9</strong><span>documented projects</span></li>
        <li><strong>Magna Cum Laude</strong><span>Computer Science</span></li>
      </ul>
      <div aria-label="Professional links" className="hero-links">
        <a href="https://www.linkedin.com/in/seanalberto/" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href="https://github.com/ImSeanSean" rel="noreferrer" target="_blank">GitHub</a>
        <a href="mailto:seanradalberto@gmail.com">Email</a>
      </div>
    </section>
  );
}

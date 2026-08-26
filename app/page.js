import Link from "next/link";
import ResumeDownload from "../components/ResumeDownload";

export default function HomePage() {
  return (
    <section className="home-page">
      <p className="home-intro">Software engineer</p>
      <h1>Sean Rad P. Alberto</h1>
      <p className="home-role">
        Software Engineer specializing in AI, Automation &amp; Full-Stack Systems
      </p>
      <p className="home-summary">
        I build AI-powered applications, intelligent automation, and full-stack
        systems that solve real business problems—from RAG-based assistants and
        enterprise chatbots to workflow automation and data-driven platforms.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/projects">View Projects</Link>
        <ResumeDownload className="button button-secondary">Download Resume</ResumeDownload>
      </div>
      <div aria-label="Professional links" className="hero-links">
        <a href="https://www.linkedin.com/in/seanalberto/" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href="https://github.com/ImSeanSean" rel="noreferrer" target="_blank">GitHub</a>
        <a href="mailto:seanradalberto@gmail.com">Email</a>
      </div>
      <p className="hero-specialties">AI systems&nbsp;&nbsp;•&nbsp;&nbsp;automation&nbsp;&nbsp;•&nbsp;&nbsp;full-stack applications</p>
    </section>
  );
}

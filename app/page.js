import Link from "next/link";
import ResumeDownload from "../components/ResumeDownload";
import projects from "./projects/projects";

const featuredProjectTitles = ["Tulai", "DarwinKPI", "SDO Olongapo ICT Hub"];
const featuredProjects = featuredProjectTitles
  .map((title) => projects.find((project) => project.title === title))
  .filter(Boolean);

const getCaseStudyDetail = (project, label) =>
  project.caseStudy.find(([detailLabel]) => detailLabel === label)?.[1];

const getProjectNextStep = (project) => {
  if (project.demoUrl) {
    return { href: project.demoUrl, label: "Open live demo", external: true };
  }

  if (project.repositoryUrl) {
    return { href: project.repositoryUrl, label: "View source", external: true };
  }

  return { href: "/projects", label: "View project details", external: false };
};

const processSteps = [
  ["Understand", "Clarify who is doing the work, where it slows down, and what the system has to make easier."],
  ["Design", "Shape a flow around the real constraints, whether that means a mobile path, dashboard, or automation."],
  ["Build", "Connect the interface, data, and integrations into something people can actually use."],
  ["Improve", "Use feedback and observed friction to tighten the next version."],
];

export default function HomePage() {
  return (
    <div className="home-route">
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

      <section aria-labelledby="featured-work-heading" className="featured-work">
        <div className="home-section-heading">
          <p className="eyebrow">Evidence from the work</p>
          <h2 id="featured-work-heading">Featured work</h2>
          <p>Three projects that show how I move from a real workflow problem to a usable system.</p>
        </div>
        <div className="featured-project-grid">
          {featuredProjects.map((project, index) => {
            const nextStep = getProjectNextStep(project);

            return (
              <article className="featured-project-card" key={project.title}>
                <div className="featured-project-image-wrap">
                  <img
                    alt={`${project.title} project preview`}
                    className="featured-project-image"
                    height={project.height}
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/${project.image}`}
                    width={project.width}
                  />
                  <span className="featured-project-index">0{index + 1}</span>
                </div>
                <div className="featured-project-content">
                  <h3>{project.title}</h3>
                  <p className="featured-project-description">{project.description}</p>
                  <dl className="featured-project-details">
                    <div>
                      <dt>Problem</dt>
                      <dd>{getCaseStudyDetail(project, "Problem")}</dd>
                    </div>
                    <div>
                      <dt>Solution</dt>
                      <dd>{getCaseStudyDetail(project, "How it works")}</dd>
                    </div>
                    <div>
                      <dt>My role</dt>
                      <dd>{getCaseStudyDetail(project, "My role")}</dd>
                    </div>
                  </dl>
                  <a
                    className="featured-project-link"
                    href={nextStep.href}
                    rel={nextStep.external ? "noreferrer" : undefined}
                    target={nextStep.external ? "_blank" : undefined}
                  >
                    {nextStep.label} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <Link className="home-section-link" href="/projects">See the full project catalogue <span aria-hidden="true">→</span></Link>
      </section>

      <section aria-labelledby="process-heading" className="process-section">
        <div className="home-section-heading process-heading">
          <p className="eyebrow">How I work</p>
          <h2 id="process-heading">A practical loop from friction to flow.</h2>
        </div>
        <ol className="process-steps">
          {processSteps.map(([title, detail]) => (
            <li className="process-step" key={title}>
              <span aria-hidden="true" className="process-step-marker" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

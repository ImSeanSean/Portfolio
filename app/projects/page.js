"use client";

import { useEffect, useRef, useState } from "react";

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const projects = [
  {
    image: "4.png",
    width: 1920,
    height: 1080,
    title: "SDO Olongapo ICT Hub",
    description: "A web and mobile development project for the SDO Olongapo ICT Department.",
    skills: [["flutter.png", "Flutter"], ["dart.png", "Dart"], ["typescript.png", "TypeScript"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "The ICT Department needed a dedicated way for users to access announcements and submit requests from a mobile device."],
      ["My role", "Mobile application developer; I also contributed to backend optimization as part of the project team."],
      ["What I owned", "Built the complete mobile application and assisted with optimizing the Express.js backend."],
      ["Technical decisions", "Used Flutter and Dart for a single mobile codebase, with TypeScript and MySQL supporting the application stack."],
      ["Outcome", "Delivered the project’s mobile experience for announcements and requests, while helping strengthen the backend that supports it."],
    ],
  },
  {
    image: "3.png",
    width: 1919,
    height: 981,
    title: "AppointMe",
    description: "An appointment queueing system for the Gordon College CCS Department.",
    skills: [["4.png", "Angular"], ["typescript.png", "TypeScript"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "The CCS Department needed a clearer way for people to manage appointment queues."],
      ["My role", "Project manager and contributing developer in a group project."],
      ["What I owned", "Led the team’s planning and collaboration while contributing to the system’s development."],
      ["Technical decisions", "The team built the web application with Angular and TypeScript, backed by MySQL for structured appointment data."],
      ["Outcome", "The team created a purpose-built system for organizing department appointment queues, supported by a shared delivery process."],
    ],
  },
  { image: "5.png", width: 1920, height: 996, title: "SubTask", description: "A Task Management Website created using Laravel. Tasks can have a list of subtasks. Features include deadline reminders, a robust details panel, and analytics.", skills: [["6.png", "Laravel"], ["5.png", "PHP"], ["mysql.png", "MySQL"]] },
  { image: "2.png", width: 1919, height: 983, title: "Chattr", description: "A Real Time Messaging Website made with Angular + PHP (Ratchet).", skills: [["4.png", "Angular"], ["5.png", "PHP"], ["mysql.png", "MySQL"]] },
  { image: "1.png", width: 1919, height: 982, title: "Happy Tails", description: "A pet adoption website made with HTML, CSS, and JavaScript. Utilized JavaScript and JSON for displaying various information per animal.", skills: [["1.png", "HTML"], ["2.png", "CSS"], ["3.png", "JS"]] },
  { image: "6.png", width: 1615, height: 906, title: "Payroll Management System", description: "A Java Swing Application created in NetBeans. The program is a payroll manager that utilizes an SQL database to manage payroll.", skills: [["7.png", "Java"], ["mysql.png", "MySQL"]] },
];

const skillImageSizes = {
  "dart.png": [300, 300],
  "typescript.png": [512, 512],
};

export default function ProjectsPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isProjectSummaryVisible, setIsProjectSummaryVisible] = useState(true);
  const projectsPageRef = useRef(null);
  const project = projects[projectIndex];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);
    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;

    const timer = setTimeout(
      () => setProjectIndex((index) => (index + 1) % projects.length),
      8000,
    );
    return () => clearTimeout(timer);
  }, [isPaused, prefersReducedMotion, projectIndex]);

  useEffect(() => {
    const page = projectsPageRef.current;
    const carousel = page?.querySelector(".projects-carousel-section");
    if (!page || !carousel) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsProjectSummaryVisible(!entry.isIntersecting),
      { root: page, threshold: 0.01 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  const changeProject = (direction) => {
    setProjectIndex((index) => (index + direction + projects.length) % projects.length);
  };

  const selectProject = (index) => setProjectIndex(index);

  const handleTabKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectProject((index + 1) % projects.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectProject((index - 1 + projects.length) % projects.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectProject(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectProject(projects.length - 1);
    }
  };

  return (
    <div className="projects-page snap-scroll" ref={projectsPageRef}>
      <div className="sticky-page-heading">
        <div className="sticky-page-heading-content">
          <p className="eyebrow">Selected work</p>
          <h1>My Projects</h1>
          <p aria-hidden={!isProjectSummaryVisible} className={isProjectSummaryVisible ? "project-summary" : "project-summary is-hidden"}>Software built around real people, workflows, and information.</p>
        </div>
      </div>
      <section className="project-directions-section snap-section">
        <div className="project-directions">
          <article className="project-direction-copy">
            <p className="eyebrow">AI Engineering</p>
            <h2>Useful, context-aware AI</h2>
            <p>RAG-based assistants, enterprise knowledge retrieval, and conversational experiences designed around real workflows.</p>
          </article>
          <article className="project-direction-copy">
            <p className="eyebrow">Automation</p>
            <h2>Connected, repeatable processes</h2>
            <p>Workflow automation and system integrations that reduce manual work across internal and third-party platforms.</p>
          </article>
          <article className="project-direction-copy">
            <p className="eyebrow">Software Engineering</p>
            <h2>Full-stack systems</h2>
            <p>Product-focused applications including Tulai, DarwinKPI, and the SDO Olongapo ICT Hub.</p>
          </article>
        </div>
      </section>
      <section aria-label="Projects carousel" className="projects-carousel-section snap-section" role="region">
      <div className="slider">
        <div className="project-meta">
          <p><span>{String(projectIndex + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}</p>
          <button
            aria-label={prefersReducedMotion ? "Autoplay disabled because reduced motion is enabled" : isPaused ? "Resume slideshow" : "Pause slideshow"}
            className="autoplay-toggle"
            disabled={prefersReducedMotion}
            onClick={() => setIsPaused((paused) => !paused)}
            title={prefersReducedMotion ? "Autoplay disabled because reduced motion is enabled" : isPaused ? "Resume slideshow" : "Pause slideshow"}
            type="button"
          >
            {prefersReducedMotion ? "—" : isPaused ? "▶" : "❚❚"}
          </button>
        </div>
        <div className="split" key={project.title}>
          <div className="project-visual">
            <img alt={`${project.title} project preview`} className="project-image" height={project.height} src={assetPath(`/projects/${project.image}`)} width={project.width} />
          </div>
          <div className="details">
            <h2>{project.title}</h2>
            <div className="skill-list">
              {project.skills.map(([image, name]) => {
                const [width, height] = skillImageSizes[image] ?? [1000, 1000];
                return (
                  <div className="skill" key={name}>
                    <img alt="" height={height} src={assetPath(`/skills/${image}`)} width={width} />
                    <h3>{name}</h3>
                  </div>
                );
              })}
            </div>
            <p className="project-description">{project.description}</p>
            {project.caseStudy && (
              <dl className="project-case-study">
                {project.caseStudy.map(([label, detail]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
        <button aria-label="Previous project" className="slider-control previous" onClick={() => changeProject(-1)} type="button">&#10094;</button>
        <button aria-label="Next project" className="slider-control next" onClick={() => changeProject(1)} type="button">&#10095;</button>
        <div className="slider-footer">
          <div aria-label="Choose a project" className="slide-picker" role="group">
            {projects.map((item, index) => (
              <button
                aria-label={`Show ${item.title}`}
                className={index === projectIndex ? "active" : undefined}
                key={item.title}
                onClick={() => selectProject(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                type="button"
              />
            ))}
          </div>
          <div aria-hidden="true" className="slide-progress">
            {!isPaused && !prefersReducedMotion && <span key={projectIndex} />}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

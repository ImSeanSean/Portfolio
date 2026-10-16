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
      ["Problem", "ICT coordinators were handling a high volume of requests across schools, making request management and announcements harder to coordinate."],
      ["How it works", "A mobile app gives users a dedicated path for announcements and request submission, supported by an Express.js backend."],
      ["My role", "Sole Mobile Frontend Developer; led stakeholder discussions, guided the team using Agile, and assisted with the Express.js backend."],
      ["Outcome", "Turned the department's request and announcement flow into a dedicated mobile workflow."],
    ],
    accessNote: "The source and live system are not public; details here are limited to the work shown.",
  },
  {
    image: "3.png",
    width: 1919,
    height: 981,
    title: "AppointMe",
    description: "An appointment queueing system for the Gordon College CCS Department.",
    repositoryUrl: "https://github.com/ImSeanSean/AppointMeProduction",
    skills: [["4.png", "Angular"], ["typescript.png", "TypeScript"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "Students needed a more streamlined appointment process with the Gordon College CCS Faculty."],
      ["How it works", "An appointment management system organizes student requests into a queue for the CCS Faculty."],
      ["My role", "Led discussions with faculty, managed the team through Agile, created the backend and database, and acted as Lead Frontend Developer."],
      ["Outcome", "Gave the faculty a single workflow for organizing student appointments while giving the team a shared delivery process."],
    ],
  },
  {
    image: "darwinkpi.png",
    width: 500,
    height: 500,
    title: "DarwinKPI",
    description: "A workforce KPI analytics and reporting dashboard for tracking performance, goals, and team insights.",
    repositoryUrl: "https://github.com/ImSeanSean/darwinKPI",
    skills: [["4.png", "Angular"], ["typescript.png", "TypeScript"]],
    caseStudy: [
      ["Problem", "Teams needed a clearer way to monitor workforce performance and turn KPI data into useful decisions."],
      ["How it works", "A web dashboard brings together real-time KPI tracking, analytics, goal management, flexible visualizations, and reporting views."],
      ["My role", "Led the end-to-end development and management of the workforce performance tracking system."],
      ["Outcome", "Made workforce performance, goals, and reporting visible in one place for data-informed decisions."],
    ],
  },
  {
    image: "5.png",
    width: 1920,
    height: 996,
    title: "SubTask",
    description: "A Laravel task-management website with nested subtasks, deadline reminders, detailed task views, and analytics.",
    repositoryUrl: "https://github.com/ImSeanSean/SubTask",
    skills: [["6.png", "Laravel"], ["5.png", "PHP"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "Larger tasks need to be broken into smaller, trackable steps without losing their relationship to the main task."],
      ["How it works", "Nested subtasks retain their parent relationship, with deadline reminders, detailed task views, and analytics around the work."],
      ["My role", "Designed and developed the application across Laravel, PHP, and MySQL."],
      ["Outcome", "Turned multi-level task tracking into a structured workflow that keeps detail connected to the larger task."],
    ],
  },
  {
    image: "2.png",
    width: 1919,
    height: 983,
    title: "Chattr",
    description: "A real-time messaging website centered on WebSocket-powered chat.",
    repositoryUrl: "https://github.com/ImSeanSean/Chattr",
    skills: [["4.png", "Angular"], ["5.png", "PHP"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "A chat experience needs messages to appear immediately instead of requiring users to manually refresh the page."],
      ["How it works", "An Angular client uses PHP and Ratchet WebSockets to deliver messages as chat events occur."],
      ["My role", "Built the real-time messaging workflow across the application stack."],
      ["Outcome", "Produced a chat experience centered on immediate message updates instead of manual refreshes."],
    ],
  },
  {
    image: "1.png",
    width: 1919,
    height: 982,
    title: "Happy Tails",
    description: "A pet-adoption website that helps people browse animals available for adoption.",
    repositoryUrl: "https://github.com/ImSeanSean/HappyTails",
    skills: [["1.png", "HTML"], ["2.png", "CSS"], ["3.png", "JS"]],
    caseStudy: [
      ["Problem", "People considering adoption need a clear way to browse animals and understand their available information."],
      ["How it works", "A lightweight site uses JavaScript and JSON to present each animal's information in a browsable experience."],
      ["My role", "Led the project and developed the frontend experience for presenting each animal's information."],
      ["Outcome", "Gave prospective adopters a clearer way to browse available animals and their details."],
    ],
  },
  {
    image: "6.png",
    width: 1615,
    height: 906,
    title: "Payroll Management System",
    description: "An individual Java Swing desktop application for managing payroll records.",
    repositoryUrl: "https://github.com/ImSeanSean/PMS-Payroll-Management-System-",
    skills: [["7.png", "Java"], ["mysql.png", "MySQL"]],
    caseStudy: [
      ["Problem", "Payroll records need a dedicated interface for organizing and managing pay-related information."],
      ["How it works", "A Java Swing desktop application uses an SQL database to manage payroll records through a focused desktop workflow."],
      ["My role", "Designed and developed the full desktop application and its payroll-management workflow as an individual project."],
      ["Outcome", "Created a focused desktop workflow for organizing payroll records and pay-related information."],
    ],
  },
  {
    title: "Eyettendance",
    description: "A QR-code attendance system using an ESP32-CAM and a Node.js server.",
    repositoryUrl: "https://github.com/ImSeanSean/Eyettendance-ft.-Unlockr",
    skills: [[null, "C++"], ["nodejs.svg", "Node.js"]],
    caseStudy: [
      ["Problem", "Attendance capture needs a reliable path from a physical QR scan to stored records and administrative review."],
      ["How it works", "An ESP32-CAM captures QR codes; a Node.js server decodes scans and records attendance in SQLite; a web interface manages students and attendance."],
      ["My role", "Built the connected prototype across the ESP32-CAM capture flow, Node.js server, database, and administration interface."],
      ["Outcome", "Connected scan capture, attendance records, and administration in one working prototype workflow."],
    ],
  },
  {
    title: "Tulai",
    description: "An AI-assisted enrollment system that makes Philippine Alternative Learning System registration more accessible.",
    repositoryUrl: "https://github.com/ImSeanSean/Tulai",
    image: "tulai-logo.png",
    width: 1024,
    height: 1024,
    skills: [["flutter.png", "Flutter"], ["dart.png", "Dart"], ["gemini.svg", "Google Gemini"]],
    demoUrl: "https://tulai.vercel.app",
    caseStudy: [
      ["Problem", "ALS enrollment can be difficult for people with limited digital literacy and complex form requirements."],
      ["How it works", "A guided Flutter flow supports step-by-step form completion with an AI assistant, voice input, English and Filipino guidance, and Supabase-backed data handling."],
      ["My role", "Solo developer; handled the end-to-end mobile development and AI integration."],
      ["Outcome", "Made the enrollment flow more accessible for people with limited typing skills or digital literacy through guided, voice-enabled interaction."],
    ],
    accessNote: "The public demo is available; the source repository is private.",
  },
];

const skillImageSizes = {
  "dart.png": [300, 300],
  "typescript.png": [512, 512],
};

export default function ProjectsPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isProjectSummaryVisible, setIsProjectSummaryVisible] = useState(true);
  const projectsPageRef = useRef(null);
  const mobileCarouselRef = useRef(null);
  const carouselSwipeStart = useRef(null);
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

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    let observer;

    const updateSummaryVisibility = () => {
      observer?.disconnect();

      if (mobileQuery.matches) {
        setIsProjectSummaryVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => setIsProjectSummaryVisible(!entry.isIntersecting),
        { root: page, threshold: 0.01 },
      );
      observer.observe(carousel);
    };

    updateSummaryVisibility();
    mobileQuery.addEventListener("change", updateSummaryVisibility);
    return () => {
      observer?.disconnect();
      mobileQuery.removeEventListener("change", updateSummaryVisibility);
    };
  }, []);

  const changeProject = (direction) => {
    setProjectIndex((index) => (index + direction + projects.length) % projects.length);
  };

  const selectProject = (index) => setProjectIndex(index);

  const selectMobileProject = (index) => {
    const track = mobileCarouselRef.current;
    if (!track) return;

    track.scrollTo({
      left: index * track.clientWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const updateMobileProjectIndex = (event) => {
    const track = event.currentTarget;
    const index = Math.round(track.scrollLeft / track.clientWidth);

    setMobileProjectIndex(Math.min(index, projects.length - 1));
  };

  const recordCarouselSwipeStart = (event) => {
    carouselSwipeStart.current = event.touches[0]?.clientX ?? null;
  };

  const wrapCarouselSwipe = (event) => {
    const startX = carouselSwipeStart.current;
    const endX = event.changedTouches[0]?.clientX;
    const track = event.currentTarget;
    const maximumScrollLeft = track.scrollWidth - track.clientWidth;

    carouselSwipeStart.current = null;
    if (startX === null || endX === undefined || maximumScrollLeft <= 0) return;

    const swipeDistance = startX - endX;
    const atFirstProject = track.scrollLeft <= 1;
    const atLastProject = track.scrollLeft >= maximumScrollLeft - 1;

    const behavior = prefersReducedMotion ? "auto" : "smooth";
    if (swipeDistance > 40 && atLastProject) track.scrollTo({ left: 0, behavior });
    if (swipeDistance < -40 && atFirstProject) track.scrollTo({ left: maximumScrollLeft, behavior });
  };

  const renderProject = (item, panelId) => (
    <div
      aria-labelledby={panelId ? `${panelId}-title` : undefined}
      className="split"
      id={panelId}
      key={item.title}
    >
      <div className="project-visual">
        {item.image ? (
          <img alt={`${item.title} project preview`} className="project-image" height={item.height} src={assetPath(`/projects/${item.image}`)} width={item.width} />
        ) : (
          <div className="repository-visual">
            <p className="eyebrow">Public repository</p>
            <strong>{item.title}</strong>
            <span>github.com/ImSeanSean</span>
          </div>
        )}
      </div>
      <div className="details">
        <h2 id={panelId ? `${panelId}-title` : undefined}>{item.title}</h2>
        <p className="project-description">{item.description}</p>
        {item.caseStudy && (
          <dl className="project-case-study">
            {item.caseStudy.map(([label, detail]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="project-stack">
          <h3>Stack</h3>
          <div className="skill-list">
            {item.skills.map(([image, name]) => {
              const [width, height] = skillImageSizes[image] ?? [1000, 1000];
              return (
                <div className="skill" key={name}>
                  {image ? <img alt="" height={height} src={assetPath(`/skills/${image}`)} width={width} /> : <span aria-hidden="true" className="skill-marker">{"</>"}</span>}
                  <h4>{name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        {(item.repositoryUrl || item.demoUrl || item.accessNote) && (
          <div className="project-actions">
            {item.repositoryUrl && <a className="project-source-link" href={item.repositoryUrl} rel="noreferrer" target="_blank">View source on GitHub <span aria-hidden="true">↗</span></a>}
            {item.demoUrl && <a className="project-source-link" href={item.demoUrl} rel="noreferrer" target="_blank">Open live demo <span aria-hidden="true">↗</span></a>}
            {item.accessNote && <p className="project-access-note">{item.accessNote}</p>}
          </div>
        )}
      </div>
    </div>
  );

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
      <div className="slider projects-slider-desktop">
        {renderProject(project, "selected-project")}
        <button aria-label="Previous project" className="slider-control previous" onClick={() => changeProject(-1)} type="button">&#10094;</button>
        <button aria-label="Next project" className="slider-control next" onClick={() => changeProject(1)} type="button">&#10095;</button>
        <div className="slider-footer">
          <div className="slide-navigation">
            <p className="project-count"><span>{String(projectIndex + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}</p>
            <div aria-label="Choose a project" className="slide-picker" role="group">
              {projects.map((item, index) => (
                <button
                  aria-controls="selected-project"
                  aria-label={`Show ${item.title}`}
                  aria-pressed={index === projectIndex}
                  className={index === projectIndex ? "active" : undefined}
                  key={item.title}
                  onClick={() => selectProject(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
          <div className="slide-controls">
            <div aria-hidden="true" className="slide-progress">
              {!isPaused && !prefersReducedMotion && <span key={projectIndex} />}
            </div>
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
        </div>
      </div>
      <div aria-label="Project details" className="projects-mobile-carousel" id="mobile-project-carousel" onScroll={updateMobileProjectIndex} onTouchEnd={wrapCarouselSwipe} onTouchStart={recordCarouselSwipeStart} ref={mobileCarouselRef}>
        {projects.map((item, index) => renderProject(item, `mobile-project-${index}`))}
      </div>
      <div aria-label="Choose a project" className="projects-mobile-picker slide-picker" role="group">
        {projects.map((item, index) => (
          <button
            aria-controls={`mobile-project-${index}`}
            aria-label={`Show ${item.title}`}
            aria-pressed={index === mobileProjectIndex}
            className={index === mobileProjectIndex ? "active" : undefined}
            key={item.title}
            onClick={() => selectMobileProject(index)}
            type="button"
          />
        ))}
      </div>
      </section>
    </div>
  );
}

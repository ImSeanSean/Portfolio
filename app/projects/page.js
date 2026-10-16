"use client";

import { useEffect, useRef, useState } from "react";
import projects from "./projects";

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

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

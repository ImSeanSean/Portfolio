"use client";

import { useEffect, useState } from "react";

const projects = [
  { image: "1.png", title: "Happy Tails", description: "A pet adoption website made with HTML, CSS, and JavaScript. Utilized JavaScript and JSON for displaying various information per animal.", skills: [["1.png", "HTML"], ["2.png", "CSS"], ["3.png", "JS"]] },
  { image: "2.png", title: "Chattr", description: "A Real Time Messaging Website made with Angular + PHP (Ratchet).", skills: [["4.png", "Angular"], ["5.png", "PHP"], ["mysql.png", "MySQL"]] },
  { image: "3.png", title: "AppointMe", description: "An Appointment Queueing System for Gordon College CCS Department. A group project where I led my team as a project manager. Aside from programming experience, this project taught me project management, leadership, and collaboration.", skills: [["4.png", "Angular"], ["typescript.png", "TypeScript"], ["mysql.png", "MySQL"]] },
  { image: "5.png", title: "SubTask", description: "A Task Management Website created using Laravel. Tasks can have a list of subtasks. Features include deadline reminders, a robust details panel, and analytics.", skills: [["6.png", "Laravel"], ["5.png", "PHP"], ["mysql.png", "MySQL"]] },
  { image: "4.png", title: "SDO Olongapo ICT Hub", description: "A Web & Mobile Development Project made for SDO Olongapo ICT Department. Developed the entire mobile application for the project and assisted in optimizing the Express.js backend.", skills: [["flutter.png", "Flutter"], ["dart.png", "Dart"], ["typescript.png", "TypeScript"], ["mysql.png", "MySQL"]] },
  { image: "6.png", title: "Payroll Management System", description: "A Java Swing Application created in NetBeans. The program is a payroll manager that utilizes an SQL database to manage payroll.", skills: [["7.png", "Java"], ["mysql.png", "MySQL"]] },
];

export default function ProjectsPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const project = projects[projectIndex];

  useEffect(() => {
    const timer = setInterval(() => setProjectIndex((index) => (index + 1) % projects.length), 10000);
    return () => clearInterval(timer);
  }, []);

  const changeProject = (direction) => {
    setProjectIndex((index) => (index + direction + projects.length) % projects.length);
  };

  return (
    <section className="projects-page">
      <h1>My Projects</h1>
      <div className="slider">
        <div className="split">
          <img alt={`${project.title} project preview`} className="project-image" src={`/projects/${project.image}`} />
          <div className="details">
            <h2>{project.title}</h2>
            <div className="skill-list">
              {project.skills.map(([image, name]) => (
                <div className="skill" key={name}>
                  <img alt="" src={`/skills/${image}`} />
                  <h3>{name}</h3>
                </div>
              ))}
            </div>
            <p>{project.description}</p>
          </div>
        </div>
        <button aria-label="Previous project" className="previous" onClick={() => changeProject(-1)} type="button">&#10094;</button>
        <button aria-label="Next project" className="next" onClick={() => changeProject(1)} type="button">&#10095;</button>
      </div>
    </section>
  );
}

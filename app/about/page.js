"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const skillGroups = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [["typescript.png", "TypeScript"], ["4.png", "Angular"], ["react.svg", "React"], ["nextjs.svg", "Next.js"]],
  },
  {
    id: "backend-systems",
    name: "Backend & Systems",
    skills: [["9.png", "Python"], ["6.png", "Laravel"], ["nodejs.svg", "Node.js"], ["express.svg", "Express.js"], ["django.svg", "Django"]],
  },
  {
    id: "cloud-automation",
    name: "Cloud & Automation",
    skills: [["azure.svg", "Azure"], ["wordpress.svg", "WordPress"], ["power-automate.svg", "Power Automate"], ["n8n.svg", "n8n"], ["git.svg", "Git & CI/CD"]],
  },
  {
    id: "ai-data",
    name: "AI & Data",
    skills: [["azure.svg", "Azure OpenAI"], ["gemini.svg", "Gemini"], [null, "RAG"]],
  },
  {
    id: "databases",
    name: "Databases",
    skills: [["mysql.png", "MySQL"], ["microsoft-sql-server.svg", "Microsoft SQL Server"]],
  },
  {
    id: "mobile",
    name: "Mobile",
    skills: [["flutter.png", "Flutter"]],
  },
];

const skillPages = [skillGroups.slice(0, 3), skillGroups.slice(3)];

const skillImageSizes = {
  "dart.png": [300, 300],
  "typescript.png": [512, 512],
};

const experience = [
  {
    title: "Software Engineer",
    company: "Planate Management Group",
    period: "Jul 2026 — Present",
    arrangement: "Hybrid",
    current: true,
    details: [
      "Develop and maintain enterprise software using modern web technologies, APIs, cloud services, and scalable architectures.",
      "Build AI-powered systems and automation solutions that improve internal processes and operational efficiency.",
      "Contribute to Azure OpenAI, retrieval-augmented generation (RAG), and enterprise knowledge-integration initiatives.",
      "Design integrations and automated workflows across internal and third-party enterprise platforms.",
      "Support DevOps practices including Git workflows, CI/CD, deployments, environment management, and application optimization.",
      "Partner with stakeholders and cross-functional teams to turn business requirements into scalable technical solutions.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Planate Management Group",
    period: "Feb 2026 — Jun 2026",
    arrangement: "Hybrid",
    details: [
      "Developed and maintained WordPress solutions, including custom themes, plugins, and content-management enhancements.",
      "Contributed to AI-driven systems supporting automation and internal business workflows.",
      "Designed Microsoft Power Automate workflows to streamline business operations.",
      "Assisted with version control, deployments, and DevOps processes for internal applications.",
      "Collaborated with cross-functional teams to deliver solutions aligned with organizational requirements.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Rooche Digital",
    period: "Mar 2025 — Feb 2026",
    arrangement: "Remote",
    detailsAbove: true,
    details: [
      "Delivered full-stack web solutions for multiple clients using Next.js, Laravel, and cloud-based services.",
      "Integrated Facebook Ads and third-party APIs for marketing automation and analytics workflows.",
      "Built a Next.js and Cloudflare passport-photo generation system with optimized image processing and deployment.",
      "Developed CRM and marketing automation solutions using GoHighLevel, n8n workflows, and Laravel.",
      "Contributed to a community-management platform for game studios using React and Express.js.",
      "Worked with stakeholders to translate business requirements into scalable, automated solutions.",
    ],
  },
];

const awards = [
  {
    title: "Magna Cum Laude",
    issuer: "Gordon College",
    date: "Jul 2026",
  },
  {
    title: "Student Leadership",
    issuer: "Gordon College",
    date: "College service",
    roles: [
      "President, College of Computer Studies Student Council",
      "Co-Lead, AWS Cloud Club - Gordon College",
      "CCS Representative, Supreme Student Council",
      "President & Vice President, Society of Programming Enthusiasts in Computer Science",
    ],
  },
];

const certifications = [
  ["AWS AI Practitioner Challenge", "Amazon Web Services", "Jun 24, 2026"],
  ["Data Literacy", "DataCamp", "Mar 2025"],
  ["Understanding Cloud Computing", "DataCamp", "Mar 2025"],
  ["Understanding Data Science", "DataCamp", "Feb 2025"],
  ["Understanding Machine Learning", "DataCamp", "Feb 2025"],
  ["Visualize Data with Python", "Department of Information and Communications Technology", "Dec 2024"],
  ["Analyze Data with Python", "Department of Information and Communications Technology", "Dec 2024"],
  ["CCNAv7: Introduction to Networks", "Cisco Networking Academy", "Jun 2024"],
];

export default function AboutPage() {
  const [skillPageIndex, setSkillPageIndex] = useState(0);
  const experienceSwipeStart = useRef(null);
  const skillPage = skillPages[skillPageIndex];

  const changeSkillPage = (direction) => {
    setSkillPageIndex((index) => (index + direction + skillPages.length) % skillPages.length);
  };

  const recordExperienceSwipeStart = (event) => {
    experienceSwipeStart.current = event.touches[0]?.clientX ?? null;
  };

  const wrapExperienceSwipe = (event) => {
    const startX = experienceSwipeStart.current;
    const endX = event.changedTouches[0]?.clientX;
    const track = event.currentTarget;
    const maximumScrollLeft = track.scrollWidth - track.clientWidth;

    experienceSwipeStart.current = null;
    if (startX === null || endX === undefined || maximumScrollLeft <= 0) return;

    const swipeDistance = startX - endX;
    const atFirstRole = track.scrollLeft <= 1;
    const atLastRole = track.scrollLeft >= maximumScrollLeft - 1;

    if (swipeDistance > 40 && atLastRole) track.scrollTo({ left: 0, behavior: "smooth" });
    if (swipeDistance < -40 && atFirstRole) track.scrollTo({ left: maximumScrollLeft, behavior: "smooth" });
  };

  return (
    <div className="about-page snap-scroll">
      <div className="sticky-page-heading">
        <div className="sticky-page-heading-content">
          <p className="eyebrow">Profile</p>
          <h1>About Me</h1>
        </div>
      </div>
      <section className="about-profile-section snap-section">
        <div className="information">
          <div className="personal">
            <div className="profile-frame">
              <img alt="Sean Rad P. Alberto" className="profile" height="1954" src={assetPath("/profile.png")} width="2150" />
            </div>
            <div className="about-intro">
              <p className="eyebrow">Software engineer</p>
              <h2>I build software that solves real problems.</h2>
              <p className="about-lede">
                I design and build full-stack applications, workflow automation, and AI-powered systems that make work simpler and ideas tangible.
              </p>
              <p className="about-copy">
                I bring technical depth, curiosity, and a practical approach to every project—whether I&apos;m contributing to a team or building a custom solution for a client.
              </p>
              <ul className="about-highlights" aria-label="Core strengths">
                <li>Full-stack development</li>
                <li>Workflow automation</li>
                <li>AI-powered systems</li>
              </ul>
              <Link className="about-cta" href="/contact">Let&apos;s work together <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section snap-section">
        <div className="experience-panel">
          <div className="experience-intro">
            <p className="eyebrow">Experience</p>
            <h2>Building production systems, one role at a time.</h2>
            <p>Hands-on work across full-stack applications, AI-powered systems, workflow automation, integrations, and DevOps collaboration.</p>
            <div className="education-credential">
              <p className="eyebrow">Education</p>
              <p><strong>Bachelor of Science in Computer Science</strong><span>Gordon College · Magna Cum Laude · Jul 2026</span></p>
            </div>
          </div>
          <ol className="experience-timeline" onTouchEnd={wrapExperienceSwipe} onTouchStart={recordExperienceSwipeStart}>
            {experience.map(({ title, company, period, arrangement, current, detailsAbove, details }) => (
              <li className={`experience-role${current ? " experience-role-current" : ""}`} key={title} tabIndex={0}>
                <div className="experience-role-meta">
                  <p>{period}</p>
                  {current && <span>Current</span>}
                </div>
                <h3>{title}</h3>
                <p className="experience-company">{company} · {arrangement}</p>
                <div className={`experience-role-details${detailsAbove ? " experience-role-details-above" : ""}`}>
                  <p>What I worked on</p>
                  <ul>
                    {details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="awards-section snap-section">
        <div className="awards-panel">
          <div className="awards-intro">
            <p className="eyebrow">Recognition</p>
            <h2>Credentials built through continuous learning.</h2>
            <p>Academic honors and certifications that reflect the foundations behind my work.</p>
          </div>
          <div className="credential-groups">
            <section className="credential-group" aria-labelledby="awards-heading">
              <h3 id="awards-heading">Awards</h3>
              <div className="credential-list">
                {awards.map(({ title, issuer, date, roles }) => (
                  <article className="credential-card" key={title}>
                    <p>{date}</p>
                    <h4>{title}</h4>
                    <span>{issuer}</span>
                    {roles && <ul className="credential-roles">{roles.map((role) => <li key={role}>{role}</li>)}</ul>}
                  </article>
                ))}
              </div>
            </section>
            <section className="credential-group" aria-labelledby="certifications-heading">
              <h3 id="certifications-heading">Certifications</h3>
              <div className="credential-list certification-list">
                {certifications.map(([title, issuer, date]) => (
                  <article className="credential-card" key={title}>
                    <p>{date}</p>
                    <h4>{title}</h4>
                    <span>{issuer}</span>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="skills-section snap-section">
        <div className="skills-panel">
          <div className="skills-intro">
            <p className="eyebrow">Toolkit</p>
            <h2>What I Build With</h2>
            <p>Languages and frameworks I use to turn ideas into working products.</p>
          </div>
          <div className="toolkit-slider">
            <button aria-label="Previous toolkit page" className="toolkit-page-control toolkit-previous" onClick={() => changeSkillPage(-1)} type="button">&#10094;</button>
            <div className="skill-groups" key={skillPageIndex}>
              {skillPage.map(({ id, name, skills }, groupIndex) => (
                <section className="skill-group" key={id} aria-labelledby={`skill-group-${id}`}>
                  <h3 id={`skill-group-${id}`}>{name}</h3>
                  <div className="skills">
                    {skills.map(([image, skillName], index) => {
                      const [width, height] = skillImageSizes[image] ?? [1000, 1000];
                      return (
                        <div className="skill skill-reveal" key={skillName} style={{ "--item-index": groupIndex * 5 + index }}>
                          {image ? (
                            <img alt="" height={height} src={assetPath(`/skills/${image}`)} width={width} />
                          ) : (
                            <span aria-hidden="true" className="skill-marker">{"</>"}</span>
                          )}
                          <h4>{skillName}</h4>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
            <button aria-label="Next toolkit page" className="toolkit-page-control toolkit-next" onClick={() => changeSkillPage(1)} type="button">&#10095;</button>
          </div>
          <div className="toolkit-pagination">
            <div className="toolkit-page-picker" role="group" aria-label="Choose toolkit page">
              <p className="toolkit-page-count"><span>{String(skillPageIndex + 1).padStart(2, "0")}</span> / {String(skillPages.length).padStart(2, "0")}</p>
              <div className="slide-picker">
                {skillPages.map((page, index) => (
                  <button
                    aria-label={`Show toolkit page ${index + 1}: ${page.map((group) => group.name).join(", ")}`}
                    className={index === skillPageIndex ? "active" : undefined}
                    key={page[0].id}
                    onClick={() => setSkillPageIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

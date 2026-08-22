const skills = [
  ["1.png", "HTML"], ["2.png", "CSS"], ["3.png", "JavaScript"],
  ["typescript.png", "TypeScript"], ["4.png", "Angular"], ["7.png", "Java"],
  ["5.png", "PHP"], ["6.png", "Laravel"], ["8.png", "C"], ["9.png", "Python"],
  ["dart.png", "Dart"], ["flutter.png", "Flutter"],
];

const skillImageSizes = {
  "dart.png": [300, 300],
  "typescript.png": [512, 512],
};

export default function AboutPage() {
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
              <img alt="Sean Rad P. Alberto" className="profile" height="1954" src="/profile.png" width="2150" />
            </div>
            <p className="about-copy">
              An ambitious and highly-motivated Computer Science student who
              excels not only in software development, but also in leadership and
              project management. Has practical experience in using a variety of
              programming languages and frameworks and in leading multiple
              projects. Flexible and can easily adapt to new environment and
              programming languages and frameworks.
            </p>
          </div>
        </div>
      </section>
      <section className="experience-section snap-section">
        <div className="experience-summary">
          <p className="eyebrow">Experience</p>
          <h2>Building Production Systems Across AI, Automation &amp; Full-Stack Development</h2>
          <p>Hands-on professional experience delivering full-stack applications, AI-powered systems, workflow automation, integrations, and DevOps collaboration.</p>
          <ul>
            <li>Software Engineer · July 2026 – Present</li>
            <li>Software Engineer Intern · February 2026 – June 2026</li>
            <li>Full-Stack Developer · March 2025 – February 2026</li>
          </ul>
        </div>
      </section>
      <section className="skills-section snap-section">
        <div className="skills-panel">
          <div className="skills-intro">
            <p className="eyebrow">Toolkit</p>
            <h2>What I Build With</h2>
            <p>Languages and frameworks I use to turn ideas into working products.</p>
          </div>
          <div className="skills">
            {skills.map(([image, name], index) => {
              const [width, height] = skillImageSizes[image] ?? [1000, 1000];
              return (
                <div className="skill skill-reveal" key={name} style={{ "--item-index": index }}>
                  <img alt="" height={height} src={`/skills/${image}`} width={width} />
                  <h3>{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

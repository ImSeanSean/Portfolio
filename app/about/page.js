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
    <section className="about-page">
      <div className="section-heading about-heading">
        <p className="eyebrow">Profile</p>
        <h1>About Me</h1>
      </div>
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
      </div>
    </section>
  );
}

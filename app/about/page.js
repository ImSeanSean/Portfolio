const skills = [
  ["1.png", "HTML"], ["2.png", "CSS"], ["3.png", "JavaScript"],
  ["typescript.png", "TypeScript"], ["4.png", "Angular"], ["7.png", "Java"],
  ["5.png", "PHP"], ["6.png", "Laravel"], ["8.png", "C"], ["9.png", "Python"],
  ["dart.png", "Dart"], ["flutter.png", "Flutter"],
];

export default function AboutPage() {
  return (
    <section className="about-page">
      <h1>About</h1>
      <div className="information">
        <div className="personal">
          <img alt="Sean Rad P. Alberto" className="profile" src="/profile.png" />
          <p>
            An ambitious and highly-motivated Computer Science student who
            excels not only in software development, but also in leadership and
            project management. Has practical experience in using a variety of
            programming languages and frameworks and in leading multiple
            projects. Flexible and can easily adapt to new environment and
            programming languages and frameworks.
          </p>
        </div>
        <div className="skills">
          {skills.map(([image, name]) => (
            <div className="skill" key={name}>
              <img alt="" src={`/skills/${image}`} />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

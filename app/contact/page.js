const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const workflowEmailHref = "mailto:seanradalberto@gmail.com?subject=Role%20or%20workflow%20conversation";

const professionalContacts = [
  { image: "4.png", label: "Email Sean", detail: "seanradalberto@gmail.com", href: "mailto:seanradalberto@gmail.com" },
  { image: "3.png", label: "Connect on LinkedIn", detail: "Professional profile", href: "https://www.linkedin.com/in/seanalberto/" },
  { image: "2.png", label: "View GitHub", detail: "Projects and code", href: "https://github.com/ImSeanSean" },
  { image: null, label: "Download resume", detail: "PDF · Software Engineer", href: assetPath("/sean-rad-alberto-resume.pdf"), download: true },
];

const socialContacts = [
  { image: "1.png", label: "Facebook", href: "https://web.facebook.com/seanrad.alberto.7/" },
];

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="section-heading contact-heading">
        <p className="eyebrow">Get in touch</p>
        <h1>What is your team still doing by hand?</h1>
        <p className="contact-intro">Tell me what is repetitive, scattered, or difficult to track. I build AI-assisted, automated, and full-stack systems that make this kind of work easier to run—whether you&apos;re hiring or improving a workflow.</p>
        <div className="hero-actions contact-heading-actions">
          <a className="button button-primary" href={workflowEmailHref}>Email about a role or workflow <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <section aria-labelledby="professional-contact-heading" className="contact-group">
        <h2 id="professional-contact-heading">Professional contact</h2>
        <div className="contact-list">
          {professionalContacts.map((contact) => (
            <a className="contact" download={contact.download || undefined} href={contact.href} key={contact.href} rel="noreferrer" target={contact.href.startsWith("http") ? "_blank" : undefined}>
              {contact.image ? <img alt="" height="1000" src={assetPath(`/contacts/${contact.image}`)} width="1000" /> : <span aria-hidden="true" className="contact-icon">↓</span>}
              <span className="contact-copy"><strong>{contact.label}</strong><small>{contact.detail}</small></span>
              <span aria-hidden="true" className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section aria-labelledby="social-contact-heading" className="contact-group contact-group-secondary">
        <h2 id="social-contact-heading">Social</h2>
        <div className="contact-list contact-list-secondary">
          {socialContacts.map((contact) => (
            <a className="contact" href={contact.href} key={contact.href} rel="noreferrer" target="_blank">
              <img alt="" height="1000" src={assetPath(`/contacts/${contact.image}`)} width="1000" />
              <span className="contact-copy"><strong>{contact.label}</strong><small>Social profile</small></span>
              <span aria-hidden="true" className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

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
        <h1>Let&apos;s Connect</h1>
        <p className="contact-intro">I&apos;m open to software engineering opportunities focused on AI systems, automation, and full-stack development.</p>
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

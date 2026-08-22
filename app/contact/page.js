const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const contacts = [
  { image: "1.png", label: "Sean Alberto", href: "https://web.facebook.com/seanrad.alberto.7/" },
  { image: "2.png", label: "ImSeanSean", href: "https://github.com/ImSeanSean" },
  { image: "3.png", label: "Sean Alberto", href: "https://www.linkedin.com/in/seanalberto/" },
  { image: "4.png", label: "seanradalberto@gmail.com", href: "mailto:seanradalberto@gmail.com" },
  { image: "5.png", label: "09662903605", href: "tel:09662903605" },
];

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="section-heading contact-heading">
        <p className="eyebrow">Get in touch</p>
        <h1>Let&apos;s Connect</h1>
        <p className="contact-intro">Choose the channel that works best for you.</p>
      </div>
      <div className="contact-list">
        {contacts.map((contact) => (
          <a className="contact" href={contact.href} key={contact.label} rel="noreferrer" target={contact.href.startsWith("http") ? "_blank" : undefined}>
            <img alt="" height="1000" src={assetPath(`/contacts/${contact.image}`)} width="1000" />
            <span>{contact.label}</span>
            <span aria-hidden="true" className="contact-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

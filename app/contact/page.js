const contacts = [
  { image: "1.png", label: "Sean Alberto", href: "https://web.facebook.com/seanrad.alberto.7/" },
  { image: "2.png", label: "ImSeanSean", href: "https://github.com/ImSeanSean" },
  { image: "3.png", label: "Sean Rad P. Alberto", href: "https://www.linkedin.com/in/sean-rad-alberto/" },
  { image: "4.png", label: "202210012@gordoncollege.edu.ph", href: "mailto:202210012@gordoncollege.edu.ph" },
  { image: "5.png", label: "09662903605", href: "tel:09662903605" },
];

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contacts</h1>
      <p>You can reach out to me through</p>
      <div className="contact-list">
        {contacts.map((contact) => (
          <a className="contact" href={contact.href} key={contact.label} rel="noreferrer" target={contact.href.startsWith("http") ? "_blank" : undefined}>
            <img alt="" src={`/contacts/${contact.image}`} />
            <h4>{contact.label}</h4>
          </a>
        ))}
      </div>
    </section>
  );
}

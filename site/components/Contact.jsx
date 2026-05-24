/* ui_kits/epk/components/Contact.jsx — minimal contact form */

const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <Section id="contact" className="section-contact" label="07 Contact">
        <h2>Get in touch</h2>
        <p className="lead">
          Thanks — your note's in the queue. We'll reply within a few days from a personal inbox.
        </p>
        <Button variant="ghost" onClick={() => setSent(false)}>Send another</Button>
      </Section>
    );
  }

  return (
    <Section id="contact" className="section-contact" label="07 Contact">
      <h2>Get in touch</h2>
      <p className="section-intro">
        Streaming, scoring, jam bundles, custom commissions — say hi and we'll figure out the right fit.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" type="text" defaultValue="" placeholder="Alex" required />
        </div>
        <div>
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" type="email" defaultValue="" placeholder="hello@studio.example" required />
        </div>
        <div>
          <label htmlFor="cf-context">I'm a</label>
          <select id="cf-context" defaultValue="streamer">
            <option value="streamer">Streamer (Twitch / YouTube / Kick)</option>
            <option value="dev">Indie dev (Itch.io / Steam)</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-use">Use case</label>
          <input id="cf-use" type="text" placeholder="e.g. cozy farming sim soundtrack" />
        </div>
        <div className="col-2">
          <label htmlFor="cf-note">Note</label>
          <textarea id="cf-note" placeholder="A line or two about your project — what you're making, what mood you need." />
        </div>
        <div className="col-2" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Button variant="primary">Send it</Button>
          <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>
            We reply from a personal inbox. No automation, no mailing list.
          </span>
        </div>
      </form>
    </Section>
  );
};

window.Contact = Contact;

/* ui_kits/epk/components/Licensing.jsx */

const LICENSE = [
  { title: 'For streamers',
    body: 'Twitch, YouTube, Kick, Discord stages. Per-track clearance available on request. Pre-cleared "stream packs" coming once a first batch is approved by the artist.' },
  { title: 'For indie devs',
    body: 'In-game use (commercial or non-commercial) arranged per-project. Credit + link is the standard ask; specifics confirmed in conversation.' },
  { title: 'Custom commissions',
    body: 'Need a specific mood for a stream theme or a game scene? Custom tracks available at indie-friendly rates. Reach out below.' },
];

const Licensing = () => (
  <Section id="licensing" className="section-licensing" label="05 Licensing">
    <h2>Licensing</h2>
    <p className="section-intro">Terms are arranged per-track. Reach out and we'll set up clearance for your specific use case.</p>
    <div className="license-grid">
      {LICENSE.map((l) => (
        <div className="license-card" key={l.title}>
          <h3>{l.title}</h3>
          <p>{l.body}</p>
        </div>
      ))}
    </div>
    <p className="license-credit">
      <strong>Suggested credit line (once tracks are cleared):</strong>&nbsp;
      <code>Music by Jahna · [epk-url]</code>
    </p>
  </Section>
);

window.Licensing = Licensing;

/* ui_kits/epk/components/Tracks.jsx — three real Spotify embeds */

const FEATURED = [
  { id: '0DmC2jhIfjNJ117kPGmhBF', label: 'Just another DnB Part 2.' },
  { id: '3GM7KYuMlY94b93mpdmUvQ', label: 'Selected Works for Imaginary Video Games' },
  { id: '1eAj6up63imTZAFp4NUiy4', label: 'Just another DnB.' },
];

const Tracks = () => (
  <Section id="tracks" className="section-tracks" label="03 Tracks">
    <h2>Featured tracks</h2>
    <p className="section-intro">Press play.</p>
    <div className="track-grid">
      {FEATURED.map((t) => (
        <div className="track-card" key={t.id}>
          <iframe
            title={t.label}
            style={{ borderRadius: 12, display: 'block' }}
            src={`https://open.spotify.com/embed/album/${t.id}?utm_source=generator`}
            width="100%" height="152" frameBorder="0" allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
        </div>
      ))}
    </div>
  </Section>
);

window.Tracks = Tracks;

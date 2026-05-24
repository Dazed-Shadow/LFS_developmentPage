/* ui_kits/epk/components/Gallery.jsx
   Six-tile cover gallery — three real reference renders + three placeholders to demonstrate the empty state. */

const COVERS = [
  { src: 'assets/covers/sanctuary-3d-lowpoly.png', title: 'Selected Works', mood: '3D · low-poly' },
  { src: 'assets/covers/sanctuary-2d-pixel.png',   title: 'Just another DnB Pt.2', mood: '2D · pixel art' },
  { src: 'assets/covers/sanctuary-real.png',       title: 'Painting Hue Study No. 1', mood: 'Cinematic' },
];

const Gallery = () => (
  <Section id="gallery" className="section-gallery" label="04 Covers">
    <h2>Covers</h2>
    <p className="section-intro">Per-track artwork. Cozy is the umbrella; each cover follows the song's actual mood.</p>
    <div className="cover-grid">
      {COVERS.map((c) => (
        <div className="cover-card" key={c.title}>
          <img src={c.src} alt={c.title} />
          <div className="cover-meta">
            <span>{c.title}</span>
            <span className="mono">{c.mood}</span>
          </div>
        </div>
      ))}
      <PlaceholderCard label="Cover slot 4" />
      <PlaceholderCard label="Cover slot 5" />
      <PlaceholderCard label="Cover slot 6" />
    </div>
  </Section>
);

window.Gallery = Gallery;

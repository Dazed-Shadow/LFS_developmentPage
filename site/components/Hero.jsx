/* ui_kits/epk/components/Hero.jsx */

const Hero = () => (
  <header className="hero" id="top" data-screen-label="01 Hero">
    <div className="hero-inner">
      <figure className="hero-figure">
        <img src="assets/covers/sanctuary-hero.png"
             alt="A pixel-art desk at dusk with a warm lamp, houseplant, steaming mug, mechanical keyboard, open journal, and sleeping calico cat — looking out a wide window onto mossy mountains and an overgrown forgotten mech." />
        <figcaption className="hero-credit">cover · Lofi Sanctuary</figcaption>
      </figure>

      <div className="hero-text">
        <div>
          <Kicker>Original lo-fi · cozy gaming</Kicker>
          <h1 className="artist-name">Jahna</h1>
          <p className="tagline">Lo-fi for cozy games you haven't played yet.</p>
        </div>
        <div className="hero-actions">
          <Button variant="primary"
                  href="https://open.spotify.com/artist/3AjmrMM0t7YekEDKnk5Tai"
                  target="_blank" rel="noopener">
            Listen on Spotify
          </Button>
          <Button variant="ghost" href="#tracks"
                  onClick={(e) => { e.preventDefault();
                    const el = document.getElementById('tracks');
                    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' }); }}>
            Featured tracks
          </Button>
        </div>
      </div>
    </div>
  </header>
);

window.Hero = Hero;

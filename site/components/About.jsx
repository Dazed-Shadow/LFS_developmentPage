/* ui_kits/epk/components/About.jsx */

const About = () => (
  <Section id="about" className="section-about" label="02 About">
    <h2>About</h2>
    <ArtistQuote cite="— Jahna, on Spotify">
      Just a mad bunni swimmin' overdrive in the vacuum. Most of this stuff is made in the house.
    </ArtistQuote>
    <p className="lead">
      Lo-fi loops for cozy games that don't exist yet — the kind of soundtrack you'd hear behind a quiet
      farming RPG, or while a stranger in a small town tells you their story. Made for streamers and indie
      devs who want music that takes a step back instead of pushing forward.
    </p>
  </Section>
);

window.About = About;

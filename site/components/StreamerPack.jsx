/* ui_kits/epk/components/StreamerPack.jsx
   Stream Pack — Under Construction.
   Per JR (2026-05-22): the "free pack" framing waits until the artist confirms her work
   is freely usable. Section stays in the page (nav still scrolls to it) so the structure
   is preserved; the surface itself communicates the holding pattern. */

const StreamerPack = () => (
  <Section id="pack" className="section-pack" label="06 Stream pack">
    <div className="under-construction">
      <span className="under-construction-tape">Under construction</span>

      <Kicker>Stream pack · in planning</Kicker>
      <h3>A pack for streamers is on the way.</h3>
      <p>
        We're holding off on the details — including whether tracks will be offered free, by donation, or
        per-clearance — until the artist signs off on how her work is licensed. The shape of the pack
        (track count, overlays, clearance scope) follows from that decision.
      </p>
      <p>
        If you're a streamer who'd want this when it's ready, the contact form at the bottom of the page
        is the right place to say hi. We'll reach out personally once the pack is live.
      </p>

      <div className="quiet-meta">Decisions pending · check back later</div>
    </div>
  </Section>
);

window.StreamerPack = StreamerPack;

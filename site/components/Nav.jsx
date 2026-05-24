/* ui_kits/epk/components/Nav.jsx
   Sticky top nav. Smooth-scrolls to in-page sections and tracks the active one. */

const NAV_LINKS = [
  { id: 'about',     label: 'About' },
  { id: 'tracks',    label: 'Tracks' },
  { id: 'gallery',   label: 'Covers' },
  { id: 'licensing', label: 'Licensing' },
  { id: 'pack',      label: 'Stream pack' },
  { id: 'contact',   label: 'Contact' },
];

const Nav = () => {
  const [active, setActive] = React.useState('about');

  React.useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      let cur = NAV_LINKS[0].id;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={(e) => go(e, 'top')}>
          LO<span className="nav-brand-em">FI</span>&nbsp;Sanctuary
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}
               onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

window.Nav = Nav;

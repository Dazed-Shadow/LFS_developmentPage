/* ui_kits/epk/components/primitives.jsx
   Shared building blocks — Button, Kicker, ArtistQuote, Section, Container, PlaceholderCard */

const Container = ({ children, className = '' }) => (
  <div className={`container ${className}`}>{children}</div>
);

const Section = ({ id, className = '', children, label }) => (
  <section id={id} className={`section ${className}`} data-screen-label={label}>
    <Container>{children}</Container>
  </section>
);

const Kicker = ({ children }) => <div className="kicker">{children}</div>;

const Button = ({ variant = 'primary', children, onClick, href, disabled, target, rel, ariaLabel }) => {
  const cls = `btn btn-${variant}`;
  if (href) {
    return (
      <a className={cls} href={href} target={target} rel={rel} aria-label={ariaLabel}
         aria-disabled={disabled || undefined}
         onClick={(e) => { if (disabled) e.preventDefault(); else onClick && onClick(e); }}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

const ArtistQuote = ({ children, cite }) => (
  <blockquote className="artist-quote">
    {children}
    {cite && <cite>{cite}</cite>}
  </blockquote>
);

const PlaceholderCard = ({ label }) => (
  <div className="cover-card placeholder-card">
    <span>{label}</span>
  </div>
);

Object.assign(window, { Container, Section, Kicker, Button, ArtistQuote, PlaceholderCard });

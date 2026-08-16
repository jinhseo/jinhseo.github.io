/* GroundFormer project page — top sections: Nav, Hero, Motivation */
const DS = window.MMDiffDesignSystem_07b833;
const { Button, Badge, Kicker, StatBlock, SpectrumBar, Card } = DS;
const I = window.Icons;
const D = window.GFD;

const iconFor = { paper: I.paper, arxiv: I.arxiv, github: I.github, data: I.data, hf: I.hf };

function Wordmark({ size = '1.35rem', onDark }) {
  return (
    <span style={{ fontFamily: 'var(--font-serif)', fontSize: size, fontWeight: 500, letterSpacing: '-0.02em', color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>
      <span style={{ fontStyle: 'italic', color: onDark ? 'var(--accent)' : 'var(--accent-ink)' }}>GroundFormer</span>
    </span>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(1rem, 4vw, 2.2rem)', height: '60px',
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    }}>
      <a href="#top" onClick={go('top')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <Wordmark />
        <SpectrumBar length="22px" thickness="3px" />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 2vw, 1.6rem)' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '1.4rem' }}>
          {['motivation', 'method', 'results', 'analysis', 'cite'].map((id) => (
            <a key={id} href={'#' + id} onClick={go(id)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-ink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >{id === 'cite' ? 'BibTeX' : id}</a>
          ))}
        </div>
        <Button variant="solid" size="sm" href={D.meta.released ? D.meta.repo : undefined} disabled={!D.meta.released}
          title={D.meta.released ? undefined : 'Available after release'}
          target={D.meta.released ? '_blank' : undefined} rel={D.meta.released ? 'noopener noreferrer' : undefined}
          icon={React.createElement(I.github)}>Code</Button>
      </nav>
    </header>
  );
}

/* A name that becomes a link when `url` is set, and stays plain text when it
   is empty or missing. Underline appears on hover only. */
function NameLink({ person, size }) {
  const [hover, setHover] = React.useState(false);
  const label = (
    <React.Fragment>
      {person.name}
      {person.sup ? <sup style={{ color: 'var(--text-muted)' }}>{person.sup}</sup> : null}
      {person.note ? <sup style={{ color: 'var(--text-faint)' }}>{person.note}</sup> : null}
    </React.Fragment>
  );
  if (!person.url) {
    return <span style={{ color: 'var(--text-strong)', fontSize: size }}>{label}</span>;
  }
  return (
    <a href={person.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        color: hover ? 'var(--accent-ink)' : 'var(--text-strong)', fontSize: size,
        textDecoration: hover ? 'underline' : 'none',
        textDecorationColor: 'var(--accent)', textUnderlineOffset: '4px',
        transition: 'color var(--dur) var(--ease-out)',
      }}>{label}</a>
  );
}

function Authors() {
  if (D.meta.anonymous) {
    return (
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
        Anonymous ECCV 2026 submission · Paper ID #143
      </div>
    );
  }
  const affils = D.meta.affiliations || [{ sup: '1', name: D.meta.affiliation }];
  return (
    <React.Fragment>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-body)' }}>
        {D.meta.authors.map((a, i) => (
          <span key={a.name}>
            <NameLink person={a} />
            {i < D.meta.authors.length - 1 ? <span style={{ color: 'var(--text-faint)', margin: '0 0.5rem' }}>·</span> : null}
          </span>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
        {affils.map((f, i) => (
          <span key={f.sup || i}>
            <sup>{f.sup}</sup>
            {f.url
              ? <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>{f.name}</a>
              : f.name}
            {i < affils.length - 1 ? <span style={{ color: 'var(--text-faint)', margin: '0 0.45rem' }}>·</span> : null}
          </span>
        ))}
      </div>
      {D.meta.authorNote ? (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>
          {D.meta.authorNote}
        </div>
      ) : null}
    </React.Fragment>
  );
}

function Hero() {
  const fig = D.figures.teaser;
  return (
    <section id="top" style={{
      position: 'relative', textAlign: 'center',
      padding: 'clamp(6rem, 12vw, 9rem) var(--section-pad-x) clamp(2.5rem, 5vw, 4rem)',
      background: 'radial-gradient(60rem 30rem at 50% -10rem, rgba(27,127,197,0.10), transparent 60%), var(--paper-warm)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
          <Badge variant="accent" dot style={{ fontSize: '0.95rem', padding: '0.42rem 1rem', letterSpacing: '0.1em' }}>{D.meta.venue}</Badge>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 500,
          fontSize: 'var(--text-display)', lineHeight: 1.05, letterSpacing: '-0.022em',
          color: 'var(--text-strong)', margin: '0 auto 1rem', maxWidth: '18ch',
        }}>
          <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>GroundFormer</span>
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 2vw, 1.18rem)', lineHeight: 1.5,
          color: 'var(--text-muted)', margin: '0 auto 1.4rem', maxWidth: '46rem',
        }}>{D.meta.title}</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.6rem' }}>
          <SpectrumBar length="120px" thickness="4px" />
        </div>
        <Authors />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {D.meta.links.map((l) => {
              const dis = !!l.soon || (l.gated && !D.meta.released);
              return (
                <Button key={l.label} href={dis ? undefined : l.href} variant={l.variant} disabled={dis}
                  title={dis ? 'Available after release' : undefined}
                  target={dis ? undefined : '_blank'} rel={dis ? undefined : 'noopener noreferrer'}
                  icon={l.kind === 'arxiv' ? null : React.createElement(iconFor[l.kind])}>{l.label}</Button>
              );
            })}
          </div>
          {!D.meta.released && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
              Links available after review
            </div>
          )}
        </div>
      </div>

      <figure style={{ margin: 'clamp(2.5rem, 5vw, 4rem) auto 0', maxWidth: 'var(--measure-wide)' }}>
        <Card variant="figure">
          <img src={fig.src} alt={fig.alt} style={{ width: '100%', display: 'block' }} />
        </Card>
        <figcaption style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6,
          color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '52rem',
          marginLeft: 'auto', marginRight: 'auto', textAlign: 'center',
        }}>{fig.caption}</figcaption>
      </figure>
    </section>
  );
}

function Motivation() {
  const fig = D.figures.overview;
  return (
    <section id="motivation" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--paper)' }}>
      {/* Row 1: kicker | prose.  Row 2: the figure, spanning both columns.
          Row 3: the stat strip, kept in the prose column so the numbers stay
          aligned with the text above them. */}
      <div style={{
        maxWidth: 'var(--measure-wide)', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 2.1fr)',
        columnGap: 'clamp(1.5rem, 4vw, 3.5rem)', rowGap: 0,
      }} className="abstract-grid">
        <div>
          <Kicker index="01">Motivation</Kicker>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-serif)', fontWeight: 500,
            fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)', lineHeight: 1.22, letterSpacing: '-0.015em',
            color: 'var(--text-strong)', margin: '0 0 1.2rem', textWrap: 'pretty',
          }}>{D.motivation.lead}</p>
          <p className="mmd-prose" style={{ fontSize: 'var(--text-lead)', margin: 0, color: 'var(--text-muted)' }}>{D.motivation.body}</p>
          <div style={{ height: '1px', background: 'var(--line)', margin: '2.4rem 0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.6rem' }} className="stat-grid">
            {D.stats.map((s, i) => <StatBlock key={s.label + i} value={s.value} label={s.label} sub={s.sub} accent={s.accent} />)}
          </div>
        </div>

        <figure style={{ gridColumn: '1 / -1', margin: 'clamp(2.5rem, 5vw, 3.5rem) 0 0' }}>
          <Card variant="paper" style={{ padding: 'clamp(1rem, 3vw, 2rem)' }}>
            <img src={fig.src} alt={fig.alt} style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-sm)' }} />
          </Card>
          <figcaption style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.6,
            color: 'var(--text-faint)', marginTop: '0.9rem',
            maxWidth: '54rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center',
          }}>{fig.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

Object.assign(window, { NavBar, Hero, Motivation, Wordmark });

/* GroundFormer project page — bottom sections: Method, Results, Analysis, Citation, Footer */
const DSb = window.MMDiffDesignSystem_07b833;
const { Button: Btn, Badge: Bdg, Kicker: Kick, SpectrumBar: Spec, Card: Crd, CodeBlock: Code, Tag: Chip } = DSb;
const Db = window.GFD;
const Ib = window.Icons;

function SectionTitle({ index, kicker, title, sub, onDark }) {
  return (
    <div style={{ marginBottom: '2.4rem', maxWidth: '46rem' }}>
      <Kick index={index} onDark={onDark}>{kicker}</Kick>
      <h2 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 500,
        fontSize: 'var(--text-h1)', letterSpacing: '-0.02em', lineHeight: 1.1,
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)', margin: '0.9rem 0 1rem',
      }}>{title}</h2>
      <Spec length="52px" />
      {sub ? <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.6,
        color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', marginTop: '1.1rem',
      }}>{sub}</p> : null}
    </div>
  );
}

function Figure({ fig, pad = 'clamp(1rem, 3vw, 2rem)' }) {
  return (
    <figure style={{ margin: '0 0 2.4rem' }}>
      <Crd variant="paper" style={{ padding: pad }}>
        <img src={fig.src} alt={fig.alt} style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-sm)' }} />
      </Crd>
      <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-faint)', marginTop: '0.8rem' }}>
        {fig.caption}
      </figcaption>
    </figure>
  );
}

function Method() {
  return (
    <section id="method" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--paper-soft)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto' }}>
        <SectionTitle index="02" kicker="Method" title="Let the question shape the video before grounding"
          sub="Prior designs encode the two modalities independently and inject the question as a single token among 32 frames. GroundFormer routes question intent into the visual stream first, then reads temporal evidence out of answer supervision." />

        <Figure fig={Db.figures.details} />

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.2rem', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: '0.4rem' }}>Components</span>
          {Db.components.map((c) => <Chip key={c.label} color={c.color}>{c.label}</Chip>)}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '1.2rem' }}>
          {Db.steps.map((s) => (
            <Crd key={s.n} variant="paper" hover pad="1.5rem">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.7rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-ink)' }}>{s.n}</span>
                <Spec length="20px" thickness="3px" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', fontWeight: 600, lineHeight: 1.2, color: 'var(--text-strong)', margin: '0 0 0.75rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{s.body}</p>
            </Crd>
          ))}
        </div>

        <div style={{ marginTop: '2.4rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          {Db.setup.map((r, i) => (
            <div key={r.k} style={{
              display: 'flex', gap: '1rem', padding: '0.7rem 1rem',
              borderTop: i === 0 ? 'none' : '1px solid var(--line)', background: 'var(--paper)',
            }}>
              <span style={{ flex: '0 0 12rem', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{r.k}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-body)' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function fmtCell(raw) {
  if (typeof raw !== 'string') return { v: raw };
  if (raw[0] === '*') return { v: raw.slice(1), best: true };
  if (raw[0] === '~') return { v: raw.slice(1), second: true };
  return { v: raw };
}

function MetaMark({ v }) {
  if (v === '✓') return <span style={{ color: 'var(--seg-green)' }}>✓</span>;
  if (v === '✗') return <span style={{ color: 'var(--text-faint)' }}>✗</span>;
  return <span>{v}</span>;
}

function ResultsTables() {
  const tabs = Db.tableTabs;
  const [active, setActive] = React.useState(tabs[0]);
  const t = Db.tables[active];
  const leadN = t.lead.length;
  return (
    <div style={{ marginTop: '3.5rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        Quantitative results
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 1.2rem' }}>
        Acc@GQA counts a prediction correct only when the answer is correct and the grounded segment reaches IoP ≥ 0.5, so it measures answering and evidence together. GroundFormer leads it on both benchmarks while training on candidate-level supervision alone.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
        {tabs.map((tb) => <Chip key={tb} active={active === tb} onClick={() => setActive(tb)}>{tb}</Chip>)}
      </div>
      <div style={{ overflowX: 'auto', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', minWidth: '46rem' }}>
          <thead>
            {t.groups ? (
              <tr>
                <th colSpan={leadN} style={{ borderBottom: '1px solid var(--line)' }}></th>
                {t.groups.map((g, i) => (
                  <th key={i} colSpan={g.span} style={{
                    textAlign: 'center', padding: '0.6rem 0.8rem 0.4rem', borderBottom: '1px solid var(--line)',
                    borderLeft: '1px solid var(--line)', color: 'var(--accent-ink)', fontFamily: 'var(--font-sans)',
                    fontWeight: 600, fontSize: '0.64rem', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{g.label}</th>
                ))}
              </tr>
            ) : null}
            <tr>
              {t.lead.map((c, i) => (
                <th key={'l' + i} style={{
                  textAlign: i === 0 ? 'left' : 'center', padding: '0.55rem 0.8rem', borderBottom: '2px solid var(--line-strong)',
                  color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.68rem',
                  letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>{c}</th>
              ))}
              {t.cols.map((c, i) => (
                <th key={'c' + i} style={{
                  textAlign: 'center', padding: '0.55rem 0.8rem', borderBottom: '2px solid var(--line-strong)',
                  borderLeft: i === 0 ? '1px solid var(--line)' : 'none', color: 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.68rem',
                  letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, ri) => (
              <tr key={ri} style={{ background: r.ours ? 'rgba(27,127,197,0.08)' : 'transparent' }}>
                {r.lead.map((cell, ci) => (
                  <td key={'l' + ci} style={{
                    padding: '0.5rem 0.8rem', borderTop: r.sep ? '2px solid var(--line-strong)' : '1px solid var(--line)',
                    whiteSpace: 'nowrap', textAlign: ci === 0 ? 'left' : 'center',
                    fontFamily: ci === 0 ? 'var(--font-sans)' : 'var(--font-mono)',
                    color: r.ours ? 'var(--accent-ink)' : (r.muted ? 'var(--text-faint)' : 'var(--text-body)'),
                    fontWeight: r.ours && ci === 0 ? 600 : 400, fontStyle: r.muted && ci === 0 ? 'italic' : 'normal',
                    borderLeft: ci === 0 && r.ours ? '2px solid var(--accent)' : (ci === 0 ? '2px solid transparent' : 'none'),
                  }}>{ci === 0 ? cell : <MetaMark v={cell} />}</td>
                ))}
                {r.cells.map((raw, ci) => {
                  const c = fmtCell(raw);
                  return (
                    <td key={'c' + ci} style={{
                      padding: '0.5rem 0.8rem', textAlign: 'center',
                      borderTop: r.sep ? '2px solid var(--line-strong)' : '1px solid var(--line)',
                      borderLeft: ci === 0 ? '1px solid var(--line)' : 'none',
                      color: r.muted ? 'var(--text-faint)' : (c.best ? 'var(--text-strong)' : 'var(--text-body)'),
                      fontWeight: c.best ? 700 : 400, textDecoration: c.second ? 'underline' : 'none',
                      textDecorationColor: c.second ? 'var(--accent)' : undefined, textUnderlineOffset: '3px',
                    }}>{c.v}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text-faint)', marginTop: '0.9rem' }}>
        {t.caption} <strong style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Bold</strong> = best, <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent)', textUnderlineOffset: '2px' }}>underline</span> = second best.
      </p>
    </div>
  );
}

function Results() {
  return (
    <section id="results" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto' }}>
        <SectionTitle index="03" kicker="Results" title="Grouped when the questions agree, split when they do not"
          sub="Questions about the same event land on the same interval; questions about a different event move to that event. On NExT-GQA and STAR, this evidence quality comes with better answering than prior grounded VideoQA methods." />

        <Figure fig={Db.figures.qualitative} />

        <ResultsTables />
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="analysis" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--paper-soft)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto' }}>
        <SectionTitle index="04" kicker="Analysis" title="What the numbers say"
          sub="Two metrics quantify question-invariance: pairwise IoU (PIoU) between predictions for different questions in one video, and the correlation between the ground-truth and predicted overlap structure." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: '1.2rem' }}>
          {Db.useCases.map((u) => (
            <Crd key={u.tag} variant="paper" hover pad="1.6rem">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-ink)' }}>{u.tag}</span>
                <Spec length="20px" thickness="3px" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', fontWeight: 600, lineHeight: 1.2, color: 'var(--text-strong)', margin: '0 0 0.6rem' }}>{u.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{u.body}</p>
            </Crd>
          ))}
        </div>
      </div>
    </section>
  );
}

function Citation() {
  return (
    <section id="cite" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--surface-lab)' }}>
      <div style={{ maxWidth: 'var(--measure)', margin: '0 auto' }}>
        <SectionTitle index="05" kicker="Citation" title="BibTeX" onDark />
        <Code title="BibTeX" code={Db.bibtex} />
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Btn variant="accent" href={Db.meta.released ? Db.meta.arxiv : undefined} disabled={!Db.meta.released}
            target={Db.meta.released ? '_blank' : undefined} rel={Db.meta.released ? 'noopener noreferrer' : undefined}
            icon={React.createElement(Ib.arrow)}>Read on arXiv</Btn>
          <Btn variant="outline" href={Db.meta.released ? Db.meta.repo : undefined} disabled={!Db.meta.released}
            title={Db.meta.released ? undefined : 'Available after release'}
            target={Db.meta.released ? '_blank' : undefined} rel={Db.meta.released ? 'noopener noreferrer' : undefined}
            icon={React.createElement(Ib.github)} style={{ background: 'var(--fill-dark)', color: 'var(--text-on-dark)', borderColor: 'var(--line-dark)' }}>View code</Btn>
          {!Db.meta.released && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Available after release</span>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '2.4rem var(--section-pad-x)', background: 'var(--ink-950)', borderTop: '1px solid var(--line-dark)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Spec length="80px" thickness="3px" /></div>
      <div style={{ marginBottom: '0.5rem' }}>{React.createElement(window.Wordmark, { size: '1.1rem', onDark: true })}</div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-on-dark-muted)', margin: 0 }}>
        {Db.meta.affiliation} · Page template from the MMDiff project page, MIT License
      </p>
    </footer>
  );
}

Object.assign(window, { Method, Results, UseCases, Citation, Footer });

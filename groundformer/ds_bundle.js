/* @ds-bundle: {"format":3,"namespace":"MMDiffDesignSystem_07b833","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"SpectrumBar","sourcePath":"components/core/SpectrumBar.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fe0f10f0da79","components/core/Button.jsx":"94e4cc64eeff","components/core/Card.jsx":"485ea2a87a2a","components/core/CodeBlock.jsx":"8ccc6197ef00","components/core/Kicker.jsx":"9ac0acb79cf7","components/core/SpectrumBar.jsx":"9de1fac8f5b4","components/core/StatBlock.jsx":"896dd63bbed5","components/core/Tag.jsx":"8b987893365a","ui_kits/project_page/app.jsx":"f6c3c33c38f8","ui_kits/project_page/data.js":"df6cb57398c5","ui_kits/project_page/icons.jsx":"3d84778e9cb3","ui_kits/project_page/sections-bottom.jsx":"e444ce003b74","ui_kits/project_page/sections-top.jsx":"fcb6c8069300"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MMDiffDesignSystem_07b833 = window.MMDiffDesignSystem_07b833 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / metadata badge. Neutral for venue + meta
 * ("ICLR 2026", "CVPR"); semantic `frozen`/`trained` mirror the
 * architecture figure's ❄ frozen backbone vs 🔥 trained head.
 */
function Badge({
  children,
  variant = 'neutral',
  // 'neutral' | 'frozen' | 'trained' | 'accent' | 'outline'
  dot = false,
  size = 'md',
  // 'sm' | 'md'
  style,
  ...rest
}) {
  const palettes = {
    neutral: {
      bg: 'var(--ink-50)',
      fg: 'var(--ink-700)',
      border: 'var(--line)',
      dot: 'var(--ink-400)'
    },
    frozen: {
      bg: 'var(--frozen-soft)',
      fg: '#1d5fc4',
      border: 'rgba(47,125,246,0.25)',
      dot: 'var(--frozen)'
    },
    trained: {
      bg: 'var(--trained-soft)',
      fg: '#c2531a',
      border: 'rgba(237,105,37,0.28)',
      dot: 'var(--trained)'
    },
    accent: {
      bg: 'rgba(27,127,197,0.10)',
      fg: 'var(--accent-ink)',
      border: 'rgba(27,127,197,0.24)',
      dot: 'var(--accent)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--ink-600)',
      border: 'var(--line-strong)',
      dot: 'var(--ink-400)'
    }
  };
  const p = palettes[variant] || palettes.neutral;
  const s = size === 'sm' ? {
    padding: '0.18rem 0.5rem',
    font: '0.7rem'
  } : {
    padding: '0.28rem 0.66rem',
    font: '0.76rem'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.font,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      background: p.bg,
      color: p.fg,
      border: `1px solid ${p.border}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.5em',
      height: '0.5em',
      borderRadius: '50%',
      background: p.dot,
      flex: '0 0 auto'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button / link pill — the primary action element. On an academic
 * page these are mostly resource links (Paper, arXiv, Code, Data).
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
function Button({
  children,
  href,
  variant = 'solid',
  // 'solid' | 'outline' | 'ghost' | 'accent'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  icon = null,
  // leading node (SVG / glyph)
  pill = true,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.4rem 0.8rem',
      font: '0.85rem',
      gap: '0.4rem'
    },
    md: {
      padding: '0.62rem 1.15rem',
      font: '0.95rem',
      gap: '0.5rem'
    },
    lg: {
      padding: '0.8rem 1.5rem',
      font: '1.02rem',
      gap: '0.6rem'
    }
  }[size];
  const palettes = {
    solid: {
      bg: 'var(--ink-900)',
      fg: '#fff',
      border: 'var(--ink-900)'
    },
    accent: {
      bg: 'var(--accent)',
      fg: '#fff',
      border: 'var(--accent)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--ink-900)',
      border: 'var(--line-strong)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--ink-700)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.solid;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: sizes.font,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: sizes.padding,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    background: p.bg,
    color: p.fg,
    border: `1px solid ${p.border}`,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    boxShadow: variant === 'solid' || variant === 'accent' ? 'var(--shadow-xs)' : 'none',
    whiteSpace: 'nowrap',
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'solid') {
      e.currentTarget.style.background = 'var(--accent)';
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    } else if (variant === 'accent') {
      e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
    } else if (variant === 'outline') {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent-ink)';
    } else {
      e.currentTarget.style.background = 'var(--ink-50)';
    }
  };
  const hoverOut = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.background = p.bg;
    e.currentTarget.style.borderColor = p.border;
    e.currentTarget.style.color = p.fg;
    e.currentTarget.style.boxShadow = base.boxShadow;
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.05em',
      height: '1.05em',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon) : null, children);
  const Tag = href && !disabled ? 'a' : 'button';
  const tagProps = href && !disabled ? {
    href
  } : {
    type: 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `paper` (default) is the light editorial card;
 * `lab` is the dark near-black figure frame that makes the depth /
 * segmentation imagery glow. `figure` adds a hairline + small radius
 * tuned for result images.
 */
function Card({
  children,
  variant = 'paper',
  // 'paper' | 'lab' | 'figure' | 'inset'
  pad = 'var(--space-6)',
  hover = false,
  style,
  ...rest
}) {
  const variants = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-sm)'
    },
    inset: {
      background: 'var(--surface-inset)',
      color: 'var(--text-body)',
      border: '1px solid var(--line)',
      boxShadow: 'none'
    },
    lab: {
      background: 'var(--surface-lab)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--line-dark)',
      boxShadow: 'var(--shadow-md)'
    },
    figure: {
      background: 'var(--surface-lab)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-md)',
      padding: 0
    }
  };
  const v = variants[variant] || variants.paper;
  const onEnter = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = variant === 'lab' || variant === 'figure' ? 'var(--shadow-lg)' : 'var(--shadow-md)';
  };
  const onLeave = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = v.boxShadow;
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: variant === 'figure' ? 0 : pad,
      overflow: variant === 'figure' ? 'hidden' : undefined,
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CodeBlock — mono code on the dark lab surface, with an optional
 * title bar and copy button. Use for install snippets, the BibTeX
 * entry, and inference commands.
 */
function CodeBlock({
  code = '',
  title = null,
  // e.g. 'bash' or 'BibTeX'
  copyable = true,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const doCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {/* noop */}
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--ink-950)',
      border: '1px solid var(--line-dark)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), title || copyable ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.55rem 0.85rem',
      borderBottom: '1px solid var(--line-dark)',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, title || 'code'), copyable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: doCopy,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      color: copied ? 'var(--accent-amber)' : 'var(--text-on-dark-muted)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: '0.04em',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, copied ? 'copied' : 'copy') : null) : null, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '1rem 1.1rem',
      overflowX: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      lineHeight: 1.65,
      color: '#e6e8f2'
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'inherit',
      background: 'transparent'
    }
  }, code)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section eyebrow / kicker — a mono, letter-spaced label, optionally
 * numbered ("01 — METHOD"). Sets the editorial-academic rhythm above
 * section titles. The index sits in the brand magenta.
 */
function Kicker({
  children,
  index = null,
  // e.g. "01"
  color = 'var(--accent-ink)',
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      ...style
    }
  }, rest), index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontWeight: 'var(--fw-semibold)'
    }
  }, index) : null, index != null ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: '1.4rem',
      height: '1px',
      background: onDark ? 'var(--line-dark)' : 'var(--line-strong)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/SpectrumBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpectrumBar — the signature depth-colormap rule. The brand's most
 * recurring flourish: a thin gradient bar used as a divider, a title
 * underline, or a vertical rail. Defaults to a short horizontal accent.
 */
function SpectrumBar({
  orientation = 'horizontal',
  // 'horizontal' | 'vertical'
  length = '3rem',
  // main-axis size (width if horizontal)
  thickness = '4px',
  // cross-axis size
  radius = 'var(--radius-pill)',
  full = false,
  // stretch to 100% of the main axis
  style,
  ...rest
}) {
  const horizontal = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": true,
    style: {
      display: 'block',
      width: horizontal ? full ? '100%' : length : thickness,
      height: horizontal ? thickness : full ? '100%' : length,
      background: horizontal ? 'var(--gradient-spectrum)' : 'var(--gradient-spectrum-v)',
      borderRadius: radius,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SpectrumBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpectrumBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headline metric — a big mono number with a label and optional
 * delta / sublabel. Used for the result highlights ("+28.7% mIoU",
 * "12B params frozen", "36M trained"). `accent` tints the value with
 * a spectrum gradient.
 */
function StatBlock({
  value,
  label,
  sub = null,
  align = 'left',
  // 'left' | 'center'
  accent = false,
  // gradient-fill the value
  onDark = false,
  style,
  ...rest
}) {
  const valueStyle = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: 'clamp(2.1rem, 4vw, 3rem)',
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
  };
  if (accent) {
    valueStyle.background = 'var(--gradient-spectrum)';
    valueStyle.WebkitBackgroundClip = 'text';
    valueStyle.backgroundClip = 'text';
    valueStyle.WebkitTextFillColor = 'transparent';
    valueStyle.color = 'transparent';
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: valueStyle
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--ls-snug)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, label), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.5,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '22ch'
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a compact chip for concept tokens ("object", "background",
 * "near", "far", "salient", "contour") and dataset categories. Can be
 * static, or interactive (a results filter) via `active` + `onClick`.
 * `color` adds a leading swatch from the segmentation palette.
 */
function Tag({
  children,
  color = null,
  // e.g. 'var(--seg-blue)'
  active = false,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const clickable = interactive || typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      letterSpacing: '0.01em',
      padding: '0.32rem 0.7rem',
      borderRadius: 'var(--radius-sm)',
      background: active ? 'var(--ink-900)' : 'var(--paper)',
      color: active ? '#fff' : 'var(--ink-700)',
      border: `1px solid ${active ? 'var(--ink-900)' : 'var(--line-strong)'}`,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out)',
      userSelect: 'none',
      ...style
    },
    onMouseEnter: e => {
      if (clickable && !active) e.currentTarget.style.borderColor = 'var(--ink-400)';
    },
    onMouseLeave: e => {
      if (clickable && !active) e.currentTarget.style.borderColor = 'var(--line-strong)';
    }
  }, rest), color ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.6em',
      height: '0.6em',
      borderRadius: '2px',
      background: color,
      flex: '0 0 auto'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project_page/app.jsx
try { (() => {
/* MMDiff project page — app entry */
function App() {
  const {
    NavBar,
    Hero,
    Abstract,
    Method,
    Results,
    Citation,
    Footer
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Abstract, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Citation, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project_page/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project_page/data.js
try { (() => {
// MMDiff project page — content data (plain JS, attaches to window)
window.MMD = {
  meta: {
    title: 'Extending Diffusion Transformers for Multi-Modal Generation',
    short: 'MMDiff',
    venue: 'Preprint · 2026',
    affiliation: 'Visual Geometry Group, University of Oxford',
    authors: [{
      name: 'Yagmur Akarken',
      sup: '1'
    }, {
      name: 'Orest Kupyn',
      sup: '1'
    }, {
      name: 'Christian Rupprecht',
      sup: '1'
    }],
    links: [{
      label: 'Paper',
      kind: 'paper',
      href: '#',
      variant: 'solid'
    }, {
      label: 'arXiv',
      kind: 'arxiv',
      href: '#',
      variant: 'solid'
    }, {
      label: 'Code',
      kind: 'github',
      href: '#',
      variant: 'outline'
    }, {
      label: 'Data',
      kind: 'data',
      href: '#',
      variant: 'outline'
    }]
  },
  abstract: 'Diffusion transformers have demonstrated remarkable generative capabilities, yet the rich perceptual representations computed across their denoising trajectory are discarded once the content is rendered. We present MMDiff, a framework that transforms a frozen diffusion transformer into a multi-modal generative system that jointly produces images alongside any combination of dense perceptual modalities using lightweight decoder heads. Our central finding is that perceptual information is temporally distributed along the denoising trajectory, and that multi-timestep feature fusion with spatially varying aggregation weights is essential — improving semantic segmentation by up to 28.7% mIoU over single-timestep extraction. We further adopt concept-driven attention extraction for interpretable spatial guidance, and show that frozen diffusion features are competitive with and complementary to state-of-the-art encoders such as DINOv3.',
  stats: [{
    value: '+28.7%',
    label: 'mIoU',
    sub: 'over single-timestep extraction',
    accent: true
  }, {
    value: '12B',
    label: 'Params frozen',
    sub: 'FLUX.1-dev backbone, never updated'
  }, {
    value: '36M',
    label: 'Trainable',
    sub: 'lightweight decoder heads only'
  }, {
    value: '3',
    label: 'Modalities',
    sub: 'segmentation · saliency · depth'
  }],
  steps: [{
    n: '01',
    title: 'Native-resolution input',
    body: 'Images resize to the nearest FLUX-compatible resolution with no padding, preserving aspect and fine detail.'
  }, {
    n: '02',
    title: 'Multi-timestep feature fusion',
    body: 'A learned token-aggregation module reads FLUX features at timesteps {0.78, 0.52, 0.26, 0.001} and combines them with spatially varying weights — the core of the method.'
  }, {
    n: '03',
    title: 'Complementary DINOv3 features',
    body: 'A frozen DINOv3 ViT optionally contributes self-supervised features, fused alongside the diffusion representations.'
  }, {
    n: '04',
    title: 'Concept-driven attention',
    body: 'The frozen DiT yields interpretable per-concept spatial maps — object, background, near, far, salient, contour.'
  }, {
    n: '05',
    title: 'Per-task decoder',
    body: 'A lightweight DPT / DeepLab decoder is trained per task; both backbones stay frozen throughout.'
  }],
  concepts: [{
    label: 'object',
    color: 'var(--seg-blue)'
  }, {
    label: 'background',
    color: 'var(--seg-amber)'
  }, {
    label: 'near',
    color: 'var(--seg-violet)'
  }, {
    label: 'far',
    color: 'var(--seg-red)'
  }, {
    label: 'salient',
    color: 'var(--seg-teal)'
  }, {
    label: 'contour',
    color: 'var(--seg-green)'
  }],
  tasks: ['Segmentation', 'Saliency', 'Depth'],
  gallery: {
    Segmentation: [{
      rgb: '../../assets/results/pascal1_rgb.jpg',
      pred: '../../assets/results/pascal1_ours.png',
      caption: 'PASCAL VOC · bus'
    }, {
      rgb: '../../assets/results/pascal3_rgb.jpg',
      pred: '../../assets/results/pascal3_ours.png',
      caption: 'PASCAL VOC · sheep'
    }],
    Saliency: [{
      rgb: '../../assets/results/duts1_rgb.jpg',
      pred: '../../assets/results/duts1_ours.png',
      caption: 'DUTS · figures'
    }, {
      rgb: '../../assets/results/duts3_rgb.jpg',
      pred: '../../assets/results/duts3_ours.png',
      caption: 'DUTS · bird'
    }],
    Depth: [{
      rgb: '../../assets/results/nyu1_rgb.png',
      pred: '../../assets/results/nyu1_ours.png',
      caption: 'NYU Depth v2 · bedroom'
    }, {
      rgb: '../../assets/results/nyu3_rgb.png',
      pred: '../../assets/results/nyu3_ours.png',
      caption: 'NYU Depth v2 · interior'
    }]
  },
  // Feature-quality table (subset of the paper's main results)
  table: {
    cols: ['Method', 'Frozen', 'mIoU ↑', 'Sₘ ↑', 'MAE ↓', 'AbsRel ↓'],
    rows: [{
      m: 'DatasetDM',
      frozen: true,
      vals: ['41.19', '0.845', '0.077', '0.1536'],
      ours: false
    }, {
      m: 'Diffusion Hyperfeatures',
      frozen: true,
      vals: ['67.57', '0.892', '0.021', '0.1348'],
      ours: false
    }, {
      m: 'VPD',
      frozen: false,
      vals: ['82.36', '0.912', '0.024', '0.1244'],
      ours: false
    }, {
      m: 'DINOv3',
      frozen: false,
      vals: ['83.09', '0.920', '0.021', '0.1288'],
      ours: false
    }, {
      m: 'MMDiff (Ours)',
      frozen: true,
      vals: ['78.90', '0.918', '0.020', '0.1175'],
      ours: true
    }, {
      m: 'MMDiff + DINOv3',
      frozen: true,
      vals: ['84.95', '0.934', '0.018', '0.1164'],
      ours: true
    }]
  },
  bibtex: `@inproceedings{akarken2026mmdiff,
  title   = {MMDiff: Extending Diffusion Transformers
             for Multi-Modal Generation},
  author  = {Akarken, Yagmur and Kupyn, Orest
             and Rupprecht, Christian},
  year    = {2026}
}`
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project_page/data.js", error: String((e && e.message) || e) }); }

// ui_kits/project_page/icons.jsx
try { (() => {
/* MMDiff project page — minimal inline icon set (stroke-based, 1.6px).
   Replaces the Font Awesome / academicons of the original template with
   a small, self-contained set so the page works offline. */
(function () {
  const S = ({
    children,
    fill
  }) => React.createElement('svg', {
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    fill: fill ? 'currentColor' : 'none',
    stroke: fill ? 'none' : 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, children);
  const P = (d, extra) => React.createElement('path', Object.assign({
    d
  }, extra || {}));
  window.Icons = {
    paper: () => React.createElement(S, null, P('M6 2h8l4 4v16H6z'), P('M14 2v4h4'), P('M9 12h6'), P('M9 16h6')),
    arxiv: () => React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: '0.92em',
        letterSpacing: '-0.02em'
      }
    }, 'arX'),
    github: () => React.createElement(S, {
      fill: true
    }, P('M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49v-1.7c-2.79.62-3.38-1.22-3.38-1.22-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z')),
    data: () => React.createElement(S, null, P('M12 3c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3z'), P('M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6'), P('M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6')),
    arrow: () => React.createElement(S, null, P('M5 12h14'), P('M13 6l6 6-6 6'))
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project_page/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project_page/sections-bottom.jsx
try { (() => {
/* MMDiff project page — bottom sections: Method, Results, Citation, Footer */
const DSb = window.MMDiffDesignSystem_07b833;
const {
  Button: Btn,
  Badge: Bdg,
  Kicker: Kick,
  SpectrumBar: Spec,
  Card: Crd,
  CodeBlock: Code,
  Tag: Chip
} = DSb;
const Db = window.MMD;
const Ib = window.Icons;
function SectionTitle({
  index,
  kicker,
  title,
  sub,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2.4rem',
      maxWidth: '46rem'
    }
  }, /*#__PURE__*/React.createElement(Kick, {
    index: index,
    onDark: onDark
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      margin: '0.9rem 0 1rem'
    }
  }, title), /*#__PURE__*/React.createElement(Spec, {
    length: "52px"
  }), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.05rem',
      lineHeight: 1.6,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: '1.1rem'
    }
  }, sub) : null);
}
function Method() {
  return /*#__PURE__*/React.createElement("section", {
    id: "method",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--paper-soft)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "02",
    kicker: "Method",
    title: "Multi-timestep fusion from a frozen backbone",
    sub: "Only the aggregation module and a per-task decoder are trained. The FLUX.1-dev and DINOv3 backbones stay frozen end to end."
  }), /*#__PURE__*/React.createElement(Crd, {
    variant: "paper",
    style: {
      padding: 'clamp(1rem, 3vw, 2rem)',
      marginBottom: '2.4rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/architecture.png",
    alt: "MMDiff architecture diagram",
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      flexWrap: 'wrap',
      marginBottom: '2.2rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginRight: '0.4rem'
    }
  }, "Concept tokens"), Db.concepts.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.label,
    color: c.color
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
      gap: '1.2rem'
    }
  }, Db.steps.map(s => /*#__PURE__*/React.createElement(Crd, {
    key: s.n,
    variant: "paper",
    hover: true,
    pad: "1.5rem"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.6rem',
      marginBottom: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'var(--accent-ink)'
    }
  }, s.n), /*#__PURE__*/React.createElement(Spec, {
    length: "20px",
    thickness: "3px"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.12rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'var(--text-strong)',
      margin: '0 0 0.75rem'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.92rem',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.body))))));
}
function ResultTile({
  item
}) {
  const [showInput, setShowInput] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Crd, {
    variant: "figure",
    onMouseEnter: () => setShowInput(true),
    onMouseLeave: () => setShowInput(false),
    style: {
      position: 'relative',
      cursor: 'crosshair'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.pred,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: item.rgb,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: showInput ? 1 : 0,
      transition: 'opacity var(--dur) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '0.6rem',
      top: '0.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(0,0,0,0.5)',
      padding: '0.2rem 0.45rem',
      borderRadius: '4px'
    }
  }, showInput ? 'input' : 'prediction'))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      marginTop: '0.6rem',
      textAlign: 'center'
    }
  }, item.caption));
}
function ResultsTable() {
  const t = Db.table;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginTop: '3rem'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.84rem',
      minWidth: '40rem'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, t.cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: i === 0 ? 'left' : 'center',
      padding: '0.7rem 0.8rem',
      borderBottom: '2px solid var(--line-strong)',
      color: 'var(--text-muted)',
      fontWeight: 500,
      fontSize: '0.72rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, t.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.m,
    style: {
      background: r.ours ? 'rgba(27,127,197,0.07)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '0.6rem 0.8rem',
      borderBottom: '1px solid var(--line)',
      whiteSpace: 'nowrap',
      color: r.ours ? 'var(--accent-ink)' : 'var(--text-body)',
      fontWeight: r.ours ? 600 : 400,
      borderLeft: r.ours ? '2px solid var(--accent)' : '2px solid transparent',
      fontFamily: 'var(--font-sans)'
    }
  }, r.m), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '0.6rem 0.8rem',
      borderBottom: '1px solid var(--line)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: r.frozen ? 'var(--frozen)' : 'var(--text-faint)'
    }
  }, r.frozen ? '●' : '○')), r.vals.map((v, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      padding: '0.6rem 0.8rem',
      borderBottom: '1px solid var(--line)',
      textAlign: 'center',
      color: r.ours ? 'var(--text-strong)' : 'var(--text-body)',
      fontWeight: r.ours ? 600 : 400
    }
  }, v)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.82rem',
      color: 'var(--text-faint)',
      marginTop: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--frozen)'
    }
  }, "\u25CF"), " frozen encoder \xB7 MMDiff matches trainable encoders while keeping a 12B backbone frozen, and is best when fused with DINOv3."));
}
function Results() {
  const [task, setTask] = React.useState('Segmentation');
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "03",
    kicker: "Results",
    title: "One frozen model, three dense modalities",
    sub: "Hover any frame to reveal the input image. Switch tasks to compare predictions across benchmarks."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    }
  }, Db.tasks.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    active: task === t,
    onClick: () => setTask(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
      gap: '1.4rem'
    }
  }, Db.gallery[task].map(item => /*#__PURE__*/React.createElement(ResultTile, {
    key: item.pred,
    item: item
  }))), /*#__PURE__*/React.createElement(ResultsTable, null)));
}
function Citation() {
  return /*#__PURE__*/React.createElement("section", {
    id: "cite",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--surface-lab)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "04",
    kicker: "Citation",
    title: "BibTeX",
    onDark: true
  }), /*#__PURE__*/React.createElement(Code, {
    title: "BibTeX",
    code: Db.bibtex
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      marginTop: '1.6rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#",
    variant: "accent",
    icon: React.createElement(Ib.arrow)
  }, "Read on arXiv"), /*#__PURE__*/React.createElement(Btn, {
    href: "#",
    variant: "outline",
    icon: React.createElement(Ib.github),
    style: {
      color: 'var(--text-on-dark)',
      borderColor: 'var(--line-dark)'
    }
  }, "View code"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '2.4rem var(--section-pad-x)',
      background: 'var(--ink-950)',
      borderTop: '1px solid var(--line-dark)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Spec, {
    length: "80px",
    thickness: "3px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.1rem',
      color: 'var(--text-on-dark)',
      marginBottom: '0.5rem'
    }
  }, "MM", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "Diff")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.82rem',
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, Db.meta.affiliation, " \xB7 Released under the MIT License \xB7 Page built with the MMDiff design system."));
}
Object.assign(window, {
  Method,
  Results,
  Citation,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project_page/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project_page/sections-top.jsx
try { (() => {
/* MMDiff project page — top sections: Nav, Hero, Abstract */
const DS = window.MMDiffDesignSystem_07b833;
const {
  Button,
  Badge,
  Kicker,
  StatBlock,
  SpectrumBar,
  Card
} = DS;
const I = window.Icons;
const D = window.MMD;
const iconFor = {
  paper: I.paper,
  arxiv: I.arxiv,
  github: I.github,
  data: I.data
};
function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = id => e => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(1rem, 4vw, 2.2rem)',
      height: '60px',
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: go('top'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.35rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "MM", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-ink)'
    }
  }, "Diff")), /*#__PURE__*/React.createElement(SpectrumBar, {
    length: "22px",
    thickness: "3px"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 1.6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links",
    style: {
      display: 'flex',
      gap: '1.4rem'
    }
  }, ['abstract', 'method', 'results', 'cite'].map(id => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: go(id),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.74rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--accent-ink)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, id === 'cite' ? 'BibTeX' : id))), /*#__PURE__*/React.createElement(Button, {
    href: "#",
    variant: "solid",
    size: "sm",
    icon: React.createElement(I.github)
  }, "Code")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: 'clamp(6rem, 12vw, 9rem) var(--section-pad-x) clamp(2.5rem, 5vw, 4rem)',
      background: 'radial-gradient(60rem 30rem at 50% -10rem, rgba(27,127,197,0.10), transparent 60%), var(--paper-warm)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '64rem',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.6rem',
      marginBottom: '1.4rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    dot: true
  }, D.meta.venue), /*#__PURE__*/React.createElement(Badge, {
    variant: "frozen",
    dot: true
  }, "Frozen FLUX.1-dev")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'var(--text-display)',
      lineHeight: 1.05,
      letterSpacing: '-0.022em',
      color: 'var(--text-strong)',
      margin: '0 auto 1.4rem',
      maxWidth: '20ch'
    }
  }, "Extending diffusion transformers for ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-ink)'
    }
  }, "multi-modal"), " generation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement(SpectrumBar, {
    length: "120px",
    thickness: "4px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.1rem',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, D.meta.authors.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: a.name
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-strong)',
      textDecoration: 'none',
      borderBottom: '1.5px solid transparent',
      transition: 'border-color var(--dur)'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = 'var(--accent)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'transparent'
  }, a.name), /*#__PURE__*/React.createElement("sup", {
    style: {
      color: 'var(--text-muted)'
    }
  }, a.sup), i < D.meta.authors.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      margin: '0 0.5rem'
    }
  }, "\xB7") : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.98rem',
      color: 'var(--text-muted)',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("sup", null, "1"), D.meta.affiliation), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.6rem',
      marginTop: '2rem',
      flexWrap: 'wrap'
    }
  }, D.meta.links.map(l => /*#__PURE__*/React.createElement(Button, {
    key: l.label,
    href: l.href,
    variant: l.variant,
    icon: l.kind === 'arxiv' ? null : React.createElement(iconFor[l.kind])
  }, l.label)))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'clamp(2.5rem, 5vw, 4rem) auto 0',
      maxWidth: 'var(--measure-wide)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "figure"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/teaser.png",
    alt: "MMDiff teaser: input, saliency, segmentation, depth",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: '1rem',
      maxWidth: '52rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }
  }, "From a single frozen backbone, MMDiff decodes ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "saliency"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "segmentation"), ", and ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "depth"), " \u2014 fusing features across the denoising trajectory with optional DINOv3.")));
}
function Abstract() {
  return /*#__PURE__*/React.createElement("section", {
    id: "abstract",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-wide)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 2.1fr)',
      gap: 'clamp(1.5rem, 4vw, 3.5rem)'
    },
    className: "abstract-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    index: "01"
  }, "Abstract")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mmd-prose",
    style: {
      fontSize: 'var(--text-lead)',
      margin: 0,
      color: 'var(--text-body)'
    }
  }, D.abstract), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: 'var(--line)',
      margin: '2.4rem 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.6rem'
    },
    className: "stat-grid"
  }, D.stats.map(s => /*#__PURE__*/React.createElement(StatBlock, {
    key: s.label,
    value: s.value,
    label: s.label,
    sub: s.sub,
    accent: s.accent
  }))))));
}
Object.assign(window, {
  NavBar,
  Hero,
  Abstract
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project_page/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.SpectrumBar = __ds_scope.SpectrumBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

})();

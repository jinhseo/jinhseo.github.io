/* MMDiff project page — minimal inline icon set (stroke-based, 1.6px).
   Replaces the Font Awesome / academicons of the original template with
   a small, self-contained set so the page works offline. */
(function () {
  const S = ({ children, fill }) => (
    React.createElement('svg', {
      width: '1em', height: '1em', viewBox: '0 0 24 24',
      fill: fill ? 'currentColor' : 'none',
      stroke: fill ? 'none' : 'currentColor',
      strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
    }, children)
  );
  const P = (d, extra) => React.createElement('path', Object.assign({ d }, extra || {}));

  window.Icons = {
    paper: () => React.createElement(S, null,
      P('M6 2h8l4 4v16H6z'), P('M14 2v4h4'),
      P('M9 12h6'), P('M9 16h6')),
    arxiv: () => React.createElement('span', {
      style: { fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.92em', letterSpacing: '-0.02em' }
    }, 'arX'),
    hf: () => React.createElement('span', {
      style: { fontSize: '1.05em', lineHeight: 1 }
    }, '🤗'),
    github: () => React.createElement(S, { fill: true },
      P('M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49v-1.7c-2.79.62-3.38-1.22-3.38-1.22-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z')),
    data: () => React.createElement(S, null,
      P('M12 3c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3z'),
      P('M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6'),
      P('M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6')),
    arrow: () => React.createElement(S, null, P('M5 12h14'), P('M13 6l6 6-6 6')),
  };
})();

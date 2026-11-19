# GroundFormer — project page

Project page for *What You Ask is What You Ground: Bridging Question Intent to
Temporal Evidence for Grounded VideoQA* (ECCV 2026). The layout, design tokens
and components come from the MMDiff project page (MIT License).

## Two ways to view it

**One file — `preview.html`.** Double-click it. Every style, script and image is
inlined, so nothing else needs to be present. Build it with:

```
python build_preview.py docs preview.html
```

**The source tree — `docs/`.** The browser blocks `.jsx` files over `file://`,
so this form needs a server:

```
cd docs
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Building a page for any project

The build script takes a source folder and an output path, both relative to
where you run it, so the sources and the built pages can live apart:

```
python build_preview.py project_pages/groundformer pages/groundformer.html
python build_preview.py project_pages/mmdiff       pages/mmdiff.html
```

A source folder needs `index.html`, `data.js`, `ds_bundle.js`, `tokens/*.css`,
the four `.jsx` files, and an `assets/` folder. The script tells you what is
missing rather than writing a broken page.

With Node.js installed, the JSX is compiled ahead of time and Babel is left out
of the page, so the result opens offline and renders immediately. Without
Node.js, Babel ships inside the page instead: still works, about 3 MB larger,
brief pause on load. React comes from `vendor/` when that folder is next to the
script. Pass `--cdn` to load React and Babel from the network instead and get a
much smaller file.

Web fonts still load from Google Fonts. Offline the page falls back to system
fonts; to cut the dependency, self-host the `.woff2` files and replace the
`@import` in `docs/tokens/fonts.css`.

## Editing

| What | Where |
| --- | --- |
| Title, authors, links, stats, tables, BibTeX, figure captions | `docs/data.js` |
| Nav, hero, motivation | `docs/sections-top.jsx` |
| Method, results, analysis, citation, footer | `docs/sections-bottom.jsx` |
| Section order | `docs/app.jsx` |
| Colors, fonts, spacing, type scale | `docs/tokens/*.css` |
| Figures | `docs/assets/*.png` |

Nearly everything you need to change lives in `docs/data.js`. Open it first.

In the results tables, `*value` renders bold (best) and `~value` renders
underlined (second best). A row with `ours: true` gets the accent background;
`sep: true` draws a rule above it.

Rebuild the single file after every edit, or the old version keeps showing.

## Deploy

Push the repository and point GitHub Pages at the `docs/` folder
(Settings → Pages → Branch: `main`, Folder: `/docs`). The `.nojekyll` file keeps
Pages from filtering the assets. `preview.html` is for handing the page to
someone as one file; Pages does not need it.

## License

MIT. See `LICENSE`. The page template retains the MMDiff copyright notice.

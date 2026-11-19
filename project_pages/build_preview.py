#!/usr/bin/env python3
"""Bundle a project page's source folder into one self-contained HTML file.

Keep this script and vendor/ beside the project folders:

    project_pages/
      build_preview.py
      vendor/
      groundformer/      index.html, data.js, *.jsx, tokens/, assets/
      mmdiff/

Then, from anywhere:

    python build_preview.py groundformer                     -> groundformer.html
    python build_preview.py groundformer ../pages/gf.html    -> that path

A source path is looked up next to your shell first, then next to this script,
so both of these work from the repository root:

    python project_pages/build_preview.py groundformer
    python project_pages/build_preview.py project_pages/groundformer

With no arguments the script builds ./docs into ./preview.html. Add --cdn to
build the small version that loads React from the network instead of inlining
it.

What ends up in the file
------------------------
Every CSS token file, ds_bundle.js, data.js, the JSX, and every image referenced
as 'assets/...' are inlined, so the output needs no other file. React and
ReactDOM come from vendor/ next to this script when present, otherwise from
unpkg. The JSX is compiled ahead of time when Node.js is installed, which drops
Babel from the page: the file then opens offline and renders immediately.
Without Node.js the script ships Babel inside the page instead, which still
works but adds about 3 MB and a short pause on load.
"""
import base64
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
VENDOR = SCRIPT_DIR / "vendor"

CSS_FILES = ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css"]
JSX_FILES = ["icons.jsx", "sections-top.jsx", "sections-bottom.jsx", "app.jsx"]

CDN = {
    "react": "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
    "react-dom": "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
    "babel": "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js",
}

MIME = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
        ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp"}

# Node driver that runs Babel over one file and prints the plain JS.
DRIVER = """
const Babel = require(process.argv[2]);
const fs = require('fs');
const src = fs.readFileSync(process.argv[3], 'utf8');
process.stdout.write(Babel.transform(src, { presets: ['react'] }).code);
"""


def data_uri(path: Path) -> str:
    mime = MIME.get(path.suffix.lower(), "application/octet-stream")
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def inline_images(text: str, src_dir: Path) -> str:
    """Replace 'assets/....png' string literals with data URIs."""
    def sub(m):
        f = src_dir / m.group(2)
        return f"{m.group(1)}{data_uri(f)}{m.group(3)}" if f.exists() else m.group(0)
    return re.sub(r"(['\"])(assets/[^'\"]+)(['\"])", sub, text)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def compile_jsx(sources: dict) -> dict | None:
    """Compile every .jsx ahead of time. Returns None when that is not possible."""
    node = shutil.which("node")
    babel = VENDOR / "babel.min.js"
    if not node or not babel.exists():
        return None
    with tempfile.TemporaryDirectory() as tmp:
        driver = Path(tmp) / "driver.js"
        driver.write_text(DRIVER, encoding="utf-8")
        out = {}
        for name, src in sources.items():
            f = Path(tmp) / (Path(name).stem + ".src.js")
            f.write_text(src, encoding="utf-8")
            # encoding is explicit: Node writes UTF-8, while a Windows shell
            # would otherwise decode it as cp949 and crash on the first arrow
            # or Greek letter in the sources.
            r = subprocess.run([node, str(driver), str(babel), str(f)],
                               capture_output=True, text=True,
                               encoding="utf-8", errors="replace")
            if r.returncode != 0 or not r.stdout:
                print(f"  babel failed on {name}, falling back to in-browser Babel")
                if r.stderr:
                    print("  " + r.stderr.strip()[:400])
                return None
            out[name] = r.stdout
        return out


def script_tag(name: str, cdn_url: str, use_cdn: bool) -> str:
    """Inline vendor/<name> when it is there, otherwise point at the CDN."""
    f = VENDOR / name
    if not use_cdn and f.exists():
        return "<script>" + read(f) + "</script>"
    return f'<script src="{cdn_url}" crossorigin="anonymous"></script>'


def find_source(arg: str) -> Path:
    """Look for the source folder next to the shell first, then next to this script."""
    for candidate in (Path.cwd() / arg, SCRIPT_DIR / arg):
        if candidate.is_dir():
            return candidate.resolve()
    sys.exit(f"no such folder: {arg}  (looked in {Path.cwd()} and {SCRIPT_DIR})")


def main() -> None:
    argv = sys.argv[1:]
    use_cdn = "--cdn" in argv
    positional = [a for a in argv if not a.startswith("--")]

    src_dir = find_source(positional[0]) if positional else (SCRIPT_DIR / "docs")
    out_path = (Path(positional[1]) if len(positional) > 1
                else Path(f"{src_dir.name}.html" if positional else "preview.html")).resolve()

    missing = [n for n in ["index.html", "data.js", "ds_bundle.js", *CSS_FILES, *JSX_FILES]
               if not (src_dir / n).exists()]
    if missing:
        sys.exit(f"{src_dir} is missing: {', '.join(missing)}")

    index = read(src_dir / "index.html")
    title = re.search(r"<title>(.*?)</title>", index, re.S)
    head_style = re.search(r"<style>(.*?)</style>", index, re.S)

    imports, css_body = [], []
    for name in CSS_FILES:
        for line in read(src_dir / name).splitlines():
            (imports if line.strip().startswith("@import") else css_body).append(line)

    sources = {name: inline_images(read(src_dir / name), src_dir) for name in JSX_FILES}
    compiled = None if use_cdn else compile_jsx(sources)
    if compiled:
        sources = compiled

    parts = [
        "<!DOCTYPE html>", '<html lang="en">', "<head>", '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        f"<title>{title.group(1) if title else 'Project page'}</title>",
        "<style>", *imports, *css_body, (head_style.group(1) if head_style else ""), "</style>",
        script_tag("react.production.min.js", CDN["react"], use_cdn),
        script_tag("react-dom.production.min.js", CDN["react-dom"], use_cdn),
    ]
    if not compiled:
        parts.append(script_tag("babel.min.js", CDN["babel"], use_cdn))
    parts += [
        "<script>", read(src_dir / "ds_bundle.js"), "</script>",
        "</head>", "<body>", '<div id="root"></div>',
        "<script>", inline_images(read(src_dir / "data.js"), src_dir), "</script>",
    ]
    for name in JSX_FILES:
        attr = "" if compiled else ' type="text/babel" data-presets="react"'
        parts += [f"<script{attr}>", sources[name], "</script>"]
    parts += ["</body>", "</html>"]

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text("\n".join(parts), encoding="utf-8")
    mode = "precompiled, offline" if compiled else ("CDN" if use_cdn else "in-browser Babel")
    print(f"{src_dir}  ->  {out_path}  ({out_path.stat().st_size / 1024:.0f} KB, {mode})")


if __name__ == "__main__":
    main()

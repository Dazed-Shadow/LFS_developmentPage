# Lofi Sanctuary — EPK deploy

A self-contained build of the EPK ready to drop onto Netlify.

This folder is generated from `ui_kits/epk/` by `scripts/port-to-site.mjs`. **Do
not hand-edit files in this folder** — they'll be overwritten on the next port.

```
# From the project root:
npm run port           # ui_kits/epk/ + assets/ + colors_and_type.css  →  site/
npm run port:check     # exit 1 if site/ has drifted; used by CI
```

The script is pure Node (18+), zero dependencies. It tracks generated files
in `.port-manifest.json` so deletions in source propagate to `site/` on the
next port. Hand-authored files in this folder (`README.md`, `netlify.toml`,
`.gitattributes`) are preserved across ports.

## What's inside

```
site/
├── index.html              Entry point (Netlify serves this at /)
├── styles.css              Page-level styles
├── colors_and_type.css     Design tokens (color + type)
├── netlify.toml            Headers, caching, no-build static config
├── components/             React/JSX components (transpiled in-browser via Babel)
└── assets/
    ├── covers/             Cover art (sanctuary-hero.png is the EPK lead)
    └── logo/               Wordmark SVGs
```

## Deploy options — pick one

### A. Drag-drop (fastest — 30 seconds)

1. `cd` to this folder and zip it, or just download the `site/` folder from
   the project (use the "Download" option in the project file menu).
2. Go to <https://app.netlify.com/drop>.
3. Drag the `site` folder onto the page.
4. Netlify gives you a `<random-name>.netlify.app` URL. Done.

This route doesn't auto-redeploy when you change files. Good for first-look
demos; bad for ongoing iteration. Move to option B once you're iterating.

### B. Git-connected (recommended for iteration)

1. Push this project to GitHub (the project's GitHub integration handles this).
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Pick the repo. Netlify auto-detects `netlify.toml`.
4. Set **Base directory** to `site` (so Netlify treats this folder as the
   publish root, ignoring the rest of the design-system repo).
5. Click deploy. Every push to `main` triggers a redeploy.

Once connected, you get:

- A live URL (e.g. `lofi-sanctuary.netlify.app`, plus deploy previews on PRs).
- Each Claude Design or Claude Code edit to `ui_kits/epk/` → re-port → push →
  live in ~30 seconds.

### C. Netlify CLI (if you already use it)

```
cd site
netlify deploy --prod
```

## The iteration loop

```
Edit in Claude Design  ──►  ui_kits/epk/
                                │
                                ▼
                          npm run port            ◄── Claude Code runs this
                                │
                                ▼
                          git push (incl. site/)
                                │
                                ▼
                          GH Action: npm run port:check
                                │                ◄── fails the PR if site/
                                ▼                    drifted from source
                          Netlify auto-deploys
```

The source of truth stays in `ui_kits/epk/`. `site/` is the build output,
committed to the repo so Netlify can serve it without a build step.

## Custom domain

When you're ready to point a real domain (e.g. `lofisanctuary.com`):

1. Netlify → Site settings → Domain management → Add custom domain.
2. Follow the DNS steps Netlify shows (either set Netlify as nameserver, or
   add an `ALIAS`/`CNAME` to your existing DNS).
3. Netlify provisions a Let's Encrypt cert automatically.

## Known caveats

- **First paint is slow on cold cache (~500ms-1s).** Babel transpiles the JSX
  in-browser. Fine for an EPK; if it ever matters for SEO or perf, we'll
  pre-compile. The Spotify embed is the bigger weight either way.
- **The Spotify embed needs a real artist/album ID.** `components/Tracks.jsx`
  has the artist ID hard-coded. If you swap it pre-launch, replace it in the
  `ui_kits/epk/` source and re-port — not directly in `site/`.
- **No SPA routes.** The EPK is single-page with anchor-scroll, so no
  `_redirects` file is needed.

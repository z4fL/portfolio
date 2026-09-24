# Z4FL Portfolio

Built as a "developer's workbench": a focused, terminal-inspired workspace where projects, skills, and publications speak for themselves.

🔗 Live: [z4fl.github.io/portfolio](https://z4fL.github.io/portfolio)

## Tech Stack

- **React 19** + **Vite** — UI and build tooling
- **Tailwind CSS 4** — styling
- **fslightbox-react** — project screenshot lightbox
- **react-pdf** / **pdfjs-dist** — in-browser CV/publication preview
- **gh-pages** — deployment to GitHub Pages

## Getting Started

```bash
# install dependencies
pnpm install

# start dev server
pnpm dev

# lint
pnpm lint

# production build
pnpm build

# preview production build
pnpm preview

# deploy to GitHub Pages
pnpm deploy
```

## Project Structure

```
src/
├─ Components/   # reusable UI pieces (WindowFrame, HeroSlider, Footer, ...)
├─ Sections/     # page sections (Hero, About, Skills, Projects, Publications)
├─ projects.js   # project data
├─ skills.js     # tech stack data
└─ socialLinks.js
public/
├─ project-imgs/ # screenshots
├─ cv/           # downloadable CV
├─ publications/ # research/publication files
└─ old/          # archived snapshots of previous portfolio versions
```

## Version Iteration

This portfolio keeps a live history of its own redesigns. Older builds aren't deleted, they're archived under `public/old/<n>/` and stay browsable through a version switcher in the footer.

`version-history.json` at the project root drives that switcher:

```json
[
  { "label": "v1", "path": "old/1" }
]
```

- The **current** version shown in the dropdown is always `versions.length + 1` (auto-computed in `Footer.jsx`), so you don't set the current version number manually anywhere.
- Each entry in the array is a **past** version.

### Adding a new iteration (archiving the current version before a redesign)

Snapshotting is scripted, don't do it by hand. Once the current design is on a stable commit you want to freeze, run:

```bash
node scripts/create-version-snapshot.mjs <version-number>
# example: node scripts/create-version-snapshot.mjs 2
```

`scripts/create-version-snapshot.mjs` does the whole flow for you:

1. Checks out `HEAD` into a disposable git worktree, so your current working tree is never touched.
2. Builds that worktree with `vite build --base=./` (relative paths, so the snapshot still works nested under `/old/<n>/`).
3. Copies only the built JS/CSS bundle, favicon, and `index.html` into `public/old/<n>/` — shared assets (fonts, icons, images) stay in the root `public/` and aren't duplicated per version.
4. Injects a small "Archive vN, previous version" banner with a link back to the latest version into the snapshot's `index.html`.
5. Appends `{ "label": "vN", "path": "old/<n>" }` to `version-history.json` automatically, which is what powers the Footer version switcher.
6. Cleans up the temporary worktree.

After that, just keep redesigning `src/` as usual — the archived snapshot in `public/old/<n>/` is frozen and won't be touched by further changes.

## Design System

See [`DESIGN.md`](./DESIGN.md) for the full design language (colors, typography, spacing, component tokens).

## Product Context

See [`PRODUCT.md`](./PRODUCT.md) for target users, positioning, and product principles behind the portfolio.

## License

The **source code** (components, scripts, config) is licensed under [MIT](./LICENSE) — feel free to fork it, learn from the structure, or reuse the version-archiving setup.

**Personal content** (CV, publications, project screenshots, photos, and logo) is **not** covered by that license and remains all rights reserved.

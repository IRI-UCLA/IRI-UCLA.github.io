# Connection Lab @ Boelter 3440

Living guidebook for **Connection Lab** at **Boelter Hall 3440**, UCLA.

## Local preview

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `docs/.vitepress/dist`.

## Deploy (GitHub Pages)

The live site is **[https://iri-ucla.github.io/](https://iri-ucla.github.io/)**, built from [`IRI-UCLA.github.io`](https://github.com/IRI-UCLA/IRI-UCLA.github.io) only.

This repo (`CL-BH3440`) is for editing. After you commit here, sync to the Pages repo:

```bash
git push pages main
```

That triggers the deploy workflow on `IRI-UCLA.github.io` (usually live within 1–2 minutes).

## What's in this repo

Only the VitePress guidebook:

- `docs/` — Markdown pages
- `docs/.vitepress/` — site config and theme
- `package.json` — build tooling (not deployed; GitHub Actions runs `npm ci && npm run build`)

`node_modules/`, `docs/.vitepress/cache/`, and `docs/.vitepress/dist/` stay local (gitignored).

## Adding content

Edit Markdown under `docs/guide/`. The sidebar is defined in `docs/.vitepress/config.ts`.

| Section | File |
| --- | --- |
| Overview | `docs/guide/index.md` |
| Server use | `docs/guide/server-use.md` |
| Lab use | `docs/guide/lab-use.md` |
| Lighting | `docs/guide/lighting.md` |
| Directions | `docs/guide/directions.md` |
| Printing & storage | `docs/guide/printing-and-storage.md` |
| General guidelines | `docs/guide/general-guidelines.md` |

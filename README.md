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

The live site is published at **[https://iri-ucla.github.io/](https://iri-ucla.github.io/)** from the [`IRI-UCLA.github.io`](https://github.com/IRI-UCLA/IRI-UCLA.github.io) repository.

Pushing to `main` runs `.github/workflows/deploy-pages.yml` and updates the site automatically (usually within 1–2 minutes).

To enable Pages the first time (org admins):

1. Open **Settings → Pages** on `IRI-UCLA/IRI-UCLA.github.io`
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

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

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

Ez egy [Next.js](https://nextjs.org) + TypeScript projekt, amelyet a `create-next-app` hozott létre.

## Fejlesztés helyben

1) Indítás fejlesztői módban

```bash
npm run dev
```

2) Nyisd meg: http://localhost:3000

Fő oldal: `app/page.tsx`, globális stílusok: `app/globals.css`. A képek a `public/kepek` mappában vannak.

## Build

```bash
npm run build && npm start
```

## Telepítés a Vercelre (ajánlott)

1) Jelentkezz be a Vercelre: https://vercel.com
2) Új projekt importálása: "Add New..." → "Project" → Importáld a helyi repo-t GitHub-ba, majd válaszd ki.
	- Framework: Next.js (automatikus felismerés)
	- Root Directory: `honlap` (ha a monorepó gyökere más)
	- Build & Output: alapértelmezett (`npm run build`, output: `.vercel/output`/`.next`)
3) Deploy gomb. Az első build után kapsz egy `https://...vercel.app` címet.

Alternatíva: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Hasznos

- Képek elérése: `/kepek/FILE_NEV` a `public` mappából
- Meta adatok: `app/layout.tsx` (`metadata` export)
- Stílus: CSS modul `app/page.module.css`

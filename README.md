# Ayush Yadav — portfolio

A single-page portfolio with a warm paper background, a readable name and concise project descriptions.

Live: [ayushyadavres.vercel.app](https://ayushyadavres.vercel.app/)

## Run

```bash
npm ci
npm run dev
```

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content

- `src/data/profile.ts` — introduction, contact links, past internship, tools and education.
- `src/data/projects.ts` — selected public projects and their repository URLs.
- `docs/CONTENT_AUDIT.md` — sources and corrections behind the copy.
- `DESIGN.md` — visual conventions and tokens.

Do not add performance numbers, proficiency ratings or employment dates without evidence. Project links should resolve to public repositories. The internship is past experience; its end date has not yet been supplied.

The page is server-rendered with Next.js. Contact links work without client-side JavaScript. Vercel Analytics is retained from the existing project. The old PDF resume remains unlinked pending a date/content update.

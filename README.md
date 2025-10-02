# Portfolio (React + TypeScript + Vite)

A clean, accessible portfolio/resume site built with React, TypeScript, and Vite. It includes a dark/light theme toggle, responsive layout, and simple content structure.

## Quick Start

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Customize Content

- Edit hero, about, skills, projects, experience, education, and contact info in `src/data/content.ts`.
- Update the page title in `index.html:7`.
- Replace the footer name in `src/components/Footer.tsx:6`.
- Add your resume PDF to `public/resume.pdf` if you want the download button to work.

## Structure

- `src/App.tsx` — Page layout, theme wiring
- `src/components/*` — Section components: `Navbar`, `Hero`, `About`, `Projects`, `Education`, `Experience`, `Contact`, `Footer`
- `src/data/content.ts` — Central place for all editable content
- `src/index.css` — Theme tokens and base styles
- `src/App.css` — Section/component styles

## Theming

- Toggle dark/light mode via the button in the navbar.
- The chosen theme persists in `localStorage` and updates `html[data-theme]`.
- Adjust color tokens in `src/index.css:1` (dark) and `src/index.css:18` (light override).

## Deploy

- Works with any static hosting (Netlify, Vercel, GitHub Pages, etc.).
- Build with `npm run build`, then deploy the `dist/` folder.




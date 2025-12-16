# Notion Agent Presentation

A Vite + React project for a Notion Agent presentation experience.


## Tech stack

- React 18
- Vite
- Radix UI
- Tailwind (via utility classes / tailwind-merge)
- Lucide icons

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
```

Build output is generated in `build/`.

## Deploy

This repo includes a `netlify.toml` configured to publish the `build/` directory.

 Live demo:
 https://6941ad0b76e9a14e63a7b896--glowing-florentine-fc671c.netlify.app/

If you use Netlify Drop, drag-and-drop the `build/` folder.

## Project structure

- `src/`: application source
- `index.html`: Vite HTML entry
- `vite.config.ts`: Vite configuration

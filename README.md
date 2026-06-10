# GEMBA Industrial Services — Reactor & Catalyst Changeout Specialists

Marketing site for **GEMBA Industrial Services** — specialist reactor technicians and
catalyst‑changeout crews operating across Europe.

🌐 **Live:** https://gembaindustrial.com

---

## Overview

GEMBA Industrial Services provides specialist reactor servicing and catalyst‑changeout
crews for refineries and petrochemical plants. With 10+ years on site at operators such
as Shell, ExxonMobil, BP, Neste and ORLEN, and SCC/VCA certification, the team delivers
safe, certified turnaround work across Europe. This repository holds the source of the
public site — a fast, bilingual (BG/EN), SEO‑optimised single‑page application.

## Tech stack

- **Frontend:** React 19 + Vite, Tailwind CSS
- **i18n:** in‑app BG/EN translations
- **Server:** Node.js (`server.cjs`) for static serving, prerendering and SEO endpoints
- **Quality:** ESLint, Vite production build

## Getting started

```bash
# prerequisites: Node.js 20+
npm install
npm run dev        # local dev server with HMR
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Serve the built site:

```bash
node server.cjs    # serves dist/ + API/SEO routes
```

## Project structure

```
src/            UI components, pages, i18n
public/         static assets
dist/           production build (generated)
server.cjs      Node static + SEO/prerender server
vite.config.js  build configuration
```

## Deployment

The site is built to `dist/` and served by `server.cjs` behind Apache (reverse proxy)
with TLS terminated through Cloudflare (Full strict). Secrets live only in a local,
untracked `.env` file.

## License

Released under the [MIT License](./LICENSE).

---

© 2026 GEMBA Industrial Services · Varna, Bulgaria

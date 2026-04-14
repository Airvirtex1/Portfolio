# Matéo Repulles — Portfolio

> Personal portfolio showcasing embedded systems, IoT and electronics engineering projects. Built as a production-grade SPA with a focus on clean architecture, security hardening and design quality.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer&logoColor=white&style=flat-square)
![i18n](https://img.shields.io/badge/i18n-FR%20%2F%20EN-f59e0b?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)

---

## Preview

| Dark mode | Light mode |
|-----------|------------|
| ![Dark]([/src/assets/site_black.png]) | ![Light]([/src/assets/site_white.png]) |

🔗 **Live demo:** [portfolio](https://portfolio.indecis.ovh/)

---

## Features

- **Bilingual (FR / EN)** — Full i18n via `i18next`, language choice persisted across sessions
- **Dark / Light mode** — Defaults to dark, user preference stored in `localStorage`, instant switch with no flash
- **Fluid animations** — Entrance animations and spring-physics hover interactions via Framer Motion; motion only where it adds meaning (no stagger on every element)
- **Security hardened** — Content Security Policy (`script-src 'self'`, no `unsafe-eval`), strict contact form validation (regex + per-field length limits + honeypot anti-bot + 60s send cooldown), secrets in `.env`
- **Data-driven** — Projects and skills maintained in `src/data/` JS files, decoupled from UI components
- **Token-based design system** — Tailwind semantic tokens (`surface`, `text`, `accent`, `border`) driven by CSS variables; single palette swap for a full theme switch across all 13 pages
- **Responsive** — Mobile-first layout throughout, no fixed pixel widths

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI framework | React | 19 |
| Build tool | Vite | 7 |
| Styling | Tailwind CSS | 3.4 |
| Routing | React Router | 7 |
| Animations | Framer Motion | 11 |
| Internationalisation | i18next + react-i18next | 25 / 16 |
| Contact form | EmailJS Browser | 4 |
| Deployment | Azure App Service (Docker) | — |

---

## Project Structure

```
react-portfolio/
├── src/
│   ├── components/        # Navbar (glassmorphism + theme toggle), Footer
│   ├── context/           # ThemeContext — dark/light + localStorage
│   ├── data/              # projects.js, skills.js — single source of truth
│   ├── i18n/              # fr.json, en.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── projects/      # 9 individual project pages
│   └── index.css          # CSS custom properties (theme tokens), Tailwind base
├── .env.example           # Environment variable template
├── tailwind.config.js     # darkMode: 'class', semantic color tokens, font families
└── index.html             # CSP meta, Google Fonts (Space Grotesk, DM Sans, JetBrains Mono)
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Airvirtex1/Portfolio.git
cd Portfolio/react-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and fill in your EmailJS credentials (see below)
```

### Environment variables

```bash
# .env — never commit this file (already in .gitignore)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** `VITE_` variables are intentionally bundled into the client JS by Vite — this is expected for EmailJS public keys (designed to be client-side). Restrict usage by enabling **Allowed Origins** in your [EmailJS dashboard](https://dashboard.emailjs.com) → Service → Settings.

### Scripts

```bash
npm run dev       # Dev server at http://localhost:5173 (HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint
```

---

## Architecture Notes

### Token-based theming

Colors are CSS custom properties in `src/index.css`, consumed as Tailwind utilities. Switching themes is a single class toggle on `<html>` — no component-level `dark:` variants scattered across files.

```css
:root  { --surface-base: #fafaf9; --accent: #d97706; /* light */ }
.dark  { --surface-base: #09090b; --accent: #f59e0b; /* dark  */ }
```

### Performance

| Mechanism | Implementation |
|-----------|---------------|
| Code splitting | Automatic per-route via Vite dynamic imports |
| Asset optimisation | Hash-based filenames, Vite image pipeline at build time |
| Font loading | `preconnect` + `display=swap` — no layout shift |
| Animation budget | `viewport: { once: true }` on all scroll-triggered animations |

### Security

| Layer | Measure |
|-------|---------|
| CSP | `script-src 'self'` — no eval, no inline scripts |
| Contact form | Email regex, field length limits (50 / 254 / 2000 chars), honeypot field, 60s cooldown |
| Secrets | All API keys in `.env`, excluded from git via `.gitignore` |
| Headers | `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` |

---

## Adding a Project

1. Drop the project image in `src/assets/`
2. Add the entry in `src/data/projects.js` (id, image, tags, i18n keys)
3. Add translation strings in `src/i18n/fr.json` and `en.json`
4. Create the detail page under `src/pages/projects/`
5. Register the route in `src/App.jsx`

---

## License

MIT — feel free to use this as a template for your own portfolio.

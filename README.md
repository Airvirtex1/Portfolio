# ⚡ [Repulles] — Portfolio

> Portfolio personnel moderne conçu pour présenter mes projets et compétences frontend avec une attention particulière à la performance et à l'expérience utilisateur.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/Licence-MIT-green?style=flat-square)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-En_production-brightgreen?style=flat-square)]()

---

## 🖼️ Aperçu

| 🌐 Demo Live | 📸 Capture d'écran |
|:---:|:---:|
| **[→ Voir le site]([LIEN_DEMO])** | ![Aperçu du portfolio]([LIEN_SCREENSHOT]) |

---

## ✨ Fonctionnalités

- **Design responsive** — Mise en page fluide sur mobile, tablette et desktop via les utilitaires Tailwind CSS
- **Mode sombre / clair** — Bascule thématique persistante avec `localStorage` et respect de `prefers-color-scheme`
- **Animations contextuelles** — Transitions et micro-interactions pilotées par [Framer Motion](https://www.framer.com/motion/) pour un rendu non-intrusif
- **Optimisation SEO** — Balises meta dynamiques, Open Graph et structure sémantique HTML5
- **Performance Core Web Vitals** — Score Lighthouse ciblé ≥ 95 en production grâce au code splitting et à l'optimisation des assets
- **Formulaire de contact fonctionnel** — Intégration [VOTRE_SERVICE_EMAIL] avec validation côté client

---

## 🛠️ Stack technique

| Catégorie | Technologie | Rôle |
|---|---|---|
| **UI** | React 19 | Composants, gestion d'état, hooks |
| **Build** | Vite 6 | Bundler, HMR, optimisation prod |
| **Style** | Tailwind CSS 3 | Utility-first, design system |
| **Animation** | Framer Motion | Transitions, scroll-triggered animations |
| **Typage** | [TypeScript / PropTypes] | Robustesse des interfaces composants |
| **Déploiement** | [Vercel / Netlify / GitHub Pages] | CI/CD, edge network |

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) ≥ 18.x
- npm ≥ 9.x ou équivalent (`pnpm`, `yarn`)

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Airvirtex1/Portfolio.git
cd Portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le projet est accessible sur `http://localhost:5173` avec Hot Module Replacement actif.

### Commandes disponibles

```bash
npm run dev        # Serveur de développement Vite (HMR)
npm run build      # Build de production (output : ./dist)
npm run preview    # Prévisualiser le build de production en local
npm run lint       # Analyse statique ESLint
```

---

## ⚙️ Choix techniques & performance

**Code splitting automatique** — Vite découpe le bundle par route via `React.lazy()` et `Suspense`, réduisant le payload initial au strict minimum.

**Optimisation des assets** — Les images sont converties en `.webp` et servent des variantes dimensionnées via l'attribut `srcset`. Les SVG d'icônes sont inlinés pour éviter des requêtes réseau supplémentaires.

**CSS à la demande** — Tailwind CSS purge toutes les classes inutilisées au build : la feuille de style finale avoisine les 10–15 KB (gzip).

**Pas de dépendances superflues** — Chaque librairie tierce a été évaluée sur son rapport poids/bénéfice. Le bundle reste auditable via `npm run build -- --report`.

---

## 📁 Structure du projet

```
Portfolio/
├── public/             # Assets statiques (favicon, og-image…)
├── src/
│   ├── components/     # Composants réutilisables (Navbar, Footer…)
│   ├── sections/       # Sections de la page (Hero, Projects, Contact…)
│   ├── hooks/          # Hooks personnalisés
│   ├── data/           # Données statiques des projets & expériences
│   └── main.jsx        # Point d'entrée React
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## 📄 Licence

Distribué sous licence **MIT**. Voir le fichier [`LICENSE`](./LICENSE) pour le détail.

---

<p align="center">
  Fait avec ☕ et trop peu de sommeil par <strong><a href="[portfolio.indecis.ovh]">[Matéo Repulles]</a></strong>
</p>
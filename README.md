# Codebase pour le site du Bénévolat du Club Alpin de Lyon-Villeurbanne

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/fluffy-dolphin-aec0fe/overview)

Ce repo contient le code source du site [benevolat.clubalpinlyon.fr](https://benevolat.clubalpinlyon.fr/).
Il a été conçu avec Next.js **v15** et est déployé sur Netlify.

Vous trouverez ci-dessous la documentation pour utiliser ce repo avec Netlify et les outils modernes de développement.

---

This is a [Next.js](https://nextjs.org/) **v15** project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://netlify.com)!

This project uses:
- [Next.js 15](https://nextjs.org/blog/next-15)
- [pnpm](https://pnpm.io/) for package management
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting
- [CSS Modules](https://github.com/css-modules/css-modules) for styling
- [Next.js Image Optimization](https://nextjs.org/docs/pages/api-reference/components/image) (`<Image />`)
- Accessibility best practices

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

## Table of Contents

- [Codebase pour le site du Bénévolat du Club Alpin de Lyon-Villeurbanne](#codebase-pour-le-site-du-bénévolat-du-club-alpin-de-lyon-villeurbanne)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Linting \& Formatting](#linting--formatting)
  - [Image Optimization](#image-optimization)
  - [Accessibility \& Code Style](#accessibility--code-style)
  - [Testing](#testing)

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation

Clone this repo and install dependencies:

```bash
git clone https://github.com/netlify-templates/next-netlify-starter.git
cd next-netlify-starter
pnpm install
```

To start the dev server:

```bash
pnpm dev
```

To build for production:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm start
```

## Linting & Formatting

This project uses **ESLint** and **Prettier** for code quality and formatting.

- To check for lint errors:
  ```bash
  pnpm run lint
  ```
- To automatically fix lint and formatting issues:
  ```bash
  pnpm run lint --fix
  ```

## Image Optimization

All images should use the Next.js `<Image />` component for automatic optimization and best performance. See [Next.js Image docs](https://nextjs.org/docs/pages/api-reference/components/image).

## Accessibility & Code Style

- All interactive elements are accessible (keyboard, aria-labels, etc.).
- Styling is done with **CSS Modules** for component-scoped styles.
- Code follows DRY principles and uses modern React/Next.js best practices.

## Testing

This template includes:
- [Cypress](https://www.cypress.io/) for end-to-end testing
- [Renovate](https://www.mend.io/free-developer-tools/renovate/) for dependency updates

To run tests:
```bash
pnpm test
```

---

For deployment, this project uses Netlify. See `netlify.toml` for configuration.

---

Feel free to contribute or open issues!

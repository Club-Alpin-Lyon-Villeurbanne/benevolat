# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm run lint

# Fix linting and formatting issues
pnpm run lint:fix

# Format code
pnpm run format

# Run Cypress tests
# Note: Tests expect baseUrl http://localhost:8888/
pnpm test
```

## Architecture Overview

This is a Next.js v15 application for the Club Alpin Lyon-Villeurbanne volunteer website. Key architectural decisions:

- **Pages Router**: Uses Next.js pages directory (not app router)
- **Path Aliases**: Uses `@components` and `@styles` aliases defined in jsconfig.json
- **Styling**: Uses CSS modules and global CSS (no Tailwind despite README mention)
- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Static Data**: Volunteer roles are stored in pages/roles.json
- **Testing**: Cypress for E2E tests with baseUrl set to http://localhost:8888/
- **Deployment**: Configured for Netlify deployment via personal fork

## Deployment Workflow

To avoid Netlify's paid features for organization private repos, deployment uses a personal fork:

1. **Main development**: Work on `github.com/Club-Alpin-Lyon-Villeurbanne/benevolat`
2. **Deployment repo**: `github.com/nicolasRitouet/benevolat` (private fork)
3. **Deploy process**:
   ```bash
   # Add deployment remote if not already configured
   git remote add deploy https://github.com/nicolasRitouet/benevolat.git
   
   # Push to deploy (triggers Netlify build)
   git push deploy main
   ```

## Key Files and Structure

- `pages/index.js`: Main homepage displaying volunteer information and roles table
- `pages/roles.json`: Static data file containing volunteer role definitions
- `components/`: Reusable components (Header, Footer, Navbar)
- `public/assets/`: Static assets including images and SVGs
- `netlify.toml`: Netlify deployment configuration

## Development Guidelines

- Use pnpm for package management
- Follow existing component patterns when creating new components
- Images should use Next.js Image component for optimization
- Lint and format code before committing (pre-commit hooks via Husky)
- Component imports use path aliases (e.g., `@components/Header`)
- When deploying, remember to push to both origin and deploy remotes
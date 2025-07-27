# Site du Bénévolat - Club Alpin Lyon-Villeurbanne

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/fluffy-dolphin-aec0fe/overview)

Site web pour promouvoir le bénévolat au Club Alpin Français de Lyon-Villeurbanne.

🌐 **Production** : [benevolat.clubalpinlyon.fr](https://benevolat.clubalpinlyon.fr/)

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- pnpm 10.9.0 (installé automatiquement via corepack)

### Installation et lancement

```bash
# Cloner le repository
git clone https://github.com/Club-Alpin-Lyon-Villeurbanne/benevolat.git
cd benevolat

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
benevolat/
├── components/          # Composants React réutilisables
│   ├── Header.js       # En-tête avec image de fond
│   ├── Navbar.js       # Barre de navigation
│   └── Footer.js       # Pied de page avec liens sociaux
├── pages/              # Pages Next.js (routing automatique)
│   ├── index.js        # Page principale
│   └── roles.json      # Données des rôles bénévoles
├── public/             # Fichiers statiques
│   └── assets/         # Images et icônes
├── styles/             # Feuilles de style
│   └── globals.css     # Styles globaux (Bootstrap custom)
└── CLAUDE.md           # Guide pour l'assistant IA Claude
```

## 🛠 Stack technique

- **Framework** : Next.js 15 (Pages Router)
- **UI** : React 18 + CSS Modules
- **Styles** : Bootstrap 5 (customisé) + CSS Modules
- **Déploiement** : Netlify
- **Gestion de paquets** : pnpm
- **Linting** : ESLint + Prettier
- **Tests E2E** : Cypress

## 📝 Commandes principales

```bash
# Développement
pnpm dev              # Serveur de dev sur :3000

# Build & Production
pnpm build            # Build de production
pnpm start            # Serveur de production

# Qualité du code
pnpm lint             # Vérifier le code
pnpm lint:fix         # Corriger automatiquement
pnpm format           # Formater avec Prettier

# Tests
pnpm test             # Lancer Cypress (serveur dev requis sur port 3000)
pnpm test:open        # Ouvrir Cypress GUI
```

## 🔧 Configuration

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le développement.

### Netlify

Le déploiement est automatique à chaque push sur `main`. Configuration dans `netlify.toml`.

### Path aliases

Les alias de chemins sont configurés dans `jsconfig.json` :
- `@components/*` → `components/*`
- `@styles/*` → `styles/*`

## 📋 Workflow de développement

### 1. Modifier les rôles bénévoles

Éditer le fichier `pages/roles.json` :

```json
{
  "Nom": "Nom du rôle",
  "Departement": "Nom du département",
  "Description": "Description du rôle"
}
```

### 2. Modifier le contenu

- **Texte principal** : `pages/index.js`
- **Navigation** : `components/Navbar.js`
- **Footer** : `components/Footer.js`

### 3. Ajouter des images

1. Placer les images dans `public/assets/img/`
2. Utiliser le composant Next.js Image :

```jsx
import Image from 'next/image';

<Image
  src="/assets/img/mon-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

### 4. Styles

- **Global** : Modifier `styles/globals.css`
- **Composant** : Créer `Component.module.css`

## 🚢 Déploiement

### Configuration actuelle

Pour éviter les limitations de Netlify sur les repos privés d'organisation (feature payante), le déploiement utilise un fork personnel :

- **Repo principal** : `github.com/Club-Alpin-Lyon-Villeurbanne/benevolat`
- **Repo de déploiement** : `github.com/nicolasRitouet/benevolat` (privé)
- **Netlify** : connecté au repo personnel pour le déploiement automatique

### Workflow de déploiement

1. **Développement normal** sur le repo principal :
   ```bash
   git add .
   git commit -m "mes changements"
   git push origin main
   ```

2. **Pour déployer en production**, pusher vers le repo personnel :
   ```bash
   # Ajouter le remote s'il n'existe pas déjà
   git remote add deploy https://github.com/nicolasRitouet/benevolat.git
   
   # Pusher les changements
   git push deploy main
   ```

3. **Netlify** détecte automatiquement le push et déploie le site

### Déploiement manuel local

```bash
pnpm build
# Les fichiers sont dans .next/
```

## 🧪 Tests

Les tests utilisent Cypress pour les tests E2E. Avant de lancer les tests :

1. **Démarrer le serveur de développement** (port 3000) :
   ```bash
   pnpm dev
   ```

2. **Dans un autre terminal**, lancer les tests :
   ```bash
   pnpm test
   ```

**Note** : Si Cypress n'est pas installé, il s'installera automatiquement au premier lancement.

## 🐛 Dépannage

### Port 3000 déjà utilisé

```bash
# Le serveur utilisera automatiquement le port 3001
```

### Erreur d'hydratation React

Vérifier que le rendu côté serveur et client est identique. Éviter :
- `Math.random()` dans le rendu
- Dates dynamiques
- Conditions basées sur `window`

### Build échoue sur Netlify

Vérifier :
1. Que toutes les dépendances sont dans `package.json`
2. Que le build local fonctionne : `pnpm build`
3. Les logs de build sur Netlify

## 🤝 Contribution

1. Créer une branche depuis `main`
2. Faire les modifications
3. Vérifier : `pnpm lint && pnpm build`
4. Créer une Pull Request

### Standards de code

- ESLint + Prettier sont configurés
- Les hooks pre-commit formatent automatiquement
- Suivre les conventions React/Next.js existantes

## 📚 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation React](https://react.dev)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0)
- [Netlify Docs](https://docs.netlify.com)

## 📞 Support

Pour toute question technique :
- Ouvrir une issue sur GitHub
- Contact : benevolat@clubalpinlyon.fr

---

Développé avec ❤️ pour le Club Alpin Lyon-Villeurbanne
# Stage pédiatrie – app iPhone (PWA)

Fiches de stage (service S 51), consultables hors ligne :
- **Essentiels** : enfant qui va mal, RCP, anaphylaxie, besoins en eau, 5 B, hygiène des mains
- **Normes** : constantes vitales, croissance et développement, nouveau-né, biologie, calculs, isolements, douleur
- **Pathologies**, **Soins**, **Médicaments**
- **Additionnelles** : sécurité de l'enfant hospitalisé, SBAR, communication selon l'âge, maltraitance

L'accueil affiche le logo et le sommaire complet de toutes les fiches.

## Installation sur iPhone
1. Ouvrir l'URL GitHub Pages du dépôt dans **Safari**.
2. Bouton **Partager** › **Sur l'écran d'accueil**.
3. Ouvrir l'app une fois avec du réseau : ensuite elle fonctionne hors ligne.

## Publication
Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`
(dans *Settings › Pages*, choisir **Source : GitHub Actions**).

## Fichiers
- `index.html` : l'app complète (contenu + interface).
- `manifest.webmanifest`, `icons/`, `logo.svg` : installation sur l'écran d'accueil.
- `sw.js` : cache hors ligne. La page est rechargée depuis le réseau quand il est disponible, donc une mise à jour du contenu apparaît sans rien changer dans `sw.js`.

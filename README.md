# Portfolio Customer Success & Automation — Abdel Arbaoui

Bienvenue dans mon espace de démonstrations techniques. Ce dépôt regroupe et unifie des outils interactifs développés pour optimiser les opérations de Customer Success et la gestion d'activité.

## 📂 Structure du Workspace

Le portfolio est organisé de manière découplée avec une structure en dossier partagé :

```text
Documents/
├── portfolio-portal/        # Ce dossier (Portail de présentation)
│   ├── index.html           # Interface globale de navigation (iframe-based)
│   └── README.md            # Ce fichier explicatif
├── money-tracker/           # Projet 1 : Projet Personnel (Finance &amp; Patrimoine)
│   └── index.html           # Application interactive
└── CS-Analytics/            # Projet 2 : Suite d'Analytics & Reporting CS
    └── index.html           # Application interactive
```

---

## 🚀 Comment lancer le Portfolio ?

Il suffit d'ouvrir le fichier principal dans votre navigateur internet :
1. Naviguez dans le dossier `portfolio-portal`.
2. Ouvrez ou double-cliquez sur [index.html](file:///Users/abdelarbaoui/Documents/portfolio-portal/index.html).
3. Utilisez le menu latéral gauche pour basculer de façon fluide entre les projets.

---

## 📊 Projets présentés

### 1. Money Tracker (Projet Personnel — Gestion de Patrimoine)
Une application de suivi de portefeuille financier conçue pour fonctionner à 100% hors-ligne.
- **Fonctionnalités clés** : Suivi multi-comptes, gestion d'actifs (actions, cryptomonnaies), calendrier d'abonnements récurrents et outil de simulation d'intérêts composés sur 30 ans.
- **Technologies** : HTML/JS, Tailwind CSS, CDN Chart.js, LocalStorage persistant, simulations d'API FastAPI en local.

### 2. CS Analytics (Customer Success Operations & Automation)
Un dashboard d'analytics métier visant à consolider des imports de logs pour les transformer en rapports PowerPoint (PPTX) d'activité client.
- **Fonctionnalités clés** : Statistiques d'utilisation produits (SecureDrive & TeamChat), console de requêtes style Postman supportant l'authentification mTLS sécurisée par certificat PEM temporaire, et mode diaporama pour double écran.
- **Technologies** : Moteur Pandas (Python), python-pptx (génération PPTX), pont WebView2 (PyWebView), Vanilla CSS.

---

## 🛡️ Engagements de Conception

- **Conception 100% Client-Side / Off-line** : Toutes les données d'analyse et de gestion restent locales. Aucun flux de données n'est transmis vers un cloud public tiers pour garantir une conformité cybersécurité absolue.
- **Qualité & Fiabilité** : Plus de 145 tests unitaires en Python couvrent les algorithmes de calculs et de fusions de données (timestamps concurrent-merge).
- **Expérience Utilisateur Moderne** : Thème sombre harmonieux, micro-animations, et intégration fluide par iframes pour les présentations.

---

## ✉️ Contact

- **LinkedIn** : [Abdelkader Arbaoui](https://www.linkedin.com/in/abdelkader-arbaoui-423852197/)
- **GitHub** : [AbdelArbaoui](https://github.com/AbdelArbaoui)
- **Email** : [abdelarbb@gmail.com](mailto:abdelarbb@gmail.com)

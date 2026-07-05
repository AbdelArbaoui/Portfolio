const translations = {
  fr: {
    pageTitle: "CV — Abdelkader Arbaoui",
    pageDescription: "CV d’Abdelkader Arbaoui — Customer Success Manager, Product, Data et cybersécurité.",
    "a11y.skip": "Aller au CV",
    "a11y.home": "Retour au portfolio d’Abdel Arbaoui",
    "a11y.navigation": "Navigation principale",
    "a11y.mobileNavigation": "Navigation mobile",
    "a11y.contact": "Coordonnées",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.method": "Méthode",
    "nav.cv": "CV",
    "nav.resume": "CV · 2026",
    "cv.eyebrow": "Curriculum Vitae · 2026",
    "cv.role": "Customer Success Manager",
    "cv.profile": "Customer Success Manager avec une forte composante technique et commerciale, fort de 3 ans d’expérience dans des environnements B2B exigeants en cybersécurité — gestion de comptes grands groupes, d’interlocuteurs C-level et RSSI/CISO, et de déploiements techniques complexes.",
    "cv.downloadPdf": "Télécharger le PDF",
    "cv.downloadDocx": "Télécharger le DOCX",
    "cv.factExperience": "ans d’expérience B2B",
    "cv.factAccounts": "comptes grands groupes",
    "cv.factRetention": "de rétention",
    "footer.note": "CV en ligne · Version bilingue",
    "footer.back": "Retour au portfolio ↑"
  },
  en: {
    pageTitle: "Résumé — Abdelkader Arbaoui",
    pageDescription: "Abdelkader Arbaoui’s résumé — Customer Success Manager across Product, Data, and cybersecurity.",
    "a11y.skip": "Skip to résumé",
    "a11y.home": "Back to Abdel Arbaoui’s portfolio",
    "a11y.navigation": "Main navigation",
    "a11y.mobileNavigation": "Mobile navigation",
    "a11y.contact": "Contact details",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.method": "Method",
    "nav.cv": "Résumé",
    "nav.resume": "Résumé · 2026",
    "cv.eyebrow": "Curriculum Vitae · 2026",
    "cv.role": "Customer Success Manager",
    "cv.profile": "Customer Success Manager with a strong technical and commercial background built across 3 years in demanding B2B cybersecurity environments, managing enterprise accounts, C-level and CISO stakeholders, and complex technical deployments.",
    "cv.downloadPdf": "Download PDF",
    "cv.downloadDocx": "Download DOCX",
    "cv.factExperience": "years of B2B experience",
    "cv.factAccounts": "enterprise accounts",
    "cv.factRetention": "retention rate",
    "footer.note": "Online résumé · Bilingual version",
    "footer.back": "Back to portfolio ↑"
  }
};

const cvFiles = {
  fr: {
    docxHref: "assets/cv/CV_Abdelkader_Arbaoui_FR.docx",
    docxFilename: "CV_Abdelkader_Arbaoui_FR.docx",
    pdfHref: "assets/cv/CV_Abdelkader_Arbaoui_FR.pdf",
    pdfFilename: "CV_Abdelkader_Arbaoui_FR.pdf"
  },
  en: {
    docxHref: "assets/cv/CV_Abdelkader_Arbaoui_EN.docx",
    docxFilename: "CV_Abdelkader_Arbaoui_EN.docx",
    pdfHref: "assets/cv/CV_Abdelkader_Arbaoui_EN.pdf",
    pdfFilename: "CV_Abdelkader_Arbaoui_EN.pdf"
  }
};

const languageButtons = document.querySelectorAll("[data-language-toggle]");
const languageViews = document.querySelectorAll("[data-cv-view]");
const downloadButton = document.querySelector("[data-cv-download]");
const pdfButton = document.querySelector("[data-cv-pdf]");

let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "fr" || queryLanguage === "en") return queryLanguage;

  try {
    return localStorage.getItem("portfolioLanguage") === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function translate(key) {
  return translations[currentLanguage][key] || key;
}

function updatePortfolioLinks() {
  document.querySelectorAll("[data-portfolio-link]").forEach(link => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("lang", currentLanguage);
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "fr";
  document.documentElement.lang = currentLanguage;
  document.title = translations[currentLanguage].pageTitle;
  document.querySelector('meta[name="description"]').content = translations[currentLanguage].pageDescription;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });

  languageViews.forEach(view => {
    const isCurrentLanguage = view.dataset.cvView === currentLanguage;
    view.hidden = !isCurrentLanguage;
    view.setAttribute("aria-hidden", String(!isCurrentLanguage));
  });

  const nextLanguage = currentLanguage === "fr" ? "EN" : "FR";
  const languageLabel = currentLanguage === "fr"
    ? "Afficher le CV en anglais"
    : "Show the résumé in French";

  languageButtons.forEach(button => {
    button.textContent = nextLanguage;
    button.setAttribute("aria-label", languageLabel);
  });

  const file = cvFiles[currentLanguage];
  downloadButton.href = file.docxHref;
  downloadButton.setAttribute("download", file.docxFilename);
  pdfButton.href = file.pdfHref;
  pdfButton.setAttribute("download", file.pdfFilename);

  updatePortfolioLinks();

  try {
    localStorage.setItem("portfolioLanguage", currentLanguage);
  } catch {
    // The résumé remains usable when storage is unavailable.
  }
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(currentLanguage === "fr" ? "en" : "fr");
  });
});

window.addEventListener("storage", event => {
  if (
    event.key === "portfolioLanguage" &&
    ["fr", "en"].includes(event.newValue) &&
    event.newValue !== currentLanguage
  ) {
    setLanguage(event.newValue);
  }
});

document.querySelectorAll("[data-current-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});

setLanguage(currentLanguage);

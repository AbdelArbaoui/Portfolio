const translations = {
  fr: {
    pageTitle: "CV — Abdelkader Arbaoui",
    pageDescription: "CV d’Abdelkader Arbaoui — Customer Success Manager, Product, Data et cybersécurité.",
    "a11y.skip": "Aller au CV",
    "a11y.home": "Retour au portfolio d’Abdel Arbaoui",
    "a11y.navigation": "Navigation principale",
    "a11y.mobileNavigation": "Navigation mobile",
    "a11y.contact": "Coordonnées",
    "a11y.snapshot": "Indicateurs clés du profil",
    "a11y.focus": "Expertises principales",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.method": "Méthode",
    "nav.cv": "CV",
    "nav.resume": "CV · 2026",
    "cv.eyebrow": "Curriculum Vitae · 2026",
    "cv.role": "Customer Success Manager",
    "cv.profile": "Professionnel trilingue avec 3 ans d’expérience en relation client et développement commercial, spécialisé en Customer Success. J’utilise la donnée et l’automatisation pour soutenir l’adoption produit et l’expérience client.",
    "cv.downloadPdf": "Télécharger le PDF",
    "cv.downloadDocx": "Télécharger le DOCX",
    "cv.snapshotKicker": "Profil en bref",
    "cv.snapshotTitle": "Customer Success, cybersécurité et data.",
    "cv.snapshotLocation": "Paris · France",
    "cv.snapshotCs": "Customer Success B2B",
    "cv.snapshotCyber": "Cybersécurité",
    "cv.snapshotData": "Data & automatisation",
    "cv.factExperience": "ans d’expérience B2B",
    "cv.factAccounts": "comptes variés",
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
    "a11y.snapshot": "Key profile indicators",
    "a11y.focus": "Core areas of expertise",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.method": "Method",
    "nav.cv": "Résumé",
    "nav.resume": "Résumé · 2026",
    "cv.eyebrow": "Curriculum Vitae · 2026",
    "cv.role": "Customer Success Manager",
    "cv.profile": "Trilingual professional with 3 years of experience in customer-facing and commercial roles, focused on Customer Success. I use data and automation to support product adoption and customer experience.",
    "cv.downloadPdf": "Download PDF",
    "cv.downloadDocx": "Download DOCX",
    "cv.snapshotKicker": "Profile at a glance",
    "cv.snapshotTitle": "Customer Success, cybersecurity, and data.",
    "cv.snapshotLocation": "Paris · France",
    "cv.snapshotCs": "B2B Customer Success",
    "cv.snapshotCyber": "Cybersecurity",
    "cv.snapshotData": "Data & automation",
    "cv.factExperience": "years of B2B experience",
    "cv.factAccounts": "accounts of varied sizes",
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

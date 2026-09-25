const copy = {
  fr: {
    pageTitle: "Copilote AO · Étude de cas interactive",
    description: "Démonstration guidée de Copilote AO avec données fictives : veille, qualification et preuves.",
    topCaption: "Étude de cas interactive",
    sidebarKicker: "PARCOURS GUIDÉ",
    sidebarTitle: "D'un avis à une décision éclairée.",
    sidebarLead: "Explorez trois étapes d'un appel d'offres, sans compte ni connexion.",
    navWatch: "Veille", navWatchSub: "Repérer une opportunité",
    navQualify: "Qualification", navQualifySub: "Tester les critères",
    navEvidence: "Preuves & décision", navEvidenceSub: "Vérifier avant d'agir",
    sidebarFootnote: "Les avis et entreprises de cette démonstration sont fictifs. Aucune action n'est enregistrée ni transmise.",
    heroEyebrow: "COPILOTE AO / APPELS D'OFFRES BTP",
    heroTitle: "Démonstration guidée avec données fictives.",
    heroLead: "Sélectionnez un avis, ajustez les critères et examinez les preuves avant toute décision humaine.",
    statusTitle: "P0 vérifié en local et sur le projet test",
    statusText: "Publication publique bloquée · aucune soumission automatique",
    process1: "Sources", process1Sub: "BOAMP et TED en lecture",
    process2: "5 critères", process2Sub: "avec raison explicite",
    process3: "Humain", process3Sub: "validation obligatoire",
    watchStep: "ÉTAPE 01 / VEILLE", watchTitle: "Repérer les opportunités",
    watchLead: "Choisissez un avis fictif pour voir les informations affichées et les inconnues conservées.",
    fakeBadge: "DONNÉES FICTIVES", simulationBadge: "SIMULATION ILLUSTRATIVE",
    noticePreview: "APERÇU DE L'AVIS", factSource: "Source", factArea: "Zone",
    factAmount: "Montant", factDeadline: "Délai", watchUnknown: "Un champ non publié reste « inconnu » : le système ne le transforme jamais en fait.",
    goQualify: "Tester la qualification", selectedNotice: "AVIS SÉLECTIONNÉ", changeNotice: "Changer d'avis",
    qualifyStep: "ÉTAPE 02 / QUALIFICATION", qualifyTitle: "Tester les règles métier",
    qualifyLead: "Modifiez les cinq critères. Chaque résultat indique satisfait, non satisfait ou inconnu, avec sa raison.",
    criteriaTitle: "Critères de l'entreprise", criteriaText: "Les réglages agissent seulement sur cette démonstration.",
    minAmount: "Montant minimum", maxAmount: "Montant maximum", area: "Zone recherchée",
    minDays: "Délai minimum", excludedLot: "Lot exclu", zero: "0 €",
    fiveHundred: "500 000 €", oneMillion: "1 000 000 €", oneHalfMillion: "1 500 000 €", twoHalfMillion: "2 500 000 €",
    anyArea: "Toutes les zones", ileDeFrance: "Île-de-France", aura: "Auvergne-Rhône-Alpes",
    sevenDays: "7 jours", fifteenDays: "15 jours", thirtyDays: "30 jours",
    noExcludedLot: "Aucun", lotSecond: "Second œuvre", lotStructure: "Gros œuvre", lotElectric: "Électricité",
    provisionalVerdict: "LECTURE PROVISOIRE", verdictNote: "Ce classement illustratif n'est ni une recommandation définitive ni une candidature.",
    goEvidence: "Examiner les preuves", evidenceStep: "ÉTAPE 03 / PREUVES ET DÉCISION",
    evidenceTitle: "Vérifier avant de décider", evidenceLead: "Ouvrez les lignes de provenance, repérez les inconnues et voyez les contrôles humains requis.",
    proofTitle: "Provenance visible", proofSubtitle: "Une donnée connue doit pointer vers un passage de l'avis.",
    proofCaption: "Extraits inventés pour la démonstration. Aucun avis réel ni DCE client n'est chargé ici.",
    decisionKicker: "PORTE DE DÉCISION", decisionTitle: "L'humain garde la main.",
    decisionOneTitle: "Vérifier la source", decisionOneText: "Les champs inconnus et les extraits candidats demandent une lecture humaine.",
    decisionTwoTitle: "Décider go / no-go", decisionTwoText: "Une décision motivée est attribuée à une personne.",
    decisionThreeTitle: "Faire approuver", decisionThreeText: "L'approbateur doit être différent du décideur avant un export autorisé.",
    decisionWarning: "Aucun dépôt, envoi, signature ou paiement automatique. La release publique du produit reste bloquée.",
    limitsTitle: "État réel du produit",
    limitsText: "Le P0 est vérifié en local et sur un projet test. La recherche DCE textuelle renvoie des passages candidats ; le mode hybride et l'ingestion des documents ne sont pas disponibles. Aucune validation production ni release publique.",
    footerLeft: "Copilote AO · exploration de portfolio", footerRight: "Scénario pédagogique · aucune donnée réelle",
    noticeListLabel: "Avis de démonstration", stageNavLabel: "Étapes", sidebarLabel: "Parcours de démonstration",
    switchLanguage: "Afficher en anglais", unknown: "Inconnu", days: value => `${value} jours`,
    selected: "Avis sélectionné", select: "Explorer cet avis", satisfied: "Satisfait", failed: "Non satisfait", unknownState: "Inconnu",
    passCount: count => `${count}/5 satisfaits`, verdictPass: "À étudier", verdictFail: "Écarté selon les critères", verdictUnknown: "À vérifier",
    minPass: amount => `Montant publié égal ou supérieur au minimum de ${amount}.`,
    minFail: amount => `Montant publié inférieur au minimum de ${amount}.`,
    maxPass: amount => `Montant publié égal ou inférieur au maximum de ${amount}.`,
    maxFail: amount => `Montant publié supérieur au maximum de ${amount}.`,
    amountUnknown: "Aucun montant publié : le critère reste inconnu.",
    areaAny: "Aucune zone exclue par ce réglage.",
    areaPass: area => `La zone ${area} correspond au critère.`,
    areaFail: area => `La zone ${area} ne correspond pas au critère.`,
    daysPass: days => `Délai de réponse d'au moins ${days} jours.`,
    daysFail: days => `Délai de réponse inférieur à ${days} jours.`,
    lotAny: "Aucun lot exclu par ce réglage.",
    lotPass: "Le lot de l'avis n'est pas exclu.",
    lotFail: "Le lot de l'avis figure parmi les exclusions.",
    proofScope: "Objet de l'avis", proofArea: "Zone de travaux", proofAmount: "Montant annoncé", proofDeadline: "Délai de réponse",
    sampleExcerpt: "Extrait fictif de l'avis", absentExcerpt: "Aucun extrait disponible",
    absentAmount: "Aucun montant n'est publié dans cet avis fictif. Cette valeur reste inconnue et ne devient pas une preuve.",
    ariaSelected: title => `Avis sélectionné : ${title}`,
    ariaSelect: title => `Explorer l'avis : ${title}`,
    areas: { occitanie: "Occitanie", idf: "Île-de-France", aura: "Auvergne-Rhône-Alpes" },
    lots: { second: "Second œuvre", structure: "Gros œuvre", electric: "Électricité" }
  },
  en: {
    pageTitle: "Copilote AO · Interactive case study",
    description: "Guided Copilote AO demonstration with fictional data: tender discovery, qualification and evidence.",
    topCaption: "Interactive case study",
    sidebarKicker: "GUIDED JOURNEY",
    sidebarTitle: "From notice to informed decision.",
    sidebarLead: "Explore three tendering steps without an account or connection.",
    navWatch: "Discovery", navWatchSub: "Find an opportunity",
    navQualify: "Qualification", navQualifySub: "Test the criteria",
    navEvidence: "Evidence & decision", navEvidenceSub: "Check before acting",
    sidebarFootnote: "All notices and organizations in this demonstration are fictional. No action is stored or sent.",
    heroEyebrow: "COPILOTE AO / CONSTRUCTION TENDERING",
    heroTitle: "Guided demonstration with fictional data.",
    heroLead: "Select a notice, adjust the criteria and inspect the evidence before any human decision.",
    statusTitle: "P0 verified locally and on the test project",
    statusText: "Public release blocked · no automatic submission",
    process1: "Sources", process1Sub: "Read-only BOAMP and TED",
    process2: "5 criteria", process2Sub: "with explicit reasons",
    process3: "Human", process3Sub: "mandatory review",
    watchStep: "STEP 01 / DISCOVERY", watchTitle: "Find opportunities",
    watchLead: "Choose a fictional notice to inspect the available details and see what remains unknown.",
    fakeBadge: "FICTIONAL DATA", simulationBadge: "ILLUSTRATIVE SIMULATION",
    noticePreview: "NOTICE PREVIEW", factSource: "Source", factArea: "Area",
    factAmount: "Amount", factDeadline: "Deadline", watchUnknown: "An unpublished field stays “unknown”: the system never turns it into a fact.",
    goQualify: "Test qualification", selectedNotice: "SELECTED NOTICE", changeNotice: "Change notice",
    qualifyStep: "STEP 02 / QUALIFICATION", qualifyTitle: "Test the business rules",
    qualifyLead: "Change the five criteria. Each result is met, not met or unknown, with a reason.",
    criteriaTitle: "Company criteria", criteriaText: "Settings affect this demonstration only.",
    minAmount: "Minimum amount", maxAmount: "Maximum amount", area: "Target area",
    minDays: "Minimum lead time", excludedLot: "Excluded lot", zero: "€0",
    fiveHundred: "€500,000", oneMillion: "€1,000,000", oneHalfMillion: "€1,500,000", twoHalfMillion: "€2,500,000",
    anyArea: "Any area", ileDeFrance: "Île-de-France", aura: "Auvergne-Rhône-Alpes",
    sevenDays: "7 days", fifteenDays: "15 days", thirtyDays: "30 days",
    noExcludedLot: "None", lotSecond: "Finishing works", lotStructure: "Structural works", lotElectric: "Electrical works",
    provisionalVerdict: "PROVISIONAL READING", verdictNote: "This illustrative classification is neither a final recommendation nor an application.",
    goEvidence: "Inspect the evidence", evidenceStep: "STEP 03 / EVIDENCE AND DECISION",
    evidenceTitle: "Check before deciding", evidenceLead: "Open the provenance lines, spot unknowns and review the required human controls.",
    proofTitle: "Visible provenance", proofSubtitle: "A known value must point to a passage in the notice.",
    proofCaption: "Excerpts are invented for this demonstration. No real notice or client tender document is loaded here.",
    decisionKicker: "DECISION GATE", decisionTitle: "Humans stay in control.",
    decisionOneTitle: "Check the source", decisionOneText: "Unknown fields and candidate excerpts require human review.",
    decisionTwoTitle: "Make a go / no-go decision", decisionTwoText: "A reasoned decision is attributed to a person.",
    decisionThreeTitle: "Obtain approval", decisionThreeText: "The approver must differ from the decision maker before an authorized export.",
    decisionWarning: "No automatic filing, sending, signing or payment. The product's public release remains blocked.",
    limitsTitle: "Actual product status",
    limitsText: "P0 is verified locally and on a test project. Text DCE search returns candidate passages; hybrid mode and document ingestion are unavailable. No production validation or public release.",
    footerLeft: "Copilote AO · portfolio exploration", footerRight: "Educational scenario · no real data",
    noticeListLabel: "Demonstration notices", stageNavLabel: "Steps", sidebarLabel: "Demonstration journey",
    switchLanguage: "Afficher en français", unknown: "Unknown", days: value => `${value} days`,
    selected: "Selected notice", select: "Explore this notice", satisfied: "Met", failed: "Not met", unknownState: "Unknown",
    passCount: count => `${count}/5 met`, verdictPass: "Worth reviewing", verdictFail: "Excluded by these criteria", verdictUnknown: "Needs review",
    minPass: amount => `Published amount meets or exceeds the ${amount} minimum.`,
    minFail: amount => `Published amount is below the ${amount} minimum.`,
    maxPass: amount => `Published amount does not exceed the ${amount} maximum.`,
    maxFail: amount => `Published amount is above the ${amount} maximum.`,
    amountUnknown: "No published amount: this criterion remains unknown.",
    areaAny: "No area is excluded by this setting.",
    areaPass: area => `The ${area} area matches the criterion.`,
    areaFail: area => `The ${area} area does not match the criterion.`,
    daysPass: days => `Response window is at least ${days} days.`,
    daysFail: days => `Response window is shorter than ${days} days.`,
    lotAny: "No lot is excluded by this setting.",
    lotPass: "This notice's lot is not excluded.",
    lotFail: "This notice's lot is excluded.",
    proofScope: "Notice subject", proofArea: "Work area", proofAmount: "Published amount", proofDeadline: "Response window",
    sampleExcerpt: "Fictional notice excerpt", absentExcerpt: "No excerpt available",
    absentAmount: "This fictional notice publishes no amount. The value remains unknown and cannot become evidence.",
    ariaSelected: title => `Selected notice: ${title}`,
    ariaSelect: title => `Explore notice: ${title}`,
    areas: { occitanie: "Occitanie", idf: "Île-de-France", aura: "Auvergne-Rhône-Alpes" },
    lots: { second: "Finishing works", structure: "Structural works", electric: "Electrical works" }
  }
};

const notices = [
  {
    id: "DEMO-001", source: "BOAMP", area: "occitanie", amount: 880000, days: 21, lot: "second",
    fr: {
      title: "Réhabilitation du gymnase des Tilleuls",
      description: "Travaux intérieurs et remise aux normes d'un équipement sportif communal.",
      excerpts: {
        scope: "Le lot porte sur la réhabilitation intérieure du gymnase des Tilleuls.",
        area: "Lieu d'exécution : Occitanie.",
        amount: "Montant estimé du lot : 880 000 €.",
        deadline: "Les réponses sont attendues dans un délai de 21 jours."
      }
    },
    en: {
      title: "Tilleuls sports hall refurbishment",
      description: "Interior works and compliance upgrades for a fictional municipal sports facility.",
      excerpts: {
        scope: "The lot covers interior refurbishment of the Tilleuls sports hall.",
        area: "Place of performance: Occitanie.",
        amount: "Estimated lot value: €880,000.",
        deadline: "Responses are due within 21 days."
      }
    }
  },
  {
    id: "DEMO-002", source: "TED", area: "idf", amount: null, days: 45, lot: "structure",
    fr: {
      title: "Extension d'une école communale",
      description: "Création d'une aile supplémentaire et adaptation des accès pour un établissement fictif.",
      excerpts: {
        scope: "Le marché concerne l'extension d'une école communale et ses accès.",
        area: "Lieu d'exécution : Île-de-France.",
        amount: null,
        deadline: "Délai de remise des offres : 45 jours."
      }
    },
    en: {
      title: "Municipal school extension",
      description: "A new wing and accessible entrance works for a fictional school.",
      excerpts: {
        scope: "The contract covers a municipal school extension and its entrances.",
        area: "Place of performance: Île-de-France.",
        amount: null,
        deadline: "Time allowed for tenders: 45 days."
      }
    }
  },
  {
    id: "DEMO-003", source: "BOAMP", area: "aura", amount: 2100000, days: 12, lot: "electric",
    fr: {
      title: "Modernisation de bâtiments publics",
      description: "Rénovation des installations électriques de trois bâtiments publics fictifs.",
      excerpts: {
        scope: "Le lot électricité concerne la modernisation de trois bâtiments publics.",
        area: "Lieu d'exécution : Auvergne-Rhône-Alpes.",
        amount: "Montant estimé du lot : 2 100 000 €.",
        deadline: "Les offres doivent être remises sous 12 jours."
      }
    },
    en: {
      title: "Public buildings modernization",
      description: "Electrical systems refurbishment in three fictional public buildings.",
      excerpts: {
        scope: "The electrical lot modernizes three public buildings.",
        area: "Place of performance: Auvergne-Rhône-Alpes.",
        amount: "Estimated lot value: €2,100,000.",
        deadline: "Tenders must be submitted within 12 days."
      }
    }
  }
];

const stageNames = ["watch", "qualify", "evidence"];
const params = new URLSearchParams(window.location.search);
let language = params.get("lang") === "en" ? "en" : "fr";
let selectedNotice = notices[0];
let stage = stageNames.includes(params.get("step")) ? params.get("step") : "watch";

function value(key) { return copy[language][key]; }
function localized(notice) { return notice[language]; }
function money(amount) {
  return amount == null ? value("unknown") : new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-GB", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0
  }).format(amount);
}
function node(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}
function byId(id) { return document.getElementById(id); }

function updateUrl() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    url.searchParams.set("step", stage);
    window.history.replaceState(null, "", url);
  } catch {
    // The case study still works when embedded in a restrictive document context.
  }
}

function renderNoticeList() {
  const cards = notices.map(notice => {
    const isSelected = selectedNotice.id === notice.id;
    const button = node("button", `notice-card${isSelected ? " is-selected" : ""}`);
    button.type = "button";
    button.setAttribute("aria-pressed", String(isSelected));
    button.setAttribute("aria-label", isSelected ? value("ariaSelected")(localized(notice).title) : value("ariaSelect")(localized(notice).title));
    const top = node("span", "notice-card-top");
    top.append(node("span", "", notice.source), node("span", "", notice.id));
    const bottom = node("span", "notice-card-bottom");
    bottom.append(node("span", "", value("areas")[notice.area]), node("span", "", money(notice.amount)));
    button.append(top, node("strong", "", localized(notice).title), bottom);
    button.addEventListener("click", () => {
      selectedNotice = notice;
      renderNoticeList();
      renderNoticeDetails();
      renderQualification();
      renderEvidence();
    });
    return button;
  });
  byId("notice-list").replaceChildren(...cards);
}

function renderNoticeDetails() {
  const notice = selectedNotice;
  byId("notice-id").textContent = notice.id;
  byId("notice-title").textContent = localized(notice).title;
  byId("notice-description").textContent = localized(notice).description;
  byId("notice-source").textContent = notice.source;
  byId("notice-area").textContent = value("areas")[notice.area];
  byId("notice-amount").textContent = money(notice.amount);
  byId("notice-deadline").textContent = value("days")(notice.days);
  byId("qualify-notice-title").textContent = localized(notice).title;
  byId("evidence-notice-title").textContent = localized(notice).title;
}

function evaluateCriteria() {
  const notice = selectedNotice;
  const min = Number(byId("min-amount").value);
  const max = Number(byId("max-amount").value);
  const area = byId("area").value;
  const minDays = Number(byId("min-days").value);
  const excludedLot = byId("excluded-lot").value;
  const amountKnown = notice.amount != null;
  const minPass = amountKnown && notice.amount >= min;
  const maxPass = amountKnown && notice.amount <= max;
  const areaPass = area === "any" || notice.area === area;
  const daysPass = notice.days >= minDays;
  const lotPass = excludedLot === "none" || notice.lot !== excludedLot;
  return [
    { label: value("minAmount"), status: amountKnown ? (minPass ? "pass" : "fail") : "unknown", reason: amountKnown ? value(minPass ? "minPass" : "minFail")(money(min)) : value("amountUnknown") },
    { label: value("maxAmount"), status: amountKnown ? (maxPass ? "pass" : "fail") : "unknown", reason: amountKnown ? value(maxPass ? "maxPass" : "maxFail")(money(max)) : value("amountUnknown") },
    { label: value("area"), status: areaPass ? "pass" : "fail", reason: area === "any" ? value("areaAny") : value(areaPass ? "areaPass" : "areaFail")(value("areas")[notice.area]) },
    { label: value("minDays"), status: daysPass ? "pass" : "fail", reason: value(daysPass ? "daysPass" : "daysFail")(minDays) },
    { label: value("excludedLot"), status: lotPass ? "pass" : "fail", reason: excludedLot === "none" ? value("lotAny") : value(lotPass ? "lotPass" : "lotFail") }
  ];
}

function renderQualification() {
  const results = evaluateCriteria();
  const verdict = results.some(result => result.status === "fail") ? "fail" : results.some(result => result.status === "unknown") ? "unknown" : "pass";
  const verdictElement = byId("verdict");
  verdictElement.className = `verdict ${verdict}`;
  verdictElement.textContent = value(verdict === "pass" ? "verdictPass" : verdict === "fail" ? "verdictFail" : "verdictUnknown");
  byId("result-counter").textContent = value("passCount")(results.filter(result => result.status === "pass").length);
  const rows = results.map(result => {
    const row = node("div", "criterion");
    const left = node("div");
    left.append(node("strong", "", result.label), node("span", "reason", result.reason));
    const statusKey = result.status === "pass" ? "satisfied" : result.status === "fail" ? "failed" : "unknownState";
    row.append(left, node("div", `state ${result.status}`, value(statusKey)));
    return row;
  });
  byId("criteria-results").replaceChildren(...rows);
}

function renderEvidence() {
  const excerpt = localized(selectedNotice).excerpts;
  const fields = [
    ["proofScope", excerpt.scope],
    ["proofArea", excerpt.area],
    ["proofAmount", excerpt.amount],
    ["proofDeadline", excerpt.deadline]
  ];
  const items = fields.map(([labelKey, quotation]) => {
    const detail = node("details", "evidence-item");
    const summary = node("summary");
    const title = node("span");
    title.append(node("strong", "", value(labelKey)), node("small", "", quotation ? value("sampleExcerpt") : value("absentExcerpt")));
    summary.append(title, node("span", "", "+"));
    detail.append(summary);
    if (quotation) detail.append(node("blockquote", "", `“${quotation}”`));
    else detail.append(node("p", "missing-proof", value("absentAmount")));
    return detail;
  });
  byId("evidence-list").replaceChildren(...items);
}

function renderStaticText() {
  document.documentElement.lang = language;
  document.title = value("pageTitle");
  document.querySelector('meta[name="description"]').content = value("description");
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = value(element.dataset.i18n);
  });
  byId("language-button").textContent = language === "fr" ? "EN" : "FR";
  byId("language-button").setAttribute("aria-label", value("switchLanguage"));
  document.querySelector(".sidebar").setAttribute("aria-label", value("sidebarLabel"));
  document.querySelector(".stage-nav").setAttribute("aria-label", value("stageNavLabel"));
  byId("notice-list").setAttribute("aria-label", value("noticeListLabel"));
}

function setLanguage(next, tellParent = false) {
  if (!copy[next]) return;
  language = next;
  renderStaticText();
  renderNoticeList();
  renderNoticeDetails();
  renderQualification();
  renderEvidence();
  updateUrl();
  if (tellParent && window.parent !== window) {
    window.parent.postMessage({ type: "portfolio-language", language }, window.location.origin === "null" ? "*" : window.location.origin);
  }
}

function setStage(next, moveViewport = false) {
  if (!stageNames.includes(next)) return;
  stage = next;
  document.querySelectorAll("[data-stage]").forEach(button => {
    const active = button.dataset.stage === stage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-panel]").forEach(panel => {
    panel.hidden = panel.dataset.panel !== stage;
  });
  updateUrl();
  if (moveViewport) {
    document.querySelector(`[data-panel="${stage}"]`).scrollIntoView({ block: "start" });
  }
}

document.querySelectorAll("[data-stage]").forEach(button => button.addEventListener("click", () => setStage(button.dataset.stage, true)));
document.querySelectorAll("[data-next]").forEach(button => button.addEventListener("click", () => setStage(button.dataset.next, true)));
byId("criteria-form").addEventListener("change", renderQualification);
byId("criteria-form").addEventListener("submit", event => event.preventDefault());
byId("language-button").addEventListener("click", () => setLanguage(language === "fr" ? "en" : "fr", true));
window.addEventListener("message", event => {
  if (event.source !== window.parent || event.data?.type !== "portfolio-language") return;
  if (event.origin !== window.location.origin) return;
  if ((event.data.language === "fr" || event.data.language === "en") && event.data.language !== language) {
    setLanguage(event.data.language);
  }
});

setLanguage(language);
setStage(stage);

"use strict";

// This public case study only uses the fictional constants below. It never contacts Candidate.
const copy = {
  fr: {
    pageTitle: "Candidate — démonstration guidée",
    description: "Candidate — démonstration guidée avec données fictives d'un tableau de bord local de candidatures.",
    skip: "Aller au contenu", notice: "Démonstration guidée avec données fictives · Aucune connexion au vault local",
    brand: "Tableau de bord local", explore: "EXPLORER", navAria: "Sections de la démonstration",
    localTitle: "Application réelle : sur le Mac", localText: "Cette page publique illustre ses parcours. Vos dossiers ne sont pas chargés ici.",
    kicker: "PARCOURS INTERACTIF", privacy: "Données fictives", footerLeft: "Candidate · aperçu public autonome",
    footerRight: "Aucun envoi, email ou run ATS/CV depuis cette démo", langToggle: "Afficher en anglais",
    navDashboard: "Vue d'ensemble", navOffers: "Offres", navPipeline: "Pipeline", navCalendar: "Calendrier", navDocuments: "CV & documents",
    dashKicker: "01 / PILOTER", dashTitle: "Un seul endroit pour suivre le parcours.",
    dashIntro: "Vue guidée du cockpit Candidate. Les chiffres et dossiers ci-dessous sont des exemples inventés pour explorer l'interface.",
    heroTitle: "Les candidatures avancent. Le contexte reste visible.",
    heroText: "La vraie application lit les dossiers et le journal locaux, rapproche les pièces et montre les prochaines décisions dans un tableau de bord.",
    exploreOffers: "Explorer les offres", viewPipeline: "Voir le pipeline", sampleJourney: "PARCOURS ILLUSTRATIF",
    sampleProgress: "4 étapes visibles", sampleProgressSub: "Offre → suivi → date → documents", overview: "Vue guidée", nextStep: "Étape suivante",
    statTracked: "Dossiers suivis", statTrackedNote: "exemple uniquement", statSent: "Envois datés", statSentNote: "dates confirmées dans la démo",
    statReplies: "Retours visibles", statRepliesNote: "sans prédiction de résultat", statOffers: "Offres en veille", statOffersNote: "dans les quatre vues",
    activityTitle: "Activité illustrative", activitySub: "Envois sur 14 jours · données fictives", activityStart: "J − 13", activityEnd: "Aujourd'hui",
    priorityTitle: "Points à traiter", prioritySub: "Sélectionnez une ligne pour explorer", priorityOne: "Examiner une offre junior", priorityOneSub: "Comparer les critères avant de retenir",
    priorityTwo: "Consulter une candidature", priorityTwoSub: "Statut et pièces dans le même contexte", priorityThree: "Voir les dates enregistrées", priorityThreeSub: "Pas d'échéance inventée",
    scopeTitle: "Ce que montre cette démonstration", scopeText: "Les parcours reflètent Candidate : veille, suivi, calendrier et aperçu de pièces. Les noms, chiffres, textes et statuts présentés ici sont fictifs. Le produit réel reste une application locale.",
    offersKicker: "02 / VEILLE EMPLOI", offersTitle: "Une veille lisible, du tri à la décision.",
    offersIntro: "Parcourez les quatre catégories, ouvrez une offre et essayez un triage simulé. Rien n'est enregistré en dehors de cette page.",
    offersAll: "Toutes", offersJunior: "Junior", offersReview: "Niveau à vérifier", offersSenior: "Seniors", offersHistory: "Historique",
    searchPlaceholder: "Rechercher une offre…", searchAria: "Rechercher une offre", searchButton: "Chercher", clearSearch: "Effacer",
    offersList: "Offres fictives", offersCount: "offre(s)", offersNoResult: "Aucune offre dans ce filtre.", offerExample: "EXEMPLE FICTIF",
    offerLocation: "Localisation", offerLevel: "Classement", offerSource: "Source affichée", offerSourceValue: "Veille locale illustrée",
    offerReason: "Pourquoi l'examiner", offerStatus: "Triage dans la démo", offerUntriaged: "Non triée", offerKept: "Retenue (démo)", offerDiscarded: "Écartée (démo)",
    keep: "Retenir dans la démo", discard: "Écarter dans la démo", resetTriage: "Réinitialiser",
    triageNote: "Ce clic modifie seulement l'aperçu en mémoire. La vraie application délègue le triage explicite au writer de la veille.",
    actionsTitle: "ATS / CV indisponibles dans cette démo", actionsNote: "Dans Candidate, les workers ATS/CV sont désactivés par défaut. Cette page ne peut lancer ni analyse, ni génération de CV, ni candidature.",
    ats: "ATS", cv: "CV", atsCv: "ATS puis CV", keptToast: "Offre retenue dans cette démo uniquement.", discardedToast: "Offre écartée dans cette démo uniquement.", resetToast: "Triage de démonstration réinitialisé.",
    pipelineKicker: "03 / SUIVI", pipelineTitle: "Du dossier préparé au retour reçu.",
    pipelineIntro: "Le kanban est une vue secondaire du suivi. Sélectionnez un dossier pour voir son statut et accéder à son aperçu documentaire.",
    stagePrep: "Préparation", stageSent: "Envoyée", stageInterview: "Entretien", stageReply: "Retour reçu",
    pipelineDetail: "DOSSIER SÉLECTIONNÉ", pipelineDate: "Date d'envoi confirmée", pipelineNoDate: "Aucune date d'envoi enregistrée", seeDocuments: "Voir les documents",
    pipelineFlow: "Lecture du vault", pipelineFlow2: "Rapprochement", pipelineFlow3: "Suivi explicite", pipelineFlow4: "Aucun envoi automatique",
    calendarKicker: "04 / DATES", calendarTitle: "Les dates confirmées, sans fausse urgence.",
    calendarIntro: "Le calendrier réel s'appuie sur les dates de candidature enregistrées. Naviguez entre les mois et ouvrez un exemple depuis l'agenda.",
    today: "Aujourd'hui", previousMonth: "Mois précédent", nextMonth: "Mois suivant", eventsOn: "Dossiers à cette date", noEvents: "Aucun envoi enregistré à cette date.",
    calendarNote: "Cette démo présente uniquement des dates fictives d'envoi. Candidate n'invente pas de relance ni d'échéance.",
    weekdays: ["L", "M", "M", "J", "V", "S", "D"],
    docsKicker: "05 / PIÈCES", docsTitle: "Le CV et les preuves restent liés au dossier.",
    docsIntro: "Sélectionnez une pièce. L'aperçu ci-dessous est entièrement inventé ; la vraie application résout les fichiers locaux sans choix silencieux en cas d'ambiguïté.",
    dossier: "Dossier exemple", docCv: "CV généré", docJob: "Fiche de poste", docAts: "Analyse ATS", docPreview: "APERÇU FICTIF", readOnly: "Lecture seule · démo publique",
    cvHeadline: "Profil exemple · Customer Success", cvSummary: "Professionnel B2B fictif, orienté accompagnement client, adoption et coordination d'équipes.",
    cvExperience: "Expérience", cvExpOne: "Accompagnement d'un portefeuille client et suivi de l'adoption produit.", cvExpTwo: "Animation de points de suivi avec les équipes internes.",
    cvSkills: "Compétences", cvSkillsText: "Relation client · Coordination · Analyse de besoins · Documentation",
    jobHeadline: "Exemple de fiche de poste", jobIntro: "Une équipe recherche une personne pour suivre l'adoption d'une solution B2B et structurer la relation client.",
    jobTasks: "Missions illustratives", jobTaskOne: "Accompagner les nouveaux comptes dans leurs premières étapes.", jobTaskTwo: "Identifier les besoins et partager les retours avec le produit.",
    docCaption: "Document factice composé pour ce portfolio. Aucun CV, offre ou résultat ATS réel n'est publié ici.",
    atsSample: "Exemple de structure d'analyse", atsStatus: "simulation", atsNote: "Aucun score ATS réel. La vraie analyse exige l'offre et sa provenance exacte.",
    openDocsToast: "Aperçu documentaire du dossier sélectionné.", monthOffsetA11y: "Jour du calendrier"
  },
  en: {
    pageTitle: "Candidate — guided demo",
    description: "Candidate — guided demo of a local application tracker with fictional data.",
    skip: "Skip to content", notice: "Guided demo with fictional data · No connection to the local vault",
    brand: "Local application dashboard", explore: "EXPLORE", navAria: "Demo sections",
    localTitle: "Real app: on the Mac", localText: "This public page illustrates its workflows. Your folders are not loaded here.",
    kicker: "INTERACTIVE WALKTHROUGH", privacy: "Fictional data", footerLeft: "Candidate · standalone public preview",
    footerRight: "No submission, email or ATS/CV run from this demo", langToggle: "Afficher en français",
    navDashboard: "Overview", navOffers: "Jobs", navPipeline: "Pipeline", navCalendar: "Calendar", navDocuments: "CV & documents",
    dashKicker: "01 / OVERVIEW", dashTitle: "One place to follow the whole journey.",
    dashIntro: "A guided view of the Candidate cockpit. All figures and folders below were invented to explore the interface.",
    heroTitle: "Applications move forward. Context stays visible.",
    heroText: "The real app reads local folders and the tracking log, matches documents, and shows the next decisions in a dashboard.",
    exploreOffers: "Explore jobs", viewPipeline: "View the pipeline", sampleJourney: "ILLUSTRATIVE JOURNEY",
    sampleProgress: "4 visible stages", sampleProgressSub: "Job → tracking → date → documents", overview: "Guided view", nextStep: "Next step",
    statTracked: "Tracked folders", statTrackedNote: "example only", statSent: "Dated applications", statSentNote: "confirmed dates in the demo",
    statReplies: "Visible responses", statRepliesNote: "without predicting outcomes", statOffers: "Jobs in review", statOffersNote: "across four views",
    activityTitle: "Illustrative activity", activitySub: "Applications over 14 days · fictional data", activityStart: "Day − 13", activityEnd: "Today",
    priorityTitle: "Things to review", prioritySub: "Select a row to explore", priorityOne: "Review a junior job", priorityOneSub: "Compare requirements before retaining",
    priorityTwo: "Open an application", priorityTwoSub: "Status and files in one context", priorityThree: "See recorded dates", priorityThreeSub: "No invented deadlines",
    scopeTitle: "What this demo shows", scopeText: "These flows reflect Candidate: job review, tracking, calendar and document previews. Names, figures, text and statuses here are fictional. The real product remains a local app.",
    offersKicker: "02 / JOB REVIEW", offersTitle: "A clear path from triage to decision.",
    offersIntro: "Browse four categories, open a job and try a simulated triage. Nothing is saved outside this page.",
    offersAll: "All", offersJunior: "Junior", offersReview: "Level to verify", offersSenior: "Senior", offersHistory: "History",
    searchPlaceholder: "Search a job…", searchAria: "Search a job", searchButton: "Search", clearSearch: "Clear",
    offersList: "Fictional jobs", offersCount: "job(s)", offersNoResult: "No jobs match this filter.", offerExample: "FICTIONAL EXAMPLE",
    offerLocation: "Location", offerLevel: "Category", offerSource: "Displayed source", offerSourceValue: "Illustrative local review",
    offerReason: "Why review it", offerStatus: "Demo triage", offerUntriaged: "Not triaged", offerKept: "Retained (demo)", offerDiscarded: "Discarded (demo)",
    keep: "Retain in demo", discard: "Discard in demo", resetTriage: "Reset",
    triageNote: "This click only changes the preview in memory. The real app delegates explicit triage to the job review writer.",
    actionsTitle: "ATS / CV unavailable in this demo", actionsNote: "In Candidate, ATS/CV workers are disabled by default. This page cannot run an analysis, generate a CV or submit an application.",
    ats: "ATS", cv: "CV", atsCv: "ATS then CV", keptToast: "Job retained in this demo only.", discardedToast: "Job discarded in this demo only.", resetToast: "Demo triage reset.",
    pipelineKicker: "03 / TRACKING", pipelineTitle: "From preparation to a response.",
    pipelineIntro: "The kanban is a secondary view of the tracking log. Select a folder to see its status and open a document preview.",
    stagePrep: "Preparing", stageSent: "Sent", stageInterview: "Interview", stageReply: "Response received",
    pipelineDetail: "SELECTED FOLDER", pipelineDate: "Confirmed application date", pipelineNoDate: "No application date recorded", seeDocuments: "View documents",
    pipelineFlow: "Read the vault", pipelineFlow2: "Match files", pipelineFlow3: "Explicit tracking", pipelineFlow4: "No automatic submission",
    calendarKicker: "04 / DATES", calendarTitle: "Confirmed dates, without false urgency.",
    calendarIntro: "The real calendar uses recorded application dates. Move between months and open an example from the agenda.",
    today: "Today", previousMonth: "Previous month", nextMonth: "Next month", eventsOn: "Folders on this date", noEvents: "No recorded application on this date.",
    calendarNote: "This demo only shows fictional application dates. Candidate does not invent follow-ups or deadlines.",
    weekdays: ["M", "T", "W", "T", "F", "S", "S"],
    docsKicker: "05 / FILES", docsTitle: "CV and evidence stay tied to the folder.",
    docsIntro: "Select a file. The preview below is entirely invented; the real app resolves local files without silently choosing when there is ambiguity.",
    dossier: "Example folder", docCv: "Generated CV", docJob: "Job description", docAts: "ATS analysis", docPreview: "FICTIONAL PREVIEW", readOnly: "Read only · public demo",
    cvHeadline: "Example profile · Customer Success", cvSummary: "Fictional B2B professional focused on customer guidance, adoption and team coordination.",
    cvExperience: "Experience", cvExpOne: "Guided a client portfolio and followed product adoption.", cvExpTwo: "Led follow-up conversations with internal teams.",
    cvSkills: "Skills", cvSkillsText: "Customer relationships · Coordination · Needs analysis · Documentation",
    jobHeadline: "Sample job description", jobIntro: "A team is looking for someone to support adoption of a B2B product and structure the customer relationship.",
    jobTasks: "Illustrative responsibilities", jobTaskOne: "Support new accounts through their first steps.", jobTaskTwo: "Identify needs and share feedback with the product team.",
    docCaption: "Mock document written for this portfolio. No real CV, job posting or ATS result is published here.",
    atsSample: "Sample analysis structure", atsStatus: "simulation", atsNote: "No real ATS score. Actual analysis requires the exact job and its provenance.",
    openDocsToast: "Document preview for the selected folder.", monthOffsetA11y: "Calendar day"
  }
};

const jobs = [
  {id:"j1",category:"junior",company:"Atelier Aster",title:{fr:"Customer Success Manager",en:"Customer Success Manager"},location:{fr:"Paris · hybride",en:"Paris · hybrid"},reason:{fr:"Accompagnement client et adoption d'un outil B2B.",en:"Customer guidance and adoption of a B2B product."}},
  {id:"j2",category:"junior",company:"Noro Cloud",title:{fr:"Chargé·e de compte",en:"Account Manager"},location:{fr:"Lyon · télétravail",en:"Lyon · remote"},reason:{fr:"Portefeuille, coordination et revues de comptes.",en:"Portfolio management, coordination and account reviews."}},
  {id:"j3",category:"review",company:"Studio Helio",title:{fr:"Responsable onboarding",en:"Onboarding Lead"},location:{fr:"Bordeaux · hybride",en:"Bordeaux · hybrid"},reason:{fr:"Vérifier le niveau d'autonomie et le périmètre attendu.",en:"Check the expected autonomy and scope."}},
  {id:"j4",category:"senior",company:"Maison Arco",title:{fr:"Senior Customer Success",en:"Senior Customer Success"},location:{fr:"Paris · sur site",en:"Paris · on site"},reason:{fr:"Exigence d'expérience à comparer au profil.",en:"Compare seniority requirement with the profile."}},
  {id:"j5",category:"history",company:"Collectif Luma",title:{fr:"CS Operations",en:"CS Operations"},location:{fr:"Nantes · hybride",en:"Nantes · hybrid"},reason:{fr:"Offre conservée pour référence et comparaison.",en:"Archived for reference and comparison."}}
];

const applications = [
  {id:"a1",company:"Atelier Aster",role:{fr:"Customer Success Manager",en:"Customer Success Manager"},stage:"prep",date:null},
  {id:"a2",company:"Noro Cloud",role:{fr:"Chargé·e de compte",en:"Account Manager"},stage:"sent",date:"2026-09-05"},
  {id:"a3",company:"Studio Helio",role:{fr:"Responsable onboarding",en:"Onboarding Lead"},stage:"interview",date:"2026-09-12"},
  {id:"a4",company:"Maison Arco",role:{fr:"Customer Success",en:"Customer Success"},stage:"sent",date:"2026-09-18"},
  {id:"a5",company:"Collectif Luma",role:{fr:"CS Operations",en:"CS Operations"},stage:"reply",date:"2026-09-02"},
  {id:"a6",company:"Espace Sora",role:{fr:"Customer Support",en:"Customer Support"},stage:"prep",date:null}
];

const viewMeta = {
  dashboard:{nav:"navDashboard",icon:"◫"},offers:{nav:"navOffers",icon:"⌁"},pipeline:{nav:"navPipeline",icon:"▥"},
  calendar:{nav:"navCalendar",icon:"▦"},documents:{nav:"navDocuments",icon:"▤"}
};
const stageMeta = {prep:"stagePrep",sent:"stageSent",interview:"stageInterview",reply:"stageReply"};
const categoryMeta = {junior:"offersJunior",review:"offersReview",senior:"offersSenior",history:"offersHistory"};
const state = {lang:getInitialLanguage(),view:getHashView(),offerFilter:"all",offerSearch:"",selectedOffer:"j1",selectedApplication:"a1",monthOffset:0,selectedDate:"2026-09-18",documentTab:"cv",triage:Object.create(null)};
let toastTimer;

function t(key){return copy[state.lang][key] ?? key;}
function esc(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);}
function getInitialLanguage(){const value=new URLSearchParams(location.search).get("lang");return value==="en"?"en":"fr";}
function getHashView(){const value=location.hash.slice(1);return Object.hasOwn(viewMeta,value)?value:"dashboard";}
function formatDate(value,options={day:"numeric",month:"long",year:"numeric"}){return new Intl.DateTimeFormat(state.lang==="fr"?"fr-FR":"en-GB",options).format(new Date(`${value}T12:00:00`));}
function heading(kicker,title,intro,action=""){return `<header class="view-heading"><div><span class="section-kicker">${t(kicker)}</span><h2>${t(title)}</h2><p>${t(intro)}</p></div>${action}</header>`;}
function badge(label,kind=""){return `<span class="tag ${kind?`tag--${kind}`:""}">${esc(label)}</span>`;}
function findApp(id){return applications.find(item=>item.id===id)||applications[0];}
function findJob(id){return jobs.find(item=>item.id===id)||jobs[0];}
function showToast(message){const element=document.getElementById("toast");element.textContent=message;element.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{element.hidden=true;},3100);}

function renderShell(){
  document.documentElement.lang=state.lang;
  document.title=t("pageTitle");
  document.querySelector('meta[name="description"]').content=t("description");
  const ids={"skip-link":"skip","demo-notice":"notice","brand-tagline":"brand","nav-caption":"explore","sidebar-note-title":"localTitle","sidebar-note-text":"localText","top-kicker":"kicker","top-title":viewMeta[state.view].nav,"privacy-label":"privacy","footer-left":"footerLeft","footer-right":"footerRight"};
  for(const [id,key] of Object.entries(ids))document.getElementById(id).textContent=t(key);
  document.getElementById("sidebar").setAttribute("aria-label",t("navAria"));
  document.getElementById("nav").setAttribute("aria-label",t("navAria"));
  const langButton=document.getElementById("lang-toggle");langButton.textContent=state.lang==="fr"?"EN":"FR";langButton.setAttribute("aria-label",t("langToggle"));
  document.getElementById("nav").innerHTML=Object.entries(viewMeta).map(([view,meta])=>`<button class="nav-link" type="button" data-view="${view}" ${state.view===view?'aria-current="page"':''}><span class="nav-link__icon" aria-hidden="true">${meta.icon}</span><span>${t(meta.nav)}</span>${view==="offers"?'<span class="nav-link__count">05</span>':""}</button>`).join("");
}

function renderDashboard(){
  const activity=[20,35,22,46,70,43,60,31,76,55,82,52,68,91];
  return `${heading("dashKicker","dashTitle","dashIntro")}
    <section class="hero-panel"><div><span class="section-kicker">${t("overview")}</span><h2>${t("heroTitle")}</h2><p>${t("heroText")}</p><div class="hero-panel__actions"><button type="button" class="action" data-view="offers">${t("exploreOffers")} <span aria-hidden="true">→</span></button><button type="button" class="ghost-button" data-view="pipeline">${t("viewPipeline")}</button></div></div><div class="hero-panel__signal"><small>${t("sampleJourney")}</small><strong>${t("sampleProgress")}</strong><div class="signal-track"><span></span></div><div class="signal-foot"><span>${t("sampleProgressSub")}</span><span>04 / 04</span></div></div></section>
    <div class="kpi-grid">${[
      ["statTracked","statTrackedNote","06","▣"],["statSent","statSentNote","04","↗"],["statReplies","statRepliesNote","02","◉"],["statOffers","statOffersNote","05","⌁"]
    ].map(item=>`<article class="panel kpi"><span class="kpi__icon" aria-hidden="true">${item[3]}</span><small>${t(item[0])}</small><strong class="mono">${item[2]}</strong><em>${t(item[1])}</em></article>`).join("")}</div>
    <div class="dashboard-lower"><section class="panel"><div class="panel__head"><h3>${t("activityTitle")}</h3><small>${t("activitySub")}</small></div><div class="panel__body"><div class="activity-chart" aria-hidden="true">${activity.map(height=>`<span style="height:${height}%"></span>`).join("")}</div><div class="chart-labels"><span>${t("activityStart")}</span><span>${t("activityEnd")}</span></div></div></section><section class="panel"><div class="panel__head"><h3>${t("priorityTitle")}</h3><small>${t("prioritySub")}</small></div><div class="panel__body priority-list">${[["priorityOne","priorityOneSub","offers"],["priorityTwo","priorityTwoSub","pipeline"],["priorityThree","priorityThreeSub","calendar"]].map(item=>`<button type="button" class="priority-item" data-view="${item[2]}"><span><strong>${t(item[0])}</strong><small>${t(item[1])}</small></span><span class="priority-item__arrow" aria-hidden="true">→</span></button>`).join("")}</div></section></div>
    <aside class="info-card"><strong>${t("scopeTitle")} · </strong>${t("scopeText")}</aside>`;
}

function filteredJobs(){
  const search=state.offerSearch.trim().toLocaleLowerCase();
  return jobs.filter(job=>(state.offerFilter==="all"||job.category===state.offerFilter)&&(!search||`${job.company} ${job.title.fr} ${job.title.en} ${job.location.fr} ${job.location.en}`.toLocaleLowerCase().includes(search)));
}

function renderOffers(){
  const filtered=filteredJobs();
  if(filtered.length&&!filtered.some(job=>job.id===state.selectedOffer))state.selectedOffer=filtered[0].id;
  const job=filtered.length?findJob(state.selectedOffer):null;
  const filters=["all","junior","review","senior","history"];
  const filterButtons=filters.map(filter=>`<button type="button" data-filter="${filter}" aria-pressed="${filter===state.offerFilter}">${t(filter==="all"?"offersAll":categoryMeta[filter])}${filter!=="all"?` <span class="mono">${jobs.filter(job=>job.category===filter).length}</span>`:""}</button>`).join("");
  const rows=filtered.map(item=>`<button type="button" class="offer-row" role="option" aria-selected="${item.id===state.selectedOffer}" data-offer="${item.id}"><span class="offer-row__top"><strong>${esc(item.title[state.lang])}</strong><span aria-hidden="true">↗</span></span><small>${esc(item.company)} · ${esc(item.location[state.lang])}</small><span class="offer-row__meta">${badge(t(categoryMeta[item.category]),item.category==="junior"?"teal":item.category==="review"?"amber":item.category==="senior"?"violet":"")}${state.triage[item.id]?badge(t(state.triage[item.id]==="keep"?"offerKept":"offerDiscarded"),state.triage[item.id]==="keep"?"teal":"red"):""}</span></button>`).join("");
  const detail=job?`<span class="section-kicker">${t("offerExample")}</span><div class="detail-head"><div><h3>${esc(job.title[state.lang])}</h3><p>${esc(job.company)} · ${esc(job.location[state.lang])}</p></div><div class="detail-score" aria-hidden="true">${String(jobs.indexOf(job)+1).padStart(2,"0")}</div></div><div class="detail-divider"></div><div class="detail-grid"><div><span class="detail-label">${t("offerLocation")}</span><span class="detail-value">${esc(job.location[state.lang])}</span></div><div><span class="detail-label">${t("offerLevel")}</span>${badge(t(categoryMeta[job.category]),"teal")}</div><div><span class="detail-label">${t("offerSource")}</span><span class="detail-value">${t("offerSourceValue")}</span></div><div><span class="detail-label">${t("offerStatus")}</span><span class="detail-value">${t(state.triage[job.id]==="keep"?"offerKept":state.triage[job.id]==="discard"?"offerDiscarded":"offerUntriaged")}</span></div></div><div class="detail-note"><strong>${t("offerReason")}</strong><br>${esc(job.reason[state.lang])}</div><div class="detail-actions"><button type="button" class="action" data-triage="keep" data-job-id="${job.id}">${t("keep")}</button><button type="button" class="action action--secondary" data-triage="discard" data-job-id="${job.id}">${t("discard")}</button>${state.triage[job.id]?`<button type="button" class="ghost-button" data-triage="reset" data-job-id="${job.id}">${t("resetTriage")}</button>`:""}</div><p class="small muted">${t("triageNote")}</p><div class="unavailable"><strong>${t("actionsTitle")}</strong><div class="disabled-actions"><button type="button" disabled>${t("ats")}</button><button type="button" disabled>${t("cv")}</button><button type="button" disabled>${t("atsCv")}</button></div><p class="small">${t("actionsNote")}</p></div>`:`<div class="empty-state">${t("offersNoResult")}</div>`;
  return `${heading("offersKicker","offersTitle","offersIntro")}<div class="toolbar"><div class="segmented" role="group" aria-label="${t("offersList")}">${filterButtons}</div><form id="offer-search-form" class="search-field" role="search"><span aria-hidden="true">⌕</span><input type="search" id="offer-search" value="${esc(state.offerSearch)}" placeholder="${t("searchPlaceholder")}" aria-label="${t("searchAria")}"><button type="submit" class="route-link">${t("searchButton")}</button></form></div><div class="split-layout"><section class="panel list-panel"><div class="list-panel__head"><span>${t("offersList")}</span><span>${filtered.length} ${t("offersCount")}</span></div><div class="offer-list" role="listbox" aria-label="${t("offersList")}">${rows||`<div class="empty-state">${t("offersNoResult")}</div>`}</div></section><section class="panel detail-panel" aria-live="polite">${detail}</section></div>`;
}

function renderPipeline(){
  const selected=findApp(state.selectedApplication);
  const stages=["prep","sent","interview","reply"];
  const columns=stages.map(stage=>{const group=applications.filter(app=>app.stage===stage);return `<section class="board-column"><div class="board-column__head"><strong>${t(stageMeta[stage])}</strong><span class="mono">${String(group.length).padStart(2,"0")}</span></div>${group.map(app=>`<button type="button" class="board-card" data-application="${app.id}" aria-pressed="${app.id===selected.id}"><small>${esc(app.company)}</small><strong>${esc(app.role[state.lang])}</strong>${badge(app.date?formatDate(app.date,{day:"numeric",month:"short"}):t("pipelineNoDate"),app.date?"teal":"amber")}</button>`).join("")}</section>`;}).join("");
  return `${heading("pipelineKicker","pipelineTitle","pipelineIntro")}<div class="board" aria-label="${t("navPipeline")}">${columns}</div><section class="panel pipeline-detail" aria-live="polite"><div><span class="section-kicker">${t("pipelineDetail")}</span><h3>${esc(selected.company)} · ${esc(selected.role[state.lang])}</h3><p>${t(stageMeta[selected.stage])} · ${selected.date?`${t("pipelineDate")} : ${formatDate(selected.date)}`:t("pipelineNoDate")}</p><div class="flow-steps"><span>${t("pipelineFlow")}</span><b>→</b><span>${t("pipelineFlow2")}</span><b>→</b><span>${t("pipelineFlow3")}</span><b>→</b><span>${t("pipelineFlow4")}</span></div></div><button type="button" class="action" data-view="documents">${t("seeDocuments")} →</button></section><aside class="info-card"><strong>${t("scopeTitle")} · </strong>${t("scopeText")}</aside>`;
}

function monthDate(){return new Date(2026,8+state.monthOffset,1);}
function dateKey(year,month,day){return `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;}
function renderCalendar(){
  const month=monthDate(),year=month.getFullYear(),monthIndex=month.getMonth();
  const offset=(month.getDay()+6)%7;
  const days=new Date(year,monthIndex+1,0).getDate();
  const cells=[...Array(offset).fill(""),...Array.from({length:days},(_,index)=>index+1)];
  while(cells.length%7)cells.push("");
  const selectedInMonth=state.selectedDate.startsWith(`${year}-${String(monthIndex+1).padStart(2,"0")}`);
  const selectedApps=applications.filter(app=>app.date===state.selectedDate);
  const title=new Intl.DateTimeFormat(state.lang==="fr"?"fr-FR":"en-GB",{month:"long",year:"numeric"}).format(month);
  const dayButtons=cells.map(day=>{if(!day)return `<button class="calendar-day" type="button" disabled aria-hidden="true"></button>`;const date=dateKey(year,monthIndex,day),hasEvents=applications.some(app=>app.date===date);return `<button class="calendar-day" type="button" data-date="${date}" aria-label="${t("monthOffsetA11y")} ${formatDate(date)}" aria-pressed="${date===state.selectedDate}" ${date==="2026-09-25"?'data-today="true"':''}><span class="calendar-day__number">${day}</span>${hasEvents?'<span class="calendar-dot" aria-hidden="true"></span>':""}</button>`;}).join("");
  const agenda=selectedInMonth&&selectedApps.length?selectedApps.map(app=>`<button type="button" class="agenda-item" data-calendar-app="${app.id}"><small>${t(stageMeta[app.stage])}</small><strong>${esc(app.company)}</strong><small>${esc(app.role[state.lang])}</small></button>`).join(""):`<p class="small">${t("noEvents")}</p>`;
  return `${heading("calendarKicker","calendarTitle","calendarIntro")}<div class="calendar-layout"><section class="panel calendar-panel"><div class="calendar-toolbar"><h3>${esc(title.charAt(0).toLocaleUpperCase()+title.slice(1))}</h3><div class="calendar-toolbar__buttons"><button type="button" class="date-control" data-month="today">${t("today")}</button><button type="button" class="icon-button" data-month="prev" aria-label="${t("previousMonth")}">‹</button><button type="button" class="icon-button" data-month="next" aria-label="${t("nextMonth")}">›</button></div></div><div class="calendar-grid">${t("weekdays").map(day=>`<span class="calendar-weekday">${day}</span>`).join("")}${dayButtons}</div></section><aside class="panel agenda-panel"><span class="section-kicker">${state.selectedDate?formatDate(state.selectedDate):t("today")}</span><h3>${t("eventsOn")}</h3>${agenda}<p class="calendar-caption">${t("calendarNote")}</p></aside></div>`;
}

function renderDocuments(){
  const app=findApp(state.selectedApplication);
  const tabs=["cv","job","ats"];
  const tabLabels={cv:"docCv",job:"docJob",ats:"docAts"};
  const list=tabs.map(tab=>`<button type="button" class="doc-select" data-document="${tab}" aria-pressed="${tab===state.documentTab}"><span class="doc-select__icon" aria-hidden="true">${tab==="cv"?"CV":tab==="job"?"JD":"ATS"}</span><span><strong>${t(tabLabels[tab])}</strong><small>${t("docPreview")}</small></span></button>`).join("");
  let documentBody="";
  if(state.documentTab==="cv")documentBody=`<article class="paper"><h3>${t("cvHeadline")}</h3><p>${esc(app.role[state.lang])} · ${esc(app.company)}</p><div class="paper-rule"></div><p>${t("cvSummary")}</p><div class="paper-section"><h4>${t("cvExperience")}</h4><p>• ${t("cvExpOne")}</p><p>• ${t("cvExpTwo")}</p></div><div class="paper-section"><h4>${t("cvSkills")}</h4><p>${t("cvSkillsText")}</p></div><div class="paper-section"><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-line"></div></div></article>`;
  else if(state.documentTab==="job")documentBody=`<article class="paper"><h3>${t("jobHeadline")}</h3><p>${esc(app.company)} · ${esc(app.role[state.lang])}</p><div class="paper-rule"></div><p>${t("jobIntro")}</p><div class="paper-section"><h4>${t("jobTasks")}</h4><p>• ${t("jobTaskOne")}</p><p>• ${t("jobTaskTwo")}</p></div><div class="paper-section"><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-line"></div></div></article>`;
  else documentBody=`<div class="document-json"><span style="color:#91d8c1">// ${t("atsSample")}</span>\n{\n  "status": "${t("atsStatus")}",\n  "source": "fictional_demo",\n  "score": null,\n  "job_id": "example_only"\n}\n\n${t("atsNote")}</div>`;
  return `${heading("docsKicker","docsTitle","docsIntro")}<div class="documents-layout"><aside class="panel document-list"><span class="section-kicker">${t("dossier")}</span><h3>${esc(app.company)}</h3>${list}</aside><section class="panel document-preview"><div class="document-preview__top"><strong>${t(tabLabels[state.documentTab])} · ${esc(app.role[state.lang])}</strong><span>${t("readOnly")}</span></div><div class="document-stage">${documentBody}<p class="document-stage__caption">${t("docCaption")}</p></div></section></div>`;
}

function render(){
  renderShell();
  const views={dashboard:renderDashboard,offers:renderOffers,pipeline:renderPipeline,calendar:renderCalendar,documents:renderDocuments};
  document.getElementById("view-root").innerHTML=views[state.view]();
}
function navigate(view){if(!Object.hasOwn(viewMeta,view))return;state.view=view;if(location.hash!==`#${view}`)location.hash=view;render();document.getElementById("content").focus({preventScroll:true});window.scrollTo({top:0,behavior:"instant"});}
function setLanguage(language,notifyParent=false){if(language!=="fr"&&language!=="en")return;state.lang=language;try{const url=new URL(location.href);url.searchParams.set("lang",language);history.replaceState(null,"",url);}catch{}render();if(notifyParent&&window.parent!==window)window.parent.postMessage({type:"portfolio-language",language},"*");}

document.addEventListener("click",event=>{
  const button=event.target.closest("button");if(!button)return;
  if(button.id==="lang-toggle"){setLanguage(state.lang==="fr"?"en":"fr",true);return;}
  if(button.dataset.view){navigate(button.dataset.view);return;}
  if(button.dataset.filter){state.offerFilter=button.dataset.filter;render();return;}
  if(button.dataset.offer){state.selectedOffer=button.dataset.offer;render();return;}
  if(button.dataset.triage){const id=button.dataset.jobId;if(!jobs.some(job=>job.id===id))return;if(button.dataset.triage==="reset")delete state.triage[id];else state.triage[id]=button.dataset.triage;render();showToast(t(button.dataset.triage==="keep"?"keptToast":button.dataset.triage==="discard"?"discardedToast":"resetToast"));return;}
  if(button.dataset.application){state.selectedApplication=button.dataset.application;render();return;}
  if(button.dataset.calendarApp){state.selectedApplication=button.dataset.calendarApp;navigate("pipeline");return;}
  if(button.dataset.month){if(button.dataset.month==="today"){state.monthOffset=0;state.selectedDate="2026-09-25";}else{state.monthOffset+=button.dataset.month==="next"?1:-1;const date=monthDate();state.selectedDate=dateKey(date.getFullYear(),date.getMonth(),1);}render();return;}
  if(button.dataset.date){state.selectedDate=button.dataset.date;render();return;}
  if(button.dataset.document){state.documentTab=button.dataset.document;render();}
});
document.addEventListener("submit",event=>{if(event.target.id!=="offer-search-form")return;event.preventDefault();state.offerSearch=document.getElementById("offer-search").value.trim();render();});
window.addEventListener("hashchange",()=>{const view=getHashView();if(view!==state.view){state.view=view;render();}});
window.addEventListener("message",event=>{if(event.source!==window.parent)return;if(event.data?.type==="portfolio-language")setLanguage(event.data.language,false);});
render();

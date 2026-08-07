(function () {
  "use strict";

  const allowedLanguages = ["fr", "en"];
  let currentLanguage = getInitialLanguage();

  function getInitialLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (allowedLanguages.includes(queryLanguage)) return queryLanguage;

    try {
      const storedLanguage = localStorage.getItem("portfolioLanguage");
      if (allowedLanguages.includes(storedLanguage)) return storedLanguage;
    } catch {
      // The documentation remains usable when storage is unavailable.
    }

    return "fr";
  }

  function translateElements() {
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-fr][data-en]").forEach(element => {
      element.textContent = element.dataset[currentLanguage];
    });

    document.querySelectorAll("[data-fr-placeholder][data-en-placeholder]").forEach(element => {
      element.placeholder = currentLanguage === "fr"
        ? element.dataset.frPlaceholder
        : element.dataset.enPlaceholder;
    });

    document.querySelectorAll("[data-fr-aria][data-en-aria]").forEach(element => {
      element.setAttribute("aria-label", currentLanguage === "fr"
        ? element.dataset.frAria
        : element.dataset.enAria);
    });

    document.querySelectorAll("[data-language-toggle]").forEach(button => {
      button.textContent = currentLanguage === "fr" ? "EN" : "FR";
      button.setAttribute("aria-label", currentLanguage === "fr"
        ? "Afficher la page en anglais"
        : "Show the page in French");
    });

    document.querySelectorAll("[data-lang-link]").forEach(link => {
      const target = link.dataset.langLink;
      const url = new URL(target, window.location.href);
      url.searchParams.set("lang", currentLanguage);
      link.href = url.href;
    });

    try {
      localStorage.setItem("portfolioLanguage", currentLanguage);
    } catch {
      // The documentation remains usable when storage is unavailable.
    }
  }

  function setLanguage(language) {
    currentLanguage = allowedLanguages.includes(language) ? language : "fr";
    translateElements();
  }

  document.querySelectorAll("[data-language-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(currentLanguage === "fr" ? "en" : "fr");
    });
  });

  const searchInput = document.querySelector("[data-guide-search]");
  const searchableCards = Array.from(document.querySelectorAll("[data-searchable]"));
  const noResults = document.querySelector("[data-no-results]");

  if (searchInput && searchableCards.length) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLocaleLowerCase();
      let visibleCount = 0;

      searchableCards.forEach(card => {
        const haystack = `${card.textContent} ${card.dataset.searchable}`.toLocaleLowerCase();
        const isVisible = !query || haystack.includes(query);
        card.classList.toggle("is-hidden", !isVisible);
        if (isVisible) visibleCount += 1;
      });

      noResults?.classList.toggle("is-hidden", visibleCount > 0);
    });
  }

  window.addEventListener("message", event => {
    if (event.data?.type === "portfolio-language" && allowedLanguages.includes(event.data.language)) {
      setLanguage(event.data.language);
    }
  });

  translateElements();
})();

(function () {
  var storageKey = "language";
  var toggle = document.getElementById("language-toggle");

  function getLanguage() {
    var saved = window.localStorage.getItem(storageKey);
    return saved === "en" ? "en" : "zh";
  }

  function setLanguage(language) {
    document.body.setAttribute("data-language", language);

    if (toggle) {
      var link = toggle.querySelector("a");
      if (link) {
        link.textContent = language === "zh" ? "En" : "中";
        link.setAttribute(
          "aria-label",
          language === "zh" ? "switch to English" : "切换到中文"
        );
        link.setAttribute("title", language === "zh" ? "English" : "中文");
      }
    }
  }

  function toggleLanguage(event) {
    if (event) {
      event.preventDefault();
    }

    var next = getLanguage() === "zh" ? "en" : "zh";
    window.localStorage.setItem(storageKey, next);
    setLanguage(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(getLanguage());

    if (toggle) {
      toggle.addEventListener("click", toggleLanguage);
    }
  });
})();

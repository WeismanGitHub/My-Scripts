// ==UserScript==
// @name         Remove Instagram Note
// @namespace    http://tampermonkey.net/
// @version      2024-07-15
// @description  Just a simple little script to remove someone's Instagram note.
// @author       You
// @match
// @icon
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const name = "NAME";

  // I use setInterval because the notes can be reloaded since it's an SPA.
  setInterval(() => {
    const spans = document.getElementsByTagName("span");

    for (const span of spans) {
      if (span.textContent === name) {
        const note =
          span.parentElement?.parentElement?.parentElement?.parentElement;
        note?.remove();
      }
    }
  }, 1);
})();

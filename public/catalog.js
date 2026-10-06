// Shared catalog loader for sales, product, print and checkout pages.
// Shows the copy saved in the visitor's browser instantly, then refreshes it quietly in the background.
(function () {
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNgtD8K0-yhy505ROQCnRjyyvoim2jVEICq8j81Fbmlm7ko67YOT-BegaByivXlE7aqg/exec';
  var STORAGE_KEY = 'jbird_catalog';
  var VERSION = 1;                         // bump to discard every visitor's saved copy
  var MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // saved copies older than 7 days are ignored

  function readSaved() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.v === VERSION && Array.isArray(saved.data) && Date.now() - saved.savedAt < MAX_AGE_MS) return saved.data;
    } catch (e) {}
    return null;
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: VERSION, savedAt: Date.now(), data: data }));
    } catch (e) {}
  }

  // Rejects anything that isn't a non-empty list of bikes (e.g. a Google error page), so it never replaces a good copy.
  function fetchFresh() {
    return fetch(SCRIPT_URL).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    }).then(function (data) {
      if (!Array.isArray(data) || data.length === 0) throw new Error('Bad catalog data');
      return data;
    });
  }

  // onData(bikes) runs with the saved copy first (if any), then again only if the fresh copy differs.
  // onError runs only when there is nothing to show at all.
  // options.freshOnly skips the saved copy (checkout: never show an outdated price).
  window.loadJBirdCatalog = function (onData, onError, options) {
    var saved = options && options.freshOnly ? null : readSaved();
    if (saved) onData(saved);

    fetchFresh().then(function (fresh) {
      save(fresh);
      if (!saved || JSON.stringify(saved) !== JSON.stringify(fresh)) onData(fresh);
    }).catch(function (err) {
      if (!saved && onError) onError(err);
    });
  };
})();

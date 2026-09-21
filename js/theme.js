/**
 * Light/dark theme switch.
 * The chosen theme is stored in localStorage and restored on every page.
 */
(function () {
  var STORAGE_KEY = 'gamedemic-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Storage can be blocked — the theme still works for this page. */
    }
  }

  function currentTheme() {
    return root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (toggle) {
      var isDark = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute(
        'aria-label',
        isDark ? 'Turn on light theme' : 'Turn on dark theme'
      );
    }
  }

  var stored = readStoredTheme();
  applyTheme(stored === 'dark' || stored === 'light' ? stored : currentTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    });
  }
})();

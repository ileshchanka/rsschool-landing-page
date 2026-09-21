/**
 * Burger menu for screens up to 768px.
 * Works on every page that has the shared header markup.
 */

const MOBILE_QUERY = window.matchMedia('(max-width: 768px)');

export function initMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('site-nav');

  if (!burger || !nav) {
    return;
  }

  function lockScroll(locked) {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = locked ? 'hidden' : '';
    document.body.style.paddingRight = locked && scrollbar > 0 ? `${scrollbar}px` : '';
  }

  function isOpen() {
    return nav.classList.contains('is-open');
  }

  function open() {
    nav.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    lockScroll(true);
  }

  function close() {
    if (!isOpen()) {
      return;
    }

    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    lockScroll(false);
  }

  burger.addEventListener('click', () => {
    if (isOpen()) {
      close();
    } else {
      open();
    }
  });

  // A link both navigates and closes the menu.
  nav.addEventListener('click', (event) => {
    if (event.target.closest('.nav__link')) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      close();
      burger.focus();
    }
  });

  // A click outside the opened menu closes it as well.
  document.addEventListener('click', (event) => {
    if (!isOpen()) {
      return;
    }

    if (!event.target.closest('#site-nav') && !event.target.closest('#burger')) {
      close();
    }
  });

  // Above 768px the desktop navigation is shown again, so the menu must not stay open.
  MOBILE_QUERY.addEventListener('change', (event) => {
    if (!event.matches) {
      close();
    }
  });
}

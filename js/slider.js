/**
 * Releases carousel.
 * Slides move in groups: three at a time on desktop, two on tablets, one on phones.
 * Navigation is cyclic — the last group is followed by the first one again.
 */

export function initSlider() {
  const slider = document.getElementById('releases-slider');
  const track = document.getElementById('slider-track');
  const dots = document.getElementById('slider-dots');
  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');

  if (!slider || !track || !dots || !prev || !next) {
    return;
  }

  const slides = Array.from(track.children);
  let index = 0;

  function perView() {
    if (window.innerWidth <= 620) {
      return 1;
    }

    return window.innerWidth <= 1024 ? 2 : 3;
  }

  function pageCount() {
    return Math.max(1, Math.ceil(slides.length / perView()));
  }

  function renderDots() {
    const total = pageCount();
    dots.innerHTML = '';

    for (let page = 0; page < total; page += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slider__dot';
      dot.setAttribute('aria-label', `Show episode group ${page + 1}`);
      dot.addEventListener('click', () => goTo(page));
      dots.append(dot);
    }
  }

  function update() {
    const step = slides[0].getBoundingClientRect().width
      + parseFloat(getComputedStyle(track).columnGap || 0);

    track.style.transform = `translateX(${-index * perView() * step}px)`;

    Array.from(dots.children).forEach((dot, page) => {
      const isActive = page === index;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
  }

  function goTo(page) {
    const total = pageCount();
    index = (page + total) % total;
    update();
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (dots.children.length !== pageCount()) {
        renderDots();
      }

      goTo(Math.min(index, pageCount() - 1));
    }, 150);
  });

  renderDots();
  goTo(0);
}

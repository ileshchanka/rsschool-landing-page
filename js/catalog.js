/**
 * Catalog page: category switching, portioned card rendering and the details modal.
 * Every card is built from the objects in data/games.js.
 */

import { CATEGORIES, GAMES } from '../data/games.js';
import { initMenu } from './menu.js';
import { initModal, openModal, closeModal } from './modal.js';

const grid = document.getElementById('catalog-grid');
const empty = document.getElementById('catalog-empty');
const moreWrapper = document.getElementById('catalog-more');
const moreButton = document.getElementById('load-more');
const categories = document.getElementById('categories');
const note = document.getElementById('category-note');

let activeCategory = CATEGORIES[0].id;
let visibleCount = 0;

function pageSize() {
  if (window.innerWidth <= 620) {
    return 3;
  }

  return window.innerWidth <= 1024 ? 4 : 6;
}

function gamesOf(categoryId) {
  return GAMES.filter((game) => game.category === categoryId);
}

function categoryTitle(categoryId) {
  const category = CATEGORIES.find((item) => item.id === categoryId);
  return category ? category.title : '';
}

function playersLabel(game) {
  return game.players.min === game.players.max
    ? `${game.players.min}`
    : `${game.players.min}–${game.players.max}`;
}

function createCard(game) {
  const card = document.createElement('article');
  card.className = 'game-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${game.title} — open the details`);
  card.innerHTML = `
    <div class="game-card__media">
      <img class="game-card__image" src="${game.cover}" width="480" height="360" loading="lazy"
        alt="${game.title} on the table during the episode">
    </div>
    <div class="game-card__body">
      <h3 class="game-card__title">${game.title}</h3>
      <p class="game-card__desc">${game.description}</p>
      <ul class="game-card__tags">
        ${game.tags.map((tag) => `<li class="tag">${tag}</li>`).join('')}
      </ul>
      <p class="game-card__meta">
        <span>Players: <b>${playersLabel(game)}</b></span>
        <span>Time: <b>${game.playtime.min}–${game.playtime.max} min</b></span>
        <span>Weight: <b>${game.weight}/5</b></span>
        <span>Year: <b>${game.year}</b></span>
      </p>
    </div>
  `;

  function open() {
    openModal(game, categoryTitle(game.category), card);
  }

  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });

  return card;
}

function render() {
  const games = gamesOf(activeCategory);
  const shown = games.slice(0, visibleCount);

  grid.innerHTML = '';
  shown.forEach((game) => grid.append(createCard(game)));

  empty.hidden = games.length > 0;
  moreWrapper.hidden = visibleCount >= games.length;
  moreButton.textContent = `Show more games (${Math.max(0, games.length - visibleCount)} left)`;
}

function selectCategory(categoryId) {
  activeCategory = categoryId;
  visibleCount = pageSize();

  Array.from(categories.querySelectorAll('.category')).forEach((button) => {
    const isActive = button.dataset.category === categoryId;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const category = CATEGORIES.find((item) => item.id === categoryId);
  note.textContent = category ? category.description : '';

  render();
}

categories.addEventListener('click', (event) => {
  const button = event.target.closest('.category');

  if (button && button.dataset.category !== activeCategory) {
    selectCategory(button.dataset.category);
  }
});

moreButton.addEventListener('click', () => {
  visibleCount += pageSize();
  render();
});

let resizeTimer;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    // Keeps the number of shown cards a whole number of portions.
    const size = pageSize();
    const portions = Math.max(1, Math.ceil(visibleCount / size));
    visibleCount = portions * size;
    render();
  }, 150);
});

window.addEventListener('pagehide', closeModal);

initMenu();
initModal();
selectCategory(activeCategory);

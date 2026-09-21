/**
 * Game details modal.
 * Two parameters — player count and episode format — change the shown
 * information immediately, without reloading anything.
 */

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

let state = null;

function elements() {
  return {
    modal: document.getElementById('game-modal'),
    dialog: document.getElementById('modal-dialog'),
    close: document.getElementById('modal-close'),
    media: document.getElementById('modal-media'),
    title: document.getElementById('modal-title'),
    category: document.getElementById('modal-category'),
    desc: document.getElementById('modal-desc'),
    players: document.getElementById('modal-players'),
    time: document.getElementById('modal-time'),
    weight: document.getElementById('modal-weight'),
    designer: document.getElementById('modal-designer'),
    optionPlayers: document.getElementById('option-players'),
    optionFormat: document.getElementById('option-format'),
    readoutPlayers: document.getElementById('readout-players'),
    readoutFormat: document.getElementById('readout-format'),
    note: document.getElementById('modal-note'),
    link: document.getElementById('modal-link'),
  };
}

function lockScroll(locked) {
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = locked ? 'hidden' : '';
  document.body.style.paddingRight = locked && scrollbar > 0 ? `${scrollbar}px` : '';
}

/** Play time grows with the number of players. */
function timeFor(game, count) {
  const { min, max } = game.playtime;
  const span = game.players.max - game.players.min;
  const share = span === 0 ? 0 : (count - game.players.min) / span;

  return Math.round((min + (max - min) * share) / 5) * 5;
}

function playersWord(count) {
  return count === 1 ? '1 player' : `${count} players`;
}

function playerOptions(game) {
  const options = [];

  for (let count = game.players.min; count <= game.players.max; count += 1) {
    options.push(count);
  }

  return options;
}

function renderOptions(container, items, activeId, onSelect) {
  container.innerHTML = '';

  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.textContent = item.label;
    button.setAttribute('aria-pressed', String(item.id === activeId));
    button.addEventListener('click', () => onSelect(item.id));
    container.append(button);
  });
}

function renderParameters() {
  const { game, playerCount, formatId } = state;
  const ui = elements();
  const format = game.formats.find((item) => item.id === formatId) || game.formats[0];

  renderOptions(
    ui.optionPlayers,
    playerOptions(game).map((count) => ({ id: count, label: playersWord(count) })),
    playerCount,
    (count) => {
      state.playerCount = count;
      renderParameters();
    }
  );

  renderOptions(
    ui.optionFormat,
    game.formats.map((item) => ({ id: item.id, label: item.label })),
    format.id,
    (id) => {
      state.formatId = id;
      renderParameters();
    }
  );

  const minutes = timeFor(game, playerCount);
  const isBest = playerCount === game.players.best;

  ui.time.textContent = `${minutes} min`;
  ui.readoutPlayers.innerHTML = `With <b>${playersWord(playerCount)}</b> a game runs about `
    + `<b>${minutes} minutes</b>. ${isBest
      ? 'This is the count we recommend for this title.'
      : `We liked it best with ${playersWord(game.players.best)}.`}`;
  ui.readoutFormat.innerHTML = `<b>${format.label}</b> · ${format.length} — ${format.note}`;
  ui.link.href = format.url;
  ui.link.textContent = `Watch: ${format.label.toLowerCase()}`;
  ui.note.textContent = `Episode on the GAMEDEMIC channel · ${game.year}`;
}

function trapFocus(event) {
  if (event.key !== 'Tab' || !state) {
    return;
  }

  const items = Array.from(state.ui.dialog.querySelectorAll(FOCUSABLE));

  if (items.length === 0) {
    return;
  }

  const first = items[0];
  const last = items[items.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function closeModal() {
  if (!state) {
    return;
  }

  const { ui, opener } = state;

  ui.modal.classList.remove('is-open');
  lockScroll(false);
  document.removeEventListener('keydown', onKeydown);
  document.removeEventListener('keydown', trapFocus);

  window.setTimeout(() => {
    ui.modal.hidden = true;
  }, 250);

  state = null;

  if (opener) {
    opener.focus();
  }
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

export function openModal(game, categoryTitle, opener) {
  const ui = elements();

  if (!ui.modal) {
    return;
  }

  state = {
    game,
    ui,
    opener,
    playerCount: game.players.best,
    formatId: game.formats[0].id,
  };

  ui.media.innerHTML = `<img src="${game.cover}" width="480" height="360"
    alt="${game.title} set up on the table during the episode">`;
  ui.title.textContent = game.title;
  ui.category.textContent = categoryTitle;
  ui.desc.textContent = game.description;
  ui.players.textContent = game.players.min === game.players.max
    ? `${game.players.min}`
    : `${game.players.min}–${game.players.max}`;
  ui.weight.textContent = `${game.weight}/5`;
  ui.designer.textContent = game.designer;

  renderParameters();

  ui.modal.hidden = false;
  // Forces a reflow so the opening transition runs.
  void ui.modal.offsetWidth;
  ui.modal.classList.add('is-open');
  lockScroll(true);
  ui.close.focus();

  document.addEventListener('keydown', onKeydown);
  document.addEventListener('keydown', trapFocus);
}

export function initModal() {
  const ui = elements();

  if (!ui.modal) {
    return;
  }

  ui.close.addEventListener('click', closeModal);

  // Only a click on the overlay itself closes the window.
  ui.modal.addEventListener('click', (event) => {
    if (event.target === ui.modal) {
      closeModal();
    }
  });
}

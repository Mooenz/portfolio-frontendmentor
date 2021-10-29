const BUTTON_DARK_MODE = document.querySelector('.dark-mode');

function toggleLight() {
  document.body.classList.toggle('mode-light');
}

BUTTON_DARK_MODE.addEventListener('click', toggleLight, false);

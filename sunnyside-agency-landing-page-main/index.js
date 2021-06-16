/** TOGGLE */
const container_nav = document.querySelector('.container-header-nav');
const button = document.querySelector('.container-header-nav-burger');

const toggle = () => {
  container_nav.classList.toggle('visible');
}

button.addEventListener('click', toggle, false);
/** TOGGLE */
function prueba() {
  const HAMBURGER = document.querySelector('.hamburger');
  const HEADER__NAV = document.querySelector('.header__nav');

  const CLOSE_ICON = './css/images/icon-close.svg';
  const HAMBURGER_ICON = './css/images/icon-hamburger.svg';

  const ICON = HAMBURGER.getAttribute('src');

  if (ICON === CLOSE_ICON) {
    HAMBURGER.setAttribute('src', `${HAMBURGER_ICON}`);    
  } else {
    HAMBURGER.setAttribute('src', `${CLOSE_ICON}`);
  }
  
  HAMBURGER.classList.toggle('hamburger--size');
  HEADER__NAV.classList.toggle('hiden');
}
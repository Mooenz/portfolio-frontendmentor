// Toogle hamburger button
function toggleHamburger() {
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
  HEADER__NAV.classList.toggle('show');
}

// Toogle Sub List
const LIST = document.querySelectorAll('.list');

LIST.forEach((list_two) => {
  const faqToggle = () => {
    LIST.forEach((item) => {
      if(item  !== list_two) {
        item.classList.remove('list--styles');
      }
    })
    list_two.classList.toggle('list--styles');
  }
  list_two.addEventListener('click', faqToggle, false);
})
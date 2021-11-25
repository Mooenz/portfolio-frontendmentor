import { $nodeListArray } from './domElements.js';

const toggleInputRadio = (elemento, estado) => {
  const idElemento = elemento.classList.value;

  const elementOthers = () =>
    elemento.childNodes[1].childNodes[1].childNodes[1];

  idElemento === 'modal__card-content modal__card active__modal'
    ? (elementOthers().checked = estado)
    : (elementOthers().checked = estado);
};

function toggleActiveCardModal() {
  $nodeListArray.map((card_active) => {
    const addActiveClass = () => {
      card_active.classList.add('active__modal');
      toggleInputRadio(card_active, true);

      $nodeListArray.map((card_close) => {
        if (card_close !== card_active) {
          card_close.classList.remove('active__modal');
          toggleInputRadio(card_close, false);
        }
      });
    };

    if (!(card_active.classList.value === 'modal__card disable')) {
      card_active.addEventListener('click', addActiveClass, false);
    }
  });
}

export { toggleActiveCardModal, toggleInputRadio };

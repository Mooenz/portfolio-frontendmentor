import {
  $body,
  $product_buttons,
  $nodeListArray,
} from './utils/domElements.js';
import {
  toggleActiveCardModal,
  toggleInputRadio,
} from './utils/toggleActiveCardModal.js';

function show(event) {
  const idTarget = event.target.id;
  const classTarget = event.target.classList.value;

  if (
    idTarget === 'back-project' ||
    idTarget === 'select-bamboo' ||
    idTarget === 'select-black' ||
    idTarget === 'icon-close' ||
    classTarget === 'modal'
  ) {
    $body.classList.toggle('show_modal');

    if (idTarget === 'back-project') {
      $nodeListArray[0].classList.add('active__modal');
      toggleInputRadio($nodeListArray[0], true);
    } else if (idTarget === 'select-bamboo') {
      $nodeListArray[1].classList.add('active__modal');
      toggleInputRadio($nodeListArray[1], true);
    } else if (idTarget === 'select-black') {
      $nodeListArray[2].classList.add('active__modal');
      toggleInputRadio($nodeListArray[2], true);
    } else if (
      idTarget === 'icon-close' ||
      classTarget === 'modal' ||
      idTarget === 'bamboo' ||
      idTarget === 'black'
    ) {
      $nodeListArray.map((element) => {
        element.classList.remove('active__modal');
      });
    }
  } else if (
    idTarget === 'bookmark-mobile' ||
    idTarget === 'bookmark-desktop'
  ) {
    $product_buttons.classList.toggle('bookmark__active');
  } else if (
    classTarget === 'icon-burger' ||
    classTarget === 'options-burger'
  ) {
    $body.classList.toggle('active-options');
  } else if (idTarget === 'bamboo' || idTarget === 'black') {
    $body.classList = 'show--modal-success';
  } else if (idTarget === 'close-success') {
    $body.classList.remove('show--modal-success');
  }
}

toggleActiveCardModal();
$body.addEventListener('click', show, false);

const $share = document.querySelector('.share');
const $path = document.querySelector('.path');

const active = () => {
  if ($share.classList.toggle('active')) {
    $share.setAttribute = ('class', 'active');    
    $path.setAttribute('fill', "#ecf2f8");
  } else {
    $share.className = 'share';
    $path.setAttribute('fill', '#6E8098');
  }
}

$share.addEventListener('click', active, false);

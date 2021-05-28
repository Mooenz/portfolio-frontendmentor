const $share = document.querySelector('.share');
const $path = document.querySelector('.path');
const $container_social_media = document.querySelector('.container-social-media')

const active = () => {
  $container_social_media.classList.toggle('active-social-media');
  if ($share.classList.toggle('active')) {
    $path.setAttribute('fill', "#ecf2f8");
  } else {
    $share.className = 'share';
    $path.setAttribute('fill', '#6E8098');
  }
}

$share.addEventListener('click', active, false);

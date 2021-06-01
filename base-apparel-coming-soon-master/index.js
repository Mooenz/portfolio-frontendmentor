const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const form = document.querySelector('.form');
const label = document.querySelector('.label');
const email = document.getElementById('email');
const icon_error = document.querySelector('.icon-error');
const button = document.querySelector('.button');

const checkEmail = () => {
  if(regex.test(email.value)) {  
    form.classList = 'form true';
    label.classList = 'label label-true';
    icon_error.classList = 'icon-error';
    label.classList = 'label label-true visibility-true';
    label.innerHTML = 'Your email its correct.';
  } else {
    form.classList = 'form error';
    label.classList = 'label visibility-true';
    label.innerHTML = 'Please provide a valid email.';
    icon_error.classList = 'icon-error visibility-true';
  }
}

button.addEventListener('click', checkEmail, false);
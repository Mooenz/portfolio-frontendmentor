const button = document.getElementById('button');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const icon_error = document.querySelectorAll('.icon-error');
const label = document.querySelectorAll('.label');
const input = document.querySelectorAll('.input');
const sucess = document.querySelector('.sucess');
const container_sucess = document.querySelector('.container-sucess');

const validate = () => {
  if(name.value && lastName.value && email.value && password.value) {    
    name.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    label.forEach((item) => item.classList ="label");
    icon_error.forEach((item) => item.classList ="icon-error");    
    input.forEach((item) => item.classList ="input");
    input[0].setAttribute('placeholder', 'First Name');
    input[1].setAttribute('placeholder', 'Last Name');
    input[2].setAttribute('placeholder', 'Email Address');
    input[3].setAttribute('placeholder', 'Password');
    sucess.classList = 'sucess sucess-visible';
    container_sucess.classList = 'container-sucess sucess-visible';

  } else {
    sucess.classList = 'sucess';
    container_sucess.classList = 'container-sucess';

    if (!name.value) {
      label[0].classList = 'label visible';
      icon_error[0].classList = 'icon-error visible';
      input[0].classList = 'input border-red';
      input[0].setAttribute('placeholder', '');
    } else {
      label[0].classList = 'label';
      icon_error[0].classList = 'icon-error';
      input[0].classList = 'input';
      input[0].setAttribute('placeholder', 'First Name');
    }

    if (!lastName.value) {
      label[1].classList = 'label visible';
      icon_error[1].classList = 'icon-error visible';
      input[1].classList = 'input border-red';
      input[1].setAttribute('placeholder', '');
    }  else {
      label[1].classList = 'label';
      icon_error[1].classList = 'icon-error';
      input[1].classList = 'input';
      input[1].setAttribute('placeholder', 'Last Name');
    }

    if (!email.value) {
      label[2].classList = 'label visible';
      icon_error[2].classList = 'icon-error visible';
      input[2].classList = 'input border-red';
      input[2].setAttribute('placeholder', '');
    }  else {
      label[2].classList = 'label';
      icon_error[2].classList = 'icon-error';
      input[2].classList = 'input';
      input[2].setAttribute('placeholder', 'Email Address');
    }

    if (!password.value) {
      label[3].classList = 'label visible';
      icon_error[3].classList = 'icon-error visible';
      input[3].classList = 'input border-red';
      input[3].setAttribute('placeholder', '');
    }  else {
      label[3].classList = 'label';
      icon_error[3].classList = 'icon-error';
      input[3].classList = 'input';
      input[3].setAttribute('placeholder', 'Password');
    }
  }
}

button.addEventListener('click', validate, false);
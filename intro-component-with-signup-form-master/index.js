const button = document.getElementById('button');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const icon_error = document.querySelectorAll('.icon-error');
const label = document.querySelectorAll('.label');
const input = document.querySelectorAll('.input');

const validate = () => {
  if(name.value && lastName.value && email.value && password.value) {
    name.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    label.forEach((item) => item.classList ="label");
    icon_error.forEach((item) => item.classList ="icon-error");    
    input.forEach((item) => item.classList ="input");
    input.forEach((item) => item.setAttribute ('placeholder',''));  
  } else {
    label.forEach((item) => item.classList ="label visible");
    icon_error.forEach((item) => item.classList ="icon-error visible");    
    input.forEach((item) => item.classList ="input border-red");
    input.forEach((item) => item.setAttribute ('placeholder',''));    
  }
}

button.addEventListener('click', validate, false);
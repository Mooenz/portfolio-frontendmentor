const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const form = document.querySelector('.form');
const button = document.querySelector('.button');
const email = document.getElementById('email');
const label = document.getElementById('label'); 


const checkEmail = () => {
   if(regex.test(email.value)) { 
    form.classList = 'form success';
    label.innerHTML = 'Your email its correct.';
   } else {
    form.classList = 'form error';
    label.innerHTML = 'Please provide a valid email address.';
 }
}

button.addEventListener('click', checkEmail, false);
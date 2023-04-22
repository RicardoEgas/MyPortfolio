const contactForm = document.querySelector('.contact-form');
const attention = document.querySelector('#attention');

function emailError() {
  const email = document.querySelector('#email').value;
  const errors = [];

  if (email !== email.toLowerCase()) {
    errors.push('Attention: Email should not have upper case characters!');
  }
  return errors;
}

function Validation() {
  const errors = emailError();
  if (errors.length === 0) {
    return true;
  }

  attention.innerHTML = `${errors.join('')}`;
  return false;
}

contactForm.onsubmit = function run() { return Validation(); };
'use strict';

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Все поля формы должны быть заполнены');
  }

  const userDetails = { email: email.value, password: password.value };
  console.log(userDetails);

  event.currentTarget.reset();
}

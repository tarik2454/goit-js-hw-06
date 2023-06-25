const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (!email.value || !password.value) {
    alert('Все поля формы должны быть заполнены');
  }

  const userDetails = { email: email.value, password: password.value };
  console.log(userDetails);

  event.target.reset();
}

//* ---- Second option (FormData)
// const form = document.querySelector('form.login-form ');

// const onFormSubmit = event => {
//   event.preventDefault();

//   const formData = new FormData(form);

//   formData.forEach((value, key) => {
//     console.log(`${key} ==> ${value}`);
//   });

//   form.reset();
// };

// form.addEventListener('submit', onFormSubmit);

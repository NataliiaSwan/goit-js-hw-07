const loginForm = document.querySelector('.login-form');
const submitButton = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  console.log(formData);

  loginForm.reset();
});

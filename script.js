function main() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('password-confirm');
  const submit = document.getElementById('submit');

  // See regex pattern at https://digitalfortress.tech/tips/top-15-commonly-used-regex
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.\/?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  const handleValidation = (e, regex) => {
    const value = e.target.value;
    const isValid = regex.test(value);
    if (isValid)
      e.target.classList.remove('invalid')
    else
      e.target.classList.add('invalid')
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  email.addEventListener('keyup', e => handleValidation(e, emailRegex));
  email.addEventListener('change', e => handleValidation(e, emailRegex));

  password.addEventListener('keyup', e => handleValidation(e, passwordRegex));
  password.addEventListener('change', e => handleValidation(e, passwordRegex));

  passwordConfirm.addEventListener('keyup', e => handleValidation(e, passwordRegex) && handleValidation(e, (new RegExp(password.value))));
  passwordConfirm.addEventListener('change', e => handleValidation(e, passwordRegex) && handleValidation(e, (new RegExp(password.value))));

  submit.addEventListener('submit', e => handleSubmit(e));
}

main();


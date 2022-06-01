function main() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('password-confirm');

  console.log(email, password, passwordConfirm);
}

function validateEmail(value) {
  const regex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
  return regex.test(value);
}

function validatePassword(value) {
  const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/;
  return regex.test(value);
}

main();


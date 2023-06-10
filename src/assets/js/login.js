const buttonLogin = document.getElementById('buttonLogin');

buttonLogin.addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const rememberMe = document.getElementById('rememberMe');
  const errorPreview = document.getElementById('errorPreview');
  const dataPreview = document.getElementById('dataPreview');

  if (!email.value && !password.value) {
    errorPreview.style.display = 'block';
    return;
  }

  errorPreview.display = 'none';
  dataPreview.style.display = 'block';
  dataPreview.innerHTML = `<pre>{
    email: ${email.value},
    password: ${password.value},
    rememberMe: ${rememberMe.checked}
  }</pre>`;

  setTimeout(() => {
    window.location.href = '/login-journey/security.html';
  }, 5000);
});

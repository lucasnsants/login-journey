let randomCodeSecurity = null;

window.addEventListener('load', () => {
  const randomNumber = document.getElementById('randomNumber');
  randomCodeSecurity = Math.floor(Math.random() * 100);

  randomNumber.style.display = 'block';
  randomNumber.innerHTML = `Por favor, digite o código de segurança: ${randomCodeSecurity}`;
});

const buttonSecurity = document.getElementById('buttonSecurity');
buttonSecurity.addEventListener('click', () => {
  const codeSecurity = document.getElementById('codeSecurity');
  const errorSecurity = document.getElementById('errorSecurity');
  const dataSecurity = document.getElementById('dataSecurity');
  
  if (
    !codeSecurity.value ||
    parseInt(codeSecurity.value) !== randomCodeSecurity
  ) {
    errorSecurity.style.display = 'block';
    return;
  }

  errorSecurity.display = 'none';
  dataSecurity.style.display = 'block';
  dataSecurity.innerHTML = `<pre>{
    codeSecurity: ${codeSecurity.value},
    randomCodeSecurity: ${randomCodeSecurity}
  }</pre>`;

  setTimeout(() => {
    const passedErrorScreen = localStorage.getItem('passedErrorScreen');
    if (passedErrorScreen === 'passed') {
      window.location.href = '/login-journey/home.html';
    } else {
      window.location.href = '/login-journey/generic_error.html';
    }
  }, 5000);
});

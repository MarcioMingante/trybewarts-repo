// Capturas

const email = document.getElementById('input-email-header');
const password = document.getElementById('input-password');
const loginBtn = document.getElementById('btn-login');
const agreementCheckbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

// Funções

const checkLoginData = () => {
  loginBtn.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      return alert('Olá, Tryber!');
    }

    return alert('Email ou senha inválidos.');
  });
};

const enableSubmitBtn = () => {
  agreementCheckbox.addEventListener('click', () => {
    if (agreementCheckbox.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
};

// chamados

checkLoginData();

enableSubmitBtn();

// Capturas

const email = document.getElementById('input-email');
const password = document.getElementById('input-password');
const loginBtn = document.getElementById('btn-login');

// Funções

const checkLoginData = () => {
  loginBtn.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      return alert('Olá, Tryber!');
    }

    return alert('Email ou senha inválidos.');
  });
};

// chamados

checkLoginData();

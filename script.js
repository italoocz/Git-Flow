const form = document.querySelector('#registration-form');
const feedback = document.querySelector('#feedback');

const fields = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password')
};

function showError(field, message) {
  field.setAttribute('aria-invalid', String(Boolean(message)));
  document.querySelector(`#${field.id}-error`).textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = '';

  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const password = fields.password.value;

  showError(
    fields.name,
    name.length < 3 ? 'Informe um nome com pelo menos 3 caracteres.' : ''
  );

  showError(
    fields.email,
    fields.email.validity.valid && email ? '' : 'Informe um e-mail válido.'
  );

  showError(
    fields.password,
    password.length >= 8 ? '' : 'A senha precisa ter pelo menos 8 caracteres.'
  );

  if (!form.querySelector('[aria-invalid="true"]')) {
    const firstName = name.split(' ')[0];
    feedback.textContent = `Cadastro validado. Seja bem-vindo(a), ${firstName}!`;
    form.reset();
  }
});
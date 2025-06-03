document.getElementById('intro-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const country = document.getElementById('country').value.trim();
  const age = document.getElementById('age').value.trim();

  const result = document.getElementById('result');

  if (name && country && age) {
    result.innerHTML = `
      <p>Hola, ${name} 👋</p>
      <p>Your introduction:</p>
      <p>My name is ${name}. I’m from ${country}. I’m ${age} years old.</p>
    `;
  } else {
    result.textContent = 'Por favor, completa todos los campos.';
  }
});
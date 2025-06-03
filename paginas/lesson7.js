document.getElementById("demo-activity").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores seleccionados
  const q1 = document.querySelector('select[name="q1"]').value.toLowerCase();
  const q2 = document.querySelector('select[name="q2"]').value.toLowerCase();
  const q3 = document.querySelector('select[name="q3"]').value.toLowerCase();
  const q4 = document.querySelector('select[name="q4"]').value.toLowerCase();

  // Respuestas correctas
const correctAnswers = ["myself", "himself", "ourselves", "yourself"];
  const userAnswers = [q1, q2, q3, q4];

  // Verificación
  let score = 0;
  let feedback = "<h4>Resultados:</h4><ul>";

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      feedback += `<li>Pregunta ${index + 1}: ✅ Correcto</li>`;
      score++;
    } else {
      feedback += `<li>Pregunta ${index + 1}: ❌ Incorrecto (Respuesta correcta: <strong>${correctAnswers[index]}</strong>)</li>`;
    }
  });

  feedback += `</ul><p><strong>Puntaje: ${score} de 4</strong></p>`;

  document.getElementById("feedback").innerHTML = feedback;
});
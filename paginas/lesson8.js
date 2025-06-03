document.getElementById("article-activity").addEventListener("submit", function (e) {
  e.preventDefault();

  const q1 = document.querySelector('select[name="q1"]').value.toLowerCase();
  const q2 = document.querySelector('select[name="q2"]').value.toLowerCase();
  const q3 = document.querySelector('select[name="q3"]').value.toLowerCase();
  const q4 = document.querySelector('select[name="q4"]').value.toLowerCase();
  const q5 = document.querySelector('select[name="q5"]').value.toLowerCase();
  const q6 = document.querySelector('select[name="q6"]').value.toLowerCase();

  const correctAnswers = ["an", "the", "an", "an", "the", "a"];
  const userAnswers = [q1, q2, q3, q4, q5, q6];

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

  feedback += `</ul><p><strong>Puntaje: ${score} de 6</strong></p>`;
  document.getElementById("feedback").innerHTML = feedback;
});
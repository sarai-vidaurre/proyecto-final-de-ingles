document.getElementById('greetings-activity').addEventListener('submit', function(event) {
  event.preventDefault();

  // Respuestas correctas:
  const answers = {
    q1: 'good morning',             // "Hi! How are you?"
    q2: 'bye',            // "Bye, see you tomorrow!"
    q3: 'How are you?',   // "Good morning! Have a great day!"
    q4: 'take care'       // "Take care! Take care!"
  };

  const form = event.target;
  let score = 0;
  let total = Object.keys(answers).length;
  let feedback = '';

  for (const [key, correctAnswer] of Object.entries(answers)) {
    const userAnswer = form[key].value;
    if (userAnswer === correctAnswer) {
      score++;
      feedback += `<p>Pregunta ${key.slice(1)}: ✔ Correcto</p>`;
    } else {
      feedback += `<p>Pregunta ${key.slice(1)}: ❌ Incorrecto (Respuesta correcta: <strong>${correctAnswer}</strong>)</p>`;
    }
  }

  feedback = `<h4>Resultados: ${score} de ${total} correctas</h4>` + feedback;

  document.getElementById('feedback').innerHTML = feedback;
});
document.getElementById('demo-activity').addEventListener('submit', function (e) {
  e.preventDefault();

  const answers = {
    q1: 'this',
    q2: 'that',
    q3: 'these',
    q4: 'those',
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`select[name="${key}"]`).value;
    if (selected === answers[key]) {
      score++;
    }
  }

  const feedback = document.getElementById('feedback');
  feedback.innerHTML = `✅ Obtuviste ${score} de 4 respuestas correctas.`;
});
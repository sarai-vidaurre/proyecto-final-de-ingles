document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pronoun-quiz");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selects = form.querySelectorAll(".question");
    const correctAnswers = ["I", "He", "They"];
    let correctCount = 0;

    selects.forEach((select, index) => {
      if (select.value === correctAnswers[index]) {
        correctCount++;
      }
    });

    if (correctCount === 3) {
      feedback.innerHTML = `<p style="color: green;">✅ ¡Excelente! Has seleccionado todos los pronombres correctamente.</p>`;
    } else {
      feedback.innerHTML = `<p style="color: orange;">⚠ Has acertado ${correctCount} de 3. Intenta de nuevo.</p>`;
    }
  });
});
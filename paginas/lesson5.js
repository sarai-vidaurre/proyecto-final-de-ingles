function toggleDropdown() {
  const dropdown = document.getElementById("lessonsDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.getElementById("practice-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll(".possessive");
  let correctCount = 0;
  let feedback = "";

  inputs.forEach(input => {
    const userAnswer = input.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const correctAnswer = input.dataset.answer;

    if (userAnswer === correctAnswer) {
      input.style.border = "2px solid green";
      correctCount++;
    } else {
      input.style.border = "2px solid red";
    }
  });

  if (correctCount === inputs.length) {
    feedback = `<p class="correct">🎉 ¡Perfecto! ¡Respondiste todo correctamente!</p>`;
  } else if (correctCount >= 3) {
    feedback = `<p class="correct">👍 ¡Muy bien! Acertaste ${correctCount} de 5. Sigue practicando.</p>`;
  } else {
    feedback = `<p class="incorrect">💡 Intentaste bien, acertaste ${correctCount} de 5. ¡No te rindas!</p>`;
  }

  document.getElementById("feedback").innerHTML = feedback;
});
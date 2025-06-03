// lesson3.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("practice-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const affirmatives = document.querySelectorAll(".affirmative");
    const negatives = document.querySelectorAll(".negative");
    const questions = document.querySelectorAll(".question");

    let valid = true;

    affirmatives.forEach((input) => {
      if (input.value.trim() === "") valid = false;
    });

    negatives.forEach((input) => {
      if (input.value.trim() === "") valid = false;
    });

    questions.forEach((input) => {
      if (input.value.trim() === "") valid = false;
    });

    if (valid) {
      alert("¡Buen trabajo! Has completado la actividad.");
    } else {
      alert("Por favor completa las 3 oraciones afirmativas, negativas y las 3 preguntas.");
    }
  });
});
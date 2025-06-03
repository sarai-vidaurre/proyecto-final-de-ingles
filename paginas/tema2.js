const container = document.getElementById("screensaver-container");
const picker = document.getElementById("objectPicker");

let currentEmoji = picker.value;

picker.addEventListener("change", (e) => {
  currentEmoji = e.target.value;
});

function createFlyingObject(emoji) {
  const el = document.createElement("div");
  el.className = "flying-object";
  el.textContent = emoji;

  // Random vertical position
  el.style.top = ${Math.random() * 90}%;

  container.appendChild(el);

  // Remove after animation
  setTimeout(() => {
    el.remove();
  }, 6000);
}

// Generate objects continuously
setInterval(() => {
  createFlyingObject(currentEmoji);
}, 800);
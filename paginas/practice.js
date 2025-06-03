// Lista de frases y sus audios (usa tus archivos mp3 correctos o usa texto sin audio para demo)
const phrases = [
  { text: "Hello, how are you?", audioSrc: "../audio/hello_how_are_you.mp3" },
  { text: "Good morning", audioSrc: "../audio/good_morning.mp3" },
  { text: "I am a student", audioSrc: "../audio/i_am_a_student.mp3" },
  { text: "They are happy", audioSrc: "../audio/they_are_happy.mp3" },
  { text: "He is my brother", audioSrc: "../audio/he_is_my_brother.mp3" },
  { text: "We are friends", audioSrc: "../audio/we_are_friends.mp3" },
  { text: "This is my book", audioSrc: "../audio/this_is_my_book.mp3" },
  { text: "That is my house", audioSrc: "../audio/that_is_my_house.mp3" },
  { text: "I did it myself", audioSrc: "../audio/i_did_it_myself.mp3" },
  { text: "This is a car", audioSrc: "../audio/this_is_a_car.mp3" },
  { text: "The cat is on the table", audioSrc: "../audio/the_cat_is_on_the_table.mp3" }
];

const phraseButtonsDiv = document.getElementById('phraseButtons');
const currentPhraseP = document.getElementById('currentPhrase');
const playAudioBtn = document.getElementById('playAudio');
const micBtn = document.getElementById('micBtn');
const listeningStatus = document.getElementById('listeningStatus');
const spokenText = document.getElementById('spokenText');
const feedback = document.getElementById('feedback');

let currentAudio = null;
let currentPhrase = null;
let recognition = null;
let recognizing = false;

// Crear botones para cada frase
phrases.forEach((phrase, i) => {
  const btn = document.createElement('button');
  btn.textContent = phrase.text;
  btn.className = 'phrase-btn';
  btn.addEventListener('click', () => selectPhrase(i));
  phraseButtonsDiv.appendChild(btn);
});

function selectPhrase(index) {
  currentPhrase = phrases[index];
  currentPhraseP.textContent = currentPhrase.text;
  feedback.textContent = '';
  spokenText.textContent = '';
  listeningStatus.textContent = '';

  // Desactivar botones mientras se reproduce audio
  playAudioBtn.disabled = false;
  micBtn.disabled = false;

  // Marcar el botón seleccionado
  document.querySelectorAll('.phrase-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelectorAll('.phrase-btn')[index].classList.add('selected');

  // Preparar audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(currentPhrase.audioSrc);

  currentAudio.addEventListener('ended', () => {
    playAudioBtn.textContent = "▶ Play phrase (Reproducir frase)";
    playAudioBtn.disabled = false;
  });

  playAudioBtn.textContent = "▶ Play phrase (Reproducir frase)";
}

playAudioBtn.addEventListener('click', () => {
  if (!currentAudio) return;

  if (currentAudio.paused) {
    currentAudio.play();
    playAudioBtn.textContent = "⏸ Pause phrase (Pausar frase)";
    playAudioBtn.disabled = false;
  } else {
    currentAudio.pause();
    playAudioBtn.textContent = "▶ Play phrase (Reproducir frase)";
    playAudioBtn.disabled = false;
  }
});

// Configurar reconocimiento de voz
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micBtn.addEventListener('click', () => {
    if (recognizing) {
      recognition.stop();
      recognizing = false;
      micBtn.textContent = "🎤 Start Speaking (Hablar)";
      listeningStatus.textContent = "Stopped listening.";
      return;
    }

    if (!currentPhrase) {
      alert("Please select a phrase first. (Por favor selecciona una frase primero)");
      return;
    }

    recognition.start();
    recognizing = true;
    micBtn.textContent = "⏸ Stop Speaking (Detener)";
    listeningStatus.textContent = "Listening...";
    feedback.textContent = '';
    spokenText.textContent = '';
  });

  recognition.onresult = (event) => {
    recognizing = false;
    micBtn.textContent = "🎤 Start Speaking (Hablar)";
    listeningStatus.textContent = "";

    const result = event.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, '').trim();
spokenText.textContent = `You said: "${result}"`;

const expected = currentPhrase.text.toLowerCase().replace(/[.,?!]/g, '').trim();

if (result === expected) {
  feedback.textContent = "✅ Perfect! Well done! (¡Perfecto! ¡Bien hecho!)";
  feedback.style.color = '#44bd32';
} else {
  // Verificar similitud básica (al menos 75% de coincidencia de palabras)
  const expectedWords = expected.split(' ');
  const resultWords = result.split(' ');
  const commonWords = resultWords.filter(word => expectedWords.includes(word)).length;

  if (commonWords / expectedWords.length >= 0.75) {
    feedback.textContent = "🟡 Almost! Good attempt! (¡Casi! Buen intento)";
    feedback.style.color = '#fbc531';
  } else {
    feedback.textContent = "❌ Not quite. Try again or speak clearly. (No es exacto. Intenta de nuevo o habla claro)";
    feedback.style.color = '#e84118';
  }
}
  };

  recognition.onerror = (event) => {
    recognizing = false;
    micBtn.textContent = "🎤 Start Speaking (Hablar)";
    listeningStatus.textContent = "";
    feedback.textContent = "❌ Recognition error: " + event.error;
console.error("SpeechRecognition Error:", event);
    feedback.style.color = '#e84118';
  };

  recognition.onend = () => {
    if (recognizing) {
      recognizing = false;
      micBtn.textContent = "🎤 Start Speaking (Hablar)";
      listeningStatus.textContent = "";
    }
  };
} else {
  micBtn.disabled = true;
  listeningStatus.textContent = "Speech recognition not supported in this browser. (Reconocimiento de voz no soportado)";
}
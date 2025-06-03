function toggleMenu() {
  const ventana = document.getElementById("ventana-deslizante");
  const body = document.body;

  if (ventana.classList.contains("abierta")) {
    cerrarVentanaDeslizante();
  } else {
    ventana.classList.add("abierta");
    body.classList.add("borroso");
  }
}

// Función para cerrar con animación
function cerrarVentanaDeslizante() {
  const ventana = document.getElementById("ventana-deslizante");
  const body = document.body;

  ventana.classList.remove("abierta");
  ventana.classList.add("cerrando");
  body.classList.remove("borroso");

  // Después de la transición, quita "cerrando"
  setTimeout(() => {
    ventana.classList.remove("cerrando");
  }, 400); // Igual al tiempo del CSS (0.4s)
}

// Cerrar ventana si se hace clic fuera
document.addEventListener("click", function (e) {
  const ventana = document.getElementById("ventana-deslizante");
  const icono = document.querySelector(".menu-icono");

  if (
    ventana.classList.contains("abierta") &&
    !ventana.contains(e.target) &&
    !icono.contains(e.target) &&
    !e.target.closest("#popup-contenido")
  ) {
    cerrarVentanaDeslizante();
  }
});

// Mostrar contenido popup
function mostrarPopup(seccion) {
  const contenido = document.getElementById("contenido-dinamico");
  const popup = document.getElementById("popup-contenido");

  let html = "";

  switch (seccion) {
    case "gramatica":
      html = `
        <h3>Gramática - Temas</h3>
        <ul>
         <li><a href="lesson1.html">Lección 1: Saludos y Despedidas</a></li>
<li><a href="lesson2.html">Lección 2: Presentarte</a></li>
<li><a href="lesson3.html">Lección 3: El Verbo "To Be" (Ser/Estar)</a></li>
<li><a href="lesson4.html">Lección 4: Pronombres Personales</a></li>
<li><a href="lesson5.html">Lección 5: Adjetivos Posesivos</a></li>
<li><a href="lesson6.html">Lección 6: Pronombres Demostrativos</a></li>
<li><a href="lesson7.html">Lección 7: Pronombres Reflexivos</a></li>
<li><a href="lesson8.html">Lección 8: Artículos Definidos e Indefinidos</a></li>
        </ul>
        <p>¡Explora paso a paso lo esencial de la gramática inglesa!</p>
      `;
      break;

    case "speaking":
      html = `
        <h3>Speaking & Listening</h3>
        <ul>
          <li><a href="speaking.html">Listening</a></li>
        </ul>
        <p>Practica la pronunciación con diálogos y ejercicios auditivos.</p>
      `;
      break;

    case "practica":
      html = `
        <h3>Práctica</h3>
        <ul>
          <li><a href="practice.html">Practice your English pronunciation by listening and repeating phrases.</a></li>
          <li><a href="diccionario.html">d</a></li>
        </ul>
        <p>Practica tu pronunciación en inglés escuchando y repitiendo frases.</p>
      `;
      break;

    case "diccionario":
      html = `
        <h3>Dictionary</h3>
        <p>Explore keywords, common phrases, and their pronunciation.</p><p>Explora palabras clave, frases comunes y su pronunciación.</p>
        <a href="prueba2.html">Go to the complete Dictionary</a>
      `;
      break;
  }

  contenido.innerHTML = html;
  popup.style.display = "block";
}

function cerrarPopup() {
  document.getElementById("popup-contenido").style.display = "none";
}






// Simulación de nombre registrado (puedes reemplazar con nombre real desde localStorage o backend)
const nombre = localStorage.getItem("nombreUsuario") || "Usuario";
document.getElementById("nombre-usuario").textContent = nombre;

// Ocultar bienvenida tras la animación
setTimeout(() => {
  const bienvenida = document.getElementById("pantalla-bienvenida");
  bienvenida.style.display = "none";
}, 4000); // 3s de espera + 1s de fade

















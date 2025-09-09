const form = document.querySelector("form");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
  mensaje.textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
});

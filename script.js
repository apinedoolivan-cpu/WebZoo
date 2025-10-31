function cargarEstructura() {
  fetch("cabecera.html")
    .then(r => r.text())
    .then(h => (document.getElementById("cabecera").innerHTML = h));
  fetch("pie.html")
    .then(r => r.text())
    .then(h => (document.getElementById("pie").innerHTML = h));
}

function animarCanguro() {
  // animación para animales.html
}

function validarFormulario() {
  // validación para operarios.html
}

document.addEventListener("DOMContentLoaded", () => {
  cargarEstructura();
  if (document.body.classList.contains("pagina-animales")) animarCanguro();
  if (document.body.classList.contains("pagina-operarios")) validarFormulario();
});
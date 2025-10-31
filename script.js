function cargarCabeceraYPie() {
  fetch("cabecera.html")
    .then(r => r.text())
    .then(h => (document.getElementById("cabecera").innerHTML = h));
  fetch("pie.html")
    .then(r => r.text())
    .then(h => (document.getElementById("pie").innerHTML = h));
}

function activarValidacionFormularios() {
  let forms = document.querySelectorAll(".needs-validation");

  forms.forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCabeceraYPie();

  if (document.querySelector(".needs-validation")) {
    activarValidacionFormularios();
  }
});
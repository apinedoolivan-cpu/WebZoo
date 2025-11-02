document.addEventListener("DOMContentLoaded", () => {
  let canguro = document.getElementById("canguro");
  let animacion = document.getElementById("animacionCanguro");
  let contenedorCarrusel = document.getElementById("contenedorCarrusel");
  let info = document.getElementById("infoAnimal");
  let carousel = new bootstrap.Carousel(document.getElementById("carruselAnimales"), { interval: false });

  let nombres = ["Caballo","Camello","Cebra","Coyote","Elefante","Gavilan","Guepardo","Leon","Oso","Pato","Pelicano","Rinoceronte","Zorro"];

  let descripciones = {};

  fetch("js/animales.json")
    .then(response => response.json())
    .then(data => {
      descripciones = data;
    })
    .catch(err => console.error("Error al cargar animales.json:", err));

  canguro.addEventListener("animationend", () => {
    animacion.style.display = "none";
    contenedorCarrusel.classList.remove("d-none");
    info.innerHTML = descripciones.Caballo;
  });

  document.getElementById("carruselAnimales").addEventListener("slid.bs.carousel", (e) => {
    let nombre = nombres[e.to];
    info.innerHTML = descripciones[nombre];
  });

  document.querySelectorAll(".selector-animal").forEach((img, index) => {
    img.addEventListener("click", () => carousel.to(index));
  });
});

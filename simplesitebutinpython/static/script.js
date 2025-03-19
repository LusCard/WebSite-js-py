const entrada = document.getElementById("entrada");
const contenedorBotones = document.getElementById("contenedor-botones");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

const colores = [
  { fondo: "white", texto: "black" },
  { fondo: "black", texto: "white" },

  { fondo: "lightblue", texto: "red" },
];
let indiceColor = 0;

function mostrarModal() {
  modal.style.display = "block";
}
function ocultarModal() {
  modal.style.display = "none";
}

function alternarColores(boton) {
  const estado = colores[indiceColor];
  boton.style.backgroundColor = estado.fondo;
  boton.style.color = estado.texto;
  indiceColor = (indiceColor + 1) % colores.length;
}

entrada.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const texto = entrada.value.trim();
    if (texto) {
      const boton = document.createElement("button");
      boton.textContent = texto;
      boton.style.margin = "5px";
      boton.style.padding = "10px";
      boton.style.border = "none";
      boton.style.cursor = "pointer";

      boton.addEventListener("click", () => alternarColores(boton));

      contenedorBotones.appendChild(boton);

      entrada.value = "";
    }
  }
});

cerrarModal.addEventListener("click", ocultarModal);

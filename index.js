
let precio = 400000;
let valorInicial = document.querySelector(".valor-neto");
let cantidadInput = document.querySelector('input[type="number"]');
let colorInput = document.querySelector('input[type="text"]');
let valorTotal = document.querySelector(".valor-total");
let cantidadTotal = document.querySelector(".cantidad-total");
let colorFinal = document.querySelector(".color div");
let calcularTotalBtn = document.querySelector("#calcularBtn");

function calcularTotal() {
  const cantidad = cantidadInput.value;
  const color = colorInput.value;

  valorTotal.innerHTML = (precio * +cantidad).toLocaleString();
  cantidadTotal.innerHTML = cantidad;
  colorFinal.style.backgroundColor = color;
}

valorInicial.innerHTML = precio.toLocaleString();

calcularTotalBtn.addEventListener("click", calcularTotal);

const input = document.querySelector("#texto");
const resultado = document.getElementById("resultado");
const resultadoMayus = document.getElementById("resultadoMayusculas");

input.addEventListener('input', function() {
  const texto = input.value.toUpperCase();
  resultado.textContent = texto;
});

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches(".btn")) return;
  		const texto = input.value.toUpperCase();
  		resultadoMayus.textContent = texto;
  });
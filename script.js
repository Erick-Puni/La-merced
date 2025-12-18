function calcular() {
  const cajaInicial = parseFloat(document.getElementById("cajaInicial").value) || 0;
  const cajaFinal = parseFloat(document.getElementById("cajaFinal").value) || 0;
  const sistemaInicio = parseFloat(document.getElementById("sistemaInicio").value) || 0;
  const sistemaFinal = parseFloat(document.getElementById("sistemaFinal").value) || 0;

  const ventaSistema = sistemaFinal - sistemaInicio;
  const totalVendido = cajaFinal - cajaInicial;
  const ventaFuera = totalVendido - ventaSistema;


  document.getElementById("ventaSistema").textContent = ventaSistema.toFixed(2);
  document.getElementById("ventaFuera").textContent = ventaFuera.toFixed(2);
  document.getElementById("totalVendido").textContent = totalVendido.toFixed(2);

  const resultadoBox = document.getElementById("resultadoBox");
  if (resultadoBox) {
    resultadoBox.classList.remove("hidden");
  }

  
  if (totalVendido < 0) {
    resultadoBox.style.borderLeft = "4px solid #D63384"; // rojo
  } else {
    resultadoBox.style.borderLeft = "4px solid #7B2CBF"; // morado
  }
}
document.getElementById("btnIngresar").addEventListener("click", () => {
  window.location.href = "cuadre_caja.html";
});

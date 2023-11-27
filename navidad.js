var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
const URL = window.location.href;

async function init() {
  await getUser();
  setTimeout(() => {
    content2.style.display = "block";
  }, 7500);
}

init();
async function getUser() {
// Fecha de hoy
var hoy = new Date();

// Fecha de Navidad (25 de diciembre)
var navidad = new Date(hoy.getFullYear(), 11, 25); // 11 representa diciembre (los meses en JavaScript van de 0 a 11)

// Si la fecha de Navidad ya pasó este año, calculamos para el próximo año
if (hoy.getMonth() === 11 && hoy.getDate() > 25) {
  navidad.setFullYear(navidad.getFullYear() + 1);
}

// Calculamos la diferencia en milisegundos entre las dos fechas
var diferencia = navidad.getTime() - hoy.getTime();

// Convertimos la diferencia de milisegundos a días
var diasParaNavidad = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

// Mostrar la cuenta regresiva en el elemento con el ID "cuentaRegresiva"
document.getElementById("cuentaRegresiva").innerHTML = diasParaNavidad;
}
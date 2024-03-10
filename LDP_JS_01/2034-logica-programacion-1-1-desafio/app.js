alert("¡Bienvenida y bievenido a nuestro sitio web!");
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombre = prompt("Ingrese su nombre:");
edad = prompt("Ingrese su edad:");

if (edad >= 18) {
     alert("¡Puedes obtener tu licencia de conducir!")
}
// author: F.R., G.M.

// 1. Días de la semana
let diaUsuario = prompt("¿Qué día es hoy?:");
console.log(diaUsuario);
if (diaUsuario == "Sábado" ||  diaUsuario == "Domingo") {
     alert("¡Buen fin de semana!");
}
else {
     alert("¡Buena semana!");
}

// 2. Positivo o negativo
let numPosNeg = prompt("Ingrese un número positivo o negativo:");
if (numPosNeg >= 0) {
     alert("El número es positivo");
}
else {
     alert("El número es negativo");
}

// 3. Juego de números
let numJuego = prompt("Ingrese un número del 0 al 200");
if (numJuego >= 100) {
     alert("¡Felicidades, has ganado!");
}
else {
     alert("Intenta nuevamente para ganar.");
}

// 4. Uso de template string
let saldoUsuario = 10000;
alert(`Tu saldo actual es de: $ ${saldoUsuario} MXN`);

// 5. Bienvenida al usuario
let nombreUsuario = prompt("Ingrese su nombre:");
alert(`Bienvenido de vuelta ${nombreUsuario}`);
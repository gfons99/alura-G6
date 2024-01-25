// Variables
let numeroSecreto = 3;
let numeroUsuario = prompt("Indíqueme un número entre 1 y 10, por favor:");
console.log(numeroUsuario);
/*
Código de la
comparación
*/
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);
if (numeroUsuario == numeroSecreto) {
     console.log("Se cumple la condición");
     alert(`Adivinaste el número: ${numeroUsuario}`);
}
else {
     console.log("No se cumple la condición");
     alert("No acertaste el número");
}
console.log("Programa terminado");
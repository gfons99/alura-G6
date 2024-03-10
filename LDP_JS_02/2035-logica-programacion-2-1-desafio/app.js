// 2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function msgConsola() {
    console.log("El botón \"Console\" fue clicado");
}

function ciudadAlert() {
    let ciudad = prompt("Dime el nombre de una ciudad:")
    alert("Estuve en "+ ciudad + " y me acordé de ti.");
}

function msgAlert() {
    alert("Yo amo JS.")
}

function suma2Num() {
    alert("Se hará la suma dos números.")
    let num1 = parseInt(prompt("Ingresa el primer número"));
    let num2 = parseInt(prompt("Ingresa el segundo número"));
    let resultado = num1 + num2;
   alert(`La suma de ${num1} y ${num2} es igual a ${resultado}`);
}



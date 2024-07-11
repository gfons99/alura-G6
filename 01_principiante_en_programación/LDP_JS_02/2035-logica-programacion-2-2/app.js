// Aquí colvemos la función genérica al agregar parámetros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Esta variable es un objeto
    elementoHTML.innerHTML = texto;
    return; // No retorna nada
}

asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indique un número del 1 al 100');

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

let numeroSecreto = generarNumeroSecreto(); // variable global
console.log(numeroSecreto);
console.log(typeof(numeroSecreto));

function verificarIntento() {
    // Para buscar por etiqueta
    // let numeroDelUsuario = document.querySelector('input');
    // Para buscar por ID
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDelUsuario);
    console.log(typeof(numeroDelUsuario));
    console.log(numeroSecreto == numeroDelUsuario); // tipo: boolean
}
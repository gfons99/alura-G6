// Variables globales
let numeroSecreto;
let intentos;

// Aquí colvemos la función genérica al agregar parámetros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Esta variable es un objeto
    elementoHTML.innerHTML = texto;
    return; // No retorna nada
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indique un número del 1 al 100');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();

    console.log("Número secreto:")
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));

}
condicionesInciales();

function generarNumeroSecreto() {
    return Math.floor(Math.random()*100)+1;
}

function limpiarCaja() {
    // Usamos querySelector pero por ID con el #
    document.querySelector('#valorUsuario').value=''
}

function verificarIntento() {
    // Para buscar por etiqueta
    // let numeroDelUsuario = document.querySelector('input');
    // Para buscar por ID
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("Número del usuario:");
    console.log(numeroDelUsuario);
    console.log(typeof(numeroDelUsuario));

    console.log(numeroSecreto === numeroDelUsuario); // tipo: boolean
    if(numeroSecreto === numeroDelUsuario) {
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        limpiarCaja();
        intentos++;
    }
}

function reiniciarJuego() {
    // 1. Limpiar la caja
    limpiarCaja();
    // 2. Mensaje de inicio
    // 3. Generar el número aleatorio
    // 4. Reiniciar el número de intentos
    condicionesInciales();
    // 5. Deshabilitar el botón de "Nuevo juego"
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
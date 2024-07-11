//Variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 0;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    console.log(numeroUsuario);

    intentos = intentos + 1;
    console.log(intentos);

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        if (intentos == 1) {
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} intento`);
        }
        else {
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} intentos`);
        }
    } else {
        // Condicionales anidados
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        }
        else {
            alert('El número secreto es mayor');
        }
    }
}
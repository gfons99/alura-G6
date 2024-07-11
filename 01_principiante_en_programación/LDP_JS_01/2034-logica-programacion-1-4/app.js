//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1; // [1,10]
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 3;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);

    // Incrementar contador
    // intentos = intentos + 1;
    // intentos += 1;
    intentos++;
    console.log(intentos);

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
    } else {
        // Condicionales anidados
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        }
        else {
            alert('El número secreto es mayor');
        }
    }

    if (intentos == maximosIntentos) {
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
    }
}
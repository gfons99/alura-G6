// author: F.R., G.M.
// date: 2024-01-25

alert("¡Bienvenido al juego!");
let numeroMinimo = parseInt(prompt("Ingrese el número mínimo"));
let numeroMaximo = parseInt(prompt("Ingrese el número máximo"));

//Variables
let numeroSecreto = Math.floor(Math.random()*(numeroMaximo-numeroMinimo))+numeroMinimo; // [numeroMinimo, numeroMaximo]
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 5;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Adivine el número entre ${numeroMinimo} y ${numeroMaximo}`));
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
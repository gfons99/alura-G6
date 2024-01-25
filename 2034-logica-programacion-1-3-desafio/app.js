// author: F.R., G.M

// 1. Contador del 1 al 10
console.log("Ejercicio 1:");
let cont1 = 1;
while (cont1 <= 10) {
    console.log(cont1);
    cont1 = cont1 + 1;
}

// 2. Contador del 10 al 0
console.log("Ejercicio 2:");
let cont2 = 10;
while (cont2 >= 0) {
    console.log(cont2);
    cont2 = cont2 - 1;
}

// 3. Contador progresivo (de 0 a n)
console.log("Ejercicio 3:");
let numeroMaximo = prompt("Ingrese un número del 0 al 10:");
console.log("numeroMaximo: " + numeroMaximo);
let cont3 = 0;
while (cont3 <= numeroMaximo) {
    console.log(cont3);
    cont3 = cont3 + 1;
}

// 4. Contador regresivo (de 10 a n)
console.log("Ejercicio 4:");
let numeroMinimo = prompt("Ingrese un número del 0 al 10:");
console.log("numeroMinimo: " + numeroMinimo);
let cont4 = 10;
while (cont4 >= numeroMinimo) {
    console.log(cont4);
    cont4 = cont4 - 1;
}

let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

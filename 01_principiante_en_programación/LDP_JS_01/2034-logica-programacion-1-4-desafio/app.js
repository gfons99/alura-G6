// author: F.R., G.M.
// 1. Bienvenida
console.log("Ejercicio 1:");
console.log("¡Bienvenido!");

// 2. Nombre en consola
console.log("Ejercicio 2:");
let nombre = "Gadiel";
console.log("¡Hola, " + nombre + "!");

// 3. Nombr en alerta
console.log("Ejercicio 3:");
nombre = "Gadiel";
alert(`¡Hola, ${nombre}!`);

// 4. Prompt a consola
console.log("Ejercicio 4:");
let lenguajeUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("lenguajeUsuario:" + lenguajeUsuario);

// 5. Suma
console.log("Ejercicio 5:");
let valor1 = 3;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + "es igual a " + resultado);


// 6. Resta
console.log("Ejercicio 6:");
valor1 = 3;
valor2 = 7;
resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + "es igual a " + resultado);

// 7. Edad
console.log("Ejercicio 7:");
let edadUsuario = prompt("Ingrese su edad:");
if (edadUsuario >= 18) {
    console.log("Mayor de edad");
}
else {
    console.log("Menor de edad");
}

// 8. Positivo, negativo, cero
console.log("Ejercicio 8:");
let numero = parseInt(prompt("Ingrese un número positivo, negativo o cero"));
if (numero > 0) {
    console.log("El número es positivo");
}
else if (numero < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}

// 9. Blucle simple
console.log("Ejercicio 9:");
let cont = 1;
while (cont <= 10) {
    console.log(cont);
    cont++;
}

// 10. Nota escolar
console.log("Ejercicio 10:");
let nota = 5 // 0 a 10
if (nota >= 7) {
    console.log("Aprobado");
}
else {
    console.log("Reprobado");
}

// 11. Número [0.X, 1.0)
console.log("Ejercicio 11:");
console.log(Math.random());

// 12. Número [1,10]
console.log("Ejercicio 12:");
console.log(Math.floor(Math.random()*10)+1);


// 13. Número [1,1000]
console.log("Ejercicio 13:");
console.log(Math.floor(Math.random()*1000)+1);
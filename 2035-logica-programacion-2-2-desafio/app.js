// author: F.R.,G.M.

// 1.	Crear una función que muestre "¡Hola, mundo!" en la consola.
console.log("EJERCICIO 1:");
function holaMundoEnConsola(){
    console.log("¡Hola, mundo!");
}

holaMundoEnConsola();

// 2.	Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
console.log("EJERCICIO 2:");
function saludarEnConsola(nombre){
    console.log("¡Hola, "+nombre+"!");
}

saludarEnConsola(prompt("Ingrese su nombre:"));

// 3.	Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
console.log("EJERCICIO 3:");
function duplicarNumero(num) {
    return num * 2;
}

console.log(duplicarNumero(7));

// 4.	Crear una función que reciba tres números como parámetros y devuelva su promedio.
console.log("EJERCICIO 4:");
function promedio3Num(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(promedio3Num(3, 6, 7));

// 5.	Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
console.log("EJERCICIO 5:");
function numeroMayor(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}

console.log(numeroMayor(3, 6));

// 6.	Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
console.log("EJERCICIO 6:");
function numeroAlCuadrado(num) {
    return num * num;
}


console.log(numeroAlCuadrado(6));
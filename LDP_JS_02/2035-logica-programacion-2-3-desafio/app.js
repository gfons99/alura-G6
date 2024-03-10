// author: F.R.,G.M.

// 1.	Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(alturaMetros, pesoKilos) {
    return pesoKilos/ (alturaMetros**2);
}
console.log("Ejercicio 01");
console.log("IMC = " + calcularIMC(1.67, 70));

// 2.	Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function carcularFactorial(num) {
    let nFac = 1;
    let n = 0;
    while (n < num) {
        nFac = nFac * (n+1);
        n++;
    }
    return nFac;
}
console.log("Ejercicio 02");
console.log("Factorial 0 = " + carcularFactorial(0));
console.log("Factorial 1 = " + carcularFactorial(1));
console.log("Factorial 2 = " + carcularFactorial(2));
console.log("Factorial 3 = " + carcularFactorial(3));
console.log("Factorial 4 = " + carcularFactorial(4));
console.log("Factorial 5 = " + carcularFactorial(5));
console.log("Factorial 6 = " + carcularFactorial(6));

// 3.	Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirUSDaMXN(usd) {
    return usd * 17.11;
}
console.log("Ejercicio 03");
console.log("   1 USD son: " + convertirUSDaMXN(1) + " MXN");
console.log("  14 USD son: " + convertirUSDaMXN(14) + " MXN");
console.log("8000 USD son: " + convertirUSDaMXN(8000) + " MXN");


// extra para 4. 5. y 6.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // No retorna nada
}
function limpiarCaja() {
    // Usamos querySelector pero por ID con el #
    document.querySelector('#valorUsuario').value=''
}

// 4.	Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaRectangular(altura, anchura) {
    return altura*anchura;
}
function perimetroRectangular() {
    return (altura*2) + (anchura*2);
} 

let altura;
let anchura;
asignarTextoElemento('h1', 'Cálculo del área (rectangular)');
asignarTextoElemento('p', 'Indique la altura:');

function ingresarAltura() {
    altura = parseInt(document.getElementById('valorUsuario').value);
    console.log("altura= "+altura);
    limpiarCaja();
    asignarTextoElemento('p', 'Indique la anchura:');
}

function ingresarAnchura() {
    anchura = parseInt(document.getElementById('valorUsuario').value);
    console.log("anchura= "+anchura);
    limpiarCaja();
    asignarTextoElemento('p', 'Presione calcular:');
}

function calcularAreaYPerimetro() {
    console.log("Ejercicio 04");
    let area = areaRectangular(altura, anchura);
    let perimetro = perimetroRectangular();
    asignarTextoElemento('p', 'Area = '+area+' Perímetro = '+perimetro);
}

// 5.	Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaCircular(radio){
    let pi = 3.14;
    return pi * (radio**2);
}

function perimetroCircular() {
    let pi = 3.14;
    return pi * (radio*2);
}

console.log("Ejercicio 05");
let radio = 5;
console.log("Radio = "+radio);
console.log("Área = "+areaCircular(radio));
console.log("Perímetro = "+perimetroCircular(radio));

// 6.	Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(num) {
    let i = 0;
    while (i <= 10) {
        console.log(num+" x "+i+" = "+(num*i));
        i++;
    }
}

console.log("Ejercicio 06");
tablaDeMultiplicar(5);
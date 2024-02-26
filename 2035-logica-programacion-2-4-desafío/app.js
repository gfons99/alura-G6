// author: F.R.,G.M.

// 1.	Crea una lista vacía llamada "listaGenerica".
console.log("### EJERCICIO 01 ###")
let listaGenerica = [];
console.log(listaGenerica);

// 2.	Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
console.log("### EJERCICIO 02 ###")
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
console.log(lenguagesDeProgramacion);

// 3.	Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
console.log("### EJERCICIO 03 ###")
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
console.log(lenguagesDeProgramacion);

// 4.	Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion".
console.log("### EJERCICIO 04 ###")
function mostrarAscendente(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
mostrarAscendente(lenguagesDeProgramacion);

// 5.	Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
console.log("### EJERCICIO 05 ###")
function mostrarDescendente(arreglo) {
    for (let i = arreglo.length-1; i >= 0; i--) {
        console.log(arreglo[i]);
    }
}
mostrarDescendente(lenguagesDeProgramacion);

// 6.	Crea una función que calcule el promedio de los elementos en una lista de números.
console.log("### EJERCICIO 06 ###")
function calcularPromedio(arreglo) {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    promedio = suma / arreglo.length;
    console.log("promedio = "+promedio);
}
calcularPromedio([9,6,8,7]);

// 7.	Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
console.log("### EJERCICIO 07 ###")
function encontrarMayorYMenor(arreglo) {
    // Nota. Podríamos usar Math.max y Math.max con "spread syntax". pero hay un límite de 65,536 elementos
    // console.log("El número más grande es: "+Math.max(...arreglo));
    // console.log("El número más pequeño es: "+Math.min(...arreglo));
    let grande = arreglo[0];
    let  pequenio = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if(arreglo[i] > grande) {
            grande = arreglo[i];
        }
        if(arreglo[i] < pequenio) {
            pequenio = arreglo[i];
        }
    }

    console.log("El número más grande es: "+grande);
    console.log("El número más pequeño es: "+pequenio);
}
encontrarMayorYMenor([5,8,2,12,3,4])

// 8.	Crea una función que devuelva la suma de todos los elementos en una lista.
console.log("### EJERCICIO 08 ###")
function sumarElementosDeUnArreglo(arreglo) {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    console.log("suma = "+suma);
}
sumarElementosDeUnArreglo([9,6,8,7]);

// 9.	Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
console.log("### EJERCICIO 09 ###")
function encontrarPosElemento(arreglo, num) {
    let pos = -1;
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == num) {
            pos = i;
            console.log(num+" está en la posición "+pos+" del arreglo");
        }
    }
    return pos;
}
console.log(encontrarPosElemento([9,6,8,7,3,4,5,6,7,8,9,3,6,4,3,5],4));
console.log(encontrarPosElemento([9,6,8,7,3,4,5,6,7,8,9,3,6,4,3,5],5));
console.log(encontrarPosElemento([9,6,8,7,3,4,5,6,7,8,9,3,6,4,3,5],10));

// 10.	Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
console.log("### EJERCICIO 10 ###")
function sumarArregos(arreglo_01, arreglo_02) {
    let arreglo_res =[];
    for (let i = 0; i < arreglo_01.length; i++) {
        arreglo_res.push(arreglo_01[i] + arreglo_02[i]);
    }
    return arreglo_res;
}
console.log(sumarArregos([3,4,6,8], [1,7,2,8]));

// 11.	Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
console.log("### EJERCICIO 11 ###")
function calcularArregloAlCuadrado(arreglo) {
    let arregloCuadrado = [];
    for (let i = 0; i < arreglo.length; i++) {
        arregloCuadrado.push(arreglo[i]**2);
    }
    return arregloCuadrado
}
console.log(calcularArregloAlCuadrado([3,5,7,2,7,3,8,9]));
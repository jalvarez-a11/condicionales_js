"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
/*
if (texto1 > texto2) {
    console.log ("palabra1 es mayor" + texto1 + "que la palabra2");
    alert("la palabra es mayor" + + texto1);

}else if (texto1 < texto2) {
    console.log ("palabra1 es menor" + texto1 + "que la palabra2");
    alert("la palabra es menor" + + texto1);

} else  {
    console.log ("no coincide");
     
}  */

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
/*
if (copiaTexto1 === texto1) {
    console.log ("la palabra es igual" + texto1 + "a la palabra texto1");
    alert("la palabra es igual" + + texto1); 

    }  else {
        console.log("la palabra no es igual");
    }    */

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if (copiaTexto1 == texto1) {
    console.log ("la palabra es distinta" + texto1 + "a la palabra texto1");
    alert("la palabra es distinta" + + texto1); 

    }  else {
        console.log("la palabra es igual");
    }
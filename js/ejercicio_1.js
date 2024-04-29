"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
/*
if (numero1 == numero2) {
    console.log ("el numero1 es igual" + numero1 + "que el numero2");
    
alert("el numero es igual" + + numero1);
}else if (numero1 > numero2) {
    console.log ("el numero1 mayor es" + numero1 + "que el numero2");
    alert("el numero mayor es" + + numero1);

} else  {
    console.log ("el numero1 menor es" + numero1 + "que el numero2");
    alert("el numero menor es" + + numero1); 
}
*/
// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
/*if (numero1 == 0) {
    console.log ("el numero1 es cero" + numero1);
    
alert("el numero es 0");
}else if (numero1 > 1) {
    console.log ("el numero1 es positivo" + numero1);
    alert("el numero es positivo");

} else  {
    console.log ("el numero1 es negativo" + numero1);
    alert("el numero es negativo");
} */

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
/*if ((numero1 > 0) && (numero1 < 100)) {
    alert ("el numero es mayor a 0" + numero1 + " y es menor a 100");

     } else {
        alert ("el numero no esta entre 0 y 100");
     } */

     // Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
if ((numero1 < 10) || (numero2 > -2)) {
    alert ("el numero cumple el rango" + numero1 + "" + numero2);

     } else {
        alert ("el numero no cumple el rango");
     }
     

"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

//  Ejercicios de práctica numérica
//  Condicionales anidados
const numero1 = 7;
const numero2 = -2;

//  Verifique si el numero1 es mayor a 5
//    --> En caso afirmativo, verifique si el numero2
//        es positivo
//        --> En caso afirmativo imprima en pantalla "Resp=1"
//        --> En caso negativo imprima en pantalla   "Resp=2"
if (numero1 > 5) {
    console.log ("el numero1 es mayor" + numero1);
    alert("el numero es mayor" + + numero1);

}else if (numero2 > 0) {
    console.log ("el numero2 es positivo" + numero2);
    alert("Resp=1" + + numero1);

} else  {
    console.log ("el numero2 es negativo" + numero2);
    alert("Resp=2" + + numero2); 

    }


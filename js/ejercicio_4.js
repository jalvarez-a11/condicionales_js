"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if (texto1 === texto2) {
    console.log ("el texto1 es igual" + texto1 + "al texto2");
    
alert("el texto es igual");
}else if (texto1 < texto2) {
    console.log ("el texto1 es mayor" + texto1 + "que el texto2");
    alert("el texto1 es mayor");

} else  {
    console.log ("el texto1 es menor" + texto1 + "que el texto2");
    alert("el texto es menor"); 
    }

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda

//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)

//Es por El ordenamiento lexicográfico es un método para ordenar cadenas de texto según el orden de sus caracteres individuales, siguiendo las reglas del alfabeto. En otras palabras, las cadenas se comparan carácter por carácter, y la primera cadena que difiere en un carácter posterior en el alfabeto se considera la "mayor".



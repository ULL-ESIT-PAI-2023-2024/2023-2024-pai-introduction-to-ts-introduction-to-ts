/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the conditionals sintaxis
 *       How to compile:
 *          * tsc ./conditionals.ts && node ./conditionals.js
 *          * ts-node ./conditionals.ts
 */

let randomVariable = 40;
const randomVariable2: number = 50;

if (randomVariable > randomVariable2) {
  console.log('YOU ENTERED THROUGH THE IF');
} else if (randomVariable < randomVariable2) {
  console.log('YOU ENTERED THROUGH THE ELSE IF');
} else {
  console.log('YOU ENTERED THROUGH THE ELSE');
}

switch (randomVariable) {
  case randomVariable2:
    console.log('YOU ENTERED THROUGH THE FIRST CASE');
    break;
  case 100:
    console.log('YOU ENTERED THROUGH THE SECOND CASE');
    break;
  default:
    console.log('YOU ENTERED THROUGH THE DEFAULT');
    break;
}
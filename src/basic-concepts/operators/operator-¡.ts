/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use the operator !. sintax
 *       How to compile:
 *          * tsc ./operator-!.ts && node ./operator-!.js
 *          * ts-node ./operator-!.ts
 */

let person = {
  name: 'Jorge',
  dog: {
    name: 'Firulais'
  }
};
  
let dogNameSize = person.dog!.name!.length;
console.log(dogNameSize)
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use yield sintax
 *       How to compile:
 *          * tsc ./yield.ts && node ./yield.js
 *          * ts-node ./yield.ts
 */

function* numberGenerator(index: number) {
  while (index < 5) {
    yield index;
    ++index;
  }
}

let iterator = numberGenerator(0);
console.log(iterator.next().value);
console.log(iterator.next().value);
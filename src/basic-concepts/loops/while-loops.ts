/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the while/ do while loops sintaxis
 *       How to compile:
 *          * tsc ./whileLoops.ts && node ./whileLoops.js
 *          * ts-node ./whileLoops.ts
 */

let count: number = 0;
const max: number = 10;

while (count < max) {
  console.log(count);
  ++count;
}

do {
  console.log(count);
  ++count;
} while (count < max);
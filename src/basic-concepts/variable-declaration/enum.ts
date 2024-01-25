/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type enum
 *       How to compile:
 *          * tsc ./enum.ts && node ./enum.js
 *          * ts-node ./enum.ts
 */

// enum is a way to define a set of named constants.
enum Direction {
  North,
  South,
  East,
  West
}
let myDirection: Direction = Direction.North;
console.log(myDirection); // Print: 0
console.log(Direction[myDirection]); // Print: North
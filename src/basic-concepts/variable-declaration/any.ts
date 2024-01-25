/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type any
 *       How to compile:
 *          * tsc ./any.ts && node ./any.js
 *          * ts-node ./any.ts
 */

// any is a data type that represents any value and disables
// type checking for that value. Unlike other types in TypeScript that
// provide a level of type safety, any allows unrestricted operations
// and does not provide type checks during compilation.

// BAD PRACTICE
function concatenationOfStrings(a: any, b: any): any {
  return a + b;
}
const result = concatenationOfStrings("Hola, ", 42);
// THIS WILL COMPILE BUT IN EXECUTION TIME MIGHT FAIL
console.log(result);
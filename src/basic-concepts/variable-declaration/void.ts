/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type void
 *       How to compile:
 *          * tsc ./void.ts && node ./void.js
 *          * ts-node ./void.ts
 */

// void is a data type used to represent the absence of any type.
// It is commonly used as the return type of functions that
// do not return an explicit value.
function printMessage(): void {
  console.log("Hello, TypeScript");
}
// válido, ya que printMessage() no devuelve un valor
let result: void = printMessage();
// Error: Type 'number' is not assignable to type 'void'.
// const result: void = 42;
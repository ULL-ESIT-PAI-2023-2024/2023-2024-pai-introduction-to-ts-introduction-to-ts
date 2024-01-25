/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type undefined
 *       How to compile:
 *          * tsc ./undefined.ts && node ./undefined.js
 *          * ts-node ./undefined.ts
 */

// undefined is a value and a data type that represents the absence
// of an assigned value. You can use undefined as a value assigned to
// a variable or as a data type to indicate that a variable
// may be undefined.
let myVariable: string | undefined;
console.log(myVariable); // Print: undefined
myVariable = "Hello, TypeScript";
console.log(myVariable); // Print: Hello, TypeScript
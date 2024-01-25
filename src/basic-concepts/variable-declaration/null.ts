/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type null
 *       How to compile:
 *          * tsc ./null.ts && node ./null.js
 *          * ts-node ./null.ts
 */

// null is used to represent a null value or the intentional
// absence of an object or value.
let value: string | null;
value = "Hello, TypeScript";
console.log(value); // Print: Hello, TypeScript
value = null;
console.log(value); // Print: null
// Error: Type 'number' is not assignable 
// to type 'string | null'.
// value = 42;
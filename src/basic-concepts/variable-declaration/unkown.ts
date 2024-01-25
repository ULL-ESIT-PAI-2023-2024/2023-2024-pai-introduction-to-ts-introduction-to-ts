/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type unkown
 *       How to compile:
 *          * tsc ./unkown.ts && node ./unkown.js
 *          * ts-node ./unkown.ts
 */

// unknown is a data type introduced in version 3.0 of the language.
// It is used to represent a type of value that is unknown at compile time,
// or a value whose type cannot be accurately determined.
function printLength(myObject: unknown): void {
  if (typeof myObject === 'string') {
    console.log(myObject.length); // OK, TypeScript knows it´s a string
  } else {
    console.log('Unable to determine the length.');
  }
}

const myString: string = 'Hola, TypeScript';
printLength(myString); // OK
const myNumber: number = 42;
// Error, cannot determine the lenght of a number instance
printLength(myNumber);
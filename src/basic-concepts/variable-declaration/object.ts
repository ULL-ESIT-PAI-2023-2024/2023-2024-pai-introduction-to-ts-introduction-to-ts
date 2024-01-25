/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type object
 *       How to compile:
 *          * tsc ./object.ts && node ./object.js
 *          * ts-node ./object.ts
 */

// object is used to represent any non-primitive value.
// This includes objects, arrays, functions, and any other kind of
// structure that is not a primitive data type like
// number, string, boolean, null, or undefined.
let myObject: object;
myObject = { key: 'value' }; // OK
console.log(myObject);
myObject = [1, 2, 3]; // OK
console.log(myObject);
myObject = function () { /* ... */ }; // OK
console.log(myObject);
// These will cause compilation errors
// myObject = 42; // Error, type 'number' is not 'object'
// myObject = "string"; // Error, type 'string' is not 'object'
// myObject = true; // Error, type 'boolean' is not 'object'
// myObject = null; // Error, type 'null' is not 'object'
// myObject = undefined; // Error, type 'undefined' is not 'object'
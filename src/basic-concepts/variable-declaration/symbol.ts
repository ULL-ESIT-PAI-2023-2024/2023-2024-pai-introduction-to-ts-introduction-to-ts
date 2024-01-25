/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type symbol
 *       How to compile:
 *          * tsc ./symbol.ts && node ./symbol.js
 *          * ts-node ./symbol.ts
 */

// symbol Symbols are unique, immutable values commonly used
// as unique identifiers for object properties.
const symbol1 = Symbol();
const symbol2 = Symbol();
// console.log(symbol1 === symbol2);
const symbol3 = Symbol("miSymbol");
const symbol4 = Symbol("miSymbol");
//console.log(symbol3 === symbol4);
// Symbols are often used as keys for object properties when
// you want to avoid collisions with other properties.
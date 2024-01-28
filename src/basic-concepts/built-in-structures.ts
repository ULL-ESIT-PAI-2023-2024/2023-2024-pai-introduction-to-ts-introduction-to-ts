/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use built-in data structures
 *       How to compile:
 *          * tsc ./built-in-structures.ts && node ./built-in-structures.js
 *          * ts-node ./built-in-structures.ts
 */

let myMap = new Map<string, number>();
let mySet = new Set<number>();

myMap.set('one', 1);
myMap.set('one', 1);
myMap.set('two', 2);

console.log(myMap);

mySet.add(1);
mySet.add(1);
mySet.add(2);

console.log(mySet);
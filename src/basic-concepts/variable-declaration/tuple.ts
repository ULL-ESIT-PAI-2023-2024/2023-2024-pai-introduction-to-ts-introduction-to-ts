/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use tuple sintax
 *       How to compile:
 *          * tsc ./tuple.ts && node ./tuple.js
 *          * ts-node ./tuple.ts
 */

const myTuple: [number, string] = [10, 'Hello'];

console.log(myTuple[0]);
console.log(myTuple[1]);

myTuple[0] = 20;
myTuple.push(100);

console.log(myTuple);

//myTuple[2] = 200;
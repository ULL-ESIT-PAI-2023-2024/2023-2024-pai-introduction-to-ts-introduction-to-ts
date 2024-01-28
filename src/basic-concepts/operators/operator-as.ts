/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use the operator as sintax
 *       How to compile:
 *          * tsc ./operator-as.ts && node ./operator-as.js
 *          * ts-node ./operator-as.ts
 */

let myString: string = '10';
let myNumber: number = myString as unknown as number;
let myNumber2: number = Number(myString);

console.log(myNumber);
console.log(myNumber2);
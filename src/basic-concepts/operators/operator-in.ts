/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use the operator in sintax
 *       How to compile:
 *          * tsc ./operator-in.ts && node ./operator-in.js
 *          * ts-node ./operator-in.ts
 */

let vector: number[] = [1, 2, 3];
let randomNumber: number = 2;
if (randomNumber in vector) {
  console.log('USE MEEE!!!');
}
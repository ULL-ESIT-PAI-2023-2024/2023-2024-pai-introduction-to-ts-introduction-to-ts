/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use delete sintax
 *       How to compile:
 *          * tsc ./delete.ts && node ./delete.js
 *          * ts-node ./delete.ts
 */

let vector: number[] = [1, 2, 3, 4];
delete vector[0];
console.log(vector);
console.log(vector[0]);
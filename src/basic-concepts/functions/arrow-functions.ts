/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the functions sintaxis
 *       How to compile:
 *          * tsc ./arrowFunctions.ts && node ./arrowFunctions.js
 *          * ts-node ./arrowFunctions.ts
 */

const sum = (value1: number, value2: number): number => {
  return value1 + value2;
};
  

const result = sum(3, 5);
console.log(result);
  
const sum2 = (a: number, b: number): number => a + b;

const result2 = sum2(3, 5);
console.log(result2);
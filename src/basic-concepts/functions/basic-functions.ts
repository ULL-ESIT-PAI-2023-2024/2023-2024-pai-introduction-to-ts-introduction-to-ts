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
 *          * tsc ./basicFunctions.ts && node ./basicFunctions.js
 *          * ts-node ./basicFunctions.ts
 */

// BAD PRACTICE
function foo() {
  console.log("REAL MADRID > BARCELONA");
}

foo();

// GOOD PRACTICE
function calculateStringSize(stringToAnalyze: string): number {
  let count: number = 0;
  for (const iterator of stringToAnalyze) {
    ++count;
  }
  return count;
}

console.log(calculateStringSize('HOLA'));

// GOOD PRACTICE
function calculateStringSize2(stringToAnalyze: string,
                              convert: boolean = false): number | string {
  let count: number = 0;
  for (const iterator of stringToAnalyze) {
    ++count;
  }
  return (convert) ? count : count.toString();
}

let result: number | string = calculateStringSize2('hello', false);

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use try, catch, finally sintax
 *       How to compile:
 *          * tsc ./error-handling.ts && node ./error-handling.js
 *          * ts-node ./error-handling.ts
 */

function divide(value1: number, value2: number): number {
  const ZERO: number = 0;
  try {
    if (value2 === ZERO) throw new Error('Cannot devide by 0');
    return value1 / value2;
  } catch (error) {
    console.log('Error:', error);
    return Infinity;
  } finally {
    console.log('ALWAYS IS EXECUTED');
  }
}

console.log(divide(10, 0));
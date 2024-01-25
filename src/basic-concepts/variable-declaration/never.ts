/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the use of the data type never
 *       How to compile:
 *          * tsc ./never.ts && node ./never.js
 *          * ts-node ./never.ts
 */

// never is a data type that represents the type of values that should never occur.
// It is commonly used in situations where a function should never finish its execution normally
// or when an expression will always throw an exception.
function throwError(message: string): never {
  throw new Error(message);
}

const tryNever: never = throwError('THIS IS A ERROR'); // Válido
  
function bucleInfinito(): never {
  while (true) {
    // INFINITE LOOP
  }
}
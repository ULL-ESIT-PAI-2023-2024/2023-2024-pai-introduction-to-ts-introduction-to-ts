/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use rest parameters sintax
 *       How to compile:
 *          * tsc ./rest-parameters.ts && node ./rest-parameters.ts
 *          * ts-node ./rest-parameters.ts
 */

function randomFuction(name: string, greetings?: string): void {
  if (greetings) {
    console.log(name + ', ' + greetings);
  } else {
    console.log(name);
  }
}

randomFuction('Juan');
randomFuction('Ana', 'Hello');
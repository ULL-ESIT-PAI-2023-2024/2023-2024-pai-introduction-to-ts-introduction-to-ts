/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use namespace sintax
 *       How to compile:
 *          * tsc ./namespace.ts && node ./namespace.js
 *          * ts-node ./namespace.ts
 */

namespace Football {
  export function result(): void {
    console.log('BARCELONA 2 - 8 BAYERN');
  }
}

Football.result();
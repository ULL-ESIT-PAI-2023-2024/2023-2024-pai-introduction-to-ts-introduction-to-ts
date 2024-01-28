/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the export sintaxis
 *       How to compile:
 *          * tsc ./exporting.ts && node ./exporting.js
 *          * ts-node ./exporting.ts
 */

export class dummy {
  constructor() {}
  public hello(): void { console.log("Hello"); }
}

export function hello(): void { console.log("Hello"); }
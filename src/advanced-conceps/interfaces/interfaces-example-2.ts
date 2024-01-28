/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc  Another example of interface in TypeScript. 
 *        For more information, read the file interfaces-example.ts
 * 
 */

interface Algorithm { // No code was implemented in an interface
  name: string;
  run(): string;
}

class QuickSort implements Algorithm {
  name: string = "QuickSort";
  run(): string {
    return `QuickSort trace.`;
  }
}

class BubbleSort implements Algorithm {
  name: string = "BubbleSort";
  run(): string {
    return `BubbleSort trace.`;
  }
}
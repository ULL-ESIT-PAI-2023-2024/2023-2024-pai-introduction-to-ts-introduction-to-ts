/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Program to learn about overloading constructor in TypeScript
 *        Remain that only one constructor is implement.
 *        It only serve to give information about the params that can have the constructor.
 *       
 */


class Vehicle {
  private type: string;
  private wheels: number;
  constructor(type: string);
  constructor(type: string, wheels: number);
  constructor(type: string, wheels?: number) {
    this.type = type;
    this.wheels = wheels ?? 4; // Default to 4 wheels if not specified
  }
}

// Usage examples
const car = new Vehicle('Car');
const bicycle = new Vehicle('Bicycle', 2);
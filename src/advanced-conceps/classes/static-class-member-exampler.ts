/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Program that static members of classes in TypeScript.
 *       
 */


class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
}

const SUM = Calculator.add(5, 10);
console.log(`The sum is: ${SUM}`); 

class Animal {
  static numberOfAnimals: number = 0;
  constructor() {
    Animal.numberOfAnimals += 1;
  }
}
let dog = new Animal();
console.log(Animal.numberOfAnimals); // output: 1
let cat = new Animal();
console.log(Animal.numberOfAnimals); // output: 2
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc First example of definition of a class in TypeScript
 * 
 */

class Car {
  // Properties of the class should be declared at the top
  private brand: string;
  private model: string;
  private year: number;
  // Constructor
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  // Method to start the car
  startEngine(): void {
    console.log(`Starting the engine of the ${this.brand} ${this.model}...`);
  }
}

// Creating an instance of the Car class
let myCar = new Car("Toyota", "Camry", 2020);
// Using the class method
myCar.startEngine();

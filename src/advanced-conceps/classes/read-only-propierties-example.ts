/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Program that introduce the readonly propierties in typeScript
 *       
 */

class Car {
  readonly carPlate: string = "6753ABC";
  constructor(private brand: string, private model: string, private year: number) {}
  // Method to start the car
  startEngine(): void {
    console.log(`Starting the engine of the ${this.brand} ${this.model} car plate:${this.carPlate}`);
  }
}

// Creating an instance of the Car class
let myCar = new Car("Toyota", "Camry", 2020);
myCar.carPlate = "2341C";

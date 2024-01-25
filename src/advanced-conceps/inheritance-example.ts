/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc  This file contains a basic example of inheritance in TypeScript, showcasing how classes can extend 
 *        and build upon each other. 
 * 
 */

// Base class
class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distanceInMeters: number): void {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
// Derived class
class Dog extends Animal {
  private numberOfBarks: number;

  constructor(name: string) {
    super(name);
    this.numberOfBarks = 0;
  }

  bark(): void {
    console.log('Woof! Woof!');
    this.numberOfBarks += 1;
  }

  showBarks(): void {
    console.log(`${this.name} has barked ${this.numberOfBarks} times.`);
  }
}
  
// Usage
const myDog = new Dog('Rex');
myDog.move(10);
myDog.bark();
myDog.showBarks();
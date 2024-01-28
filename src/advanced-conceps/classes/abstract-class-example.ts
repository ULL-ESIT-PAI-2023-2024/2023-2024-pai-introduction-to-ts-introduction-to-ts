/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Program to learn about abstracts classes in TypeScript
 *       
 */

abstract class Shape {
  constructor(public name: string) {}
  abstract calculateArea(): number;  // Abstract methods
  abstract calculatePerimeter(): number;
  display(): void {
      console.log(`Shape: ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }
  calculateArea(): number { // Implementatios of the abstract methods
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
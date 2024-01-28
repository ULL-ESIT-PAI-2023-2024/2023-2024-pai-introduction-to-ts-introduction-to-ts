/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc  This file serves as an illustrative example to demonstrate the concept of generics types in TypeScript.
 * 
 */

/**
 * Generic Pair class
 * Stores a pair of elements of possibly different types.
 */
class Pair<T, U> {
  private first: T;
  private second: U;
  
  /**
   * Constructor for the Pair class.
   * @param first The first element of the pair.
   * @param second The second element of the pair.
   */
  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  /**
   * Gets the first element of the pair.
   * @returns The first element.
   */
  public getFirst(): T {
    return this.first;
  }

  /**
   * Gets the second element of the pair.
   * @returns The second element.
   */
  public getSecond(): U {
    return this.second;
  }

  /**
   * Sets a new value for the first element.
   * @param first The new value for the first element.
   */
  public setFirst(first: T): void {
    this.first = first;
  }

  /**
   * Sets a new value for the second element.
   * @param second The new value for the second element.
   */
  public setSecond(second: U): void {
    this.second = second;
  }
}

// Creating a Pair instance with two numbers
let point = new Pair<number, number>(5, 10);
// Accessing the elements
console.log(`X: ${point.getFirst()}, Y: ${point.getSecond()}`);

// Creating a Pair instance with a string and a number
let labeledValue = new Pair<string, number>("Age", 30);
// Accessing the elements
console.log(`Label: ${labeledValue.getFirst()}, Value: ${labeledValue.getSecond()}`);

// Creating a Pair instance with an object and an array
let studentScores = new Pair<{ name: string }, number[]>({ name: "Alicia" }, [85, 92, 88]);
// Accessing the elements
console.log(`Student: ${studentScores.getFirst().name}, Scores: ${studentScores.getSecond().join(", ")}`);
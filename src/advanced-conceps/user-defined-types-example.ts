/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc This file demonstrates the use of user-defined types in TypeScript, using the 'type' keyword 
 *      to create a custom type named 'Operation'. User-defined types are a powerful feature in TypeScript, 
 *      allowing developers to create specific, named sets of values that a variable can hold, thus 
 *      enhancing code readability and type safety.
 * 
 */

type Operation = 'sum' | 'subtract' | 'multiply'

function calculator(firstOperand: number, secondOperand: number, operation: Operation ): number {
  switch (operation) {
    case 'sum':
      return firstOperand + secondOperand;
    case 'subtract':
      return firstOperand - secondOperand;
    case 'multiply':
      return firstOperand * secondOperand;
    default:
      //This line should never be reached if there is no user input.
      throw new Error("Operation not supported"); 
  }
}

try {
  console.log(calculator(2,3,'sum'))
} catch(error) {
  console.log("Error: ", error)
}

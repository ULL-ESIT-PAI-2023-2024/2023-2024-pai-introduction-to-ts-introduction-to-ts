/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc  This file provides examples of 'Type Narrowing' in TypeScript. Type narrowing is the process 
 *        where TypeScript can deduce a more specific type for a value within a certain scope, based on 
 *        the flow of code. This capability is crucial for working with union types and ensuring type safety.
 * 
 */

// Type Guards
function printFormattedValue(inputValue: number | string): void {
    if (typeof inputValue === 'string') {
        // Here TypeScript knows that 'inputValue' is a 'string'
        console.log(inputValue.toUpperCase()); // This works because it's a 'string'
    } else {
        // Here TypeScript knows that 'inputValue' is a 'number'
        console.log(inputValue.toFixed(2)); // This works because it's a 'number'
    }
}

// Type Assertions
function lengthString(inputValue: number | string): number {
  return (inputValue as string).length;
}


//Flow control
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    pet.swim(); // TypeScript understands pet is a Fish
  } else {
    pet.fly(); // TypeScript understands pet is a Bird
  }
}

// Type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function movePet(pet: Fish | Bird) {
  if (isFish(pet)) {
      pet.swim(); // Here, pet is treated as a Fish
  } else {
      pet.fly(); // Here, pet is treated as a Bird
  }
}
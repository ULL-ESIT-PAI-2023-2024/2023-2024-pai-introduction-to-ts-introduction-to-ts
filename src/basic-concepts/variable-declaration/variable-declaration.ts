/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to declare variables
 *       How to compile:
 *          * tsc ./variableDeclaration.ts && node ./variableDeclaration.js
 *          * ts-node ./variableDeclaration.ts
 */

// BAD PRACTICE, TOO BUGGY
var global: number = 10;

// USING THE OPERATOR NEW
var global2: Number = new Number(0);

// BAD PRACTICE
function dummy(): void {
  console.log(global);
}

dummy();

// CONST DECLARATION
const constant: number = 4;
console.log(constant);
// error
//constant = 9;

// GOOD PRACTICE
// SCOPE VARIABLE DECLARATION
function dummy2(): void {
	let scopeVariable: number = 3;
  console.log(scopeVariable);
  // CODE
}

// COMPILE ERROR
// console.log(scopeVariable);

dummy2();

// BAD PRACTICE
let scopeVariable2 = 4;
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the for loops sintaxis
 *       How to compile:
 *          * tsc ./forLoops.ts && node ./forLoops.js
 *          * ts-node ./forLoops.ts
 */

// GOOD PRACTICE, avoid using Array<>
let randomVector: number[] = [2, 5, 1, -4, 9];
let randomVectorSize: number = randomVector.length;
for (let index = 0; index < randomVectorSize; ++index) {
  console.log(randomVector[index]);
}

console.log('-------------');

// GOOD PRACTICE IF YOU DON´T NEED INDEX
for (const element of randomVector) {
  console.log(element);
}

console.log('-------------');

// ELEMENT WILL BE AN INDEX
for (const element in randomVector) {
  console.log(element);
}

console.log('-------------');

// SKIP AN ITERATION
for (const element of randomVector) {
  if (element % 2 === 0) {
    console.log('CONTINUE');
    continue;
  }
  console.log(element);
}

console.log('-------------');

// EXIT THE LOOP
for (const element of randomVector) {
  if (element % 2 === 0) {
    console.log('BREAK');
    break;
  }
  console.log(element);
}
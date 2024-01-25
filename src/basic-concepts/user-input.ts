/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to retrieve user inputs
 *       How to compile:
 *          * tsc ./userInput.ts && node ./userInput.js
 *          * ts-node ./userInput.ts
 */

const entry: string[] = process.argv;
console.log(entry);
// entry[0] path to ts-node command
// entry[1] path to the file
// entry[2] begining of arguments

// load the required module
const readLine = require('readline');
const readUserInput = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

readUserInput.question('Write somenting: ', (entry: string) => {
  console.log(`You wrote: ${entry}`);
  // CODE
  readUserInput.close();
});

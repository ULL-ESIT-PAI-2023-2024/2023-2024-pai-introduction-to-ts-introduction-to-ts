/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to read from a file
 *       How to compile:
 *          * tsc ./read.ts && node ./read.js
 *          * ts-node ./read.ts
 */

import * as fs from 'fs';
import * as readline from 'readline';

const filePath: string = 'data.txt';

// read the whole file
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file: ${err}');
  } else {
    console.log('\nFile content:\n', data);
  }
});

// read line by line
const readLine = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity,
});

readLine.on('line', (line) => {
  console.log('Line:', line);
});

readLine.on('close', () => {
  console.log('File reading complete.');
})
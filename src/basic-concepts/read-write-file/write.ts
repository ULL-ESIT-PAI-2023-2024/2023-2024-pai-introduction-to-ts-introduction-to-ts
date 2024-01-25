/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to write into a a file
 *       How to compile:
 *          * tsc ./write.ts && node ./write.js
 *          * ts-node ./write.ts
 */

import * as fs from 'fs';

const filePath: string = 'data.txt';

const dataToWrite: string = 'NEW LINE';

fs.writeFile(filePath, dataToWrite, { flag : 'a' }, (error) => {
  if (error) {
    console.error('Error reading file: ${err}');
  } else {
    console.log('Write operation complete.');
  }
});
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn the import sintaxis
 *       How to compile:
 *          * tsc ./importing.ts && node ./importing.js
 *          * ts-node ./importing.ts
 */
 
// import { dummy } from "./a";
// import { hello } from "./a";
import * as testing from './exporting';
import { dummy, hello } from './exporting';

let temp: dummy = new dummy();
temp.hello();
hello();
testing.hello();
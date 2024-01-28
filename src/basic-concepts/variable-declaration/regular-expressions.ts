/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use regular expressions sintax
 *       How to compile:
 *          * tsc ./regular-expressions.ts && node ./regular-expressions.js
 *          * ts-node ./regular-expressions.ts
 */

let regex1: RegExp = new RegExp('pattern');
let regex2: RegExp = /pattern/;
let regex3 = /pattern/;

let myString: string = 'HELLO pattern BYE';

console.log(regex1.test(myString));
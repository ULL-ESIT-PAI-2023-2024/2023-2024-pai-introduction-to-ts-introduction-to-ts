/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 24 2024
 * @desc Program to learn how to use overloading sintax
 *       How to compile:
 *          * tsc ./overloading.ts && node ./overloading.ts
 *          * ts-node ./overloading.ts
 */

/*
        ERROR
        
        function sameName(value: number): void {
        console.log(value);  
        }

        function sameName(value: string): void {
        console.log(value);  
        }
*/
function sameName(value: number | string): void | number {
  if (typeof value === 'number') {
    console.log(value);
  } else if (typeof value === 'string') {
    return Number(value);
  }
}

sameName(42);
sameName('42');
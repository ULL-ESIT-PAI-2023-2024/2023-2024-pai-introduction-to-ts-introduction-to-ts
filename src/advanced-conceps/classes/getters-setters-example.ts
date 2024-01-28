/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Program to learn about getters and setters in TypeScript
 *       
 */

class Player {
  constructor(private name: string) {}
  get playerName(): string {
    return this.name;
  }
  set playerName(newValue: string) {
    this.name = newValue;
  }
}

let playerOne = new Player('Rachel');
console.log(playerOne.playerName);
playerOne.playerName = 'Alice';
console.log(playerOne.playerName);
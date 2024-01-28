/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Enero 27 2024
 * @desc Complex example of the generic types interfaces and classes in typeScript
 */

interface Account {
  readonly name: string,
  password: string
}

class FacebookAccount implements Account {
  constructor(public readonly name: string, public password: string) {}
}

class Person {
  constructor(public readonly name: string) {}
}

function deleteSocialMedia<T extends Account>(socialMedia: T): Boolean {
  //implementation
  return true;
}

let facebookAccount = new FacebookAccount("Saul", "1234");
deleteSocialMedia(facebookAccount); // Ok
let person = new Person("Saul");
deleteSocialMedia(person); // Compilation error
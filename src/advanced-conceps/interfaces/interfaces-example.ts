/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @authors Evian Concepción, Saúl Sosa
 * @since Jan 24 2024
 * @desc  This file demonstrates the concept and usage of interfaces in TypeScript. An interface in 
 *        TypeScript is a structure that defines the shape of an object, ensuring that implementing classes 
 *        conform to a particular contract. Interfaces are used to define properties, methods, and their 
 *        types, but do not contain actual code implementation.
 * 
 */

interface Book { // No code was implemented in an interface
  title: string;
  author: string;
  yearPublished: number;
  // Method to display information about the book
  displayDetails(): string;
}

class Novel implements Book {
  title: string;
  author: string;
  yearPublished: number;

  constructor(title: string, author: string, yearPublished: number) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  displayDetails(): string {
    return `Novel: "${this.title}" by ${this.author}, published in ${this.yearPublished}.`;
  }
}


class Magazine implements Book {
  title: string;
  author: string;
  yearPublished: number;

  constructor(title: string, author: string, yearPublished: number) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  displayDetails(): string {
    return `Magazine: "${this.title}" by ${this.author}, published in ${this.yearPublished}.`;
  }
}

const myNovel = new Novel('1984', 'George Orwell', 1949);
console.log(myNovel.displayDetails());

const myMagazine = new Magazine('National Geographic', 'Various Authors', 2021);
console.log(myMagazine.displayDetails());
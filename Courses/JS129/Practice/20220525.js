// Question 1

// let andy = {
//   name: 'Andy Davis',
//   toys: [],
// };

// let woody = {
//   name: 'Sheriff Woody',
//   play() {
//     console.log('Reach for the sky!');
//   },
// };

// let buzz = {
//   name: 'Buzz Lightyear',
//   play() {
//     console.log('To Infinity, And Beyond!');
//   },
// };

// andy.toys.push(woody);
// andy.toys.push(buzz);

/* 1. Describe the relationship between the `andy` object and the `buzz` and `woody` objects.

- The `buzz` and `woody` objects are collaborators with the `andy` object.

2. Implement a method, `playWithToys`, in the `andy` object. The method should invoke the `play` method of all the toys for that object. */

// let andy = {
//   name: 'Andy Davis',
//   toys: [],

//   playWithToys() {
//     this.toys.forEach(toy => toy.play());
//   }
// };

// let woody = {
//   name: 'Sheriff Woody',
//   play() {
//     console.log('Reach for the sky!');
//   },
// };

// let buzz = {
//   name: 'Buzz Lightyear',
//   play() {
//     console.log('To Infinity, And Beyond!');
//   },
// };

// andy.toys.push(woody);
// andy.toys.push(buzz);
// andy.playWithToys();

// /Question 2

// Examine the two code examples below:

// Example 1
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce(); // Hi, my name's Sarah

// Example 2
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce.call(paul); // Hi, my name's Paul

// For each example, identify the execution context of introduce. Explain how you determined the execution context, and outline the difference between the execution context in the two examples

/*
For example 1, the execution context of `introduce` is the `sarah` object. Here, `sarah.introduce()` uses method invocation syntax whose implicit execution context is the calling object. Thus, the `this` keyword is set to the `sarah` object.

For example 2, the execution context of `introduce` is the `paul` object. Here, the `call` method is used to explicitly bind the `paul` object to the invocation on line 12. Thus, the `this` keyword references the `paul` object and not the `sarah` object. */

// Question 3
// The code below defines a constructor function, Book, and adds a method, read, to the prototype of that constructor:

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// Book.prototype.read = function() {
//   console.log(`Reading ${this.title}`);
// };

// Objects created by this constructor have title and author properties, as well as a read method. However, we now need to add an allTitles method that returns an array of the titles of all the books created by the constructor. Think about where the array and the method should live and then update the code to create the array and implement the method.

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.titles.push(this.title);
// }

// Book.prototype.read = function() {
//   console.log(`Reading ${this.title}`);
// }

// Book.allTitles = function() {
//   return Book.titles;
// }

// Book.titles = [];

// let book1 = new Book('A', 'B');
// let book2 = new Book('C', 'D');
// console.log(Book.allTitles());

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   Dog.breeds.push(this.breed);
// }

// Dog.allBreeds = function() {
//   return Dog.breeds;
// }

// Dog.breeds = [];

// let dog1 = new Dog('a', 'collie', 'c');
// let dog2 = new Dog ('d', 'greyhound', 'f');

// console.log(Dog.allBreeds()); // [ 'collie', 'greyhound' ]

// Question 4
// Rewrite your answer from the previous question using classes

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(this.title);
//   }

//   static titles = [];

//   static allTitles() {
//     return Book.titles;
//   }
// }

// let book1 = new Book('a', 'b');
// let book2 = new Book('c', 'd');
// console.log(Book.allTitles());

// class Dog {
//   constructor(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     Dog.breeds.push(this.breed);
//   }

//   static breeds = [];

//   static allBreeds() {
//     return Dog.breeds;
//   }
// }

// let dog1 = new Dog('Lassie', 'Collie', 60);
// let dog2 = new Dog('Rover', 'Mutt', 45);
// console.log(Dog.allBreeds());

// Question 7
// Examine the code below:

function Country(name, language) {
  this.name = name;
  Country.language = language;
}

Country.prototype.getName = function() {
  return this.name;
}

Country.prototype.getLanguage = function() {
  return this.constructor.language;
}

let france = new Country('France', 'French')
let spain = new Country('Spain', 'Spanish')

console.log(france.getName()); // France
console.log(france.getLanguage()); // Spanish

// With reference to the `name` and `language` properties, explain precisely why line 17 outputs `'France'` and line 18 outputs `'Spanish'`.


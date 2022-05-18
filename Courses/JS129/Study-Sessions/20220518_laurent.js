// 1.
// let andy = {
//   name: 'Andy Davis',
//   toys: [],

//   playWithToys() {
//     this.toys.forEach((toy) => {
//       toy.play();
//     });
//   },
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

// // Implement a method, playWithToys, in the andy object. The method should invoke the play method of all the toys for that object.

// 3.
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

// Book.prototype.read = function () {
//   console.log(`Reading ${this.title}`);
// };

// Book.allTitles = function() {
//   return Book.titles;
// }

// Book.titles = [];

// let book1 = new Book('Tiny Habits', 'BJ Fogg');
// let book2 = new Book('Kettlebell Simple & Sinister', 'Pavel');
// console.log(Book.allTitles());  // ['Tiny Habits', 'Kettlebell Simple & Sinister'];

// 4.

// Rewrite your answer from the previous question using classes.

// class Book {
//   static titles = [];

//   static allTitles() {
//     return Book.titles;
//   }

//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(this.title);
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   }
// }

// let book1 = new Book('Tiny Habits', 'BJ Fogg');
// let book2 = new Book('Kettlebell Simple & Sinister', 'Pavel');
// console.log(Book.allTitles());  // ['Tiny Habits', 'Kettlebell Simple & Sinister'];

// 8.
// JavaScript supports two main inheritance patterns. One of these patterns can be described as objects inheriting directly from other objects. The other can be described as classes or types inheriting from other classes or types. For each of these two patterns, provide an example of using that pattern to form an inheritance relationship.

// objects inheriting directly from other objects
// let carPrototype = {
//   start: function() {
//     this.started = true;
//   },

//   stop: function() {
//     this.started = false;
//   },

//   init(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this;
//   },
// };

// let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);

// let object = {
//   foo: 1,
// }

// let object2 = Object.create(object);
// console.log(object2.foo)

// classes or types inheriting from other classes or types
// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let square = new Square(5);
// console.log(square.getArea()); // 25

// 10.
// Examine the following two code snippets. The only difference between them is the last line of each snippet. Are there any problems with either of these approaches that aren't present in the other?

// snippet 1
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype; // don't use this because modifying Dog.prototype will modify Animal.prototype. Not supposed to do this. They are supposed to be different prototypes and one is supposed to inherit from the other.

// // ------------------- snippet 2
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);

/* We should always use `Object.create()`

*/

// Examine the following two code snippets. The only difference between them is the last line of each snippet. Are there any problems with either of these approaches that aren't present in the other?

// snippet 1
// function Animal(name) {
//   this.name = name;
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     console.log("I am an animal");
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype; // don't use this because modifying Dog.prototype will modify Animal.prototype. They reference the same object. Not supposed to do this. They are supposed to be different prototypes and one is supposed to inherit from the other.

// Dog.prototype.bark = function() { console.log("Waf") }

// let newAnimal = new Animal("Birdy");
// newAnimal.bark();

/*
// ------------------- snippet 2
function Animal(name) {
  // some statements
}

Animal.prototype = {
  speak: function() {
    // some statements
  },
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
*/
/* We should always use `Object.create()`

*/
// Suppose an application that we're writing needs two kinds of objects: robots and humanoids. Robots have an intelligence level, a model number, and they can solve problems. Humanoids have all the same characteristics and behaviors that a robot has, but they can also walk and talk. Using factory functions, write code that automates the creation of these two types of objects while reusing as much code as possible. Do not use prototypal or pseudo-classical inheritance.

/*
Robots
  intelligence
  model
  method: solve

Humanoids
  inherits froms robots
  talk
  walk
*/

// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {}
//   }
// }

// function createHumanoid(intelligence, model) {
//   let newHumanoid = createRobot(intelligence, model);
//   newHumanoid.walk = function() { console.log("Walking") };
//   newHumanoid.talk = function() {};
//   return newHumanoid;
// }

// let humanoid = createHumanoid('high', '09JI');
// humanoid.walk(); // Walking

// Is there a way to reuse the createRobot function within the createRobot function? Remember here we are looking for you to reuse as much code as possible.

// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {}
//   }
// }

// const walk = {
//   walk() {
//     console.log(`Walking`);
//   },
// }

// const talk = {
//   talk() {
//     console.log(`Talking`)
//   },
// }

// function createHumanoid(intelligence, model) {
//   let newHumanoid = createRobot(intelligence, model);
//   Object.assign(newHumanoid, walk, talk);
//   return newHumanoid;
// }

// let humanoid = createHumanoid('high', '09JI');
// humanoid.walk(); // Walking
// humanoid.talk(); // Talking

// Is there a way to reuse the createRobot function within the createRobot function? Remember here we are looking for you to reuse as much code as possible.

// Suppose we introduced a new type of object to our application: humans. Humans have a name and age and they can also walk and talk. Using factory functions, write the code needed so that human objects can reuse the walk and talk methods that humanoids use. Both humanoids and humans should get the methods from the same source. As with the previous question, do not use prototypal or pseudo-classical inheritance.


// function createHuman(name, age) {
//   let newHuman = {
//     name, 
//     age 
//   };
//   Object.assign(newHuman, walk, talk);
//   return newHuman;
// }

// let human = createHuman('Sam', 45);
// console.log(human.age); // 45
// human.walk(); // Walking

/* This exercise asks you to come up with a skeletal OO design for a Role-playing Game.

The application has information about every player's character. They all have a name, health, strength, and intelligence.

Each character, when created, receives:

    a health value of 100.
    a random strength value (between 2 and 12, inclusive).
    a random intelligence value (between 2 and 12 inclusive).

Use a rollDice method to determine the random values. This method should not take any arguments.

Only the heal and hurt methods can change the health value. Each method accepts one argument: the amount of change to apply to the health level. The method heal increases the health value by the indicated amount, while hurt decreases it.

A player's character can be a warrior, a paladin, a magician, or a bard.

New warriors receive an additional 2 points of strength. The resulting strength range is thus between 4 and 14, inclusive.

New magicians receive an additional 2 points of intelligence. The resulting intelligence range is thus between 4 and 14, inclusive.

Warriors and paladins can both wear armor. They need access to two additional methods: attachArmor and removeArmor.

Paladins, magicians, and bards can all cast spells. They need access to a castSpell method that accepts one argument: the spell.

Bards are a type of magician that can also create potions. They have a createPotion method.

Use classes to create your design based on the application description. Your classes should show any inheritance relationships, mix-ins, and methods necessary to meet the requirements.

This question is about designing object type relationships and how you organize your constructors, behaviors, and state. Your methods only need to provide enough detail to fulfill the requirements. In some cases, you may be able to omit the method body entirely. Don't include any functionality that we don't describe above. */

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }

  rollDice() {
    return Math.floor(Math.random() * 11) + 2;
  }

  heal(amount) {
    this.health += amount;
  }

  hurt(amount) {
    this.health -= amount;
  }
}

const armor = {
  attachArmor() {
    console.log(`Armor attached.`);
  },

  removeArmor() {
    console.log(`Armor removed.`);
  },
}

const spell = {
  castSpell(spell) {
    console.log(spell);
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength = this.rollDice() + 2;
  }
}

Object.assign(Warrior.prototype, armor);

class Paladin extends Character {}
Object.assign(Paladin.prototype, armor, spell);

class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence = this.rollDice() + 2;
  }
}

Object.assign(Magician.prototype, spell);

class Bard extends Magician {
  createPotion() {
    console.log(`Potion is ready!`);
  }
}

let warrior = new Warrior('Voltaire');
console.log(warrior.name); // Voltaire
console.log(warrior.health); // 100
console.log(warrior.strength); // 8
warrior.attachArmor(); // Armor attached.
warrior.hurt(8);
console.log(warrior.health); // 92
warrior.heal(4);
console.log(warrior.health); // 96

let magician = new Magician('Merlin');
console.log(magician.intelligence);
magician.castSpell(`Cruciatus`)

let paladin = new Paladin('Yoda');
paladin.removeArmor();

let bard = new Bard('Homer');
bard.castSpell('Lightning');
bard.createPotion();
bard.hurt(2);
console.log(bard.health); // 98


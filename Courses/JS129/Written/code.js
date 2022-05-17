// let andy = {
//   name: 'Andy Davis',
//   toys: [],

//   playWithToys() {

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


// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce();

// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce.call(paul);

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.allTitles.push(this);
// }

// Book.prototype.read = function () {
//   console.log(`Reading ${this.title}`);
// };

// Book.allTitles = [];

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   read () {
//     console.log(`Reading ${this.title}`);
//   };

//   static allTitles() {
//     Book.allTitles.push(this);
//   }
// }

// Book.allTitles = [];


// let obj = {
//   foo() {
//     return this;
//   },
// };

// console.log(obj.foo());

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let foo = obj.foo;
// console.log(foo());

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let obj2 = {
//   bar: 42,
//   foo() {
//     console.log(this.bar);
//   },
// };

// console.log(obj.foo.call(obj2));

// let obj = {
//   a: 'hello',
//   b: 'world',
//   bar: {
//     a: 'completely',
//     b: 'different',
//   },
//   foo: function () {
//     return `${this.a} ${this.b}`;
//   },
// };

// let qux = obj.foo.bind(obj.bar);
// console.log(qux()); // completely different

// function Country(name, language) {
//   this.name = name;
//   Country.language = language;
// }

// Country.prototype.getName = function() {
//   return this.name;
// }

// Country.prototype.getLanguage = function() {
//   return this.constructor.language;
// }

// let france = new Country('France', 'French')
// let spain = new Country('Spain', 'Spanish')

// console.log(france.getName());      // France
// console.log(france.getLanguage());  // Spanish

// JavaScript supports two main inheritance patterns. One of these patterns can be described as objects inheriting directly from other objects. 





// The other can be described as classes or types inheriting from other classes or types. 


// For each of these two patterns, provide an example of using that pattern to form an inheritance relationship.

// 1.
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function () {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype;

// console.log(Dog);

// 2
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function () {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);

// let greeter = {
//   a: 'hello',
//   b: 'world',
//   greet() {
//     let self = this;
//     function sayHello() {
//       console.log(`${self.a} ${self.b}`);
//     }

//     sayHello();
//   }
// };

// greeter.greet(); // logs 'hello world'

// let greeter = {
//   a: 'hello',
//   b: 'world',
//   greet() {
//     let sayHello = () => {
//       console.log(`${this.a} ${this.b}`);
//     }

//     sayHello();
//   }
// };

// greeter.greet(); // logs 'hello world'

// let str1 = new String('Hello, world');
// let str2 = new String('Hello, world');
// console.log(str1 === str2);

// function Country(name, language) {
//   this.name = name;
//   Country.language = language;
// }

// Country.prototype.getName = function() {
//   return this.name;
// }

// Country.prototype.getLanguage = function() {
//   return this.constructor.language;
// }

// let france = new Country('France', 'French')
// let spain = new Country('Spain', 'Spanish')

// console.log(france.getName());      // France
// console.log(france.getLanguage());  // Spanish

// console.log(spain.getName());      // France
// console.log(spain.getLanguage());  // Spanish

// Suppose an application that we're writing needs two kinds of objects: robots and humanoids. Robots have an intelligence level, a model number, and they can solve problems. Humanoids have all the same characteristics and behaviors that a robot has, but they can also walk and talk. Using factory functions, write code that automates the creation of these two types of objects while reusing as much code as possible. Do not use prototypal or pseudo-classical inheritance.

// const Solve = {
//   solve() {}
// }

// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {},
//   }
// }

// function createHuman(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {},

//     walk() {},

//     talk() {},
//   }
// }

// const Walk = {
//   walk() {}
// }

// const Talk = {
//   talk() {}
// }

// function createHuman(name, age) {
//   this.name = name;
//   this.age = age;

//   Object.assign({}, Walk, Talk)
// }

// let andy = {
//   name: 'Andy Davis',
//   toys: [],

//   playWithToys() {
//     return this.toys.play;
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

// console.log(andy.playWithToys());


// 1. Describe the relationship between the andy object and the buzz and woody objects.
// 2. Implement a method, playWithToys, in the andy object. The method should invoke the play method of all the toys for that object.

name, health, strength, intelligence

health = 100
strength 2 - 12
intelligence 2 - 12

rollDice() {}

heal(increaseHealth) {}
hurt(decreaseHealth) {}


characters
- warrior
- paladin
- magician
- bard

new warrriors + 2 strength

new magicians + 2  intelligence

armor

attachArmor() {}
removeArmor() {}

castSpell(spell) {}

createPotion() {}

class Character {
  constructor(name, health = 100, strength, intelligence) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.intelligence = intelligence;
  }

  rollDice() {}

  heal(increaseHealth) {}

  hurt(decreaseHealth) {}
}

class Warrior extends Character {}

class Paladin extends Character {}

class Magician extends Character {}

class Bard extends Character {}
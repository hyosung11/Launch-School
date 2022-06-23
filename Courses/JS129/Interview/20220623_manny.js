// It's like the written. Grading you on how you act in an interview

// prepared examples and say them out loud
// about five questions
// code snippets
// you have to teach the topic, good to prepare some code
// outline and practice
// inheritance
// prototypal chain
// factory functions

// Speak clearly and loudly

// Tell me about inheritance

// let a = {
//   foo: 1,
//   bar: 2,
// }

// let b = Object.create(a);
// console.log(b.foo);

// Give me an example of how subtypes can inherit from supertypes

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let square = new Square(5);
// console.log(square.getArea());

// Talk about mixins

// const swim = {
//   swim() {
//     console.log(`Swimming`);
//   }
// }

// class Bird {
//   fly() {
//     console.log(`Flying`);
//   }
// }



// let bird = new Bird();
// bird.fly();

// class Duck extends Bird {}
// let duck = new Duck();
// duck.fly();

// Object.assign(Duck.prototype, swim);
// duck.swim();


// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName); // NaN

// Given the code below, create a ninjaB object without direct access to the Ninja constructor function. Explain your logic and why your code works.

let ninjaA;
{
  const Ninja = function() {
    this.swung = false;
  };
  ninjaA = new Ninja();
}
// create a `ninjaB` object here; don't change anything else
// let ninjaB = Object.create(ninjaA)
let ninjaB = new ninjaA.constructor();
console.log(ninjaA.constructor) // => true
console.log(ninjaA)
console.log(ninjaB)
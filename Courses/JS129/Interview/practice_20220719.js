// Overview - presentation style. Test communication ability. Explain each concept as if teaching someone with code examples. Mostly conversation.

// 1. Describe the execution context in JavaScript. What is it? How and when does it get set?

// arrow functions

// explicit using `call`, `apply` or `bind`

// let foo = {
//   bar() {
//     console.log(this);
//   }
//  }

//  foo.bar();

// context loss

// let omi = {
//   firstName: 'Omi',
//   lastName: 'Bidol-Lee',

//   fullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// omi.fullName();
// let sungoh = omi.fullName;
// sungoh.call(omi);

// Context is loss and another way to fix it.

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)

//     bar();
//   }
// }

// obj.foo();

// Object Factory
// with two properties
// - one property is a method that references a non-method property
// create two different objects with the factory function and invoke the method on each object

// function createCar(make, model) {
//   return {
//     make,
//     model,

//     drive() {
//       console.log(`Driving a ${this.model}`);
//     }
//   }
// }

// let car1 = createCar('Honda', 'Accord');
// let car2 = createCar('Toyota', 'Prius');

// car1.drive();
// car2.drive(); // Driving a Prius

// Advantage of object factories over creating objects manually.
// - reuse code
// = `this` keyword can be set

// Refactor to use the constructor/prototype pattern

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// Car.prototype.drive = function() {
//   console.log(`Driving a ${this.model}`);
// }

// let car1 = new Car('Honda', 'Accord');
// let car2 = new Car('Toyota', 'Prius');

// car1.drive(); // Driving a Accord
// car2.drive(); // Driving a Prius

// new keyword

// Refactor this code to use a class

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   drive() {
//     console.log(`Driving a ${this.model}`);
//   }
// }

// let car1 = new Car('Honda', 'Accord');
// let car2 = new Car('Toyota', 'Prius');

// car1.drive(); // Driving a Accord
// car2.drive(); // Driving a Prius

// Cats, dogs, and fish are all types of pets.
// All pets can tell you their name.
// Dogs and cats can walk. Fish can not.
// Dogs and fish like to swim. Cats do not.

// Write code that establishes these relationships and behaviors that are written in the comments

// class Pet {
//   constructor(name) {
//     this.name = name;
//   }

//   info() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// // walk mixin
// const walkMixin = {
//   walk() {
//     console.log(`Walking`);
//   },
// };

// // swim mixin
// const swimMixin = {
//   swim() {
//     console.log(`Swimming`);
//   },
// };

// class Cat extends Pet {}
// Object.assign(Cat.prototype, walkMixin);

// class Dog extends Pet {}
// Object.assign(Dog.prototype, walkMixin, swimMixin);

// class Fish extends Pet {}
// Object.assign(Fish.prototype, swimMixin);

// let cat = new Cat('Kitty');
// // cat.info() // My name is Kitty

// let dog = new Dog('Rusty');
// // dog.walk(); // Walking
// // dog.swim(); // Swimming

// let fish = new Fish('Nemo');
// // fish.swim() // Swimming
// fish.walk();

// end of assessment

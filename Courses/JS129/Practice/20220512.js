/* Collaborator Objects */

// let cat = {
//   name: `Sebastien`,

//   makeNoise() {
//     console.log(`Meow! Meow!`);
//   },

//   eat() {
//     return `Eating protein.`
//   },
// }

// let dog = {
//   name: `Maxi`,

//   makeNoise() {
//     console.log(`Woof! Woof!`);
//   }
// }

// let pete = {
//   name: `Pete`,
//   pets: [],

//   printName() {
//     console.log(`My name is ${this.name}`);
//     console.log(`My pet's name is ${this.pet.name}`);
//   }
// }

// pete.pets.push(cat);
// pete.pets.push(dog);

// console.log(pete.pets);

/* Mixins */

// const swimMixin = {
//   swim() {}
// }

// class Bird {}

// class FlyingBird extends Bird {
//   fly() {}
// }

// class Stork extends FlyingBird {}

// class Parrot extends FlyingBird {}

// class Penguin extends Bird {}
// Object.assign(Penguin.prototype, swimMixin);

// class Ostrich extends Bird {}
// Object.assign(Ostrich.prototype, swimMixin);

// class Duck extends FlyingBird {}
// Object.assign(Duck.prototype, swimMixin);

// class Goose extends FlyingBird {}
// Object.assign(Goose.prototype, swimMixin);

/* Eliminate Inheritance */
// const swimMixin = {
//   swim() {},
// };

// const flyMixin = {
//   fly() {}
// }

// class Stork {}
// Object.assign(Stork.prototype, flyMixin);

// class Parrot {}
// Object.assign(Parrot.prototype, flyMixin);

// class Penguin {}
// Object.assign(Penguin.prototype, swimMixin);

// class Ostrich {}
// Object.assign(Ostrich.prototype, swimMixin);

// class Duck {}
// Object.assign(Duck.prototype, swimMixin, flyMixin);

// class Goose {}
// Object.assign(Goose.prototype, swimMixin, flyMixin);

// function logNum(num) {
//   console.log(`Number ${num}`);
// }

// [2, 4, 6].forEach(logNum);

// console.log(global.isNaN);

// global.foo = 'SungOh';
// console.log(global.foo);

// foo = 'Omi';
// // console.log(global.foo);
// console.log(foo);

/* Property and Method lookup sequence */

// let a = {
//   foo: 1,
// };

// let b = {
//   foo: 2,
// }

// Object.setPrototypeOf(b, a);

// let c = Object.create(b);
// // console.log(c.foo); // 2

// c.foo = 42;

// // console.log(b.foo);

// console.log(c.hasOwnProperty('foo'));

// function foo() {
//   console.log(`this refers to: ${this}`);
// }

// foo();

// function foo() {
//   this.bar = 'bar';
// }

// foo();
// console.log(global.bar);

// "use strict";

// function foo() {
//   console.log('this refers to: ' + this);
// }

// foo()


// let foo = {
//   bar: function() {
//     console.log(this);
//   }
// }



// let baz = foo.bar;
// baz();

/* The code will log the `Object [global] { ...} because `baz` is called as a standalone function. Here, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object, but since we're calling ` baz` as a standalone function, its execution context is the global object, not the `foo` object. */

/* Context Loss

When you take a method out of an object and execute it as a function or as a method on another object, the function's context is no longer the original object. */

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log(`Hello, ${this.firstName} ${this.lastName}`);
//   },
// };

// john.greetings();
// let foo = john.greetings;
// foo.call(john)

/* Accept the context object as a second parameter. */
// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log(`Hello, ${this.firstName} ${this.lastName}`);
//     },
//   };

//   repeatThreeTimes(john.greetings, john)
// }

// foo();

/* Hard-bind the method's context using `bind`. */
// function repeatThreeTimes(func) {
//   func()
//   func()
//   func()
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log(`Hello, ${this.firstName} ${this.lastName}`);
//     },
//   };

//   repeatThreeTimes(john.greetings.bind(john))
// }

// foo();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar(); // line 9 `bar` invoked as a standalone function
//   },
// };

// obj.foo();  // => undefined undefined

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.apply(this); // line 9 `bar` invoked as a standalone function
//   },
// };

// obj.foo(); // =

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)

//     bar(); // line 9 `bar` invoked as a standalone function
//   },
// };

// obj.foo(); // =

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = () => {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar(); // line 9 `bar` invoked as a standalone function
//   },
// };

// obj.foo(); // =

// let Animal = {}; // not a function
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal); // TypeError: Right-hand side of 'instanceof' is not callable

/* The `Animal` object in this snippet does not have a `prototype` property since it isn't a constructor or class. The code raises an error. */

// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// let fluffy = new Cat()
// console.log(fluffy instanceof Animal); // true

/* In this code, we manually add `Animal` to the prototype chain by changing `Cat.prototype` to reference `Animal`. Since `fluffy` is a `Cat` and since `Animal` is in `Cat`'s prototype chain, `fluffy` is an instance of `Animal`. */

// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// function makeCat() {
//   return {};
// }

/* In this code `Animal` does have prototype property, but neither `Cat` nor `Animal` is used to construct the object referenced by `fluffy`, so `fluffy` is not an instance of `Animal`. The code logs `false`. */

// let fluffy = makeCat();
// console.log(fluffy instanceof Animal); // false

// class Animal {}
// class Cat extends Animal {}
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal); // true

/* In this code, we use the ES6 class syntax to establish the prototype chain. Since `fluffy` is a `Cat` and since `Cat` extends `Animal`, `fluffy` is an instance of `Animal`. */

// let Book = {
//   init(author, title, ISBN) {
//     this.author = author;
//     this.title = title;
//     this.ISBN = ISBN;
//     return this;
//   },

//   describe() {
//     console.log(this.title + ' was written by ' + this.author + '.');
//   },
// };

// let book = Object.create(Book).init(
//   'Neal Stephenson',
//   'Snow Crash',
//   '0-553-08853-X'
// );

// book.describe();

// let Cat = {
//   init(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     return this;
//   },

//   log() {
//     console.log(`Meow! My name is ${this.name}. I'm a ${this.gender} cat.`);
//   },
// }

// let cat1 = Object.create(Cat).init('Pudding', 'girl');
// cat1.log();

// class Critter {}
// class Snake extends Critter {}
// class Rattler extends Snake {}

// Critter is a super type of both `Snake` and `Rattler`.
// `Snake` is a super type of `Rattler` and a sub type of `Critter`
// `Rattler` is a sub type of both `Snake` and `Critter`

/* Mixin pattern copies the methods and properties of one object into another */

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// }

// // missing code
// function Child(name, school) {
//   Person.call(this, name);
//   this.school = school;
// }

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child('Suzy', 'PS 33');
// console.log(child instanceof Child);
// console.log(child instanceof Person === false);
// console.log(Object.getPrototypeOf(child) === Child.prototype);
// console.log(Object.getPrototypeOf(child).constructor === Child);
// console.log(child.school === 'PS 33');
// console.log(child.learn() === "I'm going to school!");
// console.log();

// let person = new Person('Pete');
// console.log(person instanceof Child === false);
// console.log(person instanceof Person);
// console.log(Object.getPrototypeOf(person) === Person.prototype);
// console.log(Object.getPrototypeOf(person).constructor === Person);
// console.log(person.school === undefined);
// console.log(person.speak() === "Hello, my name is Pete.");

function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

// your code from the previous question.
function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}

// more missing code
Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child); // true
console.log(child instanceof Person); // true
console.log(Object.getPrototypeOf(child) === Child.prototype); // true
console.log(Object.getPrototypeOf(child).constructor === Child); // true
console.log(child.school === "PS 33"); // true
console.log(child.learn() === "I'm going to school!"); // true
console.log(child.speak() === "Hello, my name is Suzy."); // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);  // true
console.log(person instanceof Person); // true
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined); // true
console.log(person.speak() === "Hello, my name is Pete."); // true
console.log(person.learn === undefined); // true
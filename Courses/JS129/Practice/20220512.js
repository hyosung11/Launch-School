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

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);
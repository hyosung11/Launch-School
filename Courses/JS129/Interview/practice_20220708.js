// Assessment Overview
// - have code to complement the statements I'm making. Have examples.

// 1st Question - Inheritance - please explain what inheritance is and how it works in JavaScript. Be sure to talk about the mechanism JavaScript uses to search for inherited terms.

// let a = {
//   foo: 1,
//   bar: 2,
// }

// let b = Object.create(a);

// console.log(b.bar); // 2

// console.log(b); // {}

// 2nd Question - object can only inherit from a single parent object. Single inheritance problem solved in JavaScript using mixins.

// Demonstrate the problem of single inheritance with code and show how JavaScript solves this problem using mixins. Make sure your example can not be rewritten to use single inheritance.
// 1. Demonstrate a single inheritance problem
// 2. Use a mixin to fix this problem.

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

// class Pigeon extends Bird {}

// let pigeon = new Bird();
// pigeon.fly(); // Flying

// class Duck extends Bird {}
// Object.assign(Duck.prototype, swim);

// let duck = new Duck();
// duck.fly(); // Flying
// duck.swim(); // Swimming

// 3. Providing some code. Rewrite the `Foo` constructor so it can be invoked with or without the `new` keyword. (Scope-safe constructor)

// const Foo = function() {
//   if (!(this instanceof Foo)) {
//     return new Foo()
//   }
//   this.bar = 3;
// }

// Foo.prototype.qux = function() {
//   console.log(`bar is ${this.bar}`);
// };

// let foo = new Foo();
// foo.qux(); // bar is 3

// let foo2 = Foo();
// foo2.qux(); // bar is 3

// 4. Tell me what it will do and why?

// const Pet = function(name) {
//   this.name = name;
//   // return {};
// };

// Pet.prototype.myNameIs = function() {
//   return `They call me ${this.name}`;
// };

// let fluffy = Pet("Fluffy"); // missing `new` keyword
// console.log(fluffy); // undefined
// console.log(fluffy.myNameIs()); // TypeError: Cannot read properties of undefined (reading 'myNameIs')

// This code throws a `TypeError` because `myNameIs` is an undefined property on `fluffy`. Since `Pet` was invoked without the `new` operator and it doesn't have an explicit return value, the return value is `undefined`. Thus, `fluffy` gets assigned to `undefined` which causes the call to `myNameIs` to throw an error because you can't call a method on `undefined`.

// If you don't use the `new` keyword, the constructor function won't work as intended. Instead, it *acts like an ordinary function*. In particular, *no new objects are created*, so `this` won't point to a new object.

// Furthermore, since functions that don't return an explicit value return `undefined`, calling a constructor without `new` also returns `undefined`. When you use `new`, however, the function doesn't have to return anything explicitly: it *returns the newly created object automatically*.

// 5. Write some code to complete this problem.

// function go(klass, arg) {
//   let obj = new klass(arg);
//   return obj.foo + obj.bar() + klass.qux();
// }

// // fill in this code
// class something {
//   constructor(arg) {
//     this.foo = arg;
//   }

//   bar() {
//     return 3;
//   }

//   static qux() {
//     return 2;
//   }
// }

// console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
// console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)

// 5. Write some code to complete this problem.

function go(klass, arg) {
  let obj = new klass(arg);
  return obj.foo + obj.bar() + klass.qux();
}

// fill in this code
class something {
  constructor(arg) {
    this.foo = arg;
  }

  bar() {
    return 3;
  }

  static qux() {
    return 2;
  }
}

console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)
function go(klass, arg) {}

console.log(something, 5); // 10 (note same as 5 + 3 + 2)

// 5. Write some code to complete this problem.

function go(klass, arg) {
  let obj = new klass(arg);
  return obj.foo + obj.bar() + klass.qux();
}

// fill in this code
class something {
  constructor(klass, arg) {
    this.klass = klass;
    this.arg = arg;
  }

  bar() {
    this.arg - 2;
  }

  static qux() {
    this.arg - 3;
  }
}

console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)

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

// Assessment Overview
// - have code to complement the statements I'm making. Have examples.

// 1st Question - Inheritance - please explain what inheritance is and how it works in JavaScript. Be sure to talk about the mechanism JavaScript uses to search for inherited terms.

// let a = {
//   foo: 1,
//   bar: 2,
// }

// let b = Object.create(a);

// console.log(b.bar); // 2

// console.log(b);

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
// duck.fly();
// duck.swim();

// 3. Providing some code. Rewrite the `Foo` constructor so it can be invoked with or without the `new` keyword.

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
//   return {};
// };

// Pet.prototype.myNameIs = function() {
//   return `They call me ${this.name}`;
// };

// let fluffy = new Pet("Fluffy");

// console.log(fluffy.myNameIs());

// 5. Write some code to complete this problem.

function go(klass, arg) {
  let obj = new klass(arg);
  return obj.foo + obj.bar() + klass.qux();
}

// fill in this code
// class something {
//   constructor(arg) {
//     this.foo = arg;
//   }

//   bar() {
//     return 3
//   }

//   static qux() {
//     return 2;
//   }
// }

console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)

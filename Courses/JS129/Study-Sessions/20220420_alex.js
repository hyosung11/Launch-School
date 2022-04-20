// let cats = {
//   names: ['Butterscotch', 'Pudding', 'Fluffy'],
//   foo() {
//     let that = this;
//     [1, 2, 3].forEach(function (number) {
//       console.log(`${number}: ${that.names[number - 1]}`);
//     });
//   },
// };

// cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy

/* This code works since we saved the context in the local variable `that` before defining the callback function. Thus, the callback can (and does) use `that` to obtain the desired context when accessing its properties. */

// let cats = {
//   names: ['Butterscotch', 'Pudding', 'Fluffy'],
//   foo() {
//     [1, 2, 3].forEach(function (number) {
//       console.log(`${number}: ${this.names[number - 1]}`);
//     }, this);
//   },
// };

// cats.foo();

/* This code works since we passed `this` to `forEach` as its second argument. `forEach` uses the argument as the context when invoking the callback. */

// function Dog() {
// }

// function Pet(type) {
//   if (type === 'dog') {
//     return new Dog();
//   } else if (type === 'lion') {
//     return 'not a pet!';
//   }
// }

// let dog = new Pet('dog');
// let lion = new Pet('lion');
// let cat = new Pet('cat');

// /* Without running the code, determine the type of data that the dog, lion, and cat variables would reference if you were to run it. */

// console.log(dog instanceof Dog); // true
// console.log(lion instanceof Pet); // true
// console.log(cat instanceof Pet); // true

/*
A constructor that attempts to return an object will return an object of that type. Thus, `dog` refers to a `Dog` object since that's what the constructor tried to return.

A constructor that attempts to return a non-object value, such as a string, will instead return an new object of the type associated with the constructor, e.g., `Pet` in this case. Thus, `lion` refers to a `Pet` object since the constructor attempts to return a string.

A constructor that doesn't return an explicit value will return a new object of the type associated with the constructor, e.g., `Pet`. Thus, `cat` refers to a `Pet` object since the constructor doesn't return an explicit value.
*/

/* Lesson 3 Quiz 1 Question 9 */

// str = [1, 2, 3].map.call(str, convertCase).join('');
/* This code uses `call` to invoke `map` with `str` as its context, a process that allows `map` to prcess the individual characters of `str`. Note that we use the array `[1, 2, 3]` to invoke `call`; any array will do. */

// str = Array.from(str).map(convertCase).join('');
/* This code uses the `Array.from` static method to convert `str` to an array of characters. That lets us use `Array.prototype.map` and `Array.prototype.join` to translate the characters and recombine them as a string. */

/* If A is a class, what does typeof A return? Answer without running the code. */

// class A {}

// console.log(typeof A); // function

/* `typeof A` returns `function`. ES6 classes are merely syntactic sugar: the `class` statement gets translated behind the scenes to a constructor function and a prototype object, and the class name refers to the constructor function. */

// A
// let Animal = {};
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal);

// B
// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal);

// C
// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// function makeCat() {
//   return {};
// }

// let fluffy = makeCat();
// console.log(fluffy instanceof Animal);

// D
class Animal {}
class Cat extends Animal {}
let fluffy = new Cat();
console.log(fluffy instanceof Animal);

/* The `instanceof` operator requires the object to the right to have a `prototype` property, such as a function object. In most cases, that means that the object on the right is a constructor function or class. 

Incorrect

A. The `Animal` object in this snippet does not have a prototype property since it isn't a constructor or class. The code raises an error.

C. In this code, `Animal` does have a `prototype` property, but neither `Cat` nor `Animal` is used to construct the object referenced by `fluffy`, so `fluffy` is not an instance of `Animal`. The code logs `false`. 

Correct

B. In this code, we manually add `Animal` to the prototype chain by changing `Cat.prototype` to reference `Animal`. Since `fluffy` is a `Cat` and since `Animal` is in `Cat`'s prototype chain, `fluffy` is an instance of `Animal`. 

D. In this code, we use the ES6 class syntax to establish the prototype chain. Since `fluffy` is a `Cat`, and since `Cat` extends `Animal`, `fluffy` is an instance of `Animal`. */
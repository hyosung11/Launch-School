// class Animal {
//   move() {
//     console.log('moving inside');
//   }
// }

// class Fish extends Animal {
//   move() {
//     console.log('swimming');
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log('walking');
//   }
// }

// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
// animals.forEach((animal) => animal.move());

// console.log(animals[0]); // Fish objects override the `move` method of the `Animal` parent class (overriding is generally treated as an aspect of inheritance)

// console.log(animals[2]); // Sponge objects inherit the `move` method from the `Animal` parent thus this is polymorphism through inheritance.

// let objectsEqual = (obj1, obj2) => {
//   return Object.entries(obj1).sort().join('') === Object.entries(obj2).sort().join('');
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// /**/

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');
// // Good Morning Victor

// helloVictor.greet('afternoon');

// let helloSungOh = createGreeter('SungOh')
// helloSungOh.greet('evening');


  /* The code does not use the `this` keyword to access the properties of the object returned by the `createGreeter` function. */

// let book = {
//   title: "Snow Crash",
//   author: "Neal Stephenson",
//   getDescription() {
//     return `${this.title} by ${this.author}`;
//   },
// };

// desired return value: 'Snow Crash by Neal Stephenson'
// console.log(book.getDescription()); // => ReferenceError: title is not defined

// When accessing a property on an object, what does JavaScript do?

// It looks for the property first in the object, then its prototype chain, all the way up to `Object.prototype`.

/* JS120 - OOJS > Function Context > 1. What is This?

Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code. */

// let person = { // object literal, not a function
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName);

/* The code logs `NaN`. Anywhere outside a function, the `this` keyword is bound to the global object. If `this` is used inside a function, its value depends on how the function is invoked. Since `global.firstName` and global.lastName` (if you're in Node) are not defined, the operation being performed here is `undefined` + `undefined` which results in `fullName` having a value of `NaN`. */

/* What will the following code log? */
// class Something {
//   constructor() {
//     this.data = 'Hello';
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return 'ByeBye';
//   }
// }

// let thing = new Something();
// console.log(Something.dupData()); // line 16
// console.log(thing.dupData()); // line 17

/* The code will log `'ByeBye'` and `'HelloHello'`. Here we see two methods named `dupData` in the `Something` class. However, one is defined as `dupData`, and is thus an instance method. The other has the `static` keyword in front of its name and so it is a static method. The two methods are different, and completely independent of each other.

Our code first creates a `Something` object, and then logs the result of `Something.dupdata`, on line 16, and then `thing.dupData` on line 17. The former invocation calls the static method (`dupData`) and logs "ByeBye". The latter invocation calls the instance method, and logs "HelloHello". */

/* Shouter

Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Person exposes method greeting which when called logs the provided greeting text. Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.

*/

// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }

// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
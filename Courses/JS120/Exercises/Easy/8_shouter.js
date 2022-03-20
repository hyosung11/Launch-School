/* JS120 - Object Oriented JavaScript > Easy > 8. Shouter

Shouter

Rewrite these two object types to use the `class` keyword, instead of direct prototype manipulation. `Person` exposes method `greeting` which when called logs the provided greeting text. `Shouter` is a subtype of `Person` and is a bit loud so whatever he says is uppercased. */

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

/* Discussion

The only tricky part in this problem is recognizing that `line 12` is `greeting()` method invocation on the object's parent. In our solution, we use super keyword to invoke the method greeting() on object's parent and we are passing uppercased text to it same as in the original example.

Elaine Vuong
5 months ago

The `Person` class is a super-type of the `Shouter` class. The `Person` class defines a method `greeting`, which logs the value stored in `text` to the console. Within the implementation of `greeting` on the `Shouter` class, we want to invoke the `greeting` method defined on `Person` and pass in an uppercase text argument.

Solution employs the `super` keyword - it is used to access and call functions on an object's parent.
*/

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase()); // identical to Person.prototype.greeting.call(text.toUpperCase());
  }
}
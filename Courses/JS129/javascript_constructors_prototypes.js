/* JavaScript Constructors and Prototypes by Toby Ho https://tobyho.com/2010/11/22/javascript-constructors-and/ from 2010 before ES6 Classes!

JavaScript functions double as object constructors.

To simulate a class in OOP, you write: */

// function Person(name) {
//   this.name = name;
// }

/* use the `new` statement/keyword to create a `Person` */
// let sohee = new Person('Sohee');
// console.log(sohee); // Person { name: 'Sohee' }

// check that `sohee` is a `Person`
// console.log(sohee instanceof Person); // true

// could call `Person` as a function without `new`
// console.log(Person('Sohee')); // undefined

/* don't do this because you create a `name` global variable */
// console.log(name) // Sohee

/* If there was already a variable called `name`, it would have been overwritten. When you call a function as a function without `new`, `this` is set to the global object - in the browser, this is the `window` object: */

// window.name // 'Sohee'

// this === window // true

/* If you want to write a constructor, use it like a constructor, if you want to write a function, use it like a function, don't mix and match.

Here's a way to prevent this polluting of the namespace (preventing the creation of global variables) */

// function Person(name) {
//   if (!(this instanceof Person))
//     return new Person(name);
//   this.name = name;
// }

/* What this does is:

1. Check whether this is really a Person - which it would be if called using new.
2. If it indeed is a Person, go on your merry way.
3. If it is not a Person, use a new to create a Person - the correct way, and return it.

This allows calling it as a function to return a Person, and it doesn’t pollute the namespace. */

// console.log(Person('Sohee')); // Person { name: 'Sohee' }
// console.log(name); // ReferenceError: name is not defined

/* calling with `new` still works too */
// console.log(new Person('Sohee')); // Person { name: 'Sohee' }

/* Why? It turns out if you return a value in a `constructor`, JavaScript will honor it, and return it as a newly created object when you use `new`. But, you might be thinking, can I return a non-`Person`? */

// function Cat(name) {
//   this.name = name;
// }

// function Person(name) {
//   return new Cat(name);
// }

// let omi = new Person('Omi');
// console.log(omi instanceof Person); // false
// console.log(omi instanceof Cat); // true

/* So, I ask for a `Person` and I get a `Cat`? Well, in JS it can happen. You can even return an `Array`. */

// function Person(name) {
//   return [name];
// }

// console.log(new Person('SungOh')); // [ 'SungOh' ]

/* But you cannot return a primitive type. Number, String, Boolean, are all primitive types. If you return one of these types of values from a constructor, it would be ignored and the constructor would go back to its normal behavior of returning the `this` object. */

// function Person(name) {
//   this.name = name;
//   return 6
// }

// console.log(new Person('SungOh')); // returns the `this` object [ 'SungOh' ]

/* METHODS

Functions double as constructors
Functions triple as they also act as methods
Methods are the behaviors of the object
In other words, methods are functions attached to an object
- create methods by simply creating functions and assigning them to the object. */

// function Person(name) {
//   this.name = name;
//   this.sayHi = function() {
//     return 'Hi, I am ' + this.name;
//   }
// }

// let sohee = new Person('Sohee');
// console.log(sohee.sayHi()); // 'Hi, I am Sohee'

/* We can attach methods to objects without a constructor: */

// let bob = { name: 'Bob' } // this is a JS object

// bob.sayHi = function() {
//   return 'Hi, I am ' + this.name;
// }

// console.log(bob.sayHi());

/* INHERITANCE and the PROTOTYPE (before ES6)

Java Example: */

// public class Mammal {
//   public void breathe() {
//     // do some breathing
//   }
// }

// public class Cat extends Mammal {
//   // now cat too can breathe!
// }

/* JavaScript equivalent using constructor and prototype */

// function Mammal() {};

// Mammal.prototype.breathe = function() {
//   // do some breathing
// }

// function Cat() {};

// Cat.prototype = new Mammal;
// Cat.prototype.constructor = Cat; // now cat too can breathe!

/* Prototype Inheritance in JavaScript Steps

1. An object has a number of properties. This includes any attributes or methods.

2. An object has a special parent property, this is also called the prototype of the object (`__proto__`). An object inherits all the properties of its parent.

3. An object can override a property of its parent by setting the prototype on itself.

4. A constructor creates objects. Each constructor has an associated `prototype` object, which is simply another object.

5. When an object is created, its parent is set to the prototype object associated with the constructor that created it.

Below is a step by step breakdown of this process:

*/

// 1. Create a constructor for `Mammal`
function Mammal() {};

// At this point `Mammal` already has an associated prototype
// console.log(Mammal.prototype); // {}

// Create an instance of `Mammal`
let mammal = new Mammal();

// 2. Verify the prototype

// using the deprecated dunder proto
// console.log(mammal.__proto__ === Mammal.prototype); // true

console.log(Mammal.prototype.isPrototypeOf(mammal)); // true

// Add the `breathe` function to the `prototype` of `Mammal`

Mammal.prototype.breathe = function() {
  // do some breathing
}

// `mammal` the instance can breathe because it inherits from `Mammal.prototype`

mammal.breathe();

RR

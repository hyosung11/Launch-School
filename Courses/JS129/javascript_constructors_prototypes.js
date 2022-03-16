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

// console.log(Mammal.prototype.isPrototypeOf(mammal)); // true

// Add the `breathe` function to the `prototype` of `Mammal`

Mammal.prototype.breathe = function() {
  // do some breathing
}

// `mammal` the instance can breathe because it inherits from `Mammal.prototype`
mammal.breathe();

// `Cat` constructor is created and we set `Cat.prototype` to a new instance of `Mammal`
function Cat() {}
Cat.prototype = new Mammal;

// now any cat instance inherits from `Mammal` and will therefore be able to breathe as well
let garfield = new Cat();
garfield.breathe;

// console.log(Cat.prototype.constructor = Cat);

// // Ensure that cats know that they are cats:
// console.log(garfield.__proto__ === Cat.prototype);
// console.log(Cat.prototype.isPrototypeOf(garfield));

// console.log(Cat.prototype.constructor === Cat);
// console.log(garfield instanceof Cat);

/* Each time you create a new instance of `Cat`, you create a two-level chain, in that `garfield` is now parented by `Cat.prototype` which, since it is an instance of `Mammal` is in turn parented by `Mammal.prototype`.

Now, guess who's the parent of `Mammal.prototype`? Yeah, you guessed it, `Object.prototype`. So actually, it's a three-level chain:

> `garfield` --> `Cat.prototype` --> `Mammal.prototype` --> `Object.prototype`

You can add properties to any of `garfield`'s parents and `garfield` will magically gain those properties too, even after `garfield` has already been created!
*/

// console.log(Cat.prototype.isCat = true); // true
// console.log(Mammal.prototype.isMammal = true); // true
// console.log(Object.prototype.isObject = true); // true
// console.log(garfield.isCat); // true
// console.log(garfield.isMammal); // true
// console.log(garfield.isObject); // true

// As whether it has a given property
// console.log('isMammal' in garfield); // true

// own properties vs inherited properties
// garfield.name = 'Garfield';
// console.log(garfield.hasOwnProperty('name')); // true
// console.log(garfield.hasOwnProperty('breathe')); // false

// SETTING METHODS on the PROTOTYPE

// not optimal way
function Person(name) {
  this.name = name;
  this.sayHi = function() {
    return 'Hi, I am ' + this.name;
  }
}

// a better way that is more memory efficient
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function(){
  return 'Hi, I am ' + this.name;
}

/*  In the first version, each time you create a person, a new sayHi function will be created for him, where as in the second version, only one sayHi function is ever created, and is shared amongst all persons that are created - because Person.prototype is their parent. Thus, declaring methods on the prototype is more memory efficient. */

/* APPLY and CALL

As you can see, functions become methods just by virtue of being attached to objects, at which point the this within that function refers to the object which it is attached to, right? Well… not exactly. Look at our previous example

*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return 'Hi, I am ' + this.name;
};

// create 2 people
var jack = new Person('Jack')
var jill = new Person('Jill')
jack.sayHi() // 'Hi, I am Jack' (`this` binds to `jack` the object that calls `sayHi`)
jill.sayHi() // 'Hi, I am Jill'

/* Here, `sayHi` is not attached to `jack` or `jill`, rather it's attached to their prototype: `Person.prototype`. How does the function `sayHi` know `jack` and `jill`'s names?

`this` is not bound to any particular object until you call the function.
`this` is not bound to any particular object until you call the function.

When you call `jack.sayHi()`, `sayHi`'s `this` will be bound to `jack`; when you call `jill.sayHi()`, it will be bound to `jill` instead, but binding does not change anything about the function itself - it's still the same function!

However, you can explicitly bind a function to an object yourself.
*/

function sing() {
  return this.name + ' sings!';
}

console.log(sing.apply(jill)); // 'Jill sings!'

/* The `apply` method belongs to `Function.prototype` (yeah, that’s right, functions are objects and have prototypes too and can also have properties!). So, you can use `apply` with any function to call it while binding it to the object of your choosing, even if the function is not attached to it. In fact, you can even `apply` the method to an object of a different type: */

function Flower(name) {
  this.name = name;
}

let tulip = new Flower('Tulip');
jack.sayHi.apply(tulip); // 'Hi, I am Tulip'

/* You might say

> Wait a minute! A tulip is not supposed to say hi!

To that I would say

> Everything is everybody. Everybody is everything. We all cool! Just ... chill, man!

As long as the object has a `name` property, `sayHi` is happy to print it out. this is the principle of duck typing.

> If it quacks like a duck and it walks like a duck - it's a duck to me.

If you want to include parameters you can pass them as an array as the second parameter to `apply`. */

// function singTo(other){
//   return this.name + ' sings for ' + other.name;
// }

// console.log(singTo.apply(jack, [jill])); // 'Jack sings for Jill'.

/* `Function.prototype` also has a `call` function, which works very much like `apply`. The only difference is in that rather than passing the parameters as an array in the second parameter, you would just add them to the end: */

// function singTo(other) {
//   return this.name + ' sings for ' + other.name;
// }

// console.log(singTo.call(jack, jill)); // 'Jack sings for Jill'

/* The `new` METHOD

skipped because tired and didn't seem to be how JS works in 2022 */
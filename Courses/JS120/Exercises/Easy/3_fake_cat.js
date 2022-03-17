/* JS120 - Object Oriented JavaScript > Easy 3. Fake Cat

Fake Cat

Without calling the `Cat` constructor, create an object that looks and acts like a `Cat` instance that doesn't have a defined name. */

class Cat {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// Using the `new` keyword calls the `Cat` constructor
// let fakeCat = new Cat();

/* Solution */
let fakeCat = Object.create(Cat.prototype);

// another solution
let fakeCat = {};
Object.setPrototypeOf(fakeCat, Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

/* Discussion

In the solution, we are using `Object.create() to create a new object that can't be distinguished from a `Cat` instance. `Object.create() uses an existing object as the prototype of the newly created object.

The Object.create(proto, propertiesObject) method creates a new object, using an existing object as the prototype of the newly created object. */

/* Elaine Vuong

The key thing to observe is that our `fakeCat` object needs to be able to access the methods and properties that all instances of the `Cat` class type would have access to. The `fakeCat.name` property is not as pressing - even if our object does NOT explicitly define a `name` property, JavaScript will evaluate a non-existent property to `undefined`.

Based on this, our object needs to:

- be able to access the `constructor` property
- be able to access the `speak` method

Where are the `constructor` and `speak` properties defined on the `Cat` class function? They are defined on its constructor function prototype, which is `Cat.prototype`. Therefore, the easiest way to do this is to create a new object, with its object prototype (i.e., the internal `[[Prototype]]` property or dunder `__proto__`) set to inherit from `Cat.prototype`.

*/

// Proof that our Cat.prototype defines a 'constructor' and 'speak' property
Object.getOwnPropertyNames(Cat.prototype); // returns [ 'constructor', 'speaks' ]

// If we could invoke the `Cat` Class Function
let fakeCat = new Cat(undefined);

/*  Object.create()
Our `fakeCat` becomes a new Object that inherits from `Cat.prototype`. No need to explicitly define a 'name' property on fakeCat because if a property does not exist in our object, JS returns `undefined. */

let fakeCat = Object.create(Cat.prototype);

// Object.setPrototypeOf()
let fakeCat = {};
Object.setPrototypeOf(fakeCat, Cat.prototype);
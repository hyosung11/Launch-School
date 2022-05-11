/* Notes from SPOT Study Session with Alison Embry

Execution Context
- execution context as defined by the `this` binding
- the difference between implicit and explicit context
- the different classifications for how context can be bound
- context loss (context that wasn't what you intended)

Object Creation Patterns
- Object literals
- Object factories / factory functions
- Constructor/prototype creation pattern
- OLOO (Objects Linking to Other Objects) creation pattern
- ES6 Classes

Inheritance Patterns
- prototypal inheritance (overloaded term; this is in the context of OLOO)
- pseudo-classical inheritance (constructor/prototype pattern)
- classical inheritance (the Class `extends` keyword)

Encapsulation/Inheritance/ Polymorphism
- These along with Abstraction are the pillars of OOP. Their use cases are consistent across languages that are capable of producing OOP structures.

- Encapsulation: gather related data and behaviors into a single entity. It also privatizes data and behaviors, which JavaScript does not support directly.

Two Types of Inheritance
- inheritance between objects using the `[[Prototype]]` property that is built into all objects by the JavaScript engine.
- A relationship between the 'types' of 'real-world objects' that you are trying to model.

- polymorphism through inheritance and duck typing

Single and Multiple Inheritance/Mixins
- JavaScript only supports single inheritance. But there are sometimes situations in your projects where the better design requires multiple inheritance. Mixins are just the workaround.

Describe the object literal creation pattern and its advantages and disadvantages.
- Object literals are the simplest way to create an object that represents a 'type'. An object literal can have properties that represent state and methods that represent behavior. Object literals can use the 'compact method syntax' to define methods without having to structure the methods like regular object properties.
*/

// const petFish = {
//   name: 'Pish',
//   move() {
//     return `${this.name} swims.`
//   }
// }

// console.log(petFish.move()); // line 8 => Pish swims.

/* Describe what the code above is doing.
This code defines an object literal that represents a `petFish`. It has one property, `name` whose value is `Pish`. It has one method, defined with the compact method syntax, called `move`. The `move` method returns a string that includes the fish's name in place of `${this.name}`. The `move` method is invoked on the `petFish` object on line 8, printing the returned message. Because `move` is invoked on `petFish`, the object `petFish` is bound to the execution context of the invocation, and the `name` property of `petFish` is evaluated in place of `${this.name}` on line 4. Because `name`'s value is `Pish`, the message, `'Pish swims.'` is printed to the console from line 8.

Describe the object factory creation pattern and its advantages and disadvantages.
- The object factory is a function that creates and returns an object of a particular 'type'. They take the new object's state as their arguments, which get assigned as the returned object's properties. Methods are defined directly on the object that is returned.
- An advantage of the factory function over object literals is that factory functions avoid having to manually make copies of an object when we want more than one objet from a 'type'.
- The object factory has two disadvantages to other object creation patterns. They get full copies of all of their properties, and they can't tell you about the type they represent. Method copies are a problem because the memory they use can add up when we're making hundreds or thousands of objects from a given type. It's also better if an object can tell you about the type it represents for debugging purposes.*/

// function createFish(name) { // line 1
//   const newFish = {
//     name: name,
//     move() {
//       return `${this.name} swims`
//     },
//   }

//   return newFish;
// }

// const pish = createFish('Pish'); // line 12
// console.log(pish.move()); // Pish swims.

/* Describe what the code above is doing.

An object factory is declared on line 1 called `createFish`. It takes a `name` as its only parameter. The object it returns represents a fish with a `name` property and a `move` method. The `move` method is created with the compact method syntax and returns a string that includes the fish's name in place of `${this.name}`.

A new fish named `pish` is declared on line 12 and initialized to the object returned by the `createFish` object factory. The `name` property is set to `'Pish'`. On line 13, we invoke the `move` method on the `pish` instance, implicitly setting `move`'s execution context to `pish`. When the `move` method is invoked, the value for `${this.name}` evaluates to the `name` property of the `pish` object, whose value is `'Pish'`. Because of this, the message `'Pish swims.'` is returned from `move` and printed to the console.

-------------------------------------------

Describe the constructor/prototype creation pattern and its advantages over object factories.

A constructor is a function that is invoked with the `new` keyword and whose name is capitalized by convention. When a function is invoked with the `new` keyword, JavaScript does the following:

1. It creates a new object.
2. It sets the `[[Prototype]]` property of the new object to the constructor's `prototype` property.
3. It binds `this` to the new object.
4. It invokes the function.
5. If no other object is returned by the function, the new object is returned.

Constructors define the state that they want their objects to have. Constructors take the state as arguments when the constructor is invoked and defines them directly on the new object that gets created through the `this` keyword. `this` is implicitly bound to the new object when the constructor is invoked with the `new` keyword. Methods are added to the constructor's built-in `prototype` property, so that the instance objects that are created from constructor invocations can inherit their behavior through their prototype chain.

The constructor/prototype object creation pattern takes advantage of defining state through a constructor and defining methods on the constructor's prototype so that behavior can be inherited through the instance object's prototype chain.

The advantage that the constructor/prototype pattern has over object factories is two-fold: Inherited methods mean that memory doesn't need to be used each time a new instance is created and instances made from constructors can tell you about the constructor that made them. */

// function Fish(name) {
//   this.name = name;
// }

// Fish.prototype.move = function() {
//   return `${this.name} swims.`;
// }

// const pish = new Fish('Pish');
// console.log(pish.move()); // Pish swims.

// console.log(pish.hasOwnProperty('name')); // true
// console.log(pish.hasOwnProperty('move')); // false
// console.log(Fish.prototype.hasOwnProperty('move')); // true

// console.log(pish instanceof Fish); // true
// console.log(Fish.prototype.isPrototypeOf(pish)); // true

/* -------------------------------------------
Describe the OLOO creation pattern and its advantages and disadvantages.

The Objects Linking to Other Objects pattern relies on using object literals that are designed to act as prototypes for other objects. The properties that are common to the 'type' are bundled in the prototype object, and new objects that represent that 'type' are created from `Object.create`, with the prototype object passed in as the argument.

State is generally defined on derived objects through an `init` method that exists on the prototype object. That `init` method is chained onto the call to `Object.create` and the object's state is passed in as arguments to the `init` method. The `init` method returns the calling object so that it can be assigned to a variable.

Objects that are created from the OLOO pattern have two advantages over object factories: they use method delegation to get access to their behavior, and they can tell you which object created them from the `isPrototypeOf` instance method. Their disadvantage to object factories are that they cannot create objects with private state. */

// const fishPrototype = {
//   move() {
//     return `${this.name} swims.`;
//   },

//   init(name) {
//     this.name = name;
//     return this;
//   },
// }

// const pish = Object.create(fishPrototype).init('Pish');
// console.log(pish.move()); // Pish swims.

// console.log(pish.hasOwnProperty('name')); // true
// console.log(pish.hasOwnProperty('move')); // false
// console.log(fishPrototype.hasOwnProperty('move')); // true

// console.log(fishPrototype.isPrototypeOf(pish)); // true

/* Describe the ES6 class creation pattern and its advantages.

Classes were introduced to JavaScript as syntactic sugar over the constructor/prototype object framework. Their syntax takes a constructor method, which defines state on instances as well as other methods that should be shared between instances. Classes are invoked with the `new` keyword and throw a `TypeError` if they are called without the `new` keyword. State is passed in as arguments to the class when it is invoked. Objects that are created from classes have two advantages over object factories: they use method delegation to get access to their behavior, and they can tell you which object created them from either the `isPrototypeOf` instance method or the `instanceof` operator. */

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     return `${this.name} swims.`;
//   }
// }

// const pish = new Fish('Pish');
// console.log(pish.move()); // Pish swims.

// console.log(pish.hasOwnProperty('name')); // true
// console.log(pish.hasOwnProperty('move')); // false
// console.log(Fish.prototype.hasOwnProperty('move')); // true

// console.log(pish instanceof Fish);
// console.log(Fish.prototype.isPrototypeOf(pish)); // true

/* ----------------------------------------------

INHERITANCE BETWEEN OBJECTS VS INHERITANCE BETWEEN 'TYPES'

Copied from above:
Object creation patterns
- Object literals
- Object factories (factory function)
- Constructor/prototype creation pattern
- OLOO (Objects Linking to Other Objects) creation pattern
- ES6 Classes

Inheritance patterns
- Prototypal inheritance (overloaded term; this is in the context of OLOO)
- Pseudo-classical inheritance (constructor/prototype pattern)
- Classical inheritance (the Class `extends` keyword)

Two types of inheritance:
- Inheritance between objects using the `[[Prototype]]` property that is built into all objects by the JavaScript engine.
- A relationship between the 'types' or 'real-world objects' that you are trying to model. */

// Example
function Pet(name, owner) {
  this.name = name;
  this.owner = owner;
}

Pet.prototype.getOwner = function() {
  return `${this.name} is owned by ${this.owner}.`;
} // Focusing here first

const phil = new Pet('Phil', 'Jack');

/* When you create an instance of `Pet` from the `Pet` constructor, (`phil`) the instance is connected to the `Pet.prototype` object through the assignment of `phil`'s `[[Prototype]]` from the use of `new`.

What this does is set up JavaScript's 'prototypal inheritance' for objects. JavaScript uses this version of 'prototypal inheritance' to set up method delegation.

The term 'Prototypal inheritance' is overloaded in JavaScript. One purpose of the term is used here: to describe the relationship of how all of JavaScript's objects use the internal `[[Prototype]]` property to 'inherit' properties that do not exist directly on that object.

JavaScript is trying to inappropriate existing terminology onto a structure
that I have not seen with other languages: the idea that an object can have access to properties that are not defined directly on it. That's
why the terms 'inheritance' and 'prototypal inheritance' have been used
in multiple contexts by LS. */

// function PetFish(name, owner) {
//   Pet.call(this, name, owner)
// }

// PetFish.prototype = Object.create(Pet.prototype);
// PetFish.prototype.constructor = PetFish;

// PetFish.prototype.move = function() {
//   return `${this.name} swims.`;
// }

// const pish = new PetFish('Pish', 'Brian');
// console.log(pish.move()); // Pish swims.

/* The more traditional idea or concept of inheritance is to set up relationships between 'types' or 'models'. This is what the `extends` keyword does for ES6 Classes. */

class Vehicle {
  constructor(wheelCount) {
    this.wheels = wheelCount;
  }
}

class Car extends Vehicle {
  constructor() {
    super(4)
  }
}

class Truck extends Vehicle {
  constructor() {
    super(4);
    this.hasBed = true;
  }
}

let car = new Car(2);
console.log(car.wheels);

/* We can use the `extends` keyword to create an inheritance relationship between  `Vehicle` and `Car` as well as between `Vehicle` and `Truck`. This inheritance (an "is-a relationship") allows `Car` and `Truck` to avoid having to create `wheels` of their own. They can just use `Vehicle`'s.

The reason inheritance is used in most OOP systems is to reuse code or properties. The term of 'inheritance' and therefore the 'inheritance patterns' are speaking to this sort of relationship. */
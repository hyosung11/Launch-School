/*
  - Introductions
  - Questions to build agenda

  - Studying for written x 6
  - project
*/

// - closures
// - garbage collection
// - General object creation and subtyping
// - Execution context

// The object creation patterns
/*
  - Object literals
  - Constructor functions (object factories)
  - pseudo-classical pattern
  - Object linking to other objects (OLOO)
  - ES6 Class syntax
*/

//Object literals
let obj = {
  value: 5,
  printValueAgain: function () {
    console.log(this.value);
  },

  printValue() {
    console.log(this.value);
  },
};
obj.printValue();

// Object factories
function createCat(type) {
  return {
    type,
    speak() {
      console.log('Meow');
    },
  };
}

let cat = createCat('tabby');
let cat2 = createCat('tuxedo');

/* pseudo-classical pattern
The pseudo-classical pattern uses constructor functions to represent a type.
constructors use Pascal case by convention for their names.
These constructor functions are invoked with the `new` keyword.

Any function that is invoked with the `new` keyword will trigger the following process:
1. A new object will be created
2. The internal `[[Prototype]]` of that new object will be assigned to the constructor's prototype property (<constructor>.prototype).
3. `this` will be bound to the new object.
4. the constructor will be invoked.
5. The new object will be returned if the constructor does not return some other object.

Methods are created on the `prototype` property of the constructor function. This allows JavaScript to access a single definition through method delegation without having to copy the method across instances.

The advantages of the pseudo-classical object creation pattern are two-fold:

1. Instance objects that are created from the constructor can tell you what type they represent through the use of `instanceof` or `<constructor>.prototype.isPrototypeOf(instance)`.

2. Because we store instance methods on the constructor's prototype, every instance does not need its own copy and the memory that the program needs is overall lower (compared to an object factory)

 - The pseudo-classical pattern shares an advantage with object factories over object literals in that they allow for the easy creation of multiple objects that represent a type. */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`${this.name} says hello.`);
};

const jake = new Person('Jake');
jake.greet(); // Jake says hello.

// Subtyping is the term that Launch School uses to describe inheritance between the types.

// Prototypal inheritance - `[[Prototype]]`

// An Employee is a Person that has an id and can `clockIn`

function Employee(name, id, clockedIn) {
  Person.call(this, name);
  this.id = id;
  this.clockedIn = clockedIn;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.clockIn = function () {
  this.clockedIn = true;
};

const mary = new Employee('mary', 3, false);

console.log(mary.hasOwnProperty('name'));

// console.log(Person.prototype.isPrototypeOf(jake));

// For each of the above:
// - Write out what you know about the object creation pattern
// - Give an example of the object creation pattern
// - Are there any advantages / disadvantages compared to the other object creation patterns?
//    - If so, describe them.

let Dog = (function () {
  let species = 'canis lupis';
  let name = 'default';
  let weight;

  function Dog(newName, dogWeight) {
    name = newName;
    weight = dogWeight;
    // this.species = species;
  }

  Dog.prototype.printSpecies = function () {
    console.log(species);
  };

  Dog.prototype.getName = function () {
    return name;
  };

  return Dog;
})();

console.log(``);
let red = new Dog('red', 20);
console.log(red.species);
red.printSpecies();
console.log(red.getName());
//console.log(species);

// ------------------------------
// Continuing from earlier in explaining the object creation patterns:
// OLOO

let carPrototype = {
  drive() {
    console.log('driving');
  },
  init(brand, model) {
    this.brand = brand;
    this.model = model;
    return this;
  },
  sayMake() {
    console.log(`this is a ${this.brand} ${this.model}`);
  },
};

const toyota = Object.create(carPrototype).init('toyota', 'aygo');
toyota.sayMake();

// Subtyping with OLOO
let electricCarPrototype = Object.create(carPrototype);
electricCarPrototype.chargeBattery = function () {
  console.log('charging');
};
const tesla = Object.create(electricCarPrototype).init('tesla', 'e');
tesla.chargeBattery();
tesla.charge = 0.3;

console.log(``);
// The relationship between the `constructor` property and `instanceof`:
// The `instanceof` property uses the `[[Prototype]]` chain to evaluate itself.
console.log(mary instanceof Employee);
console.log(mary instanceof Person);

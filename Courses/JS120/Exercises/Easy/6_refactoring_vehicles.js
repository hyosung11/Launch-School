/* JS120 - Object Oriented JavaScript > Easy > 6. Refactoring Vehicles

Refactoring Vehicles

Consider the following classes:
*/

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 2;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

/* Refactor these classes so they all use a common superclass, and inherit behavior as needed. */

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model)
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

/* Discussion

Our first task is to decide on an appropriate class name for our superclass. It should be a more general type than the individual class names. A good name here is Vehicle, since cars, motorcycles, and trucks are all types of vehicles.

All of our constructor methods take `make` and `model` parameters, and store them in `make` and `model` properties. We can refactor all of this commonality into `Vehicle` by moving `constructor` from one of the classes into `Vehicle`, and deleting it from both `Car` and `Motorcycle`. However, our `Truck` class takes a 3rd parameter `payload`, so we can't just delete the `constructor` method in the `Truck` class.

Our `info` method is identical in all 3 of the original classes, so we just move that into `Vehicle` and remove it from the original classes.

The `getWheels` method is different in each of the original classes, so we don't move this into `Vehicle`.

Further Exploration

Would it make sense to define a `wheels` method in `Vehicle` even though all of the remaining classes would be overriding it? Why or why not? If you think it does make sense, what method body would you write?


Jason Aricheta, 4 months ago

Further Exploration:

Would it make sense to define a wheels method in Vehicle even though all of the remaining classes would be overriding it? Why or why not? If you think it does make sense, what method body would you write?

- Yes there are cases in which this would be useful. In other programming languages, abstract classes are used as templates for the following subtype classes. The methods defined within these abstract class need not have functionality but simply 'stated' in the class. The purpose of these however is to force implementation in the subtype/children classes otherwise it would thrown an exception and halt the program. Since such a mechanism does not exist in JS, we can do our best to emulate it. See code below:

- Observe how we force an error to be thrown - of course, we can remedy this by overriding the breathe method in the subtype, . This makes the code more maintainable! */

class Mammal {
  breathe() {
    throw 'Please implement a breathe method for the ' + 
       `"${this.constructor.name}" class`; // custom exception
  }
}

class Human extends Mammal {}

let me = new Human();
me.breathe(); // exception is thrown.
// Please implement a breathe method for the "Human" class
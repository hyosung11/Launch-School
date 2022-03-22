/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > Start the Engine (part 1)

Start the Engine (part 1)

Change the following code so that creating a new Truck automatically invokes startEngine. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// Expected output:

// Ready to go!
// 2003

// Solution
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!');
  }
}

let truck = new Truck(2003);
console.log(truck.year);

/* Discussion

When working with class inheritance, it's possible for methods to overlap. It's easy to override an inherited method. For example: */

// class Vehicle {
//   startEngine() {
//     console.log('Ready to go!');
//   }
// }

// class Truck extends Vehicle {
//   startEngine() {
//     console.log("I'm a truck! Let's go!");
//   }
// }

// let truck = new Truck();
// truck.startEngine();

/* We can see that the `startEngine()` method from `Truck` class executes instead of the method with the same name from `Vehicle` class. The reason for this is that JavaScript doesn't really have "methods" in the form that class-based languages defines them. Here, any function can be added to an object in the form of a property. Thus, once we have defined property `startEngine` in `Truck` class, we have overridden the property from `Vehicle` class.

What if we want to override a property, but still have access to functionality from a parent class? JavaScript provides a reserved word for this: `super`.

When you invoke `super` within constructor, like we did in this solution, it appears alone and must be used before the `this` keyword is used. However, `super` keyword can also be used to call functions on the object's parent and we will see that in the next problem. */
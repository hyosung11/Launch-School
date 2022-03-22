/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > 1. Inherited Year

Inherited Year

Using the following code, create two classes - Truck and Car - that both inherit from Vehicle. */

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}

class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015

/* Discussion

When designing an Object Oriented program, it's common to have multiple classes that perform similar actions. For example, both Truck and Car use the property year. To reduce complexity, classes with similar behaviors can inherit from a superclass. The superclass implements the common behaviors while the inheriting classes invoke them.

The extends keyword is used to denote inheritance between classes. */
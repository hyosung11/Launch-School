/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > 3. Only Pass the Year

Only Pass the Year

Using the following code, allow `Truck` to accept a second argument upon instantiation. Name the parameter `bedType` and implement the modification so that `Car` continues to only accept one argument. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {}

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

// Expected output:

// 2003
// Short

// Solution
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

/* Discussion

Knowing that all vehicles don't have beds, it makes sense for only `Truck` to accept a `bedType` argument. However, we still want to keep the `year` property in `Vehicle`. To accomplish this, we need to use `super`. Unlike the previous exercise, though, we only want to pass one argument - `year` - instead of all of them.

To pass specific arguments with `super`, we need to list the arguments within parentheses, like this: */

aMethod(one, two, three) {
  super(one, two);
}

/* In the solution, we added `constructor` method to `Truck` instead of modifying `constructor` in `Vehicle` because we didn't want `Car` to accept the `bedType` parameter. */
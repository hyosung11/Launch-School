/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > 4. Start the Engine (part 2)

Start the Engine (part 2)

Given the following code, modify the Truck class so that the code shown below displays the indicated output. Your code should make use of the startEngine method in the Vehicle class. */

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck {
//   startEngine(speed) {}
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

// Expected output:

// Ready to go! Drive fast, please!
// Ready to go! Drive slow, please!

// Solution
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return super.startEngine() + ` Drive ${speed}, please!`
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

/* Discussion

Here we are using the `super` keyword to call the function on the object's parent. This way we are able to use some functionality from the parent class `Vehicle` in the `Truck` class. */
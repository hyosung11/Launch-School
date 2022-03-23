/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > 7. Towable (part 1)

Towable (part 1)

Using the following code, create a `towMixin` mixin that contains a method named `tow` that returns `I can tow a trailer!` when invoked. Include the mixin in the `Truck` class. */

// class Truck {}

// class Car {}

// let truck = new Truck();
// truck.tow();

// Expected output:
// I can tow a trailer!

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Truck {}

Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
console.log(truck.tow());

/* Discussion

Mixins are useful for organizing similar methods that may be relevant to multiple classes. For instance, the mixin `towMixin` contains the method `tow`. Typically, you use a `Truck` for towing, not a `Car`, which means `tow` is only relevant to Truck objects.

With mixins, we have the ability to include them in specific classes. In the solution,we used `Object.assign` to include methods from `towMixin` in the `Truck.prototype` object. */
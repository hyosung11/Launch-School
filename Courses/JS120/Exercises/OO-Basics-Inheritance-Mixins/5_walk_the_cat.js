/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > 5. Walk The Cat

Walk The Cat

Using the following code, create a mixin named `walkMixin` that contains a method named `walk`. This method should return `Let's go for a walk!` when invoked. Include `walkMixin` in `Cat` and invoke `walk` on `kitty`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// Expected output:
// Hello! My name is Sophie!
// Let's go for a walk!

const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat('Sophie');
console.log(kitty.greet());
console.log(kitty.walk());

/* Discussion

Mixins are typically used to contain methods that may be useful for multiple classes, but not all classes. When you mix a module into a class, you're allowing the class to invoke the contained methods.

In our solution, we create a mixin named `walkMixin` that contains a method called `walk`. We give `Cat` access to this method by including `walkMixin` in the class's prototype, like this:

*/
const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

class Cat {
  // code omitted
}

Object.assign(Cat.prototype, walkMixin);

/* This lets us invoke `walk` on any instance of `Cat`. In this case, if we invoke `kitty.walk()`, then `Let's go for a walk!` will be returned. */
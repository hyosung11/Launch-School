/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 8. Hello, Chloe!

Hello, Chloe!

Using the following code, add an instance method named rename that renames kitty when invoked. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

// Expected output:
// Sophie;
// Chloe;

class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(name) {
    this.name = name;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

// LS Solution
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

/* Discussion

In the solution, `rename` accepts one argument, which represents a new name. To rename `kitty`, we just need to reassign property `name` to the value provided by the argument.

*/
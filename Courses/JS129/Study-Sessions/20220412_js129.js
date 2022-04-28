/* JS129 Study Group | Tuesday April 12th | 12:00PM Eastern

Introductions
- Karl, TA, busy with day job
- Alex, NJ
- H, NJ
- Laurent, France, stuck in JS129
- Jason Jones, Atlanta GA, in LS pt for about a year, plans to take written next week
- Adhitiani, lives in Budapest from Indonesia, JS120

Agenda
- Intros
- JS129 Assessment
  - Assessment Format
  - Preparing for the Assessment
    - strong mental models
    - good examples
- Example Questions

*/

// let num = 1;

// function foo() {
//   num += 1;
// }

// foo();
// console.log(num); // 2

//

// const person = {
//   introduce: function () {
//     console.log(`Hi, my name is ${this.name}.`);
//   },
// };

// const karl = Object.create(person); // karl is not an instanceof person
// karl.name = 'Karl';
// karl.introduce();

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says meow!`);
  }

  static about() {
    console.log("Cats are awesome!!!")
  }
}

// let kitty = new Cat('Kitty');

console.log(kitty)
kitty.speak(); // Kitty says meow!

Cat.about(); // Cats are awesome!!!

function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function () {
  return `${this.name} says meow!`;
};


Cat.about = function () {
  return "Cats are awesome!!!";
}

let kitty = new Cat('Kitty');

console.log(kitty.speak()); // Kitty says meow!
console.log(Cat.about()); // Cats are awesome!!!

// Execution Context

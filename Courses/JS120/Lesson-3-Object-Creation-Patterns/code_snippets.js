// function Lizard() {
//   this.scamper = function () {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard(); // <-- added `new` keyword
// lizzy.scamper(); // 'I'm scampering'

/* What does the following code demonstrate about assigning a property? */

// let a = {
//   foo: 1,
// };

// let b = {
//   foo: 2,
// };

// Object.setPrototypeOf(b, a);

// console.log(Object.getPrototypeOf(b));

// let c = Object.create(b);

// console.log(Object.getPrototypeOf(c));

// console.log(c.foo); // => 2

// c.foo = 42;

// console.log(c.foo); // => 42
// console.log(b.foo); // => 2

/* JavaScript treats the property as an "own" property. Object `b` is not mutated. */

/* =============================
Method Delegation to Prototypes */

// Constructor function
function Dog (name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// setting the prototype object for the `bark` method
Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false

console.log(Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark); // true
console.log(Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark); // true
console.log(Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark); // true
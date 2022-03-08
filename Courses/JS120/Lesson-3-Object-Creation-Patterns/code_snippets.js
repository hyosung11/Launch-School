// function Lizard() {
//   this.scamper = function () {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // 'I'm scampering'

/* What does the following code demonstrate about assigning a property? */

let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

console.log(Object.getPrototypeOf(b));

let c = Object.create(b);

console.log(Object.getPrototypeOf(c));

console.log(c.foo); // => 2

c.foo = 42;

console.log(c.foo); // => 42
console.log(b.foo); // => 2

/* JavaScript treats the property as an "own" property. Object `b` is not mutated. */
/* Agenda

1. Intros
2. JS129 Assessment
  - Assessment Format
  - Preparing for the Assessment
3. Example Questions

Intros
- Karl is a TA, based in Wales, has a day job, Liverpool fan
- Allison
- Laurent
- Manny, Cali, JS120 toward the end, need to study everything again
- HyoSung
- Michael Cremononi, just passed JS109

JS129 Assessment
- abstraction
- broader view than in JS109

*/

/* procedural code snippet */
let num = 1;

function foo() {
  num += 1;
}

foo();
console.log(num); // 2

/*  */
const person = {
  introduce: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};

const karl = Object.create(person);
karl.name = 'Karl';
karl.introduce();

/* notes
inheritance
invoking methods
linking objects
prototypes
all these abstractions
*/

// function car() {};

// function Car() {};

// just a function, but seems to be intended to be used as a constructor function; how do we invoke it that matters
function Car(make, model) {
  this.make = make;
  this.model = model;
};

// combining different elements of the JavaScript language to create this abstraction to construct objects
Car.prototype.accelerate = function() {};
// creates new object with call to `Car`
let myCar = new Car('Honda', 'Civic');

/* Assessment Format
both parts are related and overlap in the content covered


Preparation

Specific Topics of Interest - screenshot

property method access
prototypal inheritance

assessing your understanding of abstraction with code examples

code-based questions
- what happens when we run this code and why
- complete code to get return value

Example Questions

Theoretical question example
- execution context
  - how you call the function

*/

function printContext () {
  console.log(this);
}

printContext(); // undefined

// Another example
function printThis() {
  console.log(this);
}

const obj = {
  printThis: printThis,
}

printThis(); // undefined
obj.printThis(); // { printThis: [ Function: printThis ] }
//  Both lines above are demonstrating `implicit execution context`.

// We can also have explicit execution context. One example is through the `call` instance method.
printThis.call(obj); // { printThis: [ Function: printThis ] }
// another way
printThis.apply(obj);

const obj2 = {};

const printObjThis = printThis.bind(obj);
printObjThis();
printObjThis.apply(obj2);

/* Code-based Question Example */

let foo = {
  a: 1,
}

// add code here
// one way to create an object
let bar = Object.create(foo);
// create using an object literal
let baz = {
  a: 1,
}
// using Object.assign()
Object.assign(baz, foo);

console.log(bar.a); // 1
console.log(baz.a); // 1

console.log(bar.hasOwnProperty('a')); // false
console.log(baz.hasOwnProperty('a')); // true

/*  Introductions

- Karl, on vacation
- Alex, not getting as much time on LS
- Michael, studying consistently, anytime ready
- H*/

// class Animal {
//   move() {}
// }

// class Fish extends Animal {
//   move() {
//     console.log('swimming');
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log('walking');
//   }
// }

// // Sponges and Corals don't have a separate move method - they don't move
// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
// animals.forEach((animal) => animal.move());

/* Execution Context

implicit
explicit

what this refers to in the function execution context - the body of the function

garbage collection and the call stack

[] call stack from codesmith for Alex

property on the object or a variable in memory
*/

function whatIsThis() {
  console.log(this);
}

whatIsThis(); // what is output?

// `undefined` in Coderpad's strict mode otherwise, global

const myObj = {
  whatAmI: 'myObj',
  whatIsThis: function() {
    console.log(this);
  }
};

myObj.whatIsThis(); // what is output?
// { whatAmI: 'myObj', whatIsThis: [Function: whatIsThis] }

const myObj = {
  whatAmI: 'myObj',
  whatIsThis: function() {
    console.log(this);
  }
};

let whatIsThis = myObj.whatIsThis;
whatIsThis(); // what is output? =>  `undefined` or global

/* function that is being stored as a variable */

function whatIsThis() {
  console.log(this);
}

const myObj = {
  whatAmI: 'myObj',
};

whatIsThis.call(myObj); // what is output?
// {
//   whatAmI: 'myObj';
// }

const myObj = {
  whatAmI: 'myObj',
  whatIsThis: function() {
    console.log(this);
  }
};

const myOtherObj = {
  whatAmI: 'myOtherObj',
}

myObj.whatIsThis.call(myOtherObj); // what is output?
{
  whatAmI: 'myOtherObj';
}

/* `call` sets the explicit execution context to `myOtherObj` */

const myObj = {
  whatAmI: 'myObj',
  whatIsThis: function () {
    console.log(this);
  },
};

const myOtherObj = {
  whatAmI: 'myOtherObj',
};

let bindedMyObj = myObj.whatIsThis.bind(myOtherObj); // what is output?
bindedMyObj.call(myObj);

console.log(bindedMyObj);
// [Function: bound whatIsThis]
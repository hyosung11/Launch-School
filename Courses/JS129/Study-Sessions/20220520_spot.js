// -----------------------------------------
// How collaborator objects work when you want to use them as arrays and other things.

let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pets: [],
};

pete.pets.push(cat);
pete.pets.push(dog);

// invoke every `makeNoise` in one line
pete.pets.forEach((pet) => pet.makeNoise());

// --------------------------
// Factory functions; using properties of two factory functions in one instance; using Object.assign.

function makePerson(name) {
  const newPerson = { name }

  const newEmployee = makeEmployee(3);

  Object.assign(newPerson, newEmployee);

  return newPerson;
}

function makeEmployee(id) {
  const newEmployee = { id };

  return newEmployee;
}

const jack = makeEmployee('Jack');
console.log(jack.id);
console.log(jack.hasOwnProperty('name') === true);

// -----------------------------------------
// Return is not what was expected; why? 
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  }.bind(this),
};

john.greetings();

// Different
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: console.log('hello, ' + this.firstName + ' ' + this.lastName),
};

// Identify where in the code `this` is used.
// Identify the surrounding function. 
// If there is no surrounding function, `this` is the context of the global environment. 
// I'll look for `bind` on the surrounding function (or if the function is an arrow function). 
// I'll look for the function's invocation. 
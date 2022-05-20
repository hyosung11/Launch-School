
// Question 7
function Country(name, language) {
  // constructor function
  this.name = name; // name on return object
  Country.language = language; // set static property on the Country object
}

Country.prototype.getName = function () {
  // will be on the Country prototype object
  return this.name;
};

Country.prototype.getLanguage = function () {
  // will be on the Country prototype object
  return this.constructor.language; // refers to the constructor function (Country) access the static property
};

let france = new Country('France', 'French');
// let spain = new Country('Spain', 'Spanish');

console.log(france.getName()); // France
/*
  create an instance of Country
  Country object { language: 'French' }
  Country { name: 'France' }
*/
console.log(france.getLanguage()); // Spanish
/*
  create an instance of Country
  Country object { language: 'Spanish' }
  Country { name: 'Spain' }
*/

// With reference to the name and language properties, explain precisely why line 17 outputs 'France' and line 18 outputs 'Spanish'.

/* setting a property on the `Country` object. */

function Ninja() {
  this.swung = true;
}

Ninja.prototype.proto1 = function () {
  console.log('Hello, I am proto1');
};

let ninja = new Ninja(); // => points to an object firstNinjaPrototype {}

// => replacing prototype by a new object secondNinjaPrototype { swingSword() }
Ninja.prototype = {
  // Ninja.prototype {proto1} => {swingSword}
  swingSword() {
    return this.swung;
  },
};

/*
Ninja.prototype.swingSword = function() {
    return this.swung;
};
*/

// let ninja = new Ninja();

// console.log(ninja.swingSword());
console.log(ninja.proto1());

// Given the code below,  create a `ninjaB` object **without** direct access to the `Ninja` constructor function. Explain your logic and why your code works.

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };
  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = Object.create(ninjaA)
console.log(ninjaA.constructor === ninjaB.constructor) // => true

// Create four variations of object creation patterns for the following Pet type

// Factory Function
// function createPet(animal, name) {
//   return {
//     animal,
//     name,

//     sleep() {
//       console.log(`I am sleeping`);
//     },

//     wake() {
//       console.log(`I am awake`);
//     }
//   }
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// // OLOO Pattern
// let PetPrototype = {
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },

//   sleep() {
//     console.log(`I am sleeping`);
//   },

//   wake() {
//     console.log(`I am awake`);
//   }
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// // Constructor & Prototypes
// function Pet(animal, name) {
//   this.animal = animal;
//   this.name = name;
// }

// Pet.prototype.sleep = function() {
//   console.log(`I am sleeping`);
// }

// Pet.prototype.wake = function() {
//   console.log(`I am awake`);
// }

// let pudding = new Pet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// ES6 Class
class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  sleep() {
    console.log(`I am sleeping`);
  }

  wake() {
    console.log(`I am awake`);
  }
}

let pudding = new Pet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake
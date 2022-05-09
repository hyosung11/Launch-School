// let myObject = {};

// myObject[false] = 'one';
// myObject[7] = 'two';
// myObject[[1, 2, 3]] = 'three';

// console.log(Object.keys(myObject)); // ["7", "false", "1,2,3"]

// myObject['false']; // "one"
// myObject['7']; // "two"
// myObject['1,2,3']; // "three"

// // console.log(myObject);

// myObject['undefinedKey'] = undefined;
// console.log(myObject);

// // `Object.keys()` returns an array of the object's enumerable properties.
// console.log(Object.keys(myObject)); // [ '7', 'false', '1,2,3', 'undefinedKey' ]

// // `Object.getOwnPropertyNames()` returns an array of all properties regardless if they're enumerable or not.
// console.log(Object.getOwnPropertyNames(myObject)); // [ '7', 'false', '1,2,3', 'undefinedKey' ]

const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = Animal('Panthera leo');
console.log(lion);
// lion.sleep(); // TypeError
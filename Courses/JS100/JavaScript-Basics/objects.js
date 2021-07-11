// Retrieve a Value (Part 1)

// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// console.log(student.courses);
// [ 'biology', 'algebra', 'composition', 'ceramics' ]

// console.log(student.locker) // undefined

// Retrieve a Value (Part 2)
// Given the below object jane, write code that retrieves the country in which Jane is located.

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus',
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country) // Denmark

// Add a Property

// Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties `'age'` and `'favorite food'` to the` fido` object.

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// console.log(fido['age'] = 7) // Add property 'age'.
// console.log(fido['favorite food'] = 'monkey chips') // Add property 'favorite food'.

// Greetings From Jane

// Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

// console.log(jane.greet('Bobby')); // Hej, Bobby!

// Dot Notation vs Bracket Notation
// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Snippet 1:
// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // { prefix: 'Pacific' }

// Snippet 2
// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // { Indian: 'Pacific' }

// Is it true?
// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function () {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }

// Car Keys

// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);

console.log(keys); // ['manufacturer', 'model', 'year', 'range', 'seats'];

// Our solution leverages the Object.keys() method, which returns an array of a given object's own properties. You can achieve the same by means of a for...in loop, pushing each object key into an array:

let keys = [];

for (let property in vehicle) {
  keys.push(property);
}

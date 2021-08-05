/* JS100 - JavaScript Basics > Objects > 8. Convert an object to a nested array

Convert an object to a nested array

Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// let nestedPerson = Object.entries(person);

let nestedPerson = [];

for (property in person) {
  nestedPerson.push([property, person[property]]);
}

console.log(nestedPerson);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
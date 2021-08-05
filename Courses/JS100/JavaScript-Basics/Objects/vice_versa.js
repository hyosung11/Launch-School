/* JS100 - JavaScript Basics > Objects > 9. ...and vice versa

...and vice versa

Write code that does the reverse, starting from a nested array of pairs and building an object.
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let object = Object.fromEntries(nestedArray);

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
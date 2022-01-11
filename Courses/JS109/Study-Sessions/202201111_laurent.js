/* edited Laurent's blog post about debugging */


/* Consonants Length

Count the length of all the contiguous consonants of a string. A single consonant is a contiguous string of length 1.
Return an object that holds the count value as key and all the strings of that length as an array.

PROBLEM
- input: string
- output: object with count value as key and array of strings of that length as an array

- Rules
- return contiguous consonants from a string
  - in the form of an object with the length of the consonants as the key and the string of that length as an array
- a single consonant is a contiguous string of length 1
- ignore punctuation
- ignore case
- if input is undefined return null
- if input is an empty string return object with key of 0

EXAMPLES
- 'b' => { 1: ["b"] }
- 'banana' => { 1: ['b', 'n', 'n']}

DATA STRUCTURE
- input: string
- intermediary: array and object
- output: object (with a nested array)

ALGORITHM
- input string
- initialize `consonants` to 'b..z'
- initialize `result` to empty object
- initialize consonantsArray to empty array
- initialize `consonantString` to empty string
- split string into chars
  - iterate over chars
    - if char is a consonant
      - add to consonantString
    - if char is not a consonant
      - reassign consonantString to empty string
    - push `consonantString` into consonantsArray
iterate over the consonantsArray
  - add length of string as key and consonant strings as an array of values
- return object with nested array
*/

// Laurent's Version
// function consonantsLength(string) {
//   let result = {};

//   if (string === undefined) return null;

//   string = string.replace(/[^bcdfghjklmnpqrstvwxyz]+/gi, " ");
//   let charsArray = string.split(" ").filter(chars => chars.length !== 0);

//   charsArray.forEach(chars => {
//     if (!result[chars.length]) result[chars.length] = [chars];
//     else result[chars.length].push(chars);
//   })

//   return result;
// }

// function consonantsLength(string) {
//   let consonants = 'bcdfghjklmnpqrstvwxyz';
//   let result = {};
//   let consonantsArray = [];
//   let consonantString = '';

//   string.split('').forEach(char => { // f l y i n g
//     if (consonants.includes(char.toLowerCase())) {
//       consonantString += char; // 'fly'
//     } else {
//       if (consonantString.length > 0) consonantsArray.push(consonantString);
//       consonantString = '';
//     }
//   });

//   if (consonantString.length > 0) consonantsArray.push(consonantString);
//   // [ 'fly', 'ng' ] => { 2:[ "ng" ], 3: [ "fly" ] };
//   // for (let idx = 0; idx < consonantsArray.length; idx++) {
//   //   let string = consonantsArraydx];
//   //   console.log(string)
//   //   let value = string.length;
//   //   console.log(value)
//   //   result = `${value}: [${string}]`
//   // }
//   // console.log(consonantsArray)
  consonantsArray.forEach(element => { // element = "fly"
    result[element.length] ? result[element.length].push(element) : result[element.length] = [element];
  })

//   return result; // { 3: 1, 2: 1 }
// }

// console.log(consonantsLength()); // null
// console.log(consonantsLength("")); // {}
// console.log(consonantsLength("a")); // {}
// console.log(consonantsLength("i")); // {}
// console.log(consonantsLength("'")); // {}
// console.log(consonantsLength("b")); // { 1: ["b"] }
// console.log(consonantsLength("flying")); // { 2:[ "ng" ], 3: [ "fly" ] };
// console.log(consonantsLength("banana")); // { 1:[ "b", "n", "n" ] }
// console.log(consonantsLength("It's Mario's party")); // { 1: [ "t", "s", "M", "r", "s", "p" ], 3: [ "rty" ] }

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// let produceKeyValues = Object.entries(produce);
// console.log(produceKeyValues);
// [
//   ['apple', 'Fruit'],
//   ['carrot', 'Vegetable'],
//   ['pear', 'Fruit'],
//   ['broccoli', 'Vegetable'],
// ];
// let onlyVegetables = {};

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   // console.log(key, value, keyValue)
// // apple Fruit [ 'apple', 'Fruit' ]
// // carrot Vegetable [ 'carrot', 'Vegetable' ]
// // pear Fruit [ 'pear', 'Fruit' ]
// // broccoli Vegetable [ 'broccoli', 'Vegetable' ]

//   if (value === 'Vegetable') {
//     // console.log(value);
//     // Vegetable
//     // Vegetable;
//     onlyVegetables[key] = value;
//   }
// });
// // populate the `onlyVegetables` with the { key: 'value' }
// onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);

let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  if (value === 'Vegetable') {
    // `onlyVegetables is an empty object until the `if` statement evaluates to true
    // add the name of the key 'carrot' and its value 'Vegetable' to the `onlyVegetables` at the same time -> this is the part I didn't understand before
    onlyVegetables[key] = value;
  }
});
// populate the `onlyVegetables` with the { key: 'value' }
onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}